import Ngram from '../lib/nGram';

describe("Ngram", function () {
    it("calculates similarity between two strings", function () {
      const similarity = Ngram.calculateSimilarity(2, "hello world", "world hello");
      expect(similarity).toBeGreaterThan(0.5); // Allow for slight variations due to ordering
    });
  
    it("handles different n-gram sizes", function () {
      const similarity = Ngram.calculateSimilarity(3, "computer science", "computational sciences");
      expect(similarity).toBeGreaterThan(0.4); // Adjust threshold based on n-gram size
    });
  
    it("returns 0 for completely dissimilar strings", function () {
      const similarity = Ngram.calculateSimilarity(2, "apple banana", "cat dog");
      expect(similarity).toEqual(0);
    });
  });
  