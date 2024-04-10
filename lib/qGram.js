/**
 * @class Qgram
 * @description This class calculates the similarity between two strings using q-grams.
 */
class Qgram {
    /**
     * @method calculateSimilarity
     * @param {number} q - The size of the q-grams to use for similarity calculation. Defaults to 2.
     * @param {string} str1 - The first string to compare.
     * @param {string} str2 - The second string to compare.
     * @returns {number} - A number between 0 and 1 representing the similarity between the two strings.
     * @description Calculates the similarity between two strings using q-grams.
     */
    static calculateSimilarity(q = 2, str1, str2) {
      const qgrams1 = this.getQgrams(str1, q);
      const qgrams2 = this.getQgrams(str2, q);
      const intersection = this.getIntersection(qgrams1, qgrams2);
      const union = this.getUnion(qgrams1, qgrams2);
  
      return intersection.length / union.length;
    }
  
    /**
     * @method getQgrams
     * @param {string} str - The string to generate q-grams from.
     * @param {number} q - The size of the q-grams.
     * @returns {string[]} - An array of q-grams from the input string.
     * @description Generates all q-grams from the input string.
     */
    static getQgrams(str, q) {
      const qgrams = [];
      for (let i = 0; i < str.length - q + 1; i++) {
        qgrams.push(str.substring(i, i + q));
      }
      return qgrams;
    }
  
    /**
     * @method getIntersection
     * @param {string[]} set1 - The first set of q-grams.
     * @param {string[]} set2 - The second set of q-grams.
     * @returns {string[]} - An array of q-grams that are present in both sets.
     * @description Gets the intersection of two sets of q-grams.
     */
    static getIntersection(set1, set2) {
      return set1.filter((qgram) => set2.includes(qgram));
    }
  
    /**
     * @method getUnion
     * @param {string[]} set1 - The first set of q-grams.
     * @param {string[]} set2 - The second set of q-grams.
     * @returns {string[]} - An array of all unique q-grams from both sets.
     * @description Gets the union of two sets of q-grams.
     */
    static getUnion(set1, set2) {
      return [...new Set([...set1, ...set2])];
    }
  }
  

  export default Qgram;