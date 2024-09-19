---
title: "Kadane's Algorithm"
description: "All solutions leetcode Top Interview 150 Kadane's Algorithm Solutions"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/EVkdbswY3tLf1n5D-%2523baglung.jpeg?w=750&h=750"
---

# [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray)

## Description

<p>Given an integer array <code>nums</code>, find the <span data-keyword="subarray-nonempty">subarray</span> with the largest sum, and return <em>its sum</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The subarray [4,-1,2,1] has the largest sum 6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The subarray [1] has the largest sum 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,4,-1,7,8]
<strong>Output:</strong> 23
<strong>Explanation:</strong> The subarray [5,4,-1,7,8] has the largest sum 23.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution using the <strong>divide and conquer</strong> approach, which is more subtle.</p>

# Solutions

# Maximum Subarray

**Algorithm Used:** Divide and Conquer

## Intuition
To find the maximum sum of a contiguous subarray efficiently, we use the divide and conquer approach. This approach divides the problem into smaller subproblems, solves each subproblem recursively, and combines the results.

## Approach

1. **Divide**:
   - Split the array into two halves: left and right.

2. **Conquer**:
   - Recursively find the maximum subarray sum in the left half.
   - Recursively find the maximum subarray sum in the right half.

3. **Combine**:
   - Find the maximum sum of a subarray that crosses the midpoint, which involves:
     - Finding the maximum sum of a subarray that extends from the left half to the midpoint.
     - Finding the maximum sum of a subarray that extends from the midpoint to the right half.
   - Combine these results to get the maximum sum of a subarray that crosses the midpoint.

4. **Result**:
   - Return the maximum value among the maximum sums from the left half, right half, and crossing subarray.

#### Java

```java
class Solution {
    public int maxSubArray(int[] nums) {
        return maxSub(nums, 0, nums.length - 1);
    }

    private int maxSub(int[] nums, int left, int right) {
        if (left == right) {
            return nums[left];
        }
        int mid = (left + right) >>> 1;
        int lsum = maxSub(nums, left, mid);
        int rsum = maxSub(nums, mid + 1, right);
        return Math.max(Math.max(lsum, rsum), crossMaxSub(nums, left, mid, right));
    }

    private int crossMaxSub(int[] nums, int left, int mid, int right) {
        int lsum = 0, rsum = 0;
        int lmx = Integer.MIN_VALUE, rmx = Integer.MIN_VALUE;
        for (int i = mid; i >= left; i--) {
            lsum += nums[i];
            lmx = Math.max(lmx, lsum);
        }
        for (int i = mid + 1; i <= right; i++) {
            rsum += nums[i];
            rmx = Math.max(rmx, rsum);
        }
        return lmx + rmx;
    }
}
```

<br>
<br>
<br>

# [918. Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray)

## Description

<p>Given a <strong>circular integer array</strong> <code>nums</code> of length <code>n</code>, return <em>the maximum possible sum of a non-empty <strong>subarray</strong> of </em><code>nums</code>.</p>

<p>A <strong>circular array</strong> means the end of the array connects to the beginning of the array. Formally, the next element of <code>nums[i]</code> is <code>nums[(i + 1) % n]</code> and the previous element of <code>nums[i]</code> is <code>nums[(i - 1 + n) % n]</code>.</p>

<p>A <strong>subarray</strong> may only include each element of the fixed buffer <code>nums</code> at most once. Formally, for a subarray <code>nums[i], nums[i + 1], ..., nums[j]</code>, there does not exist <code>i &lt;= k1</code>, <code>k2 &lt;= j</code> with <code>k1 % n == k2 % n</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,-2,3,-2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Subarray [3] has maximum sum 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,-3,5]
<strong>Output:</strong> 10
<strong>Explanation:</strong> Subarray [5,5] has maximum sum 5 + 5 = 10.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [-3,-2,-3]
<strong>Output:</strong> -2
<strong>Explanation:</strong> Subarray [-2] has maximum sum -2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></li>
</ul>

# Solutions

# Maximum Subarray Sum with Circular Array

**Algorithm Used:** Kadane's Algorithm with Circular Array Adjustment

## Intuition
The problem is to find the maximum sum of a subarray in a circular array. This means the subarray can wrap around from the end of the array back to the beginning. To solve this, we need to consider both linear and circular subarrays.

## Approach

1. **Kadane's Algorithm for Maximum Subarray Sum (Linear Case)**:
   - Use Kadane's Algorithm to find the maximum sum of a subarray in a linear array. This will help in identifying the maximum subarray sum when the subarray does not wrap around.

2. **Circular Array Adjustment**:
   - To handle the circular nature of the array, calculate the total sum of the array.
   - Find the minimum subarray sum using a modified version of Kadane's Algorithm.
   - The maximum circular subarray sum is then computed as the total sum of the array minus the minimum subarray sum. This is because the circular subarray is effectively the complement of the minimum subarray in the linear case.

3. **Combine Results**:
   - The final result is the maximum of the linear case result and the circular case result. This accounts for both scenarios where the subarray might or might not wrap around.
#### Java

```java
class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        final int inf = 1 << 30;
        int pmi = 0, pmx = -inf;
        int ans = -inf, s = 0, smi = inf;
        for (int x : nums) {
            s += x;
            ans = Math.max(ans, s - pmi);
            smi = Math.min(smi, s - pmx);
            pmi = Math.min(pmi, s);
            pmx = Math.max(pmx, s);
        }
        return Math.max(ans, s - smi);
    }
}
```
