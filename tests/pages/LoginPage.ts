import { Page, Locator } from '@playwright/test';

import { BasePage } from './BasePage';

/**
 * Page Object Model for the Login page.
 *
 * Handles:
 *
 * - Login page validation
 * - User authentication
 * - Login error validation
 * - Password reset navigation
 */
export class LoginPage extends BasePage {
  readonly heading: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    // Login page heading
    this.heading = page.getByRole('heading', {
      name: 'Welcome back!',
    });

    // Authentication fields
    this.usernameField = page.getByLabel('Username');

    this.passwordField = page.getByLabel('Password');

    // Login submission button
    this.signInButton = page
      .locator('#login-form')
      .getByRole('button', {
        name: 'Sign In',
      });

    // Password reset navigation
    this.forgotPasswordLink = page.getByRole('link', {
      name: 'I forgot my password',
    });

    // Authentication error message
    this.errorMessage = page.getByText(
      'Username or password is incorrect.'
    );
  }

  /**
   * Opens the login page.
   */
  async open() {
    await this.goto('/login');
  }

  /**
   * Verifies login page loaded correctly.
   *
   * Validates:
   *
   * - Correct URL
   * - Heading
   * - Username field
   * - Password field
   * - Sign in button
   * - Forgot password link
   */
  async verifyLoaded() {
    await this.expectUrl('/login');

    await this.expectVisible(this.heading);

    await this.expectVisible(this.usernameField);

    await this.expectVisible(this.passwordField);

    await this.expectVisible(this.signInButton);

    await this.expectVisible(this.forgotPasswordLink);
  }

  /**
   * Authenticates a user using provided credentials.
   */
  async login(user: {
    username: string;
    password: string;
  }) {
    await this.fill(
      this.usernameField,
      user.username
    );

    await this.fill(
      this.passwordField,
      user.password
    );

    await this.click(this.signInButton);
  }

  /**
   * Authenticates a user using individual values.
   */
  async loginWith(
    username: string,
    password: string
  ) {
    await this.fill(
      this.usernameField,
      username
    );

    await this.fill(
      this.passwordField,
      password
    );

    await this.click(this.signInButton);
  }

  /**
   * Clicks the Sign In button.
   */
  async clickSignIn() {
    await this.click(this.signInButton);
  }

  /**
   * Navigates to password reset flow.
   */
  async clickForgotPassword() {
    await this.click(this.forgotPasswordLink);
  }

  /**
   * Verifies invalid login displays an error.
   */
  async verifyLoginError() {
    await this.expectContainsText(
      this.errorMessage,
      'Username or password is incorrect.'
    );
  }

  /**
   * Verifies username validation behavior.
   */
  async verifyUsernameRequired() {
    await this.clickSignIn();

    await this.expectVisible(this.usernameField);
  }

  /**
   * Verifies password validation behavior.
   */
  async verifyPasswordRequired() {
    await this.clickSignIn();

    await this.expectVisible(this.passwordField);
  }

  /**
   * Verifies successful authentication.
   */
  async verifyLoggedIn() {
    await this.expectUrl('/customer/campaigns');
  }
}
