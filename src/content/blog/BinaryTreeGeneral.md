---
title: "Binary Tree General"
description: "All solutions leetcode Top Interview 150 Binary Tree General"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/1arnKH3HQ2goICvs-IMG_20230401_162305.jpg?w=750&h=750"
---

# [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)

## Description

<p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>

<p>A binary tree&#39;s <strong>maximum depth</strong>&nbsp;is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0104.Maximum%20Depth%20of%20Binary%20Tree/images/tmp-tree.jpg" style="width: 400px; height: 277px;" />
<pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> 3
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [1,null,2]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

# Solutions

# Intuition
To find the maximum depth (or height) of a binary tree, we need to determine the longest path from the root node to a leaf node. This can be achieved by recursively calculating the depth of the left and right subtrees and taking the maximum of the two.

# Approach
1. **Recursive Depth Calculation:**
   - **Base Case:** If the current node is `null`, it means we've reached beyond a leaf node, so the depth is `0`.
   - **Recursive Case:** Compute the depth of the left and right subtrees by recursively calling the `maxDepth` method.
   - The depth of the current node is `1` (for the current node itself) plus the maximum of the depths of its left and right subtrees.

2. **Return Value:**
   - After calculating the depths of the left and right subtrees, return `1` plus the maximum of these depths to account for the current node.

The time complexity of this approach is O(n), where `n` is the number of nodes in the tree, as each node is visited exactly once.

This method efficiently calculates the maximum depth of the binary tree using a depth-first traversal approach.

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
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int l = maxDepth(root.left);
        int r = maxDepth(root.right);
        return 1 + Math.max(l, r);
    }
}
```

<br>
<br>
<br>

# [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)

## Description

<p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>

<p>A binary tree&#39;s <strong>maximum depth</strong>&nbsp;is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0104.Maximum%20Depth%20of%20Binary%20Tree/images/tmp-tree.jpg" style="width: 400px; height: 277px;" />
<pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> 3
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [1,null,2]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

# Solutions

# Intuition
To determine the maximum depth of a binary tree, we need to measure the longest path from the root node to a leaf node. This can be done by recursively exploring both the left and right subtrees and computing the depth.

# Approach
1. **Base Case:**
   - If the `root` is `null`, it means we have reached beyond a leaf node, so the depth of this path is `0`.

2. **Recursive Case:**
   - Compute the depth of the left subtree by calling `maxDepth` on `root.left`.
   - Compute the depth of the right subtree by calling `maxDepth` on `root.right`.
   - The depth of the current node is `1` (for the current node itself) plus the maximum of the depths of the left and right subtrees.

3. **Return Value:**
   - Return `1 + Math.max(l, r)` where `l` is the depth of the left subtree and `r` is the depth of the right subtree.

This method uses a depth-first traversal to efficiently calculate the maximum depth of the binary tree. The time complexity is O(n), where `n` is the number of nodes in the tree, as each node is visited exactly once.

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
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int l = maxDepth(root.left);
        int r = maxDepth(root.right);
        return 1 + Math.max(l, r);
    }
}
```

<br>
<br>
<br>

# [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree)

## Description

<p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0226.Invert%20Binary%20Tree/images/invert1-tree.jpg" style="width: 500px; height: 165px;" />
<pre>
<strong>Input:</strong> root = [4,2,7,1,3,6,9]
<strong>Output:</strong> [4,7,2,9,6,3,1]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0226.Invert%20Binary%20Tree/images/invert2-tree.jpg" style="width: 500px; height: 120px;" />
<pre>
<strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> [2,3,1]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

# Solutions

# Intuition
The problem requires inverting a binary tree, which means flipping it around its center. This involves swapping the left and right children of every node in the tree.

# Approach
1. **Base Case:**
   - If the `root` is `null`, it means we have reached a leaf node's child, and there's nothing to invert.

2. **Swap Children:**
   - Swap the `left` and `right` children of the current `root` node.

3. **Recursive Case:**
   - Recursively call `dfs` to invert the left subtree.
   - Recursively call `dfs` to invert the right subtree.

4. **Return Value:**
   - After inverting the tree, return the `root` node.

The algorithm uses a depth-first search (DFS) approach to traverse the entire tree and perform the inversion. The time complexity is O(n), where `n` is the number of nodes in the tree, as each node is visited once.

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
    public TreeNode invertTree(TreeNode root) {
        dfs(root);
        return root;
    }

    private void dfs(TreeNode root) {
        if (root == null) {
            return;
        }
        TreeNode t = root.left;
        root.left = root.right;
        root.right = t;
        dfs(root.left);
        dfs(root.right);
    }
}
```

# [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree)

## Description

<p>Given the <code>root</code> of a binary tree, <em>check whether it is a mirror of itself</em> (i.e., symmetric around its center).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0101.Symmetric%20Tree/images/symtree1.jpg" style="width: 354px; height: 291px;" />
<pre>
<strong>Input:</strong> root = [1,2,2,3,4,4,3]
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0101.Symmetric%20Tree/images/symtree2.jpg" style="width: 308px; height: 258px;" />
<pre>
<strong>Input:</strong> root = [1,2,2,null,3,null,3]
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it both recursively and iteratively?

# Solutions

# Intuition
To determine if a binary tree is symmetric, we need to check if the left subtree is a mirror reflection of the right subtree.

# Approach
1. **Base Cases:**
   - If both `root1` and `root2` are `null`, the trees are symmetric at this level.
   - If only one of `root1` or `root2` is `null`, or their values are different, the trees are not symmetric at this level.

2. **Recursive Case:**
   - Recursively check if the left subtree of `root1` is symmetric to the right subtree of `root2` (`dfs(root1.left, root2.right)`).
   - Recursively check if the right subtree of `root1` is symmetric to the left subtree of `root2` (`dfs(root1.right, root2.left)`).

3. **Return Value:**
   - If both recursive checks return `true`, the trees are symmetric; otherwise, they are not.

The algorithm uses a depth-first search (DFS) approach to compare mirrored nodes in the tree. The time complexity is O(n), where `n` is the number of nodes in the tree, as each node is visited once.

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
    public boolean isSymmetric(TreeNode root) {
        return dfs(root, root);
    }

    private boolean dfs(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) {
            return true;
        }
        if (root1 == null || root2 == null || root1.val != root2.val) {
            return false;
        }
        return dfs(root1.left, root2.right) && dfs(root1.right, root2.left);
    }
}
```

<br>
<br>
<br>

# [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal)

## Description

<p>Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal of a binary tree and <code>inorder</code> is the inorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0105.Construct%20Binary%20Tree%20from%20Preorder%20and%20Inorder%20Traversal/images/tree.jpg" style="width: 277px; height: 302px;" />
<pre>
<strong>Input:</strong> preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
<strong>Output:</strong> [3,9,20,null,null,15,7]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> preorder = [-1], inorder = [-1]
<strong>Output:</strong> [-1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= preorder.length &lt;= 3000</code></li>
	<li><code>inorder.length == preorder.length</code></li>
	<li><code>-3000 &lt;= preorder[i], inorder[i] &lt;= 3000</code></li>
	<li><code>preorder</code> and <code>inorder</code> consist of <strong>unique</strong> values.</li>
	<li>Each value of <code>inorder</code> also appears in <code>preorder</code>.</li>
	<li><code>preorder</code> is <strong>guaranteed</strong> to be the preorder traversal of the tree.</li>
	<li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li>
</ul>

# Solutions

# Intuition
To reconstruct a binary tree from its preorder and inorder traversal arrays, we need to understand the following:
- **Preorder Traversal**: The first element is always the root of the tree.
- **Inorder Traversal**: Elements to the left of the root are in the left subtree, and elements to the right are in the right subtree.

# Approach
1. **Initialization:**
   - Create a `Map` to store the index of each value in the `inorder` array for quick lookup.

2. **Recursive Tree Construction:**
   - The root of the current subtree is given by the current index in the `preorder` array.
   - Find the index of this root in the `inorder` array using the `Map`.
   - Recursively build the left and right subtrees:
     - **Left Subtree**: Elements before the root index in the `inorder` array.
     - **Right Subtree**: Elements after the root index in the `inorder` array.

3. **Tree Node Creation:**
   - Create a `TreeNode` for the current root value.
   - Attach the recursively built left and right subtrees to this node.

4. **Base Case:**
   - If the number of elements is zero or negative, return `null` indicating no subtree.

5. **Return Value:**
   - The root of the reconstructed binary tree is returned.

This approach uses depth-first search (DFS) to construct the tree, with each node being visited once. The time complexity is O(n), where `n` is the number of nodes in the tree.

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
    private int[] preorder;
    private Map<Integer, Integer> d = new HashMap<>();

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        int n = preorder.length;
        this.preorder = preorder;
        for (int i = 0; i < n; i++) {
            d.put(inorder[i], i);
        }
        return dfs(0, 0, n);
    }

    private TreeNode dfs(int i, int j, int n) {
        if (n <= 0) {
            return null;
        }
        int v = preorder[i];
        int k = d.get(v);
        TreeNode l = dfs(i + 1, j, k - j);
        TreeNode r = dfs(i + 1 + k - j, k + 1, n - 1 - (k - j));
        return new TreeNode(v, l, r);
    }
}
```

If the node values given in the problem have duplicates, then we only need to record all the positions where each node value appears, and then recursively construct the tree.

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
    private int[] preorder;
    private Map<Integer, Integer> d = new HashMap<>();

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        int n = preorder.length;
        this.preorder = preorder;
        for (int i = 0; i < n; i++) {
            d.put(inorder[i], i);
        }
        return dfs(0, 0, n);
    }

    private TreeNode dfs(int i, int j, int n) {
        if (n <= 0) {
            return null;
        }
        int v = preorder[i];
        int k = d.get(v);
        TreeNode l = dfs(i + 1, j, k - j);
        TreeNode r = dfs(i + 1 + k - j, k + 1, n - 1 - (k - j));
        return new TreeNode(v, l, r);
    }
}
```

<br>
<br>
<br>

# [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal)

## Description

<p>Given two integer arrays <code>inorder</code> and <code>postorder</code> where <code>inorder</code> is the inorder traversal of a binary tree and <code>postorder</code> is the postorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0106.Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder%20Traversal/images/tree.jpg" style="width: 277px; height: 302px;" />
<pre>
<strong>Input:</strong> inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
<strong>Output:</strong> [3,9,20,null,null,15,7]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> inorder = [-1], postorder = [-1]
<strong>Output:</strong> [-1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= inorder.length &lt;= 3000</code></li>
	<li><code>postorder.length == inorder.length</code></li>
	<li><code>-3000 &lt;= inorder[i], postorder[i] &lt;= 3000</code></li>
	<li><code>inorder</code> and <code>postorder</code> consist of <strong>unique</strong> values.</li>
	<li>Each value of <code>postorder</code> also appears in <code>inorder</code>.</li>
	<li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li>
	<li><code>postorder</code> is <strong>guaranteed</strong> to be the postorder traversal of the tree.</li>
</ul>

# Solutions

# Intuition
To reconstruct a binary tree from its inorder and postorder traversal arrays, consider the following:
- **Postorder Traversal**: The last element is always the root of the tree or subtree.
- **Inorder Traversal**: Elements to the left of the root are in the left subtree, and elements to the right are in the right subtree.

# Approach
1. **Initialization:**
   - Create a `Map` to store the index of each value in the `inorder` array for quick lookup.

2. **Recursive Tree Construction:**
   - The root of the current subtree is given by the last element in the current range of the `postorder` array.
   - Find the index of this root in the `inorder` array using the `Map`.
   - Recursively build the left and right subtrees:
     - **Left Subtree**: Elements in the `inorder` array to the left of the root index.
     - **Right Subtree**: Elements in the `inorder` array to the right of the root index.

3. **Tree Node Creation:**
   - Create a `TreeNode` for the current root value.
   - Attach the recursively built left and right subtrees to this node.

4. **Base Case:**
   - If the number of elements is zero or negative, return `null` indicating no subtree.

5. **Return Value:**
   - The root of the reconstructed binary tree is returned.

This approach uses depth-first search (DFS) to construct the tree, with each node being visited once. The time complexity is O(n), where `n` is the number of nodes in the tree.

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
    private Map<Integer, Integer> d = new HashMap<>();
    private int[] postorder;

    public TreeNode buildTree(int[] inorder, int[] postorder) {
        this.postorder = postorder;
        int n = inorder.length;
        for (int i = 0; i < n; i++) {
            d.put(inorder[i], i);
        }
        return dfs(0, 0, n);
    }

    private TreeNode dfs(int i, int j, int n) {
        if (n <= 0) {
            return null;
        }
        int v = postorder[j + n - 1];
        int k = d.get(v);
        TreeNode l = dfs(i, j, k - i);
        TreeNode r = dfs(k + 1, j + k - i, n - k + i - 1);
        return new TreeNode(v, l, r);
    }
}
```

<br>
<br>
<br>

# [117. Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii)

## Description

<!-- description:start -->

<p>Given a binary tree</p>

<pre>
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
</pre>

<p>Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to <code>NULL</code>.</p>

<p>Initially, all next pointers are set to <code>NULL</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0117.Populating%20Next%20Right%20Pointers%20in%20Each%20Node%20II/images/117_sample.png" style="width: 500px; height: 171px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,4,5,null,7]
<strong>Output:</strong> [1,#,2,3,#,4,5,7,#]
<strong>Explanation: </strong>Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with &#39;#&#39; signifying the end of each level.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 6000]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow-up:</strong></p>

<ul>
	<li>You may only use constant extra space.</li>
	<li>The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.</li>
</ul>

# Solutions

# Intuition
The goal is to connect all nodes at the same level of a perfect binary tree with a `next` pointer. For each node, the `next` pointer should point to the node immediately to its right. If there is no such node, the `next` pointer should be set to `null`.

# Approach
1. **Initialization:**
   - Use a queue to perform a level-order traversal of the tree.

2. **Level-Order Traversal:**
   - Start by adding the root node to the queue.
   - For each level in the tree, process all nodes at that level:
     - Use a variable `p` to keep track of the previous node in the level.
     - For each node in the level:
       - If `p` is not `null`, set `p.next` to the current node.
       - Update `p` to the current node.
       - Add the left and right children of the current node to the queue if they exist.

3. **Return Value:**
   - After processing all levels, return the root node. The `next` pointers will be set appropriately.

This approach ensures that all nodes at the same level are connected correctly. The time complexity is O(n), where `n` is the number of nodes in the tree, as each node is processed once.

#### Java

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        if (root == null) {
            return root;
        }
        Deque<Node> q = new ArrayDeque<>();
        q.offer(root);
        while (!q.isEmpty()) {
            Node p = null;
            for (int n = q.size(); n > 0; n--) {
                Node node = q.poll();
                if (p != null) {
                    p.next = node;
                }
                p = node;
                if (node.left != null) {
                    q.offer(node.left);
                }
                if (node.right != null) {
                    q.offer(node.right);
                }
            }
        }
        return root;
    }
}
```

# [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list)

## Description

<p>Given the <code>root</code> of a binary tree, flatten the tree into a &quot;linked list&quot;:</p>

<ul>
	<li>The &quot;linked list&quot; should use the same <code>TreeNode</code> class where the <code>right</code> child pointer points to the next node in the list and the <code>left</code> child pointer is always <code>null</code>.</li>
	<li>The &quot;linked list&quot; should be in the same order as a <a href="https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR" target="_blank"><strong>pre-order</strong><strong> traversal</strong></a> of the binary tree.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0114.Flatten%20Binary%20Tree%20to%20Linked%20List/images/flaten.jpg" style="width: 500px; height: 226px;" />
<pre>
<strong>Input:</strong> root = [1,2,5,3,4,null,6]
<strong>Output:</strong> [1,null,2,null,3,null,4,null,5,null,6]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = [0]
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Can you flatten the tree in-place (with <code>O(1)</code> extra space)?

# Solutions

# Intuition
The problem is to flatten a binary tree into a linked list in-place. The resulting linked list should be in the same order as a pre-order traversal of the tree. In essence, the tree should be transformed into a right-skewed tree where each node only has a right child.

# Approach
1. **Iterate Through the Tree:**
   - Use a `while` loop to traverse the tree starting from the root.

2. **Flatten the Left Subtree:**
   - For each node, if it has a left child:
     - Find the rightmost node of the left subtree.
     - Connect the rightmost node's `right` pointer to the current node's right subtree.
     - Move the left subtree to the right subtree position.
     - Set the left child of the current node to `null`.

3. **Move to the Next Node:**
   - Move to the right child of the current node and continue the process.

This approach ensures that the binary tree is flattened into a linked list with O(n) time complexity, where `n` is the number of nodes in the tree. The space complexity is O(1) as it performs the operations in-place without using extra space.

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
    public void flatten(TreeNode root) {
        while (root != null) {
            if (root.left != null) {
                TreeNode pre = root.left;
                while (pre.right != null) {
                    pre = pre.right;
                }

                pre.right = root.right;

                root.right = root.left;
                root.left = null;
            }
            root = root.right;
        }
    }
}
```

<br>
<br>
<br>

# [112. Path Sum](https://leetcode.com/problems/path-sum)

## Description

<p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <code>true</code> if the tree has a <strong>root-to-leaf</strong> path such that adding up all the values along the path equals <code>targetSum</code>.</p>

<p>A <strong>leaf</strong> is a node with no children.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0112.Path%20Sum/images/pathsum1.jpg" style="width: 500px; height: 356px;" />
<pre>
<strong>Input:</strong> root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
<strong>Output:</strong> true
<strong>Explanation:</strong> The root-to-leaf path with the target sum is shown.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0112.Path%20Sum/images/pathsum2.jpg" />
<pre>
<strong>Input:</strong> root = [1,2,3], targetSum = 5
<strong>Output:</strong> false
<strong>Explanation:</strong> There two root-to-leaf paths in the tree:
(1 --&gt; 2): The sum is 3.
(1 --&gt; 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = [], targetSum = 0
<strong>Output:</strong> false
<strong>Explanation:</strong> Since the tree is empty, there are no root-to-leaf paths.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 5000]</code>.</li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
	<li><code>-1000 &lt;= targetSum &lt;= 1000</code></li>
</ul>

# Solutions

# Intuition
To determine if a binary tree has a root-to-leaf path that sums to a given target value, we need to traverse the tree and check if there exists a path where the sum of the node values equals the target value.

# Approach
1. **Recursive Depth-First Search (DFS):**
   - Use a recursive function to traverse the tree starting from the root node.

2. **Base Case:**
   - If the current node is `null`, return `false` because there's no path through this node.

3. **Update Target Sum:**
   - Subtract the value of the current node from the target sum.

4. **Check Leaf Node:**
   - If the current node is a leaf node (i.e., it has no left or right children) and the updated target sum is `0`, return `true`.

5. **Recursive Calls:**
   - Recursively call the function for the left and right children of the current node.
   - Return `true` if either subtree contains a valid path sum, otherwise return `false`.

This approach efficiently checks for the presence of a path that sums to the target value with a time complexity of O(n), where `n` is the number of nodes in the tree, as each node is visited once. The space complexity is O(h), where `h` is the height of the tree, due to the call stack in recursion.

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
    public boolean hasPathSum(TreeNode root, int targetSum) {
        return dfs(root, targetSum);
    }

    private boolean dfs(TreeNode root, int s) {
        if (root == null) {
            return false;
        }
        s -= root.val;
        if (root.left == null && root.right == null && s == 0) {
            return true;
        }
        return dfs(root.left, s) || dfs(root.right, s);
    }
}
```

<br>
<br>
<br>

# [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers)

## Description

<p>You are given the <code>root</code> of a binary tree containing digits from <code>0</code> to <code>9</code> only.</p>

<p>Each root-to-leaf path in the tree represents a number.</p>

<ul>
	<li>For example, the root-to-leaf path <code>1 -&gt; 2 -&gt; 3</code> represents the number <code>123</code>.</li>
</ul>

<p>Return <em>the total sum of all root-to-leaf numbers</em>. Test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.</p>

<p>A <strong>leaf</strong> node is a node with no children.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0129.Sum%20Root%20to%20Leaf%20Numbers/images/num1tree.jpg" style="width: 212px; height: 182px;" />
<pre>
<strong>Input:</strong> root = [1,2,3]
<strong>Output:</strong> 25
<strong>Explanation:</strong>
The root-to-leaf path <code>1-&gt;2</code> represents the number <code>12</code>.
The root-to-leaf path <code>1-&gt;3</code> represents the number <code>13</code>.
Therefore, sum = 12 + 13 = <code>25</code>.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0129.Sum%20Root%20to%20Leaf%20Numbers/images/num2tree.jpg" style="width: 292px; height: 302px;" />
<pre>
<strong>Input:</strong> root = [4,9,0,5,1]
<strong>Output:</strong> 1026
<strong>Explanation:</strong>
The root-to-leaf path <code>4-&gt;9-&gt;5</code> represents the number 495.
The root-to-leaf path <code>4-&gt;9-&gt;1</code> represents the number 491.
The root-to-leaf path <code>4-&gt;0</code> represents the number 40.
Therefore, sum = 495 + 491 + 40 = <code>1026</code>.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 9</code></li>
	<li>The depth of the tree will not exceed <code>10</code>.</li>
</ul>

# Solutions

# Intuition
To find the sum of all numbers formed by root-to-leaf paths in a binary tree, we need to traverse the tree and accumulate the numbers formed along each path. Each path's number is formed by concatenating the values of nodes from the root to the leaves.

# Approach
1. **Recursive Depth-First Search (DFS):**
   - Use a recursive function to traverse the tree starting from the root node, maintaining the current number formed along the path.

2. **Update Current Number:**
   - For each node, update the current number by multiplying the existing number by 10 and adding the value of the current node.

3. **Leaf Node Check:**
   - If the current node is a leaf (i.e., it has no left or right children), return the current number since it represents a complete root-to-leaf path.

4. **Recursive Calls:**
   - Recursively call the function for the left and right children of the current node.
   - Sum up the values returned from the left and right subtree calls to get the total sum of all numbers formed.

This approach efficiently calculates the sum of all root-to-leaf numbers with a time complexity of O(n), where `n` is the number of nodes in the tree, as each node is visited once. The space complexity is O(h), where `h` is the height of the tree, due to the call stack in recursion.

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
    public int sumNumbers(TreeNode root) {
        return dfs(root, 0);
    }

    private int dfs(TreeNode root, int s) {
        if (root == null) {
            return 0;
        }
        s = s * 10 + root.val;
        if (root.left == null && root.right == null) {
            return s;
        }
        return dfs(root.left, s) + dfs(root.right, s);
    }
}
```

<br>
<br>
<br>

# [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum)

## Description

<p>A <strong>path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence <strong>at most once</strong>. Note that the path does not need to pass through the root.</p>

<p>The <strong>path sum</strong> of a path is the sum of the node&#39;s values in the path.</p>

<p>Given the <code>root</code> of a binary tree, return <em>the maximum <strong>path sum</strong> of any <strong>non-empty</strong> path</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0124.Binary%20Tree%20Maximum%20Path%20Sum/images/exx1.jpg" style="width: 322px; height: 182px;" />
<pre>
<strong>Input:</strong> root = [1,2,3]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The optimal path is 2 -&gt; 1 -&gt; 3 with a path sum of 2 + 1 + 3 = 6.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0124.Binary%20Tree%20Maximum%20Path%20Sum/images/exx2.jpg" />
<pre>
<strong>Input:</strong> root = [-10,9,20,null,null,15,7]
<strong>Output:</strong> 42
<strong>Explanation:</strong> The optimal path is 15 -&gt; 20 -&gt; 7 with a path sum of 15 + 20 + 7 = 42.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 3 * 10<sup>4</sup>]</code>.</li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
</ul>

# Solutions

# Intuition
The problem is to find the maximum path sum in a binary tree. The path sum is defined as the sum of node values along a path, which can start and end anywhere in the tree. To achieve this, we need to consider paths that include the root node and those that might go through the root node.

# Approach
1. **Recursive Depth-First Search (DFS):**
   - Use a recursive function to traverse the tree, calculating the maximum path sum for each node.

2. **Path Sum Calculation:**
   - For each node, calculate the maximum path sum that can be obtained by including the node and extending to its left or right children. 
   - For each node, compute the maximum path sum by considering paths that might include the node itself, its left subtree, and its right subtree.

3. **Update Maximum Path Sum:**
   - Update a global variable `ans` to keep track of the maximum path sum encountered so far. This is updated by considering the sum of the current node’s value and the maximum sums of the left and right subtrees.

4. **Return Path Sum:**
   - For each node, return the maximum path sum that extends from the node to any leaf node, either through the left or right subtree.

By recursively calculating the maximum path sum that can be extended through each node and updating the global maximum path sum, the solution efficiently computes the desired result with a time complexity of O(n), where `n` is the number of nodes in the tree.

**Steps:**
- Traverse the tree with a DFS approach.
- Calculate the maximum path sum for each node considering its left and right subtrees.
- Update the maximum path sum encountered so far.
- Return the maximum path sum for paths that extend from the current node to its children.

The space complexity is O(h) due to the recursion stack, where `h` is the height of the tree.

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
    private int ans = -1001;

    public int maxPathSum(TreeNode root) {
        dfs(root);
        return ans;
    }

    private int dfs(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int left = Math.max(0, dfs(root.left));
        int right = Math.max(0, dfs(root.right));
        ans = Math.max(ans, root.val + left + right);
        return root.val + Math.max(left, right);
    }
}
```

<br>
<br>
<br>

# [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator)

## Description

<p>Implement the <code>BSTIterator</code> class that represents an iterator over the <strong><a href="https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR)" target="_blank">in-order traversal</a></strong> of a binary search tree (BST):</p>

<ul>
	<li><code>BSTIterator(TreeNode root)</code> Initializes an object of the <code>BSTIterator</code> class. The <code>root</code> of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.</li>
	<li><code>boolean hasNext()</code> Returns <code>true</code> if there exists a number in the traversal to the right of the pointer, otherwise returns <code>false</code>.</li>
	<li><code>int next()</code> Moves the pointer to the right, then returns the number at the pointer.</li>
</ul>

<p>Notice that by initializing the pointer to a non-existent smallest number, the first call to <code>next()</code> will return the smallest element in the BST.</p>

<p>You may assume that <code>next()</code> calls will always be valid. That is, there will be at least a next number in the in-order traversal when <code>next()</code> is called.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0173.Binary%20Search%20Tree%20Iterator/images/bst-tree.png" style="width: 189px; height: 178px;" />
<pre>
<strong>Input</strong>
[&quot;BSTIterator&quot;, &quot;next&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
<strong>Output</strong>
[null, 3, 7, true, 9, true, 15, true, 20, false]

<strong>Explanation</strong>
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next(); // return 3
bSTIterator.next(); // return 7
bSTIterator.hasNext(); // return True
bSTIterator.next(); // return 9
bSTIterator.hasNext(); // return True
bSTIterator.next(); // return 15
bSTIterator.hasNext(); // return True
bSTIterator.next(); // return 20
bSTIterator.hasNext(); // return False

</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>5</sup>]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 10<sup>6</sup></code></li>
	<li>At most <code>10<sup>5</sup></code> calls will be made to <code>hasNext</code>, and <code>next</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>Could you implement <code>next()</code> and <code>hasNext()</code> to run in average <code>O(1)</code> time and use&nbsp;<code>O(h)</code> memory, where <code>h</code> is the height of the tree?</li>
</ul>

# Solutions

# Intuition
The `BSTIterator` class is designed to traverse a binary search tree (BST) in sorted order. It allows for efficient retrieval of the next smallest element in the BST while keeping track of whether more elements are available.

# Approach
1. **Inorder Traversal:**
   - To get the elements of the BST in sorted order, perform an inorder traversal. This traversal processes nodes in the left subtree, then the root node, and finally the nodes in the right subtree.
   - During the traversal, collect the values of the nodes in a list.

2. **Iterator Methods:**
   - **`next()` Method:**
     - Returns the next smallest element from the BST. This is achieved by accessing the current index of the list and then incrementing the index.
   - **`hasNext()` Method:**
     - Checks if there are more elements to retrieve by comparing the current index with the size of the list.

3. **Constructor:**
   - The constructor takes the root of the BST and initializes the list of node values by performing an inorder traversal.

**Steps:**
- **Inorder Traversal:**
  - Traverse the BST to collect node values in sorted order and store them in a list.
- **Next Element Retrieval:**
  - Return the value at the current index and move to the next index.
- **Check for More Elements:**
  - Determine if more elements are available based on the current index and the size of the list.

**Space Complexity:**
- The space complexity is O(n) due to storing all node values in the list, where `n` is the number of nodes in the BST.

**Time Complexity:**
- The time complexity for the `next()` and `hasNext()` methods is O(1) since they involve simple list operations.

This approach ensures that elements are accessed in sorted order, leveraging the properties of the BST and efficient list operations.

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
class BSTIterator {
    private int cur = 0;
    private List<Integer> vals = new ArrayList<>();

    public BSTIterator(TreeNode root) {
        inorder(root);
    }

    public int next() {
        return vals.get(cur++);
    }

    public boolean hasNext() {
        return cur < vals.size();
    }

    private void inorder(TreeNode root) {
        if (root != null) {
            inorder(root.left);
            vals.add(root.val);
            inorder(root.right);
        }
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */
```

# [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes)

## Description

<p>Given the <code>root</code> of a <strong>complete</strong> binary tree, return the number of the nodes in the tree.</p>

<p>According to <strong><a href="http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees" target="_blank">Wikipedia</a></strong>, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between <code>1</code> and <code>2<sup>h</sup></code> nodes inclusive at the last level <code>h</code>.</p>

<p>Design an algorithm that runs in less than&nbsp;<code data-stringify-type="code">O(n)</code>&nbsp;time complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0222.Count%20Complete%20Tree%20Nodes/images/complete.jpg" style="width: 372px; height: 302px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,4,5,6]
<strong>Output:</strong> 6
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = [1]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 5 * 10<sup>4</sup>]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 5 * 10<sup>4</sup></code></li>
	<li>The tree is guaranteed to be <strong>complete</strong>.</li>
</ul>

# Solutions

# Intuition
To count the number of nodes in a complete binary tree efficiently, we leverage the properties of such a tree where all levels are fully filled except possibly for the last level. The key is to use the depth of the left and right subtrees to determine whether to count the nodes in the left or right subtree.

# Approach
1. **Compute Depth:**
   - Calculate the depth of the left and right subtrees. In a complete binary tree, if the depth of the left and right subtrees is equal, then the left subtree is full and the right subtree has more nodes.

2. **Count Nodes:**
   - If the depths of the left and right subtrees are the same, it implies the left subtree is complete. The number of nodes in the left subtree can be computed using the formula `2^depth - 1`, where `depth` is the depth of the left subtree. Then, recursively count the nodes in the right subtree.
   - If the depths are not equal, the right subtree is complete. The number of nodes in the right subtree can be computed using the formula `2^depth - 1`, where `depth` is the depth of the right subtree. Then, recursively count the nodes in the left subtree.

3. **Depth Calculation:**
   - The depth of a subtree is determined by traversing from the root to the leftmost leaf node and counting the number of levels.

**Steps:**
- **Calculate Depth:**
  - Use a helper function to compute the depth of the left or right subtree.
- **Count Nodes Based on Depth:**
  - Use bit shifting to compute the number of nodes in a complete subtree.
- **Recursive Counting:**
  - Adjust the count based on whether the left or right subtree is full and recursively count the nodes in the remaining subtree.

**Space Complexity:**
- The space complexity is O(log^2 n) due to the recursion stack, where `n` is the number of nodes.

**Time Complexity:**
- The time complexity is O(log^2 n), as each level of the tree is processed in O(log n) time due to the depth calculations and recursive calls.

This approach efficiently counts the number of nodes in a complete binary tree by leveraging its properties and depth calculations.

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
    public int countNodes(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int left = depth(root.left);
        int right = depth(root.right);
        if (left == right) {
            return (1 << left) + countNodes(root.right);
        }
        return (1 << right) + countNodes(root.left);
    }

    private int depth(TreeNode root) {
        int d = 0;
        for (; root != null; root = root.left) {
            ++d;
        }
        return d;
    }
}
```

<br>
<br>
<br>

# [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree)

## Description

<!-- description:start -->

<p>Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.</p>

<p>According to the <a href="https://en.wikipedia.org/wiki/Lowest_common_ancestor" target="_blank">definition of LCA on Wikipedia</a>: &ldquo;The lowest common ancestor is defined between two nodes <code>p</code> and <code>q</code> as the lowest node in <code>T</code> that has both <code>p</code> and <code>q</code> as descendants (where we allow <b>a node to be a descendant of itself</b>).&rdquo;</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0236.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/images/binarytree.png" style="width: 200px; height: 190px;" />
<pre>
<strong>Input:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
<strong>Output:</strong> 3
<strong>Explanation:</strong> The LCA of nodes 5 and 1 is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0236.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/images/binarytree.png" style="width: 200px; height: 190px;" />
<pre>
<strong>Input:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
<strong>Output:</strong> 5
<strong>Explanation:</strong> The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = [1,2], p = 1, q = 2
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[2, 10<sup>5</sup>]</code>.</li>
	<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code></li>
	<li>All <code>Node.val</code> are <strong>unique</strong>.</li>
	<li><code>p != q</code></li>
	<li><code>p</code> and <code>q</code> will exist in the tree.</li>
</ul>

# Solutions

# Intuition
The lowest common ancestor (LCA) of two nodes in a binary tree is the deepest node that is an ancestor to both nodes. To find the LCA, we can use a recursive approach to traverse the tree and determine the point where the paths to both nodes diverge.

# Approach
1. **Base Case:**
   - If the current node is null, return null.
   - If the current node matches either `p` or `q`, return the current node. This signifies that either `p` or `q` has been found.

2. **Recursive Case:**
   - Recursively search for `p` and `q` in the left subtree.
   - Recursively search for `p` and `q` in the right subtree.

3. **Determine the LCA:**
   - If both the left and right recursive calls return non-null values, it means that `p` is in one subtree and `q` is in the other. Thus, the current node is their lowest common ancestor.
   - If only one of the recursive calls returns a non-null value, then both `p` and `q` are located in that subtree. Hence, return the non-null value from the recursive calls.

**Steps:**
- **Check if Node is p or q:**
  - If the node is `p` or `q`, return it.
- **Recursive Search:**
  - Search for `p` and `q` in the left and right subtrees.
- **Determine LCA:**
  - If both left and right calls return non-null values, return the current node.
  - Otherwise, return the non-null result from either the left or right subtree.

#### Java

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) {
            return root;
        }
        var left = lowestCommonAncestor(root.left, p, q);
        var right = lowestCommonAncestor(root.right, p, q);
        if (left != null && right != null) {
            return root;
        }
        return left == null ? right : left;
    }
}
```

<br>
<br>
<br>

