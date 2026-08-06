# Test Cases

## Test Inventory

| ID | Test Case | Priority | Type | Layer | Automation Status |
|---|---|---|---|---|---|
| LAND-001 | Verify Landing Page Loads With Required Branding and Content | P0 | Functional | UI | Yes |
| LAND-002 | Verify User Can Navigate To Login Page | P0 | Functional | UI | Yes |
| LAND-003 | Verify Unauthenticated User Is Redirected To Login When Creating A Campaign | P0 | Functional | UI | Yes |
| LAND-004 | Verify Authenticated User Can Access Campaign Creation | P1 | Functional | UI | Yes |
| AUTH-001 | Verify Login Page Displays Required Elements | P0 | Functional | UI | Yes |
| AUTH-002 | Verify User Can Login With Valid Credentials | P0 | Functional | UI/API | Yes |
| AUTH-003 | Verify User Cannot Login With Invalid Credentials | P0 | Negative | UI/API | Yes |
| AUTH-004 | Verify Login Fails When Username Is Empty | P1 | Validation | UI/API | Future |
| AUTH-005 | Verify Login Fails When Password Is Empty | P1 | Validation | UI/API | Future |
| AUTH-006 | Verify Login Fails When Username And Password Are Empty | P1 | Validation | UI/API | Future |
| AUTH-007 | Verify Password Input Is Masked | P1 | Security | UI | Future |
| AUTH-008 | Verify Forgot Password Link Is Available | P2 | Functional | UI | No |
| AUTH-009 | Verify Authenticated User Is Redirected After Login | P0 | Functional | UI | Yes |
| AUTH-010 | Verify Unauthenticated Users Cannot Access Protected Pages | P0 | Security | UI/API | Yes |
| AUTH-011 | Verify User Can Logout Successfully | P0 | Functional | UI/API | Yes |
| AUTH-012 | Verify Session Persists After Page Refresh | P1 | Functional | UI | Future |
| AUTH-013 | Verify Expired Session Requires Re-authentication | P1 | Security | UI/API | Future |
| AUTH-014 | Verify Login Handles Server Errors Gracefully | P1 | Negative | API/UI | Future |
| AUTH-015 | Verify Login Handles Network Failures Gracefully | P2 | Negative | API/UI | Future |
| AUTH-016 | Verify Login Button Is Disabled Until Required Fields Are Entered | P1 | Validation | UI | Future |
| AUTH-017 | Verify User Receives Error After Multiple Failed Login Attempts | P1 | Security | UI/API | Future |
| AUTH-018 | Verify User Cannot Access Login Page After Authentication | P1 | Security | UI | Future |
| AUTH-019 | Verify Logout Invalidates Browser Session | P1 | Security | UI | Future |
| CAMP-001 | Verify Campaigns Page Displays Required Elements | P0 | Functional | UI | Yes |
| CAMP-002 | Verify User Can View Existing Campaigns | P0 | Functional | UI | Yes |
| CAMP-003 | Verify User Can Access Create Campaign Workflow | P0 | Functional | UI | Yes |
| CAMP-004 | Verify User Can Logout From Campaigns Page | P0 | Functional | UI | Yes |
| CAMP-005 | Verify Campaign Table Displays Correct Column Headers | P1 | Functional | UI | Future |
| CAMP-006 | Verify Campaign Names Are Clickable | P1 | Functional | UI | Future |
| CAMP-007 | Verify Multiple Campaigns Are Displayed | P1 | Functional | UI | Future |
| CAMP-008 | Verify Campaign Data Displays Expected Values | P1 | Validation | UI | Future |
| CAMP-009 | Verify Empty Campaign State Is Handled Correctly | P1 | Functional | UI | Future |
| CAMP-010 | Verify Campaign Page Requires Authentication | P0 | Security | UI/API | Yes |
| CAMP-011 | Verify Campaign Page Remains Accessible After Refresh | P2 | Functional | UI | Future |
| CAMP-012 | Verify Create Campaign Page Displays Required Elements | P0 | Functional | UI | Yes |
| CAMP-013 | Verify Create Campaign Form Displays All Available Fields | P0 | Functional | UI | Yes |
| CAMP-014 | Verify User Can Create Campaign With Valid Data | P0 | Functional | UI/API | Yes |
| CAMP-015 | Verify Required Campaign Fields Are Validated | P0 | Validation | UI | Yes |
| CAMP-016 | Verify Budget Field Accepts Valid Input | P1 | Validation | UI | Future |
| CAMP-017 | Verify Budget Field Rejects Invalid Input | P1 | Validation | UI | Future |
| CAMP-018 | Verify Campaign End Date Cannot Occur Before Start Date | P1 | Validation | UI/API | Future |
| CAMP-019 | Verify Devices Field Is Required | P1 | Validation | UI | Future |
| CAMP-020 | Verify Ages Field Is Required | P1 | Validation | UI | Future |
| CAMP-021 | Verify Gender Field Is Optional | P1 | Validation | UI | Future |
| CAMP-022 | Verify Geography Fields Are Required | P1 | Validation | UI | Future |
| CAMP-023 | Verify Newly Created Campaign Appears In Campaign List | P0 | Functional | UI/API | Yes |
| CAMP-024 | Verify Publisher Dropdown Displays Available Options | P1 | Functional | UI | Future |
| CAMP-025 | Verify User Can Select One Or More Publishers | P1 | Functional | UI | Future |
| CAMP-026 | Verify Devices Dropdown Displays Available Options | P1 | Functional | UI | Future |
| CAMP-027 | Verify User Can Select One Or More Devices | P1 | Functional | UI | Future |
| CAMP-028 | Verify Ages Dropdown Displays Available Options | P1 | Functional | UI | Future |
| CAMP-029 | Verify User Can Select One Or More Age Ranges | P1 | Functional | UI | Future |
| CAMP-030 | Verify Gender Dropdown Displays Available Options | P1 | Functional | UI | Future |
| CAMP-031 | Verify User Can Select Gender Option | P2 | Functional | UI | Future |
| CAMP-032 | Verify Campaign Creation Returns User To Campaign List | P1 | Functional | UI | Yes |
| CAMP-033 | Verify User Can Navigate To Edit Campaign Page | P0 | Functional | UI | Future |
| CAMP-034 | Verify Existing Campaign Data Is Pre-Populated | P0 | Functional | UI | Future |
| CAMP-035 | Verify User Can Update Campaign Name | P1 | Functional | UI/API | Future |
| CAMP-036 | Verify User Can Update Campaign Geography | P1 | Functional | UI/API | Future |
| CAMP-037 | Verify Required Fields Are Validated During Campaign Update | P0 | Validation | UI | Future |
| CAMP-038 | Verify Multi-Select Fields Retain Multiple Values | P1 | Functional | UI | Future |
| CAMP-039 | Verify Campaign Update Persists After Refresh | P1 | Regression | UI/API | Future |
| CAMP-040 | Verify Campaign List Loads After Login | P0 | Functional | UI | Yes |
| CAMP-041 | Verify Campaign List Displays At Least One Campaign | P1 | Functional | UI | Future |
| CAMP-042 | Verify Campaign Name Is Required | P1 | Validation | UI | Future |
| CAMP-043 | Verify Budget Is Required | P1 | Validation | UI | Future |
| CAMP-044 | Verify Publishers Is Required | P1 | Validation | UI | Future |
| CAMP-045 | Verify Country Is Required | P1 | Validation | UI | Future |
| CAMP-046 | Verify State Is Required | P1 | Validation | UI | Future |
| CAMP-047 | Verify City Is Required | P1 | Validation | UI | Future |
| CAMP-048 | Verify Zip Code Is Required | P1 | Validation | UI | Future |
| CAMP-049 | Verify User Can Update Budget | P1 | Functional | UI/API | Future |
| CAMP-050 | Verify User Can Update Publishers | P1 | Functional | UI/API | Future |
| CAMP-051 | Verify User Can Update Devices | P1 | Functional | UI/API | Future |
| CAMP-052 | Verify User Can Update Ages | P1 | Functional | UI/API | Future |
| CAMP-053 | Verify User Can Update Gender | P1 | Functional | UI/API | Future |
| CAMP-054 | Verify User Can Update Dates | P1 | Functional | UI/API | Future |
| CAMP-055 | Verify Updated Campaign Appears In Campaign List | P0 | Regression | UI/API | Future |
| CAMP-056 | Verify User Cannot Access Edit Page When Logged Out | P0 | Security | UI/API | Future |
| CAMP-057 | Verify Invalid Campaign ID Is Handled Gracefully | P2 | Negative | UI/API | Future |
| CAMP-058 | Verify Non-Numeric Campaign ID Is Handled Gracefully | P2 | Negative | UI/API | Future |

---

## Landing Page Tests

### LAND-001: Verify Landing Page Loads With Required Branding and Content

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- Application is running
- User navigates to the homepage

### Steps
1. Navigate to the JamLoop homepage

### Expected Result
- Page loads successfully
- JamLoop logo is displayed in the top left
- Headline is displayed:
  - "Elevate your brand with Connected TV"
- Supporting text is displayed:
  - "Join thousands of agencies and brands who trust JamLoop DSP™ to reach their most valuable streaming TV viewers."
- "Create a campaign" button is visible
- "Sign In" button is visible
- Footer copyright text is displayed:
  - "© 2026 JamLoop LLC. All Rights Reserved."

---

### LAND-002: Verify User Can Navigate To Login Page

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on the JamLoop landing page

### Steps
1. Click the "Sign In" button

### Expected Result
- User is routed to `/login`
- Login page loads successfully

---

### LAND-003: Verify Unauthenticated User Is Redirected To Login When Creating A Campaign

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is not authenticated
- User is on the JamLoop landing page

### Steps
1. Click the "Create a campaign" button

### Expected Result
- User is redirected to `/login`
- Login page loads successfully
- User is required to authenticate before accessing the campaign creation workflow

---

### LAND-004: Verify Authenticated User Can Access Campaign Creation

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on the JamLoop landing page

### Steps
1. Click the "Create a campaign" button

### Expected Result
- User is redirected to `/customer/campaigns/create`
- Campaign creation page loads successfully
- "Create a new campaign" heading is displayed

---

## Authentication Tests

### AUTH-001: Verify Login Page Displays Required Elements

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on the login page

### Steps
1. Navigate to `/login`

### Expected Result
- JamLoop logo is displayed
- "Welcome back!" heading is displayed
- "Please sign in to continue" text is displayed
- Username input field is displayed
- Password input field is displayed
- Sign In button is displayed
- Forgot password link is displayed
- Copyright text is displayed:
  - "© 2026 JamLoop LLC. All Rights Reserved."

---

### AUTH-002: Verify User Can Login With Valid Credentials

**Priority:** P0  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User account exists

### Steps
1. Navigate to login page
2. Enter valid username
3. Enter valid password
4. Click "Sign In"

### Expected Result
- User is authenticated successfully
- User is redirected to the application
- Authenticated session is created

---

### AUTH-003: Verify User Cannot Login With Invalid Credentials

**Priority:** P0  
**Type:** Negative  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Navigate to login page
2. Enter invalid username
3. Enter invalid password
4. Click "Sign In"

### Expected Result
- Login fails
- Error message is displayed
- User remains on login page

---

### AUTH-004: Verify Login Fails When Username Is Empty

**Priority:** P1  
**Type:** Validation  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Navigate to login page
2. Leave username blank
3. Enter password
4. Click "Sign In"

### Expected Result
- Validation error is displayed
- User cannot authenticate

---

### AUTH-005: Verify Login Fails When Password Is Empty

**Priority:** P1  
**Type:** Validation  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Navigate to login page
2. Enter username
3. Leave password blank
4. Click "Sign In"

### Expected Result
- Validation error is displayed
- User cannot authenticate

---

### AUTH-006: Verify Login Fails When Username And Password Are Empty

**Priority:** P1  
**Type:** Validation  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Navigate to login page
2. Click "Sign In" without entering credentials

### Expected Result
- Validation errors are displayed
- User cannot authenticate

---

### AUTH-007: Verify Password Input Is Masked

**Priority:** P1  
**Type:** Security  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Navigate to login page
2. Enter password

### Expected Result
- Password characters are hidden
- Input type is password

---

### AUTH-008: Verify Forgot Password Link Is Available

**Priority:** P2  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Navigate to login page

### Expected Result
- Forgot password link is visible
- Link is clickable

---

## AUTH-009: Verify Authenticated User Is Redirected After Login

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes  

### Steps
1. Navigate to `/login`
2. Enter valid username
3. Enter valid password
4. Click "Sign In"

### Expected Result
- User is authenticated successfully
- User leaves the login page
- User is redirected to the authenticated application area

### Actual Result
- User is successfully authenticated
- User is redirected to:
  - `/customer/campaigns`

---

## AUTH-010: Verify Unauthenticated Users Cannot Access Protected Pages

**Priority:** P0  
**Type:** Security  
**Layer:** UI/API  
**Automation:** Yes  

### Steps
1. Logout from the application
2. Navigate directly to `/customer/campaigns`

### Expected Result
- User is redirected to the login page
- Protected campaign content is not accessible

### Actual Result
- User is redirected away from the protected route
- User cannot access campaign data without authentication

---

## AUTH-011: Verify User Can Logout Successfully

**Priority:** P0  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes  

### Steps
1. Login successfully
2. Click the "Log Out" button

### Expected Result
- User session is removed
- User is redirected to the login page
- Protected pages are no longer accessible

### Actual Result
- User session is invalidated
- User is redirected to the landing page (`/`)
- Protected routes require authentication after logout

---

### AUTH-012: Verify Session Persists After Page Refresh

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Login successfully
2. Refresh browser page

### Expected Result
- User remains authenticated
- User does not return to login page

---

### AUTH-013: Verify Expired Session Requires Re-authentication

**Priority:** P1  
**Type:** Security  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Allow authentication session to expire
2. Attempt to access application

### Expected Result
- User is required to login again

---

### AUTH-014: Verify Login Handles Server Errors Gracefully

**Priority:** P1  
**Type:** Negative  
**Layer:** API/UI  
**Automation:** Yes

### Steps
1. Simulate server failure
2. Attempt login

### Expected Result
- User receives meaningful error message
- Application does not crash

---

### AUTH-015: Verify Login Handles Network Failures Gracefully

**Priority:** P2  
**Type:** Negative  
**Layer:** API/UI  
**Automation:** Yes

### Steps
1. Disable network connection
2. Attempt login

### Expected Result
- User receives network error feedback

---

### AUTH-016: Verify Login Button Is Disabled Until Required Fields Are Entered

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on the login page

### Steps
1. Navigate to `/login`
2. Leave username field empty
3. Leave password field empty
4. Observe the Sign In button state
5. Enter a username only
6. Observe the Sign In button state
7. Enter a password only
8. Observe the Sign In button state

### Expected Result
- Sign In button behavior matches the application's validation design
- User cannot submit incomplete login credentials
- Required fields must be completed before authentication is attempted
- User receives appropriate validation feedback if submission is attempted without required fields

---

### AUTH-017: Verify User Receives Error After Multiple Failed Login Attempts

**Priority:** P1  
**Type:** Security  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is on the login page
- Invalid credentials are available

### Steps
1. Navigate to `/login`
2. Enter an invalid username
3. Enter an invalid password
4. Click the "Sign In" button
5. Repeat the failed login attempt multiple times

### Expected Result
- User receives an appropriate authentication error message
- User remains unable to access the application
- Application does not expose sensitive authentication details
- If account protection exists:
  - User is notified of additional security actions (for example, temporary lockout or retry limitation)

---

### AUTH-018: Verify User Cannot Access Login Page After Authentication

**Priority:** P1  
**Type:** Security  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- Application is running
- User is logged in

### Steps
1. Navigate directly to `/login`

### Expected Result
- Authenticated user is redirected to `/customer/campaigns`
- Login page is not displayed

---

### AUTH-019: Verify Logout Invalidates Browser Session

**Priority:** P1  
**Type:** Security  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- Application is running
- User is logged in

### Steps
1. Click Logout
2. Press browser Back button

### Expected Result
- User is not able to access protected pages
- User is redirected to login page

---

## Campaign Tests

### CAMP-001: Verify Campaigns Page Displays Required Elements

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated

### Steps
1. Navigate to `/customer/campaigns`

### Expected Result
- JamLoop logo is displayed
- "Campaigns" heading is displayed
- "Create Campaign" button is displayed
- Campaign table is displayed
- Logout button is displayed
- Copyright text is displayed:
  - "© 2026 JamLoop LLC. All Rights Reserved."

---

### CAMP-002: Verify User Can View Existing Campaigns

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- Campaign data exists

### Steps
1. Navigate to `/customer/campaigns`

### Expected Result
- Existing campaigns are displayed
- Campaign records contain expected campaign information

---

### CAMP-003: Verify User Can Access Create Campaign Workflow

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns`

### Steps
1. Click the "Create Campaign" button

### Expected Result
- User is routed to the campaign creation workflow
- Campaign creation page loads successfully

---

### CAMP-004: Verify User Can Logout From Campaigns Page

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns`

### Steps
1. Click the "Log Out" button

### Expected Result
- User session is terminated
- User is redirected to the login page
- User can no longer access protected campaign pages

---

### CAMP-005: Verify Campaign Table Displays Correct Column Headers

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns`

### Steps
1. Navigate to the campaigns page

### Expected Result
Campaign table displays the following columns:

- Name
- Start Date
- End Date
- Country
- Publishers
- Devices

---

### CAMP-006: Verify Campaign Names Are Clickable

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- Campaigns exist

### Steps
1. Navigate to `/customer/campaigns`
2. Click an existing campaign name

### Expected Result
- User is routed to the campaign details page
- Campaign details load successfully

---

### CAMP-007: Verify Multiple Campaigns Are Displayed

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- Multiple campaigns exist

### Steps
1. Navigate to `/customer/campaigns`

### Expected Result
- Multiple campaign records are displayed
- Each campaign appears as a separate row

---

### CAMP-008: Verify Campaign Data Displays Expected Values

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- Campaign records exist

### Steps
1. Navigate to `/customer/campaigns`
2. Review campaign records

### Expected Result
- Campaign name displays correctly
- Start date displays correctly
- End date displays correctly
- Country displays correctly
- Publishers display correctly
- Devices display correctly

---

### CAMP-009: Verify Empty Campaign State Is Handled Correctly

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User has no campaigns

### Steps
1. Navigate to `/customer/campaigns`

### Expected Result
- Empty state is displayed
- User receives appropriate messaging
- User can still access campaign creation workflow

---

### CAMP-010: Verify Campaign Page Requires Authentication

**Priority:** P0  
**Type:** Security  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Logout from the application
2. Navigate directly to `/customer/campaigns`

### Expected Result
- User is redirected to the login page
- Campaign data is not accessible without authentication

---

### CAMP-011: Verify Campaign Page Remains Accessible After Refresh

**Priority:** P2  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated

### Steps
1. Navigate to `/customer/campaigns`
2. Refresh the browser

### Expected Result
- User remains authenticated
- Campaign table loads successfully

---

### CAMP-012: Verify Create Campaign Page Displays Required Elements

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated

### Steps
1. Navigate to `/customer/campaigns/create`

### Expected Result
- JamLoop logo is displayed
- "Create a new campaign" heading is displayed
- Campaign description is displayed
- "Campaign Details" section is displayed
- Create Campaign button is displayed
- Logout button is displayed
- Copyright text is displayed:
  - "© 2026 JamLoop LLC. All Rights Reserved."

---

### CAMP-013: Verify Create Campaign Form Displays All Available Fields

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Steps
1. Review the campaign creation form

### Expected Result
The following fields are displayed:

- Campaign Name
- Budget Goal
- Start Date
- End Date
- Publishers
- Devices
- Gender
- Ages
- Country
- State
- City
- Zip Code

---

### CAMP-014: Verify User Can Create Campaign With Valid Data

**Priority:** P0  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Test Data
- Valid campaign name
- Valid budget amount
- Valid start date
- Valid end date
- One or more publishers selected
- One or more devices selected
- One or more age ranges selected
- Gender selection (optional)
- Valid country
- Valid state
- Valid city
- Valid zip code

### Steps
1. Enter valid campaign information
2. Click "Create Campaign"

### Expected Result
- Campaign is created successfully
- User is routed to `/customer/campaigns`
- Campaign list page loads successfully

---

### CAMP-015: Verify Required Campaign Fields Are Validated

**Priority:** P0  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Steps
1. Leave required fields empty
2. Click "Create Campaign"

### Expected Result
- Campaign creation is prevented
- Validation messages are displayed for required fields

Required fields include:
- Campaign Name
- Budget Goal
- Start Date
- End Date
- Publishers
- Devices
- Ages
- Country
- State
- City
- Zip Code

---

### CAMP-016: Verify Budget Field Accepts Valid Input

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Enter a valid numeric budget value

### Expected Result
- Budget value is accepted
- No validation error is displayed

---

### CAMP-017: Verify Budget Field Rejects Invalid Input

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Enter invalid budget values:
   - Alphabetic characters
   - Negative values
   - Invalid symbols

2. Submit the form

### Expected Result
- Campaign is not created
- Budget validation feedback is displayed

---

### CAMP-018: Verify Campaign End Date Cannot Occur Before Start Date

**Priority:** P1  
**Type:** Validation  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Enter a start date
2. Enter an end date before the start date
3. Click "Create Campaign"

### Expected Result
- Campaign creation fails
- Date validation feedback is displayed

---

### CAMP-019: Verify Devices Field Is Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Complete all required fields except Devices
2. Click "Create Campaign"

### Expected Result
- Campaign is not created
- Devices field displays validation feedback

---

### CAMP-020: Verify Ages Field Is Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Complete all required fields except Ages
2. Click "Create Campaign"

### Expected Result
- Campaign is not created
- Ages field displays validation feedback

---

### CAMP-021: Verify Gender Field Is Optional

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Complete all required fields
2. Leave Gender set to the default value "Any"
3. Click "Create Campaign"

### Expected Result
- Campaign creation succeeds
- No validation error is displayed for Gender

---

### CAMP-022: Verify Geography Fields Are Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Complete all required fields except geography fields:
   - Country
   - State
   - City
   - Zip Code

2. Click "Create Campaign"

### Expected Result
- Campaign is not created
- Missing geography fields display validation feedback

---

### CAMP-023: Verify Newly Created Campaign Appears In Campaign List

**Priority:** P0  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User successfully creates a campaign

### Steps
1. Submit a valid campaign
2. Navigate to `/customer/campaigns`

### Expected Result
- Newly created campaign is displayed in the campaign table
- Campaign details match the submitted values:
  - Name
  - Start Date
  - End Date
  - Country
  - Publishers
  - Devices

---

### CAMP-024: Verify Publisher Dropdown Displays Available Options

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Steps
1. Click the Publishers dropdown

### Expected Result
The following publisher options are displayed:

- Hulu
- Discovery
- ABC
- A&E
- TLC
- Fox News
- Fox Sports

---

### CAMP-025: Verify User Can Select One Or More Publishers

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Steps
1. Open the Publishers dropdown
2. Select one or more publishers

### Expected Result
- Selected publishers are displayed in the field
- User can select multiple publishers
- Selected values are retained before form submission

---

### CAMP-026: Verify Devices Dropdown Displays Available Options

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Click the Devices dropdown

### Expected Result
The following device options are displayed:

- CTV
- Web Browser
- Mobile Device

---

### CAMP-027: Verify User Can Select One Or More Devices

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Steps
1. Open the Devices dropdown
2. Select one or more devices

### Expected Result
- Selected devices are displayed in the field
- User can select multiple devices
- Selected values are retained before form submission

---

### CAMP-028: Verify Ages Dropdown Displays Available Options

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Steps
1. Click the Ages dropdown

### Expected Result
The following age ranges are displayed:

- < 5 yrs
- 6 yrs - 12 yrs
- 13 yrs - 19 yrs
- 20 yrs - 35 yrs
- 36 yrs - 50 yrs
- 51+ yrs

---

### CAMP-029: Verify User Can Select One Or More Age Ranges

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Steps
1. Open the Ages dropdown
2. Select one or more age ranges

### Expected Result
- Selected age ranges are displayed in the field
- User can select multiple age ranges
- Selected values are retained before form submission

---

### CAMP-030: Verify Gender Dropdown Displays Available Options

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Steps
1. Click the Gender dropdown

### Expected Result
The following gender options are displayed:

- Any
- Male
- Female

---

### CAMP-031: Verify User Can Select Gender Option

**Priority:** P2  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Steps
1. Open the Gender dropdown
2. Select a gender option

### Expected Result
- Selected gender is displayed in the field
- Selected value is retained before form submission

---

### CAMP-032: Verify Campaign Creation Returns User To Campaign List

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/create`

### Steps
1. Complete the campaign form with valid data
2. Click "Create Campaign"

### Expected Result
- User is redirected to `/customer/campaigns`
- Campaign list is displayed
- User does not remain on the creation page

---

### CAMP-033: Verify User Can Navigate To Edit Campaign Page

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns`
- At least one campaign exists

### Steps
1. Click an existing campaign from the campaign list

### Expected Result
- User is routed to `/customer/campaigns/{id}`
- Edit campaign page is displayed
- Page heading displays "Edit campaign"

---

### CAMP-034: Verify Existing Campaign Data Is Pre-Populated

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/{id}`

### Steps
1. Navigate to an existing campaign edit page

### Expected Result
The following fields contain existing campaign values:

- Campaign name
- Budget
- Start date
- End date
- Publishers
- Devices
- Gender
- Ages
- Country
- State
- City
- Zip Code

---

### CAMP-035: Verify User Can Update Campaign Name

**Priority:** P1  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is on `/customer/campaigns/{id}`

### Steps
1. Update the campaign name
2. Submit changes

### Expected Result
- Campaign is updated successfully
- Updated name is saved
- User remains on or is redirected appropriately
- Updated value appears in campaign list

---

### CAMP-036: Verify User Can Update Campaign Geography

**Priority:** P1  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is editing an existing campaign

### Steps
1. Modify geography fields:
   - Country
   - State
   - City
   - Zip Code
2. Save changes

### Expected Result
- Geography changes are saved
- Updated values persist after navigating away and returning

---

### CAMP-037: Verify Required Fields Are Validated During Campaign Update

**Priority:** P0  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is editing an existing campaign

### Steps
1. Remove required field values:
   - Name
   - Budget
   - Publishers
   - Devices
   - Ages
   - Country
   - State
   - City
   - Zip Code
2. Attempt to save changes

### Expected Result
- Validation errors are displayed
- Campaign is not updated

---

### CAMP-038: Verify Multi-Select Fields Retain Multiple Values

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is authenticated
- User is editing an existing campaign

### Steps
1. Select multiple values for:
   - Publishers
   - Devices
   - Ages
2. Save changes
3. Reopen campaign

### Expected Result
- Multiple selected values are displayed
- Previously selected values persist

---

### CAMP-039: Verify Campaign Update Persists After Refresh

**Priority:** P1  
**Type:** Regression  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Modify a campaign field
2. Save changes
3. Refresh the page

### Expected Result
- Updated campaign values remain unchanged
- No data is lost after refresh

---

### CAMP-040: Verify Campaign List Loads After Login

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- Application is running
- User has valid credentials

### Steps
1. Login with valid credentials

### Expected Result
- User is redirected to `/customer/campaigns`
- Campaign table is displayed
- Campaign list page loads successfully

---

### CAMP-041: Verify Campaign List Displays At Least One Campaign

**Priority:** P1  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is logged in
- Campaign list page is accessible

### Steps
1. Navigate to campaign list page

### Expected Result
- Campaign table contains one or more campaign records

---

### CAMP-042: Verify Campaign Name Is Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on Create Campaign page

### Steps
1. Leave Campaign Name field blank
2. Complete remaining required fields
3. Submit form

### Expected Result
- Validation message is displayed
- Campaign is not created

---

### CAMP-043: Verify Budget Is Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on Create Campaign page

### Steps
1. Leave Budget field blank
2. Complete remaining required fields
3. Submit form

### Expected Result
- Validation message is displayed
- Campaign is not created

---

### CAMP-044: Verify Publishers Is Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on Create Campaign page

### Steps
1. Leave Publishers field unselected
2. Complete remaining required fields
3. Submit form

### Expected Result
- Validation message is displayed
- Campaign is not created

---

### CAMP-045: Verify Country Is Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on Create Campaign page

### Steps
1. Leave Country field blank
2. Submit form

### Expected Result
- Validation message is displayed
- Campaign is not created

---

### CAMP-046: Verify State Is Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on Create Campaign page

### Steps
1. Leave State field blank
2. Submit form

### Expected Result
- Validation message is displayed
- Campaign is not created

---

### CAMP-047: Verify City Is Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on Create Campaign page

### Steps
1. Leave City field blank
2. Submit form

### Expected Result
- Validation message is displayed
- Campaign is not created

---

### CAMP-048: Verify Zip Code Is Required

**Priority:** P1  
**Type:** Validation  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on Create Campaign page

### Steps
1. Leave Zip Code field blank
2. Submit form

### Expected Result
- Validation message is displayed
- Campaign is not created

---

### CAMP-049: Verify User Can Update Budget

**Priority:** P1  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is logged in
- Existing campaign is available

### Steps
1. Open existing campaign
2. Navigate to Edit Campaign
3. Update Budget value
4. Save changes

### Expected Result
- Campaign saves successfully
- Updated budget is displayed

---

### CAMP-050: Verify User Can Update Publishers

**Priority:** P1  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is logged in
- Existing campaign is available

### Steps
1. Open Edit Campaign page
2. Update Publishers selection
3. Save changes

### Expected Result
- Updated publishers are saved successfully

---

### CAMP-051: Verify User Can Update Devices

**Priority:** P1  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is logged in
- Existing campaign is available

### Steps
1. Open Edit Campaign page
2. Update Devices selection
3. Save changes

### Expected Result
- Updated devices are saved successfully

---

### CAMP-052: Verify User Can Update Ages

**Priority:** P1  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is logged in
- Existing campaign is available

### Steps
1. Open Edit Campaign page
2. Update Ages selection
3. Save changes

### Expected Result
- Updated age ranges are saved successfully

---

### CAMP-053: Verify User Can Update Gender

**Priority:** P1  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is logged in
- Existing campaign is available

### Steps
1. Open Edit Campaign page
2. Update Gender selection
3. Save changes

### Expected Result
- Updated gender value is saved successfully

---

### CAMP-054: Verify User Can Update Dates

**Priority:** P1  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is logged in
- Existing campaign is available

### Steps
1. Open Edit Campaign page
2. Update start and/or end dates
3. Save changes

### Expected Result
- Updated dates are saved successfully

---

### CAMP-055: Verify Updated Campaign Appears In Campaign List

**Priority:** P0  
**Type:** Regression  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User has updated an existing campaign

### Steps
1. Save campaign changes
2. Navigate back to campaign list

### Expected Result
- Campaign list displays updated campaign information

---

### CAMP-056: Verify User Cannot Access Edit Page When Logged Out

**Priority:** P0  
**Type:** Security  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- Existing campaign ID is available

### Steps
1. Logout
2. Navigate directly to `/customer/campaigns/{id}`

### Expected Result
- User is redirected to login page
- Campaign edit page is not accessible

---

### CAMP-057: Verify Invalid Campaign ID Is Handled Gracefully

**Priority:** P2  
**Type:** Negative  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is logged in

### Steps
1. Navigate to `/customer/campaigns/99999`

### Expected Result
- Application displays a not found message
- OR redirects user appropriately
- Application does not crash

---

### CAMP-058: Verify Non-Numeric Campaign ID Is Handled Gracefully

**Priority:** P2  
**Type:** Negative  
**Layer:** UI/API  
**Automation:** Yes

### Preconditions
- User is logged in

### Steps
1. Navigate to `/customer/campaigns/abc`

### Expected Result
- Application displays an error or not found page
- OR redirects user appropriately
- Application does not crash
