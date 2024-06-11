//! Question
//? There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
//? You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

//* Answer:
//? You can solve this problem in JavaScript by iterating through the gain array and keeping track of the current altitude.

//* Here's a JavaScript function to solve this problem:
function maxAltitude(gain) {
  let maxAlt = 0 // Initialize the maximum altitude to 0
  let currentAlt = 0 // Initialize the current altitude to 0

  for (let i = 0; i < gain.length; i++) {
    currentAlt += gain[i] // Update the current altitude
    maxAlt = Math.max(maxAlt, currentAlt) // Update the maximum altitude if needed
  }

  return maxAlt // Return the maximum altitude
}

// Example usage:
const gain = [-5, 1, 5, 0, -7]
const highestAltitude = maxAltitude(gain)
console.log(highestAltitude) // Output: 1

// ref: https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75
