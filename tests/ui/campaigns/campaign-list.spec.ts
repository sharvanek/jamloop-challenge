import { test } from '@playwright/test';

import { CampaignsPage } from '../../pages/CampaignsPage';



/**
 * Campaigns page test suite.
 *
 * Covers:
 * - Campaign dashboard availability
 * - Existing campaign visibility
 * - Create campaign navigation
 * - Logout functionality
 */
test.describe('Campaigns Page', () => {




  /**
   * CAMP-001
   *
   * Verifies the campaigns page loads successfully
   * and required UI elements are displayed.
   */
  test(
    'CAMP-001: Verify Campaigns Page Displays Required Elements',
    async ({ page }) => {


      const campaigns = new CampaignsPage(page);



      // Navigate to campaigns dashboard
      await campaigns.open();


      // Validate page loaded successfully
      await campaigns.verifyLoaded();

    }
  );






  /**
   * CAMP-002
   *
   * Verifies authenticated users can view
   * existing campaigns in the campaign grid.
   */
  test(
    'CAMP-002: Verify User Can View Existing Campaigns',
    async ({ page }) => {


      const campaigns = new CampaignsPage(page);



      await campaigns.open();


      // Confirm campaign rows are displayed
      await campaigns.verifyCampaignsDisplayed();

    }
  );






  /**
   * CAMP-003
   *
   * Verifies users can access the campaign
   * creation workflow from the campaigns page.
   */
  test(
    'CAMP-003: Verify User Can Access Create Campaign Workflow',
    async ({ page }) => {


      const campaigns = new CampaignsPage(page);



      await campaigns.open();


      // Navigate to campaign creation page
      await campaigns.clickCreateCampaign();



      // Verify correct destination
      await campaigns.expectUrl(
        '/customer/campaigns/create'
      );

    }
  );






  /**
   * CAMP-004
   *
   * Verifies authenticated users can
   * successfully log out from the campaigns page.
   */
  test(
    'CAMP-004: Verify User Can Logout From Campaigns Page',
    async ({ page }) => {


      const campaigns = new CampaignsPage(page);



      await campaigns.open();



      // End authenticated session
      await campaigns.logout();



      // Confirm redirect after logout
      await campaigns.verifyLoggedOut();

    }
  );


});
