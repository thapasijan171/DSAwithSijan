---
title: "Divide / Conquer"
description: "All solutions leetcode Top Interview 150 Divide / Conquer"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/9nCVoGjltIFrApyd-IMG_20220219_202224.jpg?w=750&h=750"
---

# [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree)

## Description

<p>Given an integer array <code>nums</code> where the elements are sorted in <strong>ascending order</strong>, convert <em>it to a </em><span data-keyword="height-balanced"><strong><em>height-balanced</em></strong></span> <em>binary search tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0108.Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree/images/btree1.jpg" style="width: 302px; height: 222px;" />
<pre>
<strong>Input:</strong> nums = [-10,-3,0,5,9]
<strong>Output:</strong> [0,-3,9,-10,null,5]
<strong>Explanation:</strong> [0,-10,5,null,-3,null,9] is also accepted:
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0108.Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree/images/btree2.jpg" style="width: 302px; height: 222px;" />
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0108.Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree/images/btree.jpg" style="width: 342px; height: 142px;" />
<pre>
<strong>Input:</strong> nums = [1,3]
<strong>Output:</strong> [3,1]
<strong>Explanation:</strong> [1,null,3] and [3,1] are both height-balanced BSTs.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> is sorted in a <strong>strictly increasing</strong> order.</li>
</ul>

# Solutions

# Convert Sorted Array to Binary Search Tree

**Algorithm Used:** Binary Search Tree (BST) Construction

## Intuition
The problem requires converting a sorted array into a height-balanced binary search tree (BST). The idea is to use the middle element of the array as the root of the tree to ensure that the tree remains balanced. By recursively applying this approach to the left and right halves of the array, we can construct the entire BST.

## Approach
1. **Recursive Method**: Use a recursive depth-first search (DFS) approach to build the BST.
   - **Base Case**: If the left index is greater than the right index, return `null`, as there are no elements to process.
   - **Find Middle**: Calculate the middle index of the current subarray. This element will be the root of the subtree.
   - **Recursive Calls**: 
     - Recursively build the left subtree using the subarray to the left of the middle element.
     - Recursively build the right subtree using the subarray to the right of the middle element.
   - **Construct TreeNode**: Create a new `TreeNode` with the middle element as its value and set its left and right children using the results of the recursive calls.

This approach ensures that each subtree is balanced, as the middle element is always chosen as the root, resulting in a height-balanced BST.

#### Java

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private int[] nums;

    public TreeNode sortedArrayToBST(int[] nums) {
        this.nums = nums;
        return dfs(0, nums.length - 1);
    }

    private TreeNode dfs(int l, int r) {
        if (l > r) {
            return null;
        }
        int mid = (l + r) >> 1;
        TreeNode left = dfs(l, mid - 1);
        TreeNode right = dfs(mid + 1, r);
        return new TreeNode(nums[mid], left, right);
    }
}
```

<br>
<br>
<br>

# [148. Sort List](https://leetcode.com/problems/sort-list)

## Description

<p>Given the <code>head</code> of a linked list, return <em>the list after sorting it in <strong>ascending order</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0148.Sort%20List/images/sort_list_1.jpg" style="width: 450px; height: 194px;" />
<pre>
<strong>Input:</strong> head = [4,2,1,3]
<strong>Output:</strong> [1,2,3,4]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0148.Sort%20List/images/sort_list_2.jpg" style="width: 550px; height: 184px;" />
<pre>
<strong>Input:</strong> head = [-1,5,3,4,0]
<strong>Output:</strong> [-1,0,3,4,5]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> head = []
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 5 * 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Can you sort the linked list in <code>O(n logn)</code> time and <code>O(1)</code> memory (i.e. constant space)?</p>

# Solutions

# Sort a Linked List

**Algorithm Used:** Merge Sort for Linked Lists

## Intuition
To sort a singly-linked list efficiently, we can use the merge sort algorithm. This algorithm is well-suited for linked lists because it divides the list into smaller sublists, sorts them, and then merges them. This approach leverages the fact that merging two sorted linked lists can be done in linear time.

## Approach
1. **Base Case**: If the list is empty or has only one node, it is already sorted, so return the head.

2. **Find the Middle**: Use the slow and fast pointer technique to find the middle of the linked list. 
   - Initialize two pointers: `slow` and `fast`. Move `slow` one step and `fast` two steps until `fast` reaches the end of the list.
   - The `slow` pointer will be at the middle of the list when `fast` reaches the end.

3. **Split the List**: 
   - Divide the list into two halves: from the head to the middle (first half) and from the middle to the end (second half).
   - Set the `next` pointer of the `slow` node to `null` to split the list.

4. **Recursive Sort**:
   - Recursively sort both halves of the list.

5. **Merge Sorted Lists**:
   - Merge the two sorted halves.
   - Use a dummy node to simplify the merging process.
   - Compare nodes from both halves and append the smaller node to the merged list.
   - Continue until all nodes from both lists are processed.

6. **Return the Sorted List**:
   - The sorted list starts from the node following the dummy node.

This approach ensures that the list is sorted efficiently using merge sort, which operates in O(n log n) time complexity.

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
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode t = slow.next;
        slow.next = null;
        ListNode l1 = sortList(head);
        ListNode l2 = sortList(t);
        ListNode dummy = new ListNode();
        ListNode cur = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                cur.next = l1;
                l1 = l1.next;
            } else {
                cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }
        cur.next = l1 == null ? l2 : l1;
        return dummy.next;
    }
}
```

<br>
<br>
<br>

# [427. Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree)

## Description

<!-- description:start -->

<p>Given a <code>n * n</code> matrix <code>grid</code> of <code>0&#39;s</code> and <code>1&#39;s</code> only. We want to represent <code>grid</code> with a Quad-Tree.</p>

<p>Return <em>the root of the Quad-Tree representing </em><code>grid</code>.</p>

<p>A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:</p>

<ul>
	<li><code>val</code>: True if the node represents a grid of 1&#39;s or False if the node represents a grid of 0&#39;s. Notice that you can assign the <code>val</code> to True or False when <code>isLeaf</code> is False, and both are accepted in the answer.</li>
	<li><code>isLeaf</code>: True if the node is a leaf node on the tree or False if the node has four children.</li>
</ul>

<pre>
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;
}</pre>

<p>We can construct a Quad-Tree from a two-dimensional area using the following steps:</p>

<ol>
	<li>If the current grid has the same value (i.e all <code>1&#39;s</code> or all <code>0&#39;s</code>) set <code>isLeaf</code> True and set <code>val</code> to the value of the grid and set the four children to Null and stop.</li>
	<li>If the current grid has different values, set <code>isLeaf</code> to False and set <code>val</code> to any value and divide the current grid into four sub-grids as shown in the photo.</li>
	<li>Recurse for each of the children with the proper sub-grid.</li>
</ol>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/new_top.png" style="width: 777px; height: 181px;" />
<p>If you want to know more about the Quad-Tree, you can refer to the <a href="https://en.wikipedia.org/wiki/Quadtree">wiki</a>.</p>

<p><strong>Quad-Tree format:</strong></p>

<p>You don&#39;t need to read this section for solving the problem. This is only if you want to understand the output format here. The output represents the serialized format of a Quad-Tree using level order traversal, where <code>null</code> signifies a path terminator where no node exists below.</p>

<p>It is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list <code>[isLeaf, val]</code>.</p>

<p>If the value of <code>isLeaf</code> or <code>val</code> is True we represent it as <strong>1</strong> in the list <code>[isLeaf, val]</code> and if the value of <code>isLeaf</code> or <code>val</code> is False we represent it as <strong>0</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/grid1.png" style="width: 777px; height: 99px;" />
<pre>
<strong>Input:</strong> grid = [[0,1],[1,0]]
<strong>Output:</strong> [[0,1],[1,0],[1,1],[1,1],[1,0]]
<strong>Explanation:</strong> The explanation of this example is shown below:
Notice that 0 represents False and 1 represents True in the photo representing the Quad-Tree.
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/e1tree.png" style="width: 777px; height: 186px;" />
</pre>

<p><strong class="example">Example 2:</strong></p>

<p><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/e2mat.png" style="width: 777px; height: 343px;" /></p>

<pre>
<strong>Input:</strong> grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
<strong>Output:</strong> [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
<strong>Explanation:</strong> All values in the grid are not the same. We divide the grid into four sub-grids.
The topLeft, bottomLeft and bottomRight each has the same value.
The topRight have different values so we divide it into 4 sub-grids where each has the same value.
Explanation is shown in the photo below:
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0400-0499/0427.Construct%20Quad%20Tree/images/e2tree.png" style="width: 777px; height: 328px;" />
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length == grid[i].length</code></li>
	<li><code>n == 2<sup>x</sup></code> where <code>0 &lt;= x &lt;= 6</code></li>
</ul>

# Solutions

# Construct Quad Tree from 2D Grid

**Algorithm Used:** Quad Tree Construction

## Intuition
To represent a 2D grid efficiently, we can use a quad tree. Each node in the quad tree represents a quadrant of the grid and can be either a leaf node (if the entire quadrant is uniform) or an internal node with four children. The goal is to construct a quad tree from the given grid where each node represents a specific region of the grid.

## Approach
1. **Base Case**:
   - If the current region of the grid is uniform (all zeros or all ones), create a leaf node with the appropriate value.
   - A region is uniform if all elements in that region are the same.

2. **Recursive Case**:
   - If the region is not uniform, split the region into four quadrants and recursively construct the quad tree for each quadrant.
   - The four quadrants are:
     - Top-left
     - Top-right
     - Bottom-left
     - Bottom-right

3. **Node Creation**:
   - Create a node for the current region. If the region is uniform, set it as a leaf node. Otherwise, set it as an internal node with its four children pointing to the nodes created from the four quadrants.

4. **Construct Node**:
   - Use the recursive `dfs` method to process each quadrant and construct the corresponding nodes.

This approach ensures that the quad tree representation of the grid is constructed efficiently by dividing the grid into smaller regions and processing each region recursively.

#### Java

```java
/*
// Definition for a QuadTree node.
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;


    public Node() {
        this.val = false;
        this.isLeaf = false;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }

    public Node(boolean val, boolean isLeaf) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }

    public Node(boolean val, boolean isLeaf, Node topLeft, Node topRight, Node bottomLeft, Node
bottomRight) { this.val = val; this.isLeaf = isLeaf; this.topLeft = topLeft; this.topRight =
topRight; this.bottomLeft = bottomLeft; this.bottomRight = bottomRight;
    }
};
*/

class Solution {
    public Node construct(int[][] grid) {
        return dfs(0, 0, grid.length - 1, grid[0].length - 1, grid);
    }

    private Node dfs(int a, int b, int c, int d, int[][] grid) {
        int zero = 0, one = 0;
        for (int i = a; i <= c; i++) {
            for (int j = b; j <= d; j++) {
                if (grid[i][j] == 0) {
                    zero = 1;
                } else {
                    one = 1;
                }
            }
        }
        boolean isLeaf = zero + one == 1;
        boolean val = isLeaf && one == 1;
        Node node = new Node(val, isLeaf);
        if (isLeaf) {
            return node;
        }
        node.topLeft = dfs(a, b, (a + c) / 2, (b + d) / 2, grid);
        node.topRight = dfs(a, (b + d) / 2 + 1, (a + c) / 2, d, grid);
        node.bottomLeft = dfs((a + c) / 2 + 1, b, c, (b + d) / 2, grid);
        node.bottomRight = dfs((a + c) / 2 + 1, (b + d) / 2 + 1, c, d, grid);
        return node;
    }
}
```

<br>
<br>
<br>

# [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists)

## Description

<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>

<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]
<strong>Output:</strong> [1,1,2,3,4,4,5,6]
<strong>Explanation:</strong> The linked-lists are:
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
merging them into one sorted list:
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> lists = []
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> lists = [[]]
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>k == lists.length</code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>
	<li><code>-10<sup>4</sup> &lt;= lists[i][j] &lt;= 10<sup>4</sup></code></li>
	<li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li>
	<li>The sum of <code>lists[i].length</code> will not exceed <code>10<sup>4</sup></code>.</li>
</ul>

# Solutions

# Merge k Sorted Linked Lists

**Algorithm Used:** Priority Queue (Min-Heap)

## Intuition
The task is to merge `k` sorted linked lists into one sorted linked list. A priority queue (min-heap) is an efficient way to achieve this, as it allows us to extract the smallest element from the list of heads quickly. By maintaining a priority queue of the current nodes from each list, we can build the final sorted list in linear time relative to the total number of nodes.

## Approach
1. **Initialize Priority Queue**:
   - Create a priority queue to hold the nodes of the linked lists. The priority queue will automatically sort the nodes based on their values.

2. **Add Initial Nodes**:
   - Traverse through the array of linked lists and add the head nodes of each list to the priority queue. Only add non-null nodes.

3. **Merge Lists**:
   - Create a dummy node to act as the start of the merged list. Use a pointer, `cur`, to keep track of the end of the merged list.
   - While the priority queue is not empty:
     - Extract the node with the smallest value from the queue.
     - Add this node to the merged list.
     - If the extracted node has a next node, add the next node to the priority queue.
   - Continue this process until the priority queue is empty.

4. **Return Result**:
   - The merged list starts from the node following the dummy node.

This approach ensures that the merging of `k` sorted linked lists is performed efficiently using a priority queue, with each node being processed in constant time, leading to an overall time complexity of O(N log k), where N is the total number of nodes and k is the number of linked lists.

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
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
        for (ListNode head : lists) {
            if (head != null) {
                pq.offer(head);
            }
        }
        ListNode dummy = new ListNode();
        ListNode cur = dummy;
        while (!pq.isEmpty()) {
            ListNode node = pq.poll();
            if (node.next != null) {
                pq.offer(node.next);
            }
            cur.next = node;
            cur = cur.next;
        }
        return dummy.next;
    }
}
```

<br>
<br>
<br>

