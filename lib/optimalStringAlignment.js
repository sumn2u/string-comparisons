/**
 * Class for calculating Optimal String Alignment (Levenshtein Distance) between strings.
 */
class OptimalStringAlignment {
    /**
     * Calculates the minimum number of edits required to transform one string to another.
     * 
     * @param {string} str1 - The first string.
     * @param {string} str2 - The second string.
     * @param {number} [gapPenalty=1] - The penalty for gaps (insertions/deletions).
     * @returns {number} - The Levenshtein distance (number of edits).
     */
    static calculate(str1, str2, gapPenalty = 1) {
      const m = str1.length + 1;
      const n = str2.length + 1;
      const dp = []; // Create a DP table
  
      // Initialize first row and column with gap penalties
      for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(i * gapPenalty);
      }
      for (let j = 0; j < n; j++) {
        dp[0][j] = j * gapPenalty;
      }
  
      // Fill the DP table
      for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
          const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
          dp[i][j] = Math.min(
            dp[i - 1][j] + gapPenalty, // Deletion
            dp[i][j - 1] + gapPenalty, // Insertion
            dp[i - 1][j - 1] + cost         // Substitution
          );
        }
      }
  
      return dp[m - 1][n - 1]; // Distance is in the bottom right corner
    }
  }


  export default OptimalStringAlignment;