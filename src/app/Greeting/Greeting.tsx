/* eslint-disable no-loop-func */
"use client"
import React, {useEffect, useState} from 'react';
import './greetings.css'


const greetings = [
    "Hello, I am Sourabh", // English
    "नमस्ते, मैं सौरभ हूँ", // Hindi
    "नमस्ते, माझं नाव सौरभ आहे", // Marathi
    "નમસ્તે, હું સૌરભ છું", // Gujarati
    "ನಮಸ್ಕಾರ, ನಾನು ಸೌರಭ", // Kannada
    "হ্যালো, আমি সৌরভ", // Bengali
    "வணக்கம், நான் சௌரப்", // Tamil
    "హలో, నా పేరు సౌరభ్", // Telugu
    "你好，我是Sourabh", // Chinese
    "안녕하세요, 저는 소라브입니다", // Korean
    "Hola, soy Sourabh", // Spanish
    "Bonjour, je suis Sourabh", // French
    "Привет, я Сураб", // Russian
    "שלום, אני סורב", // Hebrew
];


function Greeting() {
    const [message, setCurrMessage] = useState(greetings[0])

    async function eraseAndRedrawGreeting() {
        let index = -1;
        let currMessage = greetings[++index];
        while (true) {
            for (let i = currMessage.length - 1; i >= 0; i--) {
                await new Promise<void>(resolve => setTimeout(() => {
                    currMessage = currMessage.substring(0, i);
                    setCurrMessage(currMessage);
                    resolve();
                }, 6 * (currMessage.length - i)));
            }
            setCurrMessage(" ")
            await new Promise<void>(resolve => setTimeout(()=>{
                if(index < greetings.length - 1){
                    currMessage = greetings[index++];
                    // setCurrMessage(currMessage);
                }else{
                    index = 0;
                    currMessage = greetings[index++];
                    // setCurrMessage(currMessage)
                }
                resolve()
            },300))
            
            let tempMessage = ""
            for (let i = 0; i <= currMessage.length; i++) {
                await new Promise<void>(resolve => setTimeout(() => {
                    tempMessage = tempMessage.concat(currMessage.charAt(i))
                    setCurrMessage(tempMessage);
                    resolve();
                }, 3 * (currMessage.length - i)));
            }
            await new Promise<void>(resolve => {
                setTimeout(()=> {
                    resolve();
                }, 1500)
            })
        }
    }

    useEffect(() => {
        eraseAndRedrawGreeting().then()
    }, []);


    return (
        <div className="container">
            <div className="greeting" >{message}</div>
        </div>

    )
}

export default Greeting;