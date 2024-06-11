// Question:
// Problem Statement: Can Place Flowers**
//  You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
//
//  You have been given a integer array `flowerbed` representing the initial state of the flowerbed. Each element in the array represents either an empty plot (0) or a planted flower (1).
//
//  You need to return if `n` new flowers can be planted in the flowerbed without violating the no-adjacent-flowers
//
// Example:
//  Input: flowerbed = [1,0,0,0,1], n = 1
//  Output: true
//  Input: flowerbed = [1,0,0,0,1], n = 2
//  Output: false

// Constraints:
//  - `1 <= flowerbed.length <= 2 * 104`
//  - `flowerbed[i]` is either 0 or 1.
//  - There are no two adjacent flowers in `flowerbed`.
//  - `0 <= n <= flowerbed.length`

// **Answer:**

// To solve this problem, we can iterate through the flowerbed array and check each plot. If a plot is empty (0) and the previous and next plots are also empty, we can plant a flower in that plot and decrement the count of remaining flowers (`n`). Finally, if `n` becomes zero or negative, we return true, indicating that we can place all the required flowers.

function canPlaceFlowers(flowerbed, n) {
  let count = 0

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const prev = i === 0 ? 0 : flowerbed[i - 1]
      const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1]

      if (prev === 0 && next === 0) {
        flowerbed[i] = 1
        count++
      }
    }
  }

  return count >= n
}

// Example usage:
const flowerbed1 = [1, 0, 0, 0, 1]
const n1 = 1
const result1 = canPlaceFlowers(flowerbed1, n1)
console.log(result1) // Output: true

const flowerbed2 = [1, 0, 0, 0, 1]
const n2 = 2
const result2 = canPlaceFlowers(flowerbed2, n2)
console.log(result2) // Output: false

// ref: https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
