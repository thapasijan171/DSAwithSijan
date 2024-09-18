---
title: "Sliding Window"
description: "All solutions leetcode Top Interview 150 Sliding Window"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/TMB5itnLONeLjy9C-Butwal%2520Nuwakot%2520night%2520view.jpeg?w=750&h=750"
---

# [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum)

## Description

<!-- description:start -->

<p>Given an array of positive integers <code>nums</code> and a positive integer <code>target</code>, return <em>the <strong>minimal length</strong> of a </em><span data-keyword="subarray-nonempty"><em>subarray</em></span><em> whose sum is greater than or equal to</em> <code>target</code>. If there is no such subarray, return <code>0</code> instead.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> target = 7, nums = [2,3,1,2,4,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The subarray [4,3] has the minimal length under the problem constraint.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> target = 4, nums = [1,4,4]
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> target = 11, nums = [1,1,1,1,1,1,1,1]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution of which the time complexity is <code>O(n log(n))</code>.

## Solutions

### Solution 1: Prefix Sum + Binary Search

First, we preprocess the prefix sum array `s` of the array `nums`, where `s[i]` represents the sum of the first `i` elements of the array `nums`. Since all elements in the array `nums` are positive integers, the array `s` is also monotonically increasing. Also, we initialize the answer `ans = n + 1`, where `n` is the length of the array `nums`.

Next, we traverse the prefix sum array `s`. For each element `s[i]`, we can find the smallest index `j` that satisfies `s[j] \geq s[i] + target` by binary search. If `j \leq n`, it means that there exists a subarray that satisfies the condition, and we can update the answer, i.e., `ans = min(ans, j - i)`.

#### Java

```java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int n = nums.length;
        long[] s = new long[n + 1];
        for (int i = 0; i < n; i++) {
            s[i + 1] = s[i] + nums[i];
        }
        int ans = n + 1;
        for (int i = 0; i <= n; i++) {
            int j = search(s, s[i] + target);
            if (j <= n) {
                ans = Math.min(ans, j - i);
            }
        }
        return ans <= n ? ans : 0;
    }

    private int search(long[] nums, long x) {
        int l = 0, r = nums.length;
        while (l < r) {
            int mid = (l + r) >> 1;
            if (nums[mid] >= x) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    }
}
```

### Solution 2: Two Pointers

We can use two pointers `j` and `i` to maintain a window, where the sum of all elements in the window is less than `target`. Initially, `j = 0`, and the answer `ans = n + 1`, where `n` is the length of the array `nums`.

Next, the pointer `i` starts to move to the right from `0`, moving one step each time. We add the element corresponding to the pointer `i` to the window and update the sum of the elements in the window. If the sum of the elements in the window is greater than or equal to `target`, it means that the current subarray satisfies the condition, and we can update the answer, i.e., `ans = \min(ans, i - j + 1)`. Then we continuously remove the element `nums[j]` from the window until the sum of the elements in the window is less than `target`, and then repeat the above process.

Finally, if `ans \leq n`, it means that there exists a subarray that satisfies the condition, return `ans`, otherwise return `0`.

The time complexity is `O(n)`, and the space complexity is `O(1)`. Here, `n` is the length of the array `nums`.

#### Java

```java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int l = 0, n = nums.length;
        long s = 0;
        int ans = n + 1;
        for (int r = 0; r < n; r++) {
            s += nums[r];
            while (s >= target) {
                ans = Math.min(ans, r - l + 1);
                s -= nums[l++];
            }
        }
        return ans > n ? 0 : ans;
    }
}
```

<br>
<br>
<br>

# [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)


## Description

<p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <span data-keyword="substring-nonempty"><strong>substring</strong></span> without repeating characters.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcabcbb&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;abc&quot;, with the length of 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;bbbbb&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is &quot;b&quot;, with the length of 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;pwwkew&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;wke&quot;, with the length of 3.
Notice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
</ul>

## Solutions

### Solution 1: Two pointers + Hash Table

Define a hash table to record the characters in the current window. Let `i` and `j` represent the start and end positions of the non-repeating substring, respectively. The length of the longest non-repeating substring is recorded by `ans`.

For each character `s[j]` in the string `s`, we call it `c`. If `c` exists in the window `s[i..j-1]`, we move `i` to the right until `s[i..j-1]` does not contain `c`. Then we add `c` to the hash table. At this time, the window `s[i..j]` does not contain repeated elements, and we update the maximum value of `ans`.

Finally, return `ans`.

The time complexity is `O(n)`, where `n` represents the length of the string `s`.

Two pointers algorithm template:

```java
for (int i = 0, j = 0; i < n; i++) {
    while (j < i && check(j, i)) {
        ++j;
    }
    // logic of specific problem
}
```

#### Java

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        boolean[] ss = new boolean[128];
        int ans = 0;
        for (int i = 0, j = 0; j < s.length(); j++) {
            char c = s.charAt(j);
            while (ss[c]) {
                ss[s.charAt(i++)] = false;
            }
            ss[c] = true;
            ans = Math.max(ans, j - i + 1);
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [30. Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words)

## Description

<!-- description:start -->

<p>You are given a string <code>s</code> and an array of strings <code>words</code>. All the strings of <code>words</code> are of <strong>the same length</strong>.</p>

<p>A <strong>concatenated string</strong> is a string that exactly contains all the strings of any permutation of <code>words</code> concatenated.</p>

<ul>
	<li>For example, if <code>words = [&quot;ab&quot;,&quot;cd&quot;,&quot;ef&quot;]</code>, then <code>&quot;abcdef&quot;</code>, <code>&quot;abefcd&quot;</code>, <code>&quot;cdabef&quot;</code>, <code>&quot;cdefab&quot;</code>, <code>&quot;efabcd&quot;</code>, and <code>&quot;efcdab&quot;</code> are all concatenated strings. <code>&quot;acdbef&quot;</code> is not a concatenated string because it is not the concatenation of any permutation of <code>words</code>.</li>
</ul>

<p>Return an array of <em>the starting indices</em> of all the concatenated substrings in <code>s</code>. You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;barfoothefoobarman&quot;, words = [&quot;foo&quot;,&quot;bar&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">[0,9]</span></p>

<p><strong>Explanation:</strong></p>

<p>The substring starting at 0 is <code>&quot;barfoo&quot;</code>. It is the concatenation of <code>[&quot;bar&quot;,&quot;foo&quot;]</code> which is a permutation of <code>words</code>.<br />
The substring starting at 9 is <code>&quot;foobar&quot;</code>. It is the concatenation of <code>[&quot;foo&quot;,&quot;bar&quot;]</code> which is a permutation of <code>words</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;wordgoodgoodgoodbestword&quot;, words = [&quot;word&quot;,&quot;good&quot;,&quot;best&quot;,&quot;word&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">[]</span></p>

<p><strong>Explanation:</strong></p>

<p>There is no concatenated substring.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;barfoofoobarthefoobarman&quot;, words = [&quot;bar&quot;,&quot;foo&quot;,&quot;the&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">[6,9,12]</span></p>

<p><strong>Explanation:</strong></p>

<p>The substring starting at 6 is <code>&quot;foobarthe&quot;</code>. It is the concatenation of <code>[&quot;foo&quot;,&quot;bar&quot;,&quot;the&quot;]</code>.<br />
The substring starting at 9 is <code>&quot;barthefoo&quot;</code>. It is the concatenation of <code>[&quot;bar&quot;,&quot;the&quot;,&quot;foo&quot;]</code>.<br />
The substring starting at 12 is <code>&quot;thefoobar&quot;</code>. It is the concatenation of <code>[&quot;the&quot;,&quot;foo&quot;,&quot;bar&quot;]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words.length &lt;= 5000</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 30</code></li>
	<li><code>s</code> and <code>words[i]</code> consist of lowercase English letters.</li>
</ul>

## Solutions

### Solution 1: Hash Table + Sliding Window

We use a hash table `cnt` to count the number of times each word appears in `words`, and use a hash table `cnt1` to count the number of times each word appears in the current sliding window. We denote the length of the string `s` as `m`, the number of words in the string array `words` as `n`, and the length of each word as `k`.

We can enumerate the starting point `i` of the sliding window, where `0 \lt i < k`. For each starting point, we maintain a sliding window with the left boundary as `l`, the right boundary as `r`, and the number of words in the sliding window as `t`. Additionally, we use a hash table `cnt1` to count the number of times each word appears in the sliding window.

Each time, we extract the string `s[r:r+k]`. If `s[r:r+k]` is not in the hash table `cnt`, it means that the words in the current sliding window are not valid. We update the left boundary `l` to `r`, clear the hash table `cnt1`, and reset the word count `t` to 0. If `s[r:r+k]` is in the hash table `cnt`, it means that the words in the current sliding window are valid. We increase the word count `t` by 1, and increase the count of `s[r:r+k]` in the hash table `cnt1` by 1. If `cnt1[s[r:r+k]]` is greater than `cnt[s[r:r+k]]`, it means that `s[r:r+k]` appears too many times in the current sliding window. We need to move the left boundary `l` to the right until `cnt1[s[r:r+k]] = cnt[s[r:r+k]]`. If `t = n`, it means that the words in the current sliding window are exactly valid, and we add the left boundary `l` to the answer array.

#### Java

```java
class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        Map<String, Integer> cnt = new HashMap<>();
        for (String w : words) {
            cnt.merge(w, 1, Integer::sum);
        }
        int m = s.length(), n = words.length;
        int k = words[0].length();
        List<Integer> ans = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            Map<String, Integer> cnt1 = new HashMap<>();
            int l = i, r = i;
            int t = 0;
            while (r + k <= m) {
                String w = s.substring(r, r + k);
                r += k;
                if (!cnt.containsKey(w)) {
                    cnt1.clear();
                    l = r;
                    t = 0;
                    continue;
                }
                cnt1.merge(w, 1, Integer::sum);
                ++t;
                while (cnt1.get(w) > cnt.get(w)) {
                    String remove = s.substring(l, l + k);
                    l += k;
                    cnt1.merge(remove, -1, Integer::sum);
                    --t;
                }
                if (t == n) {
                    ans.add(l);
                }
            }
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring)

## Description

<!-- description:start -->

<p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window</strong></em> <span data-keyword="substring-nonempty"><strong><em>substring</em></strong></span><em> of </em><code>s</code><em> such that every character in </em><code>t</code><em> (<strong>including duplicates</strong>) is included in the window</em>. If there is no such substring, return <em>the empty string </em><code>&quot;&quot;</code>.</p>

<p>The testcases will be generated such that the answer is <strong>unique</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ADOBECODEBANC&quot;, t = &quot;ABC&quot;
<strong>Output:</strong> &quot;BANC&quot;
<strong>Explanation:</strong> The minimum window substring &quot;BANC&quot; includes &#39;A&#39;, &#39;B&#39;, and &#39;C&#39; from string t.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a&quot;, t = &quot;a&quot;
<strong>Output:</strong> &quot;a&quot;
<strong>Explanation:</strong> The entire string s is the minimum window.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a&quot;, t = &quot;aa&quot;
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> Both &#39;a&#39;s from t must be included in the window.
Since the largest window of s only has one &#39;a&#39;, return empty string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == s.length</code></li>
	<li><code>n == t.length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you find an algorithm that runs in <code>O(m + n)</code> time?</p>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Counting + Two Pointers

We use a hash table or array `need` to count the number of occurrences of each character in string `t`, and another hash table or array `window` to count the number of occurrences of each character in the sliding window. In addition, we define two pointers `j` and `i` to point to the left and right boundaries of the window, respectively. The variable `cnt` represents how many characters in `t` are already included in the window. The variables `k` and `mi` represent the starting position and length of the minimum covering substring, respectively.

We traverse the string `s` from left to right. For the currently traversed character `s[i]`:

We add it to the window, i.e., `window[s[i]] = window[s[i]] + 1`. If `need[s[i]] \geq window[s[i]]` at this time, it means that `s[i]` is a "necessary character", so we increment `cnt` by one. If `cnt` equals the length of `t`, it means that all characters in `t` are already included in the window at this time, so we can try to update the starting position and length of the minimum covering substring. If `i - j + 1 \lt mi`, it means that the substring represented by the current window is shorter, so we update `mi = i - j + 1` and `k = j`. Then, we try to move the left boundary `j`. If `need[s[j]] \geq window[s[j]]` at this time, it means that `s[j]` is a "necessary character". When moving the left boundary, the character `s[j]` will be removed from the window, so we need to decrement `cnt` by one, then update `window[s[j]] = window[s[j]] - 1`, and move `j` one step to the right. If `cnt` does not equal the length of `t`, it means that all characters in `t` are not yet included in the window at this time, so we don't need to move the left boundary, just move `i` one step to the right and continue to traverse.

After the traversal, if the minimum covering substring is not found, return an empty string, otherwise return `s[k:k+mi]`.

The time complexity is `O(m + n)`, and the space complexity is `O(C)`. Here, `m` and `n` are the lengths of strings `s` and `t` respectively; and `C` is the size of the character set, in this problem `C = 128`.

#### Java

```java
class Solution {
    public String minWindow(String s, String t) {
        int[] need = new int[128];
        int[] window = new int[128];
        int m = s.length(), n = t.length();
        for (int i = 0; i < n; i++) {
            ++need[t.charAt(i)];
        }
        int cnt = 0, j = 0, k = -1, mi = 1 << 30;
        for (int i = 0; i < m; i++) {
            ++window[s.charAt(i)];
            if (need[s.charAt(i)] >= window[s.charAt(i)]) {
                ++cnt;
            }
            while (cnt == n) {
                if (i - j + 1 < mi) {
                    mi = i - j + 1;
                    k = j;
                }
                if (need[s.charAt(j)] >= window[s.charAt(j)]) {
                    --cnt;
                }
                --window[s.charAt(j++)];
            }
        }
        return k < 0 ? "" : s.substring(k, k + mi);
    }
}
```
