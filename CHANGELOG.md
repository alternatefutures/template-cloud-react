# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Open Source Documentation**
  - LICENSE file (GNU GPL v3.0)
  - CONTRIBUTING.md with comprehensive contribution guidelines
  - CODE_OF_CONDUCT.md with community standards and privacy/security additions
  - PRIVACY.md with detailed privacy policy and practices
  - GOVERNANCE.md for transparent decision-making
  - CHANGELOG.md for version tracking

- **GitHub Community Files**
  - Issue templates: Bug report, feature request, documentation, question
  - Pull request template with privacy/security checklist
  - Issue template configuration with contact links

- **Accessibility Improvements**
  - Skip-to-main-content link for keyboard navigation
  - Proper alt text for all images
  - ARIA labels and roles for better screen reader support
  - Semantic HTML improvements (main, banner roles)
  - Image width/height attributes for better layout stability
  - External links now open in new tab with rel="noopener noreferrer"
  - Meta description for better SEO and accessibility

- **CI/CD & Automation**
  - GitHub Actions build and test workflow
  - Automated dependency updates via Dependabot (npm + GitHub Actions)
  - CodeQL security scanning (already present)

- **Security Enhancements**
  - Comprehensive security headers in index.html
  - Content Security Policy (CSP) configuration
  - Vite security configurations (filesystem restrictions)
  - Production _headers file for deployment platforms
  - SECURITY.md with security policy and best practices

### Changed
  - Updated all references in code and documentation
  - Consistent branding as "AlternateFutures" (one word)

- **Dependencies**: Updated all dependencies to latest versions
  - Vite: 4.3.2 → 7.2.2 (addresses 18+ security vulnerabilities)
  - React: 18.2.0 → 19.2.0
  - TypeScript: 5.0.2 → 5.9.3
  - All dev dependencies updated

- **Accessibility**: Improved Card component
  - Added descriptive aria-labels
  - Made decorative icons presentation-only
  - Added explicit width/height attributes

- **Documentation**: Enhanced README.md
  - Updated deployment instructions
  - Added security and privacy sections
  - Improved project structure documentation

### Fixed
- Missing LICENSE file (was referenced but not present)
- Accessibility issues with images lacking alt text
- Missing semantic HTML elements
- Card icons not properly marked as decorative
- Missing meta description

### Security
- Addressed 18 Dependabot security alerts
- Enabled automated security scanning (CodeQL)
- Configured Dependabot version updates for proactive security
- Added comprehensive security headers
- Implemented strict Content Security Policy
- Added filesystem access restrictions in Vite config

## Previous Releases

### [0.0.0] - 2024-10-08

Initial template release with:
- React 18 + TypeScript
- Vite 4 for fast development
- Basic component structure
- ESLint configuration

---

## How to Use This Changelog

### For Maintainers

When making changes, update this file under `[Unreleased]` using these categories:

- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be-removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security improvements or vulnerability fixes

### For Contributors

Check this file to see:
- What's been recently added or changed
- What's planned for the next release
- Version history and breaking changes

### Version Format

- **Major** (x.0.0) - Breaking changes
- **Minor** (0.x.0) - New features, backward compatible
- **Patch** (0.0.x) - Bug fixes, backward compatible

---

[Unreleased]: https://github.com/alternatefutures/template-cloud-react/compare/v0.0.0...HEAD
[0.0.0]: https://github.com/alternatefutures/template-cloud-react/releases/tag/v0.0.0
