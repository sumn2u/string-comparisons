class Trigram {
    static generateTrigrams(inputString) {
        const trigrams = [];
        for (let i = 0; i < inputString.length - 2; i++) {
            trigrams.push(inputString.slice(i, i + 3));
        }
        return trigrams;
    }

    static similarity(string1, string2) {
        const trigrams1 = this.generateTrigrams(string1);
        const trigrams2 = this.generateTrigrams(string2);

        const intersection = trigrams1.filter(trigram => trigrams2.includes(trigram));
        const union = [...new Set([...trigrams1, ...trigrams2])];
        
        return intersection.length / union.length;
    }
}