/**
 * Represents a Trigram algorithm for string comparison.
 * @class
 */
export default class Trigram {
    /**
     * Generates a list of trigrams (3-character subsequences) from the given input string.
     *
     * @param {string} inputString - The input string to generate trigrams from.
     * @returns {array} - An array of trigrams extracted from the input string.
     */
    static generateTrigrams(inputString: string) {
        const trigrams = [];
        for (let i = 0; i < inputString.length - 2; i++) {
            trigrams.push(inputString.slice(i, i + 3));
        }
        return trigrams;
    }

    /**
     * Calculates the similarity between two strings based on the Jaccard similarity coefficient of their trigram sets.
     *
     * @param {string} string1 - The first string for comparison.
     * @param {string} string2 - The second string for comparison.
     * @returns {float} - The Jaccard similarity coefficient between the trigram sets of the two strings, ranging from 0.0 (no similarity) to 1.0 (perfect similarity).
     */
    static similarity(string1: string, string2: string) {
        const trigrams1 = this.generateTrigrams(string1);
        const trigrams2 = this.generateTrigrams(string2);

        const intersection = trigrams1.filter(trigram => trigrams2.includes(trigram));
        const union = [...new Set([...trigrams1, ...trigrams2])];

        if (union.length === 0) {
            return 0.0; // Avoid division by zero
        } else {
            return intersection.length / union.length;
        }
    }
}

