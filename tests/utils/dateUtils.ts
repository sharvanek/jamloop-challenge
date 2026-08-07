/**
 * Converts campaign form date format (MM/DD/YYYY)
 * into campaign grid date format (YYYY-MM-DD).
 *
 * The Create Campaign page uses Material UI date pickers
 * which accept/display MM/DD/YYYY.
 *
 * The Campaign Grid displays dates as YYYY-MM-DD.
 *
 * Example:
 * 08/08/2026 -> 2026-08-08
 */
export function formatCampaignGridDate(
  date: string
): string {
  const [month, day, year] = date.split('/');

  return `${year}-${month}-${day}`;
}
