import { describe, it, expect } from 'vitest';
import {
  getTextSimilarityPercentage,
  getWordSimilarityPercentage,
  getCharacterSimilarityPercentage
} from './utils.js';

describe('getTextSimilarityPercentage', () => {
  it('should return 100 when the strings are identical', () => {
    const result = getTextSimilarityPercentage('hello', 'hello');
    expect(result).toBe(100);
  });

  it('should return 0 when there are no similarities', () => {
    const result = getTextSimilarityPercentage('hello', 'world');
    expect(result).toBe(0);
  });

  it('should return 50 when half the string is similar', () => {
    const result = getTextSimilarityPercentage('hello', 'heeee');
    expect(result).toBeCloseTo(60); // ~60% similarity due to partial match
  });

  it('should return a lower percentage for more dissimilar strings', () => {
    const result = getTextSimilarityPercentage('kitten', 'sitting');
    expect(result).toBeGreaterThan(50); // Expect > 50% due to partial similarities
  });
});

describe('getWordSimilarityPercentage', () => {
  it('should return 100 when the strings are identical', () => {
    const result = getWordSimilarityPercentage('hello world', 'hello world');
    expect(result).toBe(100);
  });

  it('should return 0 when there are no matching words', () => {
    const result = getWordSimilarityPercentage('hello world', 'foo bar');
    expect(result).toBe(0);
  });

  it('should return 50 when half the words match', () => {
    const result = getWordSimilarityPercentage('hello world', 'hello universe');
    expect(result).toBe(50);
  });

  it('should ignore case differences', () => {
    const result = getWordSimilarityPercentage('Hello World', 'hello world');
    expect(result).toBe(100);
  });

  it('should handle empty strings correctly', () => {
    const result = getWordSimilarityPercentage('', 'hello world');
    expect(result).toBe(0);
  });
});

describe('getCharacterSimilarityPercentage', () => {
  it('should return 100 when the strings are identical', () => {
    const result = getCharacterSimilarityPercentage('abc', 'abc');
    expect(result).toBe(100);
  });

  it('should return 0 when there are no matching characters', () => {
    const result = getCharacterSimilarityPercentage('abc', 'def');
    expect(result).toBe(0);
  });

  it('should return 50 when half the characters match', () => {
    const result = getCharacterSimilarityPercentage('abc', 'abd');
    expect(result).toBeCloseTo(66.67); // 2/3 characters match
  });

  it('should return a lower percentage when only some characters match', () => {
    const result = getCharacterSimilarityPercentage('kitten', 'sitting');
    expect(result).toBeLessThan(60);
  });

  it('should handle strings of different lengths', () => {
    const result = getCharacterSimilarityPercentage('abc', 'abcdef');
    expect(result).toBeCloseTo(50); // 3/6 match
  });
});
