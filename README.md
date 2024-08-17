## AI-Powered Code Review Helper

**AI-Powered Code Review Helper** is an npm package that automates code reviews on GitHub pull requests using OpenAI's GPT models. This tool offers AI-driven insights and suggestions to improve code quality.

### Installation

Install globally:

```bash
npm install -g ai-code-review-helper
```

Or run directly with `npx`:

```bash
npx ai-code-review-helper --owner your-repo-owner --repo your-repo-name --pr 1
```

### Configuration

Create a `.env` file in your project root:

```plaintext
GITHUB_TOKEN=your_github_token
OPENAI_API_KEY=your_openai_api_key
```

### Usage

Run the tool from the command line:

```bash
ai-code-review-helper --owner your-repo-owner --repo your-repo-name --pr 1
```

```sample output
AI-Powered Review:
 Overall, the code looks well-structured and follows common practices for setting up a GraphQL schema. Here are some suggestions for improvements:

1. **Consistent Naming**: The naming convention for GraphQL types and fields is crucial for readability and maintainability. It's good to maintain consistency in naming throughout the schema. For example, you have `MenuItemType` and `CustomQueryResultType`, which are clear and descriptive. Consider applying this principle to all your type and field names.

2. **Input Validation**: Input validation is important to ensure data integrity. You are using `GraphQLNonNull` for the "search" argument in the custom query, which is great. Consider applying similar validation for other arguments where necessary to enforce required inputs.

3. **Error Handling**: Error handling is essential in GraphQL resolvers to provide meaningful feedback to clients. Add error handling logic in your resolvers to handle exceptions gracefully and return appropriate error messages back to the client.

4. **Documentation**: Adding comments and documentation to your
```

### GitHub Action Integration

Add to your GitHub Actions workflow:

```yaml
name: AI-Powered Code Review

on:
  pull_request:
    branches:
      - main

jobs:
  ai_review:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Run AI-Powered Code Review
        run: |
          npx ai-code-review-helper --owner ${{ github.repository_owner }} --repo ${{ github.event.repository.name }} --pr ${{ github.event.pull_request.number }}
```

### Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License.

