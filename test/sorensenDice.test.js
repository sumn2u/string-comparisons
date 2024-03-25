import SorensenDice from '../lib/sorensenDice';

describe('Sørensen-Dice Similarity', () => {
  test.skip('calculates similarity for empty sets', () => {
    expect(SorensenDice.similarity(new Set(), new Set())).toBe(1);
  });

  test('calculates similarity for identical sets', () => {
    const mySet = new Set([1, 2, 3]);
    expect(SorensenDice.similarity(mySet, mySet)).toBe(1);
  });

  test('calculates similarity for disjoint sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([4, 5, 6]);
    expect(SorensenDice.similarity(set1, set2)).toBe(0);
  });

  test.skip('calculates similarity for partially overlapping sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4]);
    expect(SorensenDice.similarity(set1, set2)).toBe(2 / 5);
  });

  test('handles different data types in sets', () => {
    const set1 = new Set([1, 'apple', true]);
    const set2 = new Set([2, 'apple', false]);
    expect(SorensenDice.similarity(set1, set2)).toBe(1 / 3);
  });

  test.skip('works with string arrays', () => {
    const list1 = ['cat', 'dog', 'bird'];
    const list2 = ['dog', 'fish', 'cat'];
    expect(SorensenDice.similarity(list1, list2)).toBe(2 / 5);
  });
});
