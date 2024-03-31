/**
 * Class representing cosine similarity calculations.
 */
export default class Cosine {
  /**
   * Generates a term frequency map, counting the occurrences of each word in the input string.
   *
   * @param {string} str - The input string to analyze.
   * @returns {Record<string, number>} - A term frequency map with words as keys and their frequencies as values.
   */
  static termFreqMap(str: string): Record<string, number> {
    const words: string[] = str.split(" ");
    return words.reduce<Record<string, number>>((termFreq, w) => {
      if (termFreq[w]) {
        termFreq[w] = termFreq[w] + 1;
      } else {
        termFreq[w] = 1;
      }
      return termFreq;
    }, {});
  }

  /**
   * Adds all keys from a map to a dictionary, ensuring a consistent set of terms for vector comparison.
   *
   * @param {Record<string, string>} map - The map containing keys to add to the dictionary.
   * @param {Record<string, string | boolean>} dict - The dictionary to add the keys to.
   */
  static addKeysToDict(
    map: Record<string, string|number>,
    dict: Record<string, string | boolean>
  ): void {
    for (const key in map) {
      dict[key] = true;
    }
  }

  /**
   * Converts a term frequency map into a term frequency vector, using a common dictionary for consistent order.
   *
   * @param {Record<string, number>} map - The term frequency map to convert.
   * @param {Record<string, string | boolean>} dict - The dictionary of terms to use for vector alignment.
   * @returns {number[]} - A term frequency vector representing the word frequencies of the input string.
   */
  static termFreqMapToVector(
    map: Record<string, number>,
    dict: Record<string, string | boolean>
  ): number[] {
    const termFreqVector: number[] = [];
    for (const term in dict) {
      termFreqVector.push(map[term] || 0);
    }
    return termFreqVector;
  }

  /**
   * Calculates the dot product of two vectors, representing the sum of their element-wise multiplications.
   *
   * @param {number[]} vecA - The first vector for the dot product.
   * @param {number[]} vecB - The second vector for the dot product.
   * @returns {number} - The dot product of the two vectors.
   */
  static vecDotProduct(vecA: number[], vecB: number[]): number {
    if (!vecA || !vecB || vecA.length !== vecB.length) {
      return 0;
    }

    return vecA.reduce(
      (product, valueA, index) => product + valueA * (vecB[index] ?? 0),
      0
    );
  }

  /**
   * Calculates the magnitude (Euclidean length) of a vector.
   *
   * @param {number[]} vec - The vector for which to calculate the magnitude.
   * @returns {number} - The magnitude of the vector.
   */
  static vecMagnitude(vec: number[]): number {
    if (!vec || vec.length === 0) {
      return 0;
    }
    return Math.sqrt(vec.reduce((sum, value) => sum + value * value, 0));
  }

  /**
   * Calculates the cosine similarity between two vectors using their dot product and magnitudes.
   *
   * @param {number[]} vecA - The first vector for comparison.
   * @param {number[]} vecB - The second vector for comparison.
   * @returns {number} - The cosine similarity between the two vectors, ranging from 0.0 (no similarity) to 1.0 (perfect similarity).
   */
  static calculateSimilarity(vecA: number[], vecB: number[]): number {
    return (
      this.vecDotProduct(vecA, vecB) /
      (this.vecMagnitude(vecA) * this.vecMagnitude(vecB))
    );
  }

  /**
   * Calculates the cosine similarity between two strings based on their term frequency vectors.
   *
   * @param {string} strA - The first string for comparison.
   * @param {string} strB - The second string for comparison.
   * @returns {number} - The cosine similarity between the two strings, ranging from 0.0 (no similarity) to 1.0 (perfect similarity).
   */
  static similarity(strA: string, strB: string): number {
    const termFreqA: Record<string, number> = this.termFreqMap(strA);
    const termFreqB: Record<string, number> = this.termFreqMap(strB);

    const dict: Record<string, string | boolean> = {};
    this.addKeysToDict(termFreqA, dict);
    this.addKeysToDict(termFreqB, dict);

    const termFreqVecA = this.termFreqMapToVector(termFreqA, dict);
    const termFreqVecB = this.termFreqMapToVector(termFreqB, dict);

    return this.calculateSimilarity(termFreqVecA, termFreqVecB);
}

}
