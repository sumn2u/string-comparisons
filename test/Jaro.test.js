import Jaro from '../lib/jaro'

describe('Jaro Similarity', () => {
  test('calculates similarity for identical strings', () => {
    expect(Jaro.similarity('hello', 'hello')).toBe(1);
  });

  test('calculates similarity for strings with some matches', () => {
    expect(Jaro.similarity('orange', 'banana')).toBe(0.5555555555555555);
  });

  test('calculates similarity for strings with transpositions', () => {
    expect(Jaro.similarity('dwayne', 'wayne')).toBe(0.9444444444444445);
  });

  test('handles different string lengths', () => {
    expect(Jaro.similarity('script', 'scription')).toBe(0.8888888888888888);
  });

  test('returns 0 for completely different strings', () => {
    expect(Jaro.similarity('apple', 'zebra')).toBe(0);
  });

  test('considers case sensitivity', () => {
    expect(Jaro.similarity('hEllO', 'hello')).toBe(0.7333333333333334); // Not a perfect match (case difference)
  });
});
