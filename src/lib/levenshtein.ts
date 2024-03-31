/**
 * Class representing Levenshtein distance calculations.
 * @class
 */
export default class Levenshtein {
    /**
     * Calculates the Levenshtein distance between two strings.
     *
     * @param {string} a - The first string for comparison.
     * @param {string} b - The second string for comparison.
     * @returns {number} - The Levenshtein distance, representing the minimum number of single-character edits (insertions, deletions, or substitutions) required to transform one string into the other.
     */
    static similarity(a: string, b: string) {
        if (a.length == 0) return b.length; // If a is empty, distance is length of b (all insertions)
        if (b.length == 0) return a.length; // If b is empty, distance is length of a (all deletions)

        var matrix = [];

        // Initialize the first row (distance to transform empty string to b)
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i]; // Inserting i characters to get b from an empty string
        }

        // Initialize the first column (distance to transform empty string to a)
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j; // Deleting j characters to get a from an empty string
        }

        // Fill in the rest of the matrix
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) == a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1]; // No edits needed if characters are the same
                } else {
                    // Minimum edit distance considering substitution, insertion, or deletion
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // Substitution cost (previous + 1)
                        Math.min(
                            matrix[i][j - 1] + 1, // Insertion cost (previous row + 1)
                            matrix[i - 1][j] + 1 // Deletion cost (previous column + 1)
                        )
                    );
                }
            }
        }

        return matrix[b.length][a.length]; // Levenshtein distance at the bottom right corner
    }
}

