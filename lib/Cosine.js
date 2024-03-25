export default class Cosine {
    /**
     * Generates a term frequency map, counting the occurrences of each word in the input string.
     *
     * @param {string} str - The input string to analyze.
     * @returns {object} - A term frequency map with words as keys and their frequencies as values.
     */
    static termFreqMap(str) {
        const words = str.split(' ');
        const termFreq = {};
        words.forEach(function(w) {
            termFreq[w] = (termFreq[w] || 0) + 1;
        });
        return termFreq;
    }

    /**
     * Adds all keys from a map to a dictionary, ensuring a consistent set of terms for vector comparison.
     *
     * @param {object} map - The map containing keys to add to the dictionary.
     * @param {object} dict - The dictionary to add the keys to.
     */
    static addKeysToDict(map, dict) {
        for (const key in map) {
            dict[key] = true;
        }
    }

    /**
     * Converts a term frequency map into a term frequency vector, using a common dictionary for consistent order.
     *
     * @param {object} map - The term frequency map to convert.
     * @param {object} dict - The dictionary of terms to use for vector alignment.
     * @returns {array} - A term frequency vector representing the word frequencies of the input string.
     */
    static termFreqMapToVector(map, dict) {
        const termFreqVector = [];
        for (const term in dict) {
            termFreqVector.push(map[term] || 0);
        }
        return termFreqVector;
    }

    /**
     * Calculates the dot product of two vectors, representing the sum of their element-wise multiplications.
     *
     * @param {array} vecA - The first vector for the dot product.
     * @param {array} vecB - The second vector for the dot product.
     * @returns {number} - The dot product of the two vectors.
     */
    static vecDotProduct(vecA, vecB) {
        let product = 0;
        for (let i = 0; i < vecA.length; i++) {
            product += vecA[i] * vecB[i];
        }
        return product;
    }

    /**
     * Calculates the magnitude (Euclidean length) of a vector.
     *
     * @param {array} vec - The vector for which to calculate the magnitude.
     * @returns {number} - The magnitude of the vector.
     */
    static vecMagnitude(vec) {
        let sum = 0;
        for (let i = 0; i < vec.length; i++) {
            sum += vec[i] * vec[i];
        }
        return Math.sqrt(sum);
    }

    /**
     * Calculates the cosine similarity between two vectors using their dot product and magnitudes.
     *
     * @param {array} vecA - The first vector for comparison.
     * @param {array} vecB - The second vector for comparison.
     * @returns {number} - The cosine similarity between the two vectors, ranging from 0.0 (no similarity) to 1.0 (perfect similarity).
     */
    static calculateSimilarity(vecA, vecB) {
        return this.vecDotProduct(vecA, vecB) / (this.vecMagnitude(vecA) * this.vecMagnitude(vecB));
    }

    /**
     * Calculates the cosine similarity between two strings based on their term frequency vectors.
     *
     * @param {string} strA - The first string for comparison.
     * @param {string} strB - The second string for comparison.
     * @returns {number} - The cosine similarity between the two strings, ranging from 0.0 (no similarity) to 1.0 (perfect similarity).
     */
    static similarity(strA, strB) {
        const termFreqA = this.termFreqMap(strA);
        const termFreqB = this.termFreqMap(strB);

        const dict = {};
        this.addKeysToDict(termFreqA, dict);
        this.addKeysToDict(termFreqB, dict);

        const termFreqVecA = this.termFreqMapToVector(termFreqA, dict);
        const termFreqVecB = this.termFreqMapToVector(termFreqB, dict);

        return this.calculateSimilarity(termFreqVecA, termFreqVecB);
    }
}
