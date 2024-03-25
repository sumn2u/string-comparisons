# String Comparisons

This library provides a versatile collection of functions for calculating the similarity between strings, empowering you to quantify the relatedness of text data in various applications. It implements well-established similarity metrics:

- **Cosine Similarity**
- **Jaccard Similarity**
- **Jaro Similarity**
- **Damerau-Levenshtein Distance**
- **Hamming Distance**
- **Levenshtein Distance**
- **Smith-Waterman Alignment**
- **Sørensen-Dice Coefficient**
- **Jaccard Similarity based on Trigrams**


## Installation

Assuming you have Node.js and npm installed, install the library using:

```bash
npm install string-comparisons
```

## Usage

The library offers several classes:

### CosineSimilarity

- `similarity(vector1, vector2)`: Calculates the cosine similarity between two vectors `vector1` and `vector2`. These vectors can represent word embeddings or other numerical representations of textual data. The returned value is a floating-point number between -1.0 (complete dissimilarity) and 1.0 (perfect similarity).

### JaccardSimilarity
- `similarity(s1, s2)`: Calculates the Jaccard similarity coefficient between sets `s1` and `s2`. These sets can represent collections of words, characters, or any other elements. The Jaccard similarity measures the size of the intersection (common elements) divided by the size of the union (all elements in either set) of the two sets. The returned value is a floating-point number between `0.0` (no similarity, completely disjoint sets) and `1.0` (perfect similarity, identical sets).

### JaroSimilarity

- `similarity(s1, s2)`: Calculates the Jaro similarity between strings `s1` and `s2`. This metric considers the number and order of matching characters within a certain window. The returned value is a floating-point number between 0.0 (no similarity) and 1.0 (perfect match).

### DamerauLevenshtein

- `similarity(s1, s2)`: Calculates the Damerau-Levenshtein distance between strings `s1` and `s2`. This metric extends the Levenshtein distance by allowing for transpositions (swapping adjacent characters). The returned value represents the minimum number of edits (insertions, deletions, substitutions, or transpositions) required to transform one string into the other.

### HammingDistance

- `distance(s1, s2)`: Calculates the Hamming distance between two strings `s1` and `s2` of equal length. This metric counts the number of corresponding positions where the characters differ. The returned value represents the number of mismatches between the strings.

## JaroWrinkler

- `similarity(s1, s2):` Calculates the Jaro-Winkler similarity between strings `s1` and `s2`. The returned value is a floating-point number between 0.0 (no similarity) and 1.0 (perfect match).

## Levenshtein

- `similarity(a, b):` Calculates the Levenshtein distance between strings `a` and `b`. This represents the minimum number of single-character edits (insertions, deletions, or substitutions) needed to transform `a` into `b`.

## SmithWaterman

- `similarity(s1, s2, match = 2, mismatch = -1, gap = -1):` Calculates the similarity between strings `s1` and `s2` using the Smith-Waterman algorithm. This method allows you to customize scoring parameters for matches, mismatches, and gaps in the alignment. The returned value is the maximum score achieved, indicating the similarity between the strings.

## SorensenDice

- `similarity(s1, s2):` Calculates the Sørensen-Dice coefficient between sets `s1` and `s2`. This metric can be used to compare sets of elements, which can be represented as arrays or Sets in JavaScript. The returned value is a floating-point number between `0.0` (no similarity) and `1.0` (perfect similarity).

## Trigram

- `generateTrigrams(inputString):` Generates a list of trigrams (3-character subsequences) from the given inputString.
- `similarity(string1, string2):` Calculates the similarity between strings `string1` and `string2` based on the Jaccard similarity coefficient of their trigram sets.

**Example Usage:**


```javascript
import {
  Cosine,
  Jaccard,
  Jaro,
  DamerauLevenshtein,
  HammingDistance,
  JaroWrinker,
  Levenshtein,
  SmithWaterman,
  SorensenDice,
  Trigram,
} from 'string-comparisons';

const string1 = 'programming';
const string2 = 'programmer';


console.log('Jaro-Winkler similarity:', JaroWrinkler.similarity(string1, string2)); // Output: ~0.8888888888888889
console.log('Levenshtein distance:', Levenshtein.similarity(string1, string2)); // Output: 1
console.log('Smith-Waterman similarity:', SmithWaterman.similarity(string1, string2)); // Output: (higher score for matching characters)

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

console.log('Sørensen-Dice similarity:', SorensenDice.similarity(set1, set2)); // Output: 0.6666666666666667

const trigram1 = 'hello';
const trigram2 = 'world';

console.log('Trigram Jaccard similarity:', Trigram.similarity(trigram1, trigram2)); // Output: 0 (no shared trigrams)
```

## Contributing

We encourage contributions to this library! Feel free to fork the repository, make your changes, and submit pull requests.

## Support the Project <a name="support-the-project"></a>⭐

If you feel awesome and want to support us in a small way, please consider starring and sharing the repo! This helps us get visibility and allow the community to grow. 🙏


## Contact Us
If you have any questions or feedback, please don't hesitate to contact us at sumn2u@gmail.com, or reach out to Suman directly. We hope you find this resource helpful 💜.


## License Information
This project is licensed under the  [MIT](./LICENSE) , which means that you are free to use, modify, and distribute the code as long as you comply with the terms of the license.