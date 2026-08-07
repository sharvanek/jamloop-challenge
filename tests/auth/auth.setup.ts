import { test as setup, expect } from '@playwright/test';

import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { CampaignsPage } from '../pages/CampaignsPage';

import { users } from '../data/users';


// Location where Playwright stores the authenticated browser state.
// Tests configured to use this file can start already logged in.
const authFile = 'playwright/.auth/user.json';


/**
 * Global authentication setup.
 *
 * This runs before authenticated test suites and creates
 * a reusable logged-in browser session.
 *
 * Flow:
 * 1. Open landing page
 * 2. Navigate to login
 * 3. Authenticate with valid test user
 * 4. Verify user lands on campaigns page
 * 5. Save browser storage state for future tests
 */
setup('authenticate', async ({ page }) => {


  // Initialize page objects used during authentication flow
  const landing = new LandingPage(page);
  const login = new LoginPage(page);
  const campaigns = new CampaignsPage(page);


  // Navigate to application entry point
  await landing.open();


  // Open login workflow from landing page
  await landing.goToLogin();


  // Confirm login page loaded before entering credentials
  await login.verifyLoaded();


  // Authenticate using predefined valid test credentials
  await login.login(
    users.validUser
  );


  // Confirm successful authentication by validating
  // access to the authenticated campaigns page
  await campaigns.verifyLoaded();


  // Persist authenticated session so UI tests
  // do not need to repeat login for every test
  await page.context().storageState({
    path: authFile,
  });

});
