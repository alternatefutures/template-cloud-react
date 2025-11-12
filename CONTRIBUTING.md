# Contributing to AlternateFutures React Template

Thank you for your interest in contributing to the AlternateFutures React Template! This project is committed to open source, privacy, and censorship resistance. We welcome contributions from everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Our Values](#our-values)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Our Values

Before contributing, please understand our core principles:

### 1. Privacy First
- **No tracking or analytics** - We never add telemetry, tracking pixels, or user monitoring
- **Minimal data collection** - Only collect data that's absolutely necessary
- **Transparency** - Be explicit about any data handling or external services
- **Local-first** - Prefer solutions that don't require external servers

### 2. Censorship Resistance
- **Decentralized deployment** - Support IPFS and other decentralized platforms
- **No single points of failure** - Design for redundancy and resilience
- **Open protocols** - Use open, interoperable standards
- **Self-hosting friendly** - Make it easy to run independently

### 3. Open Source
- **Transparent development** - All discussions and decisions happen in the open
- **Accessible code** - Write clear, well-documented code
- **Community-driven** - Listen to and incorporate community feedback
- **Free as in freedom** - Respect user freedom and control

### 4. Security
- **Secure by default** - Security should not be optional
- **Regular updates** - Keep dependencies current
- **Vulnerability disclosure** - Follow responsible disclosure practices
- **Defense in depth** - Multiple layers of security

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title** - Describe the issue concisely
- **Steps to reproduce** - Detailed steps to recreate the bug
- **Expected behavior** - What you expected to happen
- **Actual behavior** - What actually happened
- **Environment** - OS, browser, Node.js version, etc.
- **Screenshots** - If applicable, add screenshots

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md) when creating issues.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear title** - Describe the enhancement
- **Provide detailed description** - Explain the feature and its benefits
- **Explain rationale** - Why is this enhancement needed?
- **Consider alternatives** - What other solutions did you consider?
- **Align with values** - Explain how it supports privacy/decentralization

Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md).

### Security Vulnerabilities

**Do not** open public issues for security vulnerabilities. Instead:

1. Review our [Security Policy](SECURITY.md)
2. Report vulnerabilities privately through GitHub Security Advisories
3. Allow time for the issue to be addressed before public disclosure

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `documentation` - Documentation improvements

### Pull Requests

We actively welcome your pull requests! See the [Pull Request Process](#pull-request-process) below.

## Development Setup

### Prerequisites

- **Node.js** 20.19+ or 22.12+
- **pnpm** (recommended) or npm
- **Git**

### Local Development

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/template-cloud-react.git
   cd template-cloud-react
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/alternatefutures/template-cloud-react.git
   ```

4. **Install dependencies**:
   ```bash
   pnpm install
   ```

5. **Start development server**:
   ```bash
   pnpm run dev
   ```

6. **Build for production**:
   ```bash
   pnpm run build
   ```

7. **Run linter**:
   ```bash
   pnpm run lint
   ```

### Project Structure

```
/
├── .github/              # GitHub configuration
│   ├── workflows/        # CI/CD workflows
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   └── dependabot.yml    # Dependabot config
├── public/               # Static assets
│   ├── _headers          # Security headers
│   └── afMark.svg        # Favicon
├── src/                  # Source code
│   ├── assets/           # Images, fonts, etc.
│   ├── App.tsx           # Main component
│   ├── App.css           # Styles
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

## Pull Request Process

### Before Submitting

1. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our [Coding Standards](#coding-standards)

3. **Test your changes**:
   ```bash
   pnpm run build
   pnpm run lint
   ```

4. **Update documentation** if needed

5. **Commit your changes** following [Commit Message Guidelines](#commit-message-guidelines)

### Submitting the PR

1. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub

3. **Fill out the PR template** completely

4. **Link related issues** using "Fixes #123" or "Closes #456"

5. **Request review** from maintainers

### PR Requirements

- ✅ Passes all CI checks (linting, build, security scans)
- ✅ Includes tests if applicable
- ✅ Updates documentation
- ✅ Follows coding standards
- ✅ Has clear commit messages
- ✅ No merge conflicts
- ✅ Aligns with project values (privacy, decentralization, security)

### Review Process

- Maintainers will review your PR within 7 days
- Address feedback by pushing additional commits
- Once approved, a maintainer will merge your PR
- Your contribution will be included in the next release

## Coding Standards

### TypeScript

- **Use TypeScript** for all new code
- **Enable strict mode** - No `any` types without justification
- **Type everything** - Explicit types for function parameters and returns
- **Use interfaces** - Prefer interfaces over types for objects

### React

- **Functional components** - Use hooks, not class components
- **Component naming** - PascalCase for components
- **Props typing** - Always type component props
- **Hooks** - Follow Rules of Hooks

### Code Style

- **ESLint** - Follow the existing ESLint configuration
- **Formatting** - Consistent indentation (2 spaces)
- **Naming** - camelCase for variables, PascalCase for components
- **Comments** - Explain "why", not "what"
- **Imports** - Group imports: React, third-party, local

### Example

```typescript
import { useState } from 'react';
import externalLib from 'external-lib';
import { LocalComponent } from './LocalComponent';

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

function Card({ title, description, onClick }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semicolons, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `ci` - CI/CD changes
- `security` - Security improvements

### Examples

```
feat(auth): add decentralized authentication support

Implement IPFS-based authentication to eliminate centralized
identity providers and enhance privacy.

Closes #123
```

```
fix(headers): correct CSP directive for font sources

The previous CSP was blocking custom fonts. This updates
the font-src directive to allow data: URIs.

Fixes #456
```

```
docs(privacy): add privacy policy documentation

Create comprehensive PRIVACY.md explaining data handling,
user rights, and GDPR compliance.
```

## Testing

### Manual Testing

Before submitting:

1. **Build succeeds**: `pnpm run build`
2. **No linting errors**: `pnpm run lint`
3. **Visual testing**: Check the UI in development mode
4. **Browser testing**: Test in Chrome, Firefox, Safari (if possible)
5. **Responsive design**: Test mobile and desktop layouts

### Automated Testing

We use:
- **ESLint** - Code quality
- **TypeScript** - Type checking
- **CodeQL** - Security scanning
- **Dependabot** - Dependency updates

## Documentation

### When to Update Docs

- Adding new features → Update README.md
- Changing behavior → Update relevant docs
- Security changes → Update SECURITY.md
- Privacy implications → Update PRIVACY.md
- Breaking changes → Update CHANGELOG.md

### Documentation Style

- **Clear and concise** - Avoid jargon
- **Code examples** - Show, don't just tell
- **Up to date** - Keep docs in sync with code
- **Accessible** - Use simple language

## Community

### Communication Channels

- **GitHub Issues** - Bug reports, feature requests
- **GitHub Discussions** - General questions, ideas
- **Pull Requests** - Code contributions

### Getting Help

- Check existing documentation
- Search GitHub Issues
- Open a new issue with the `question` label
- Be patient and respectful

### Recognition

Contributors are recognized in:
- Git commit history
- Release notes
- Project documentation

## License

By contributing, you agree that your contributions will be licensed under the GNU General Public License v3.0.

---

**Thank you for contributing to AlternateFutures!** Your efforts help build a more private, decentralized, and censorship-resistant web.
