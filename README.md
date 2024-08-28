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
 Overall, the code structure and implementation look good. Here are some suggestions for improvements:

1. **Error Handling**: Add error handling in the resolver functions to catch and handle any errors that may occur during data retrieval or processing. This will provide a more robust and reliable API.

2. **Input Validation**: Validate input arguments in resolver functions to ensure that the provided data is in the expected format. For example, you can check if the category provided in `getMenuItemsByCategory` actually exists in the structuredMenu data.

3. **Separation of Concerns**: Consider separating the GraphQL schema definition and the resolver functions into different modules for better organization and maintainability. This can be especially helpful as the schema and resolver logic grow more complex.

4. **Comments**: Add more descriptive comments to explain the purpose and functionality of each part of the code. This will make it easier for other developers (including your future self) to understand the code.

5. **Unit Testing**: Write unit tests to

Security Issues:
 No significant security issues detected.

Refactoring Suggestions:
 No refactoring suggestions needed.

Complexity Issues:
 No significant complexity issues detected.

Style Suggestions:
 Ensure consistent use of semicolons at the end of statements.
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

