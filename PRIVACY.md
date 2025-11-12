# Privacy Policy

**Last Updated**: 2025-11-12

## Our Privacy Commitment

AlternateFutures is committed to protecting your privacy and building censorship-resistant, decentralized applications. This document outlines our privacy principles and practices for this React template.

## Privacy-First Philosophy

We believe in:

- **Zero Knowledge by Default** - We don't collect what we don't need
- **Local-First Architecture** - Your data stays on your device
- **Transparency** - Clear documentation of all data handling
- **User Control** - You own and control your data
- **No Surveillance** - No tracking, analytics, or profiling
- **Decentralization** - No central authority controlling your data

## What This Template Does NOT Do

✅ **Zero Tracking**: No analytics, tracking pixels, or user monitoring
✅ **Zero Cookies**: No cookies or persistent identifiers
✅ **Zero Third-Party Tracking**: No external tracking services
✅ **Zero Personal Data Collection**: No forms, accounts, or data storage
✅ **Zero Server-Side Storage**: Static deployment, no backend database
✅ **Zero Telemetry**: No usage statistics or error reporting
✅ **Zero Fingerprinting**: No browser fingerprinting techniques
✅ **Zero External API Calls**: No unnecessary external service calls

## How This Template Protects Privacy

### 1. Technical Implementation

#### Content Security Policy (CSP)
We enforce a strict Content Security Policy that:
- Blocks unauthorized external scripts
- Prevents inline script execution
- Restricts resource loading to trusted sources
- Prevents clickjacking attacks

```
Content-Security-Policy: default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' https:;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self'
```

#### HTTP Security Headers
- **X-Content-Type-Options**: nosniff (prevents MIME sniffing)
- **X-Frame-Options**: DENY (prevents clickjacking)
- **X-XSS-Protection**: 1; mode=block (enables XSS protection)
- **Referrer-Policy**: strict-origin-when-cross-origin (minimizes referrer leakage)
- **Permissions-Policy**: Restricts access to sensitive browser features

#### Filesystem Access Restrictions
Vite is configured to:
- Deny access to `.env` files and environment variables
- Deny access to `.git` directories
- Deny access to `node_modules`
- Restrict filesystem access to the workspace only

### 2. Network Privacy

#### No External Tracking Domains
The template makes **zero** connections to:
- Google Analytics
- Facebook Pixel
- Mixpanel, Amplitude, Segment
- Hotjar, FullStory, LogRocket
- Any analytics or monitoring service

#### IPFS Deployment
When deployed on IPFS via AlternateFutures:
- **Content Addressing**: Files identified by cryptographic hashes (CIDs)
- **No IP Logging**: IPFS gateways may log IPs, but content is decentralized
- **Censorship Resistant**: Content cannot be taken down by a single entity
- **Immutable**: Once published, content cannot be altered

#### Referrer Policy
We use `strict-origin-when-cross-origin` to:
- Minimize information leakage to external sites
- Prevent full URL sharing with third parties
- Maintain privacy when navigating away from the site

### 3. Client-Side Privacy

#### No Local Storage Tracking
- No localStorage usage for tracking
- No sessionStorage for user identification
- No IndexedDB for persistent tracking
- No Service Workers for background tracking

#### No Browser Fingerprinting
- No canvas fingerprinting
- No WebGL fingerprinting
- No font enumeration
- No device enumeration
- No battery API usage

## Privacy for Developers Using This Template

### When You Deploy

When you deploy a site based on this template, you are responsible for:

1. **Adding Your Own Privacy Policy** - Create a privacy policy that reflects your specific use case
2. **Maintaining Privacy Standards** - Do not add tracking or analytics without explicit user consent
3. **Being Transparent** - Disclose any data collection or third-party services you add
4. **Respecting User Rights** - Honor user requests for data access, correction, or deletion

### What You Should Disclose

If you modify this template, disclose:
- Any analytics or tracking services you add
- Any cookies or local storage usage
- Any data collection or form submissions
- Any third-party integrations
- Your data retention policies
- Your data sharing practices

### GDPR Compliance

This template is designed to be GDPR-friendly:
- ✅ **Lawful Basis**: No processing of personal data by default
- ✅ **Data Minimization**: Collects zero unnecessary data
- ✅ **Purpose Limitation**: No purpose, no data
- ✅ **Storage Limitation**: Nothing to store
- ✅ **Integrity and Confidentiality**: Secure by default
- ✅ **Accountability**: Transparent and documented

### Other Privacy Regulations

This template is designed to comply with:
- **CCPA** (California Consumer Privacy Act)
- **LGPD** (Brazilian General Data Protection Law)
- **PIPEDA** (Canadian Personal Information Protection)
- **ePrivacy Directive** (EU Cookie Law)

## Decentralized Deployment Privacy

### IPFS Privacy Considerations

When deploying on IPFS:

**Benefits:**
- ✅ No central server logging requests
- ✅ Content-addressed (CIDs) instead of URLs
- ✅ Redundant storage across nodes
- ✅ Censorship resistant

**Considerations:**
- ⚠️ IPFS gateways may log IP addresses (use your own gateway or Tor)
- ⚠️ Content is public once published (do not include private information)
- ⚠️ Content is immutable (cannot be edited, only versioned)

**Best Practices:**
- Use your own IPFS gateway to avoid third-party logging
- Access via Tor for maximum anonymity
- Pin content to trusted nodes
- Use IPNS for updateable content

### Traditional Hosting Privacy

If deploying to traditional hosts (Netlify, Cloudflare Pages, etc.):

**Host Privacy Policies:**
- Review your hosting provider's privacy policy
- Understand their logging and data retention practices
- Consider privacy-friendly hosts

**Server Logs:**
- Most hosts log IP addresses, user agents, and access times
- Consider using a privacy-respecting CDN
- Enable HTTPS and HSTS

## User Rights

Even though this template collects no data, users have the right to:

- **Access**: Request information about data processing (none in this case)
- **Rectification**: Request correction of personal data (none collected)
- **Erasure**: Request deletion of personal data ("right to be forgotten")
- **Data Portability**: Receive their data in a machine-readable format
- **Object**: Object to data processing
- **Withdraw Consent**: Withdraw consent at any time

## Third-Party Services

This template includes **zero** third-party services by default. If you add services:

- **Disclose**: Clearly inform users about third-party services
- **Review**: Read privacy policies of services you integrate
- **Minimize**: Only use essential services
- **Consent**: Obtain user consent before loading third-party scripts

## Changes to This Privacy Policy

We may update this privacy policy to reflect:
- Changes in privacy best practices
- New privacy regulations
- Community feedback
- Technical improvements

**Notification of Changes:**
- Updates will be documented in CHANGELOG.md
- The "Last Updated" date will be changed
- Major changes will be announced via GitHub releases

## Contact & Questions

For privacy-related questions:

- **GitHub Issues**: [Open a privacy-related issue](https://github.com/alternatefutures/template-cloud-react/issues/new/choose)
- **Security Concerns**: See [SECURITY.md](SECURITY.md) for reporting vulnerabilities
- **General Questions**: Use [GitHub Discussions](https://github.com/alternatefutures/template-cloud-react/discussions)

## Privacy Audit

This template has been designed with privacy as a first-class concern:

| Check | Status | Notes |
|-------|--------|-------|
| No tracking scripts | ✅ Pass | Zero analytics or tracking code |
| No cookies | ✅ Pass | No cookies set |
| No local storage tracking | ✅ Pass | No persistent identifiers |
| No third-party requests | ✅ Pass | No external API calls |
| CSP implemented | ✅ Pass | Strict Content Security Policy |
| Security headers | ✅ Pass | All recommended headers |
| HTTPS ready | ✅ Pass | HSTS headers configured |
| No fingerprinting | ✅ Pass | No fingerprinting techniques |
| Open source | ✅ Pass | Fully auditable code |

## Privacy Resources

Learn more about privacy best practices:

- [OWASP Privacy Guide](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/09-Testing_for_Weak_Cryptography/README)
- [GDPR Official Text](https://gdpr-info.eu/)
- [Privacy Tools](https://www.privacytools.io/)
- [EFF Privacy Badger](https://privacybadger.org/)
- [Decentralized Web Primer](https://dweb-primer.ipfs.io/)

## Summary

**This template collects ZERO personal data by default.**

- ✅ No analytics or tracking
- ✅ No cookies or identifiers
- ✅ No third-party services
- ✅ No data storage or transmission
- ✅ Decentralized and censorship-resistant
- ✅ Fully transparent and auditable
- ✅ Designed for maximum privacy

**Your privacy is not for sale. Your data is not our product.**

---

*This privacy policy reflects the AlternateFutures commitment to building a more private, decentralized, and censorship-resistant web.*
