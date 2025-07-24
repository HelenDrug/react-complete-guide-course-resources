import { describe, it, expect } from 'vitest';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formats a valid number string as USD currency', () => {
    expect(formatCurrency('12.34')).toBe('$12.34');
    expect(formatCurrency('0')).toBe('$0.00');
    expect(formatCurrency('1000')).toBe('$1,000.00');
  });

  it('formats an invalid number string as $NaN', () => {
    expect(formatCurrency('abc')).toBe('$NaN');
  });

  it('formats a negative number string as USD currency', () => {
    expect(formatCurrency('-5')).toBe('-$5.00');
  });
});
