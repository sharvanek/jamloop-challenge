/**
 * Test user data used across authentication scenarios.
 *
 * Contains:
 * - Valid credentials for successful login workflows
 * - Invalid credentials for negative authentication tests
 */
export const users = {
  validUser: {
    username: '1@test.com',
    password: 'Test123',
  },

  invalidUser: {
    username: 'baduser@test.com',
    password: 'wrongpassword',
  },
};
