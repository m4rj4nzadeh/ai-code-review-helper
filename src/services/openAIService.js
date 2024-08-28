import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateAIReview(content) {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are a code reviewer." },
            { role: "user", content: `Review the following code and suggest improvements:\n\n${content}` }
        ],
        max_tokens: 200,
    });

    return response.choices[0].message.content.trim();
}
