"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class representing the Smith-Waterman algorithm for local sequence alignment.
 * @class
 */
class SmithWaterman {
    /**
     * Calculates the similarity between two strings (s1 and s2) using the Smith-Waterman algorithm.
     *
     * @param {string} s1 - The first string for comparison.
     * @param {string} s2 - The second string for comparison.
     * @param {number} match (optional) - The score for matching characters (default: 2).
     * @param {number} mismatch (optional) - The score for mismatching characters (default: -1).
     * @param {number} gap (optional) - The penalty for introducing gaps in the alignment (default: -1).
     * @returns {number} - The maximum score achieved during the Smith-Waterman alignment, representing the similarity between the strings.
     */
    static similarity(s1, s2, match = 2, mismatch = -1, gap = -1) {
        const matrix = [];
        // Initialize matrix with scores for introducing gaps
        for (let i = 0; i <= s1.length; i++) {
            matrix[i] = [];
            for (let j = 0; j <= s2.length; j++) {
                if (i === 0 || j === 0) {
                    matrix[i][j] = 0; // Gap penalty for starting alignments
                }
                else {
                    matrix[i][j] = 0;
                }
            }
        }
        // Fill the scoring matrix using Smith-Waterman algorithm
        for (let i = 1; i <= s1.length; i++) {
            for (let j = 1; j <= s2.length; j++) {
                matrix[i][j] = Math.max(0, // No extension (both are gaps)
                matrix[i - 1][j] + gap, // Gap penalty for extending gap in s1
                matrix[i][j - 1] + gap, // Gap penalty for extending gap in s2
                matrix[i - 1][j - 1] + (s1[i - 1] === s2[j - 1] ? match : mismatch) // Score based on match/mismatch and previous score
                );
            }
        }
        // Find the maximum score in the matrix
        let maxScore = 0;
        for (let i = 0; i <= s1.length; i++) {
            for (let j = 0; j <= s2.length; j++) {
                if (matrix[i][j] > maxScore) {
                    maxScore = matrix[i][j];
                }
            }
        }
        return maxScore;
    }
}
exports.default = SmithWaterman;
