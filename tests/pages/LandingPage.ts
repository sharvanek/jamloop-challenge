import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


/**
 * Page Object Model for the Landing page.
 *
 * Handles:
 * - Landing page validation
 * - Navigation to login
 * - Navigation to campaign creation workflow
 */
export class LandingPage extends BasePage {


  // Landing page elements
  readonly heading: Locator;
  readonly signInLink: Locator;
  readonly createCampaignButton: Locator;



  constructor(page: Page) {

    super(page);



    // Main landing page heading
    this.heading = page.getByRole('heading', {
      name: 'Elevate your brand with Connected TV',
    });



    // Navigation link to login page
    this.signInLink = page.getByRole('link', {
      name: 'Sign In',
    });



    // CTA button for starting campaign creation
    this.createCampaignButton = page.getByRole('button', {
      name: 'Create a campaign',
    });

  }



  /**
   * Opens the application landing page.
   */
  async open() {

    await this.goto('/');

  }



  /**
   * Verifies landing page loaded correctly.
   *
   * Validates:
   * - Correct URL
   * - Page heading
   * - Sign in navigation
   * - Create campaign CTA
   */
  async verifyLoaded() {

    await this.expectUrl('/');


    await this.expectVisible(
      this.heading
    );


    await this.expectVisible(
      this.signInLink
    );


    await this.expectVisible(
      this.createCampaignButton
    );

  }



  /**
   * Navigates from landing page to login.
   */
  async goToLogin() {

    await this.click(
      this.signInLink
    );

  }



  /**
   * Starts campaign creation workflow.
   */
  async clickCreateCampaign() {

    await this.click(
      this.createCampaignButton
    );

  }



  /**
   * Verifies user was redirected
   * to campaigns page.
   */
  async verifyRedirectedToCampaigns() {

    await this.expectUrl(
      '/customer/campaigns'
    );

  }



  /**
   * Verifies user was redirected
   * to login page.
   */
  async verifyRedirectedToLogin() {

    await this.expectUrl(
      '/login'
    );

  }

}
