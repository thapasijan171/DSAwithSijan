---
title: "Array / String"
description: "All solutions leetcode Top Interview 150 Array & String Solutions"
pubDate: "2024"
heroImage: "../img/post.jpeg"
---

![Top Interview 150](https://raw.githubusercontent.com/thapasijan171/assets/main/download.png)

# Questions form LeetCode Top Interview 150

<br>

# [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)

## Description

<p> You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in <strong>non-decreasing order</strong>, and two integers <code>m</code> and <code>n</code>, representing the number of elements in <code>nums1</code> and <code>nums2</code> respectively.</p>

<p><strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a single array sorted in <strong>non-decreasing order</strong>.</p>

<p>The final sorted array should not be returned by the function, but instead be <em>stored inside the array </em><code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a length of <code>n</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
<strong>Output:</strong> [1,2,2,3,5,6]
<strong>Explanation:</strong> The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [<u>1</u>,<u>2</u>,2,<u>3</u>,5,6] with the underlined elements coming from nums1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1], m = 1, nums2 = [], n = 0
<strong>Output:</strong> [1]
<strong>Explanation:</strong> The arrays we are merging are [1] and [].
The result of the merge is [1].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [0], m = 0, nums2 = [1], n = 1
<strong>Output:</strong> [1]
<strong>Explanation:</strong> The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>nums1.length == m + n</code></li>
 <li><code>nums2.length == n</code></li>
 <li><code>0 &lt;= m, n &lt;= 200</code></li>
 <li><code>1 &lt;= m + n &lt;= 200</code></li>
 <li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up: </strong>Can you come up with an algorithm that runs in <code>O(m + n)</code> time?</p>

## Solutions

### Solution 1: Two Pointers

We use two pointers `i` and `j` pointing to the end of two arrays, and a pointer `k` pointing to the end of the merged array.

Every time we compare the two elements at the end of the two arrays, and move the larger one to the end of the merged array. Then we move the pointer one step forward, and repeat this process until the two pointers reach the start of the arrays.

The time complexity is `O(m + n)`, where `m` and `n` are the lengths of two arrays. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        for (int i = m - 1, j = n - 1, k = m + n - 1; j >= 0; k--) {
            nums1[k] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
        }
    }
}
```

<br>
<br>
<br>
<br>

# [27. Remove Element](https://leetcode.com/problems/remove-element)

## Description

<p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a>. The order of the elements may be changed. Then return <em>the number of elements in </em><code>nums</code><em> which are not equal to </em><code>val</code>.</p>

<p>Consider the number of elements in <code>nums</code> which are not equal to <code>val</code> be <code>k</code>, to get accepted, you need to do the following things:</p>

<ul>
 <li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the elements which are not equal to <code>val</code>. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li>
 <li>Return <code>k</code>.</li>
</ul>

<p><strong>Custom Judge:</strong></p>

<p>The judge will test your solution with the following code:</p>

<pre>
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i &lt; actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>

<p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,2,3], val = 3
<strong>Output:</strong> 2, nums = [2,2,_,_]
<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,2,2,3,0,4,2], val = 2
<strong>Output:</strong> 5, nums = [0,1,4,0,3,_,_,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>0 &lt;= nums.length &lt;= 100</code></li>
 <li><code>0 &lt;= nums[i] &lt;= 50</code></li>
 <li><code>0 &lt;= val &lt;= 100</code></li>
</ul>

## Solutions

### Solution 1: One Pass

We use the variable `k` to record the number of elements that are not equal to `val`.

Traverse the array `nums`, if the current element `x` is not equal to `val`, then assign `x` to `nums[k]`, and increment `k` by `1`.

Finally, return `k`.

The time complexity is `O(n)` and the space complexity is `O(1)`, where `n` is the length of the array `nums`.

#### Java

```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0;
        for (int x : nums) {
            if (x != val) {
                nums[k++] = x;
            }
        }
        return k;
    }
}
```

<br>
<br>
<br>

# [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)

## Description

<p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing order</strong>, remove the duplicates <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a> such that each unique element appears only <strong>once</strong>. The <strong>relative order</strong> of the elements should be kept the <strong>same</strong>. Then return <em>the number of unique elements in </em><code>nums</code>.</p>

<p>Consider the number of unique elements of <code>nums</code> to be <code>k</code>, to get accepted, you need to do the following things:</p>

<ul>
 <li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the unique elements in the order they were present in <code>nums</code> initially. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li>
 <li>Return <code>k</code>.</li>
</ul>

<p><strong>Custom Judge:</strong></p>

<p>The judge will test your solution with the following code:</p>

<pre>
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>

<p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong> 2, nums = [1,2,_]
<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,0,1,1,1,2,2,3,3,4]
<strong>Output:</strong> 5, nums = [0,1,2,3,4,_,_,_,_,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
 <li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
 <li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>

## Solutions

### Solution 1: Single Pass

We use a variable `k` to record the current length of the processed array. Initially, `k=0` represents an empty array.

Then we traverse the array from left to right. For each element `x` we encounter, if `k=0` or `x \neq nums[k-1]`, we place `x` in the position of `nums[k]`, and then increment `k` by `1`. Otherwise, `x` is the same as `nums[k-1]`, so we skip this element. Continue to traverse until the entire array is traversed.

In this way, when the traversal ends, the first `k` elements in `nums` are the answer we are looking for, and `k` is the length of the answer.

The time complexity is `O(n)`, and the space complexity is `O(1)`. Here, `n` is the length of the array.

Supplement:

The original problem requires that the same number appear at most once. We can extend it to keep at most `k` identical numbers.

- Since the same number can be kept at most `k` times, we can directly keep the first `k` elements of the original array;
- For the following numbers, the premise of being able to keep them is: the current number `x` is compared with the last `k`th element of the previously retained numbers. If they are different, keep them, otherwise skip them.

#### Java

```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 0;
        for (int x : nums) {
            if (k == 0 || x != nums[k - 1]) {
                nums[k++] = x;
            }
        }
        return k;
    }
}
```

<br>
<br>
<br>

# [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii)

## Description

<!-- description:start -->

<p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing order</strong>, remove some duplicates <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a> such that each unique element appears <strong>at most twice</strong>. The <strong>relative order</strong> of the elements should be kept the <strong>same</strong>.</p>

<p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <strong>first part</strong> of the array <code>nums</code>. More formally, if there are <code>k</code> elements after removing the duplicates, then the first <code>k</code> elements of <code>nums</code>&nbsp;should hold the final result. It does not matter what you leave beyond the first&nbsp;<code>k</code>&nbsp;elements.</p>

<p>Return <code>k</code><em> after placing the final result in the first </em><code>k</code><em> slots of </em><code>nums</code>.</p>

<p>Do <strong>not</strong> allocate extra space for another array. You must do this by <strong>modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></strong> with O(1) extra memory.</p>

<p><strong>Custom Judge:</strong></p>

<p>The judge will test your solution with the following code:</p>

<pre>
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>

<p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,1,2,2,3]
<strong>Output:</strong> 5, nums = [1,1,2,2,3,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,0,1,1,1,1,2,3,3]
<strong>Output:</strong> 7, nums = [0,0,1,1,2,3,3,_,_]
<strong>Explanation:</strong> Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
 <li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
 <li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>

## Solutions

### Solution 1: Single Pass

We use a variable `k` to record the current length of the array that has been processed. Initially, `k=0`, representing an empty array.

Then we traverse the array from left to right. For each element `x` we traverse, if `k < 2` or `x \neq nums[k-2]`, we put `x` in the position of `nums[k]`, and then increment `k` by `1`. Otherwise, `x` is the same as `nums[k-2]`, we directly skip this element. Continue to traverse until the entire array is traversed.

In this way, when the traversal ends, the first `k` elements in `nums` are the answer we want, and `k` is the length of the answer.

The time complexity is `O(n)`, and the space complexity is `O(1)`. Here, `n` is the length of the array.

Supplement:

The original problem requires that the same number appears at most `2` times. We can extend it to keep at most `k` identical numbers.

- Since the same number can be kept at most `k` times, we can directly keep the first `k` elements of the original array;
- For the later numbers, the premise of being able to keep them is: the current number `x` compares with the `k`th element from the end of the previously kept numbers. If they are different, keep it, otherwise skip it.

#### Java

```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 0;
        for (int x : nums) {
            if (k < 2 || x != nums[k - 2]) {
                nums[k++] = x;
            }
        }
        return k;
    }
}
```

<br>
<br>
<br>

# [169. Majority Element](https://leetcode.com/problems/majority-element)

## Description

<p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.</p>

<p>The majority element is the element that appears more than <code>&lfloor;n / 2&rfloor;</code> times. You may assume that the majority element always exists in the array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,3]
<strong>Output:</strong> 3
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,1,1,1,2,2]
<strong>Output:</strong> 2
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>n == nums.length</code></li>
 <li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
 <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:</strong> Could you solve the problem in linear time and in <code>O(1)</code> space?

## Solutions

### Solution 1: Moore Voting Algorithm

The basic steps of the Moore voting algorithm are as follows:

Initialize the element `m` and initialize the counter `cnt = 0`. Then, for each element `x` in the input list:

1. If `cnt = 0`, then `m = x` and `cnt = 1`;
1. Otherwise, if `m = x`, then `cnt = cnt + 1`, otherwise `cnt = cnt - 1`.

In general, the Moore voting algorithm requires **two passes** over the input list. In the first pass, we generate the candidate value `m`, and if there is a majority, the candidate value is the majority value. In the second pass, we simply compute the frequency of the candidate value to confirm whether it is the majority value. Since this problem has clearly stated that there is a majority value, we can directly return `m` after the first pass, without the need for a second pass to confirm whether it is the majority value.

The time complexity is `O(n)`, where `n` is the length of the array `nums`. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public int majorityElement(int[] nums) {
        int cnt = 0, m = 0;
        for (int x : nums) {
            if (cnt == 0) {
                m = x;
                cnt = 1;
            } else {
                cnt += m == x ? 1 : -1;
            }
        }
        return m;
    }
}
```

<br>
<br>
<br>

# [189. Rotate Array](https://leetcode.com/problems/rotate-array)

## Description

<p>Given an integer array <code>nums</code>, rotate the array to the right by <code>k</code> steps, where <code>k</code> is non-negative.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5,6,7], k = 3
<strong>Output:</strong> [5,6,7,1,2,3,4]
<strong>Explanation:</strong>
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,-100,3,99], k = 2
<strong>Output:</strong> [3,99,-1,-100]
<strong>Explanation:</strong>
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
 <li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
 <li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
 <li>Try to come up with as many solutions as you can. There are at least <strong>three</strong> different ways to solve this problem.</li>
 <li>Could you do it in-place with <code>O(1)</code> extra space?</li>
</ul>

## Solutions

### Solution 1: Reverse three times

We can assume the length of the array is `n` and calculate the actual number of steps needed by taking the module of `k` and `n`, which is `k \bmod n`.

Next, let us reverse three times to get the final result:

1. Reverse the entire array.
2. Reverse the first `k` elements.
3. Reverse the last `n - k` elements.

For example, for the array `[1, 2, 3, 4, 5, 6, 7]`, `k = 3`, `n = 7`, `k \bmod n = 3`.

1. In the first reverse, reverse the entire array. We get `[7, 6, 5, 4, 3, 2, 1]`.
2. In the second reverse, reverse the first `k` elements. We get `[5, 6, 7, 4, 3, 2, 1]`.
3. In the third reverse, reverse the last `n - k` elements. We get `[5, 6, 7, 1, 2, 3, 4]`, which is the final result.

The time complexity is `O(n)`, where `n` is the length of the array. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    private int[] nums;

    public void rotate(int[] nums, int k) {
        this.nums = nums;
        int n = nums.length;
        k %= n;
        reverse(0, n - 1);
        reverse(0, k - 1);
        reverse(k, n - 1);
    }

    private void reverse(int i, int j) {
        for (; i < j; ++i, --j) {
            int t = nums[i];
            nums[i] = nums[j];
            nums[j] = t;
        }
    }
}
```

<br>
<br>
<br>

# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

## Description

<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>

<p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>

<p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code></li>
 <li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
</ul>

## Solutions

### Solution 1: Enumerate + Maintain the Minimum Value of the Prefix

We can enumerate each element of the array `nums` as the selling price. Then we need to find a minimum value in front of it as the purchase price to maximize the profit.

Therefore, we use a variable `mi` to maintain the prefix minimum value of the array `nums`. Then we traverse the array `nums` and for each element `v`, calculate the difference between it and the minimum value `mi` in front of it, and update the answer to the maximum of the difference. Then update `mi = min(mi, v)`. Continue to traverse the array `nums` until the traversal ends.

Finally, return the answer.

The time complexity is `O(n)`, where `n` is the length of the array `nums`. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public int maxProfit(int[] prices) {
        int ans = 0, mi = prices[0];
        for (int v : prices) {
            ans = Math.max(ans, v - mi);
            mi = Math.min(mi, v);
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)

## Description

<p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>

<p>On each day, you may decide to buy and/or sell the stock. You can only hold <strong>at most one</strong> share of the stock at any time. However, you can buy it then immediately sell it on the <strong>same day</strong>.</p>

<p>Find and return <em>the <strong>maximum</strong> profit you can achieve</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 7
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> prices = [1,2,3,4,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= prices.length &lt;= 3 * 10<sup>4</sup></code></li>
 <li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
</ul>

## Solutions

### Solution 1: Greedy Algorithm

Starting from the second day, if the stock price is higher than the previous day, buy on the previous day and sell on the current day to make a profit. If the stock price is lower than the previous day, do not buy or sell. In other words, buy and sell on all rising trading days, and do not trade on all falling trading days. The final profit will be the maximum.

The time complexity is `O(n)`, where `n` is the length of the `prices` array. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public int maxProfit(int[] prices) {
        int ans = 0;
        for (int i = 1; i < prices.length; i++) {
            ans += Math.max(0, prices[i] - prices[i - 1]);
        }
        return ans;
    }
}
```

### Solution 2: Dynamic Programming

We define `f[i][j]` as the maximum profit after trading on the `i`th day, where `j` indicates whether we currently hold the stock. When holding the stock, `j=0`, and when not holding the stock, `j=1`. The initial state is `f[0][0]=-prices[0]`, and all other states are `0`.

If we currently hold the stock, it may be that we held the stock the day before and do nothing today, i.e., `f[i][0]=f[i-1][0]`. Or it may be that we did not hold the stock the day before and bought the stock today, i.e., `f[i][0]=f[i-1][1]-prices[i]`.

If we currently do not hold the stock, it may be that we did not hold the stock the day before and do nothing today, i.e., `f[i][1]=f[i-1][1]`. Or it may be that we held the stock the day before and sold the stock today, i.e., `f[i][1]=f[i-1][0]+prices[i]`.

Therefore, we can write the state transition equation as:

`
\begin{cases}
f[i][0]=\max(f[i-1][0],f[i-1][1]-prices[i])\\
f[i][1]=\max(f[i-1][1],f[i-1][0]+prices[i])
\end{cases}
`

The final answer is `f[n-1][1]`, where `n` is the length of the `prices` array.

The time complexity is `O(n)`, and the space complexity is `O(n)`. Here, `n` is the length of the `prices` array.

#### Java

```java
class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int[][] f = new int[n][2];
        f[0][0] = -prices[0];
        for (int i = 1; i < n; i++) {
            f[i][0] = Math.max(f[i - 1][0], f[i - 1][1] - prices[i]);
            f[i][1] = Math.max(f[i - 1][1], f[i - 1][0] + prices[i]);
        }
        return f[n - 1][1];
    }
}
```

### Solution 3: Dynamic Programming (Space Optimization)

We can find that in Solution 2, the state of the `i`th day is only related to the state of the `i-1`th day. Therefore, we can use only two variables to maintain the state of the `i-1`th day, thereby optimizing the space complexity to `O(1)`.

The time complexity is `O(n)`, where `n` is the length of the `prices` array. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int[] f = new int[] {-prices[0], 0};
        for (int i = 1; i < n; i++) {
            int[] g = new int[2];
            g[0] = Math.max(f[0], f[1] - prices[i]);
            g[1] = Math.max(f[1], f[0] + prices[i]);
            f = g;
        }
        return f[1];
    }
}
```

<br>
<br>
<br>

# [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix)

## Description

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

## Solutions

### Solution 1: Simulation

We use `i` and `j` to represent the row and column of the current element, use `k` to represent the current direction, and use an array or hash table `vis` to record whether each element has been visited. Each time we visit an element, we mark it as visited, then move forward in the current direction. If we find that it is out of bounds or has been visited after moving forward, we change the direction and continue to move forward until the entire matrix is traversed.

For visited elements, we can also add a constant `300` to their values, so we don't need an extra `vis` array or hash table to record whether they have been visited, thereby reducing the space complexity to `O(1)`.

#### Java

```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int[] dirs = {0, 1, 0, -1, 0};
        int i = 0, j = 0, k = 0;
        List<Integer> ans = new ArrayList<>();
        boolean[][] vis = new boolean[m][n];
        for (int h = m * n; h > 0; h--) {
            ans.add(matrix[i][j]);
            vis[i][j] = true;
            int x = i + dirs[k], y = j + dirs[k + 1];
            if (x < 0 || x >= m || y < 0 || y >= n || vis[x][y]) {
                k = (k + 1) % 4;
            }
            i += dirs[k];
            j += dirs[k + 1];
        }
        return ans;
    }
}
```

### Solution 2: Layer-by-layer Simulation

We can also traverse and store the matrix elements from the outside to the inside, layer by layer.

The time complexity is `O(m \times n)`, and the space complexity is `O(1)`. Here, `m` and `n` are the number of rows and columns of the matrix, respectively.

#### Java

```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int[] dirs = {0, 1, 0, -1, 0};
        List<Integer> ans = new ArrayList<>();
        for (int h = m * n, i = 0, j = 0, k = 0; h > 0; h--) {
            ans.add(matrix[i][j]);
            matrix[i][j] += 300;
            int x = i + dirs[k], y = j + dirs[k + 1];
            if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] > 100) {
                k = (k + 1) % 4;
            }
            i += dirs[k];
            j += dirs[k + 1];
        }
        // for (int i = 0; i < m; ++i) {
        //     for (int j = 0; j < n; ++j) {
        //         matrix[i][j] -= 300;
        //     }
        // }
        return ans;
    }
}
```

### Solution 3

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
                for (int i = x2 - 1; i > x1; i++) {
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

# [45. Jump Game II](https://leetcode.com/problems/jump-game-ii)

## Description

<p>You are given a <strong>0-indexed</strong> array of integers <code>nums</code> of length <code>n</code>. You are initially positioned at <code>nums[0]</code>.</p>

<p>Each element <code>nums[i]</code> represents the maximum length of a forward jump from index <code>i</code>. In other words, if you are at <code>nums[i]</code>, you can jump to any <code>nums[i + j]</code> where:</p>

<ul>
 <li><code>0 &lt;= j &lt;= nums[i]</code> and</li>
 <li><code>i + j &lt; n</code></li>
</ul>

<p>Return <em>the minimum number of jumps to reach </em><code>nums[n - 1]</code>. The test cases are generated such that you can reach <code>nums[n - 1]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3,1,1,4]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3,0,1,4]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
 <li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
 <li>It&#39;s guaranteed that you can reach <code>nums[n - 1]</code>.</li>
</ul>

## Solutions

### Solution 1: Greedy Algorithm

We can use a variable `mx` to record the farthest position that can be reached from the current position, a variable `last` to record the position of the last jump, and a variable `ans` to record the number of jumps.

Next, we traverse each position `i` in `[0,..n - 2]`. For each position `i`, we can calculate the farthest position that can be reached from the current position through `i + nums[i]`. We use `mx` to record this farthest position, that is, `mx = max(mx, i + nums[i])`. Then, we check whether the current position has reached the boundary of the last jump, that is, `i = last`. If it has reached, then we need to make a jump, update `last` to `mx`, and increase the number of jumps `ans` by `1`.

Finally, we return the number of jumps `ans`.

The time complexity is `O(n)`, where `n` is the length of the array. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public int jump(int[] nums) {
        int ans = 0, mx = 0, last = 0;
        for (int i = 0; i < nums.length - 1; i++) {
            mx = Math.max(mx, i + nums[i]);
            if (last == i) {
                ++ans;
                last = mx;
            }
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [274. H-Index](https://leetcode.com/problems/h-index)

## Description

<p>Given an array of integers <code>citations</code> where <code>citations[i]</code> is the number of citations a researcher received for their <code>i<sup>th</sup></code> paper, return <em>the researcher&#39;s h-index</em>.</p>

<p>According to the <a href="https://en.wikipedia.org/wiki/H-index" target="_blank">definition of h-index on Wikipedia</a>: The h-index is defined as the maximum value of <code>h</code> such that the given researcher has published at least <code>h</code> papers that have each been cited at least <code>h</code> times.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> citations = [3,0,6,1,5]
<strong>Output:</strong> 3
<strong>Explanation:</strong> [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> citations = [1,3,1]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>n == citations.length</code></li>
 <li><code>1 &lt;= n &lt;= 5000</code></li>
 <li><code>0 &lt;= citations[i] &lt;= 1000</code></li>
</ul>

## Solutions

### Solution 1: Sorting

Time complexity `O(n \times \log n)`, space complexity `O(\log n)`. Here `n` is the length of the array `citations`.

#### Java

```java
class Solution {
    public int hIndex(int[] citations) {
        Arrays.sort(citations);
        int n = citations.length;
        for (int h = n; h > 0; h--) {
            if (citations[n - h] >= h) {
                return h;
            }
        }
        return 0;
    }
}
```

### Solution 2: Counting + Sum

We can use an array `cnt` of length `n+1`, where `cnt[i]` represents the number of papers with the reference count of `i`. We traverse the array `citations` and treat the papers with the reference count greater than `n` as papers with a reference count of `n`. Then we use the reference count as the index and add `1` to the corresponding element of `cnt` for each paper. In this way, we have counted the number of papers for each reference count.

Time complexity `O(n)`, space complexity `O(n)`. Here `n` is the length of the array `citations`.

#### Java

```java
class Solution {
    public int hIndex(int[] citations) {
        int n = citations.length;
        int[] cnt = new int[n + 1];
        for (int x : citations) {
            ++cnt[Math.min(x, n)];
        }
        for (int h = n, s = 0;; h--) {
            s += cnt[h];
            if (s >= h) {
                return h;
            }
        }
    }
}
```

### Solution 3: Binary Search

We notice that if there is a `h` value that satisfies at least `h` papers are cited at least `h` times, then for any `h'<h`, at least `h'` papers are cited at least `h'` times. Therefore, we can use the binary search method to find the largest `h` such that at least `h` papers are cited at least `h` times.

Time complexity `O(n \times \log n)`, where `n` is the length of array `citations`. Space complexity `O(1)`.

#### Java

```java
class Solution {
    public int hIndex(int[] citations) {
        int l = 0, r = citations.length;
        while (l < r) {
            int mid = (l + r + 1) >> 1;
            int s = 0;
            for (int x : citations) {
                if (x >= mid) {
                    ++s;
                }
            }
            if (s >= mid) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        return l;
    }
}
```

<br>
<br>
<br>

# [380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1)

## Description

<p>Implement the <code>RandomizedSet</code> class:</p>

<ul>
 <li><code>RandomizedSet()</code> Initializes the <code>RandomizedSet</code> object.</li>
 <li><code>bool insert(int val)</code> Inserts an item <code>val</code> into the set if not present. Returns <code>true</code> if the item was not present, <code>false</code> otherwise.</li>
 <li><code>bool remove(int val)</code> Removes an item <code>val</code> from the set if present. Returns <code>true</code> if the item was present, <code>false</code> otherwise.</li>
 <li><code>int getRandom()</code> Returns a random element from the current set of elements (it&#39;s guaranteed that at least one element exists when this method is called). Each element must have the <b>same probability</b> of being returned.</li>
</ul>

<p>You must implement the functions of the class such that each function works in&nbsp;<strong>average</strong>&nbsp;<code>O(1)</code>&nbsp;time complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;RandomizedSet&quot;, &quot;insert&quot;, &quot;remove&quot;, &quot;insert&quot;, &quot;getRandom&quot;, &quot;remove&quot;, &quot;insert&quot;, &quot;getRandom&quot;]
[[], [1], [2], [2], [], [1], [2], []]
<strong>Output</strong>
[null, true, false, true, 2, true, false, 2]

<strong>Explanation</strong>
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>-2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1</code></li>
 <li>At most <code>2 *&nbsp;</code><code>10<sup>5</sup></code> calls will be made to <code>insert</code>, <code>remove</code>, and <code>getRandom</code>.</li>
 <li>There will be <strong>at least one</strong> element in the data structure when <code>getRandom</code> is called.</li>
</ul>

## Solutions

### Solution 1: Hash Table + Dynamic List

We define a dynamic list `q` to store the elements in the set, and a hash table `d` to store the index of each element in `q`.

When inserting an element, if the element already exists in the hash table `d`, return `false` directly; otherwise, we insert the element into the end of the dynamic list `q`, and insert the element and its index in `q` into the hash table `d` at the same time, and finally return `true`.

When deleting an element, if the element does not exist in the hash table `d`, return `false` directly; otherwise, we obtain the index of the element in the list `q` from the hash table, then swap the last element `q[-1]` in the list `q` with `q[i]`, and then update the index of `q[-1]` in the hash table to `i`. Then delete the last element in `q`, and remove the element from the hash table at the same time, and finally return `true`.

When getting a random element, we can randomly select an element from the dynamic list `q` and return it.

Time complexity `O(1)`, space complexity `O(n)`, where `n` is the number of elements in the set.

#### Java

```java
class RandomizedSet {
    private Map<Integer, Integer> d = new HashMap<>();
    private List<Integer> q = new ArrayList<>();
    private Random rnd = new Random();

    public RandomizedSet() {
    }

    public boolean insert(int val) {
        if (d.containsKey(val)) {
            return false;
        }
        d.put(val, q.size());
        q.add(val);
        return true;
    }

    public boolean remove(int val) {
        if (!d.containsKey(val)) {
            return false;
        }
        int i = d.get(val);
        d.put(q.get(q.size() - 1), i);
        q.set(i, q.get(q.size() - 1));
        q.remove(q.size() - 1);
        d.remove(val);
        return true;
    }

    public int getRandom() {
        return q.get(rnd.nextInt(q.size()));
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
```

<br>
<br>
<br>

# [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self)

## Description

<p>Given an integer array <code>nums</code>, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is equal to the product of all the elements of</em> <code>nums</code> <em>except</em> <code>nums[i]</code>.</p>

<p>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</p>

<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time and without using the division operation.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> [24,12,8,6]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [-1,1,0,-3,3]
<strong>Output:</strong> [0,0,9,0,0]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
 <li><code>-30 &lt;= nums[i] &lt;= 30</code></li>
 <li>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong>&nbsp;Can you solve the problem in <code>O(1)</code>&nbsp;extra&nbsp;space complexity? (The output array <strong>does not</strong> count as extra space for space complexity analysis.)</p>

## Solutions

### Solution 1: Two Passes

We define two variables `left` and `right`, which represent the product of all elements to the left and right of the current element respectively. Initially, `left=1`, `right=1`. Define an answer array `ans` of length `n`.

We first traverse the array from left to right, for the `i`th element we update `ans[i]` with `left`, then `left` multiplied by `nums[i]`.

Then, we traverse the array from right to left, for the `i`th element, we update `ans[i]` to `ans[i] \times right`, then `right` multiplied by `nums[i]`.

After the traversal, the array `ans` is the answer.

The time complexity is `O(n)`, where `n` is the length of the array `nums`. Ignore the space consumption of the answer array, the space complexity is `O(1)`.

#### Java

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];
        for (int i = 0, left = 1; i < n; i++) {
            ans[i] = left;
            left *= nums[i];
        }
        for (int i = n - 1, right = 1; i >= 0; i--) {
            ans[i] *= right;
            right *= nums[i];
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [134. Gas Station](https://leetcode.com/problems/gas-station)

## Description

<p>There are <code>n</code> gas stations along a circular route, where the amount of gas at the <code>i<sup>th</sup></code> station is <code>gas[i]</code>.</p>

<p>You have a car with an unlimited gas tank and it costs <code>cost[i]</code> of gas to travel from the <code>i<sup>th</sup></code> station to its next <code>(i + 1)<sup>th</sup></code> station. You begin the journey with an empty tank at one of the gas stations.</p>

<p>Given two integer arrays <code>gas</code> and <code>cost</code>, return <em>the starting gas station&#39;s index if you can travel around the circuit once in the clockwise direction, otherwise return</em> <code>-1</code>. If there exists a solution, it is <strong>guaranteed</strong> to be <strong>unique</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> gas = [1,2,3,4,5], cost = [3,4,5,1,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> gas = [2,3,4], cost = [3,4,3]
<strong>Output:</strong> -1
<strong>Explanation:</strong>
You can&#39;t start at station 0 or 1, as there is not enough gas to travel to the next station.
Let&#39;s start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can&#39;t travel around the circuit once no matter where you start.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>n == gas.length == cost.length</code></li>
 <li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
 <li><code>0 &lt;= gas[i], cost[i] &lt;= 10<sup>4</sup></code></li>
</ul>

## Solutions

### Solution

Given two arrays `gas` and `cost`, where:

- `gas[i]` represents the amount of gas available at the `i`-th gas station.
- `cost[i]` represents the cost of gas to travel from the `i`-th station to the next one.

The goal is to determine if there exists a starting gas station such that you can complete a full circuit around the route, starting and ending at the same station. If such a station exists, return its index; otherwise, return `-1`.

### Approach

1. **Greedy Two-Pointer Approach:**
   - Use two pointers (`i` and `j`) to simulate a circular route:
     - `i` tracks the starting station.
     - `j` moves forward as the current station we are evaluating.

2. **Balancing Gas and Cost:**
   - Maintain a variable `s` that tracks the surplus of gas (gas available minus the cost to travel).
   - Traverse the stations in a circular manner:
     - Add the gas at the current station `j` and subtract the cost to travel to the next station.
     - If the surplus becomes negative (`s < 0`), try to adjust the starting station `i` by moving backward and adding gas from the previous stations.

3. **Termination Condition:**
   - If the total surplus of gas `s` is negative after visiting all stations, it is impossible to complete the circuit.
   - Otherwise, the index `i` will point to the valid starting station.

#### Java

```java
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length;
        int i = n - 1, j = n - 1;
        int cnt = 0, s = 0;
        while (cnt < n) {
            s += gas[j] - cost[j];
            ++cnt;
            j = (j + 1) % n;
            while (s < 0 && cnt < n) {
                --i;
                s += gas[i] - cost[i];
                ++cnt;
            }
        }
        return s < 0 ? -1 : i;
    }
}
```

<br>
<br>
<br>

# [135. Candy](https://leetcode.com/problems/candy)

## Description

<p>There are <code>n</code> children standing in a line. Each child is assigned a rating value given in the integer array <code>ratings</code>.</p>

<p>You are giving candies to these children subjected to the following requirements:</p>

<ul>
 <li>Each child must have at least one candy.</li>
 <li>Children with a higher rating get more candies than their neighbors.</li>
</ul>

<p>Return <em>the minimum number of candies you need to have to distribute the candies to the children</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> ratings = [1,0,2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> ratings = [1,2,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>n == ratings.length</code></li>
 <li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
 <li><code>0 &lt;= ratings[i] &lt;= 2 * 10<sup>4</sup></code></li>
</ul>

## Solutions

### Solution 1: Two traversals

We initialize two arrays `left` and `right`, where `left[i]` represents the minimum number of candies the current child should get when the current child's score is higher than the left child's score, and `right[i]` represents the minimum number of candies the current child should get when the current child's score is higher than the right child's score. Initially, `left[i]=1`, `right[i]=1`.

We traverse the array from left to right once, and if the current child's score is higher than the left child's score, then `left[i]=left[i-1]+1`; similarly, we traverse the array from right to left once, and if the current child's score is higher than the right child's score, then `right[i]=right[i+1]+1`.

Finally, we traverse the array of scores once, and the minimum number of candies each child should get is the maximum of `left[i]` and `right[i]`, and we add them up to get the answer.

Time complexity `O(n)`, space complexity `O(n)`. Where `n` is the length of the array of scores.

#### Java

```java
class Solution {
    public int candy(int[] ratings) {
        int n = ratings.length;
        int[] left = new int[n];
        int[] right = new int[n];
        Arrays.fill(left, 1);
        Arrays.fill(right, 1);
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                left[i] = left[i - 1] + 1;
            }
        }
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                right[i] = right[i + 1] + 1;
            }
        }
        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans += Math.max(left[i], right[i]);
        }
        return ans;
    }
}
```

### Solution 2

#### Java

```java
class Solution {
    public int candy(int[] ratings) {
        int n = ratings.length;
        int up = 0;
        int down = 0;
        int peak = 0;
        int candies = 1;
        for (int i = 1; i < n; i++) {
            if (ratings[i - 1] < ratings[i]) {
                up++;
                peak = up + 1;
                down = 0;
                candies += peak;
            } else if (ratings[i] == ratings[i - 1]) {
                peak = 0;
                up = 0;
                down = 0;
                candies++;
            } else {
                down++;
                up = 0;
                candies += down + (peak > down ? 0 : 1);
            }
        }
        return candies;
    }
}
```

<br>
<br>
<br>

# [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)

## Description

<p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0042.Trapping%20Rain%20Water/images/rainwatertrap.png" style="width: 412px; height: 161px;" />
<pre>
<strong>Input:</strong> height = [0,1,0,2,1,0,1,3,2,1,2,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> height = [4,2,0,3,2,5]
<strong>Output:</strong> 9
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>n == height.length</code></li>
 <li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
 <li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></li>
</ul>

## Solutions

### Solution 1: Dynamic Programming

We define `left[i]` as the height of the highest bar to the left of and including the position at index `i`, and `right[i]` as the height of the highest bar to the right of and including the position at index `i`. Therefore, the amount of rainwater that can be trapped at index `i` is `min(left[i], right[i]) - height[i]`. We traverse the array to calculate `left[i]` and `right[i]`, and the final answer is `\sum_{i=0}^{n-1} \min(left[i], right[i]) - height[i]`.

The time complexity is `O(n)`, and the space complexity is `O(n)`. Here, `n` is the length of the array.

#### Java

```java
class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int[] left = new int[n];
        int[] right = new int[n];
        left[0] = height[0];
        right[n - 1] = height[n - 1];
        for (int i = 1; i < n; i++) {
            left[i] = Math.max(left[i - 1], height[i]);
            right[n - i - 1] = Math.max(right[n - i], height[n - i - 1]);
        }
        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans += Math.min(left[i], right[i]) - height[i];
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer)

## Description

<p>Roman numerals are represented by seven different symbols:&nbsp;<code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>

<pre>
<strong>Symbol</strong>       <strong>Value</strong>
I             1
V             5
X             10
L             50
C             100
D             500
M             1000</pre>

<p>For example,&nbsp;<code>2</code> is written as <code>II</code>&nbsp;in Roman numeral, just two ones added together. <code>12</code> is written as&nbsp;<code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.</p>

<p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p>

<ul>
 <li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9.&nbsp;</li>
 <li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90.&nbsp;</li>
 <li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li>
</ul>

<p>Given a roman numeral, convert it to an integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;III&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> III = 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;LVIII&quot;
<strong>Output:</strong> 58
<strong>Explanation:</strong> L = 50, V= 5, III = 3.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;MCMXCIV&quot;
<strong>Output:</strong> 1994
<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= s.length &lt;= 15</code></li>
 <li><code>s</code> contains only&nbsp;the characters <code>(&#39;I&#39;, &#39;V&#39;, &#39;X&#39;, &#39;L&#39;, &#39;C&#39;, &#39;D&#39;, &#39;M&#39;)</code>.</li>
 <li>It is <strong>guaranteed</strong>&nbsp;that <code>s</code> is a valid roman numeral in the range <code>[1, 3999]</code>.</li>
</ul>

## Solutions

### Solution 1: Hash Table + Simulation

First, we use a hash table `d` to record the numerical value corresponding to each character. Then, we traverse the string `s` from left to right. If the numerical value corresponding to the current character is less than the numerical value corresponding to the character on the right, we subtract the numerical value corresponding to the current character. Otherwise, we add the numerical value corresponding to the current character.

The time complexity is `O(n)`, and the space complexity is `O(m)`. Here, `n` and `m` are the length of the string `s` and the size of the character set, respectively.

#### Java

```java
class Solution {
    public int romanToInt(String s) {
        String cs = "IVXLCDM";
        int[] vs = {1, 5, 10, 50, 100, 500, 1000};
        Map<Character, Integer> d = new HashMap<>();
        for (int i = 0; i < vs.length; i++) {
            d.put(cs.charAt(i), vs[i]);
        }
        int n = s.length();
        int ans = d.get(s.charAt(n - 1));
        for (int i = 0; i < n - 1; i++) {
            int sign = d.get(s.charAt(i)) < d.get(s.charAt(i + 1)) ? -1 : 1;
            ans += sign * d.get(s.charAt(i));
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman)

## Description

<p>Seven different symbols represent Roman numerals with the following values:</p>

<table>
 <thead>
  <tr>
   <th>Symbol</th>
   <th>Value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>I</td>
   <td>1</td>
  </tr>
  <tr>
   <td>V</td>
   <td>5</td>
  </tr>
  <tr>
   <td>X</td>
   <td>10</td>
  </tr>
  <tr>
   <td>L</td>
   <td>50</td>
  </tr>
  <tr>
   <td>C</td>
   <td>100</td>
  </tr>
  <tr>
   <td>D</td>
   <td>500</td>
  </tr>
  <tr>
   <td>M</td>
   <td>1000</td>
  </tr>
 </tbody>
</table>

<p>Roman numerals are formed by appending&nbsp;the conversions of&nbsp;decimal place values&nbsp;from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:</p>

<ul>
 <li>If the value does not start with 4 or&nbsp;9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.</li>
 <li>If the value starts with 4 or 9 use the&nbsp;<strong>subtractive form</strong>&nbsp;representing&nbsp;one symbol subtracted from the following symbol, for example,&nbsp;4 is 1 (<code>I</code>) less than 5 (<code>V</code>): <code>IV</code>&nbsp;and 9 is 1 (<code>I</code>) less than 10 (<code>X</code>): <code>IX</code>.&nbsp;Only the following subtractive forms are used: 4 (<code>IV</code>), 9 (<code>IX</code>),&nbsp;40 (<code>XL</code>), 90 (<code>XC</code>), 400 (<code>CD</code>) and 900 (<code>CM</code>).</li>
 <li>Only powers of 10 (<code>I</code>, <code>X</code>, <code>C</code>, <code>M</code>) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5&nbsp;(<code>V</code>), 50 (<code>L</code>), or 500 (<code>D</code>) multiple times. If you need to append a symbol&nbsp;4 times&nbsp;use the <strong>subtractive form</strong>.</li>
</ul>

<p>Given an integer, convert it to a Roman numeral.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">num = 3749</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;MMMDCCXLIX&quot;</span></p>

<p><strong>Explanation:</strong></p>

<pre>
3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
</pre>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">num = 58</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;LVIII&quot;</span></p>

<p><strong>Explanation:</strong></p>

<pre>
50 = L
 8 = VIII
</pre>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">num = 1994</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;MCMXCIV&quot;</span></p>

<p><strong>Explanation:</strong></p>

<pre>
1000 = M
 900 = CM
  90 = XC
   4 = IV
</pre>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= num &lt;= 3999</code></li>
</ul>

## Solutions

### Solution 1: Greedy

We can first list all possible symbols `cs` and their corresponding values `vs`, then enumerate each value `vs[i]` from large to small. Each time, we use as many symbols `cs[i]` corresponding to this value as possible, until the number `num` becomes `0`.

The time complexity is `O(m)`, and the space complexity is `O(m)`. Here, `m` is the number of symbols.

#### Java

```java
class Solution {
    public String intToRoman(int num) {
        List<String> cs
            = List.of("M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I");
        List<Integer> vs = List.of(1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1);
        StringBuilder ans = new StringBuilder();
        for (int i = 0, n = cs.size(); i < n; i++) {
            while (num >= vs.get(i)) {
                num -= vs.get(i);
                ans.append(cs.get(i));
            }
        }
        return ans.toString();
    }
}
```

<br>
<br>
<br>

# [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman)

## Description

<!-- description:start -->

<p>Seven different symbols represent Roman numerals with the following values:</p>

<table>
 <thead>
  <tr>
   <th>Symbol</th>
   <th>Value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>I</td>
   <td>1</td>
  </tr>
  <tr>
   <td>V</td>
   <td>5</td>
  </tr>
  <tr>
   <td>X</td>
   <td>10</td>
  </tr>
  <tr>
   <td>L</td>
   <td>50</td>
  </tr>
  <tr>
   <td>C</td>
   <td>100</td>
  </tr>
  <tr>
   <td>D</td>
   <td>500</td>
  </tr>
  <tr>
   <td>M</td>
   <td>1000</td>
  </tr>
 </tbody>
</table>

<p>Roman numerals are formed by appending&nbsp;the conversions of&nbsp;decimal place values&nbsp;from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:</p>

<ul>
 <li>If the value does not start with 4 or&nbsp;9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.</li>
 <li>If the value starts with 4 or 9 use the&nbsp;<strong>subtractive form</strong>&nbsp;representing&nbsp;one symbol subtracted from the following symbol, for example,&nbsp;4 is 1 (<code>I</code>) less than 5 (<code>V</code>): <code>IV</code>&nbsp;and 9 is 1 (<code>I</code>) less than 10 (<code>X</code>): <code>IX</code>.&nbsp;Only the following subtractive forms are used: 4 (<code>IV</code>), 9 (<code>IX</code>),&nbsp;40 (<code>XL</code>), 90 (<code>XC</code>), 400 (<code>CD</code>) and 900 (<code>CM</code>).</li>
 <li>Only powers of 10 (<code>I</code>, <code>X</code>, <code>C</code>, <code>M</code>) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5&nbsp;(<code>V</code>), 50 (<code>L</code>), or 500 (<code>D</code>) multiple times. If you need to append a symbol&nbsp;4 times&nbsp;use the <strong>subtractive form</strong>.</li>
</ul>

<p>Given an integer, convert it to a Roman numeral.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">num = 3749</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;MMMDCCXLIX&quot;</span></p>

<p><strong>Explanation:</strong></p>

<pre>
3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
</pre>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">num = 58</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;LVIII&quot;</span></p>

<p><strong>Explanation:</strong></p>

<pre>
50 = L
 8 = VIII
</pre>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">num = 1994</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;MCMXCIV&quot;</span></p>

<p><strong>Explanation:</strong></p>

<pre>
1000 = M
 900 = CM
  90 = XC
   4 = IV
</pre>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= num &lt;= 3999</code></li>
</ul>

## Solutions

### Solution 1: Greedy

We can first list all possible symbols `cs` and their corresponding values `vs`, then enumerate each value `vs[i]` from large to small. Each time, we use as many symbols `cs[i]` corresponding to this value as possible, until the number `num` becomes `0`.

The time complexity is `O(m)`, and the space complexity is `O(m)`. Here, `m` is the number of symbols.

#### Java

```java
class Solution {
    public String intToRoman(int num) {
        List<String> cs
            = List.of("M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I");
        List<Integer> vs = List.of(1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1);
        StringBuilder ans = new StringBuilder();
        for (int i = 0, n = cs.size(); i < n; i++) {
            while (num >= vs.get(i)) {
                num -= vs.get(i);
                ans.append(cs.get(i));
            }
        }
        return ans.toString();
    }
}
```

<br>
<br>
<br>

# [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)

## Description

<p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>&quot;&quot;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
<strong>Output:</strong> &quot;fl&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= strs.length &lt;= 200</code></li>
 <li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
 <li><code>strs[i]</code> consists of only lowercase English letters.</li>
</ul>

## Solutions

### Solution 1: Character Comparison

We use the first string `strs[0]` as a benchmark, and compare whether the `i`-th character of the subsequent strings is the same as the `i`-th character of `strs[0]`. If they are the same, we continue to compare the next character. Otherwise, we return the first `i` characters of `strs[0]`.

If the traversal ends, it means that the first `i` characters of all strings are the same, and we return `strs[0]`.

The time complexity is `O(n \times m)`, where `n` and `m` are the length of the string array and the minimum length of the strings, respectively. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        int n = strs.length;
        for (int i = 0; i < strs[0].length(); i++) {
            for (int j = 1; j < n; ++j) {
                if (strs[j].length() <= i || strs[j].charAt(i) != strs[0].charAt(i)) {
                    return strs[0].substring(0, i);
                }
            }
        }
        return strs[0];
    }
}
```

<br>
<br>
<br>

# [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string)

[中文文档](/solution/0100-0199/0151.Reverse%20Words%20in%20a%20String/README.md)

## Description

<!-- description:start -->

<p>Given an input string <code>s</code>, reverse the order of the <strong>words</strong>.</p>

<p>A <strong>word</strong> is defined as a sequence of non-space characters. The <strong>words</strong> in <code>s</code> will be separated by at least one space.</p>

<p>Return <em>a string of the words in reverse order concatenated by a single space.</em></p>

<p><b>Note</b> that <code>s</code> may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;the sky is blue&quot;
<strong>Output:</strong> &quot;blue is sky the&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;  hello world  &quot;
<strong>Output:</strong> &quot;world hello&quot;
<strong>Explanation:</strong> Your reversed string should not contain leading or trailing spaces.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a good   example&quot;
<strong>Output:</strong> &quot;example good a&quot;
<strong>Explanation:</strong> You need to reduce multiple spaces between two words to a single space in the reversed string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
 <li><code>s</code> contains English letters (upper-case and lower-case), digits, and spaces <code>&#39; &#39;</code>.</li>
 <li>There is <strong>at least one</strong> word in <code>s</code>.</li>
</ul>

<p>&nbsp;</p>
<p><b data-stringify-type="bold">Follow-up:&nbsp;</b>If the string data type is mutable in your language, can&nbsp;you solve it&nbsp;<b data-stringify-type="bold">in-place</b>&nbsp;with&nbsp;<code data-stringify-type="code">O(1)</code>&nbsp;extra space?</p>

## Solutions

### Solution 1: Two Pointers

We can use two pointers `i` and `j` to find each word, add it to the result list, then reverse the result list, and finally concatenate it into a string.

The time complexity is `O(n)`, and the space complexity is `O(n)`. Where `n` is the length of the string.

#### Java

```java
class Solution {
    public String reverseWords(String s) {
        List<String> words = new ArrayList<>();
        int n = s.length();
        for (int i = 0; i < n;) {
            while (i < n && s.charAt(i) == ' ') {
                ++i;
            }
            if (i < n) {
                StringBuilder t = new StringBuilder();
                int j = i;
                while (j < n && s.charAt(j) != ' ') {
                    t.append(s.charAt(j++));
                }
                words.add(t.toString());
                i = j;
            }
        }
        Collections.reverse(words);
        return String.join(" ", words);
    }
}
```

### Solution 2: String Split

We can use the built-in string split function to split the string into a list of words by spaces, then reverse the list, and finally concatenate it into a string.

The time complexity is `O(n)`, and the space complexity is `O(n)`. Where `n` is the length of the string.

#### Java

```java
class Solution {
    public String reverseWords(String s) {
        List<String> words = Arrays.asList(s.trim().split("\\s+"));
        Collections.reverse(words);
        return String.join(" ", words);
    }
}
```

<br>
<br>
<br>

# [6. Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion)

## Description

<!-- description:start -->

<p>The string <code>&quot;PAYPALISHIRING&quot;</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</p>

<pre>
P   A   H   N
A P L S I I G
Y   I   R
</pre>

<p>And then read line by line: <code>&quot;PAHNAPLSIIGYIR&quot;</code></p>

<p>Write the code that will take a string and make this conversion given a number of rows:</p>

<pre>
string convert(string s, int numRows);
</pre>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 3
<strong>Output:</strong> &quot;PAHNAPLSIIGYIR&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 4
<strong>Output:</strong> &quot;PINALSIGYAHRPI&quot;
<strong>Explanation:</strong>
P     I    N
A   L S  I G
Y A   H R
P     I
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;A&quot;, numRows = 1
<strong>Output:</strong> &quot;A&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= s.length &lt;= 1000</code></li>
 <li><code>s</code> consists of English letters (lower-case and upper-case), <code>&#39;,&#39;</code> and <code>&#39;.&#39;</code>.</li>
 <li><code>1 &lt;= numRows &lt;= 1000</code></li>
</ul>

## Solutions

### Solution 1: Simulation

We use a two-dimensional array `g` to simulate the process of the `Z`-shape arrangement, where `g[i][j]` represents the character at the `i`-th row and the `j`-th column. Initially, `i=0`, and we define a direction variable `k`, initially `k=-1`, indicating moving upwards.

We traverse the string `s` from left to right. Each time we traverse to a character `c`, we append it to `g[i]`. If `i=0` or `i=numRows-1` at this time, it means that the current character is at the turning point of the `Z`-shape arrangement, and we reverse the value of `k`, i.e., `k=-k`. Next, we update the value of `i` to `i+k`, i.e., move up or down one row. Continue to traverse the next character until we have traversed the string `s`, and we return the string concatenated by all rows in `g`.

The time complexity is `O(n)`, and the space complexity is `O(n)`. Here, `n` is the length of the string `s`.

<!-- tabs:start -->

#### Java

```java
class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }
        StringBuilder[] g = new StringBuilder[numRows];
        Arrays.setAll(g, k -> new StringBuilder());
        int i = 0, k = -1;
        for (char c : s.toCharArray()) {
            g[i].append(c);
            if (i == 0 || i == numRows - 1) {
                k = -k;
            }
            i += k;
        }
        return String.join("", g);
    }
}
```

### Solution 2

#### Java

```java
class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }
        StringBuilder ans = new StringBuilder();
        int group = 2 * numRows - 2;
        for (int i = 1; i <= numRows; i++) {
            int interval = i == numRows ? group : 2 * numRows - 2 * i;
            int idx = i - 1;
            while (idx < s.length()) {
                ans.append(s.charAt(idx));
                idx += interval;
                interval = group - interval;
                if (interval == 0) {
                    interval = group;
                }
            }
        }
        return ans.toString();
    }
}
```

<br>
<br>
<br>

# [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string)

## Description

<p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> haystack = &quot;sadbutsad&quot;, needle = &quot;sad&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> &quot;sad&quot; occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> haystack = &quot;leetcode&quot;, needle = &quot;leeto&quot;
<strong>Output:</strong> -1
<strong>Explanation:</strong> &quot;leeto&quot; did not occur in &quot;leetcode&quot;, so we return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup></code></li>
 <li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</li>
</ul>

## Solutions

### Solution 1: Traversal

We compare the string `needle` with each character of the string `haystack` as the starting point. If we find a matching index, we return it directly.

Assuming the length of the string `haystack` is `n` and the length of the string `needle` is `m`, the time complexity is `O((n-m) \times m)`, and the space complexity is `O(1)`.

#### Java

```java
class Solution {
    public int strStr(String haystack, String needle) {
        if ("".equals(needle)) {
            return 0;
        }

        int len1 = haystack.length();
        int len2 = needle.length();
        int p = 0;
        int q = 0;
        while (p < len1) {
            if (haystack.charAt(p) == needle.charAt(q)) {
                if (len2 == 1) {
                    return p;
                }
                ++p;
                ++q;
            } else {
                p -= q - 1;
                q = 0;
            }

            if (q == len2) {
                return p - q;
            }
        }
        return -1;
    }
}
```

<br>
<br>
<br>

# [68. Text Justification](https://leetcode.com/problems/text-justification)

## Description

<p>Given an array of strings <code>words</code> and a width <code>maxWidth</code>, format the text such that each line has exactly <code>maxWidth</code> characters and is fully (left and right) justified.</p>

<p>You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces <code>&#39; &#39;</code> when necessary so that each line has exactly <code>maxWidth</code> characters.</p>

<p>Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.</p>

<p>For the last line of text, it should be left-justified, and no extra space is inserted between words.</p>

<p><strong>Note:</strong></p>

<ul>
 <li>A word is defined as a character sequence consisting of non-space characters only.</li>
 <li>Each word&#39;s length is guaranteed to be greater than <code>0</code> and not exceed <code>maxWidth</code>.</li>
 <li>The input array <code>words</code> contains at least one word.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;This&quot;, &quot;is&quot;, &quot;an&quot;, &quot;example&quot;, &quot;of&quot;, &quot;text&quot;, &quot;justification.&quot;], maxWidth = 16
<strong>Output:</strong>
[
&nbsp; &nbsp;&quot;This &nbsp; &nbsp;is &nbsp; &nbsp;an&quot;,
&nbsp; &nbsp;&quot;example &nbsp;of text&quot;,
&nbsp; &nbsp;&quot;justification. &nbsp;&quot;
]</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;What&quot;,&quot;must&quot;,&quot;be&quot;,&quot;acknowledgment&quot;,&quot;shall&quot;,&quot;be&quot;], maxWidth = 16
<strong>Output:</strong>
[
&nbsp; &quot;What &nbsp; must &nbsp; be&quot;,
&nbsp; &quot;acknowledgment &nbsp;&quot;,
&nbsp; &quot;shall be &nbsp; &nbsp; &nbsp; &nbsp;&quot;
]
<strong>Explanation:</strong> Note that the last line is &quot;shall be    &quot; instead of &quot;shall     be&quot;, because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;Science&quot;,&quot;is&quot;,&quot;what&quot;,&quot;we&quot;,&quot;understand&quot;,&quot;well&quot;,&quot;enough&quot;,&quot;to&quot;,&quot;explain&quot;,&quot;to&quot;,&quot;a&quot;,&quot;computer.&quot;,&quot;Art&quot;,&quot;is&quot;,&quot;everything&quot;,&quot;else&quot;,&quot;we&quot;,&quot;do&quot;], maxWidth = 20
<strong>Output:</strong>
[
&nbsp; &quot;Science &nbsp;is &nbsp;what we&quot;,
  &quot;understand &nbsp; &nbsp; &nbsp;well&quot;,
&nbsp; &quot;enough to explain to&quot;,
&nbsp; &quot;a &nbsp;computer. &nbsp;Art is&quot;,
&nbsp; &quot;everything &nbsp;else &nbsp;we&quot;,
&nbsp; &quot;do &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;
]</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>1 &lt;= words.length &lt;= 300</code></li>
 <li><code>1 &lt;= words[i].length &lt;= 20</code></li>
 <li><code>words[i]</code> consists of only English letters and symbols.</li>
 <li><code>1 &lt;= maxWidth &lt;= 100</code></li>
 <li><code>words[i].length &lt;= maxWidth</code></li>
</ul>

## Solutions

### Solution 1: Simulation

We can simulate the process according to the problem's requirements. Note that if it is the last line, or if there is only one word in the line, then we should align to the left. Otherwise, we should distribute the spaces evenly.

The time complexity is `O(L)`, and the space complexity is `O(L)`. Here, `L` is the sum of the lengths of all words.

#### Java

```java
class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> ans = new ArrayList<>();
        for (int i = 0, n = words.length; i < n;) {
            List<String> t = new ArrayList<>();
            t.add(words[i]);
            int cnt = words[i].length();
            ++i;
            while (i < n && cnt + 1 + words[i].length() <= maxWidth) {
                cnt += 1 + words[i].length();
                t.add(words[i++]);
            }
            if (i == n || t.size() == 1) {
                String left = String.join(" ", t);
                String right = " ".repeat(maxWidth - left.length());
                ans.add(left + right);
                continue;
            }
            int spaceWidth = maxWidth - (cnt - t.size() + 1);
            int w = spaceWidth / (t.size() - 1);
            int m = spaceWidth % (t.size() - 1);
            StringBuilder row = new StringBuilder();
            for (int j = 0; j < t.size() - 1; j++) {
                row.append(t.get(j));
                row.append(" ".repeat(w + (j < m ? 1 : 0)));
            }
            row.append(t.get(t.size() - 1));
            ans.add(row.toString());
        }
        return ans;
    }
}
```
