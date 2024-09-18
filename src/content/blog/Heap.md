---
title: "Heap"
description: "All solutions leetcode Top Interview 150 Heap"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/Mp2Bg7uhcic0SGH5-Lakeside.jpeg?w=750&h=750g"
---

# [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array)

## Description

<!-- description:start -->

<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>largest element in the array</em>.</p>

<p>Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.</p>

<p>Can you solve it without sorting?</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,1,5,6,4], k = 2
<strong>Output:</strong> 5
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,3,1,2,4,5,5,6], k = 4
<strong>Output:</strong> 4
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>

<!-- description:end -->

# Solutions

# Find Kth Largest Element in an Array

**Algorithm Used:** Min-Heap

## Intuition
To find the k-th largest element in an array, we use a min-heap (priority queue) to efficiently keep track of the top k largest elements seen so far.

## Approach
1. **Initialize a Min-Heap**:
   - Use a priority queue (min-heap) to store the k largest elements encountered.

2. **Process Each Element**:
   - Iterate through each element in the array.
   - Add the current element to the min-heap.

3. **Maintain Heap Size**:
   - If the size of the heap exceeds k, remove the smallest element. This ensures that only the k largest elements are retained in the heap.

4. **Retrieve the Result**:
   - The root of the min-heap will be the k-th largest element after processing all elements.

This approach leverages the properties of a min-heap to keep the k largest elements in the heap with a time complexity of O(n log k), where n is the number of elements in the array.

#### Java

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minQ = new PriorityQueue<>();
        for (int x : nums) {
            minQ.offer(x);
            if (minQ.size() > k) {
                minQ.poll();
            }
        }
        return minQ.peek();
    }
}
```

<br>
<br>
<br>

# [502. IPO](https://leetcode.com/problems/ipo)

## Description

<p>Suppose LeetCode will start its <strong>IPO</strong> soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the <strong>IPO</strong>. Since it has limited resources, it can only finish at most <code>k</code> distinct projects before the <strong>IPO</strong>. Help LeetCode design the best way to maximize its total capital after finishing at most <code>k</code> distinct projects.</p>

<p>You are given <code>n</code> projects where the <code>i<sup>th</sup></code> project has a pure profit <code>profits[i]</code> and a minimum capital of <code>capital[i]</code> is needed to start it.</p>

<p>Initially, you have <code>w</code> capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.</p>

<p>Pick a list of <strong>at most</strong> <code>k</code> distinct projects from given projects to <strong>maximize your final capital</strong>, and return <em>the final maximized capital</em>.</p>

<p>The answer is guaranteed to fit in a 32-bit signed integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
<strong>Output:</strong> 6
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= w &lt;= 10<sup>9</sup></code></li>
	<li><code>n == profits.length</code></li>
	<li><code>n == capital.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= profits[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= capital[i] &lt;= 10<sup>9</sup></code></li>
</ul>


# Solutions

# Find Maximized Capital

**Algorithm Used:** Priority Queues

## Intuition
To maximize capital after a series of investments, we need to carefully select projects based on their capital requirements and profits. The goal is to maximize the total capital by selecting projects within the available capital and iterating through the most profitable ones.

## Approach
1. **Initialize Priority Queues**:
   - Use a min-heap (priority queue) `q1` to store projects by their required capital.
   - Use a max-heap (priority queue) `q2` to store the profits of the projects that can be undertaken with the current capital.

2. **Add Projects to Min-Heap**:
   - Iterate through each project and add it to the min-heap `q1` based on its capital requirement.

3. **Select Projects**:
   - For each of the k iterations (representing the number of investments), move projects from `q1` to `q2` if their capital requirement is less than or equal to the current available capital `w`.
   - If `q2` is not empty, select the most profitable project (poll the max-heap) and add its profit to the available capital `w`.

4. **Return the Result**:
   - After completing the k investments or exhausting the projects, the final capital `w` is returned.

This approach ensures that we are always selecting the most profitable projects that we can afford, thereby maximizing the final capital.

#### Java

```java
class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        int n = capital.length;
        PriorityQueue<int[]> q1 = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        for (int i = 0; i < n; i++) {
            q1.offer(new int[] {capital[i], profits[i]});
        }
        PriorityQueue<Integer> q2 = new PriorityQueue<>((a, b) -> b - a);
        while (k-- > 0) {
            while (!q1.isEmpty() && q1.peek()[0] <= w) {
                q2.offer(q1.poll()[1]);
            }
            if (q2.isEmpty()) {
                break;
            }
            w += q2.poll();
        }
        return w;
    }
}
```

<br>
<br>
<br>

# [373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums)

## Description

<!-- description:start -->

<p>You are given two integer arrays <code>nums1</code> and <code>nums2</code> sorted in <strong>non-decreasing&nbsp;order</strong> and an integer <code>k</code>.</p>

<p>Define a pair <code>(u, v)</code> which consists of one element from the first array and one element from the second array.</p>

<p>Return <em>the</em> <code>k</code> <em>pairs</em> <code>(u<sub>1</sub>, v<sub>1</sub>), (u<sub>2</sub>, v<sub>2</sub>), ..., (u<sub>k</sub>, v<sub>k</sub>)</code> <em>with the smallest sums</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,7,11], nums2 = [2,4,6], k = 3
<strong>Output:</strong> [[1,2],[1,4],[1,6]]
<strong>Explanation:</strong> The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,1,2], nums2 = [1,2,3], k = 2
<strong>Output:</strong> [[1,1],[1,1]]
<strong>Explanation:</strong> The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>nums1</code> and <code>nums2</code> both are sorted in <strong>non-decreasing order</strong>.</li>
	<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code></li>
	<li><code>k &lt;=&nbsp;nums1.length *&nbsp;nums2.length</code></li>
</ul>


# Solutions

# K Smallest Pairs

**Algorithm Used:** Min-Heap (Priority Queue)

## Intuition
To find the k smallest pairs from two sorted arrays, we can use a min-heap to efficiently retrieve the smallest pairs. By maintaining a min-heap of pairs, we can ensure that we always process the smallest available pair and generate new pairs systematically.

## Approach
1. **Initialize the Min-Heap**:
   - Use a min-heap to store pairs of indices and their corresponding sums. Initially, add pairs consisting of each element from `nums1` and the first element from `nums2`.

2. **Process the Heap**:
   - Extract the smallest pair (based on the sum of its elements) from the heap.
   - Add this pair to the result list.
   - Generate a new pair by moving to the next element in `nums2` while keeping the same element from `nums1`.
   - Add this new pair to the heap if it is valid.

3. **Limit Results**:
   - Continue this process until k pairs have been added to the result list or the heap is empty.

4. **Return the Result**:
   - The result list contains the k smallest pairs.

This approach ensures that we efficiently retrieve the smallest pairs using a min-heap, which allows us to avoid generating and sorting all possible pairs.

#### Java

```java
class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        PriorityQueue<int[]> q = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        for (int i = 0; i < Math.min(nums1.length, k); i++) {
            q.offer(new int[] {nums1[i] + nums2[0], i, 0});
        }
        List<List<Integer>> ans = new ArrayList<>();
        while (!q.isEmpty() && k > 0) {
            int[] e = q.poll();
            ans.add(Arrays.asList(nums1[e[1]], nums2[e[2]]));
            --k;
            if (e[2] + 1 < nums2.length) {
                q.offer(new int[] {nums1[e[1]] + nums2[e[2] + 1], e[1], e[2] + 1});
            }
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream)

## Description

<p>The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.</p>

<ul>
	<li>For example, for <code>arr = [2,3,4]</code>, the median is <code>3</code>.</li>
	<li>For example, for <code>arr = [2,3]</code>, the median is <code>(2 + 3) / 2 = 2.5</code>.</li>
</ul>

<p>Implement the MedianFinder class:</p>

<ul>
	<li><code>MedianFinder()</code> initializes the <code>MedianFinder</code> object.</li>
	<li><code>void addNum(int num)</code> adds the integer <code>num</code> from the data stream to the data structure.</li>
	<li><code>double findMedian()</code> returns the median of all elements so far. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;MedianFinder&quot;, &quot;addNum&quot;, &quot;addNum&quot;, &quot;findMedian&quot;, &quot;addNum&quot;, &quot;findMedian&quot;]
[[], [1], [2], [], [3], []]
<strong>Output</strong>
[null, null, null, 1.5, null, 2.0]

<strong>Explanation</strong>
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-10<sup>5</sup> &lt;= num &lt;= 10<sup>5</sup></code></li>
	<li>There will be at least one element in the data structure before calling <code>findMedian</code>.</li>
	<li>At most <code>5 * 10<sup>4</sup></code> calls will be made to <code>addNum</code> and <code>findMedian</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>If all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>
	<li>If <code>99%</code> of all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>
</ul>

# Solutions

# Median Finder

**Algorithm Used:** Two-Heap Approach

## Intuition
To efficiently find the median of a dynamically changing data stream, we use two heaps:
- A max-heap to maintain the smaller half of the data.
- A min-heap to maintain the larger half of the data.

By keeping the heaps balanced, we can quickly compute the median based on the root elements of the heaps.

## Approach

1. **Data Structures**:
   - Use a max-heap (`maxQ`) to store the smaller half of the elements.
   - Use a min-heap (`minQ`) to store the larger half of the elements.

2. **Adding a Number**:
   - Add the new number to the max-heap.
   - Move the largest element from the max-heap to the min-heap to ensure that all elements in the min-heap are greater than those in the max-heap.
   - If the min-heap becomes larger than the max-heap by more than one element, move the smallest element from the min-heap to the max-heap to maintain the balance.

3. **Finding the Median**:
   - If both heaps have the same size, the median is the average of the roots of both heaps.
   - If the min-heap has one more element than the max-heap, the median is the root of the min-heap.

#### Java

```java
class MedianFinder {
    private PriorityQueue<Integer> minQ = new PriorityQueue<>();
    private PriorityQueue<Integer> maxQ = new PriorityQueue<>(Collections.reverseOrder());

    public MedianFinder() {
    }

    public void addNum(int num) {
        maxQ.offer(num);
        minQ.offer(maxQ.poll());
        if (minQ.size() - maxQ.size() > 1) {
            maxQ.offer(minQ.poll());
        }
    }

    public double findMedian() {
        return minQ.size() == maxQ.size() ? (minQ.peek() + maxQ.peek()) / 2.0 : minQ.peek();
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */
```
