class Cosine {
    static termFreqMap(str) {
        const words = str.split(' ');
        const termFreq = {};
        words.forEach(function(w) {
            termFreq[w] = (termFreq[w] || 0) + 1;
        });
        return termFreq;
    }

    static addKeysToDict(map, dict) {
        for (const key in map) {
            dict[key] = true;
        }
    }

    static termFreqMapToVector(map, dict) {
        const termFreqVector = [];
        for (const term in dict) {
            termFreqVector.push(map[term] || 0);
        }
        return termFreqVector;
    }

    static vecDotProduct(vecA, vecB) {
        let product = 0;
        for (let i = 0; i < vecA.length; i++) {
            product += vecA[i] * vecB[i];
        }
        return product;
    }

    static vecMagnitude(vec) {
        let sum = 0;
        for (let i = 0; i < vec.length; i++) {
            sum += vec[i] * vec[i];
        }
        return Math.sqrt(sum);
    }

    static calculateSimilarity(vecA, vecB) {
        return this.vecDotProduct(vecA, vecB) / (this.vecMagnitude(vecA) * this.vecMagnitude(vecB));
    }

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
