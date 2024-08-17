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

