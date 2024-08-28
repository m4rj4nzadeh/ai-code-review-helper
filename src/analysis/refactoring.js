const refactoringPatterns = [
    {
        pattern: /var\s+/g,
        message: "Consider replacing 'var' with 'let' or 'const' for block-scoped variable declarations.",
    },
    {
        pattern: /function\s+\w+\s*\(.*\)\s*{[^}]*}/g,
        message: "Consider using arrow functions for shorter and more concise function expressions.",
    }
];

function provideRefactoringSuggestions(code) {
    let suggestions = [];

    refactoringPatterns.forEach(({ pattern, message }) => {
        if (pattern.test(code)) {
            suggestions.push(message);
        }
    });

    return suggestions.length > 0 ? suggestions : ["No refactoring suggestions needed."];
}

export { provideRefactoringSuggestions };
