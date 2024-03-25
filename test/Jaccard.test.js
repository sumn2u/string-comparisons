import Jaccard from '../lib/Jaccard'; 

describe('Jaccard Similarity', () => {
  test.skip('calculates similarity for empty sets', () => {
    expect(Jaccard.similarity(new Set(), new Set())).toBe(1);
  });

  test('calculates similarity for identical sets', () => {
    const mySet = new Set([1, 2, 3]);
    expect(Jaccard.similarity(mySet, mySet)).toBe(1);
  });

  test('calculates similarity for disjoint sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([4, 5, 6]);
    expect(Jaccard.similarity(set1, set2)).toBe(0);
  });

  test.skip('calculates similarity for partially overlapping sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4]);
    expect(Jaccard.similarity(set1, set2)).toBe(2 / 5);
  });

  test.skip('handles different data types in sets', () => {
    const set1 = new Set([1, 'apple', true]);
    const set2 = new Set([2, 'apple', false]);
    expect(Jaccard.similarity(set1, set2)).toBe(1 / 3);
  });
});
