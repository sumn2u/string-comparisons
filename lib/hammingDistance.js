export default class HammingDistance {
    /**
     * Calculates the Hamming distance between two strings.
     *
     * @param {string} str1 - The first string for comparison.
     * @param {string} str2 - The second string for comparison.
     * @returns {number} - The Hamming distance between the two strings.
     * @throws {Error} - If the strings have different lengths.
     */
    static calculate(str1, str2) {
      if (str1.length !== str2.length) {
        throw new Error('Strings must have the same length');
      }
  
      let distance = 0;
      for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
          distance++;
        }
      }
  
      return distance;
    }
  
    /**
     * Calculates the similarity between two strings based on their Hamming distance.
     *
     * @param {string} str1 - The first string for comparison.
     * @param {string} str2 - The second string for comparison.
     * @returns {number} - The similarity between the two strings, ranging from 0.0 (no similarity) to 1.0 (perfect similarity).
     */
    static similarity(str1, str2) {
      const distance = HammingDistance.calculate(str1, str2);
      return 1 - distance / str1.length;
    }
  }
  