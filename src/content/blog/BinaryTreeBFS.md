---
title: "Binary Tree BFS"
description: "All solutions leetcode Top Interview 150 Binary Tree BFS"
pubDate: "2024"
heroImage: "../img/img_blog/1dp.jpg"
---

# [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view)

## Description

<!-- description:start -->

<p>Given the <code>root</code> of a binary tree, imagine yourself standing on the <strong>right side</strong> of it, return <em>the values of the nodes you can see ordered from top to bottom</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0199.Binary%20Tree%20Right%20Side%20View/images/tree.jpg" style="width: 401px; height: 301px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,null,5,null,4]
<strong>Output:</strong> [1,3,4]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [1,null,3]
<strong>Output:</strong> [1,3]
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
To view the right side of a binary tree, we need to capture the last node seen at each level of the tree. This way, we will see the nodes that are visible from the right side.

# Approach
1. **Breadth-First Search (BFS):**
   - Use BFS to traverse the tree level by level. BFS ensures that nodes at each level are processed before moving to the next level.

2. **Queue for Level Order Traversal:**
   - Utilize a queue to help in BFS traversal. Start by adding the root node to the queue.
   - For each level of the tree, the rightmost node is the last node to be processed for that level. Capture this node's value.

3. **Processing Each Level:**
   - For each level, iterate through all nodes in the queue (which represents that level).
   - For each node, add its children to the queue for processing in the next level.
   - After processing all nodes at the current level, record the value of the last node processed (rightmost node).

4. **Edge Cases:**
   - If the tree is empty (`root` is `null`), return an empty list.

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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> ans = new ArrayList<>();
        if (root == null) {
            return ans;
        }
        Deque<TreeNode> q = new ArrayDeque<>();
        q.offer(root);
        while (!q.isEmpty()) {
            ans.add(q.peekLast().val);
            for (int n = q.size(); n > 0; n--) {
                TreeNode node = q.poll();
                if (node.left != null) {
                    q.offer(node.left);
                }
                if (node.right != null) {
                    q.offer(node.right);
                }
            }
        }
        return ans;
    }
}
```

# [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree)

## Description

<!-- description:start -->

Given the <code>root</code> of a binary tree, return <em>the average value of the nodes on each level in the form of an array</em>. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0637.Average%20of%20Levels%20in%20Binary%20Tree/images/avg1-tree.jpg" style="width: 277px; height: 302px;" />
<pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0600-0699/0637.Average%20of%20Levels%20in%20Binary%20Tree/images/avg2-tree.jpg" style="width: 292px; height: 302px;" />
<pre>
<strong>Input:</strong> root = [3,9,20,15,7]
<strong>Output:</strong> [3.00000,14.50000,11.00000]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<!-- description:end -->

# Solutions

# Intuition
To calculate the average value of nodes at each level of a binary tree, we need to traverse the tree level by level and compute the sum and count of nodes at each level.

# Approach
1. **Depth-First Search (DFS):**
   - Use DFS to traverse the tree and keep track of the sum and count of nodes at each level.
   - Maintain two lists: one for the sum of values at each level (`s`) and another for the count of nodes at each level (`cnt`).

2. **Updating Sum and Count:**
   - As we traverse each node, update the sum and count for the current level.
   - If the level is being visited for the first time, initialize the sum and count for that level.
   - For subsequent visits to the same level, update the existing sum and count.

3. **Computing Averages:**
   - After traversing the entire tree, compute the average for each level by dividing the total sum by the number of nodes at that level.
   - Convert these averages to `Double` and store them in a result list.

4. **Edge Cases:**
   - If the tree is empty (`root` is `null`), return an empty list.

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
    private List<Long> s = new ArrayList<>();
    private List<Integer> cnt = new ArrayList<>();

    public List<Double> averageOfLevels(TreeNode root) {
        dfs(root, 0);
        List<Double> ans = new ArrayList<>();
        for (int i = 0; i < s.size(); i++) {
            ans.add(s.get(i) * 1.0 / cnt.get(i));
        }
        return ans;
    }

    private void dfs(TreeNode root, int i) {
        if (root == null) {
            return;
        }
        if (s.size() == i) {
            s.add((long) root.val);
            cnt.add(1);
        } else {
            s.set(i, s.get(i) + root.val);
            cnt.set(i, cnt.get(i) + 1);
        }
        dfs(root.left, i + 1);
        dfs(root.right, i + 1);
    }
}
```

<br>
<br>
<br>


# [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal)

## Description

<p>Given the <code>root</code> of a binary tree, return <em>the level order traversal of its nodes&#39; values</em>. (i.e., from left to right, level by level).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0102.Binary%20Tree%20Level%20Order%20Traversal/images/tree1.jpg" style="width: 277px; height: 302px;" />
<pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> [[3],[9,20],[15,7]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [1]
<strong>Output:</strong> [[1]]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
</ul>


# Solutions

# Intuition
To get the level order traversal of a binary tree, we need to visit nodes level by level from top to bottom. This can be efficiently achieved using a breadth-first traversal approach.

# Approach
1. **Breadth-First Search (BFS):**
   - Use BFS to traverse the tree level by level.
   - Utilize a queue to keep track of nodes to be processed. This ensures nodes are processed in the order they are added, maintaining the level-wise structure.

2. **Processing Nodes:**
   - Start by adding the root node to the queue.
   - For each level, dequeue nodes, add their values to a temporary list (`t`), and enqueue their children.
   - After processing all nodes at the current level, add the temporary list (`t`) to the result list (`ans`).

3. **Edge Cases:**
   - If the tree is empty (`root` is `null`), return an empty list.

The time complexity of this approach is O(n), where `n` is the number of nodes in the tree, as each node is processed exactly once.

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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> ans = new ArrayList<>();
        if (root == null) {
            return ans;
        }
        Deque<TreeNode> q = new ArrayDeque<>();
        q.offer(root);
        while (!q.isEmpty()) {
            List<Integer> t = new ArrayList<>();
            for (int n = q.size(); n > 0; n--) {
                TreeNode node = q.poll();
                t.add(node.val);
                if (node.left != null) {
                    q.offer(node.left);
                }
                if (node.right != null) {
                    q.offer(node.right);
                }
            }
            ans.add(t);
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal)

## Description

<p>Given the <code>root</code> of a binary tree, return <em>the zigzag level order traversal of its nodes&#39; values</em>. (i.e., from left to right, then right to left for the next level and alternate between).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0103.Binary%20Tree%20Zigzag%20Level%20Order%20Traversal/images/tree1.jpg" style="width: 277px; height: 302px;" />
<pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> [[3],[20,9],[15,7]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [1]
<strong>Output:</strong> [[1]]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>

# Solutions

# Intuition
To achieve a zigzag level order traversal of a binary tree, we need to traverse the tree level by level but alternate the direction of traversal at each level. This requires visiting nodes from left to right on some levels and from right to left on others.

# Approach
1. **Breadth-First Search (BFS) with Zigzag Pattern:**
   - Use BFS to traverse the tree level by level.
   - Utilize a queue to manage nodes at each level and a boolean flag to determine the direction of traversal.

2. **Processing Nodes:**
   - Initialize the queue with the root node and a boolean flag (`left`) to track the current direction of traversal.
   - For each level, dequeue nodes, add their values to a temporary list (`t`), and enqueue their children.
   - If the current level is supposed to be traversed in reverse order (`left` is `false`), reverse the temporary list before adding it to the result list (`ans`).
   - Toggle the direction flag (`left`) after processing each level.

3. **Edge Cases:**
   - If the tree is empty (`root` is `null`), return an empty list.

The time complexity of this approach is O(n), where `n` is the number of nodes in the tree, as each node is processed exactly once.

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
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> ans = new ArrayList<>();
        if (root == null) {
            return ans;
        }
        Deque<TreeNode> q = new ArrayDeque<>();
        q.offer(root);
        boolean left = true;
        while (!q.isEmpty()) {
            List<Integer> t = new ArrayList<>();
            for (int n = q.size(); n > 0; n--) {
                TreeNode node = q.poll();
                t.add(node.val);
                if (node.left != null) {
                    q.offer(node.left);
                }
                if (node.right != null) {
                    q.offer(node.right);
                }
            }
            if (!left) {
                Collections.reverse(t);
            }
            ans.add(t);
            left = !left;
        }
        return ans;
    }
}
```
