class Jaccard {
    static calculate(s1, s2) {
        const set1 = new Set(s1);
        const set2 = new Set(s2);

        // Intersection
        const intersection = new Set([...set1].filter(x => set2.has(x)));

        // Union
        const union = new Set([...set1, ...set2]);

        // Jaccard similarity
        const similarity = intersection.size / union.size;
        return similarity;
    }
}