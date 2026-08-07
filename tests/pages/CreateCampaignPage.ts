import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';


/**
 * Page Object Model for the Create Campaign page.
 *
 * Handles:
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
      name: 'CREATE CAMPAIGN'
    });

  }



  /**
   * Navigates directly to the Create Campaign page.
   */
  async open() {

    await this.page.goto(
      '/customer/campaigns/create'
    );

  }



  /**
   * Confirms the Create Campaign page loaded.
   *
   * Validates:
   * - Correct URL
   * - Create Campaign button is visible
   */
  async verifyLoaded() {

    await expect(
      this.page
    ).toHaveURL(
      /campaigns\/create/
    );


    await expect(
      this.createButton
    ).toBeVisible();

  }



  /**
   * Selects an option from a Material UI dropdown.
   *
   * This helper handles:
   * - Opening the dropdown
   * - Selecting the requested option
   * - Closing the menu
   *
   * Used for:
   * - Publishers
   * - Devices
   * - Gender
   * - Ages
   */
  async selectOption(
    dropdown: Locator,
    value: string
  ) {


    await dropdown.click();


    await this.page
      .getByRole('option', {
        name: value,
        exact: true
      })
      .click();


    // Ensures dropdown overlays do not block future actions
    await this.page.keyboard.press(
      'Escape'
    );

  }



  /**
   * Creates a campaign using valid test data.
   *
   * Required flow:
   * 1. Enter campaign information
   * 2. Select audience targeting options
   * 3. Enter geography
   * 4. Submit campaign
   *
   * Used by:
   * - CAMP-014
   * - CAMP-023
   * - CAMP-032
   */
  async createCampaign(data: {

    name: string;

    budget: string;

    country: string;

    state: string;

    city: string;

    zipCode: string;

  }) {



    /*
      Basic campaign information
    */

    await this.nameField.fill(
      data.name
    );


    await this.budgetField.fill(
      data.budget
    );



    /*
      Campaign audience targeting.
      
      These values represent required
      dropdown selections needed for
      successful campaign creation.
    */

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



    /*
      Geographic targeting information.
      
      These values are passed from the
      test to allow different campaign
      scenarios in the future.
    */

    await this.countryField.fill(
      data.country
    );


    await this.stateField.fill(
      data.state
    );


    await this.cityField.fill(
      data.city
    );


    await this.zipCodeField.fill(
      data.zipCode
    );



    /*
      Submit campaign creation.
    */

    await this.createButton.click();

  }

}
