import { test } from '@playwright/test';

import { LandingPage } from '../../pages/LandingPage';
import { LoginPage } from '../../pages/LoginPage';
import { CampaignsPage } from '../../pages/CampaignsPage';

import { users } from '../../data/users';



/**
 * Authentication test suite.
 *
 * Covers:
 * - Login page validation
 * - Successful authentication
 * - Failed authentication
 * - Protected route access
 * - Logout behavior
 */
test.describe('Authentication', () => {



  /**
   * AUTH-001
   *
   * Verifies the login page contains
   * all required authentication elements.
   */
  test(
    'AUTH-001: Verify Login Page Displays Required Elements',
    async ({ page }) => {

      const login = new LoginPage(page);


      await login.open();

      await login.verifyLoaded();

    }
  );





  /**
   * AUTH-002
   *
   * Verifies a valid user can authenticate
   * and access the campaigns dashboard.
   */
  test(
    'AUTH-002: Verify User Can Login With Valid Credentials',
    async ({ page }) => {


      const landing = new LandingPage(page);

      const login = new LoginPage(page);

      const campaigns = new CampaignsPage(page);



      // Start from public landing page
      await landing.open();


      // Navigate through the user login flow
      await landing.goToLogin();


      // Authenticate with valid credentials
      await login.login(
        users.validUser
      );


      // Confirm authenticated landing page
      await campaigns.verifyLoaded();

    }
  );





  /**
   * AUTH-003
   *
   * Verifies invalid credentials are rejected
   * and an appropriate error message is displayed.
   */
  test(
    'AUTH-003: Verify User Cannot Login With Invalid Credentials',
    async ({ page }) => {


      const login = new LoginPage(page);


      await login.open();


      // Attempt authentication with invalid data
      await login.login(
        users.invalidUser
      );


      await login.verifyLoginError();

    }
  );





  /**
   * AUTH-009
   *
   * Verifies successful authentication redirects
   * the user to the protected campaigns area.
   */
  test(
    'AUTH-009: Verify Authenticated User Is Redirected After Login',
    async ({ page }) => {


      const login = new LoginPage(page);


      await login.open();


      await login.login(
        users.validUser
      );


      await login.verifyLoggedIn();

    }
  );





  /**
   * AUTH-010
   *
   * Verifies unauthenticated users cannot access
   * protected application routes.
   */
  test(
    'AUTH-010: Verify Unauthenticated Users Cannot Access Protected Pages',
    async ({ page }) => {


      // Attempt direct access without authentication
      await page.goto(
        '/customer/campaigns'
      );


      // Application should redirect to login
      await page.waitForURL(
        '**/login'
      );

    }
  );





  /**
   * AUTH-011
   *
   * Verifies an authenticated user can
   * successfully log out of the application.
   */
  test(
    'AUTH-011: Verify User Can Logout Successfully',
    async ({ page }) => {


      const login = new LoginPage(page);

      const campaigns = new CampaignsPage(page);



      // Authenticate user
      await login.open();

      await login.login(
        users.validUser
      );


      await campaigns.verifyLoaded();


      // End authenticated session
      await campaigns.logout();


      // Confirm user is returned to public area
      await campaigns.verifyLoggedOut();

    }
  );


});
