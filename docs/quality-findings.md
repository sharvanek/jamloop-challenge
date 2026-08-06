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

## Finding-005: Campaign Creation Page Accessible Without Authentication

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

## Finding-006: No Ability to Delete or Archive Campaigns

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

## Finding-007: Campaign Table Does Not Support Search, Filtering, or Sorting

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

## Finding-008: Budget Field Accepts Invalid Values

**Category:** Functional Bug / Validation

**Description**
The campaign creation form allows invalid budget values, including non-numeric and negative amounts.

**Steps to Reproduce**
1. Login with valid credentials
2. Navigate to `/customer/campaigns/create`
3. Enter a non-numeric value in the Budget field
4. Submit the campaign form
5. Repeat using a negative budget value

**Expected Behavior**
- Budget should only accept valid positive numeric values
- Invalid values should display validation feedback
- Campaign creation should be prevented

**Actual Behavior**
- Non-numeric and negative budget values are accepted
- No validation error is displayed

**Severity**
Medium

---

## Finding-009: Validation Errors Do Not Automatically Scroll Into View

**Category:** Usability / Accessibility

**Description**
When form validation fails, invalid fields are highlighted and error messages are displayed, but the page does not automatically scroll to the location of the invalid field. On longer forms, users may not immediately know which fields require attention.

**Steps to Reproduce**
1. Login with valid credentials
2. Navigate to `/customer/campaigns/create`
3. Enter invalid data that triggers validation errors
4. Submit the form
5. Observe the page position after validation occurs

**Expected Behavior**
- The page should automatically scroll to the first invalid field
- The invalid field and associated error message should be visible to the user

**Actual Behavior**
- Validation errors are displayed
- Invalid fields are highlighted
- User remains at the current scroll position and may need to manually locate errors

**Severity**
Low

**Notes**
This does not prevent campaign creation workflows from functioning, but improving error visibility would make form completion easier, especially on longer forms.

---

## Finding-010: Campaign Dates Shift Forward By One Day

**Category:** Functional Bug / Data Integrity

**Description**
Campaign start and end dates are saved or displayed one day later than the dates selected by the user during campaign creation.

**Steps to Reproduce**
1. Login with valid credentials
2. Navigate to `/customer/campaigns/create`
3. Create a campaign
4. Select:
   - Start Date: 08/07/2026
   - End Date: 08/14/2026
5. Submit the campaign
6. View the created campaign

**Expected Behavior**
- Start Date should display as 08/07/2026
- End Date should display as 08/14/2026

**Actual Behavior**
- Start Date displays as 08/08/2026
- End Date displays as 08/15/2026

**Severity**
Medium

**Notes**
This may indicate a date handling or timezone conversion issue. Incorrect campaign dates could impact campaign scheduling and reporting accuracy.

---

## Finding-011: Campaign Devices Cannot Be Updated

**Category:** Functional Bug

**Description**
Users are unable to modify the Devices selection for an existing campaign. The campaign edit workflow allows access to the field, but changes are not successfully applied.

**Steps to Reproduce**
1. Login with valid credentials
2. Navigate to `/customer/campaigns`
3. Open an existing campaign
4. Change the Devices selection
5. Save the campaign
6. Reopen the campaign

**Expected Behavior**
- Updated device selections should be saved and displayed when reopening the campaign

**Actual Behavior**
- Device changes are not saved

**Severity**
Medium

**Notes**
Users can create campaigns with device targeting, but cannot modify device targeting after the campaign has been created.

---

## Finding-012: Campaign Dates Are Swapped After Editing Any Campaign Field

**Category:** Functional Bug / Data Integrity

**Description**
When editing an existing campaign and saving changes to any field, the campaign start date and end date values are swapped after the update is saved. This issue occurs even when the date fields themselves are not modified.

**Steps to Reproduce**
1. Login with valid credentials
2. Navigate to `/customer/campaigns`
3. Open an existing campaign
4. Modify any campaign field (for example: name, budget, publisher, or device)
5. Save the campaign
6. Review the saved campaign dates

**Expected Behavior**
- Only the modified field(s) should be updated
- Campaign start date should remain unchanged
- Campaign end date should remain unchanged

**Actual Behavior**
- Campaign update completes
- Start date and end date values are swapped after saving
- Date values are modified even though the date fields were not changed

**Severity**
High

**Notes**
This issue affects campaign data integrity because unrelated edits can unintentionally modify campaign scheduling dates. Users may unknowingly save campaigns with incorrect active periods.

---

## Finding-013: Location Fields Allow Inconsistent Data Entry

**Category:** Usability Issue / Data Quality Risk

**Description**
The campaign creation form uses free-text inputs for Country, State, City, and Zip Code. This approach may allow inconsistent location data entry and increase the likelihood of invalid or duplicate location values.

**Steps to Reproduce**
1. Login with valid credentials
2. Navigate to `/customer/campaigns/create`
3. Enter location information:
   - Country
   - State
   - City
   - Zip Code
4. Observe the available input options

**Expected Behavior**
- Location fields should provide controls that help users enter consistent location data.
- Country, State, and City could use controlled selections (such as dropdowns/autocomplete fields).
- Zip Code entry could validate the format and populate related location fields where possible.

**Actual Behavior**
- Country, State, City, and Zip Code are free-text fields.
- Users must manually enter location information.
- No automatic validation or location lookup occurs.

**Severity**
Low

**Notes**
As campaign volume grows, free-text location fields may lead to inconsistent values, making campaign targeting, filtering, and reporting more difficult. Consider using structured location inputs or address lookup functionality to improve data consistency.
