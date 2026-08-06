# Quality Findings

---

## FINDING-001: Password Field Does Not Provide Visibility Toggle

**Category:** Usability Issue  
**Severity:** Low

### Description
The login password field masks entered characters but does not provide an option for users to temporarily reveal the password. A visibility toggle ("Show Password") could improve usability by allowing users to verify their entered credentials before submitting.

### Steps to Reproduce
1. Navigate to `/login`
2. Enter a password in the Password field
3. Observe the password input behavior

### Expected Behavior
The password field should provide an optional visibility toggle that allows users to show or hide the entered password.

### Actual Behavior
The password remains masked with black dots, and no option is available to reveal the entered password.

### Impact
Users may have difficulty identifying typing errors, especially when entering complex passwords, which can lead to failed login attempts.

### Severity
Low

---

## FINDING-002: Forgot Password Link Does Not Navigate To Password Recovery Flow

**Category:** Functional Bug / Usability Issue  
**Severity:** Medium

### Description
The "Forgot password" link is displayed on the login page but does not navigate the user to a password recovery workflow. Users who cannot remember their password have no available path to reset or recover access to their account.

### Steps to Reproduce
1. Navigate to `/login`
2. Click the "Forgot password" link

### Expected Behavior
The user should be redirected to a password recovery page or workflow where they can request a password reset.

### Actual Behavior
Clicking the "Forgot password" link does not perform any action and the user remains on the login page.

### Impact
Users who forget their credentials cannot recover their account through the application, preventing them from accessing the system.

### Severity
Medium

---

## FINDING-003: Sign In Button Remains Enabled With Missing Required Fields

**Category:** Usability Issue  
**Severity:** Low

### Description
The "Sign In" button on the login page remains enabled when required fields are empty. Users can attempt to submit the form before entering required information.

### Steps to Reproduce
1. Navigate to `/login`
2. Leave the Username field empty
3. Leave the Password field empty
4. Observe the "Sign In" button state
5. Enter only one required field
6. Observe the "Sign In" button state

### Expected Behavior
The "Sign In" button should remain disabled until all required fields contain valid input.

### Actual Behavior
The "Sign In" button remains enabled even when Username and/or Password fields are empty. Clicking the button triggers validation messages.

### Impact
Users may attempt to submit incomplete forms and receive validation errors instead of being guided to complete required fields first.

### Severity
Low

---

## Finding-004: Logout Redirects Users To Landing Page Instead Of Login Page

**Category:** Functional / Usability

**Description**
After logging out, users are redirected to the landing page instead of the login page.

**Steps to Reproduce**
1. Login with valid credentials
2. Click "Log Out"
3. Observe redirect destination

**Expected Behavior**
User is redirected to the login page after logout.

**Actual Behavior**
User is redirected to the landing page.

**Severity**
Low

**Notes**
Logout successfully invalidates the session. The issue is primarily related to user flow consistency and may be intentional depending on product requirements.

---

# Finding-005: Campaign Creation Page Accessible Without Authentication

**Category:** Security / Functional

**Description**
The campaign creation page can be accessed directly without an authenticated session.

**Steps to Reproduce**
1. Logout from the application
2. Navigate directly to:
   - `/customer/campaigns/create`

**Expected Behavior**
- Unauthenticated users should be redirected to the login page
- Campaign creation functionality should only be available to authenticated users

**Actual Behavior**
- Campaign creation page loads successfully without authentication
- User can access the campaign creation workflow

**Severity**
High

**Notes**
The application correctly protects the campaigns list page, but the campaign creation route does not appear to enforce the same authentication requirement. This could allow unauthorized users to access campaign creation functionality.

---

# Finding-006: No Ability to Delete or Archive Campaigns

**Category:** Usability / Functional Gap

**Description**
Users can create and edit campaigns, but there is no available option to delete, archive, or otherwise manage campaigns after creation. This may make it difficult for users to maintain and organize their campaign list over time.

**Steps to Reproduce**
1. Login with valid credentials
2. Navigate to `/customer/campaigns`
3. Open an existing campaign
4. Review available campaign actions

**Expected Behavior**
- Users should have options to manage campaigns after creation
- Available actions may include deleting a campaign, archiving a campaign, or changing campaign status

**Actual Behavior**
- Users can view and edit campaigns
- No delete, archive, or campaign management options are available

**Severity**
Low

**Notes**
The absence of campaign lifecycle management does not prevent users from creating or editing campaigns, but it may impact usability and campaign organization as the number of campaigns grows.

---

# Finding-007: Campaign Table Does Not Support Search, Filtering, or Sorting

**Category:** Usability / Scalability

**Description**
The campaigns table displays campaign records but does not provide functionality to search, filter, or sort campaigns. As the number of campaigns increases, users may have difficulty locating specific campaigns or managing a large campaign portfolio efficiently.

**Steps to Reproduce**
1. Login with valid credentials
2. Navigate to `/customer/campaigns`
3. Review the campaign table controls and available actions

**Expected Behavior**
- Users should have the ability to search for campaigns by relevant fields (for example, campaign name)
- Users should be able to filter campaigns by attributes such as date, location, publisher, or status
- Users should be able to sort campaign results by relevant columns

**Actual Behavior**
- Campaigns are displayed in a static table
- No search functionality is available
- No filtering options are available
- No sorting options are available

**Severity**
Medium

**Notes**
The current implementation supports viewing campaigns with a small number of records, but managing hundreds of campaigns would become inefficient without additional table management capabilities.

---
