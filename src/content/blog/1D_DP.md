---
title: "1D DP"
description: "All solutions leetcode Top Interview 150 1DP Solutions"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/osALvl1WL2oTor9b-Explore%2520Nepal%2520_%2520Bhakunde%2520Daha%252C%2520Baglung%2520Pic_%2520KC%2520Bimo.jpeg?w=750&h=750"
---

# [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs)

## Description

<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>

<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 45</code></li>
</ul>


# Solutions

# Matrix Exponentiation to Solve Climbing Stairs Problem

# Intuition
This problem is a variation of the Fibonacci sequence, where each step is a combination of the previous two steps. Instead of using recursion or dynamic programming, we can optimize the solution by using matrix exponentiation.

# Approach
1. **Matrix Representation:**  
   We represent the Fibonacci relation using matrix multiplication. The matrix `[[1, 1], [1, 0]]` can be used to represent the transition between states in the Fibonacci sequence.
   
2. **Matrix Exponentiation:**  
   To efficiently calculate the Fibonacci number, we raise the transition matrix to the power of `n-1`. This allows us to compute the result in logarithmic time using a divide-and-conquer approach.

3. **Matrix Multiplication:**  
   The matrix multiplication is implemented to multiply two 2x2 matrices, which is a key part of the exponentiation process.

# Complexity

- Time complexity:  
  Since the matrix exponentiation is performed in logarithmic steps, the time complexity is $$O(\log n)$$.

- Space complexity:  
  The space complexity is $$O(1)$$ because we only use a few extra variables to store intermediate matrices.


#### Java

```java
class Solution {
    private final int[][] a = {{1, 1}, {1, 0}};

    public int climbStairs(int n) {
        return pow(a, n - 1)[0][0];
    }

    private int[][] mul(int[][] a, int[][] b) {
        int m = a.length, n = b[0].length;
        int[][] c = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < a[0].length; k++) {
                    c[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return c;
    }

    private int[][] pow(int[][] a, int n) {
        int[][] res = {{1, 1}, {0, 0}};
        while (n > 0) {
            if ((n & 1) == 1) {
                res = mul(res, a);
            }
            n >>= 1;
            a = mul(a, a);
        }
        return res;
    }
}
```

<br>
<br>
<br>

# [198. House Robber](https://leetcode.com/problems/house-robber)

## Description

<p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <b>it will automatically contact the police if two adjacent houses were broken into on the same night</b>.</p>

<p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <b>without alerting the police</b></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,9,3,1]
<strong>Output:</strong> 12
<strong>Explanation:</strong> Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 400</code></li>
</ul>


# Solutions

# House Robber Problem Using Dynamic Programming

# Intuition
The problem is essentially about choosing non-adjacent elements from an array such that the sum of the chosen elements is maximized. We can think of this as a dynamic programming problem where, at each house, we decide whether to rob it or skip it.

# Approach
1. **State Representation:**  
   We maintain two variables `f` and `g`:
   - `f` represents the maximum profit if we skip the current house.
   - `g` represents the maximum profit if we rob the current house.

2. **Transition:**  
   For each house:
   - We calculate the new maximum profit by either skipping the house (`f = Math.max(f, g)`) or robbing the house (`g = f + x`), where `x` is the amount of money in the current house.

3. **Result:**  
   The final result is the maximum of `f` and `g`, which gives the maximum possible amount we can rob.

# Complexity

- Time complexity:  
  Since we only traverse the array once, the time complexity is $$O(n)$$ where `n` is the length of the array.

- Space complexity:  
  We use constant extra space, so the space complexity is $$O(1)$$.


#### Java

```java
class Solution {
    public int rob(int[] nums) {
        int f = 0, g = 0;
        for (int x : nums) {
            int ff = Math.max(f, g);
            g = f + x;
            f = ff;
        }
        return Math.max(f, g);
    }
}
```

<br>
<br>
<br>

# [139. Word Break](https://leetcode.com/problems/word-break)

## Description

<p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return <code>true</code> if <code>s</code> can be segmented into a space-separated sequence of one or more dictionary words.</p>

<p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;leetcode&quot;, wordDict = [&quot;leet&quot;,&quot;code&quot;]
<strong>Output:</strong> true
<strong>Explanation:</strong> Return true because &quot;leetcode&quot; can be segmented as &quot;leet code&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;applepenapple&quot;, wordDict = [&quot;apple&quot;,&quot;pen&quot;]
<strong>Output:</strong> true
<strong>Explanation:</strong> Return true because &quot;applepenapple&quot; can be segmented as &quot;apple pen apple&quot;.
Note that you are allowed to reuse a dictionary word.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;,&quot;dog&quot;,&quot;sand&quot;,&quot;and&quot;,&quot;cat&quot;]
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 300</code></li>
	<li><code>1 &lt;= wordDict.length &lt;= 1000</code></li>
	<li><code>1 &lt;= wordDict[i].length &lt;= 20</code></li>
	<li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.</li>
	<li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</li>
</ul>

# Solutions

# Word Break Problem Using Trie and Dynamic Programming

# Intuition
The problem requires checking if a given string can be segmented into space-separated words from a given dictionary. A trie structure is well-suited to efficiently store and search words from the dictionary, while dynamic programming (DP) can help track valid segmentations of the string.

# Approach
1. **Trie Structure:**
   - We first insert all the words from the dictionary into a trie for fast word lookup.

2. **Dynamic Programming Table:**
   - We maintain a boolean array `f` where `f[i]` represents whether the substring from index `i` to the end of the string can be segmented into words in the dictionary.

3. **Filling the DP Table:**
   - We iterate backward over the string and use the trie to check every possible word starting from the current index.
   - If a valid word is found and the substring starting after that word can also be segmented (i.e., `f[j + 1]` is true), then we set `f[i] = true`.

4. **Result:**
   - The result is stored in `f[0]`, which tells whether the entire string can be segmented into dictionary words.

# Complexity

- Time complexity:  
  Inserting words into the trie takes $$O(L \times k)$$ where `L` is the total length of all words and `k` is the number of words. For each index in the string, we are traversing part of the trie, making the total time complexity $$O(n \times m)$$ where `n` is the length of the string and `m` is the length of the longest word in the dictionary.

- Space complexity:  
  The space complexity is $$O(L)$$ for the trie and $$O(n)$$ for the DP array.


#### Java

```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Trie trie = new Trie();
        for (String w : wordDict) {
            trie.insert(w);
        }
        int n = s.length();
        boolean[] f = new boolean[n + 1];
        f[n] = true;
        for (int i = n - 1; i >= 0; i--) {
            Trie node = trie;
            for (int j = i; j < n; j++) {
                int k = s.charAt(j) - 'a';
                if (node.children[k] == null) {
                    break;
                }
                node = node.children[k];
                if (node.isEnd && f[j + 1]) {
                    f[i] = true;
                    break;
                }
            }
        }
        return f[0];
    }
}

class Trie {
    Trie[] children = new Trie[26];
    boolean isEnd = false;

    public void insert(String w) {
        Trie node = this;
        for (int i = 0; i < w.length(); i++) {
            int j = w.charAt(i) - 'a';
            if (node.children[j] == null) {
                node.children[j] = new Trie();
            }
            node = node.children[j];
        }
        node.isEnd = true;
    }
}
```

<br>
<br>
<br>

# [322. Coin Change](https://leetcode.com/problems/coin-change)

## Description

<p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p>

<p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p>

<p>You may assume that you have an infinite number of each kind of coin.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> coins = [1,2,5], amount = 11
<strong>Output:</strong> 3
<strong>Explanation:</strong> 11 = 5 + 5 + 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> coins = [2], amount = 3
<strong>Output:</strong> -1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> coins = [1], amount = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= coins.length &lt;= 12</code></li>
	<li><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></li>
</ul>


# Solutions

# Coin Change Problem Using Dynamic Programming

# Intuition
The problem asks to find the minimum number of coins required to make a given amount using the provided denominations. This can be effectively solved using dynamic programming where we iteratively build up the solution for each possible amount.

# Approach
1. **Define a DP Table:**
   - We define a 2D array `f` where `f[i][j]` represents the minimum number of coins required to make an amount `j` using the first `i` types of coins.
   - Initialize the table with a large value (infinity), representing an invalid solution.

2. **Base Case:**
   - `f[0][0] = 0`: No coins are needed to make the amount `0`.

3. **Filling the DP Table:**
   - For each coin type, we iterate over all possible amounts.
   - For each amount, we either:
     - Exclude the current coin type (take the previous row's value).
     - Include the current coin type, and see if including it results in a smaller number of coins.

4. **Result:**
   - The answer is stored in `f[m][n]`, where `m` is the number of coin types and `n` is the target amount. If it's still the infinity value, it means it's impossible to form the amount with the given coins.

# Complexity

- Time complexity:  
  The time complexity is $$O(m \times n)$$, where `m` is the number of coins and `n` is the target amount. This is because we process each coin for each amount.

- Space complexity:  
  The space complexity is $$O(m \times n)$$ because we store the DP table of size `m` by `n`.



#### Java

```java
class Solution {
    public int coinChange(int[] coins, int amount) {
        final int inf = 1 << 30;
        int m = coins.length;
        int n = amount;
        int[][] f = new int[m + 1][n + 1];
        for (var g : f) {
            Arrays.fill(g, inf);
        }
        f[0][0] = 0;
        for (int i = 1; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                f[i][j] = f[i - 1][j];
                if (j >= coins[i - 1]) {
                    f[i][j] = Math.min(f[i][j], f[i][j - coins[i - 1]] + 1);
                }
            }
        }
        return f[m][n] >= inf ? -1 : f[m][n];
    }
}
```

<br>
<br>
<br>

# [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence)

## Description

<!-- description:start -->

<p>Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing </strong></em><span data-keyword="subsequence-array"><em><strong>subsequence</strong></em></span>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,9,2,5,3,7,101,18]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,0,3,2,3]
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [7,7,7,7,7,7,7]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2500</code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><b>Follow up:</b>&nbsp;Can you come up with an algorithm that runs in&nbsp;<code>O(n log(n))</code> time complexity?</p>

# Solutions

# Longest Increasing Subsequence Using Binary Indexed Tree (BIT)

# Intuition
To find the length of the Longest Increasing Subsequence (LIS), we can utilize a sorted version of the input array to compress the values into a smaller range. This allows us to apply efficient range queries and updates using a Binary Indexed Tree (BIT). The key idea is that for each element in the input, we compute the LIS ending at that element by querying the maximum LIS length of all smaller elements.

# Approach
1. **Sorting and Compression:**
   - First, sort the input array and remove duplicates to map the values to a smaller range for efficient use of the BIT.

2. **Binary Indexed Tree (BIT):**
   - We use a BIT to keep track of the maximum LIS length ending at each position.
   - For each element in the original array, we find the corresponding index in the compressed array and use the BIT to find the maximum LIS length for elements smaller than the current one. 
   - We then update the BIT with the new LIS length for the current element.

3. **Binary Search:**
   - To map the values from the original array to the compressed array, we perform binary search on the sorted array.

4. **Result:**
   - The result is stored in the BIT, where we query the maximum value representing the longest subsequence found.

# Complexity

- Time complexity:  
  The time complexity is O(n \log n) due to sorting the input array and performing range queries and updates in the BIT for each element.

- Space complexity:  
  The space complexity is O(n), as we store the compressed values and the BIT.



#### Java

```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        int[] s = nums.clone();
        Arrays.sort(s);
        int m = 0;
        int n = s.length;
        for (int i = 0; i < n; i++) {
            if (i == 0 || s[i] != s[i - 1]) {
                s[m++] = s[i];
            }
        }
        BinaryIndexedTree tree = new BinaryIndexedTree(m);
        for (int x : nums) {
            x = search(s, x, m);
            int t = tree.query(x - 1) + 1;
            tree.update(x, t);
        }
        return tree.query(m);
    }

    private int search(int[] nums, int x, int r) {
        int l = 0;
        while (l < r) {
            int mid = (l + r) >> 1;
            if (nums[mid] >= x) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l + 1;
    }
}

class BinaryIndexedTree {
    private int n;
    private int[] c;

    public BinaryIndexedTree(int n) {
        this.n = n;
        c = new int[n + 1];
    }

    public void update(int x, int v) {
        while (x <= n) {
            c[x] = Math.max(c[x], v);
            x += x & -x;
        }
    }

    public int query(int x) {
        int mx = 0;
        while (x > 0) {
            mx = Math.max(mx, c[x]);
            x -= x & -x;
        }
        return mx;
    }
}
```
