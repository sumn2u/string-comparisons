class SorensenDice {
    static similarity(s1, s2) {
        const set1 = new Set(s1);
        const set2 = new Set(s2);

        // Intersection
        const intersectionSize = [...set1].filter(x => set2.has(x)).length;

        // Sørensen-Dice similarity
        const similarity = (2 * intersectionSize) / (set1.size + set2.size);
        return similarity;
    }
}