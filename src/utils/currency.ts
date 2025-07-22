/**
 * Formats a number to Indonesian Rupiah currency format
 * @param amount - The number to format
 * @param showSymbol - Whether to show the Rp symbol (default: true)
 * @returns Formatted currency string
 */
export function formatToRupiah(
  amount: number | string,
  showSymbol: boolean = true
): string {
  // Convert string to number if needed
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  // Handle invalid numbers
  if (isNaN(numAmount)) {
    return showSymbol ? "Rp 0" : "0";
  }

  // Format the number with Indonesian locale
  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numAmount);

  // If showSymbol is false, remove the currency symbol
  if (!showSymbol) {
    return formatted.replace("Rp", "").trim();
  }

  return formatted;
}

/**
 * Formats a number to Indonesian number format without currency symbol
 * @param amount - The number to format
 * @returns Formatted number string with thousand separators
 */
export function formatToIDRNumber(amount: number | string): string {
  return formatToRupiah(amount, false);
}

/**
 * Converts Indonesian Rupiah formatted string back to number
 * @param rupiahString - The formatted Rupiah string
 * @returns Number value
 */
export function parseRupiah(rupiahString: string): number {
  // Remove all non-digit characters except decimal point and minus sign
  const cleanString = rupiahString.replace(/[^\d,-]/g, "");

  // Replace comma with dot for decimal parsing
  const normalizedString = cleanString.replace(",", ".");

  return parseFloat(normalizedString) || 0;
}
