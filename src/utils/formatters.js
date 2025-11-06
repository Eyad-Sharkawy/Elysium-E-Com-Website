/**
 * Format price with currency symbol
 * @param {number} price - The price to format
 * @param {string} currency - Currency code (default: 'EGP')
 * @returns {string} Formatted price string
 */
export function formatPrice(price, currency = 'EGP') {
  return `${currency} ${price.toLocaleString()}`;
}

/**
 * Format currency with symbol
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EGP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 50) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

