import  Cosine  from '../lib/cosine';

describe('Cosine Similarity', () => {
  it('calculates similarity between identical strings', () => {
    const strA = 'hello world';
    const strB = 'hello world';
    expect(Cosine.similarity(strA, strB)).toBeCloseTo(1.0);
  });

  it('calculates similarity between similar strings', () => {
    const strA = 'hello world';
    const strB = 'hello universe';
    expect(Cosine.similarity(strA, strB)).toBeGreaterThan(0.0);
  });

  it('calculates similarity between dissimilar strings', () => {
    const strA = 'apple pie';
    const strB = 'chocolate cake';
    expect(Cosine.similarity(strA, strB)).toBeLessThan(0.5);
  });
});