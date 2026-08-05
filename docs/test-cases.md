# Test Cases

---

## LAND-001: Verify Landing Page Loads With Required Branding and Content

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

## Preconditions
- Application is running
- User navigates to the homepage

## Steps
1. Navigate to the JamLoop homepage

## Expected Result
- Page loads successfully
- JamLoop logo is displayed in the top left
- Hero headline is displayed:
  - "Elevate your brand with Connected TV"
- Supporting text is displayed:
  - "Join thousands of agencies and brands who trust JamLoop DSP™ to reach their most valuable streaming TV viewers."
- "Create a campaign" button is visible
- "Sign In" button is visible
- Footer copyright text is displayed:
  - "© 2026 JamLoop LLC. All Rights Reserved."

---

## LAND-002: Verify User Can Navigate To Login Page

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

## LAND-003: Verify User Can Access Campaign Creation From Landing Page

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

### Preconditions
- User is on the landing page

### Steps
1. Click the "Create a campaign" button

### Expected Result
- User is routed to the campaign creation workflow
- Campaign creation page loads successfully

--

## AUTH-001: Verify Login Page Displays Required Elements

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

## AUTH-002: Verify User Can Login With Valid Credentials

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

## AUTH-003: Verify User Cannot Login With Invalid Credentials

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

## AUTH-004: Verify Login Fails When Username Is Empty

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

## AUTH-005: Verify Login Fails When Password Is Empty

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

## AUTH-006: Verify Login Fails When Username And Password Are Empty

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

## AUTH-007: Verify Password Input Is Masked

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

## AUTH-008: Verify Forgot Password Link Is Available

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
1. Login with valid credentials

### Expected Result
- User leaves login page
- User is redirected to authenticated area

---

## AUTH-010: Verify Unauthenticated Users Cannot Access Protected Pages

**Priority:** P0  
**Type:** Security  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Open protected application URL without authentication

### Expected Result
- User is redirected to login page
- Protected content is not accessible

---

## AUTH-011: Verify User Can Logout Successfully

**Priority:** P0  
**Type:** Functional  
**Layer:** UI/API  
**Automation:** Yes

### Steps
1. Login successfully
2. Click logout

### Expected Result
- User session is removed
- User is redirected to login page

---

## AUTH-012: Verify Session Persists After Page Refresh

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

## AUTH-013: Verify Expired Session Requires Re-authentication

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

## AUTH-014: Verify Login Handles Server Errors Gracefully

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

## AUTH-015: Verify Login Handles Network Failures Gracefully

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

## AUTH-016: Verify Login Button Is Disabled Until Required Fields Are Entered

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

## AUTH-017: Verify User Receives Error After Multiple Failed Login Attempts

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

--

## CAMP-001: Verify Campaigns Page Displays Required Elements

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

## CAMP-002: Verify User Can View Existing Campaigns

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

## CAMP-003: Verify User Can Access Create Campaign Workflow

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

## CAMP-004: Verify User Can Logout From Campaigns Page

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

## CAMP-005: Verify Campaign Table Displays Correct Column Headers

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

## CAMP-006: Verify Campaign Names Are Clickable

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

## CAMP-007: Verify Multiple Campaigns Are Displayed

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

## CAMP-008: Verify Campaign Data Displays Expected Values

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

## CAMP-009: Verify Empty Campaign State Is Handled Correctly

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

## CAMP-010: Verify Campaign Page Requires Authentication

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

## CAMP-011: Verify Campaign Page Remains Accessible After Refresh

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

## CAMP-012: Verify Create Campaign Page Displays Required Elements

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

## CAMP-013: Verify Create Campaign Form Displays All Available Fields

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

## CAMP-014: Verify User Can Create Campaign With Valid Data

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

## CAMP-015: Verify Required Campaign Fields Are Validated

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

## CAMP-016: Verify Budget Field Accepts Valid Input

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

## CAMP-017: Verify Budget Field Rejects Invalid Input

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

## CAMP-018: Verify Campaign End Date Cannot Occur Before Start Date

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

## CAMP-019: Verify Devices Field Is Required

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

## CAMP-020: Verify Ages Field Is Required

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

## CAMP-021: Verify Gender Field Is Optional

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

## CAMP-022: Verify Geography Fields Are Required

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

## CAMP-023: Verify Newly Created Campaign Appears In Campaign List

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

--

## CAMP-024: Verify Publisher Dropdown Displays Available Options

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

--

## CAMP-025: Verify User Can Select One Or More Publishers

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

--

## CAMP-026: Verify Devices Dropdown Displays Available Options

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

--

## CAMP-027: Verify User Can Select One Or More Devices

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

--

## CAMP-028: Verify Ages Dropdown Displays Available Options

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

--

## CAMP-029: Verify User Can Select One Or More Age Ranges

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

--

## CAMP-030: Verify Gender Dropdown Displays Available Options

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

--

## CAMP-031: Verify User Can Select Gender Option

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

--

## CAMP-032: Verify Campaign Creation Returns User To Campaign List

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

--

# Campaign Details Tests

---

## CAMP-033: Verify User Can Navigate To Edit Campaign Page

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

--

## CAMP-034: Verify Existing Campaign Data Is Pre-Populated

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

--

## CAMP-035: Verify User Can Update Campaign Name

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

--

## CAMP-036: Verify User Can Update Campaign Geography

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

--

## CAMP-037: Verify Required Fields Are Validated During Campaign Update

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

--

## CAMP-038: Verify Multi-Select Fields Retain Multiple Values

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

--

## CAMP-039: Verify Campaign Update Persists After Refresh

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
