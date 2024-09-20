'use strict';
/**
 * It is a utility that calculates the similarity between two strings by providing a percentage score (number).
 *
 * @param {string}    firstString - First String
 * @param {string}    scoundString - Secound String
 */
export const getTextSimilarityPercentage = (
  firstString: string,
  scoundString: string
): number => {
  if (firstString === scoundString) {
    return 100;
  }

  return 0;
};

/**
 * It is a utility that calculates the similarity between two strings by providing a percentage score (number).
 *
 * @param {string}    firstString - First String
 * @param {string}    scoundString - Secound String
 */
export const getCharacterSimilarityPercentage = (
  firstString: string,
  scoundString: string
): number => {
  if (firstString === scoundString) {
    return 100;
  }

  return 0;
};

// DEV Environment Test
// you can use the functions or log your code here and then "npm run dev:watch"
console.log('\x1b[33m%s\x1b[0m', '- DEV Environment Test: \n');
