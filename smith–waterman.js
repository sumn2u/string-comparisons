class SmithWaterman {
    static calculate(s1, s2, match = 2, mismatch = -1, gap = -1) {
        const matrix = [];

        // Initialize matrix
        for (let i = 0; i <= s1.length; i++) {
            matrix[i] = [];
            for (let j = 0; j <= s2.length; j++) {
                if (i === 0 || j === 0) {
                    matrix[i][j] = 0;
                } else {
                    matrix[i][j] = Math.max(
                        0,
                        matrix[i - 1][j] + gap,
                        matrix[i][j - 1] + gap,
                        matrix[i - 1][j - 1] + (s1[i - 1] === s2[j - 1] ? match : mismatch)
                    );
                }
            }
        }

        // Find maximum score
        let maxScore = 0;
        for (let i = 0; i <= s1.length; i++) {
            for (let j = 0; j <= s2.length; j++) {
                if (matrix[i][j] > maxScore) {
                    maxScore = matrix[i][j];
                }
            }
        }

        return maxScore;
    }
}