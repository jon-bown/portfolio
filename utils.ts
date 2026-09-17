const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Formats 'YYYY-MM' as 'Jun 2024' and 'YYYY-MM-DD' as 'Jul 7, 2026'.
 * Parsed by hand so the date never shifts a day across timezones.
 */
export const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-');
  const label = MONTHS[Number(month) - 1];
  if (!year || !label) return date;
  return day ? `${label} ${Number(day)}, ${year}` : `${label} ${year}`;
};

/** Pads 'YYYY-MM' to a comparable 'YYYY-MM-DD'. */
const normalize = (date: string): string => (date.length === 7 ? `${date}-01` : date);

/** True when the date has not passed yet. Undated items are never upcoming. */
export const isUpcoming = (date?: string): boolean => {
  if (!date) return false;
  return normalize(date) >= new Date().toISOString().slice(0, 10);
};

/** Newest first; undated items fall to the end. */
export const byDateDesc = (a: { date?: string }, b: { date?: string }): number =>
  (b.date ?? '').localeCompare(a.date ?? '');

/** Soonest first, for upcoming engagements. */
export const byDateAsc = (a: { date?: string }, b: { date?: string }): number =>
  (a.date ?? '').localeCompare(b.date ?? '');
