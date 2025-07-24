/**
 * Formats a numeric string as a currency value in USD.
 *
 * @param value - The numeric string to format.
 * @returns The formatted currency string (e.g., "$12.34").
 */
export const formatCurrency = (value: string): string => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    return formatter.format(Number(value))
}
