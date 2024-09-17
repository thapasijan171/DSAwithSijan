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

## Solutions

### Solution 1: Traversal

First, we use an array or hash table to store the letters corresponding to each digit. Then we traverse each digit, combine its corresponding letters with the previous results to get the new results.

The time complexity is `O(4^n)`, and the space complexity is `O(4^n)`. Here, `n` is the length of the input digits.

#### Java

```java
class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> ans = new ArrayList<>();
        if (digits.length() == 0) {
            return ans;
        }
        ans.add("");
        String[] d = new String[] {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        for (char i : digits.toCharArray()) {
            String s = d[i - '2'];
            List<String> t = new ArrayList<>();
            for (String a : ans) {
                for (String b : s.split("")) {
                    t.add(a + b);
                }
            }
            ans = t;
        }
        return ans;
    }
}
```

### Solution 2: DFS

We can use the method of depth-first search to enumerate all possible letter combinations. Suppose that a part of the letter combination has been generated, but some digits have not been exhausted. At this time, we take out the letters corresponding to the next digit, and then enumerate each letter corresponding to this digit one by one, add them to the letter combination that has been generated before, to form all possible combinations.

The time complexity is `O(4^n)`, and the space complexity is `O(n)`. Here, `n` is the length of the input digits.

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

## Solutions

### Solution 1: Backtracking (Two Ways)

We design a function `dfs(i)`, which represents starting the search from number `i`, with the current search path as `t`, and the answer as `ans`.

The execution logic of the function `dfs(i)` is as follows:

-   If the length of the current search path `t` equals `k`, then add the current search path to the answer and return.
-   If `i \gt n`, it means the search has ended, return.
-   Otherwise, we can choose to add the number `i` to the search path `t`, and then continue the search, i.e., execute `dfs(i + 1)`, and then remove the number `i` from the search path `t`; or we do not add the number `i` to the search path `t`, and directly execute `dfs(i + 1)`.

The above method is actually enumerating whether to select the current number or not, and then recursively searching the next number. We can also enumerate the next number `j` to be selected, where `i \leq j \leq n`. If the next number to be selected is `j`, then we add the number `j` to the search path `t`, and then continue the search, i.e., execute `dfs(j + 1)`, and then remove the number `j` from the search path `t`.

In the main function, we start the search from number `1`, i.e., execute `dfs(1)`.

The time complexity is `(C_n^k \times k)`, and the space complexity is `O(k)`. Here, `C_n^k` represents the combination number.

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

### Solution 2

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
        for (int j = i; j <= n; j++) {
            t.add(j);
            dfs(j + 1);
            t.remove(t.size() - 1);
        }
    }
}
```

<br>
<br>
<br>

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

## Solutions

### Solution 1: DFS (Backtracking)

We design a function `dfs(i)` to represent that the first `i` positions have been filled, and now we need to fill the `i+1` position. We enumerate all possible numbers, if this number has not been filled, we fill in this number, and then continue to fill the next position, until all positions are filled.

The time complexity is `O(n \times n!)`, where `n` is the length of the array. There are `n!` permutations in total, and each permutation takes `O(n)` time to construct.

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

## Solutions

### Solution 1: Sorting + Pruning + Backtracking

We can first sort the array to facilitate pruning.

Next, we design a function `dfs(i, s)`, which means starting the search from index `i` with a remaining target value of `s`. Here, `i` and `s` are both non-negative integers, the current search path is `t`, and the answer is `ans`.

In the function `dfs(i, s)`, we first check whether `s` is `0`. If it is, we add the current search path `t` to the answer `ans`, and then return. If `s \lt candidates[i]`, it means that the elements of the current index and the following indices are all greater than the remaining target value `s`, and the path is invalid, so we return directly. Otherwise, we start the search from index `i`, and the search index range is `j \in [i, n)`, where `n` is the length of the array `candidates`. During the search, we add the element of the current index to the search path `t`, recursively call the function `dfs(j, s - candidates[j])`, and after the recursion ends, we remove the element of the current index from the search path `t`.

In the main function, we just need to call the function `dfs(0, target)` to get the answer.

The time complexity is `O(2^n \times n)`, and the space complexity is `O(n)`. Here, `n` is the length of the array `candidates`. Due to pruning, the actual time complexity is much less than `O(2^n \times n)`.


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

### Solution 2: Sorting + Pruning + Backtracking(Another Form)

We can also change the implementation logic of the function `dfs(i, s)` to another form. In the function `dfs(i, s)`, we first check whether `s` is `0`. If it is, we add the current search path `t` to the answer `ans`, and then return. If `i \geq n` or `s \lt candidates[i]`, the path is invalid, so we return directly. Otherwise, we consider two situations, one is not selecting the element of the current index, that is, recursively calling the function `dfs(i + 1, s)`, and the other is selecting the element of the current index, that is, recursively calling the function `dfs(i, s - candidates[i])`.

The time complexity is `O(2^n \times n)`, and the space complexity is `O(n)`. Here, `n` is the length of the array `candidates`. Due to pruning, the actual time complexity is much less than `O(2^n \times n)`.

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
        if (i >= candidates.length || s < candidates[i]) {
            return;
        }
        dfs(i + 1, s);
        t.add(candidates[i]);
        dfs(i, s - candidates[i]);
        t.remove(t.size() - 1);
    }
}
```

<br>
<br>
<br>

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

## Solutions

### Solution 1: Backtracking

We design a function `dfs(i)`, which represents starting the search from the `i`th row, and the results of the search are added to the answer.

In the `i`th row, we enumerate each column of the `i`th row. If the current column does not conflict with the queens placed before, then we can place a queen, and then continue to search the next row, that is, call `dfs(i + 1)`.

If a conflict occurs, then we skip the current column and continue to enumerate the next column.

To determine whether a conflict occurs, we need to use three arrays to record whether a queen has been placed in each column, each positive diagonal, and each negative diagonal, respectively.

Specifically, we use the `cols` array to record whether a queen has been placed in each column, the `dg` array to record whether a queen has been placed in each positive diagonal, and the `udg` array to record whether a queen has been placed in each negative diagonal.

The time complexity is `O(n!)`, and the space complexity is `O(n)`. Here, `n` is the number of queens.

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

## Solutions

### Solution 1: DFS + Pruning

The range of `n` in the problem is `[1, 8]`, so we can directly solve this problem through "brute force search + pruning".

We design a function `dfs(l, r, t)`, where `l` and `r` represent the number of left and right brackets respectively, and `t` represents the current bracket sequence. Then we can get the following recursive structure:

-   If `l \gt n` or `r \gt n` or `l \lt r`, then the current bracket combination `t` is invalid, return directly;
-   If `l = n` and `r = n`, then the current bracket combination `t` is valid, add it to the answer array `ans`, and return directly;
-   We can choose to add a left bracket, and recursively execute `dfs(l + 1, r, t + "(")`;
-   We can also choose to add a right bracket, and recursively execute `dfs(l, r + 1, t + ")")`.

The time complexity is `O(2^{n\times 2} \times n)`, and the space complexity is `O(n)`.

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

## Solutions

### Solution 1: DFS (Backtracking)

We can enumerate each position `(i, j)` in the grid as the starting point of the search, and then start a depth-first search from the starting point. If we can search to the end of the word, it means the word exists, otherwise, it means the word does not exist.

Therefore, we design a function `dfs(i, j, k)`, which represents whether we can successfully search from the `(i, j)` position of the grid, starting from the `k`th character of the word. The execution steps of the function `dfs(i, j, k)` are as follows:

-   If `k = |word|-1`, it means that we have searched to the last character of the word. At this time, we only need to judge whether the character at the `(i, j)` position of the grid is equal to `word[k]`. If they are equal, it means the word exists, otherwise, it means the word does not exist. Whether the word exists or not, there is no need to continue to search, so return the result directly.
-   Otherwise, if the `word[k]` character is not equal to the character at the `(i, j)` position of the grid, it means that the search failed this time, so return `false` directly.
-   Otherwise, we temporarily store the character at the `(i, j)` position of the grid in `c`, and then modify the character at this position to a special character `'0'`, indicating that the character at this position has been used to prevent it from being reused in subsequent searches. Then we start from the up, down, left, and right directions of the `(i, j)` position to search for the `k+1`th character in the grid. If any direction is successful, it means the search is successful, otherwise, it means the search failed. At this time, we need to restore the character at the `(i, j)` position of the grid, that is, put `c` back to the `(i, j)` position (backtracking).

In the main function, we enumerate each position `(i, j)` in the grid as the starting point. If calling `dfs(i, j, 0)` returns `true`, it means the word exists, otherwise, it means the word does not exist, so return `false`.

The time complexity is `O(m \times n \times 3^k)`, and the space complexity is `O(\min(m \times n, k))`. Here, `m` and `n` are the number of rows and columns of the grid, respectively; and `k` is the length of the string `word`.


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