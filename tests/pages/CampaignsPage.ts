import { Page, Locator, expect } from '@playwright/test';

import { BasePage } from './BasePage';

/**
 * Page Object Model for the Campaigns page.
 *
 * Handles:
 * - Campaign page validation
 * - Campaign table validation
 * - Create campaign navigation
 * - Logout workflow
 */
export class CampaignsPage extends BasePage {
  readonly logo: Locator;
  readonly heading: Locator;
  readonly description: Locator;

  readonly createCampaignButton: Locator;
  readonly logoutButton: Locator;

  readonly campaignsTable: Locator;
  readonly campaignRows: Locator;

  constructor(page: Page) {
    super(page);

    // Branding
    this.logo = page.getByAltText('JamLoop');

    // Page content
    this.heading = page.getByRole('heading', {
      name: 'Campaigns',
    });

    this.description = page.getByText(
      'Welcome to your Advertising Campaign Dashboard!',
      {
        exact: false,
      }
    );

    // Actions
    this.createCampaignButton = page.getByRole('button', {
      name: 'Create Campaign',
    });

    this.logoutButton = page.getByRole('button', {
      name: 'Log Out',
    });

    // Campaign grid
    this.campaignsTable = page.getByRole('table', {
      name: 'Campaigns Table',
    });

    this.campaignRows = page.locator(
      'table tbody tr'
    );
  }

  /**
   * Opens the campaigns page.
   */
  async open() {
    await this.goto('/customer/campaigns');
  }

  /**
   * Verifies campaigns page loaded correctly.
   *
   * Validates:
   * - URL
   * - Branding
   * - Page heading
   * - Description
   * - Create campaign button
   * - Campaign table
   */
  async verifyLoaded() {
    await this.expectUrl('/customer/campaigns');

    await expect(this.logo).toBeVisible();

    await expect(this.heading).toBeVisible();

    await expect(this.description).toBeVisible();

    await expect(
      this.createCampaignButton
    ).toBeVisible();

    await expect(
      this.campaignsTable
    ).toBeVisible();
  }

  /**
   * Verifies campaigns exist in the table.
   */
  async verifyCampaignsDisplayed() {
    await expect(
      this.campaignRows.first()
    ).toBeVisible();
  }

  /**
   * Opens Create Campaign workflow.
   */
  async clickCreateCampaign() {
    await this.createCampaignButton.click();
  }

  /**
   * Logs out the current user.
   */
  async logout() {
    await this.logoutButton.click();
  }

  /**
   * Verifies logout redirected user
   * back to landing page.
   */
  async verifyLoggedOut() {
    await this.expectUrl('/');
  }

  /**
   * Finds a campaign row by name.
   */
  getCampaignRow(campaignName: string) {
    return this.campaignRows.filter({
      hasText: campaignName,
    });
  }

  /**
   * Verifies campaign exists in table.
   */
  async verifyCampaignExists(
    campaignName: string
  ) {
    await expect(
      this.getCampaignRow(campaignName)
    ).toBeVisible();
  }

  /**
   * Verifies campaign row contains values.
   */
  async verifyCampaignRow(data: {
    name: string;
    startDate?: string;
    endDate?: string;
    country?: string;
    publisher?: string;
    device?: string;
  }) {
    const row = this.getCampaignRow(
      data.name
    );

    await expect(row).toBeVisible();

    for (const value of [
      data.startDate,
      data.endDate,
      data.country,
      data.publisher,
      data.device,
    ]) {
      if (value) {
        await expect(row).toContainText(value);
      }
    }
  }

  /**
   * Opens a campaign from the table.
   */
  async clickCampaign(
    campaignName: string
  ) {
    await this.getCampaignRow(
      campaignName
    )
      .getByRole('link')
      .click();
  }

  /**
   * Gets all text from a campaign row.
   */
  async getRowText(
    campaignName: string
  ) {
    return this.getCampaignRow(
      campaignName
    ).innerText();
  }
}
