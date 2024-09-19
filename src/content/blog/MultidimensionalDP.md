---
title: "Multidimensional DP"
description: "All solutions leetcode Top Interview 150 Multidimensional DP Solutions"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/r9wzMjgeZDkq1kgs-Living%2520With%2520Locals%2520In%2520Tansen%252C%2520Nepal.jpeg?w=750&h=750"
---

# [120. Triangle](https://leetcode.com/problems/triangle)

## Description

<p>Given a <code>triangle</code> array, return <em>the minimum path sum from top to bottom</em>.</p>

<p>For each step, you may move to an adjacent number of the row below. More formally, if you are on index <code>i</code> on the current row, you may move to either index <code>i</code> or index <code>i + 1</code> on the next row.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
<strong>Output:</strong> 11
<strong>Explanation:</strong> The triangle looks like:
   <u>2</u>
  <u>3</u> 4
 6 <u>5</u> 7
4 <u>1</u> 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> triangle = [[-10]]
<strong>Output:</strong> -10
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= triangle.length &lt;= 200</code></li>
	<li><code>triangle[0].length == 1</code></li>
	<li><code>triangle[i].length == triangle[i - 1].length + 1</code></li>
	<li><code>-10<sup>4</sup> &lt;= triangle[i][j] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you&nbsp;do this using only <code>O(n)</code> extra space, where <code>n</code> is the total number of rows in the triangle?

# Solutions

# Minimum Path Sum in Triangle

**Algorithm Used:** Dynamic Programming

## Intuition
The problem involves finding the minimum path sum from the top to the bottom of a triangle. Each step you can only move to adjacent numbers on the row below. Dynamic Programming is used to efficiently compute the minimum path sum by updating the triangle in place.

## Approach
The approach is to modify the triangle itself to store the minimum path sums. This allows for efficient space usage by leveraging the triangle's structure.

1. **Start from the Second Last Row**:
   - Traverse from the second last row to the top. Update each cell with the minimum path sum possible to reach the bottom of the triangle.

2. **Update Minimum Path Sum**:
   - For each cell in the current row, calculate the minimum path sum by adding the current cell's value to the minimum of the two adjacent cells in the row directly below.

3. **Final Result**:
   - After processing all rows, the top cell of the triangle will contain the minimum path sum.

### Steps
1. **Traverse from Bottom to Top**:
   - Iterate through the triangle from the second last row to the top row.

2. **Update Each Cell**:
   - For each cell in the row, update its value to be the sum of its original value and the minimum of the two adjacent cells directly below it.

3. **Return the Result**:
   - The value at the top of the triangle after all updates represents the minimum path sum.

This method uses O(n) extra space as the triangle is updated in place, and has a time complexity of O(n^2), where n is the number of rows in the triangle.

#### Java

```java
class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        for (int i = triangle.size() - 2; i >= 0; i++) {
            for (int j = 0; j <= i; j++) {
                int x = triangle.get(i).get(j);
                int y = Math.min(triangle.get(i + 1).get(j), triangle.get(i + 1).get(j + 1));
                triangle.get(i).set(j, x + y);
            }
        }
        return triangle.get(0).get(0);
    }
}
```

<br>
<br>
<br>

# [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum)

## Description

<p>Given a <code>m x n</code> <code>grid</code> filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.</p>

<p><strong>Note:</strong> You can only move either down or right at any point in time.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0064.Minimum%20Path%20Sum/images/minpath.jpg" style="width: 242px; height: 242px;" />
<pre>
<strong>Input:</strong> grid = [[1,3,1],[1,5,1],[4,2,1]]
<strong>Output:</strong> 7
<strong>Explanation:</strong> Because the path 1 &rarr; 3 &rarr; 1 &rarr; 1 &rarr; 1 minimizes the sum.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,2,3],[4,5,6]]
<strong>Output:</strong> 12
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 200</code></li>
</ul>

# Solutions

# Minimum Path Sum in Grid

**Algorithm Used:** Dynamic Programming

## Intuition
The problem involves finding the minimum path sum from the top-left corner to the bottom-right corner of a grid. You can only move down or right. Dynamic Programming is used to calculate the minimum path sum by building solutions from smaller subproblems.

## Approach
The approach is to use a 2D DP array where each cell represents the minimum path sum to reach that cell from the start.

1. **Initialize the DP Table**:
   - Create a 2D DP table `f` where `f[i][j]` represents the minimum path sum to reach cell `(i, j)`.

2. **Fill the First Row and Column**:
   - For the first row, each cell can only be reached from the cell directly to its left.
   - For the first column, each cell can only be reached from the cell directly above it.

3. **Fill the Rest of the DP Table**:
   - For each cell `(i, j)`, the minimum path sum is the value in the cell itself plus the minimum of the path sums from the cell above it or the cell to the left.

4. **Return the Result**:
   - The value in the bottom-right corner of the DP table will be the minimum path sum from the top-left to the bottom-right of the grid.

### Steps
1. **Initialize DP Table**:
   - Set `f[0][0]` to `grid[0][0]`.
   - Fill the first row and column based on the sums from adjacent cells.

2. **Update Each Cell**:
   - For each cell `(i, j)`, compute the minimum path sum by considering the minimum of the sum from the cell above or the cell to the left plus the current cell's value.

3. **Return Minimum Path Sum**:
   - Return the value in `f[m-1][n-1]` as it represents the minimum path sum to reach the bottom-right corner.

This method uses O(m * n) extra space for the DP table and has a time complexity of O(m * n), where m and n are the number of rows and columns in the grid, respectively.

#### Java

```java
class Solution {
    public int minPathSum(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] f = new int[m][n];
        f[0][0] = grid[0][0];
        for (int i = 1; i < m; i++) {
            f[i][0] = f[i - 1][0] + grid[i][0];
        }
        for (int j = 1; j < n; j++) {
            f[0][j] = f[0][j - 1] + grid[0][j];
        }
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i][j];
            }
        }
        return f[m - 1][n - 1];
    }
}
```

<br>
<br>
<br>

# [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii)

## Description

<p>You are given an <code>m x n</code> integer array <code>grid</code>. There is a robot initially located at the <b>top-left corner</b> (i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code>grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.</p>

<p>An obstacle and space are marked as <code>1</code> or <code>0</code> respectively in <code>grid</code>. A path that the robot takes cannot include <strong>any</strong> square that is an obstacle.</p>

<p>Return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.</p>

<p>The testcases are generated so that the answer will be less than or equal to <code>2 * 10<sup>9</sup></code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0063.Unique%20Paths%20II/images/robot1.jpg" style="width: 242px; height: 242px;" />
<pre>
<strong>Input:</strong> obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -&gt; Right -&gt; Down -&gt; Down
2. Down -&gt; Down -&gt; Right -&gt; Right
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0063.Unique%20Paths%20II/images/robot2.jpg" style="width: 162px; height: 162px;" />
<pre>
<strong>Input:</strong> obstacleGrid = [[0,1],[0,0]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == obstacleGrid.length</code></li>
	<li><code>n == obstacleGrid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
	<li><code>obstacleGrid[i][j]</code> is <code>0</code> or <code>1</code>.</li>
</ul>

# Solutions

# Unique Paths with Obstacles

**Algorithm Used:** Dynamic Programming

## Intuition
The problem asks to find the number of unique paths from the top-left corner to the bottom-right corner of a grid, where some cells may have obstacles. The task is to only move right or down. Dynamic Programming provides an efficient way to compute the number of valid paths while avoiding obstacles.

## Approach
1. **Grid Initialization**:
   - We initialize a 2D DP array `f`, where `f[i][j]` represents the number of unique paths to reach cell `(i, j)`.

2. **First Row and First Column**:
   - The first row and first column can only be filled with `1`s if there are no obstacles in the way. We stop filling them once we encounter an obstacle.

3. **Filling the DP Table**:
   - For each subsequent cell, if there is no obstacle in the current cell, the number of unique paths to this cell is the sum of the number of unique paths to the cell above it (`f[i-1][j]`) and the cell to its left (`f[i][j-1]`).
   
4. **Result**:
   - The value at `f[m-1][n-1]` will hold the number of unique paths from the top-left to the bottom-right of the grid.

### Steps
1. **Initialize the First Row and First Column**:
   - Fill the first row and the first column with `1` until an obstacle is encountered.

2. **Compute the DP Table**:
   - For each cell `(i, j)`, if there is no obstacle (`obstacleGrid[i][j] == 0`), calculate the value of `f[i][j]` by adding the values from the cell above and the cell to the left.
   - If there is an obstacle, the value remains `0` since no paths can pass through.

3. **Return the Result**:
   - The final result will be the value at `f[m-1][n-1]`, which gives the total number of unique paths to the destination.

This solution has a time complexity of O(m * n) and space complexity of O(m * n), where `m` and `n` are the number of rows and columns of the grid, respectively.

#### Java

```java
class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length, n = obstacleGrid[0].length;
        int[][] f = new int[m][n];
        for (int i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
            f[i][0] = 1;
        }
        for (int j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
            f[0][j] = 1;
        }
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (obstacleGrid[i][j] == 0) {
                    f[i][j] = f[i - 1][j] + f[i][j - 1];
                }
            }
        }
        return f[m - 1][n - 1];
    }
}
```

<br>
<br>
<br>

# [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring)

## Description

<p>Given a string <code>s</code>, return <em>the longest</em> <span data-keyword="palindromic-string"><em>palindromic</em></span> <span data-keyword="substring-nonempty"><em>substring</em></span> in <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;babad&quot;
<strong>Output:</strong> &quot;bab&quot;
<strong>Explanation:</strong> &quot;aba&quot; is also a valid answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cbbd&quot;
<strong>Output:</strong> &quot;bb&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= s.length &lt;= 1000</code></li>
 <li><code>s</code> consist of only digits and English letters.</li>
</ul>

<!-- description:end -->

# Solutions

# Longest Palindromic Substring

**Algorithm Used:** Expand Around Center

## Intuition
To find the longest palindromic substring in a given string, we can leverage the fact that a palindrome mirrors around its center. For each character (and between every two characters), we attempt to expand outwards and check for palindromes. The longest palindrome found during this process will be our result.

## Approach
1. **Expanding Around Centers**:
   - A palindrome can be centered around either a single character or two consecutive characters. Thus, for every character (and between every pair of characters), we attempt to expand outwards to find the longest palindrome centered there.

2. **Check Both Odd and Even Length Palindromes**:
   - For each character at index `i`, we calculate the length of the palindrome by expanding from both a single character center (`f(i, i)`) and a two-character center (`f(i, i+1)`).
   
3. **Track Maximum Palindrome**:
   - We keep track of the maximum palindrome length found (`mx`) and its starting position (`start`). Whenever a longer palindrome is found, we update these values accordingly.

4. **Return the Longest Palindrome**:
   - After checking all centers, the substring starting at `start` with a length of `mx` is returned as the longest palindrome.

### Steps
1. **Iterate Over Centers**:
   - For each character in the string, consider it as the center of a potential palindrome. Compute the longest palindromic substring centered at that character and its neighbor.

2. **Expand Around Center**:
   - Use a helper function `f(l, r)` that expands outward from the center while the characters on both sides are equal. It returns the length of the palindrome.

3. **Update Maximum Length**:
   - Keep track of the maximum length palindrome found and its starting position.

4. **Return the Result**:
   - Finally, return the substring of the input string starting at `start` with a length of `mx`.

This solution has a time complexity of O(n^2) and space complexity of O(1), where `n` is the length of the input string.


#### Java

```java
class Solution {
    private String s;
    private int n;

    public String longestPalindrome(String s) {
        this.s = s;
        n = s.length();
        int start = 0, mx = 1;
        for (int i = 0; i < n; i++) {
            int a = f(i, i);
            int b = f(i, i + 1);
            int t = Math.max(a, b);
            if (mx < t) {
                mx = t;
                start = i - ((t - 1) >> 1);
            }
        }
        return s.substring(start, start + mx);
    }

    private int f(int l, int r) {
        while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
            --l;
            ++r;
        }
        return r - l - 1;
    }
}
```

<br>
<br>
<br>

# [97. Interleaving String](https://leetcode.com/problems/interleaving-string)


## Description

<!-- description:start -->

<p>Given strings <code>s1</code>, <code>s2</code>, and <code>s3</code>, find whether <code>s3</code> is formed by an <strong>interleaving</strong> of <code>s1</code> and <code>s2</code>.</p>

<p>An <strong>interleaving</strong> of two strings <code>s</code> and <code>t</code> is a configuration where <code>s</code> and <code>t</code> are divided into <code>n</code> and <code>m</code> <span data-keyword="substring-nonempty">substrings</span> respectively, such that:</p>

<ul>
	<li><code>s = s<sub>1</sub> + s<sub>2</sub> + ... + s<sub>n</sub></code></li>
	<li><code>t = t<sub>1</sub> + t<sub>2</sub> + ... + t<sub>m</sub></code></li>
	<li><code>|n - m| &lt;= 1</code></li>
	<li>The <strong>interleaving</strong> is <code>s<sub>1</sub> + t<sub>1</sub> + s<sub>2</sub> + t<sub>2</sub> + s<sub>3</sub> + t<sub>3</sub> + ...</code> or <code>t<sub>1</sub> + s<sub>1</sub> + t<sub>2</sub> + s<sub>2</sub> + t<sub>3</sub> + s<sub>3</sub> + ...</code></li>
</ul>

<p><strong>Note:</strong> <code>a + b</code> is the concatenation of strings <code>a</code> and <code>b</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0097.Interleaving%20String/images/interleave.jpg" style="width: 561px; height: 203px;" />
<pre>
<strong>Input:</strong> s1 = &quot;aabcc&quot;, s2 = &quot;dbbca&quot;, s3 = &quot;aadbbcbcac&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> One way to obtain s3 is:
Split s1 into s1 = &quot;aa&quot; + &quot;bc&quot; + &quot;c&quot;, and s2 into s2 = &quot;dbbc&quot; + &quot;a&quot;.
Interleaving the two splits, we get &quot;aa&quot; + &quot;dbbc&quot; + &quot;bc&quot; + &quot;a&quot; + &quot;c&quot; = &quot;aadbbcbcac&quot;.
Since s3 can be obtained by interleaving s1 and s2, we return true.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;aabcc&quot;, s2 = &quot;dbbca&quot;, s3 = &quot;aadbbbaccc&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong> Notice how it is impossible to interleave s2 with any other string to obtain s3.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;&quot;, s2 = &quot;&quot;, s3 = &quot;&quot;
<strong>Output:</strong> true
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s1.length, s2.length &lt;= 100</code></li>
	<li><code>0 &lt;= s3.length &lt;= 200</code></li>
	<li><code>s1</code>, <code>s2</code>, and <code>s3</code> consist of lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you solve it using only <code>O(s2.length)</code> additional memory space?</p>

# Solutions

# Interleaving String

**Algorithm Used:** Dynamic Programming with Memoization (Depth-First Search)

## Intuition
The problem is to determine whether a string `s3` can be formed by interleaving two other strings `s1` and `s2`, while maintaining the relative order of characters from both `s1` and `s2`. The key observation is that at any given point in the process, we can either pick a character from `s1` or `s2`, as long as it matches the current character in `s3`.

## Approach
1. **Recursive DFS with Memoization**:
   - We can solve this problem using a recursive depth-first search (DFS) approach, where at each step, we decide whether to pick the next character from `s1` or `s2`. 
   - Memoization is used to store previously computed results for combinations of `i` (position in `s1`) and `j` (position in `s2`), to avoid redundant calculations and improve efficiency.

2. **Base Case**:
   - The recursion ends when both `s1` and `s2` are fully used (i.e., `i >= m` and `j >= n`). In this case, we return `true` as a valid interleaving is found.

3. **Memoization**:
   - A `Map` is used to store results of subproblems identified by a tuple `(i, j)`, where `i` and `j` represent the current indices in `s1` and `s2`.

4. **Recursive Steps**:
   - If the current character in `s3` matches the current character in `s1`, we move forward in `s1` and recursively check the rest.
   - Similarly, if the current character in `s3` matches the current character in `s2`, we move forward in `s2` and check recursively.
   - If either choice results in a valid solution, we return `true`.

### Steps
1. **Initial Validation**:
   - If the combined length of `s1` and `s2` doesn't match the length of `s3`, return `false`.

2. **Recursive DFS with Memoization**:
   - Start a recursive depth-first search from the beginning of both `s1` and `s2`. At each step, decide whether to use the current character from `s1` or `s2`.

3. **Return Final Result**:
   - The final result is whether it is possible to completely interleave `s1` and `s2` to match `s3`.

This approach ensures we avoid recalculating the result for overlapping subproblems by using memoization.

#### Java

```java
class Solution {
    private Map<List<Integer>, Boolean> f = new HashMap<>();
    private String s1;
    private String s2;
    private String s3;
    private int m;
    private int n;

    public boolean isInterleave(String s1, String s2, String s3) {
        m = s1.length();
        n = s2.length();
        if (m + n != s3.length()) {
            return false;
        }
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
        return dfs(0, 0);
    }

    private boolean dfs(int i, int j) {
        if (i >= m && j >= n) {
            return true;
        }
        var key = List.of(i, j);
        if (f.containsKey(key)) {
            return f.get(key);
        }
        int k = i + j;
        boolean ans = false;
        if (i < m && s1.charAt(i) == s3.charAt(k) && dfs(i + 1, j)) {
            ans = true;
        }
        if (!ans && j < n && s2.charAt(j) == s3.charAt(k) && dfs(i, j + 1)) {
            ans = true;
        }
        f.put(key, ans);
        return ans;
    }
}
```


# [72. Edit Distance](https://leetcode.com/problems/edit-distance)

## Description

<!-- description:start -->

<p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of operations required to convert <code>word1</code> to <code>word2</code></em>.</p>

<p>You have the following three operations permitted on a word:</p>

<ul>
	<li>Insert a character</li>
	<li>Delete a character</li>
	<li>Replace a character</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> word1 = &quot;horse&quot;, word2 = &quot;ros&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> 
horse -&gt; rorse (replace &#39;h&#39; with &#39;r&#39;)
rorse -&gt; rose (remove &#39;r&#39;)
rose -&gt; ros (remove &#39;e&#39;)
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> word1 = &quot;intention&quot;, word2 = &quot;execution&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong> 
intention -&gt; inention (remove &#39;t&#39;)
inention -&gt; enention (replace &#39;i&#39; with &#39;e&#39;)
enention -&gt; exention (replace &#39;n&#39; with &#39;x&#39;)
exention -&gt; exection (replace &#39;n&#39; with &#39;c&#39;)
exection -&gt; execution (insert &#39;u&#39;)
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= word1.length, word2.length &lt;= 500</code></li>
	<li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li>
</ul>

# Solutions

# Edit Distance

**Algorithm Used:** Dynamic Programming

## Intuition
The problem requires finding the minimum number of operations (insertions, deletions, or substitutions) needed to convert one string (`word1`) into another (`word2`). This is a classic problem known as **Edit Distance** or **Levenshtein Distance**.

The intuition behind the solution is to build a dynamic programming (DP) table where each cell `f[i][j]` represents the minimum edit distance to convert the first `i` characters of `word1` into the first `j` characters of `word2`.

## Approach
1. **Dynamic Programming Table Construction**:
   - We create a 2D DP table `f` where `f[i][j]` will store the minimum number of operations needed to convert the first `i` characters of `word1` to the first `j` characters of `word2`.
   - The base cases are:
     - `f[0][j] = j`: It takes `j` insertions to convert an empty string into the first `j` characters of `word2`.
     - `f[i][0] = i`: It takes `i` deletions to convert the first `i` characters of `word1` into an empty string.

2. **DP Transitions**:
   - For each character pair `word1[i-1]` and `word2[j-1]`, if the characters match, no additional operation is required, and we carry over the previous result: `f[i][j] = f[i-1][j-1]`.
   - If the characters differ, we take the minimum of three possible operations (insertion, deletion, substitution) and add one to the result:
     - **Insertion**: `f[i][j-1] + 1`
     - **Deletion**: `f[i-1][j] + 1`
     - **Substitution**: `f[i-1][j-1] + 1`

3. **Final Result**:
   - After filling out the DP table, the value at `f[m][n]` will represent the minimum edit distance between `word1` and `word2`.

### Steps
1. **Initialize DP Table**:
   - Set base cases for converting between empty strings and the two input strings.

2. **Fill DP Table**:
   - For each character in `word1` and `word2`, compute the minimum edit distance by considering the three operations (insertion, deletion, substitution).

3. **Return Result**:
   - Return the value `f[m][n]` from the DP table, which gives the minimum number of operations required to convert `word1` into `word2`.

This approach ensures that we compute the optimal solution in `O(m * n)` time, where `m` and `n` are the lengths of `word1` and `word2`.


#### Java

```java
class Solution {
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] f = new int[m + 1][n + 1];
        for (int j = 1; j <= n; j++) {
            f[0][j] = j;
        }
        for (int i = 1; i <= m; i++) {
            f[i][0] = i;
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    f[i][j] = f[i - 1][j - 1];
                } else {
                    f[i][j] = Math.min(f[i - 1][j], Math.min(f[i][j - 1], f[i - 1][j - 1])) + 1;
                }
            }
        }
        return f[m][n];
    }
}
```

<br>
<br>
<br>

# [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii)

## Description

<!-- description:start -->

<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>

<p>Find the maximum profit you can achieve. You may complete <strong>at most two transactions</strong>.</p>

<p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> prices = [3,3,5,0,0,3,1,4]
<strong>Output:</strong> 6
<strong>Explanation:</strong> Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> prices = [1,2,3,4,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transaction is done, i.e. max profit = 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= prices[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<!-- description:end -->

# Solutions

# Best Time to Buy and Sell Stock IV

**Algorithm Used:** Dynamic Programming

## Intuition
This problem involves finding the maximum profit from at most two transactions in the stock market. A transaction consists of buying and selling a stock, and multiple transactions must occur in order, i.e., a stock must be sold before buying it again.

We maintain four key variables during the iterations:
- `f1`: Maximum profit after the first buy.
- `f2`: Maximum profit after the first sell.
- `f3`: Maximum profit after the second buy.
- `f4`: Maximum profit after the second sell.

## Approach
The idea is to track profits after each buy/sell action in the following way:

1. **First Buy (`f1`)**:
   - We want to minimize the cost of buying the stock. Therefore, at each step, we update `f1` to the maximum of the current `f1` or the negative of the current stock price, i.e., `f1 = max(f1, -prices[i])`.

2. **First Sell (`f2`)**:
   - After the first buy, the first sell should maximize the profit from selling the stock. At each step, we update `f2` to the maximum of the current `f2` or the profit from selling the stock, i.e., `f2 = max(f2, f1 + prices[i])`.

3. **Second Buy (`f3`)**:
   - The second buy is the profit we can make after selling the first stock and then buying again. At each step, we update `f3` to the maximum of the current `f3` or the profit after buying again, i.e., `f3 = max(f3, f2 - prices[i])`.

4. **Second Sell (`f4`)**:
   - Finally, the second sell gives us the maximum profit after completing two transactions. At each step, we update `f4` to the maximum of the current `f4` or the profit from the second sell, i.e., `f4 = max(f4, f3 + prices[i])`.

At the end of the iteration, `f4` will contain the maximum profit that can be made with at most two transactions.

### Steps
1. **Initialize Variables**:
   - Set initial values for `f1`, `f2`, `f3`, and `f4`.

2. **Iterate Through Prices**:
   - Update the variables at each step by calculating the possible profits for both buys and sells.

3. **Return Result**:
   - The value of `f4` will hold the maximum profit possible with two transactions.

This approach ensures that we calculate the result in `O(n)` time, where `n` is the length of the `prices` array.


#### Java

```java
class Solution {
    public int maxProfit(int[] prices) {
        int f1 = -prices[0], f2 = 0, f3 = -prices[0], f4 = 0;
        for (int i = 1; i < prices.length; i++) {
            f1 = Math.max(f1, -prices[i]);
            f2 = Math.max(f2, f1 + prices[i]);
            f3 = Math.max(f3, f2 - prices[i]);
            f4 = Math.max(f4, f3 + prices[i]);
        }
        return f4;
    }
}
```

<br>
<br>
<br>

# [188. Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv)

## Description

<!-- description:start -->

<p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day, and an integer <code>k</code>.</p>

<p>Find the maximum profit you can achieve. You may complete at most <code>k</code> transactions: i.e. you may buy at most <code>k</code> times and sell at most <code>k</code> times.</p>

<p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> k = 2, prices = [2,4,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> k = 2, prices = [3,2,6,5,0,3]
<strong>Output:</strong> 7
<strong>Explanation:</strong> Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= 100</code></li>
	<li><code>1 &lt;= prices.length &lt;= 1000</code></li>
	<li><code>0 &lt;= prices[i] &lt;= 1000</code></li>
</ul>

<!-- description:end -->

# Solutions

### Solution 1: Memoization Search

We design a function `dfs(i, j, k)` to represent the maximum profit that can be obtained when starting from day `i`, completing at most `j` transactions, and holding the stock with the current state `k` (not holding the stock is represented by `0`, and holding the stock is represented by `1`). The answer is `dfs(0, k, 0)`.

#### Java

```java
class Solution {
    private Integer[][][] f;
    private int[] prices;
    private int n;

    public int maxProfit(int k, int[] prices) {
        n = prices.length;
        this.prices = prices;
        f = new Integer[n][k + 1][2];
        return dfs(0, k, 0);
    }

    private int dfs(int i, int j, int k) {
        if (i >= n) {
            return 0;
        }
        if (f[i][j][k] != null) {
            return f[i][j][k];
        }
        int ans = dfs(i + 1, j, k);
        if (k > 0) {
            ans = Math.max(ans, prices[i] + dfs(i + 1, j, 0));
        } else if (j > 0) {
            ans = Math.max(ans, -prices[i] + dfs(i + 1, j - 1, 1));
        }
        return f[i][j][k] = ans;
    }
}
```

### Solution 2: Dynamic Programming

We can also use dynamic programming to define `f[i][j][k]` as the maximum profit that can be obtained when completing at most j transactions (here we define the number of transactions as the number of purchases), and holding the stock with the current state k on the i-th day. The initial value of `f[i][j][k]` is 0. The answer is `f[n - 1][k][0]`.

When `i = 0`, the stock price is `prices[0]`. For any `j` \in [1, k]`, we have `f[0][j][1] = -prices[0]`, which means buying the stock on the 0-th day with a profit of `-prices[0]`.

When `i > 0`:

-   If the i-th day does not hold the stock, it may be that the stock was held on the i-1-th day and sold on the i-th day, or the stock was not held on the i-1-th day and no operation was performed on the i-th day. Therefore, `f[i][j][0] = \max(f[i - 1][j][1] + prices[i], f[i - 1][j][0])`.
-   If the i-th day holds the stock, it may be that the stock was not held on the i-1-th day and bought on the i-th day, or the stock was held on the i-1-th day and no operation was performed on the i-th day. Therefore, `f[i][j][1] = max(f[i - 1][j - 1][0] - prices[i], f[i - 1][j][1])`.

Therefore, when `i > 0`, we can get the state transition equation:


The final answer is `f[n - 1][k][0]`.

The time complexity is `O(n \times k)`, and the space complexity is `O(n \times k)`, where `n` and `k` are the length of the prices array and the value of `k`, respectively.

We notice that the state `f[i][]` only depends on the state `f[i - 1][]`, so we can optimize the first dimension of the space and reduce the space complexity to `O(k)`.

#### Java

```java
class Solution {
    public int maxProfit(int k, int[] prices) {
        int n = prices.length;
        int[][][] f = new int[n][k + 1][2];
        for (int j = 1; j <= k; j++) {
            f[0][j][1] = -prices[0];
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j <= k; j++) {
                f[i][j][0] = Math.max(f[i - 1][j][1] + prices[i], f[i - 1][j][0]);
                f[i][j][1] = Math.max(f[i - 1][j - 1][0] - prices[i], f[i - 1][j][1]);
            }
        }
        return f[n - 1][k][0];
    }
}
```

<br>
<br>
<br>

# [221. Maximal Square](https://leetcode.com/problems/maximal-square)

## Description

<!-- description:start -->

<p>Given an <code>m x n</code> binary <code>matrix</code> filled with <code>0</code>&#39;s and <code>1</code>&#39;s, <em>find the largest square containing only</em> <code>1</code>&#39;s <em>and return its area</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0221.Maximal%20Square/images/max1grid.jpg" style="width: 400px; height: 319px;" />
<pre>
<strong>Input:</strong> matrix = [[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;]]
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0221.Maximal%20Square/images/max2grid.jpg" style="width: 165px; height: 165px;" />
<pre>
<strong>Input:</strong> matrix = [[&quot;0&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;]]
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[&quot;0&quot;]]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 300</code></li>
	<li><code>matrix[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
</ul>

<!-- description:end -->

# Solutions

# Maximal Square

**Algorithm Used:** Dynamic Programming

## Intuition
The problem asks to find the largest square containing only `1`s in a given binary matrix. The key idea is to use dynamic programming (DP) to store the size of the largest square ending at each cell.

For any cell in the matrix, if it contains a `1`, the size of the square that can be formed with this cell as the bottom-right corner depends on its neighboring cells to the top, left, and top-left. The size will be the minimum value among these neighbors, plus one.

## Approach

1. **DP Table**: 
   - We create a 2D DP table, `dp`, where `dp[i][j]` stores the size of the largest square that can end at position `(i-1, j-1)` in the original matrix.
   - If `matrix[i-1][j-1] == '1'`, we calculate `dp[i][j]` as the minimum of `dp[i-1][j]`, `dp[i][j-1]`, and `dp[i-1][j-1]`, plus one.
   - If `matrix[i-1][j-1] == '0'`, then `dp[i][j] = 0`.

2. **Track Maximum Size**: 
   - While populating the DP table, we also track the largest square size found so far.

3. **Return Result**: 
   - The area of the maximal square is the square of the largest value in the DP table.

### Steps

1. **Initialize DP Table**:
   - Create a DP table with dimensions `(m+1) x (n+1)` to handle the boundary conditions easily.

2. **Iterate Over Matrix**:
   - For each cell in the matrix, if it's a `1`, calculate the value in the DP table using the minimum of its neighboring cells and update the maximum square size.

3. **Compute the Square Area**:
   - Multiply the maximum side length by itself to get the area of the largest square.

This approach runs in `O(m * n)` time, where `m` and `n` are the dimensions of the matrix.


#### Java

```java
class Solution {
    public int maximalSquare(char[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int[][] dp = new int[m + 1][n + 1];
        int mx = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == '1') {
                    dp[i + 1][j + 1] = Math.min(Math.min(dp[i][j + 1], dp[i + 1][j]), dp[i][j]) + 1;
                    mx = Math.max(mx, dp[i + 1][j + 1]);
                }
            }
        }
        return mx * mx;
    }
}
```
