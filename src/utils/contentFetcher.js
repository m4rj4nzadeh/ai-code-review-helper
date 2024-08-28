import { fetchPRFiles } from '../services/githubService.js';

export async function fetchContentFromPR(octokit, owner, repo, pull_number) {
    const files = await fetchPRFiles(owner, repo, pull_number);
    const fileContents = await Promise.all(
        files.map(file => octokit.repos.getContent({ owner, repo, path: file.filename }))
    );
    
    return fileContents
        .map(content => Buffer.from(content.data.content, 'base64').toString('utf-8'))
        .join('\n');
}
