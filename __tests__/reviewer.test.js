const { analyzePR } = require('../src/reviewer');

test('analyzePR returns a review', async () => {
    const owner = 'your-repo-owner';
    const repo = 'your-repo-name';
    const pr = 1;

    // Mock dependencies and test behavior
    const review = await analyzePR(owner, repo, pr);
    expect(review).toBeDefined();
});
