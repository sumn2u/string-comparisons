import DamerauLevenshtein  from '../lib/damerauLevenshtein';

describe('Damerau-Levenshtein Distance', () => {
  it('calculates distance between identical strings', () => {
    const strA = 'hello';
    const strB = 'hello';
    expect(DamerauLevenshtein.similarity(strA, strB)).toBe(1);
  });

  it('calculates distance for single insertion', () => {
    const strA = 'hit';
    const strB = 'miss';
    expect(DamerauLevenshtein.distance(strA, strB)).toBe(3);
  });

  it('calculates distance for single deletion', () => {
    const strA = 'sitting';
    const strB = 'sting';
    expect(DamerauLevenshtein.distance(strA, strB)).toBe(2);
  });

  it('calculates distance for single substitution', () => {
    const strA = 'dog';
    const strB = 'cat';
    expect(DamerauLevenshtein.distance(strA, strB)).toBe(3); // Substitution cost + transposition cost
  });

  it('calculates distance for transposition', () => {
    const strA = 'distance';
    const strB = 'diatance';
    expect(DamerauLevenshtein.distance(strA, strB)).toBe(1);
  });

  it('calculates distance for multiple edits', () => {
    const strA = 'kitten';
    const strB = 'sitting';
    expect(DamerauLevenshtein.distance(strA, strB)).toBe(3);
  });
});
