import OptimalStringAlignment from '../lib/optimalStringAlignment';

describe('OptimalStringAlignment', () => {
    it('calculates the Levenshtein distance correctly', () => {
      expect(OptimalStringAlignment.calculate("kitten", "sitting")).toBe(3);
      expect(OptimalStringAlignment.calculate("horse", "ros"))
        .toBe(3);
      expect(OptimalStringAlignment.calculate("sunday", "saturday"))
        .toBe(3);
    });
  
    it('handles empty strings correctly', () => {
      expect(OptimalStringAlignment.calculate("", "")).toBe(0);
      expect(OptimalStringAlignment.calculate("abc", "")).toBe(3);
      expect(OptimalStringAlignment.calculate("", "def")).toBe(3);
    });
  
    it('uses the provided gap penalty', () => {
      expect(OptimalStringAlignment.calculate("kitten", "sitting", 2))
        .toBe(4);
    });
  });