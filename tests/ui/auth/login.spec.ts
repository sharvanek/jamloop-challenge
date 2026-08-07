import { test } from '@playwright/test';

import { LandingPage } from '../../pages/LandingPage';
import { LoginPage } from '../../pages/LoginPage';
import { CampaignsPage } from '../../pages/CampaignsPage';

import { users } from '../../data/users';

/**
 * Authentication Test Suite
 *
 * Covers:
 * - Login page validation
 * - Successful authentication
 * - Failed authentication
 * - Authentication redirects
 * - Protected route access
 * - Logout behavior
 */
test.describe('Authentication', () => {

  /**
   * AUTH-001
   *
   * Verifies the login page loads successfully
   * and displays all required authentication elements.
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
   * Verifies a user can successfully authenticate
   * using valid credentials and access the application.
   */
  test(
    'AUTH-002: Verify User Can Login With Valid Credentials',
    async ({ page }) => {

      const landing = new LandingPage(page);
      const login = new LoginPage(page);
      const campaigns = new CampaignsPage(page);

      // Start from the public landing page
      await landing.open();

      // Navigate to the login page
      await landing.goToLogin();

      // Authenticate using valid credentials
      await login.login(
        users.validUser
      );

      // Verify authenticated landing page
      await campaigns.verifyLoaded();

    }
  );

  /**
   * AUTH-003
   *
   * Verifies invalid credentials are rejected
   * and an authentication error is displayed.
   */
  test(
    'AUTH-003: Verify User Cannot Login With Invalid Credentials',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.open();

      // Attempt authentication using invalid credentials
      await login.login(
        users.invalidUser
      );

      // Verify authentication failure
      await login.verifyLoginError();

    }
  );

  /**
   * AUTH-009
   *
   * Verifies authenticated users are redirected
   * to the protected application after login.
   */
  test(
    'AUTH-009: Verify Authenticated User Is Redirected After Login',
    async ({ page }) => {

      const login = new LoginPage(page);

      await login.open();

      // Authenticate using valid credentials
      await login.login(
        users.validUser
      );

      // Verify authenticated redirect
      await login.verifyLoggedIn();

    }
  );

  /**
   * AUTH-010
   *
   * Verifies protected application pages
   * cannot be accessed without authentication.
   */
  test(
    'AUTH-010: Verify Unauthenticated Users Cannot Access Protected Pages',
    async ({ page }) => {

      // Attempt direct access to a protected route
      await page.goto(
        '/customer/campaigns'
      );

      // Verify authentication is required
      await page.waitForURL(
        '**/login'
      );

    }
  );

  /**
   * AUTH-011
   *
   * Verifies an authenticated user can
   * successfully end their session.
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

      // Verify user returned to public application
      await campaigns.verifyLoggedOut();

    }
  );

});
