// **Question:**
// **Problem Statement: String Compression**
//? Given an array of characters, compress it in-place.
//? 
//? The length after compression must always be smaller than or equal to the original array.
//? 
//? Every element of the array should be a character (not int) of length 1.
//? 
//? After you are done modifying the input array in-place, return the new length of the array.
//
// **Example:**
//? Input: ["a","a","b","b","c","c","c"]
//? Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
//? Explanation: "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
//
// **Constraints:**
//! - All characters of the input characters array are in lowercase English letters.
//! - 1 <= characters.length <= 1000

// **Answer:**

// To solve this problem, we can use two pointers to traverse the input array and count the consecutive occurrences of each character. We'll update the array in-place as we go and return the length of the compressed string.

function compress(chars) {
  let anchor = 0
  let write = 0

  for (let read = 0; read < chars.length; read++) {
    if (read + 1 === chars.length || chars[read] !== chars[read + 1]) {
      chars[write++] = chars[anchor]
      if (read > anchor) {
        const count = read - anchor + 1
        for (const digit of count.toString()) {
          chars[write++] = digit
        }
      }
      anchor = read + 1
    }
  }

  return write
}

// Example usage:
const chars = ["a", "a", "b", "b", "c", "c", "c"]
const compressedLength = compress(chars)
console.log(compressedLength) // Output: 6
console.log(chars.slice(0, compressedLength)) // Output: ["a", "2", "b", "2", "c", "3"]

// ref: https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
