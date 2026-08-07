import { Page, Locator, expect } from '@playwright/test';

import { BasePage } from './BasePage';

/**
 * Page Object Model for the Campaigns listing page.
 *
 * Handles:
 *
 * - Navigating to campaigns
 * - Verifying campaign list UI
 * - Creating campaign navigation
 * - Logging out
 * - Validating campaign rows and grid data
 */
export class CampaignsPage extends BasePage {
  // Primary page elements used across campaign tests
  readonly createCampaignButton: Locator;
  readonly campaignsTable: Locator;
  readonly tableRows: Locator;

  constructor(page: Page) {
    super(page);

    // Button used to begin the create campaign workflow
    this.createCampaignButton = page.getByRole('button', {
      name: /create campaign/i,
    });

    // Main campaign results table
    this.campaignsTable = page.locator('table');

    // Individual campaign rows displayed in the grid
    this.tableRows = page.locator('table tbody tr');
  }

  /**
   * Navigates directly to the Campaigns page.
   */
  async open() {
    await this.goto('/customer/campaigns');
  }

  /**
   * Confirms the Campaigns page loaded successfully.
   *
   * Validates:
   *
   * - Correct URL
   * - Create Campaign action is available
   */
  async verifyLoaded() {
    await expect(this.page).toHaveURL(/\/customer\/campaigns/);

    await expect(this.createCampaignButton).toBeVisible();
  }

  /**
   * Verifies that campaigns are displayed in the grid.
   *
   * Used for validating that existing campaigns
   * are available to the user.
   */
  async verifyCampaignsDisplayed() {
    await expect(this.tableRows.first()).toBeVisible();
  }

  /**
   * Opens the Create Campaign workflow.
   */
  async clickCreateCampaign() {
    await this.createCampaignButton.click();
  }

  /**
   * Logs the current user out.
   *
   * Handles different possible implementations:
   *
   * - Button
   * - Link
   * - Text element
   *
   * This makes the Page Object resilient to UI changes.
   */
  async logout() {
    const logoutButton = this.page.getByRole('button', {
      name: /log out/i,
    });

    if (await logoutButton.isVisible()) {
      await logoutButton.click();
      return;
    }

    const logoutLink = this.page.getByRole('link', {
      name: /log out/i,
    });

    if (await logoutLink.isVisible()) {
      await logoutLink.click();
      return;
    }

    // Final fallback if logout is rendered as plain text
    await this.page
      .getByText('LOG OUT', {
        exact: false,
      })
      .click();
  }

  /**
   * Confirms logout completed successfully.
   *
   * Application redirects users to the root page
   * after logout.
   */
  async verifyLoggedOut() {
    await expect(this.page).toHaveURL('/');
  }

  /**
   * Verifies a campaign exists in the campaign grid.
   *
   * Used by CAMP-023:
   * Verify Newly Created Campaign Appears In Campaign List
   */
  async verifyCampaignExists(campaignName: string) {
    await expect(
      this.tableRows
        .filter({
          hasText: campaignName,
        })
        .first()
    ).toBeVisible();
  }

  /**
   * Returns a specific campaign row by campaign name.
   *
   * Centralizes row lookup logic so tests
   * do not directly interact with table selectors.
   */
  async getCampaignRow(campaignName: string) {
    return this.tableRows
      .filter({
        hasText: campaignName,
      })
      .first();
  }

  /**
   * Validates visible fields inside a campaign grid row.
   *
   * Example:
   *
   * - Campaign name
   * - Budget
   * - Geography
   * - Other displayed columns
   */
  async verifyCampaignGridFields(
    campaignName: string,
    fields: string[]
  ) {
    const row = this.getCampaignRow(campaignName);

    for (const field of fields) {
      await expect(row).toContainText(field);
    }
  }

  /**
   * Validates a campaign row against expected values.
   *
   * Used after campaign creation to confirm
   * the created campaign appears correctly.
   */
  async verifyCampaignRow(data: {
    name: string;
    budget?: string;
    country?: string;
    state?: string;
    city?: string;
    zipCode?: string;
  }) {
    const row = this.getCampaignRow(data.name);

    await expect(row).toBeVisible();

    // Validate only fields provided by the test
    for (const value of [
      data.budget,
      data.country,
      data.state,
      data.city,
      data.zipCode,
    ]) {
      if (value) {
        await expect(row).toContainText(value);
      }
    }
  }

  /**
   * Opens a campaign from the grid.
   *
   * Used for future edit campaign tests:
   * CAMP-033+
   */
  async clickCampaign(campaignName: string) {
    const row = this.getCampaignRow(campaignName);

    await row.click();
  }

  /**
   * Returns all visible text from a campaign row.
   *
   * Useful for debugging failures or validating
   * additional grid fields.
   */
  async getRowText(campaignName: string) {
    const row = this.getCampaignRow(campaignName);

    return row.innerText();
  }
}
