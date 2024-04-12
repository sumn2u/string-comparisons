import Levenshtein from '../lib/Levenshtein';

describe('Levenshtein Distance', () => {
  test('calculates distance for identical strings', () => {
    expect(Levenshtein.similarity('hello', 'hello')).toBe(0);
  });

  test('calculates distance for strings with single insertion', () => {
    expect(Levenshtein.similarity('kitten', 'sitting')).toBe(3);
  });

  test('calculates distance for strings with single deletion', () => {
    expect(Levenshtein.similarity('apple', 'aple')).toBe(1);
  });

  test('calculates distance for strings with substitution', () => {
    expect(Levenshtein.similarity('tone', 'roses')).toBe(3);
  });

  test('handles empty strings', () => {
    expect(Levenshtein.similarity('', 'hello')).toBe(5); // 5 insertions needed
    expect(Levenshtein.similarity('world', '')).toBe(5); // 5 deletions needed
  });

  test.skip('calculates distance for strings of different lengths', () => {
    expect(Levenshtein.similarity('script', 'scription')).toBe(1);
  });
});
