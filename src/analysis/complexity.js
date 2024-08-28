function analyzeCodeComplexity(code) {
    const complexityPatterns = [
        {
            pattern: /(if\s*\(.*\)\s*{.*})/g,
            message: "Consider simplifying complex conditional statements.",
        },
        {
            pattern: /(for\s*\(.*;.*;.*\)\s*{.*})/g,
            message: "Consider refactoring long or nested loops for better readability.",
        }
    ];

    let complexityIssues = [];

    complexityPatterns.forEach(({ pattern, message }) => {
        if (pattern.test(code)) {
            complexityIssues.push(message);
        }
    });

    return complexityIssues.length > 0 ? complexityIssues : ["No significant complexity issues detected."];
}

export { analyzeCodeComplexity };
