---
title: "Top Interview 150"
description: "All solutions leetcode Top Interview 150"
pubDate: "Mar 06 2024"
heroImage: "../img/post.jpeg"

---
![Top Interview 150](https://raw.githubusercontent.com/thapasijan171/assets/main/download.png)

<!-- makrdown form here -->

# [1. Two Sum](https://leetcode.com/problems/two-sum)

## Description

<!-- description:start -->

<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>
<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
 <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
 <li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
 <li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Hash Table

We can use a hash table $\textit{d}$ to store each element and its corresponding index.

Traverse the array `nums`, for the current element `nums[i]`, we first check if `target - nums}[i]` is in the hash table `d`. If it is in `d`, it means the `target` value has been found, and we return the indices of `target - nums[i]` and `i`.

Time complexity is `O(n)`, and space complexity is `O(n)`, where `n` is the length of the array `nums}`.

<!-- tabs:start -->

#### Java

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> d = new HashMap<>();
        for (int i = 0;; i++) {
            int x = nums[i];
            int y = target - x;
            if (d.containsKey(y)) {
                return new int[] {d.get(y), i};
            }
            d.put(x, i);
        }
    }
}
```

<br>
<br>

# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers)

## Description

<!-- description:start -->

<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;" />
<pre>
<strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>
 <li><code>0 &lt;= Node.val &lt;= 9</code></li>
 <li>It is guaranteed that the list represents a number that does not have leading zeros.</li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Simulation

We traverse two linked lists $l_1$ and $l_2$ at the same time, and use the variable $carry$ to indicate whether there is a carry.

Each time we traverse, we take out the current bit of the corresponding linked list, calculate the sum with the carry $carry$, and then update the value of the carry. Then we add the current bit to the answer linked list. If both linked lists are traversed, and the carry is $0$, the traversal ends.

Finally, we return the head node of the answer linked list.

The time complexity is `O(\max (m, n))`, where `m` and `n` are the lengths of the two linked lists. We need to traverse the entire position of the two linked lists, and each position only needs `O(1)` time. Ignoring the space consumption of the answer, the space complexity is `O(1)`.

<!-- tabs:start -->

#### Java

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        int carry = 0;
        ListNode cur = dummy;
        while (l1 != null || l2 != null || carry != 0) {
            int s = (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val) + carry;
            carry = s / 10;
            cur.next = new ListNode(s % 10);
            cur = cur.next;
            l1 = l1 == null ? null : l1.next;
            l2 = l2 == null ? null : l2.next;
        }
        return dummy.next;
    }
}
```

<br>
<br>

# [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)

## Description

<!-- description:start -->

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

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution 1: Two pointers + Hash Table

Define a hash table to record the characters in the current window. Let $i$ and $j$ represent the start and end positions of the non-repeating substring, respectively. The length of the longest non-repeating substring is recorded by `ans`.

For each character $s[j]$ in the string `s`, we call it $c$. If $c$ exists in the window $s[i..j-1]$, we move $i$ to the right until $s[i..j-1]$ does not contain `c`. Then we add `c` to the hash table. At this time, the window $s[i..j]$ does not contain repeated elements, and we update the maximum value of `ans`.

Finally, return `ans`.

The time complexity is `O(n)`, where $n$ represents the length of the string `s`.

Two pointers algorithm template:

```java
for (int i = 0, j = 0; i < n; i++) {
    while (j < i && check(j, i)) {
        ++j;
    }
    // logic of specific problem
}
```

<!-- tabs:start -->

#### Java

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        boolean[] ss = new boolean[128];
        int ans = 0;
        for (int i = 0, j = 0; j < s.length(); ++j) {
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

# [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)

## Description

<!-- description:start -->

<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>

<p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,3], nums2 = [2]
<strong>Output:</strong> 2.00000
<strong>Explanation:</strong> merged array = [1,2,3] and median is 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
<strong>Output:</strong> 2.50000
<strong>Explanation:</strong> merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>nums1.length == m</code></li>
 <li><code>nums2.length == n</code></li>
 <li><code>0 &lt;= m &lt;= 1000</code></li>
 <li><code>0 &lt;= n &lt;= 1000</code></li>
 <li><code>1 &lt;= m + n &lt;= 2000</code></li>
 <li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>
</ul>

<!-- description:end -->

# Solutions

<!-- solution:start -->

### Solution 1: Divide and Conquer

This method finds the median of two sorted arrays, `nums1` and `nums2`, without merging them.

## Key Method: `findMedianSortedArrays`

- **Input**: Two arrays, `nums1` and `nums2`.
- **Output**: Median of the combined arrays.
- **Process**:
  1. Calculate the positions needed for the median (one or two middle elements).
  2. Use the helper method `f` to find the k-th smallest element in the combined arrays.

## Helper Method: `f`

- **Purpose**: Recursively finds the k-th smallest element between `nums1` and `nums2`.
- **Base Cases**:
  - If `nums1` is exhausted, return the k-th element of `nums2` (and vice versa).
  - If `k == 1`, return the smaller of the two current elements.
- **Recursive Step**:
  - Compare the k-th elements of both arrays and discard half of the elements from one array.
  - Repeat until the k-th smallest element is found.

### Efficiency

- This approach uses binary search and recursion, with a time complexity of `O(log(min(m, n)))`.

<!-- tabs:start -->

#### Java

```java
class Solution {
    private int m;
    private int n;
    private int[] nums1;
    private int[] nums2;

    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        m = nums1.length;
        n = nums2.length;
        this.nums1 = nums1;
        this.nums2 = nums2;
        int a = f(0, 0, (m + n + 1) / 2);
        int b = f(0, 0, (m + n + 2) / 2);
        return (a + b) / 2.0;
    }

    private int f(int i, int j, int k) {
        if (i >= m) {
            return nums2[j + k - 1];
        }
        if (j >= n) {
            return nums1[i + k - 1];
        }
        if (k == 1) {
            return Math.min(nums1[i], nums2[j]);
        }
        int p = k / 2;
        int x = i + p - 1 < m ? nums1[i + p - 1] : 1 << 30;
        int y = j + p - 1 < n ? nums2[j + p - 1] : 1 << 30;
        return x < y ? f(i + p, j, k - p) : f(i, j + p, k - p);
    }
}
```
