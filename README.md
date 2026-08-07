# JamLoop UI Automation Test Framework

## Overview

This repository contains Playwright-based UI automation tests created for the JamLoop UI challenge.

The automation framework validates critical user workflows including:

- Landing page navigation
- User authentication
- Campaign list functionality
- Campaign creation workflow
- Campaign validation and verification

The framework was built using:

- Playwright
- TypeScript
- Page Object Model (POM)
- pnpm package management

---

# Getting Started

## Prerequisites

Before running the automated tests, ensure the following tools are installed:

- Node.js
- pnpm 9.15.4
- Git

---

# 1. Install Required Tools

## Install Node.js

If Node.js is not installed, download and install the LTS version:

https://nodejs.org/

Verify the installation:

```bash
node --version
```

---

## Install pnpm

This project uses:

```text
pnpm 9.15.4
```

Install the required pnpm version:

```bash
npm install -g pnpm@9.15.4
```

Verify the installation:

```bash
pnpm --version
```

Expected output:

```text
9.15.4
```

---

# 2. Clone the Repository

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project directory:

```bash
cd jamloop-challenge
```

---

# 3. Install Application Dependencies

Install all project dependencies:

```bash
pnpm install
```

This installs:

- Application dependencies
- Playwright dependencies
- Development tooling

---

# 4. Start the Application

The application must be running before executing the automated tests.

Start the development server:

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:3000
```

Verify the application loads successfully before running tests.

---

# 5. Install Playwright Browsers

Install the required Playwright browser binaries:

```bash
pnpm exec playwright install
```

---

# Running Automated Tests

## Run All Tests

Execute the complete Playwright test suite:

```bash
pnpm exec playwright test
```

---

## Run Tests in Headed Mode

Run tests with the browser visible:

```bash
pnpm exec playwright test --headed
```

---

## Run a Specific Test File

Authentication tests:

```bash
pnpm exec playwright test tests/ui/auth/login.spec.ts
```

Landing page tests:

```bash
pnpm exec playwright test tests/ui/landing/landing.spec.ts
```

Campaign list tests:

```bash
pnpm exec playwright test tests/ui/campaigns/campaign-list.spec.ts
```

Campaign creation tests:

```bash
pnpm exec playwright test tests/ui/campaigns/campaign-create.spec.ts
```

---

## View Test Report

After running tests, open the Playwright HTML report:

```bash
pnpm exec playwright show-report
```

---

# Test Framework Structure

The automation framework follows the Page Object Model pattern.

```
tests/
│
├── auth/
│   └── auth.setup.ts
│
├── data/
│   └── users.ts
│
├── pages/
│   ├── BasePage.ts
│   ├── LandingPage.ts
│   ├── LoginPage.ts
│   ├── CampaignsPage.ts
│   └── CreateCampaignPage.ts
│
└── ui/
    ├── auth/
    │   └── login.spec.ts
    │
    ├── landing/
    │   └── landing.spec.ts
    │
    └── campaigns/
        ├── campaign-list.spec.ts
        └── campaign-create.spec.ts
```

---

# Automated Workflows Selected

The automated workflows were selected based on business importance, user impact, and regression risk.

---

## Authentication

Automated scenarios include:

- Login page validation
- Successful login
- Invalid credential validation
- Protected route validation
- Logout functionality

### Reason Selected

Authentication is a foundational workflow because all protected application functionality depends on successful user access.

---

## Landing Page

Automated scenarios include:

- Landing page loads successfully
- Required branding and content are displayed
- Sign in navigation works
- Create campaign navigation works

### Reason Selected

The landing page represents the initial user entry point and validates that users can successfully begin important workflows.

---

## Campaign Management

Automated scenarios include:

- Viewing existing campaigns
- Accessing campaign creation
- Creating a campaign
- Required field validation
- Verifying newly created campaigns appear in the campaign list

### Reason Selected

Campaign creation is a primary business workflow and contains multiple user interactions and validation points.

---

# Additional Tests With More Time

Additional automation coverage could include:

## Authentication

- Verify authenticated users remain logged in after page refresh
- Verify session expiration redirects users to login
- Verify multiple failed login attempts are handled correctly
- Verify users cannot access restricted functionality without proper permissions
- Verify password reset workflow (if implemented)

---

## Landing Page

- Verify all landing page navigation links work correctly
- Verify landing page content remains consistent after refresh
- Verify responsive behavior across supported screen sizes
- Verify external links navigate correctly (if applicable)

---

## Campaign List

- Verify campaign data remains correct after page refresh
- Verify campaign data persists after logout and login
- Verify campaign rows display all expected fields
- Verify empty campaign states are handled correctly
- Verify campaign list behavior with multiple campaigns

---

## Campaign Creation

- Verify campaign creation with different targeting combinations
- Verify campaign creation with boundary values
- Verify maximum field length validation
- Verify invalid budget values
- Verify invalid date ranges
- Verify missing required fields
- Verify invalid geographic information
- Verify campaign creation error handling

---

## Browser Coverage

Execute tests across:

- Chromium
- Firefox
- WebKit

---

# Scaling the Test Suite

If the automation suite grew to hundreds of tests, the structure would be organized by:

## Feature Area

Example:

```
tests/
│
├── authentication/
├── campaigns/
├── users/
└── reporting/
```

---

## Test Layer

Separate tests by purpose:

```
tests/
│
├── ui/
├── api/
├── integration/
└── fixtures/
```

---

## Shared Components

Reusable components would remain separated:

```
pages/
fixtures/
utils/
helpers/
data/
```

---

## Test Metadata

Tests would include metadata such as:

- Priority
- Feature ownership
- Regression category
- Smoke vs regression classification

Example:

```typescript
test.describe('Campaign Creation - Critical', () => {

});
```

---

# CI/CD Integration

The Playwright test suite would be integrated into the CI/CD pipeline to provide automated validation before changes are merged.

---

## Recommended Pipeline Flow

```
Developer Creates Pull Request
            |
            v
Install Dependencies
            |
            v
Start Application
            |
            v
Execute Playwright Tests
            |
            v
Generate Test Report
            |
            v
Publish Results
```

---

## CI Pipeline Should Include

- Automated Playwright execution
- HTML test reports
- Screenshot capture on failures
- Video capture for failed tests
- Trace collection for debugging
- Parallel execution
- Environment configuration

---

# Test Reporting Strategy

The current framework uses Playwright's built-in HTML reporting.

The generated reports provide:

- Test execution results
- Failed test details
- Screenshots for failures
- Video recordings for failures
- Execution traces for debugging

For a larger-scale automation suite, integrating **Allure Reporting** would improve visibility and maintainability.

Potential benefits of Allure Reporting:

- Historical test execution trends
- Test categorization by feature or component
- Step-level test reporting
- Easier failure analysis
- Better reporting for engineering teams and stakeholders

A CI pipeline could publish Allure reports after each execution to provide visibility into automation health and regression trends.

---

# Quality Findings

Quality findings are documented separately:

```
docs/quality-findings.md
```

---

# Additional Documentation

Supporting documentation is available in:

```
docs/
│
├── automation-strategy.md
├── manual-test-execution.md
├── quality-findings.md
└── test-cases.md
```
