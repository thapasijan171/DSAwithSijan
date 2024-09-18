---
title: "Binary Search Tree"
description: "All solutions leetcode Top Interview 150 Binary Search Tree"
pubDate: "2024"
heroImage: "../img/img_blog/floette.jpeg"
---

# [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst)

## Description

<p>Given the <code>root</code> of a Binary Search Tree (BST), return <em>the minimum absolute difference between the values of any two different nodes in the tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0530.Minimum%20Absolute%20Difference%20in%20BST/images/bst1.jpg" style="width: 292px; height: 301px;" />
<pre>
<strong>Input:</strong> root = [4,2,6,1,3]
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0500-0599/0530.Minimum%20Absolute%20Difference%20in%20BST/images/bst2.jpg" style="width: 282px; height: 301px;" />
<pre>
<strong>Input:</strong> root = [1,0,48,null,null,12,49]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[2, 10<sup>4</sup>]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>

# Solutions

# Intuition
The problem is to find the minimum absolute difference between values of any two nodes in a Binary Search Tree (BST). Since the BST property ensures that an in-order traversal of the tree will yield a sorted sequence of node values, the smallest difference will be between adjacent nodes in this sorted sequence.

# Approach
1. **In-Order Traversal:** To find the minimum difference, perform an in-order traversal of the BST. This traversal will visit the nodes in ascending order. By comparing the current node’s value with the previous node’s value during the traversal, we can efficiently find the smallest difference.

2. **Tracking Minimum Difference:** 
   - Initialize `ans` to a large value (infinity) to keep track of the minimum difference found.
   - Initialize `pre` to a very small value (negative infinity) to store the value of the previous node visited during the traversal.

3. **Recursive Traversal:**
   - Recursively traverse the left subtree.
   - For the current node, compute the difference between the current node's value and the previous node's value (`pre`). Update `ans` if this difference is smaller than the current minimum difference.
   - Update `pre` to the current node's value.
   - Recursively traverse the right subtree.

4. **Return Result:** After completing the traversal, `ans` will hold the smallest difference between values of any two nodes in the BST.

The time complexity of this approach is O(n), where n is the number of nodes in the tree, since each node is visited exactly once.


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
    private final int inf = 1 << 30;
    private int ans = inf;
    private int pre = -inf;

    public int getMinimumDifference(TreeNode root) {
        dfs(root);
        return ans;
    }

    private void dfs(TreeNode root) {
        if (root == null) {
            return;
        }
        dfs(root.left);
        ans = Math.min(ans, root.val - pre);
        pre = root.val;
        dfs(root.right);
    }
}
```

<br>
<br>
<br>


# [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst)

## Description

<p>Given the <code>root</code> of a binary search tree, and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>smallest value (<strong>1-indexed</strong>) of all the values of the nodes in the tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0230.Kth%20Smallest%20Element%20in%20a%20BST/images/kthtree1.jpg" style="width: 212px; height: 301px;" />
<pre>
<strong>Input:</strong> root = [3,1,4,null,2], k = 1
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0230.Kth%20Smallest%20Element%20in%20a%20BST/images/kthtree2.jpg" style="width: 382px; height: 302px;" />
<pre>
<strong>Input:</strong> root = [5,3,6,2,4,null,null,1], k = 3
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is <code>n</code>.</li>
	<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?</p>

# Solutions

# Intuition
The task is to find the k-th smallest element in a Binary Search Tree (BST). Given the properties of a BST, an in-order traversal (which visits nodes in ascending order) provides a natural way to access elements in increasing order. Thus, performing an in-order traversal and counting elements will allow us to find the k-th smallest element.

# Approach
1. **Use of Stack for Iterative Traversal:**
   - To avoid recursion, we use an explicit stack to simulate the in-order traversal. The stack helps manage the traversal state and navigate through the tree.

2. **Traversal Process:**
   - Start with the root node and traverse to the leftmost node while pushing nodes onto the stack. This ensures that we explore all nodes in the left subtree before visiting the current node.
   - Once the left subtree is fully explored, pop nodes from the stack. The node popped is the next node in the in-order sequence.
   - Decrement `k` each time a node is popped. When `k` becomes 0, the value of the node just popped is the k-th smallest element.

3. **Handling Right Subtree:**
   - After processing the current node, move to its right subtree and continue the traversal process.

4. **Return Result:**
   - When `k` reaches 0, return the value of the current node as it is the k-th smallest element.

The time complexity of this approach is O(h + k), where `h` is the height of the tree and `k` is the number of nodes visited. In the worst case, you may need to visit up to `k` nodes plus the nodes on the path from the root to the k-th smallest node.

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
    public int kthSmallest(TreeNode root, int k) {
        Deque<TreeNode> stk = new ArrayDeque<>();
        while (root != null || !stk.isEmpty()) {
            if (root != null) {
                stk.push(root);
                root = root.left;
            } else {
                root = stk.pop();
                if (--k == 0) {
                    return root.val;
                }
                root = root.right;
            }
        }
        return 0;
    }
}
```

# [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree)

## Description

<p>Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.</p>

<p>A <strong>valid BST</strong> is defined as follows:</p>

<ul>
	<li>The left <span data-keyword="subtree">subtree</span> of a node contains only nodes with keys <strong>less than</strong> the node&#39;s key.</li>
	<li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node&#39;s key.</li>
	<li>Both the left and right subtrees must also be binary search trees.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0098.Validate%20Binary%20Search%20Tree/images/tree1.jpg" style="width: 302px; height: 182px;" />
<pre>
<strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0098.Validate%20Binary%20Search%20Tree/images/tree2.jpg" style="width: 422px; height: 292px;" />
<pre>
<strong>Input:</strong> root = [5,1,4,null,null,3,6]
<strong>Output:</strong> false
<strong>Explanation:</strong> The root node&#39;s value is 5 but its right child&#39;s value is 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

# Solutions

# Intuition
To determine if a binary tree is a valid Binary Search Tree (BST), we need to ensure that for each node:
- All nodes in its left subtree have values less than the node’s value.
- All nodes in its right subtree have values greater than the node’s value.

An efficient way to validate this is by performing an in-order traversal of the tree. In a valid BST, this traversal should produce a sequence of values that are strictly increasing.

# Approach
1. **In-Order Traversal with Validation:**
   - Use an in-order traversal to visit each node. This way, nodes are visited in ascending order if the tree is a valid BST.
   - During traversal, maintain a reference to the previously visited node (`prev`). This helps check if the current node’s value is greater than the previous node’s value.

2. **Traversal Process:**
   - Recursively traverse the left subtree of the current node.
   - Check if the value of the current node is greater than the value of `prev`. If not, return `false` as this violates the BST property.
   - Update `prev` to the current node and recursively traverse the right subtree.

3. **Validation Logic:**
   - If all nodes are visited and the values are in strictly increasing order, the tree is a valid BST.
   - If any value is found that does not satisfy the BST property, the function returns `false`.

4. **Edge Cases:**
   - An empty tree or a tree with only one node is considered a valid BST.

The time complexity of this approach is O(n), where `n` is the number of nodes in the tree, as each node is visited once.

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
    private TreeNode prev;

    public boolean isValidBST(TreeNode root) {
        return dfs(root);
    }

    private boolean dfs(TreeNode root) {
        if (root == null) {
            return true;
        }
        if (!dfs(root.left)) {
            return false;
        }
        if (prev != null && prev.val >= root.val) {
            return false;
        }
        prev = root;
        return dfs(root.right);
    }
}
```

