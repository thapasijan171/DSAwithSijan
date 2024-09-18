---
title: "Intervals"
description: "All solutions leetcode Top Interview 150 Intervals Solutions"
pubDate: "Jan 9 2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/wuOwqLcXNQ42MASA-Milan%2520Lohani%2520'Darshan'.jpeg?w=750&h=750"
---

# [228. Summary Ranges](https://leetcode.com/problems/summary-ranges)

## Description

<!-- description:start -->

<p>You are given a <strong>sorted unique</strong> integer array <code>nums</code>.</p>

<p>A <strong>range</strong> <code>[a,b]</code> is the set of all integers from <code>a</code> to <code>b</code> (inclusive).</p>

<p>Return <em>the <strong>smallest sorted</strong> list of ranges that <strong>cover all the numbers in the array exactly</strong></em>. That is, each element of <code>nums</code> is covered by exactly one of the ranges, and there is no integer <code>x</code> such that <code>x</code> is in one of the ranges but not in <code>nums</code>.</p>

<p>Each range <code>[a,b]</code> in the list should be output as:</p>

<ul>
	<li><code>&quot;a-&gt;b&quot;</code> if <code>a != b</code></li>
	<li><code>&quot;a&quot;</code> if <code>a == b</code></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,2,4,5,7]
<strong>Output:</strong> [&quot;0-&gt;2&quot;,&quot;4-&gt;5&quot;,&quot;7&quot;]
<strong>Explanation:</strong> The ranges are:
[0,2] --&gt; &quot;0-&gt;2&quot;
[4,5] --&gt; &quot;4-&gt;5&quot;
[7,7] --&gt; &quot;7&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,2,3,4,6,8,9]
<strong>Output:</strong> [&quot;0&quot;,&quot;2-&gt;4&quot;,&quot;6&quot;,&quot;8-&gt;9&quot;]
<strong>Explanation:</strong> The ranges are:
[0,0] --&gt; &quot;0&quot;
[2,4] --&gt; &quot;2-&gt;4&quot;
[6,6] --&gt; &quot;6&quot;
[8,9] --&gt; &quot;8-&gt;9&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 20</code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li>All the values of <code>nums</code> are <strong>unique</strong>.</li>
	<li><code>nums</code> is sorted in ascending order.</li>
</ul>

# Solutions

## Problem Overview

Given an integer array `nums` and an integer `k`, this program finds the maximum value for each sliding window of size `k`. As the window moves from left to right across the array, it returns a list of the maximum values for each window.

## Approach

This solution uses a **Max-Heap** (Priority Queue) to efficiently track the maximum value within the current sliding window.

### Steps:
1. **Initialize Priority Queue (Max-Heap):**  
   - Use a priority queue (`PriorityQueue<int[]>`) to store pairs of the form `(value, index)`, where `value` is the element in `nums` and `index` tracks its position.
   - The priority queue is organized by value in descending order, so the largest value is always at the top.

2. **Pre-fill the Priority Queue:**  
   - Before processing, the priority queue is filled with the first `k - 1` elements of the array to prepare for the first sliding window.

3. **Sliding Window Processing:**  
   - Iterate through the array from index `k - 1` to the end.
   - For each new element, add it to the priority queue.
   - Remove any elements from the top of the heap that fall outside the current sliding window (i.e., index less than `i - k + 1`).
   - Store the maximum value (top of the heap) for the current window in the result array.

4. **Output the Maximum Values:**  
   - The result array contains the maximum values for each window as the window slides through the array.

#### Java

```java
class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> ans = new ArrayList<>();
        for (int i = 0, j, n = nums.length; i < n; i = j + 1) {
            j = i;
            while (j + 1 < n && nums[j + 1] == nums[j] + 1) {
                ++j;
            }
            ans.add(f(nums, i, j));
        }
        return ans;
    }

    private String f(int[] nums, int i, int j) {
        return i == j ? nums[i] + "" : String.format("%d->%d", nums[i], nums[j]);
    }
}
```

<br>
<br>
<br>

# [56. Merge Intervals](https://leetcode.com/problems/merge-intervals)

## Description

<p>Given an array&nbsp;of <code>intervals</code>&nbsp;where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return <em>an array of the non-overlapping intervals that cover all the intervals in the input</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> intervals = [[1,3],[2,6],[8,10],[15,18]]
<strong>Output:</strong> [[1,6],[8,10],[15,18]]
<strong>Explanation:</strong> Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> intervals = [[1,4],[4,5]]
<strong>Output:</strong> [[1,5]]
<strong>Explanation:</strong> Intervals [1,4] and [4,5] are considered overlapping.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>
	<li><code>intervals[i].length == 2</code></li>
	<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
</ul>

# Solutions

## Problem Overview

Given a collection of intervals, the goal is to merge all overlapping intervals. The result should contain non-overlapping intervals that cover all the intervals from the input.

## Approach

The solution involves sorting the intervals by their starting values and then iterating through the sorted intervals to merge overlapping ones.

### Steps:

1. **Sorting Intervals:**  
   - The intervals are first sorted by their start time. This allows for easier comparison of overlapping intervals.

2. **Iterating and Merging:**
   - Initialize the start (`st`) and end (`ed`) with the first interval's values.
   - Iterate over the remaining intervals:
     - If the current interval's start (`s`) is greater than the previous end (`ed`), it means there is no overlap. Add the previous interval (`st, ed`) to the result and update `st` and `ed` to the current interval's start and end.
     - If there is overlap, update `ed` to the maximum of the current end and the previous end.
   - After processing all intervals, the final interval is added to the result.

3. **Return the Result:**  
   - The result is returned as a list of merged intervals.

## Complexity Analysis

- **Time Complexity:**  
  The time complexity is `O(n log n)` due to sorting the intervals, where `n` is the number of intervals. The subsequent iteration over the intervals is `O(n)`.

- **Space Complexity:**  
  The space complexity is `O(n)` for storing the merged intervals.

#### Java

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
        int st = intervals[0][0], ed = intervals[0][1];
        List<int[]> ans = new ArrayList<>();
        for (int i = 1; i < intervals.length; i++) {
            int s = intervals[i][0], e = intervals[i][1];
            if (ed < s) {
                ans.add(new int[] {st, ed});
                st = s;
                ed = e;
            } else {
                ed = Math.max(ed, e);
            }
        }
        ans.add(new int[] {st, ed});
        return ans.toArray(new int[ans.size()][]);
    }
}
```

<br>
<br>
<br>

# [57. Insert Interval](https://leetcode.com/problems/insert-interval)

## Description

<p>You are given an array of non-overlapping intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the <code>i<sup>th</sup></code> interval and <code>intervals</code> is sorted in ascending order by <code>start<sub>i</sub></code>. You are also given an interval <code>newInterval = [start, end]</code> that represents the start and end of another interval.</p>

<p>Insert <code>newInterval</code> into <code>intervals</code> such that <code>intervals</code> is still sorted in ascending order by <code>start<sub>i</sub></code> and <code>intervals</code> still does not have any overlapping intervals (merge overlapping intervals if necessary).</p>

<p>Return <code>intervals</code><em> after the insertion</em>.</p>

<p><strong>Note</strong> that you don&#39;t need to modify <code>intervals</code> in-place. You can make a new array and return it.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> intervals = [[1,3],[6,9]], newInterval = [2,5]
<strong>Output:</strong> [[1,5],[6,9]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
<strong>Output:</strong> [[1,2],[3,10],[12,16]]
<strong>Explanation:</strong> Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>
	<li><code>intervals[i].length == 2</code></li>
	<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
	<li><code>intervals</code> is sorted by <code>start<sub>i</sub></code> in <strong>ascending</strong> order.</li>
	<li><code>newInterval.length == 2</code></li>
	<li><code>0 &lt;= start &lt;= end &lt;= 10<sup>5</sup></code></li>
</ul>


# Solutions

# Intuition
When given a new interval to insert into a list of existing intervals, the challenge is to maintain the intervals in sorted order and merge any overlapping intervals. The best way to do this is by inserting the new interval into the correct position, and then merging the intervals if necessary.

# Approach
1. **Insert the New Interval:**  
   - Copy the existing intervals into a new array and append the new interval at the end.

2. **Merge Overlapping Intervals:**  
   - Sort the intervals based on their start times.
   - Iterate through the sorted intervals:
     - If the current interval does not overlap with the last interval in the result list, add it to the result.
     - If it does overlap, merge the intervals by adjusting the end time to be the maximum of the two intervals.

3. **Return the Result:**  
   The merged intervals are returned as a list of non-overlapping intervals.

# Complexity

- Time complexity:  
  Sorting the intervals takes $$O(n \log n)$$ where `n` is the number of intervals. Merging them requires a linear pass through the intervals, which is $$O(n)$$. Thus, the overall time complexity is $$O(n \log n)$$.

- Space complexity:  
  The space complexity is $$O(n)$$ for the additional list used to store the merged intervals.


#### Java

```java
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        int[][] newIntervals = new int[intervals.length + 1][2];
        for (int i = 0; i < intervals.length; i++) {
            newIntervals[i] = intervals[i];
        }
        newIntervals[intervals.length] = newInterval;
        return merge(newIntervals);
    }

    private int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        List<int[]> ans = new ArrayList<>();
        ans.add(intervals[0]);
        for (int i = 1; i < intervals.length; i++) {
            int s = intervals[i][0], e = intervals[i][1];
            if (ans.get(ans.size() - 1)[1] < s) {
                ans.add(intervals[i]);
            } else {
                ans.get(ans.size() - 1)[1] = Math.max(ans.get(ans.size() - 1)[1], e);
            }
        }
        return ans.toArray(new int[ans.size()][]);
    }
}
```

<br>
<br>
<br>

# [452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons)

## Description

<p>There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array <code>points</code> where <code>points[i] = [x<sub>start</sub>, x<sub>end</sub>]</code> denotes a balloon whose <strong>horizontal diameter</strong> stretches between <code>x<sub>start</sub></code> and <code>x<sub>end</sub></code>. You do not know the exact y-coordinates of the balloons.</p>

<p>Arrows can be shot up <strong>directly vertically</strong> (in the positive y-direction) from different points along the x-axis. A balloon with <code>x<sub>start</sub></code> and <code>x<sub>end</sub></code> is <strong>burst</strong> by an arrow shot at <code>x</code> if <code>x<sub>start</sub> &lt;= x &lt;= x<sub>end</sub></code>. There is <strong>no limit</strong> to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.</p>

<p>Given the array <code>points</code>, return <em>the <strong>minimum</strong> number of arrows that must be shot to burst all balloons</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> points = [[10,16],[2,8],[1,6],[7,12]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> points = [[1,2],[3,4],[5,6],[7,8]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> One arrow needs to be shot for each balloon for a total of 4 arrows.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> points = [[1,2],[2,3],[3,4],[4,5]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= points.length &lt;= 10<sup>5</sup></code></li>
	<li><code>points[i].length == 2</code></li>
	<li><code>-2<sup>31</sup> &lt;= x<sub>start</sub> &lt; x<sub>end</sub> &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

# Solutions

# Intuition
The problem can be viewed as finding the minimum number of non-overlapping intervals that cover all the balloon intervals. To minimize the number of arrows, we should aim to pop as many overlapping balloons as possible with a single arrow.

# Approach
1. **Sort by End Time:**  
   First, sort the balloons by their end coordinates. This way, for each balloon, we can try to burst it with the same arrow as the previous balloon if it overlaps with it.

2. **Greedy Selection:**  
   As we iterate over the sorted balloons, we check if the current balloon starts after the last arrow shot. If it does, we need to shoot a new arrow, and we update the position of the last arrow shot to the current balloon's end.

3. **Count the Arrows:**  
   Each time we decide to shoot a new arrow, we increment the counter. At the end, the counter represents the minimum number of arrows needed.

# Complexity

- Time complexity:  
  Sorting the intervals takes $$O(n \log n)$$, where `n` is the number of balloons. Iterating through the balloons requires a linear pass, which is $$O(n)$$. Thus, the overall time complexity is $$O(n \log n)$$.

- Space complexity:  
  The space complexity is $$O(1)$$ if we don't count the input storage, as we only use a few extra variables during the iteration.



#### Java

```java
class Solution {
    public int findMinArrowShots(int[][] points) {
        Arrays.sort(points, Comparator.comparingInt(a -> a[1]));
        int ans = 0;
        long last = -(1L << 60);
        for (var p : points) {
            int a = p[0], b = p[1];
            if (a > last) {
                ++ans;
                last = b;
            }
        }
        return ans;
    }
}
```
