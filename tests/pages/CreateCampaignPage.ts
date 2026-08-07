import { Page, Locator, expect } from '@playwright/test';

import { BasePage } from './BasePage';

/**
 * Page Object Model for the Create Campaign page.
 *
 * Handles:
 *
 * - Navigating to campaign creation
 * - Validating page load
 * - Filling campaign details
 * - Selecting dropdown values
 * - Submitting campaign creation
 */
export class CreateCampaignPage extends BasePage {
  // Text fields
  readonly nameField: Locator;
  readonly budgetField: Locator;

  // Date fields
  readonly startDateField: Locator;
  readonly endDateField: Locator;

  // Campaign targeting dropdowns
  readonly publishersDropdown: Locator;
  readonly devicesDropdown: Locator;
  readonly genderDropdown: Locator;
  readonly agesDropdown: Locator;

  // Geographic targeting fields
  readonly countryField: Locator;
  readonly stateField: Locator;
  readonly cityField: Locator;
  readonly zipCodeField: Locator;

  // Primary form submission button
  readonly createButton: Locator;

  constructor(page: Page) {
    super(page);

    // Campaign name input
    this.nameField = page.getByLabel('Name');

    // Campaign budget input
    this.budgetField = page.getByLabel('Budget');

    // Campaign scheduling fields
    //
    // These are Material UI date pickers.
    // The underlying element is a text input,
    // allowing Playwright to fill dynamic dates.
    this.startDateField = page.getByLabel('Start Date');
    this.endDateField = page.getByLabel('End Date');

    // Audience targeting controls
    this.publishersDropdown = page.getByLabel('Publishers');
    this.devicesDropdown = page.getByLabel('Devices');
    this.genderDropdown = page.getByLabel('Gender');
    this.agesDropdown = page.getByLabel('Ages');

    // Geographic targeting inputs
    this.countryField = page.getByLabel('Country');
    this.stateField = page.getByLabel('State');
    this.cityField = page.getByLabel('City');
    this.zipCodeField = page.getByLabel('Zip Code');

    // Campaign creation action
    this.createButton = page.getByRole('button', {
      name: 'CREATE CAMPAIGN',
    });
  }

  /**
   * Navigates directly to the Create Campaign page.
   */
  async open() {
    await this.goto('/customer/campaigns/create');
  }

  /**
   * Confirms the Create Campaign page loaded.
   *
   * CAMP-001 validations:
   *
   * - Correct URL
   * - Create Campaign heading visible
   * - Campaign Details section visible
   * - Name field visible
   * - Create Campaign button visible
   */
  async verifyLoaded() {
    await expect(this.page)
      .toHaveURL(/campaigns\/create/);

    await expect(
      this.page.getByRole('heading', {
        name: 'Create a new campaign',
      })
    ).toBeVisible();

    await expect(
      this.page.getByRole('heading', {
        name: 'Campaign Details',
      })
    ).toBeVisible();

    await expect(this.nameField)
      .toBeVisible();

    await expect(this.createButton)
      .toBeVisible();
  }

  /**
   * Selects an option from a Material UI dropdown.
   *
   * Used for:
   *
   * - Publishers
   * - Devices
   * - Gender
   * - Ages
   */
  async selectOption(dropdown: Locator, value: string) {
    await dropdown.click();

    await this.page
      .getByRole('option', {
        name: value,
        exact: true,
      })
      .click();

    // Prevent dropdown overlays from blocking future actions
    await this.page.keyboard.press('Escape');
  }

  /**
   * Creates a campaign using supplied test data.
   *
   * Required flow:
   *
   * 1. Enter campaign information
   * 2. Enter campaign dates
   * 3. Select audience targeting options
   * 4. Enter geography
   * 5. Submit campaign
   */
  async createCampaign(data: {
    name: string;
    budget: string;
    startDate: string;
    endDate: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
  }) {
    // Basic campaign information
    await this.nameField.fill(data.name);

    await this.budgetField.fill(data.budget);

    // Campaign scheduling
    //
    // Dates are generated dynamically by test data utilities
    // and entered into the Material UI date picker inputs.
    await this.startDateField.fill(data.startDate);

    await this.endDateField.fill(data.endDate);

    // Campaign audience targeting
    await this.selectOption(
      this.publishersDropdown,
      'Hulu'
    );

    await this.selectOption(
      this.devicesDropdown,
      'Web Browser'
    );

    await this.selectOption(
      this.genderDropdown,
      'Any'
    );

    await this.selectOption(
      this.agesDropdown,
      '20 yrs - 35 yrs'
    );

    // Geographic targeting information
    await this.countryField.fill(data.country);

    await this.stateField.fill(data.state);

    await this.cityField.fill(data.city);

    await this.zipCodeField.fill(data.zipCode);

    // Submit campaign creation
    await this.createButton.click();
  }
}
