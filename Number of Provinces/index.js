// **Question:**
// **Problem Statement: Number of Provinces**
//? There are `n` cities. Some of them are connected, while some are not. If a city is connected to another city, then there is a road between them. The cities are labeled from `1` to `n`.
//?
//? You are given `n` * `n` matrix isConnected where `isConnected[i][j]` = 1 if the `ith` city and the `jth` city are directly connected, and `isConnected[i][j]` = 0 otherwise.
//?
//? Return the total number of provinces.
//
// **Example:**
//? Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
//? Output: 2
//
// **Constraints:**
//! - `1 <= n <= 200`
//! - `n == isConnected.length`
//! - `n == isConnected[i].length`
//! - `isConnected[i][j]` is `1` or `0`.
//! - `isConnected[i][i] == 1`
//! - `isConnected[i][j] == isConnected[j][i]`

// **Answer:**

// To solve this problem, we can use Depth-First Search (DFS) to traverse the cities and find connected provinces. We'll keep track of visited cities to avoid double-counting provinces.

function findCircleNum(isConnected) {
  const n = isConnected.length
  const visited = new Array(n).fill(false)
  let provinces = 0

  function dfs(city) {
    visited[city] = true

    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor)
      }
    }
  }

  for (let city = 0; city < n; city++) {
    if (!visited[city]) {
      provinces++
      dfs(city)
    }
  }

  return provinces
}

// Example usage:
const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]
const result = findCircleNum(isConnected)
console.log(result) // Output: 2

// ref: https://leetcode.com/problems/number-of-provinces/?envType=study-plan-v2&envId=leetcode-75
