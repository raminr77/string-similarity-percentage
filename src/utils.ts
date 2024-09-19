'use strict';
/**
 * It is a utility that calculates the similarity between two strings by providing a percentage score (number).
 *
 * @param {string}    firstString - First String
 * @param {string}    scoundString - Secound String
 */

export const getStringSimilarityPercentage = (firstString: string, scoundString: string): number => {
  if (firstString === scoundString) {
    return 100;
  }

  return 0;
};
