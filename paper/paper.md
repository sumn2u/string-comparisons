---
title: 'string-comparisons: A JavaScript Library for Text Similarity Analysis'
tags:
  - JavaScript
  - String Comparison
  - String Similarity
  - Node.js
  
authors:
  - name: Suman Kunwar
    orcid: 0000-0002-4345-1050
    affiliation: "1" # (Multiple affiliations must be quoted)
affiliations:
 - name: Faculty of Computer Science, Selinus University of Sciences and Literature, Ragusa, Italy
   index: 1
date: 07 April 2024
bibliography: paper.bib
---

# Summary

String Comparisons is a comprehensive JavaScript library designed to facilitate text similarity analysis. It offers a wide range of algorithms for measuring the similarity between strings, providing developers with the tools needed to assess the relatedness of textual data in diverse applications. With well-established metrics such as Cosine Similarity, Jaccard Similarity, and Levenshtein Distance among others, the library aims to simplify the process of comparing strings and extracting meaningful insights from text data.

# Statement of need
In fields such as natural language processing, information retrieval, and data minin[@yan_overview_2022], quantifying the similarity between textual entities is crucial [@amur_short-text_2023]. Over the last two decades, extensive research has been conducted in this domain, resulting in the development of various string comparison algorithms[@hakak_exact_2019]. While there are some JavaScript libraries available, such as [string-comparisons](https://www.npmjs.com/package/string-comparison), [compare-strings](https://www.npmjs.com/package/compare-strings), and [string-similarity-js](https://www.npmjs.com/package/string-similarity-js), they offer a limited number of algorithms and often come with larger package sizes.

Existing JavaScript libraries frequently lack a comprehensive set of similarity metrics, which can make it challenging for developers to select the most suitable algorithm for their specific use case. String Comparisons aims to address this gap by providing a versatile collection of algorithms, enabling developers to conduct accurate and efficient text similarity analysis.

# Usage

String Comparisons offers a versatile solution for developers across a wide array of tasks, such as document clustering, duplicate detection, recommendation systems, and enhancing search functionality. With its diverse set of similarity metrics, the library caters to various application scenarios, allowing users to choose the most appropriate algorithm based on their specific needs. For instance, the library facilitates string comparisons using algorithms like Jaro-Winkler, Levenshtein, Smith-Waterman, Sørensen-Dice, and Trigram Jaccard, as shown below:

```js

import StringComparisons from 'string-comparisons';

const { JaroWrinker, Levenshtein, SmithWaterman, SorensenDice, Trigram } = StringComparisons;

const string1 = 'programming';
const string2 = 'programmer';


console.log('Jaro-Winkler similarity:', JaroWrinker.similarity(string1, string2)); // Output: ~0.9054545454545454
console.log('Levenshtein distance:', Levenshtein.similarity(string1, string2)); // Output: 3
console.log('Smith-Waterman similarity:', SmithWaterman.similarity(string1, string2)); // Output: 16

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

console.log('Sørensen-Dice similarity:', SorensenDice.similarity(set1, set2)); // Output: 0.6666666666666667

const trigram1 = 'hello';
const trigram2 = 'world';

console.log('Trigram Jaccard similarity:', Trigram.similarity(trigram1, trigram2)); // Output: 0 (no shared trigrams)

// so on

```

# Implementation Details

[String Comparisons](https://www.npmjs.com/package/string-comparisons) is implemented in JavaScript and is available as an npm package for seamless installation and integration into Node.js projects. Each algorithm is encapsulated within a separate module, ensuring modularity and ease of use. The library's documentation includes detailed explanations of each algorithm, along with examples and performance considerations. Additionally, String Comparisons adheres to best practices in software development, with a focus on efficiency, accuracy, and ease of maintenance. 

# References