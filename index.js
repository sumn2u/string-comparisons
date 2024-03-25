// Import similarity comparison functions from their respective modules
import Cosine from './lib/cosine';
import Jaro from './lib/jaro';
import Jaccard from './lib/Jaccard';
import DamerauLevenshtein from './lib/damerauLevenshtein';
import HammingDistance from './lib/hammingDistance';
import JaroWrinker from './lib/jaroWinkler';
import Levenshtein from './lib/levenshtein';
import SmithWaterman from './lib/smithWaterman';
import SorensenDice from './lib/sorensenDice';
import Trigram from './lib/trigram';

// Export all the imported similarity functions for use in other modules
export {
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
};