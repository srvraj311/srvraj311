export async function sendUserInteraction({ type, itemId, name = null, email = null, customMessage = null }) {
    const navigatorData = {
        language: navigator.language,
        languages: navigator.languages,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        platform: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth,
        cookiesEnabled: navigator.cookieEnabled,
        hardwareConcurrency: navigator.hardwareConcurrency,
        deviceMemory: navigator.deviceMemory || null,
        referrer: document.referrer,
        localTime: new Date().toISOString(),
    };

    await fetch('/api/interaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            type,
            itemId,
            name,
            email,
            customMessage,
            navigatorData,
        }),
    });
}


export const getLikes = async () => {
    try {
        const response = await fetch(`/api/interaction`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch like count");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching like count:", error);
        return []; // Return an empty array if the fetch fails
    }
};
