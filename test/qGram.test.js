import Qgram from '../lib/qGram';

describe("Qgram", function () {
    it("calculates similarity between two strings", function () {
      const qgram = new Qgram(2); // Create a Qgram object with q=2
      const similarity = qgram.calculateSimilarity("hello world", "world hello");
      expect(similarity).toBeGreaterThan(0); 
    });
  
    it("handles different q-gram sizes", function () {
      const qgram = new Qgram(3); // Create a Qgram object with q=3
      const similarity = qgram.calculateSimilarity("computer science", "computational sciences");
      expect(similarity).toBeGreaterThan(0.4); 
    });
  
    it("returns 0 for completely dissimilar strings", function () {
      const qgram = new Qgram(2); // Create a Qgram object with q=2
      const similarity = qgram.calculateSimilarity("apple banana", "cat dog");
      expect(similarity).toEqual(0);
    });
  });
  