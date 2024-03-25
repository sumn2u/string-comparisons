class JaroWrinker {
    /**
     * Calculates the Jaro-Winkler similarity between two strings.
     *
     * @param {string} s1 - The first string for comparison.
     * @param {string} s2 - The second string for comparison.
     * @returns {float} - The Jaro-Winkler similarity score between s1 and s2, ranging from 0.0 (no similarity) to 1.0 (exact match).
     */
    static similarity(s1, s2) {
        let m = 0; // Number of matching characters

        // Exit early if either string is empty
        if (s1.length === 0 || s2.length === 0) {
            return 0;
        }

        // Exit early if the strings are an exact match
        if (s1 === s2) {
            return 1;
        }

        const range = Math.floor(Math.max(s1.length, s2.length) / 2) - 1; // Search window size based on string lengths
        const s1Matches = new Array(s1.length).fill(false); // Keeps track of matched characters in s1
        const s2Matches = new Array(s2.length).fill(false); // Keeps track of matched characters in s2

        // Find matching characters within a search window around each character in s1
        for (let i = 0; i < s1.length; i++) {
            const low = (i >= range) ? i - range : 0; // Lower bound of search window for s2
            const high = (i + range <= s2.length) ? (i + range) : (s2.length - 1); // Upper bound of search window for s2

            for (let j = low; j <= high; j++) {
                if (!s1Matches[i] && !s2Matches[j] && s1[i] === s2[j]) { // Match found, characters not previously matched
                    m++;
                    s1Matches[i] = true;
                    s2Matches[j] = true;
                    break;
                }
            }
        }

        // Exit early if no matches were found
        if (m === 0) {
            return 0;
        }

        // Count transpositions (mismatches where character order is swapped)
        let k = 0; // Index in s2 to start searching for matches for the next character in s1
        let n_trans = 0; // Number of transpositions

        for (let i = 0; i < s1.length; i++) {
            if (s1Matches[i]) {
                let j;
                for (j = k; j < s2.length; j++) { // Find the corresponding match in s2
                    if (s2Matches[j]) {
                        k = j + 1; // Update starting index for next character in s1
                        break;
                    }
                }

                if (s1[i] !== s2[j]) { // Characters don't match, potential transposition
                    n_trans++;
                }
            }
        }

        // Calculate Jaro similarity score based on matching characters, transpositions, and string lengths
        let weight = (m / s1.length + m / s2.length + (m - (n_trans / 2)) / m) / 3;

        // Apply length bonus for strings with common prefixes
        let l = 0;
        const p = 0.1; // Constant for length bonus weight

        if (weight > 0.7) {
            while (s1[l] === s2[l] && l < 4) { // Check for matching prefixes up to length 4
                l++;
            }

            weight = weight + l * p * (1 - weight); // Apply length bonus to the similarity score
        }

        return weight;
    }
}
