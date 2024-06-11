//! Question
//? Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

//* Answer:
//? You can solve this problem in JavaScript by counting the occurrences of each value in the array and then checking if
//? the count of occurrences is unique for each value.

//* Here's a JavaScript function to solve this problem:
function areOccurrencesUnique(arr) {
  // Create an object to store the counts of each value
  const countMap = {}

  // Count the occurrences of each value
  for (const num of arr) {
    if (countMap[num]) {
      countMap[num]++
    } else {
      countMap[num] = 1
    }
  }

  // Create an array to store the unique counts
  const uniqueCounts = []

  // Check if the count of occurrences is unique for each value
  for (const count of Object.values(countMap)) {
    if (uniqueCounts.includes(count)) {
      return false // If a count is not unique, return false
    } else {
      uniqueCounts.push(count)
    }
  }

  return true // If all counts are unique, return true
}

// Example usage:
const arr1 = [1, 2, 2, 1, 1, 3]
console.log(areOccurrencesUnique(arr1)) // Output: true

const arr2 = [1, 2]
console.log(areOccurrencesUnique(arr2)) // Output: true

const arr3 = [1, 2, 2, 3, 3, 3]
console.log(areOccurrencesUnique(arr3)) // Output: false

// ref: https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75
