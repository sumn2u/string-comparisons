class HammingDistance {
    static calculate(str1, str2) {
        if (str1.length !== str2.length) {
            throw new Error('Strings must be of equal length');
        }
        let distance = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                distance++;
            }
        }
        return distance;
    }

    static similarity(str1, str2) {
        const distance = HammingDistance.calculate(str1, str2);
        const maxLength = Math.max(str1.length, str2.length);
        return 1 - distance / maxLength;
    }
}