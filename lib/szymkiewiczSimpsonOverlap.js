/**
 * Class to calculate the Szymkiewicz-Simpson Overlap coefficient between two data sets.
 */
class SzymkiewiczSimpsonOverlap {
    /**
     * Calculates the Szymkiewicz-Simpson Overlap coefficient between two data sets.
     * 
     * @param {Array<*>} data1 - The first data set.
     * @param {Array<*>} data2 - The second data set.
     * @throws {Error} - If either data set is missing.
     * @returns {number} - The overlap coefficient between 0 and 1.
     */
    static overlap(data1, data2) {
      if (!data1 || !data2) {
        throw new Error("Missing data for Szymkiewicz-Simpson Overlap coefficient calculation");
      }

      const intersection = data1.filter((item) => data2.includes(item));
      const union = new Set([...data1, ...data2]);

      return intersection.length / union.size;
    }
  }

  export default SzymkiewiczSimpsonOverlap;