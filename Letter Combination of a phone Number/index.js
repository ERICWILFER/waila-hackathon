// **Question:**
// **Problem Statement: Letter Combinations of a Phone Number**
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
// **Example:**
//? Input: digits = "23"
//? Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
//
// **Constraints:**
//! - `0 <= digits.length <= 4`
//! - `digits[i]` is a digit in the range `['2', '9']`.

// **Answer:**

// To solve this problem, we can use a recursive approach. We'll create a mapping of digits to their respective letters and then recursively generate all possible combinations of letters for the given digits.

function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }

    const letterMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };

    const result = [];

    function backtrack(combination, nextDigits) {
        if (nextDigits.length === 0) {
            result.push(combination);
            return;
        }

        const currentDigit = nextDigits[0];
        const letters = letterMap[currentDigit];

        for (const letter of letters) {
            backtrack(combination + letter, nextDigits.slice(1));
        }
    }

    backtrack('', digits);

    return result;
}

// Example usage:
const digits = "23";
const result = letterCombinations(digits);
console.log(result); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// ref: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=leetcode-75