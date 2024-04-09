import SzymkiewiczSimpsonOverlap from '../lib/szymkiewiczSimpsonOverlap';

describe('SzymkiewiczSimpsonOverlap', () => {
  test('calculates overlap coefficient correctly', () => {
    const data1 = [1, 2, 3, 4];
    const data2 = [2, 3, 5, 6];
    const expectedOverlap = 0.3333333333333333;
    const overlap = SzymkiewiczSimpsonOverlap.overlap(data1, data2);
    expect(overlap).toBeCloseTo(expectedOverlap, 6); // Allow for a slight floating-point difference
  });
});