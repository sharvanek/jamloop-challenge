/**
 * Generates dynamic campaign test data.
 *
 * Provides:
 * - Date picker input values
 * - Campaign grid display values
 * - Unique campaign name
 * - Default campaign targeting data
 */
export function generateCampaignData() {
  const today = new Date();

  const startDate = new Date(today);
  startDate.setDate(today.getDate() + 1);

  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 7);

  /**
   * Formats dates for Material UI date picker input.
   *
   * Format:
   * MM/DD/YYYY
   */
  const formatInputDate = (date: Date) =>
    `${String(date.getMonth() + 1).padStart(2, '0')}/${String(
      date.getDate()
    ).padStart(2, '0')}/${date.getFullYear()}`;

  /**
   * Formats dates for Campaign Grid validation.
   *
   * Format:
   * YYYY-MM-DD
   */
  const formatGridDate = (date: Date) =>
    `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  return {
    name: `Automation Campaign ${Date.now()}`,

    budget: '5000',

    // Date picker values
    startDate: formatInputDate(startDate),
    endDate: formatInputDate(endDate),

    // Grid verification values
    gridStartDate: formatGridDate(startDate),
    gridEndDate: formatGridDate(endDate),

    country: 'United States',
    state: 'Colorado',
    city: 'Denver',
    zipCode: '80202',
  };
}
