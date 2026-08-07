import { test } from '@playwright/test';

import { LandingPage } from '../../pages/LandingPage';



/**
 * Landing Page Test Suite
 *
 * Covers:
 * - Landing page availability
 * - Login navigation
 * - Create Campaign navigation
 */
test.describe('Landing Page', () => {



  /**
   * LAND-001
   *
   * Verify the landing page loads successfully
   * and required elements are displayed.
   */
  test('LAND-001: Verify Landing Page Loads',
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
  test('LAND-002: Verify Sign In Navigation',
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
   * Verify users can start the campaign creation workflow
   * from the landing page.
   */
  test('LAND-003: Verify Create Campaign Navigation',
    async ({ page }) => {


      const landing =
        new LandingPage(page);


      await landing.open();


      // Start campaign creation workflow
      await landing.clickCreateCampaign();


      // Verify user is redirected to campaigns page
      await landing.verifyRedirectedToCampaigns();

    });


});
