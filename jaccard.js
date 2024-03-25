class Jaccard {
    /**
     * Calculates the Jaccard similarity coefficient between two sets.
     *
     * @param {Set<any>} s1 - The first set for comparison.
     * @param {Set<any>} s2 - The second set for comparison.
     * @returns {float} - The Jaccard similarity coefficient between the two sets, ranging from 0.0 (no similarity) to 1.0 (perfect similarity).
     */
    static similarity(s1, s2) {
      // Convert input arguments to Sets for efficient element handling
      const set1 = new Set(s1);
      const set2 = new Set(s2);
  
      // Calculate Intersection: Elements present in both sets
      const intersection = new Set([...set1].filter(x => set2.has(x)));
  
      // Calculate Union: All unique elements from both sets
      const union = new Set([...set1, ...set2]);
  
      // Jaccard Similarity: Ratio of intersection size to union size
      const similarity = intersection.size / union.size;
  
      return similarity;
    }
  }
  