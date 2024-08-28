
function enforceCodeStyle(code) {
    const stylePatterns = [
        {
            pattern: /;\s*$/gm,
            message: "Ensure consistent use of semicolons at the end of statements.",
        },
        {
            pattern: /\t/g,
            message: "Use spaces instead of tabs for consistent indentation.",
        }
    ];

    let styleSuggestions = [];

    stylePatterns.forEach(({ pattern, message }) => {
        if (pattern.test(code)) {
            styleSuggestions.push(message);
        }
    });

    return styleSuggestions.length > 0 ? styleSuggestions : ["Code style is consistent."];
}

export { enforceCodeStyle };
