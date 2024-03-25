import JaroWrinkler from '../lib/jaroWinkler';

describe('Jaro-Winkler Similarity', () => {
  test('calculates similarity for identical strings', () => {
    expect(JaroWrinkler.similarity('hello', 'hello')).toBe(1);
  });

  test('calculates similarity for strings with some matches', () => {
    expect(JaroWrinkler.similarity('orange', 'banana')).toBe(0.5555555555555555);
  });

  test('calculates similarity for strings with transpositions', () => {
    expect(JaroWrinkler.similarity('dwayne', 'wayne')).toBe(0.9444444444444445);
  });

  test('handles different string lengths', () => {
    expect(JaroWrinkler.similarity('script', 'scription')).toBe(0.9333333333333333);
  });

  test('returns 0 for completely different strings', () => {
    expect(JaroWrinkler.similarity('apple', 'zebra')).toBe(0);
  });

  test.skip('considers case sensitivity', () => {
    expect(JaroWrinkler.similarity('hEllO', 'hello')).toBe(0.76); // Not a perfect match (case difference)
  });

  test.skip('applies length bonus for common prefixes', () => {
    expect(JaroWrinkler.similarity('flamingo', 'flawed')).toBe(0.625); // Higher similarity due to prefix match
  });

  test('returns 0 for empty strings', () => {
    expect(JaroWrinkler.similarity('', 'hello')).toBe(0);
    expect(JaroWrinkler.similarity('world', '')).toBe(0);
  });

  test('returns 1 for exact match (excluding empty strings)', () => {
    expect(JaroWrinkler.similarity('match', 'match')).toBe(1);
  });
});
