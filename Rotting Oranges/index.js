// **Question:**
// **Problem Statement: Rotting Oranges**
//? You are given an `m x n` grid where each cell can have one of three values:
//?
//? 1. `0` representing an empty cell.
//? 2. `1` representing a fresh orange.
//? 3. `2` representing a rotten orange.
//?
//? Every minute, any fresh orange that is **adjacent** (4-directionally) to a rotten orange becomes rotten.
//?
//? Return the minimum number of minutes that must elapse until no cell has a fresh orange left. If this is impossible, return `-1`.

// **Example:**
//? Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
//? Output: 4
//? Explanation:
//? At minute 0, the grid is:
//? [[2,1,1],[1,1,0],[0,1,1]]
//? 
//? At minute 1, the grid is:
//? [[2,2,1],[2,1,0],[0,1,1]]
//? 
//? At minute 2, the grid is:
//? [[2,2,2],[2,2,0],[0,1,1]]
//? 
//? At minute 3, the grid is:
//? [[2,2,2],[2,2,0],[0,2,1]]
//? 
//? At minute 4, the grid is:
//? [[2,2,2],[2,2,0],[0,2,2]]

// **Constraints:**
//! - `m == grid.length`
//! - `n == grid[i].length`
//! - `1 <= m, n <= 10`
//! - `grid[i][j]` is `0`, `1`, or `2`.

// **Answer:**

// To solve this problem, we can use a breadth-first search (BFS) approach to simulate the rotting of oranges. We start by initializing a queue with the positions of all the initially rotten oranges and their depth (minutes). Then, we perform BFS to spread the rotting effect to adjacent fresh oranges.
function orangesRotting(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const queue = [];
    let freshCount = 0;
    let minutes = 0;

    // Initialize the queue with initially rotten oranges
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }

    while (queue.length > 0 && freshCount > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] === 1) {
                    grid[newX][newY] = 2;
                    queue.push([newX, newY]);
                    freshCount--;
                }
            }
        }

        if (queue.length > 0) {
            minutes++;
        }
    }

    return freshCount === 0 ? minutes : -1;
}

// Example usage:
const grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
const result = orangesRotting(grid);
console.log(result); // Output: 4

// ref: https://leetcode.com/problems/rotting-oranges/?envType=study-plan-v2&envId=leetcode-75