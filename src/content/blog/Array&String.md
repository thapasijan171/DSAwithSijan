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

# Merge Sorted Arrays

# Intuition
We need to merge two sorted arrays, `nums1` and `nums2`, into a single sorted array. The challenge is to do this efficiently in-place, meaning we should avoid using extra space.

# Approach
1. **Initialize Pointers:**
   - Use three pointers: `i` to track the end of the valid elements in `nums1`, `j` to track the end of `nums2`, and `k` to track the end of the merged array.

2. **Merge from the End:**
   - Compare elements from the end of `nums1` and `nums2`. Place the larger element at the end of `nums1` and move the respective pointer.
   - Continue this process until all elements from `nums2` are merged into `nums1`.

3. **Handle Remaining Elements:**
 

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

# Remove Element

## Problem Statement
Given an array `nums` and a value `val`, remove all occurrences of `val` in `nums` in-place. The relative order of the elements may be changed. You should also return the new length of the array after removing the element.

## Approach
The approach is to use a two-pointer technique to overwrite elements in-place. We maintain a pointer `k` that tracks the position to insert the next element that is not equal to `val`. As we iterate through the array, whenever an element is not equal to `val`, we place it at the position indicated by `k` and then increment `k`.

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

# Remove Duplicates from Sorted Array

## Problem Description
Given a sorted array `nums`, remove the duplicates in-place such that each element appears only once and returns the new length of the array.

## Approach
1. Initialize a variable `k` to keep track of the position to insert non-duplicate elements.
2. Iterate through each element of the array:
   - If `k` is `0` or the current element is not equal to the previous element, update the position `k` with the current element and increment `k`.
3. Return the value of `k`, which represents the length of the array with unique elements.


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

# Remove Duplicates from Sorted Array II

## Intuition
The objective is to modify a sorted array such that each element appears at most twice. This problem is a variation of the "Remove Duplicates from Sorted Array" where duplicates are allowed up to two times.

## Approach
We will use a single pass approach with an index to manage where the next unique element (up to twice) should be placed in the array.

1. **Initialization**: Start with an index `k` set to 0 to track the position in the result array.
2. **Traversal**: Loop through each element of the array:
   - Add the current element to the result if it can appear up to two times. This is determined by checking if the index `k` is less than 2 or if the current element is different from the element at `nums[k - 2]`.
3. **Update**: Set `nums[k]` to the current element and increment `k`.
4. **Result**: Return `k`, which represents the new length of the array after removing the excess duplicates.

## Example
Given a sorted array `nums = [1, 1, 1, 2, 2, 3]`:
- After processing, the array will be modified to `[1, 1, 2, 2, 3]` with a length of 5, where each element appears at most twice.


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

# Majority Element

## Intuition
The goal is to find the majority element in an array, which is defined as an element that appears more than ⌊n / 2⌋ times in the array.

## Approach
We use the **Boyer-Moore Voting Algorithm** to solve this problem efficiently. The idea is to maintain a candidate element and a counter to keep track of the current majority candidate.

1. **Initialization**: Start with a candidate element `m` and a counter `cnt` set to 0.
2. **Traversal**: Loop through each element of the array:
   - If the counter `cnt` is 0, set the current element as the new candidate and initialize `cnt` to 1.
   - If the counter is not 0, increase or decrease `cnt` based on whether the current element matches the candidate.
3. **Result**: After completing the traversal, the candidate `m` will be the majority element.


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

# Rotate Array

## Intuition
The problem is to rotate an array to the right by `k` steps. A rotation involves shifting elements, and the last elements wrap around to the beginning.

## Approach
To solve this problem efficiently, we use the **Reverse Algorithm**. This approach involves three main steps:

1. **Reverse the Entire Array**: Reverse the entire array to bring the elements that need to be rotated to the front.
2. **Reverse the First Part**: Reverse the first `k` elements (which were originally at the end of the array).
3. **Reverse the Remaining Part**: Reverse the remaining `n - k` elements to restore their original order.

### Steps
1. **Reverse the Array**: Reverse all elements in the array.
2. **Reverse the First k Elements**: Reverse the first `k` elements to place them in their final position.
3. **Reverse the Remaining Elements**: Reverse the remaining elements to place them in their final position.


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

# Maximum Profit

## Intuition
The problem is to find the maximum profit you can achieve from buying and selling a stock, given an array of prices where the `i`-th element represents the price of a stock on the `i`-th day. You are allowed to buy and sell the stock only once.

## Approach
To solve this problem, we use a single pass through the array while keeping track of the minimum price seen so far and the maximum profit achievable.

### Steps
1. **Initialize Variables**:
   - `ans`: to keep track of the maximum profit found so far.
   - `mi`: to store the minimum price encountered so far.

2. **Iterate Through Prices**:
   - For each price in the array, update the maximum profit by comparing the current price minus the minimum price.
   - Update the minimum price if the current price is lower than the previously recorded minimum price.

3. **Return Maximum Profit**: After iterating through all prices, the value in `ans` will be the maximum profit that can be achieved.


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

# Maximum Profit

## Intuition
The problem requires us to calculate the maximum profit from multiple transactions where we can buy and sell the stock multiple times. The key insight is to capture all profitable segments where the price is rising.

## Approach
To solve this problem, we iterate through the array of prices and accumulate profit whenever there's a price increase from the previous day.

### Steps
1. **Initialize Variables**:
   - `ans`: to keep track of the total profit accumulated.

2. **Iterate Through Prices**:
   - For each price, if it's higher than the previous day's price, add the difference to `ans` (i.e., profit from the transaction).

3. **Return Total Profit**: After iterating through all prices, `ans` will contain the total maximum profit.


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

# Spiral Order Matrix

## Intuition
The goal is to traverse a matrix in a spiral order and collect all elements. We need to handle direction changes when we encounter the boundaries or already visited cells.

## Approach
### Steps
1. **Initialization**:
   - Define the directions for movement: right, down, left, and up.
   - Initialize indices for current position and direction.
   - Use a boolean matrix to keep track of visited cells.
   
2. **Traversal**:
   - Iterate over all cells in the matrix.
   - Add the current cell's value to the result list.
   - Check if the next cell in the current direction is valid and not visited.
   - If invalid or visited, change direction and continue.
   - Update the current position based on the new direction.

3. **Return**:
   - Return the list of elements collected in spiral order.


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

# Jump Game II

## Intuition
The task is to find the minimum number of jumps needed to reach the last index of the array. We need to ensure that each jump takes us as far as possible to minimize the total number of jumps.

## Approach
### Steps
1. **Initialization**:
   - Define variables for the number of jumps (`ans`), the maximum reach within the current jump (`mx`), and the last index of the current jump (`last`).

2. **Traversal**:
   - Iterate through each index of the array (excluding the last one).
   - Update the maximum reach (`mx`) for the current jump.
   - When the current index (`i`) reaches the `last` index of the current jump, increment the jump count and update the `last` index to the maximum reach (`mx`).

3. **Return**:
   - Return the total number of jumps needed to reach the last index.


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

# H-Index

## Intuition
The H-index is a metric used to measure the productivity and citation impact of a researcher's publications. To determine the H-index, we need to find the highest number `h` such that the researcher has at least `h` papers with `h` or more citations.

## Approach
### Steps
1. **Initialization**:
   - Define two pointers, `l` (left) and `r` (right), where `l` starts at 0 and `r` is the length of the `citations` array.

2. **Binary Search**:
   - Perform a binary search to determine the maximum H-index:
     - Calculate the middle value `mid` as `(l + r + 1) >> 1`.
     - Count the number of papers with at least `mid` citations.
     - If this count is greater than or equal to `mid`, update `l` to `mid`.
     - Otherwise, update `r` to `mid - 1`.

3. **Return**:
   - After the binary search concludes, `l` will hold the maximum H-index.



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

# Randomized Set

## Intuition
The `RandomizedSet` class supports three operations:
- `insert(val)`: Inserts a value into the set if it is not already present.
- `remove(val)`: Removes a value from the set if it is present.
- `getRandom()`: Retrieves a random element from the set with equal probability.

## Approach
### Steps

1. **Insert Operation**:
   - Check if the value `val` is already in the set using a HashMap `d`.
   - If it is not present, add `val` to the list `q` and update the HashMap `d` to map `val` to its index in the list.
   - Return `true` if the insertion is successful; otherwise, return `false`.

2. **Remove Operation**:
   - Check if the value `val` exists in the HashMap `d`.
   - If it exists, get its index from `d`, and update the last element in the list `q` to replace `val`.
   - Update the HashMap `d` to reflect this change.
   - Remove the last element from the list and the entry from the HashMap `d`.
   - Return `true` if the removal is successful; otherwise, return `false`.

3. **Get Random Operation**:
   - Use the `Random` class to generate a random index and return the element at that index from the list `q`.


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

# Product of Array Except Self

## Intuition
The `productExceptSelf` method calculates the product of all elements in an array except the element at the current index, without using division.

## Approach
### Steps

1. **Initialize**:
   - Create an array `ans` of the same length as the input `nums` to store the results.
   - Iterate through the array from left to right to calculate the product of elements to the left of each index.

2. **Calculate Left Products**:
   - Initialize a variable `left` to 1 (the multiplicative identity).
   - For each element at index `i`, store the current value of `left` in `ans[i]`.
   - Update `left` by multiplying it with `nums[i]`.

3. **Calculate Right Products and Update Result**:
   - Initialize a variable `right` to 1 (the multiplicative identity).
   - Iterate through the array from right to left.
   - For each element at index `i`, multiply `ans[i]` by `right` to include the product of elements to the right of `i`.
   - Update `right` by multiplying it with `nums[i]`.

4. **Return the Result**:
   - The `ans` array now contains the product of all elements except the element at each index.

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

# Candy Distribution

## Intuition
The `candy` method distributes candies to children such that:
1. Each child gets at least one candy.
2. Children with a higher rating receive more candies than their neighbors with a lower rating.

## Approach
### Steps

1. **Initialization**:
   - Create two arrays, `left` and `right`, both initialized with `1`. These will store the number of candies needed based on comparisons from left and right respectively.

2. **Left Pass**:
   - Traverse the `ratings` array from left to right.
   - If the current child's rating is greater than the previous child's rating, update `left[i]` to be `left[i - 1] + 1`. This ensures that each child with a higher rating gets more candies than their left neighbor.

3. **Right Pass**:
   - Traverse the `ratings` array from right to left.
   - If the current child's rating is greater than the next child's rating, update `right[i]` to be `right[i + 1] + 1`. This ensures that each child with a higher rating gets more candies than their right neighbor.

4. **Calculate Result**:
   - Iterate through the `ratings` array and for each child, take the maximum of candies from the `left` and `right` arrays to get the total number of candies required.

5. **Return Result**:
   - Sum up the maximum values from the `left` and `right` arrays for each child to get the total number of candies needed.


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

# Trapping Rain Water

## Intuition
The `trap` method calculates the amount of water that can be trapped between the bars after raining, based on the height of the bars.

## Approach
### Steps

1. **Initialization**:
   - Create two arrays, `left` and `right`, both of length `n` (the number of bars). 
   - `left[i]` represents the maximum height of bars from the left up to index `i`.
   - `right[i]` represents the maximum height of bars from the right up to index `i`.

2. **Fill `left` and `right` Arrays**:
   - **Left Array**:
     - Initialize `left[0]` with `height[0]`.
     - Traverse from left to right, updating `left[i]` to be the maximum of `left[i - 1]` and `height[i]`.
   - **Right Array**:
     - Initialize `right[n - 1]` with `height[n - 1]`.
     - Traverse from right to left, updating `right[n - i - 1]` to be the maximum of `right[n - i]` and `height[n - i - 1]`.

3. **Calculate Trapped Water**:
   - Traverse through each index `i` and calculate the trapped water at that index as `Math.min(left[i], right[i]) - height[i]`.
   - Sum up the trapped water for all indices to get the total amount of water trapped.

4. **Return Result**:
   - Return the total amount of trapped water.

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

# Roman to Integer

## Intuition
The `romanToInt` method converts a Roman numeral string into its corresponding integer value. Roman numerals are based on seven symbols: I, V, X, L, C, D, and M, which represent values from 1 to 1000.

## Approach
### Steps

1. **Initialize Mappings**:
   - Create a string `cs` containing the Roman numeral symbols in the order of their values.
   - Create an array `vs` containing the corresponding integer values for each symbol.
   - Use a `Map` to associate each Roman numeral symbol with its integer value.

2. **Calculate Integer Value**:
   - Initialize the result with the value of the last Roman numeral in the string.
   - Traverse through the Roman numeral string from left to right, comparing the value of each symbol with the value of the next symbol.
   - If the value of the current symbol is less than the value of the next symbol, subtract its value from the result (indicating a subtractive combination like IV). Otherwise, add its value to the result.

3. **Return Result**:
   - Return the final integer value computed from the Roman numeral string.

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

# Integer to Roman

## Intuition
The `intToRoman` method converts an integer into its corresponding Roman numeral string. Roman numerals are represented by specific symbols and combinations of symbols that form a numeral system.

## Approach
### Steps

1. **Initialize Mappings**:
   - Create a list `cs` containing Roman numeral symbols in descending order of their values.
   - Create a list `vs` containing corresponding integer values in the same order.

2. **Convert Integer to Roman**:
   - Initialize an empty `StringBuilder` to build the resulting Roman numeral string.
   - Iterate through the list of integer values.
   - For each value, repeatedly subtract it from the integer `num` and append the corresponding Roman numeral symbol to the `StringBuilder` until `num` is smaller than the current value.

3. **Return Result**:
   - Convert the `StringBuilder` to a string and return it as the final Roman numeral representation.

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

# Integer to Roman

## Intuition
The `intToRoman` method converts an integer to its equivalent Roman numeral representation. Roman numerals use specific symbols for different values, and combining these symbols in a certain order represents different numbers.

## Approach
### Steps

1. **Initialize Mappings**:
   - Create a list `cs` of Roman numeral symbols ordered from highest to lowest value.
   - Create a list `vs` of corresponding integer values in the same order.

2. **Conversion Process**:
   - Initialize an empty `StringBuilder` to construct the Roman numeral string.
   - Iterate through the integer values in the list `vs`.
   - For each integer value, subtract it from `num` and append the corresponding Roman numeral symbol from `cs` to the `StringBuilder` until `num` is smaller than the current integer value.

3. **Return Result**:
   - Convert the `StringBuilder` to a string and return it.

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

# Longest Common Prefix

## Intuition
The `longestCommonPrefix` method finds the longest common prefix string shared among an array of strings. The approach is to compare characters of each string at the same position and determine the longest sequence of matching characters.

## Approach
### Steps

1. **Initial Check**:
   - Iterate through each character position of the first string in the array.

2. **Compare Characters**:
   - For each position, check the character against the corresponding position in all other strings.
   - If a mismatch is found or if a string is shorter than the current position, return the substring of the first string up to the current position.

3. **Return Result**:
   - If the loop completes without finding a mismatch, return the entire first string as it is a common prefix for all strings.

#### Java

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        int n = strs.length;
        for (int i = 0; i < strs[0].length(); i++) {
            for (int j = 1; j < n; j++) {
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

# Reverse Words in a String

## Intuition
The `reverseWords` method aims to reverse the order of words in a given string while maintaining the original word order. It processes the string to extract words, reverses the list of words, and then joins them back into a single string.

## Approach
### Steps

1. **Extract Words**:
   - Traverse the string and extract non-space sequences as words. Skip over spaces and accumulate characters for each word.

2. **Reverse Word List**:
   - Use a `List<String>` to store words and then reverse the list to arrange words in reverse order.

3. **Join Words**:
   - Join the reversed list of words with a single space separator to form the final result string.

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

# Zigzag Conversion

## Intuition
The `convert` method is designed to convert a string into a zigzag pattern on a given number of rows and then read the string line by line. This approach involves simulating the zigzag traversal of the string and reconstructing it based on the zigzag pattern.

## Approach
### Steps

1. **Edge Case Handling**:
   - If the number of rows is `1`, return the original string since no zigzag conversion is needed.

2. **Initialization**:
   - Create an array of `StringBuilder` objects to hold characters for each row.

3. **Traversal and Zigzag Simulation**:
   - Iterate through the characters of the string. Append each character to the corresponding `StringBuilder` based on the current row index.
   - Toggle the direction (up or down) when reaching the first or last row.

4. **Concatenate Results**:
   - Join all `StringBuilder` objects into a single string to get the final zigzag-converted result.

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

# Implement strStr()

## Intuition
The `strStr` method aims to find the first occurrence of a substring (`needle`) within a string (`haystack`). If `needle` is an empty string, the method returns `0`. The approach is to simulate the search manually without using built-in functions.

## Approach
### Steps

1. **Edge Case Handling**:
   - If `needle` is an empty string, return `0` immediately since an empty substring is trivially found at the beginning.

2. **Initialization**:
   - Obtain the lengths of `haystack` and `needle`.
   - Use two indices, `p` and `q`, to track positions in `haystack` and `needle`, respectively.

3. **Search Process**:
   - Iterate through `haystack` using index `p`.
   - When characters match (`haystack[p] == needle[q]`), increment both indices.
     - If `needle` is fully matched (`q == len2`), return the starting index of the match.
   - If characters do not match, reset `p` to the position after the last matched character and reset `q` to `0`.

4. **Return Result**:
   - If no match is found by the end of `haystack`, return `-1`.

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

# Full Justify

## Intuition
The `fullJustify` method is designed to format text to fit a given width, aligning the text so that each line is exactly `maxWidth` characters long. If a line can’t be perfectly justified, the method should align the text to the left and pad the rest with spaces.

## Approach
### Steps

1. **Initialization**:
   - Create a list `ans` to store the fully justified lines of text.

2. **Iterate Through Words**:
   - Start iterating through the `words` array. For each position `i`, gather words that can fit within `maxWidth`.

3. **Determine Line Words**:
   - Use a temporary list `t` to collect words for the current line.
   - Keep track of the total character count `cnt` including spaces between words.

4. **Handle Line End**:
   - When a line is full or the end of the array is reached:
     - If it's the last line or it contains only one word, left-justify it and add the necessary trailing spaces.
     - Otherwise, distribute spaces evenly between words:
       - Calculate the number of spaces between words (`w`) and any extra spaces (`m`) that need to be added.
       - Build the justified line with the calculated spacing.

5. **Return Result**:
   - Add the constructed line to the result list `ans`.
   - Continue until all words are processed.

6. **Output**:
   - Return the list `ans` containing all the fully justified lines.

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
