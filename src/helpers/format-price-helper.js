export function formatPrice(value, locale = "en-US", options = {}) {
  return !isNaN(Number(value))
    ? new Intl.NumberFormat(locale, options).format(value)
    : new Intl.NumberFormat(locale, options).format(0);
}
