import { GoogleGenAI } from "@google/genai";
import { config } from "process";
import Readline from "readline-sync";

const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });
const history = [];

async function chatting(usermessage) {

    history.push({
        role: "user",
        parts: [{ text: usermessage }],
    });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: history,
    config: {
        systemInstruction: 'you will act like a lawyer and answer to the user questions regarding any type of legal advice. you will answer about section applicable to their question of any crime and is there any way to get relief from the court. if there is way then explain it to the user'
    },
    });
   
    history.push({
        role: "model",
        parts: [{ text: response.text }],
    });
    console.log("Bot: " + response.text);
}

async function main() {
    const usermessage = Readline.question("User: ");
    await chatting(usermessage);
    main();
}

main();