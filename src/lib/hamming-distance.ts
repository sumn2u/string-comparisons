/**
 * Class representing Hamming Distance calculations.
 */
export default class HammingDistance {
  /**
   * Calculates the Hamming distance between two strings.
   *
   * @param {string} str1 - The first string for comparison.
   * @param {string} str2 - The second string for comparison.
   * @returns {number} - The Hamming distance between the two strings.
   * @throws {Error} - If the strings have different lengths.
   */
  static calculate(str1: string, str2: string): number {
    if (str1.length !== str2.length) {
      throw new Error("Strings must have the same length");
    }

    return str1.split("").reduce((distance, char, index) => {
      return distance + (char !== str2[index] ? 1 : 0);
    }, 0);
  }

  /**
   * Calculates the similarity between two strings based on their Hamming distance.
   *
   * @param {string} str1 - The first string for comparison.
   * @param {string} str2 - The second string for comparison.
   * @returns {number} - The similarity between the two strings, ranging from 0.0 (no similarity) to 1.0 (perfect similarity).
   */
  static similarity(str1: string, str2: string): number {
    const distance = HammingDistance.calculate(str1, str2);
    return 1 - distance / str1.length;
  }
}
