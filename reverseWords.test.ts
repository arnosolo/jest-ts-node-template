import {describe, expect, test} from '@jest/globals';
import {reverseWords} from './reverseWords';

const inputOutputMap: Record<string, string> = {
    "the sky is blue": "blue is sky the",
    "  hello world  ": "world hello",
    "a good   example": "example good a",
}

describe('reverseWords module', () => {
    Object.entries(inputOutputMap).forEach(([k, v]) => {
        test(`Input: ${k}`, () => {
          expect(reverseWords(k)).toBe(v);
        });
    })
});