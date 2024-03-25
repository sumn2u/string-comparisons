class DamerauLevenshteinDistance {
    static calculate(str1, str2) {
        const matrix = [];

        // Initialize matrix
        for (let i = 0; i <= str1.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= str2.length; j++) {
            matrix[0][j] = j;
        }

        // Fill in matrix
        for (let i = 1; i <= str1.length; i++) {
            for (let j = 1; j <= str2.length; j++) {
                const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;

                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1, // deletion
                    matrix[i][j - 1] + 1, // insertion
                    matrix[i - 1][j - 1] + cost // substitution
                );

                if (i > 1 && j > 1 && str1[i - 1] === str2[j - 2] && str1[i - 2] === str2[j - 1]) {
                    matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost); // transposition
                }
            }
        }

        return matrix[str1.length][str2.length];
    }

    static similarity(str1, str2) {
        const distance = DamerauLevenshteinDistance.calculate(str1, str2);
        const maxLength = Math.max(str1.length, str2.length);
        return 1 - distance / maxLength;
    }
}
