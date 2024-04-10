/**
 * @class Ngram
 * @description This class calculates the similarity between two strings using n-grams.
 */
class Ngram {
    /**
     * @constructor
     * @param {number} n - The size of the n-grams to use for similarity calculation. Defaults to 2.
     */
    constructor(n = 2) {
      this.n = n;
    }
  
    /**
     * @method calculateSimilarity
     * @param {string} str1 - The first string to compare.
     * @param {string} str2 - The second string to compare.
     * @returns {number} - A number between 0 and 1 representing the similarity between the two strings.
     * @description Calculates the similarity between two strings using n-grams.
     */
    calculateSimilarity(str1, str2) {
      const ngrams1 = this.getNgrams(str1);
      const ngrams2 = this.getNgrams(str2);
      const intersection = this.getIntersection(ngrams1, ngrams2);
      const union = this.getUnion(ngrams1, ngrams2);
  
      return intersection.length / union.length;
    }
  
    /**
     * @method getNgrams
     * @param {string} str - The string to generate n-grams from.
     * @returns {string[]} - An array of n-grams from the input string.
     * @description Generates all n-grams from the input string.
     */
    getNgrams(str) {
      const ngrams = [];
      for (let i = 0; i < str.length - this.n + 1; i++) {
        ngrams.push(str.substring(i, i + this.n));
      }
      return ngrams;
    }
  
    /**
     * @method getIntersection
     * @param {string[]} set1 - The first set of n-grams.
     * @param {string[]} set2 - The second set of n-grams.
     * @returns {string[]} - An array of n-grams that are present in both sets.
     * @description Gets the intersection of two sets of n-grams.
     */
    getIntersection(set1, set2) {
      return set1.filter((ngram) => set2.includes(ngram));
    }
  
    /**
     * @method getUnion
     * @param {string[]} set1 - The first set of n-grams.
     * @param {string[]} set2 - The second set of n-grams.
     * @returns {string[]} - An array of all unique n-grams from both sets.
     * @description Gets the union of two sets of n-grams.
     */
    getUnion(set1, set2) {
      return [...new Set([...set1, ...set2])];
    }
  }
  
  export default Ngram;