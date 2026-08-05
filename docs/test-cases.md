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

## CAMP-001: Verify User Can Start Create Campaign Workflow

**Priority:** P0  
**Type:** Functional  
**Layer:** UI  
**Automation:** Yes

## Preconditions
- User is on the landing page

## Steps
1. Click the "Create a campaign" button

## Expected Result
- User is directed to the campaign creation workflow
- Campaign creation page or authentication flow is displayed
