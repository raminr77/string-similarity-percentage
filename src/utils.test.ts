import { test, expect } from 'vitest';
import {
  getTextSimilarityPercentage,
  getWordSimilarityPercentage,
  getCharacterSimilarityPercentage
} from './utils.js';

test('- Get Character Similarity Percentage', () => {
  expect(getCharacterSimilarityPercentage('', '')).toBe(100);
});

test('- Get Word Similarity Percentage', () => {
  expect(getWordSimilarityPercentage('', '')).toBe(100);
});

test('- Get Text Similarity Percentage', () => {
  expect(getTextSimilarityPercentage('', '')).toBe(100);
});
