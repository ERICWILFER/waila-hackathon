//! Question
//? For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
//? Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

//* Answer:
//? For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
//? Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

//* Here's a JavaScript function to solve this problem:
function gcdOfLengths(len1, len2) {
  while (len2) {
    const temp = len2
    len2 = len1 % len2
    len1 = temp
  }
  return len1
}

function largestCommonDivisor(str1, str2) {
  const len1 = str1.length
  const len2 = str2.length
  const gcdLen = gcdOfLengths(len1, len2)

  const commonSubstring = str1.slice(0, gcdLen)

  if (
    commonSubstring.repeat(len1 / gcdLen) === str1 &&
    commonSubstring.repeat(len2 / gcdLen) === str2
  ) {
    return commonSubstring
  } else {
    return ""
  }
}

//? 1.Example usage:
const str1 = "ABCABC"
const str2 = "ABC"
const result = largestCommonDivisor(str1, str2)
console.log(result) // Output: "ABC"

//? 2.Example usage:
//* Input: str1 = "ABABAB", str2 = "ABAB"
//* Output: "AB"

//? 3.Example usage:
//* Input: str1 = "LOVELY", str2 = "LOVE"
//* Output: ""

// ref: https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75