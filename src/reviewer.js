import { Octokit } from "@octokit/rest";
import OpenAI from "openai";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Octokit with the GitHub token
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// Initialize OpenAI API with the API key directly from the environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzePR(owner, repo, pull_number) {
    try {
        // Get the list of files in the pull request
        const { data: files } = await octokit.pulls.listFiles({ owner, repo, pull_number });

        // Get the contents of the files
        const fileContents = await Promise.all(
            files.map(file => octokit.repos.getContent({ owner, repo, path: file.filename }))
        );

        // Concatenate the contents of all files
        const content = fileContents
            .map(content => Buffer.from(content.data.content, 'base64').toString('utf-8'))
            .join('\n');

        // Use the correct method for chat-based models
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",  // Update the model here
            messages: [
                { role: "system", content: "You are a code reviewer." },
                { role: "user", content: `Review the following code and suggest improvements:\n\n${content}` }
            ],
            max_tokens: 200,
        });

        // Return the AI's review
        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error analyzing PR:", error);
        throw error;
    }
}
