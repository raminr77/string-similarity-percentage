'use strict';
/**
 * It is a utility that calculates the similarity between two strings by providing a percentage score (number).
 *
 * @param {string}    firstString - First String
 * @param {string}    secondString - Secound String
 * @return {number}   similarityPercentage
 */
export const getTextSimilarityPercentage = (
  firstString: string,
  secondString: string
): number => {
  // Helper function to calculate the Levenshtein distance
  const getLevenshteinDistance = (a: string, b: string): number => {
    const matrix: number[][] = [];

    // Initialize matrix
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    // Fill matrix
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          );
        }
      }
    }

    return matrix[b.length][a.length];
  };

  if (firstString === secondString) {
    return 100;
  }

  const maxLength = Math.max(firstString.length, secondString.length);
  const distance = getLevenshteinDistance(firstString, secondString);

  // Calculate similarity percentage
  const similarityPercentage = ((maxLength - distance) / maxLength) * 100;

  return similarityPercentage;
};

/**
 * It is a utility that calculates the similarity between two strings by providing a percentage score (number).
 *
 * @param {string}    firstString - First String
 * @param {string}    secondString - Secound String
 */
export const getWordSimilarityPercentage = (
  firstString: string,
  secondString: string
): number => {
  // Helper function to split a string into words
  const getWords = (str: string): string[] => {
    return (
      str
        .toLowerCase() // Convert to lowercase for case-insensitive comparison
        .match(/\b\w+\b/g) || []
    ); // Extract words
  };

  if (firstString === secondString) {
    return 100;
  }

  const firstWords = getWords(firstString);
  const secondWords = getWords(secondString);

  // Create a set of unique words from both strings
  const totalWords = new Set([...firstWords, ...secondWords]);
  let matchingWordsCount = 0;

  // Count the number of matching words between the two strings
  firstWords.forEach((word) => {
    if (secondWords.includes(word)) {
      matchingWordsCount++;
    }
  });

  // Calculate similarity percentage based on word matches
  const similarityPercentage = (matchingWordsCount / totalWords.size) * 100;

  return similarityPercentage;
};

/**
 * It is a utility that calculates the similarity between two strings by providing a percentage score (number).
 *
 * @param {string}    firstString - First String
 * @param {string}    secondString - Secound String
 */
export const getCharacterSimilarityPercentage = (
  firstString: string,
  secondString: string
): number => {
  if (firstString === secondString) {
    return 100;
  }

  // Calculate the number of matching characters
  let matchingCharsCount = 0;
  const maxLength = Math.max(firstString.length, secondString.length);

  for (let i = 0; i < Math.min(firstString.length, secondString.length); i++) {
    if (firstString[i] === secondString[i]) {
      matchingCharsCount++;
    }
  }

  // Calculate similarity percentage based on matching characters
  const similarityPercentage = (matchingCharsCount / maxLength) * 100;

  return similarityPercentage;
};

// DEV Environment Test
// you can use the functions or log your code here and then "npm run dev:watch"
console.log('\x1b[33m%s\x1b[0m', '- DEV Environment Test: \n');
