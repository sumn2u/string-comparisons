/**
 * A class to calculate the Sørensen-Dice coefficient, a metric used to measure the similarity between two sets.
 */
class SorensenDice {
    /**
     * Calculates the Sørensen-Dice similarity between two sets.
     *
     * @param {string[] | Set} s1 - The first set of elements.
     * @param {string[] | Set} s2 - The second set of elements.
     * @returns {number} - The Sørensen-Dice similarity coefficient, a value between 0.0 (no similarity) and 1.0 (perfect similarity).
     */
    static similarity(s1, s2) {
        // Create sets for efficient element manipulation
        const set1 = new Set(s1);
        const set2 = new Set(s2);

        // Calculate the number of elements in the intersection (common elements)
        const intersectionSize = [...set1].filter(x => set2.has(x)).length;

        // Apply the Sørensen-Dice formula to compute the similarity
        const similarity = (2 * intersectionSize) / (set1.size + set2.size);

        return similarity;
    }
}
