// Question:
// Problem Statement: Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Examples:

// Input: s = "hello"
// Output: "holle"

// Input: s = "OpenAI is awesome"
// Output: "OepnAI is ewosome"

// Constraints:
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

// **Answer:**

// To solve this problem, we can use two pointers approach. Initialize two pointers, one at the start of the string and the other at the end. Move the left pointer towards the right and the right pointer towards the left until they both point to vowels. Then, swap the vowels and continue until the pointers meet in the middle. This way, we reverse the vowels in the string.

function reverseVowels(s) {
  // Helper function to check if a character is a vowel
  function isVowel(char) {
    return 'aeiouAEIOU'.indexOf(char) !== -1;
  }

  // Convert the string to an array for easier swapping
  const chars = s.split('');
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isVowel(chars[left])) {
      left++;
    }
    while (left < right && !isVowel(chars[right])) {
      right--;
    }

    // Swap the vowels
    [chars[left], chars[right]] = [chars[right], chars[left]];

    left++;
    right--;
  }

  return chars.join('');
}

// Example usage:
const input1 = "hello";
const output1 = reverseVowels(input1);
console.log(output1); // Output: "holle"

const input2 = "OpenAI is awesome";
const output2 = reverseVowels(input2);
console.log(output2); // Output: "OepnAI is ewosome"
