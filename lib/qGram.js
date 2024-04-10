/**
 * @class Qgram
 * @description This class calculates the similarity between two strings using q-grams.
 */
class Qgram {
  /**
   * @constructor
   * @param {number} q - The size of the q-grams to use for similarity calculation. Defaults to 2.
   */
  constructor(q = 2) {
    this.q = q;
  }

  /**
   * @method calculateSimilarity
   * @param {string} str1 - The first string to compare.
   * @param {string} str2 - The second string to compare.
   * @returns {number} - A number between 0 and 1 representing the similarity between the two strings.
   * @description Calculates the similarity between two strings using q-grams.
   */
  calculateSimilarity(str1, str2) {
    const qgrams1 = this.getQgrams(str1);
    const qgrams2 = this.getQgrams(str2);
    const intersection = this.getIntersection(qgrams1, qgrams2);
    const union = this.getUnion(qgrams1, qgrams2);

    return intersection.length / union.length;
  }

  /**
   * @method getQgrams
   * @param {string} str - The string to generate q-grams from.
   * @returns {string[]} - An array of q-grams from the input string.
   * @description Generates all q-grams from the input string.
   */
  getQgrams(str) {
    const qgrams = [];
    for (let i = 0; i < str.length - this.q + 1; i++) {
      qgrams.push(str.substring(i, i + this.q));
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
  getIntersection(set1, set2) {
    return set1.filter((qgram) => set2.includes(qgram));
  }

  /**
   * @method getUnion
   * @param {string[]} set1 - The first set of q-grams.
   * @param {string[]} set2 - The second set of q-grams.
   * @returns {string[]} - An array of all unique q-grams from both sets.
   * @description Gets the union of two sets of q-grams.
   */
  getUnion(set1, set2) {
    return [...new Set([...set1, ...set2])];
  }
}

export default Qgram;