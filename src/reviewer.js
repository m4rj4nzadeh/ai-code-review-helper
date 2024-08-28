import { detectSecurityVulnerabilities } from './analysis/security.js';
import { provideRefactoringSuggestions } from './analysis/refactoring.js';
import { analyzeCodeComplexity } from './analysis/complexity.js';
import { enforceCodeStyle } from './analysis/styleEnforcement.js';
import { fetchContentFromPR } from './utils/contentFetcher.js';
import { generateAIReview } from './services/openAIService.js';
import { Octokit } from "@octokit/rest";
import dotenv from 'dotenv';

dotenv.config();

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function analyzePR(owner, repo, pull_number) {
    try {
        const content = await fetchContentFromPR(octokit, owner, repo, pull_number);
        
        const securityIssues = detectSecurityVulnerabilities(content);
        const refactoringSuggestions = provideRefactoringSuggestions(content);
        const complexityIssues = analyzeCodeComplexity(content);
        const styleSuggestions = enforceCodeStyle(content);
        const aiReview = await generateAIReview(content);

        return {
            aiReview,
            securityIssues,
            refactoringSuggestions,
            complexityIssues,
            styleSuggestions,
        };
    } catch (error) {
        console.error("Error analyzing PR:", error);
        throw error;
    }
}
