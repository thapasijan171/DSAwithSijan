---
title: "Binary Search"
description: "All solutions leetcode Top Interview 150 Binary Search"
pubDate: "2024"
heroImage: "../img/img_blog/binarysearch.jpeg"
---

# [35. Search Insert Position](https://leetcode.com/problems/search-insert-position)

## Description

<p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>

<p>You must&nbsp;write an algorithm with&nbsp;<code>O(log n)</code> runtime complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,5,6], target = 5
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,5,6], target = 2
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,5,6], target = 7
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.</li>
	<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>
</ul>


# Solutions

# Search Insert Position

## Intuition
The `searchInsert` method determines the index at which a target value should be inserted into a sorted array to maintain the array's sorted order. If the target value is already present in the array, the method returns the index of the target.

## Approach
### Steps

1. **Initialize Pointers**:
   - Define two pointers: `l` (left) and `r` (right) to represent the search range. Initially, set `l` to 0 and `r` to the length of the array.

2. **Binary Search**:
   - **Loop Until Convergence**:
     - While `l` is less than `r`, calculate the middle index `mid` using bitwise right shift to avoid overflow.
     - **Compare**:
       - If the value at `nums[mid]` is greater than or equal to the `target`, update the right pointer `r` to `mid`. This means the target could be at `mid` or in the left subarray.
       - Otherwise, update the left pointer `l` to `mid + 1`. This means the target must be in the right subarray.
   - **End of Search**:
     - When `l` equals `r`, the loop terminates, and `l` will be the correct insertion index for the `target`.

3. **Return the Result**:
   - Return the value of `l`, which represents the position where the `target` should be inserted.


#### Java

```java
class Solution {
    public int searchInsert(int[] nums, int target) {
        int l = 0, r = nums.length;
        while (l < r) {
            int mid = (l + r) >>> 1;
            if (nums[mid] >= target) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    }
}
```

<br>
<br>
<br>

# [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix)

## Description

<p>You are given an <code>m x n</code> integer matrix <code>matrix</code> with the following two properties:</p>

<ul>
	<li>Each row is sorted in non-decreasing order.</li>
	<li>The first integer of each row is greater than the last integer of the previous row.</li>
</ul>

<p>Given an integer <code>target</code>, return <code>true</code> <em>if</em> <code>target</code> <em>is in</em> <code>matrix</code> <em>or</em> <code>false</code> <em>otherwise</em>.</p>

<p>You must write a solution in <code>O(log(m * n))</code> time complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0074.Search%20a%202D%20Matrix/images/mat.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0074.Search%20a%202D%20Matrix/images/mat2.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
	<li><code>-10<sup>4</sup> &lt;= matrix[i][j], target &lt;= 10<sup>4</sup></code></li>
</ul>

# Solutions

# Search a 2D Matrix

## Intuition
The `searchMatrix` method searches for a target value in a 2D matrix that is sorted in ascending order both row-wise and column-wise. It uses binary search on a 1D representation of the 2D matrix to determine if the target value exists in the matrix.

## Approach
### Steps

1. **Initialize Pointers**:
   - Define two pointers: `left` and `right`. `left` starts at 0, and `right` is initialized to the last index of the matrix when flattened into a 1D array (`m * n - 1`).

2. **Binary Search**:
   - **Loop Until Convergence**:
     - While `left` is less than `right`, calculate the middle index `mid` using bitwise right shift.
     - Convert the 1D index `mid` back to 2D coordinates using:
       - `x = mid / n` (row index)
       - `y = mid % n` (column index)
     - **Compare**:
       - If `matrix[x][y]` is greater than or equal to the `target`, update the right pointer `right` to `mid`. This means the target could be at `mid` or in the left subarray.
       - Otherwise, update the left pointer `left` to `mid + 1`. This means the target must be in the right subarray.

3. **Final Check**:
   - When `left` equals `right`, check if the element at the 2D coordinates derived from `left` matches the `target`.

4. **Return Result**:
   - Return `true` if the element at the calculated position matches the `target`, otherwise return `false`.


#### Java

```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length, n = matrix[0].length;
        int left = 0, right = m * n - 1;
        while (left < right) {
            int mid = (left + right) >> 1;
            int x = mid / n, y = mid % n;
            if (matrix[x][y] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return matrix[left / n][left % n] == target;
    }
}
```


<br>
<br>
<br>

# [162. Find Peak Element](https://leetcode.com/problems/find-peak-element)

## Description

<p>A peak element is an element that is strictly greater than its neighbors.</p>

<p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, find a peak element, and return its index. If the array contains multiple peaks, return the index to <strong>any of the peaks</strong>.</p>

<p>You may imagine that <code>nums[-1] = nums[n] = -&infin;</code>. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.</p>

<p>You must write an algorithm that runs in <code>O(log n)</code> time.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 3 is a peak element and your function should return the index number 2.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,1,3,5,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>nums[i] != nums[i + 1]</code> for all valid <code>i</code>.</li>
</ul>

# Solutions

# Find Peak Element

## Intuition
The `findPeakElement` method finds a peak element in a given integer array where a peak element is an element that is greater than its neighbors. It uses binary search to efficiently locate a peak element.

## Approach
### Steps

1. **Initialize Pointers**:
   - Define two pointers: `left` and `right`. `left` starts at 0, and `right` starts at `nums.length - 1`.

2. **Binary Search**:
   - **Loop Until Convergence**:
     - While `left` is less than `right`, calculate the middle index `mid` using bitwise right shift.
     - **Compare**:
       - If `nums[mid]` is greater than `nums[mid + 1]`, it means a peak element must be on the left side (including `mid`). Therefore, update the `right` pointer to `mid`.
       - Otherwise, update the `left` pointer to `mid + 1` because a peak element must be on the right side.

3. **Return Result**:
   - When `left` equals `right`, return the `left` (or `right`) pointer which will be pointing to a peak element.

### Notes
- The array is guaranteed to have at least one peak element due to the edge cases at the boundaries.
- This approach efficiently finds a peak element in `O(log n)` time complexity.

#### Java

```java
class Solution {
    public int findPeakElement(int[] nums) {
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int mid = (left + right) >> 1;
            if (nums[mid] > nums[mid + 1]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
```

<br>
<br>
<br>

# [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)

## Description

<p>There is an integer array <code>nums</code> sorted in ascending order (with <strong>distinct</strong> values).</p>

<p>Prior to being passed to your function, <code>nums</code> is <strong>possibly rotated</strong> at an unknown pivot index <code>k</code> (<code>1 &lt;= k &lt; nums.length</code>) such that the resulting array is <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code> (<strong>0-indexed</strong>). For example, <code>[0,1,2,4,5,6,7]</code> might be rotated at pivot index <code>3</code> and become <code>[4,5,6,7,0,1,2]</code>.</p>

<p>Given the array <code>nums</code> <strong>after</strong> the possible rotation and an integer <code>target</code>, return <em>the index of </em><code>target</code><em> if it is in </em><code>nums</code><em>, or </em><code>-1</code><em> if it is not in </em><code>nums</code>.</p>

<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [4,5,6,7,0,1,2], target = 0
<strong>Output:</strong> 4
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [4,5,6,7,0,1,2], target = 3
<strong>Output:</strong> -1
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1], target = 0
<strong>Output:</strong> -1
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5000</code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li>All values of <code>nums</code> are <strong>unique</strong>.</li>
	<li><code>nums</code> is an ascending array that is possibly rotated.</li>
	<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>
</ul>

# Solutions

# Search in Rotated Sorted Array

## Intuition
The `search` method finds the index of a target value in a rotated sorted array. The array is initially sorted in ascending order but then rotated. This method leverages binary search to efficiently find the target value.

## Approach
### Steps

1. **Initialize Pointers**:
   - Define two pointers: `left` starting at 0 and `right` starting at `nums.length - 1`.

2. **Binary Search with Rotation Handling**:
   - **Loop Until Convergence**:
     - Calculate the middle index `mid` using bitwise right shift.
     - **Determine Sorted Half**:
       - If the left half of the array (`nums[0]` to `nums[mid]`) is sorted:
         - Check if the target is within this sorted half. If yes, adjust the `right` pointer to `mid`. Otherwise, adjust the `left` pointer to `mid + 1`.
       - If the right half (`nums[mid]` to `nums[n - 1]`) is sorted:
         - Check if the target is within this sorted half. If yes, adjust the `left` pointer to `mid + 1`. Otherwise, adjust the `right` pointer to `mid`.

3. **Return Result**:
   - After the loop, check if `nums[left]` equals the target. If true, return `left`; otherwise, return -1.

### Notes
- The array is rotated, but at least one half of the array remains sorted. This property helps in deciding which half of the array to continue searching.
- This approach finds the target in `O(log n)` time complexity.


#### Java

```java
class Solution {
    public int search(int[] nums, int target) {
        int n = nums.length;
        int left = 0, right = n - 1;
        while (left < right) {
            int mid = (left + right) >> 1;
            if (nums[0] <= nums[mid]) {
                if (nums[0] <= target && target <= nums[mid]) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[n - 1]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
        }
        return nums[left] == target ? left : -1;
    }
}
```

<br>
<br>
<br>

# [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)

## Description

<p>Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value.</p>

<p>If <code>target</code> is not found in the array, return <code>[-1, -1]</code>.</p>

<p>You must&nbsp;write an algorithm with&nbsp;<code>O(log n)</code> runtime complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 8
<strong>Output:</strong> [3,4]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 6
<strong>Output:</strong> [-1,-1]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [], target = 0
<strong>Output:</strong> [-1,-1]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup>&nbsp;&lt;= nums[i]&nbsp;&lt;= 10<sup>9</sup></code></li>
	<li><code>nums</code> is a non-decreasing array.</li>
	<li><code>-10<sup>9</sup>&nbsp;&lt;= target&nbsp;&lt;= 10<sup>9</sup></code></li>
</ul>

# Solutions

# Search Range in Sorted Array

## Intuition
The `searchRange` method finds the starting and ending positions of a given target value in a sorted array. It uses binary search to efficiently locate the range of the target value.

## Approach
### Steps

1. **Find the Starting Position**:
   - Use the `search` helper method to find the first position where `target` could be inserted to maintain the sorted order.

2. **Find the Ending Position**:
   - Use the `search` helper method to find the first position where `target + 1` could be inserted. This effectively gives the position just after the last occurrence of `target`.

3. **Determine the Range**:
   - If the starting and ending positions are the same, it means the target is not present in the array, so return `[-1, -1]`.
   - Otherwise, return the range from the starting position to one less than the ending position.

### Helper Method: `search`
The `search` method performs a binary search to find the position of the given value `x` or the position where it could be inserted.

- **Initialization**: Set `left` to 0 and `right` to the length of the array.
- **Binary Search**:
  - Calculate the middle index `mid`.
  - If `nums[mid] >= x`, update `right` to `mid`.
  - Otherwise, update `left` to `mid + 1`.
- **Return**: After the loop, `left` will be the insertion point.

### Example
For an array `[5, 7, 7, 8, 8, 10]` and target `8`:
- The starting index of `8` is `3`.
- The position of `9` (i.e., `8 + 1`) is `5`, so the ending index of `8` is `5 - 1 = 4`.

The result will be `[3, 4]`.

#### Java

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int l = search(nums, target);
        int r = search(nums, target + 1);
        return l == r ? new int[] {-1, -1} : new int[] {l, r - 1};
    }

    private int search(int[] nums, int x) {
        int left = 0, right = nums.length;
        while (left < right) {
            int mid = (left + right) >>> 1;
            if (nums[mid] >= x) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
```

<br>
<br>
<br>

# [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)

## Description

<p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,2,4,5,6,7]</code> might become:</p>

<ul>
	<li><code>[4,5,6,7,0,1,2]</code> if it was rotated <code>4</code> times.</li>
	<li><code>[0,1,2,4,5,6,7]</code> if it was rotated <code>7</code> times.</li>
</ul>

<p>Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.</p>

<p>Given the sorted rotated array <code>nums</code> of <strong>unique</strong> elements, return <em>the minimum element of this array</em>.</p>

<p>You must write an algorithm that runs in&nbsp;<code>O(log n) time.</code></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,4,5,1,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The original array was [1,2,3,4,5] rotated 3 times.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,5,6,7,0,1,2]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [11,13,15,17]
<strong>Output:</strong> 11
<strong>Explanation:</strong> The original array was [11,13,15,17] and it was rotated 4 times. 
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 5000</code></li>
	<li><code>-5000 &lt;= nums[i] &lt;= 5000</code></li>
	<li>All the integers of <code>nums</code> are <strong>unique</strong>.</li>
	<li><code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.</li>
</ul>

# Solutions

# Find Minimum in Rotated Sorted Array

## Intuition
The `findMin` method finds the minimum element in a rotated sorted array. The array was originally sorted in ascending order but has been rotated at an unknown pivot.

## Approach
### Steps

1. **Check if Array is Not Rotated**:
   - If the first element of the array is less than or equal to the last element, the array is not rotated, so the minimum element is the first element.

2. **Binary Search**:
   - If the array is rotated, use binary search to find the pivot where the array is rotated.
   - Initialize `left` to 0 and `right` to the length of the array minus one.
   - In each iteration of the binary search:
     - Calculate the middle index `mid`.
     - If the middle element is greater than or equal to the first element, it means the minimum is to the right of `mid`, so set `left` to `mid + 1`.
     - Otherwise, set `right` to `mid`.
   - After the loop, `left` will point to the minimum element.

#### Java

```java
class Solution {
    public int findMin(int[] nums) {
        int n = nums.length;
        if (nums[0] <= nums[n - 1]) {
            return nums[0];
        }
        int left = 0, right = n - 1;
        while (left < right) {
            int mid = (left + right) >> 1;
            if (nums[0] <= nums[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return nums[left];
    }
}
```

<br>
<br>
<br>

# [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)


## Description

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

# Solutions

# Intuition
To find the median of two sorted arrays, the goal is to partition the arrays such that the left half contains elements smaller than or equal to all elements in the right half. Since the arrays are sorted, the median will be the average of the maximum element in the left half and the minimum element in the right half.

# Approach
1. **Determine the Target Position:** To find the median, we need to identify the middle element(s) in the combined array of `nums1` and `nums2`. The position of the median depends on whether the total number of elements is odd or even. For an odd number of elements, the median is the middle element; for an even number of elements, it is the average of the two middle elements.

2. **Binary Search Method:** We use a binary search to efficiently find the k-th smallest element in the merged array without merging them explicitly. This is done using a helper function `f` which finds the k-th smallest element in the arrays starting from indices `i` and `j`.

3. **Recursive Function:** The function `f` is used to determine the k-th smallest element. It compares elements from the current positions of both arrays and discards half of the elements at each step based on the comparison:
   - If the position `i` in `nums1` has reached the end, the k-th smallest element must be in `nums2`.
   - If the position `j` in `nums2` has reached the end, the k-th smallest element must be in `nums1`.
   - If `k` is 1, return the minimum of the current elements of both arrays.
   - Otherwise, compare the elements at `i + p - 1` in `nums1` and `j + p - 1` in `nums2`, where `p` is half of `k`. Adjust the search range based on the comparison result.

4. **Combine Results:** Compute the median by averaging the results of two calls to `f` to handle both odd and even cases. This ensures accurate results for both scenarios.

The approach efficiently finds the median without merging the arrays, achieving a time complexity of O(log(min(m, n))) where m and n are the sizes of the input arrays.

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