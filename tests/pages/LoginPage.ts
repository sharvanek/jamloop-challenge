import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly heading;
  readonly usernameField;
  readonly passwordField;
  readonly signInButton;
  readonly forgotPasswordLink;
  readonly errorMessage;

  constructor(page: Page) {
    super(page);

    this.heading = page.getByRole('heading', {
      name: 'Welcome back!',
    });

    this.usernameField = page.getByLabel('Username');

    this.passwordField = page.getByLabel('Password');

    this.signInButton = page
      .locator('#login-form')
      .getByRole('button', { name: 'Sign In' });

    this.forgotPasswordLink = page.getByRole('link', {
      name: 'I forgot my password',
    });

    this.errorMessage = page.getByText(
      'Username or password is incorrect.'
    );
  }

  async open() {
    await this.goto('/login');
  }

  async verifyLoaded() {
    await this.expectUrl('/login');

    await this.expectVisible(this.heading);
    await this.expectVisible(this.usernameField);
    await this.expectVisible(this.passwordField);
    await this.expectVisible(this.signInButton);
    await this.expectVisible(this.forgotPasswordLink);
  }

  async login(user: { username: string; password: string }) {
    await this.fill(this.usernameField, user.username);
    await this.fill(this.passwordField, user.password);

    await this.click(this.signInButton);
  }

  async loginWith(username: string, password: string) {
    await this.fill(this.usernameField, username);
    await this.fill(this.passwordField, password);

    await this.click(this.signInButton);
  }

  async clickSignIn() {
    await this.click(this.signInButton);
  }

  async clickForgotPassword() {
    await this.click(this.forgotPasswordLink);
  }


  async verifyLoginError() {
    await this.expectContainsText(
      this.errorMessage,
      'Username or password is incorrect.'
    );
  }

  async verifyUsernameRequired() {
    await this.clickSignIn();

    await this.expectVisible(this.usernameField);
  }

  async verifyPasswordRequired() {
    await this.clickSignIn();

    await this.expectVisible(this.passwordField);
  }

  async verifyLoggedIn() {
    await this.expectUrl('/customer/campaigns');
  }
}
