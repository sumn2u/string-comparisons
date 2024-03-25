class Jaro {
    /**
     * Calculates the Jaro similarity coefficient between two strings.
     *
     * @param {string} s1 - The first string for comparison.
     * @param {string} s2 - The second string for comparison.
     * @returns {float} - The Jaro similarity coefficient between the two strings, ranging from 0.0 (no similarity) to 1.0 (perfect similarity).
     */
    static similarity(s1, s2) {
        // Maximum distance allowed for characters to be considered a match
        const matchDistance = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;

        // Variables to track matches and transpositions
        let matches = 0;
        let transpositions = 0;

        // Initialize arrays to keep track of matched characters in each string
        const s1Matches = new Array(s1.length).fill(false);
        const s2Matches = new Array(s2.length).fill(false);

        // Find matching characters within a limited distance for each character in s1
        for (let i = 0; i < s1.length; i++) {
            const start = Math.max(0, i - matchDistance); // Define search start (avoid negative index)
            const end = Math.min(i + matchDistance + 1, s2.length); // Define search end (avoid exceeding s2 length)

            for (let j = start; j < end; j++) {
                // Check if characters match and neither has been previously matched
                if (!s2Matches[j] && s1[i] === s2[j]) {
                    // Mark characters as matched in both strings
                    s1Matches[i] = true;
                    s2Matches[j] = true;
                    matches++;
                    break; // Exit inner loop after finding a match within distance
                }
            }
        }

        // If no matches were found, return 0 similarity
        if (matches === 0) return 0;

        // Count transpositions (mismatches where character order is swapped)
        let k = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s1Matches[i]) {
                // Find the corresponding matched character in s2
                while (!s2Matches[k]) k++;
                if (s1[i] !== s2[k]) transpositions++; // Count a transposition if characters differ
                k++;
            }
        }

        // Jaro similarity formula
        const m = matches; // Number of matching characters
        const t = transpositions / 2; // Half the number of transpositions
        const s1Len = s1.length; // Length of string 1
        const s2Len = s2.length; // Length of string 2
        const similarity = (m / s1Len + m / s2Len + (m - t) / m) / 3;

        return similarity;
    }
}
