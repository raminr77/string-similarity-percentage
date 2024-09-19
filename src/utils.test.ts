import { test, expect } from 'vitest';
import { getStringSimilarityPercentage } from './utils.js';

test('Get String Similarity Percentage', () => {
  expect(getStringSimilarityPercentage('', '')).toBe(100);
});
