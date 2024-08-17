#!/usr/bin/env node
import dotenv from 'dotenv';
import { program } from 'commander';
import { analyzePR } from './reviewer.js';

dotenv.config();

program
  .option('-o, --owner <type>', 'GitHub repository owner')
  .option('-r, --repo <type>', 'GitHub repository name')
  .option('-p, --pr <number>', 'Pull request number');

program.parse(process.argv);

const options = program.opts();

(async () => {
    if (!options.owner || !options.repo || !options.pr) {
        console.error('Please provide all required options: --owner, --repo, --pr');
        process.exit(1);
    }

    try {
        const review = await analyzePR(options.owner, options.repo, options.pr);
        console.log("AI-Powered Review:\n", review);
    } catch (error) {
        console.error("Error during review:", error.message);
        process.exit(1);
    }
})();
