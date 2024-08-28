function detectSecurityVulnerabilities(code) {
    const securityPatterns = [
        {
            pattern: /eval\(.+\)/g,
            message: "Avoid using eval() as it can lead to code injection vulnerabilities.",
        },
        {
            pattern: /innerHTML\s*=\s*.+;/g,
            message: "Using innerHTML can expose your code to XSS attacks. Consider using textContent or a safer method.",
        }
    ];

    let vulnerabilities = [];

    securityPatterns.forEach(({ pattern, message }) => {
        if (pattern.test(code)) {
            vulnerabilities.push(message);
        }
    });

    return vulnerabilities.length > 0 ? vulnerabilities : ["No significant security issues detected."];
}

export { detectSecurityVulnerabilities };
