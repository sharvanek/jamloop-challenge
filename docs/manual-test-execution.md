# Manual Test Execution

## Overview

Manual exploratory testing was performed against the JamLoop application to validate application functionality, identify quality risks, and determine automation priorities.

Testing covered:

- Landing page workflows
- Authentication workflows
- Campaign management workflows
- Campaign creation workflows
- Campaign editing workflows
- Validation scenarios
- Security scenarios
- Negative scenarios

The complete test scenarios are documented in:

`test-inventory.md`

---

# Test Environment

| Item | Details |
|---|---|
| Application | JamLoop Challenge Application |
| Test Type | Manual Functional Testing |
| Browser | Chrome |
| Execution Type | Exploratory Testing |
| Test Data | Valid and invalid user inputs |

---

# Execution Status

| Status | Meaning |
|---|---|
| Pass | Test completed successfully |
| Fail | Defect identified |
| Blocked | Unable to execute due to dependency |
| Not Tested | Deferred |

---

# Landing Page Tests

| Test ID | Test Name | Priority | Result | Notes |
|---|---|---|---|---|
| LAND-001 | Verify Landing Page Loads With Required Branding and Content | P0 | Pass | |
| LAND-002 | Verify User Can Navigate To Login Page | P0 | Pass | |
| LAND-003 | Verify Unauthenticated User Is Redirected To Login When Creating A Campaign | P0 | Pass | |
| LAND-004 | Verify Authenticated User Can Access Campaign Creation | P1 |  | |

---

# Authentication Tests

| Test ID | Test Name | Priority | Result | Notes |
|---|---|---|---|---|
| AUTH-001 | Verify Login Page Displays Required Elements | P0 | Pass | |
| AUTH-002 | Verify User Can Login With Valid Credentials | P0 | Pass | |
| AUTH-003 | Verify User Cannot Login With Invalid Credentials | P0 | Pass | Error message does not expose whether the username or password was incorrect, which is appropriate from a security perspective.|
| AUTH-004 | Verify Login Fails When Username Is Empty | P1 | Pass | Required field validation is working correctly. Error message clearly identifies the missing field. |
| AUTH-005 | Verify Login Fails When Password Is Empty | P1 | Pass | Required field validation is working correctly. Error message clearly identifies the missing field. |
| AUTH-006 | Verify Login Fails When Username And Password Are Empty | P1 | Pass | Form validation correctly identifies both missing required fields. |
| AUTH-007 | Verify Password Input Is Masked | P1 | Pass |  |
| AUTH-008 | Verify Forgot Password Link Is Available | P2 | FAIL | FINDING-002: The Forgot password link is present but does not provide a working recovery flow. |
| AUTH-009 | Verify Authenticated User Is Redirected After Login | P0 | Pass | |
| AUTH-010 | Verify Unauthenticated Users Cannot Access Protected Pages | P0 | Pass | Protected routes correctly enforce authentication requirements after logout. |
| AUTH-011 | Verify User Can Logout Successfully | P0 | Pass | FINDING-004: User is redirected to the landing page after logout. |
| AUTH-012 | Verify Session Persists After Page Refresh | P1 | Pass | Authentication session persists after browser refresh. |
| AUTH-013 | Verify Expired Session Requires Re-authentication | P1 | Not Tested | Requires session manipulation |
| AUTH-014 | Verify Login Handles Server Errors Gracefully | P1 | Not Tested | Requires backend failure simulation |
| AUTH-015 | Verify Login Handles Network Failures Gracefully | P2 | Not Tested | Requires network simulation |
| AUTH-016 | Verify Login Button Is Disabled Until Required Fields Are Entered | P1 | Pass | FINDING-003: Sign In Button Remains Enabled With Missing Required Fields |
| AUTH-017 | Verify User Receives Error After Multiple Failed Login Attempts | P1 | Not Tested | Requires account security rules |
| AUTH-018 | Verify User Cannot Access Login Page After Authentication | P1 | FAIL | Authenticated users are able to access the login page even though an active session exists. The application should prevent authenticated users from viewing the login page and redirect them back to the authenticated area. |
| AUTH-019 | Verify Logout Invalidates Browser Session | P1 |  | |

---

# Campaign Tests

| Test ID | Test Name | Priority | Result | Notes |
|---|---|---|---|---|
| CAMP-001 | Verify Campaigns Page Displays Required Elements | P0 |  | |
| CAMP-002 | Verify User Can View Existing Campaigns | P0 |  | |
| CAMP-003 | Verify User Can Access Create Campaign Workflow | P0 |  | |
| CAMP-004 | Verify User Can Logout From Campaigns Page | P0 |  | |
| CAMP-005 | Verify Campaign Table Displays Correct Column Headers | P1 |  | |
| CAMP-006 | Verify Campaign Names Are Clickable | P1 |  | |
| CAMP-007 | Verify Multiple Campaigns Are Displayed | P1 |  | |
| CAMP-008 | Verify Campaign Data Displays Expected Values | P1 |  | |
| CAMP-009 | Verify Empty Campaign State Is Handled Correctly | P1 | Not Tested | Requires empty account |
| CAMP-010 | Verify Campaign Page Requires Authentication | P0 |  | |
| CAMP-011 | Verify Campaign Page Remains Accessible After Refresh | P2 |  | |
| CAMP-012 | Verify Create Campaign Page Displays Required Elements | P0 |  | |
| CAMP-013 | Verify Create Campaign Form Displays All Available Fields | P0 |  | |
| CAMP-014 | Verify User Can Create Campaign With Valid Data | P0 |  | |
| CAMP-015 | Verify Required Campaign Fields Are Validated | P0 |  | |
| CAMP-016 | Verify Budget Field Accepts Valid Input | P1 |  | |
| CAMP-017 | Verify Budget Field Rejects Invalid Input | P1 |  | |
| CAMP-018 | Verify Campaign End Date Cannot Occur Before Start Date | P1 |  | |
| CAMP-019 | Verify Devices Field Is Required | P1 |  | |
| CAMP-020 | Verify Ages Field Is Required | P1 |  | |
| CAMP-021 | Verify Gender Field Is Optional | P1 |  | |
| CAMP-022 | Verify Geography Fields Are Required | P1 |  | |
| CAMP-023 | Verify Newly Created Campaign Appears In Campaign List | P0 |  | |
| CAMP-024 | Verify Publisher Dropdown Displays Available Options | P1 |  | |
| CAMP-025 | Verify User Can Select One Or More Publishers | P1 |  | |
| CAMP-026 | Verify Devices Dropdown Displays Available Options | P1 |  | |
| CAMP-027 | Verify User Can Select One Or More Devices | P1 |  | |
| CAMP-028 | Verify Ages Dropdown Displays Available Options | P1 |  | |
| CAMP-029 | Verify User Can Select One Or More Age Ranges | P1 |  | |
| CAMP-030 | Verify Gender Dropdown Displays Available Options | P1 |  | |
| CAMP-031 | Verify User Can Select Gender Option | P2 |  | |
| CAMP-032 | Verify Campaign Creation Returns User To Campaign List | P1 |  | |
| CAMP-033 | Verify User Can Navigate To Edit Campaign Page | P0 |  | |
| CAMP-034 | Verify Existing Campaign Data Is Pre-Populated | P0 |  | |
| CAMP-035 | Verify User Can Update Campaign Name | P1 |  | |
| CAMP-036 | Verify User Can Update Campaign Geography | P1 |  | |
| CAMP-037 | Verify Required Fields Are Validated During Campaign Update | P0 |  | |
| CAMP-038 | Verify Multi-Select Fields Retain Multiple Values | P1 |  | |
| CAMP-039 | Verify Campaign Update Persists After Refresh | P1 |  | |
| CAMP-040 | Verify Campaign List Loads After Login | P0 |  | |
| CAMP-041 | Verify Campaign List Displays At Least One Campaign | P1 |  | |
| CAMP-042 | Verify Campaign Name Is Required | P1 |  | |
| CAMP-043 | Verify Budget Is Required | P1 |  | |
| CAMP-044 | Verify Publishers Is Required | P1 |  | |
| CAMP-045 | Verify Country Is Required | P1 |  | |
| CAMP-046 | Verify State Is Required | P1 |  | |
| CAMP-047 | Verify City Is Required | P1 |  | |
| CAMP-048 | Verify Zip Code Is Required | P1 |  | |
| CAMP-049 | Verify User Can Update Budget | P1 |  | |
| CAMP-050 | Verify User Can Update Publishers | P1 |  | |
| CAMP-051 | Verify User Can Update Devices | P1 |  | |
| CAMP-052 | Verify User Can Update Ages | P1 |  | |
| CAMP-053 | Verify User Can Update Gender | P1 |  | |
| CAMP-054 | Verify User Can Update Dates | P1 |  | |
| CAMP-055 | Verify Updated Campaign Appears In Campaign List | P0 |  | |
| CAMP-056 | Verify User Cannot Access Edit Page When Logged Out | P0 |  | |
| CAMP-057 | Verify Invalid Campaign ID Is Handled Gracefully | P2 | Not Tested | Requires invalid data setup |
| CAMP-058 | Verify Non-Numeric Campaign ID Is Handled Gracefully | P2 | Not Tested | Requires URL manipulation |

---

# Summary

## Total Tests

| Category | Count |
|---|---:|
| Landing Tests | 4 |
| Authentication Tests | 19 |
| Campaign Tests | 58 |
| Total Test Inventory | 81 |

---

# Findings

Any defects, usability issues, accessibility concerns, or automation challenges discovered during execution are documented in:

`quality-findings.md`

---

# Automation Follow-Up

Tests selected for automation are documented in:

`automation-strategy.md`
