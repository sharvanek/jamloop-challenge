import { expect, Locator, Page } from '@playwright/test';

/**
 * Base Page Object
 *
 * Contains reusable Playwright actions and assertions shared
 * across all page objects.
 *
 * Individual page classes should extend this class instead of
 * duplicating common browser interactions.
 */
export class BasePage {
  // Shared Playwright page instance used by all page objects
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates the browser to a specific application route.
   *
   * Example:
   * await this.goto('/customer/campaigns');
   */
  async goto(path: string) {
    await this.page.goto(path);
  }

  /**
   * Validates the current browser URL matches the expected path.
   *
   * Used for navigation validation in page tests.
   */
  async expectUrl(path: string) {
    await expect(this.page).toHaveURL(path);
  }

  /**
   * Clicks a provided Playwright locator.
   *
   * Centralizes click behavior so page objects use
   * consistent interaction methods.
   */
  async click(locator: Locator) {
    await locator.click();
  }

  /**
   * Fills an input field with the provided value.
   *
   * Used by page objects for form interactions.
   */
  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  /**
   * Verifies that an element is visible on the page.
   *
   * Commonly used for required UI elements and page validation.
   */
  async expectVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  /**
   * Verifies that an element is hidden.
   *
   * Useful for validating menus, dialogs, or conditional UI.
   */
  async expectHidden(locator: Locator) {
    await expect(locator).toBeHidden();
  }

  /**
   * Verifies that an element contains expected text.
   *
   * Used when validating partial text matches.
   */
  async expectContainsText(locator: Locator, text: string) {
    await expect(locator).toContainText(text);
  }

  /**
   * Verifies an element contains exact expected text.
   */
  async expectText(locator: Locator, text: string) {
    await expect(locator).toHaveText(text);
  }

  /**
   * Verifies the current URL contains a specific value.
   *
   * Useful when routes include dynamic parameters.
   *
   * Example:
   * /customer/campaigns/edit/123
   */
  async expectUrlContains(value: string) {
    await expect(this.page).toHaveURL(new RegExp(value));
  }
}
