import { MongoClient } from 'mongodb';
import { UAParser } from 'ua-parser-js';

let cachedClient = null;
let cachedDb = null;

async function connectToDB() {
    if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };

    const client = await MongoClient.connect(process.env.MONGO_URI);

    const db = client.db('portfolio');
    cachedClient = client;
    cachedDb = db;

    return { client, db };
}


export default async function interaction(req, res) {
    const { method } = req;

    if (method === 'POST') {
        const { type, itemId, name, email, customMessage, navigatorData } = req.body;
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const userAgent = req.headers['user-agent'];
        const parser = new UAParser(userAgent);
        const ua = parser.getResult();

        const { db } = await connectToDB();

        const interactionData = {
            type,
            itemId,
            name: name || null,
            email: email || null,
            message: customMessage || null,
            ip,
            userAgent,
            browserName: ua.browser.name,
            browserVersion: ua.browser.version,
            osName: ua.os.name,
            osVersion: ua.os.version,
            deviceType: ua.device.type,
            deviceVendor: ua.device.vendor,
            deviceModel: ua.device.model,
            ...navigatorData,
            interactionTimestamp: new Date(),
        };

        // Save full interaction
        await db.collection('interactions').insertOne(interactionData);

        // Update praise/like count
        const counterCollection = db.collection('counters');
        const field = type === 'project' ? 'likes' : 'praises';

        await counterCollection.updateOne(
            { itemId, type },
            { $inc: { [field]: 1 }, $setOnInsert: { createdAt: new Date() } },
            { upsert: true }
        );

        res.status(200).json({ message: 'Interaction saved.' });
    } else if (method === 'GET') {
        const { db } = await connectToDB();
        const counterCollection = db.collection('interactions');

        // Aggregate to get counts of each itemId
        const itemCounts = await counterCollection.aggregate([
            { $match: { type: 'like' } }, // Match documents with type 'like'
            { $group: { _id: "$itemId", count: { $sum: 1 } } }, // Group by itemId and count
            { $project: { itemId: "$_id", count: 1, _id: 0 } } // Project the desired fields
        ]).toArray();

        // Transform the array into a map-like object
        const itemCountsMap = itemCounts.reduce((acc, { itemId, count }) => {
            acc[itemId] = count;
            return acc;
        }, {});
        return res.status(200).json(itemCountsMap);
    } else {
        return res.status(405).json({ message: 'Only POST and GET requests allowed' });
    }
}
