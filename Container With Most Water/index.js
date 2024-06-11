// !Question:
//? You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//? Find two lines that together with the x-axis form a container, such that the container contains the most water.
//? Return the maximum amount of water a container can store.
//? Notice that you may not slant the container.

//* Answer:
//? The goal is to find two vertical lines in an array, where each line's height is represented by the elements of the height array, such that these two lines and the x-axis form a container. Your task is to determine the maximum amount of water that this container can hold.
//? Here's a step-by-step explanation of the problem:
//? You are given an array called height with n elements, where each element represents the height of a vertical line.
//? Imagine these vertical lines placed on a 2D plane, with their bases aligned along the x-axis. So, the ith line starts at coordinates (i, 0) and goes up to (i, height[i]).
//? You need to find two lines from the height array that, when combined with the x-axis, form a container. The container's width is determined by the horizontal distance between the two lines (i.e., the difference in their indices), and its height is determined by the shorter of the two lines.
//? The goal is to maximize the amount of water the container can hold. This is calculated as the width of the container multiplied by the height of the shorter line.

//* Here's a JavaScript function to solve this problem:
function maxArea(height) {
  let maxWater = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const minHeight = Math.min(height[left], height[right])
    const width = right - left
    width
    const currentWater = minHeight * width

    maxWater = Math.max(maxWater, currentWater)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxWater
}

//? 1.Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height)) // Output: 49

//? 2.Example usage:
//* Input: height = [1,1]
//* Output: 1

//ref: https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75
