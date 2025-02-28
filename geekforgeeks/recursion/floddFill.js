// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image.

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the new color.

// use DFS to solve this problem

function floodFill(arr, n, m, sr, sc, newColor) {
    // Get the color of the starting pixel
    let color = arr[sr][sc];
    // If the new color is the same as the starting pixel color, return the array as is
    if (color === newColor) return arr;

    // Define the DFS function
    function dfs(r, c) {
        // If the current pixel is out of bounds or not the same color as the starting pixel, return
        if (r < 0 || c < 0 || r >= n || c >= m || arr[r][c] !== color) return;
        // Change the color of the current pixel to the new color
        arr[r][c] = newColor;
        // Recursively call DFS on the neighboring pixels
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    // Start the DFS from the starting pixel
    dfs(sr, sc);
    return arr;
}

// Example usage:
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 3, 3, 1, 1, 2)); // [[2,2,2],[2,2,0],[2,0,1]]