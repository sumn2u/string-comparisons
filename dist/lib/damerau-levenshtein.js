"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class representing the Damerau-Levenshtein distance algorithm.
 * @class
 */
class DamerauLevenshtein {
    /**
     * Calculates the Damerau-Levenshtein distance between two strings.
     * This distance represents the minimum number of edit operations (insertion, deletion, substitution, transposition) needed to transform one string into another.
     *
     * @param {string} str1 - The first string.
     * @param {string} str2 - The second string.
     * @returns {number} - The Damerau-Levenshtein distance between the two strings.
     */
    static distance(str1, str2) {
        const matrix = [];
        // Initialize matrix (fill the first row and column with deletion/insertion costs)
        for (let i = 0; i <= str1.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= str2.length; j++) {
            matrix[0][j] = j;
        }
        // Fill in the rest of the matrix using dynamic programming
        for (let i = 1; i <= str1.length; i++) {
            for (let j = 1; j <= str2.length; j++) {
                const cost = str1[i - 1] === str2[j - 1] ? 0 : 1; // Substitution cost (0 if characters are the same)
                matrix[i][j] = Math.min(matrix[i - 1][j] + 1, // Deletion cost (cost of deleting from str1)
                matrix[i][j - 1] + 1, // Insertion cost (cost of inserting into str2)
                matrix[i - 1][j - 1] + cost // Substitution cost (cost of replacing in str1)
                );
                if (i > 1 && j > 1 && str1[i - 1] === str2[j - 2] && str1[i - 2] === str2[j - 1]) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost); // Transposition cost (cost of swapping adjacent characters in str1)
                }
            }
        }
        return matrix[str1.length][str2.length]; // Damerau-Levenshtein distance is the value at the bottom right corner of the matrix
    }
    /**
     * Calculates the similarity between two strings based on their Damerau-Levenshtein distance.
     * Similarity is a value between 0.0 (completely different) and 1.0 (identical).
     *
     * @param {string} str1 - The first string.
     * @param {string} str2 - The second string.
     * @returns {number} - The similarity score between the two strings.
     */
    static similarity(str1, str2) {
        const distance = DamerauLevenshtein.distance(str1, str2);
        const maxLength = Math.max(str1.length, str2.length);
        return 1 - distance / maxLength; // Higher distance means lower similarity (closer to 0.0)
    }
}
exports.default = DamerauLevenshtein;
