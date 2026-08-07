# JamLoop UI Automation Test Framework

## Overview

This repository contains Playwright-based UI automation tests created for the JamLoop UI challenge.

The automation framework validates critical user workflows including:

- Landing page navigation
- User authentication
- Campaign list functionality
- Campaign creation workflow
- Campaign validation and verification

The tests are built using:

- Playwright
- TypeScript
- Page Object Model (POM)
- pnpm package management

---

# Getting Started

## Prerequisites

Before running the automated tests, ensure the following tools are installed:

- Node.js
- pnpm
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

Expected output:

```text
vXX.X.X
```

---

## Install pnpm

Install pnpm globally:

```bash
npm install -g pnpm
```

Verify installation:

```bash
pnpm --version
```

Expected output:

```text
X.X.X
```

---

# 2. Clone the Repository

Clone the challenge repository:

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

The automation tests require the application to be running locally.

Start the development server:

```bash
pnpm dev
```

The application will start at:

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

## Run All Playwright Tests

Execute the full automated test suite:

```bash
pnpm exec playwright test
```

---

## Run Tests With Browser Visible

Run tests in headed mode:

```bash
pnpm exec playwright test --headed
```

This allows you to watch the browser execute the workflow.

---

## Run a Specific Test File

Example:

```bash
pnpm exec playwright test tests/ui/auth/login.spec.ts
```

Example:

```bash
pnpm exec playwright test tests/ui/campaigns/campaign-list.spec.ts
```

Example:

```bash
pnpm exec playwright test tests/ui/campaigns/campaign-create.spec.ts
```

---

## View Playwright Test Report

After execution, open the HTML report:

```bash
pnpm exec playwright show-report
```

---

# Test Organization

The test framework follows the Page Object Model pattern.

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

The automated workflows were selected based on business criticality and user impact.

## Authentication

Automated scenarios include:

- Login page validation
- Successful login
- Invalid credential validation
- Protected route validation
- Logout functionality

Reason:

Authentication is a core application workflow and impacts access to all protected functionality.

---

## Campaign Management

Automated scenarios include:

- Viewing campaigns
- Accessing campaign creation
- Creating a campaign
- Validating required fields
- Confirming newly created campaigns appear in the campaign list

Reason:

Campaign creation represents a primary business workflow and contains multiple validation points.

---

# Additional Tests With More Time

Additional coverage that could be added:

## Campaign Management

- Edit existing campaign
- Delete campaign
- Duplicate campaign
- Search campaigns
- Filter campaigns
- Sort campaigns
- Pagination validation

---

## Form Validation

Additional negative scenarios:

- Invalid budget values
- Invalid date ranges
- Missing campaign name
- Missing geographic fields
- Duplicate campaign names

---

## Authentication

Additional scenarios:

- Session expiration handling
- Password reset workflow
- Remember me functionality
- Multiple failed login attempts

---

## Cross-Browser Testing

Run automated tests against:

- Chromium
- Firefox
- WebKit

---

# Scaling the Test Suite

If the test suite grew to hundreds of tests, it would be organized by:

## Feature Area

Example:

```
tests/
│
├── authentication/
├── campaigns/
├── users/
├── billing/
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

Reusable functionality would remain separated:

```
pages/
fixtures/
utils/
data/
helpers/
```

---

## Test Metadata

Tests would include:

- Priority
- Feature ownership
- Regression category
- Smoke vs full regression classification

Example:

```typescript
test.describe('Campaign Creation - Critical', () => {
  
});
```

---

# CI/CD Integration

The Playwright test suite would be integrated into the CI/CD pipeline.

Recommended workflow:

1. Developer opens pull request
2. CI pipeline starts
3. Application dependencies are installed
4. Application is started
5. Playwright tests execute
6. Test results and reports are generated
7. Pull request is approved only if tests pass

---

## Example CI Pipeline Flow

```
Pull Request
      |
      v
Install Dependencies
      |
      v
Start Application
      |
      v
Run Playwright Tests
      |
      v
Generate Report
      |
      v
Publish Results
```

---

## CI Recommendations

The pipeline should include:

- Automated Playwright execution
- HTML test reports
- Screenshot capture on failures
- Video recording for failed tests
- Parallel test execution
- Environment-specific configuration

---

# Quality Findings

Additional quality findings are documented here:

```
docs/quality-findings.md
```

---

# Supporting Documentation

Additional testing documentation:

```
docs/
│
├── automation-strategy.md
├── manual-test-execution.md
├── quality-findings.md
└── test-cases.md
```
