---
title: "Backtracking"
description: "All solutions leetcode Top Interview 150 of Backtracking"
pubDate: "2024"
heroImage: "../img/img_blog/backtracking.jpeg"
---

# [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)

## Description

<!-- description:start -->

<p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent. Return the answer in <strong>any order</strong>.</p>

<p>A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png" style="width: 300px; height: 243px;" />
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> digits = &quot;23&quot;
<strong>Output:</strong> [&quot;ad&quot;,&quot;ae&quot;,&quot;af&quot;,&quot;bd&quot;,&quot;be&quot;,&quot;bf&quot;,&quot;cd&quot;,&quot;ce&quot;,&quot;cf&quot;]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> digits = &quot;&quot;
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> digits = &quot;2&quot;
<strong>Output:</strong> [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>0 &lt;= digits.length &lt;= 4</code></li>
 <li><code>digits[i]</code> is a digit in the range <code>[&#39;2&#39;, &#39;9&#39;]</code>.</li>
</ul>

# Solutions

# Letter Combinations of a Phone Number

## Intuition
The `letterCombinations` method generates all possible letter combinations that the given digits could represent on a traditional phone keypad. Each digit corresponds to a set of letters, and the task is to find all possible combinations of these letters.

## Approach
### Steps

1. **Initialization**:
   - Define the mapping of digits to letters using a `String[]` array `d`.
   - Initialize a `StringBuilder` `t` for building combinations and a `List<String>` `ans` to store the results.

2. **Base Case**:
   - If the input `digits` is empty, return the empty `ans` list immediately.

3. **Depth-First Search (DFS)**:
   - Implement a recursive DFS method to explore all possible combinations.
   - For each digit, retrieve the corresponding letters from the `d` array.
   - For each letter, append it to the current combination (`t`), and recursively continue to the next digit.
   - After exploring all letters for the current digit, backtrack by removing the last appended letter.

4. **Store Result**:
   - When all digits are processed (base case of DFS), add the current combination to the `ans` list.

5. **Return Result**:
   - Return the list `ans` containing all possible combinations.



#### Java

```java
class Solution {
    private final String[] d = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    private String digits;
    private List<String> ans = new ArrayList<>();
    private StringBuilder t = new StringBuilder();

    public List<String> letterCombinations(String digits) {
        if (digits.length() == 0) {
            return ans;
        }
        this.digits = digits;
        dfs(0);
        return ans;
    }

    private void dfs(int i) {
        if (i >= digits.length()) {
            ans.add(t.toString());
            return;
        }
        String s = d[digits.charAt(i) - '2'];
        for (char c : s.toCharArray()) {
            t.append(c);
            dfs(i + 1);
            t.deleteCharAt(t.length() - 1);
        }
    }
}
```

<br>
<br>
<br>

# [77. Combinations](https://leetcode.com/problems/combinations)

## Description

<p>Given two integers <code>n</code> and <code>k</code>, return <em>all possible combinations of</em> <code>k</code> <em>numbers chosen from the range</em> <code>[1, n]</code>.</p>

<p>You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4, k = 2
<strong>Output:</strong> [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
<strong>Explanation:</strong> There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1, k = 1
<strong>Output:</strong> [[1]]
<strong>Explanation:</strong> There is 1 choose 1 = 1 total combination.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 20</code></li>
	<li><code>1 &lt;= k &lt;= n</code></li>
</ul>

# Solutions

# Combinations

## Intuition
The `combine` method generates all possible combinations of `k` numbers chosen from the range 1 to `n`. This is a classic problem of combinatorial generation where the goal is to explore all subsets of a specific size.

## Approach
### Steps

1. **Initialization**:
   - Define the `List<List<Integer>>` to store the result `ans`.
   - Define a `List<Integer>` `t` to hold the current combination.
   - Store the values of `n` and `k` for the combination generation.

2. **Depth-First Search (DFS)**:
   - Implement a recursive DFS method to explore all possible combinations.
   - **Base Case**:
     - If the current combination `t` has reached the size `k`, add it to `ans`.
   - **Recursive Case**:
     - If the current index `i` is within bounds (`i <= n`), include `i` in the combination and recurse to explore further.
     - After exploring with `i` included, backtrack by removing `i` and recurse to explore combinations without `i`.

3. **Generate Combinations**:
   - Start the DFS from index `1` and explore all possible combinations by including or excluding each number.

4. **Return Result**:
   - Return the list `ans` containing all possible combinations of size `k`.

#### Java

```java
class Solution {
    private List<List<Integer>> ans = new ArrayList<>();
    private List<Integer> t = new ArrayList<>();
    private int n;
    private int k;

    public List<List<Integer>> combine(int n, int k) {
        this.n = n;
        this.k = k;
        dfs(1);
        return ans;
    }

    private void dfs(int i) {
        if (t.size() == k) {
            ans.add(new ArrayList<>(t));
            return;
        }
        if (i > n) {
            return;
        }
        t.add(i);
        dfs(i + 1);
        t.remove(t.size() - 1);
        dfs(i + 1);
    }
}
```

# [46. Permutations](https://leetcode.com/problems/permutations)

## Description

<p>Given an array <code>nums</code> of distinct integers, return <em>all the possible permutations</em>. You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0,1]
<strong>Output:</strong> [[0,1],[1,0]]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> [[1]]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 6</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
	<li>All the integers of <code>nums</code> are <strong>unique</strong>.</li>
</ul>

# Solutions

# Permutations

## Intuition
The `permute` method generates all possible permutations of a given array of integers. This involves exploring all possible orderings of the elements in the array.

## Approach
### Steps

1. **Initialization**:
   - Define `List<List<Integer>>` to store the result `ans`.
   - Define a `List<Integer>` `t` to hold the current permutation.
   - Define a boolean array `vis` to track which elements have been included in the current permutation.
   - Store the input `nums` array for permutation generation.

2. **Depth-First Search (DFS)**:
   - Implement a recursive DFS method to explore all possible permutations.
   - **Base Case**:
     - If the size of the current permutation `t` matches the length of `nums`, add it to `ans`.
   - **Recursive Case**:
     - Iterate through each element in `nums`. If an element is not yet visited (`!vis[j]`), mark it as visited, add it to the current permutation, and recurse.
     - After exploring with the current element, backtrack by removing the element from the current permutation and marking it as not visited.

3. **Generate Permutations**:
   - Start the DFS from index `0` and explore all possible permutations by including or excluding each element.

4. **Return Result**:
   - Return the list `ans` containing all possible permutations of the input array.

#### Java

```java
class Solution {
    private List<List<Integer>> ans = new ArrayList<>();
    private List<Integer> t = new ArrayList<>();
    private boolean[] vis;
    private int[] nums;

    public List<List<Integer>> permute(int[] nums) {
        this.nums = nums;
        vis = new boolean[nums.length];
        dfs(0);
        return ans;
    }

    private void dfs(int i) {
        if (i == nums.length) {
            ans.add(new ArrayList<>(t));
            return;
        }
        for (int j = 0; j < nums.length; j++) {
            if (!vis[j]) {
                vis[j] = true;
                t.add(nums[j]);
                dfs(i + 1);
                t.remove(t.size() - 1);
                vis[j] = false;
            }
        }
    }
}
```

<br>
<br>
<br>


# [39. Combination Sum](https://leetcode.com/problems/combination-sum)

## Description

<p>Given an array of <strong>distinct</strong> integers <code>candidates</code> and a target integer <code>target</code>, return <em>a list of all <strong>unique combinations</strong> of </em><code>candidates</code><em> where the chosen numbers sum to </em><code>target</code><em>.</em> You may return the combinations in <strong>any order</strong>.</p>

<p>The <strong>same</strong> number may be chosen from <code>candidates</code> an <strong>unlimited number of times</strong>. Two combinations are unique if the <span data-keyword="frequency-array">frequency</span> of at least one of the chosen numbers is different.</p>

<p>The test cases are generated such that the number of unique combinations that sum up to <code>target</code> is less than <code>150</code> combinations for the given input.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2,3,6,7], target = 7
<strong>Output:</strong> [[2,2,3],[7]]
<strong>Explanation:</strong>
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2,3,5], target = 8
<strong>Output:</strong> [[2,2,2,2],[2,3,3],[3,5]]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2], target = 1
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= candidates.length &lt;= 30</code></li>
	<li><code>2 &lt;= candidates[i] &lt;= 40</code></li>
	<li>All elements of <code>candidates</code> are <strong>distinct</strong>.</li>
	<li><code>1 &lt;= target &lt;= 40</code></li>
</ul>

# Solutions

# Combination Sum

## Intuition
The `combinationSum` method finds all unique combinations of integers from the given `candidates` array that sum up to a specified `target`. Each number in `candidates` can be used multiple times in the combination.

## Approach
### Steps

1. **Initialization**:
   - Define `List<List<Integer>>` to store the result `ans`.
   - Define a `List<Integer>` `t` to hold the current combination.
   - Store the sorted `candidates` array for combination generation.

2. **Depth-First Search (DFS)**:
   - Implement a recursive DFS method to explore all possible combinations.
   - **Base Case**:
     - If the remaining sum `s` is `0`, add the current combination `t` to `ans`.
   - **Pruning**:
     - If the remaining sum `s` is less than the current candidate, return as it's not possible to form the target with the current candidate.
   - **Recursive Case**:
     - Iterate through the `candidates` starting from the current index `i`.
     - Add the current candidate to the combination `t`.
     - Recurse with the updated remaining sum (`s - candidates[j]`).
     - After exploring with the current candidate, backtrack by removing it from the combination `t`.

3. **Generate Combinations**:
   - Start the DFS from index `0` and explore all possible combinations by including or excluding each candidate.

4. **Return Result**:
   - Return the list `ans` containing all unique combinations of candidates that sum up to the target.

#### Java

```java
class Solution {
    private List<List<Integer>> ans = new ArrayList<>();
    private List<Integer> t = new ArrayList<>();
    private int[] candidates;

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        Arrays.sort(candidates);
        this.candidates = candidates;
        dfs(0, target);
        return ans;
    }

    private void dfs(int i, int s) {
        if (s == 0) {
            ans.add(new ArrayList(t));
            return;
        }
        if (s < candidates[i]) {
            return;
        }
        for (int j = i; j < candidates.length; j++) {
            t.add(candidates[j]);
            dfs(j, s - candidates[j]);
            t.remove(t.size() - 1);
        }
    }
}
```

# [52. N-Queens II](https://leetcode.com/problems/n-queens-ii)

## Description

<p>The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.</p>

<p>Given an integer <code>n</code>, return <em>the number of distinct solutions to the&nbsp;<strong>n-queens puzzle</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0052.N-Queens%20II/images/queens.jpg" style="width: 600px; height: 268px;" />
<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two distinct solutions to the 4-queens puzzle as shown.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 9</code></li>
</ul>

# Solutions

# Total N Queens

## Intuition
The `totalNQueens` method calculates the number of distinct solutions for the N-Queens problem, where you place N queens on an N x N chessboard such that no two queens threaten each other.

## Approach
### Steps

1. **Initialization**:
   - Define an integer `ans` to store the count of valid solutions.
   - Use boolean arrays `cols`, `dg`, and `udg` to keep track of column threats, diagonal threats, and anti-diagonal threats respectively.

2. **Depth-First Search (DFS)**:
   - Implement a recursive DFS method to explore possible placements of queens row by row.
   - **Base Case**:
     - If the current row index `i` equals `n`, it means all queens are placed correctly, so increment `ans`.
   - **Recursive Case**:
     - Iterate through each column `j` in the current row `i`.
     - Check if placing a queen in position `(i, j)` is valid by ensuring:
       - The column `j` is not already threatened by another queen (`cols[j]` is `false`).
       - The main diagonal `i + j` and the anti-diagonal `i - j + n` are not threatened (`dg[a]` and `udg[b]` are `false`).
     - Place a queen in the current position by setting the respective `cols`, `dg`, and `udg` arrays to `true`.
     - Recursively attempt to place queens in the next row (`dfs(i + 1)`).
     - After exploring, backtrack by removing the queen and resetting the respective arrays.

3. **Return Result**:
   - Return the count `ans` which represents the number of distinct valid solutions for the N-Queens problem.

#### Java

```java
class Solution {
    private int n;
    private int ans;
    private boolean[] cols = new boolean[10];
    private boolean[] dg = new boolean[20];
    private boolean[] udg = new boolean[20];

    public int totalNQueens(int n) {
        this.n = n;
        dfs(0);
        return ans;
    }

    private void dfs(int i) {
        if (i == n) {
            ++ans;
            return;
        }
        for (int j = 0; j < n; j++) {
            int a = i + j, b = i - j + n;
            if (cols[j] || dg[a] || udg[b]) {
                continue;
            }
            cols[j] = true;
            dg[a] = true;
            udg[b] = true;
            dfs(i + 1);
            cols[j] = false;
            dg[a] = false;
            udg[b] = false;
        }
    }
}
```

<br>
<br>
<br>

# [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses)

## Description

<p>Given <code>n</code> pairs of parentheses, write a function to <em>generate all combinations of well-formed parentheses</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> ["((()))","(()())","(())()","()(())","()()()"]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> ["()"]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 8</code></li>
</ul>

# Solutions

# Generate Parentheses

## Intuition
The `generateParenthesis` method generates all possible valid combinations of `n` pairs of parentheses. Each combination must be a valid sequence where every opening parenthesis has a corresponding closing parenthesis.

## Approach
### Steps

1. **Initialization**:
   - Define a `List<String>` named `ans` to store the valid combinations of parentheses.
   - Set the integer `n` to the input value representing the number of pairs of parentheses.

2. **Depth-First Search (DFS)**:
   - Implement a recursive `dfs` method to explore all possible combinations of parentheses.
   - **Parameters**:
     - `l`: Count of opening parentheses used so far.
     - `r`: Count of closing parentheses used so far.
     - `t`: The current string being built.
   - **Base Cases**:
     - If `l` or `r` exceeds `n`, or if `r` exceeds `l`, return as this is an invalid state.
     - If `l` and `r` both equal `n`, it means a valid combination is formed, so add `t` to `ans`.
   - **Recursive Case**:
     - Add an opening parenthesis `(` and recurse with updated counts (`l + 1` and `r`).
     - Add a closing parenthesis `)` and recurse with updated counts (`l` and `r + 1`).

3. **Return Result**:
   - Return the `ans` list containing all valid combinations of parentheses.


#### Java

```java
class Solution {
    private List<String> ans = new ArrayList<>();
    private int n;

    public List<String> generateParenthesis(int n) {
        this.n = n;
        dfs(0, 0, "");
        return ans;
    }

    private void dfs(int l, int r, String t) {
        if (l > n || r > n || l < r) {
            return;
        }
        if (l == n && r == n) {
            ans.add(t);
            return;
        }
        dfs(l + 1, r, t + "(");
        dfs(l, r + 1, t + ")");
    }
}
```

<br>
<br>
<br>

# [79. Word Search](https://leetcode.com/problems/word-search)

## Description

<p>Given an <code>m x n</code> grid of characters <code>board</code> and a string <code>word</code>, return <code>true</code> <em>if</em> <code>word</code> <em>exists in the grid</em>.</p>

<p>The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0079.Word%20Search/images/word2.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCCED&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0079.Word%20Search/images/word-1.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;SEE&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0079.Word%20Search/images/word3.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCB&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == board.length</code></li>
	<li><code>n = board[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 6</code></li>
	<li><code>1 &lt;= word.length &lt;= 15</code></li>
	<li><code>board</code> and <code>word</code> consists of only lowercase and uppercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you use search pruning to make your solution faster with a larger <code>board</code>?</p>

# Solutions

# Word Search

## Intuition
The `exist` method determines if a given word can be constructed from characters in a 2D board by moving vertically or horizontally (not diagonally). Each cell in the board can only be used once per word.

## Approach
### Steps

1. **Initialization**:
   - Define `m` and `n` as the dimensions of the board.
   - Store the target `word` and the `board` for use in the recursive search.

2. **Depth-First Search (DFS)**:
   - Implement a recursive `dfs` method to explore possible paths on the board.
   - **Parameters**:
     - `i`, `j`: Current cell coordinates.
     - `k`: Index of the character in the `word` being matched.
   - **Base Cases**:
     - If `k` is the last index of the `word`, check if the current cell contains the last character of the `word`.
     - If the current cell does not match the current character of `word`, return `false`.
   - **Recursive Case**:
     - Temporarily mark the current cell as visited by setting it to a special character (`'0'`).
     - Explore all four possible directions (up, down, left, right) from the current cell.
     - If any direction leads to a valid continuation of the word, return `true`.
     - Restore the original value of the cell after exploration.

3. **Start DFS Search**:
   - Iterate through each cell in the board, initiating the DFS search from each cell.
   - If DFS returns `true` from any starting cell, return `true`.
   - If no valid path is found after checking all cells, return `false`.

#### Java

```java
class Solution {
    private int m;
    private int n;
    private String word;
    private char[][] board;

    public boolean exist(char[][] board, String word) {
        m = board.length;
        n = board[0].length;
        this.word = word;
        this.board = board;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (dfs(i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean dfs(int i, int j, int k) {
        if (k == word.length() - 1) {
            return board[i][j] == word.charAt(k);
        }
        if (board[i][j] != word.charAt(k)) {
            return false;
        }
        char c = board[i][j];
        board[i][j] = '0';
        int[] dirs = {-1, 0, 1, 0, -1};
        for (int u = 0; u < 4; u++) {
            int x = i + dirs[u], y = j + dirs[u + 1];
            if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] != '0' && dfs(x, y, k + 1)) {
                return true;
            }
        }
        board[i][j] = c;
        return false;
    }
}
```