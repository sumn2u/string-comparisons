import SmithWaterman from '../lib/smithWaterman'; 

describe('Smith-Waterman Similarity', () => {
  test('calculates similarity for identical strings', () => {
    expect(SmithWaterman.similarity('hello', 'hello')).toBe(10);
  });

  test.skip('calculates similarity for similar strings with matches and mismatches', () => {
    expect(SmithWaterman.similarity('kitten', 'sitting')).toBe(4);
  });

  test('handles empty strings', () => {
    expect(SmithWaterman.similarity('', 'hello')).toBe(0);
    expect(SmithWaterman.similarity('world', '')).toBe(0);
  });

  test.skip('calculates similarity for strings with gaps and matches', () => {
    expect(SmithWaterman.similarity('ACTACG', 'ACG')).toBe(5);
  });

  test('allows custom scores for match, mismatch, and gap', () => {
    expect(SmithWaterman.similarity('AGT', 'AGTTT', 1, -2, -2)).toBe(3);
  });

  test.skip('calculates similarity for prefixes shared between strings', () => {
    expect(SmithWaterman.similarity('hellothere', 'helloworld')).toBe(5); // Matches for 'hello'
  });

  test.skip('handles strings with different lengths', () => {
    expect(SmithWaterman.similarity('short', 'longerstring')).toBe(4); // Matches for 'short'
  });
});
