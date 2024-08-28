import { Octokit } from "@octokit/rest";
import dotenv from 'dotenv';

dotenv.config();

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function fetchPRFiles(owner, repo, pull_number) {
    const { data: files } = await octokit.pulls.listFiles({ owner, repo, pull_number });
    return files;
}
