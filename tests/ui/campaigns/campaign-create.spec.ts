import { test } from '@playwright/test';

import { CreateCampaignPage } from '../../pages/CreateCampaignPage';
import { CampaignsPage } from '../../pages/CampaignsPage';

/**
 * Campaign Creation Test Suite
 *
 * Covers:
 *
 * - Create Campaign page validation
 * - Form field visibility
 * - Campaign creation workflow
 * - Required field validation
 * - Campaign visibility in Campaign Grid
 * - Post-creation navigation
 */
test.describe('Create Campaign', () => {
  /**
   * CAMP-012
   *
   * Verify the Create Campaign page loads successfully
   * and displays required page elements.
   */
  test(
    'CAMP-012: Verify Create Campaign Page Displays Required Elements',
    async ({ page }) => {
      const createCampaign = new CreateCampaignPage(page);

      await createCampaign.open();

      await createCampaign.verifyLoaded();
    }
  );

  /**
   * CAMP-013
   *
   * Verify all available campaign form fields
   * are displayed to the user.
   */
  test(
    'CAMP-013: Verify Create Campaign Form Displays All Available Fields',
    async ({ page }) => {
      const createCampaign = new CreateCampaignPage(page);

      await createCampaign.open();

      // Verify text input fields
      await createCampaign.expectVisible(
        createCampaign.nameField
      );

      await createCampaign.expectVisible(
        createCampaign.budgetField
      );

      // Verify date selection fields
      await createCampaign.expectVisible(
        createCampaign.startDateField
      );

      await createCampaign.expectVisible(
        createCampaign.endDateField
      );

      // Verify campaign targeting dropdowns
      await createCampaign.expectVisible(
        createCampaign.publishersDropdown
      );

      await createCampaign.expectVisible(
        createCampaign.devicesDropdown
      );

      await createCampaign.expectVisible(
        createCampaign.genderDropdown
      );

      await createCampaign.expectVisible(
        createCampaign.agesDropdown
      );

      // Verify geographic targeting fields
      await createCampaign.expectVisible(
        createCampaign.countryField
      );

      await createCampaign.expectVisible(
        createCampaign.stateField
      );

      await createCampaign.expectVisible(
        createCampaign.cityField
      );

      await createCampaign.expectVisible(
        createCampaign.zipCodeField
      );
    }
  );

  /**
   * CAMP-014
   *
   * Verify a user can successfully create a campaign
   * using valid campaign data.
   */
  test(
    'CAMP-014: Verify User Can Create Campaign With Valid Data',
    async ({ page }) => {
      const createCampaign = new CreateCampaignPage(page);

      await createCampaign.open();

      await createCampaign.createCampaign({
        name: 'Automation Test Campaign',
        budget: '5000',
        country: 'United States',
        state: 'Colorado',
        city: 'Denver',
        zipCode: '80202',
      });

      // User should return to campaign list after creation
      await createCampaign.expectUrl(
        '/customer/campaigns'
      );
    }
  );

  /**
   * CAMP-015
   *
   * Verify required campaign fields display validation
   * errors when attempting to submit an incomplete form.
   */
  test(
    'CAMP-015: Verify Required Campaign Fields Are Validated',
    async ({ page }) => {
      const createCampaign = new CreateCampaignPage(page);

      await createCampaign.open();

      // Attempt submission without required fields
      await createCampaign.click(
        createCampaign.createButton
      );

      // Verify validation messages
      await createCampaign.expectVisible(
        page.getByText('Publishers is required.')
      );

      await createCampaign.expectVisible(
        page.getByText('Devices is required.')
      );

      await createCampaign.expectVisible(
        page.getByText('Ages is required.')
      );
    }
  );

  /**
   * CAMP-023
   *
   * Verify a newly created campaign appears
   * as a row in the Campaign Grid.
   *
   * Validates:
   *
   * - Campaign creation
   * - Redirect to campaign list
   * - Grid data persistence
   */
  test(
    'CAMP-023: Verify Newly Created Campaign Appears In Campaign List',
    async ({ page }) => {
      const campaignName = 'Grid Verification Campaign';

      const createCampaign = new CreateCampaignPage(page);

      await createCampaign.open();

      await createCampaign.createCampaign({
        name: campaignName,
        budget: '5000',
        country: 'United States',
        state: 'Colorado',
        city: 'Denver',
        zipCode: '80202',
      });

      const campaigns = new CampaignsPage(page);

      await campaigns.verifyLoaded();

      // Verify created campaign appears in visible grid row
      await campaigns.verifyCampaignRow({
        name: campaignName,
        startDate: '2026-08-06',
        endDate: '2026-08-07',
        country: 'United States',
        publishers: 'Hulu',
        devices: 'Web Browser',
      });
    }
  );

  /**
   * CAMP-032
   *
   * Verify successful campaign creation
   * returns the user to the Campaign List page.
   */
  test(
    'CAMP-032: Verify Campaign Creation Returns User To Campaign List',
    async ({ page }) => {
      const createCampaign = new CreateCampaignPage(page);

      await createCampaign.open();

      await createCampaign.createCampaign({
        name: 'Return Test Campaign',
        budget: '1000',
        country: 'United States',
        state: 'Colorado',
        city: 'Denver',
        zipCode: '80202',
      });

      const campaigns = new CampaignsPage(page);

      // Confirm user is returned to campaign grid
      await campaigns.verifyLoaded();
    }
  );
});
