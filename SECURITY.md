# Security Policy

## Overview

This document outlines the security measures implemented in this React + Vite application and provides guidance for maintaining security best practices.

## Implemented Security Measures

### 1. Dependency Security

All dependencies have been updated to their latest versions to address known vulnerabilities:

- **Vite**: Updated to v7.2.2+ (addresses multiple filesystem access vulnerabilities)
- **React**: Latest stable version
- **TypeScript**: Latest stable version
- **All dev dependencies**: Updated to latest versions

### 2. Vite Security Configurations

The following security configurations have been added to `vite.config.ts`:

- **Strict filesystem access**: Prevents access to files outside the workspace
- **Denied paths**: Blocks access to sensitive files (.env, .git, node_modules)
- **CORS protection**: Configured for secure cross-origin requests
- **Filename sanitization**: Prevents naming collisions that could lead to DOM clobbering attacks

### 3. HTTP Security Headers

Security headers have been implemented in multiple ways:

#### Meta Tags (index.html)
- `X-Content-Type-Options`: Prevents MIME type sniffing
- `X-Frame-Options`: Prevents clickjacking attacks
- `X-XSS-Protection`: Enables browser XSS protection
- `Referrer-Policy`: Controls referrer information leakage
- `Permissions-Policy`: Restricts access to browser features

#### Production Headers (public/_headers)
A comprehensive `_headers` file has been created for production deployments with:
- Content Security Policy (CSP)
- Strict Transport Security (HSTS) - ready to enable with HTTPS
- Cache control policies
- All the security headers listed above

### 4. Content Security Policy (CSP)

A CSP has been configured to:
- Allow scripts and styles only from the same origin
- Prevent inline script execution (with exceptions for Vite's dev mode)
- Restrict iframe embedding
- Control resource loading sources

**Note**: The CSP includes `'unsafe-inline'` for compatibility with Vite's development mode. Review and tighten this for production if possible.

## Security Best Practices

### For Developers

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm update
   ```

2. **Review Dependabot Alerts**
   - Check GitHub's Dependabot alerts regularly
   - Address high and critical vulnerabilities immediately

3. **Environment Variables**
   - Never commit `.env` files
   - Use `.env.example` for documentation
   - Prefix public environment variables with `VITE_`

4. **Code Reviews**
   - Review all PRs for security implications
   - Check for XSS, injection, and authentication issues
   - Validate all user inputs

5. **Build Process**
   - Regularly run `npm audit` in CI/CD
   - Use automated security scanning tools
   - Keep Node.js version updated

### For Deployment

1. **HTTPS Only**
   - Always deploy with HTTPS enabled
   - Enable HSTS header in production
   - Update the CSP `upgrade-insecure-requests` directive

2. **Platform-Specific Headers**
   - The `_headers` file works with Netlify, Cloudflare Pages
   - For other platforms, configure headers in their control panel

3. **Monitoring**
   - Enable security monitoring
   - Set up alerts for dependency vulnerabilities
   - Monitor for unusual traffic patterns

## Reporting Security Issues

If you discover a security vulnerability, please:

1. **Do not** open a public issue
2. Email security concerns to your security team
3. Provide detailed information about the vulnerability
4. Allow time for the issue to be addressed before public disclosure

## Security Checklist

- [x] Dependencies updated to latest versions
- [x] Vite security configurations implemented
- [x] HTTP security headers added
- [x] Content Security Policy configured
- [x] Filesystem access restrictions in place
- [x] Security documentation created
- [ ] Enable HSTS when HTTPS is configured
- [ ] Review and tighten CSP for production
- [ ] Set up automated security scanning
- [ ] Configure dependency update automation

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Vite Security Guide](https://vitejs.dev/guide/migration.html#security)
- [React Security Best Practices](https://react.dev/learn/security)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

## Last Updated

2025-11-12
