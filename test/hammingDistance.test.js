import HammingDistance from '../lib/hammingDistance'; 

test('calculates Hamming distance correctly for equal strings', () => {
  expect(HammingDistance.calculate('hello', 'hello')).toBe(0);
});

test('throws error for strings with different lengths', () => {
  expect(() => HammingDistance.calculate('apple', 'banana')).toThrowError('Strings must have the same length');
});
  
test('calculates Hamming distance correctly for strings with same length', () => {
  expect(HammingDistance.calculate('toned', 'roses')).toBe(3);
});

