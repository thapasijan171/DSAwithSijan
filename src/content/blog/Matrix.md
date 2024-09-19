---
title: "Matrix"
description: "All solutions leetcode Top Interview 150 Matrix"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/d8EAbHCfLBA4MGZO-Tansen_%2520See%2520the%2520Himalayas%2520Off%2520the%2520Beaten%2520Path%2520in%2520Nepal.jpeg?w=750&h=750"
---

# [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku)

## Description

<!-- description:start -->

<p>Determine if a&nbsp;<code>9 x 9</code> Sudoku board&nbsp;is valid.&nbsp;Only the filled cells need to be validated&nbsp;<strong>according to the following rules</strong>:</p>

<ol>
	<li>Each row&nbsp;must contain the&nbsp;digits&nbsp;<code>1-9</code> without repetition.</li>
	<li>Each column must contain the digits&nbsp;<code>1-9</code>&nbsp;without repetition.</li>
	<li>Each of the nine&nbsp;<code>3 x 3</code> sub-boxes of the grid must contain the digits&nbsp;<code>1-9</code>&nbsp;without repetition.</li>
</ol>

<p><strong>Note:</strong></p>

<ul>
	<li>A Sudoku board (partially filled) could be valid but is not necessarily solvable.</li>
	<li>Only the filled cells need to be validated according to the mentioned&nbsp;rules.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0036.Valid%20Sudoku/images/250px-Sudoku-by-L2G-20050714.svg.png" style="height:250px; width:250px" />
<pre>
<strong>Input:</strong> board = 
[[&quot;5&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]
,[&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]
,[&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;]
,[&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;]
,[&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;]
,[&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;]
,[&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;]
,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;]
,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]]
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> board = 
[[&quot;8&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]
,[&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]
,[&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;]
,[&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;]
,[&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;]
,[&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;]
,[&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;]
,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;]
,[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]]
<strong>Output:</strong> false
<strong>Explanation:</strong> Same as Example 1, except with the <strong>5</strong> in the top left corner being modified to <strong>8</strong>. Since there are two 8&#39;s in the top left 3x3 sub-box, it is invalid.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>board.length == 9</code></li>
	<li><code>board[i].length == 9</code></li>
	<li><code>board[i][j]</code> is a digit <code>1-9</code> or <code>&#39;.&#39;</code>.</li>
</ul>

# Solutions

# Valid Sudoku

**Algorithm Used:** Set-based Checking

## Intuition
To determine if a given 9x9 Sudoku board is valid, each row, column, and 3x3 sub-grid must contain all digits from 1 to 9 exactly once. This problem can be efficiently solved by using boolean arrays to track the presence of digits in each row, column, and sub-grid.

## Approach
1. **Initialize Tracking Arrays**:
   - Create three 2D boolean arrays:
     - `row[i][num]` to track if the number `num` has been seen in row `i`.
     - `col[j][num]` to track if the number `num` has been seen in column `j`.
     - `sub[k][num]` to track if the number `num` has been seen in the 3x3 sub-grid `k`.

2. **Iterate Through the Board**:
   - For each cell `(i, j)` in the board:
     - If the cell contains a digit (not `.`), compute its index `num` (0-based) and sub-grid index `k`.
     - Check if the number has already been seen in the current row, column, or sub-grid.
     - If it has, the board is invalid, so return `false`.
     - Otherwise, mark the number as seen in the respective row, column, and sub-grid.

3. **Return the Result**:
   - If no duplicates are found in any row, column, or sub-grid, return `true`.

This approach ensures that each cell is checked only once, and the time complexity is O(1) since the board size is fixed.

#### Java

```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        boolean[][] row = new boolean[9][9];
        boolean[][] col = new boolean[9][9];
        boolean[][] sub = new boolean[9][9];
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c == '.') {
                    continue;
                }
                int num = c - '0' - 1;
                int k = i / 3 * 3 + j / 3;
                if (row[i][num] || col[j][num] || sub[k][num]) {
                    return false;
                }
                row[i][num] = true;
                col[j][num] = true;
                sub[k][num] = true;
            }
        }
        return true;
    }
}
```


<br>
<br>
<br>

# [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix)

## Description

<!-- description:start -->

<p>Given an <code>m x n</code> <code>matrix</code>, return <em>all elements of the</em> <code>matrix</code> <em>in spiral order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0054.Spiral%20Matrix/images/spiral1.jpg" style="width: 242px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> [1,2,3,6,9,8,7,4,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0054.Spiral%20Matrix/images/spiral.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
<strong>Output:</strong> [1,2,3,4,8,12,11,10,9,5,6,7]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10</code></li>
	<li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></li>
</ul>

<!-- description:end -->

# Solutions

# Spiral Order Matrix

**Algorithm Used:** Layer-by-Layer Traversal

## Intuition
To traverse a matrix in a spiral order, you can visualize the matrix as being divided into concentric layers. By processing each layer sequentially, you can collect elements in the desired spiral order.

## Approach
1. **Initialize Boundaries**:
   - Define boundaries for the current layer: `x1` (top row), `y1` (left column), `x2` (bottom row), and `y2` (right column).

2. **Traverse Layers**:
   - While the current layer is valid (i.e., `x1 <= x2` and `y1 <= y2`):
     - Traverse from left to right along the top boundary (`x1` row).
     - Traverse from top to bottom along the right boundary (`y2` column).
     - If the current layer has more than one row and column:
       - Traverse from right to left along the bottom boundary (`x2` row).
       - Traverse from bottom to top along the left boundary (`y1` column).
     - Update boundaries to move inward for the next layer:
       - Increment `x1` and `y1` to move the top and left boundaries inward.
       - Decrement `x2` and `y2` to move the bottom and right boundaries inward.

3. **Return the Result**:
   - The `ans` list contains the elements of the matrix in spiral order.

This approach ensures that each element is visited exactly once, and the time complexity is O(m * n), where `m` and `n` are the dimensions of the matrix.

#### Java

```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int x1 = 0, y1 = 0, x2 = m - 1, y2 = n - 1;
        List<Integer> ans = new ArrayList<>();
        while (x1 <= x2 && y1 <= y2) {
            for (int j = y1; j <= y2; j++) {
                ans.add(matrix[x1][j]);
            }
            for (int i = x1 + 1; i <= x2; i++) {
                ans.add(matrix[i][y2]);
            }
            if (x1 < x2 && y1 < y2) {
                for (int j = y2 - 1; j >= y1; j--) {
                    ans.add(matrix[x2][j]);
                }
                for (int i = x2 - 1; i > x1; i--) {
                    ans.add(matrix[i][y1]);
                }
            }
            ++x1;
            ++y1;
            --x2;
            --y2;
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [48. Rotate Image](https://leetcode.com/problems/rotate-image)

## Description

<p>You are given an <code>n x n</code> 2D <code>matrix</code> representing an image, rotate the image by <strong>90</strong> degrees (clockwise).</p>

<p>You have to rotate the image <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a>, which means you have to modify the input 2D matrix directly. <strong>DO NOT</strong> allocate another 2D matrix and do the rotation.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0048.Rotate%20Image/images/mat1.jpg" style="width: 500px; height: 188px;" />
<pre>
<strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> [[7,4,1],[8,5,2],[9,6,3]]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0048.Rotate%20Image/images/mat2.jpg" style="width: 500px; height: 201px;" />
<pre>
<strong>Input:</strong> matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
<strong>Output:</strong> [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == matrix.length == matrix[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 20</code></li>
	<li><code>-1000 &lt;= matrix[i][j] &lt;= 1000</code></li>
</ul>

# Solutions

# Rotate Image

**Algorithm Used:** Transpose and Reverse

## Intuition
To rotate an `n x n` matrix by 90 degrees clockwise, you can use a two-step approach: first transpose the matrix, then reverse each row. This effectively achieves the rotation in-place.

## Approach
1. **Transpose the Matrix**:
   - Swap elements across the main diagonal. For each element at position `(i, j)`, swap it with the element at `(j, i)`. This step converts rows into columns.

2. **Reverse Each Row**:
   - After transposing, reverse each row to achieve the final rotated matrix. This step converts columns into rows, completing the 90-degree rotation.

### Steps
1. **Transpose**:
   - Iterate over each element below the main diagonal of the matrix and swap it with the corresponding element above the diagonal.
   - This transforms the matrix so that rows become columns.

2. **Reverse Rows**:
   - For each row in the matrix, reverse the order of its elements.

This approach operates in O(n^2) time complexity and uses O(1) extra space, as it performs the rotation in-place.

#### Java

```java
class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n >> 1; i++) {
            for (int j = 0; j < n; j++) {
                int t = matrix[i][j];
                matrix[i][j] = matrix[n - i - 1][j];
                matrix[n - i - 1][j] = t;
            }
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                int t = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = t;
            }
        }
    }
}
```

<br>
<br>
<br>

# [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes)

## Description

<p>Given an <code>m x n</code> integer matrix <code>matrix</code>, if an element is <code>0</code>, set its entire row and column to <code>0</code>&#39;s.</p>

<p>You must do it <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in place</a>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0073.Set%20Matrix%20Zeroes/images/mat1.jpg" style="width: 450px; height: 169px;" />
<pre>
<strong>Input:</strong> matrix = [[1,1,1],[1,0,1],[1,1,1]]
<strong>Output:</strong> [[1,0,1],[0,0,0],[1,0,1]]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0073.Set%20Matrix%20Zeroes/images/mat2.jpg" style="width: 450px; height: 137px;" />
<pre>
<strong>Input:</strong> matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
<strong>Output:</strong> [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[0].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>-2<sup>31</sup> &lt;= matrix[i][j] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>A straightforward solution using <code>O(mn)</code> space is probably a bad idea.</li>
	<li>A simple improvement uses <code>O(m + n)</code> space, but still not the best solution.</li>
	<li>Could you devise a constant space solution?</li>
</ul>

# Solutions

# Set Matrix Zeroes

**Algorithm Used:** Matrix Marking

## Intuition
To set entire rows and columns to zeroes based on the presence of zeroes in a matrix, you can use a marking technique. This involves using the first row and first column as markers to record which rows and columns should be set to zeroes.

## Approach
1. **Check First Row and Column**:
   - Determine if the first row or the first column contains any zeroes. Use boolean flags `i0` and `j0` to keep track of this.

2. **Mark Rows and Columns**:
   - Iterate through the matrix (excluding the first row and column) and mark the respective positions in the first row and column if a zero is found. This marking helps to identify which rows and columns should be zeroed out.

3. **Set Zeroes Based on Markers**:
   - Iterate through the matrix (excluding the first row and column) and set the element to zero if its corresponding row or column marker is zero.

4. **Set First Row and Column**:
   - If the `i0` flag is set, zero out the entire first row.
   - If the `j0` flag is set, zero out the entire first column.

### Steps
1. **Check for Zeroes in First Row/Column**:
   - Scan the first row and column to see if they contain any zeroes and set the flags accordingly.

2. **Mark Zeroes**:
   - For each zero found in the matrix (excluding the first row and column), mark the corresponding first row and column elements.

3. **Update Matrix**:
   - Use the marks in the first row and column to set the appropriate elements in the matrix to zero.

4. **Update First Row/Column**:
   - Apply the zeroes to the first row and column if needed.

This approach ensures that the matrix is updated in-place with a time complexity of O(m * n) and a space complexity of O(1), excluding the input matrix.

#### Java

```java
class Solution {
    public void setZeroes(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        boolean i0 = false, j0 = false;
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 0) {
                i0 = true;
                break;
            }
        }
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 0) {
                j0 = true;
                break;
            }
        }
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        if (i0) {
            for (int j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }
        if (j0) {
            for (int i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}
```

<br>
<br>
<br>

# [289. Game of Life](https://leetcode.com/problems/game-of-life)

## Description

<p>According to&nbsp;<a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Wikipedia&#39;s article</a>: &quot;The <b>Game of Life</b>, also known simply as <b>Life</b>, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.&quot;</p>

<p>The board is made up of an <code>m x n</code> grid of cells, where each cell has an initial state: <b>live</b> (represented by a <code>1</code>) or <b>dead</b> (represented by a <code>0</code>). Each cell interacts with its <a href="https://en.wikipedia.org/wiki/Moore_neighborhood" target="_blank">eight neighbors</a> (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):</p>

<ol>
	<li>Any live cell with fewer than two live neighbors dies as if caused by under-population.</li>
	<li>Any live cell with two or three live neighbors lives on to the next generation.</li>
	<li>Any live cell with more than three live neighbors dies, as if by over-population.</li>
	<li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
</ol>

<p><span>The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the <code>m x n</code> grid <code>board</code>, return <em>the next state</em>.</span></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0289.Game%20of%20Life/images/grid1.jpg" style="width: 562px; height: 322px;" />
<pre>
<strong>Input:</strong> board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
<strong>Output:</strong> [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0289.Game%20of%20Life/images/grid2.jpg" style="width: 402px; height: 162px;" />
<pre>
<strong>Input:</strong> board = [[1,1],[1,0]]
<strong>Output:</strong> [[1,1],[1,1]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == board.length</code></li>
	<li><code>n == board[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 25</code></li>
	<li><code>board[i][j]</code> is <code>0</code> or <code>1</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.</li>
	<li>In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?</li>
</ul>

# Solutions

# Game of Life

**Algorithm Used:** In-Place Transformation

## Intuition
The Game of Life is a cellular automaton where cells can either be alive or dead. The game updates the state of each cell based on its neighbors' states. This problem requires updating the board's state in place.

## Approach
The approach involves using an in-place encoding scheme to avoid using extra space while processing the board.

1. **Encoding States**:
   - Use positive numbers to represent live cells and negative numbers for dead cells. Specifically:
     - `1` for a live cell.
     - `0` for a dead cell.
     - `2` for a cell that was previously alive but is now dead (used to mark transitions).
     - `-1` for a cell that was previously dead but is now alive (used to mark transitions).

2. **Count Live Neighbors**:
   - For each cell, count the number of live neighbors. Update the cell's state based on the number of live neighbors and the cell's current state.

3. **Update Board**:
   - After processing all cells, convert the temporary states back to the final states:
     - Change cells with value `2` to `0` (dead).
     - Change cells with value `-1` to `1` (alive).

### Steps
1. **Process Each Cell**:
   - For each cell, count the number of live neighbors by iterating over the 3x3 neighborhood.
   - Update the cell's state based on the neighbor count:
     - Cells that remain alive should be marked as `2` if they die.
     - Cells that come to life should be marked as `-1`.

2. **Finalize the Board**:
   - Iterate through the board to convert the encoded states to the final states.

This approach ensures that the board is updated in-place with a time complexity of O(m * n) and a space complexity of O(1), excluding the input board.


#### Java

```java
class Solution {
    public void gameOfLife(int[][] board) {
        int m = board.length, n = board[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int live = -board[i][j];
                for (int x = i - 1; x <= i + 1; x++) {
                    for (int y = j - 1; y <= j + 1; y++) {
                        if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] > 0) {
                            ++live;
                        }
                    }
                }
                if (board[i][j] == 1 && (live < 2 || live > 3)) {
                    board[i][j] = 2;
                }
                if (board[i][j] == 0 && live == 3) {
                    board[i][j] = -1;
                }
            }
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 2) {
                    board[i][j] = 0;
                } else if (board[i][j] == -1) {
                    board[i][j] = 1;
                }
            }
        }
    }
}
```
