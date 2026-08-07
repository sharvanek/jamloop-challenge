import { test } from '@playwright/test';

import { LandingPage } from '../../pages/LandingPage';


/**
 * Landing Page Test Suite
 *
 * Covers:
 *
 * - Landing page availability
 * - Login navigation
 * - Campaign creation authentication requirements
 */
test.describe('Landing Page', () => {


  /**
   * LAND-001
   *
   * Verify the landing page loads successfully
   * and required elements are displayed.
   */
  test('LAND-001: Verify Landing Page Loads With Required Branding and Content',
    async ({ page }) => {

      const landing =
        new LandingPage(page);

      await landing.open();

      await landing.verifyLoaded();

    });


  /**
   * LAND-002
   *
   * Verify users can navigate from the landing page
   * to the login page.
   */
  test('LAND-002: Verify User Can Navigate To Login From Landing Page',
    async ({ page }) => {

      const landing =
        new LandingPage(page);

      await landing.open();

      // Navigate to authentication workflow
      await landing.goToLogin();

      // Verify login page loaded
      await landing.verifyRedirectedToLogin();

    });


  /**
   * LAND-003
   *
   * Verify unauthenticated users are redirected
   * to login when starting campaign creation.
   */
  test('LAND-003: Verify Unauthenticated User Is Redirected To Login When Starting Campaign Creation',
    async ({ page }) => {

      const landing =
        new LandingPage(page);

      await landing.open();

      // Start campaign creation workflow
      await landing.clickCreateCampaign();

      // Verify authentication is required
      await landing.verifyRedirectedToLogin();

    });

});
