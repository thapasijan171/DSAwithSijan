---
title: "Graph General"
description: "All solutions leetcode Top Interview 150 Graph General"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/H7V7TmLIagV88Uj1-an%2520idea%2520view%2520%25F0%259F%25AA%259F.jpeg?w=750&h=750"
---

# [200. Number of Islands](https://leetcode.com/problems/number-of-islands)

## Description

<p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>&#39;1&#39;</code>s (land) and <code>&#39;0&#39;</code>s (water), return <em>the number of islands</em>.</p>

<p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> grid = [
  [&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]
]
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;]
]
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 300</code></li>
	<li><code>grid[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
</ul>

# Solutions

# Number of Islands

**Algorithm Used:** Union-Find (Disjoint Set Union, DSU)

## Intuition
The problem involves finding the number of distinct islands in a 2D grid where '1' represents land and '0' represents water. An island is a group of connected lands (vertically or horizontally). The solution uses the Union-Find data structure to efficiently group and count distinct islands.

## Approach
1. **Initialization**:
   - Convert the 2D grid into a 1D representation using a Union-Find data structure.
   - Initialize each cell in the grid as its own parent in the Union-Find structure.

2. **Union Operation**:
   - Traverse through each cell in the grid.
   - For each land cell ('1'), check its right and down neighbors (to avoid redundant checks).
   - If a neighbor is also land ('1'), perform a union operation to group the current cell with the neighbor.

3. **Find Operation**:
   - Use path compression to efficiently find the root of a cell in the Union-Find structure.

4. **Counting Islands**:
   - After processing all cells, count the number of unique roots (i.e., distinct islands) by iterating through the grid and checking if a cell is its own root.

5. **Return Result**:
   - Return the count of unique islands.

#### Java

```java
class Solution {
    private int[] p;

    public int numIslands(char[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        p = new int[m * n];
        for (int i = 0; i < p.length; i++) {
            p[i] = i;
        }
        int[] dirs = {1, 0, 1};
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1') {
                    for (int k = 0; k < 2; k++) {
                        int x = i + dirs[k];
                        int y = j + dirs[k + 1];
                        if (x < m && y < n && grid[x][y] == '1') {
                            p[find(x * n + y)] = find(i * n + j);
                        }
                    }
                }
            }
        }
        int ans = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1' && i * n + j == find(i * n + j)) {
                    ++ans;
                }
            }
        }
        return ans;
    }

    private int find(int x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
}
```

<br>
<br>
<br>

# [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions)

## Description

<!-- description:start -->

<p>You are given an <code>m x n</code> matrix <code>board</code> containing <strong>letters</strong> <code>&#39;X&#39;</code> and <code>&#39;O&#39;</code>, <strong>capture regions</strong> that are <strong>surrounded</strong>:</p>

<ul>
	<li><strong>Connect</strong>: A cell is connected to adjacent cells horizontally or vertically.</li>
	<li><strong>Region</strong>: To form a region <strong>connect every</strong> <code>&#39;O&#39;</code> cell.</li>
	<li><strong>Surround</strong>: The region is surrounded with <code>&#39;X&#39;</code> cells if you can <strong>connect the region </strong>with <code>&#39;X&#39;</code> cells and none of the region cells are on the edge of the <code>board</code>.</li>
</ul>

<p>A <strong>surrounded region is captured</strong> by replacing all <code>&#39;O&#39;</code>s with <code>&#39;X&#39;</code>s in the input matrix <code>board</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;]]</span></p>

<p><strong>Explanation:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0130.Surrounded%20Regions/images/xogrid.jpg" style="width: 367px; height: 158px;" />
<p>In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[&quot;X&quot;]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[[&quot;X&quot;]]</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == board.length</code></li>
	<li><code>n == board[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>board[i][j]</code> is <code>&#39;X&#39;</code> or <code>&#39;O&#39;</code>.</li>
</ul>

# Solutions

# Surrounded Regions

**Algorithm Used:** Union-Find (Disjoint Set Union, DSU)

## Intuition
The problem involves marking 'O' cells that are surrounded by 'X' cells in a 2D board. Cells connected to the border are not surrounded and should remain as 'O'. The solution uses the Union-Find data structure to efficiently group and identify connected regions.

## Approach
1. **Initialization**:
   - Convert the 2D board into a 1D representation using a Union-Find data structure.
   - Initialize each cell in the board as its own parent, with an additional virtual node for the border.

2. **Union Operation**:
   - Traverse the border cells of the board. For each 'O' cell on the border, connect it to the virtual node representing the border.
   - For non-border 'O' cells, connect them to their adjacent 'O' cells.

3. **Find Operation**:
   - Use path compression to efficiently find the root of a cell in the Union-Find structure.

4. **Update Board**:
   - After processing all cells, iterate through the board and mark 'O' cells as 'X' if they are not connected to the border node.

5. **Return Result**:
   - Modify the board in place to reflect the changes.

#### Java

```java
class Solution {
    private int[] p;

    public void solve(char[][] board) {
        int m = board.length;
        int n = board[0].length;
        p = new int[m * n + 1];
        for (int i = 0; i < p.length; i++) {
            p[i] = i;
        }
        int[] dirs = {-1, 0, 1, 0, -1};
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 'O') {
                    if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                        p[find(i * n + j)] = find(m * n);
                    } else {
                        for (int k = 0; k < 4; k++) {
                            int x = i + dirs[k];
                            int y = j + dirs[k + 1];
                            if (board[x][y] == 'O') {
                                p[find(x * n + y)] = find(i * n + j);
                            }
                        }
                    }
                }
            }
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 'O' && find(i * n + j) != find(m * n)) {
                    board[i][j] = 'X';
                }
            }
        }
    }

    private int find(int x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
}
```

<br>
<br>
<br>

# [133. Clone Graph](https://leetcode.com/problems/clone-graph)

## Description

<p>Given a reference of a node in a <strong><a href="https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph" target="_blank">connected</a></strong> undirected graph.</p>

<p>Return a <a href="https://en.wikipedia.org/wiki/Object_copying#Deep_copy" target="_blank"><strong>deep copy</strong></a> (clone) of the graph.</p>

<p>Each node in the graph contains a value (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.</p>

<pre>
class Node {
    public int val;
    public List&lt;Node&gt; neighbors;
}
</pre>

<p>&nbsp;</p>

<p><strong>Test case format:</strong></p>

<p>For simplicity, each node&#39;s value is the same as the node&#39;s index (1-indexed). For example, the first node with <code>val == 1</code>, the second node with <code>val == 2</code>, and so on. The graph is represented in the test case using an adjacency list.</p>

<p><b>An adjacency list</b> is a collection of unordered <b>lists</b> used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.</p>

<p>The given node will always be the first node with <code>val = 1</code>. You must return the <strong>copy of the given node</strong> as a reference to the cloned graph.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0133.Clone%20Graph/images/133_clone_graph_question.png" style="width: 454px; height: 500px;" />
<pre>
<strong>Input:</strong> adjList = [[2,4],[1,3],[2,4],[1,3]]
<strong>Output:</strong> [[2,4],[1,3],[2,4],[1,3]]
<strong>Explanation:</strong> There are 4 nodes in the graph.
1st node (val = 1)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0133.Clone%20Graph/images/graph.png" style="width: 163px; height: 148px;" />
<pre>
<strong>Input:</strong> adjList = [[]]
<strong>Output:</strong> [[]]
<strong>Explanation:</strong> Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> adjList = []
<strong>Output:</strong> []
<strong>Explanation:</strong> This an empty graph, it does not have any nodes.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the graph is in the range <code>[0, 100]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 100</code></li>
	<li><code>Node.val</code> is unique for each node.</li>
	<li>There are no repeated edges and no self-loops in the graph.</li>
	<li>The Graph is connected and all nodes can be visited starting from the given node.</li>
</ul>

# Solutions

# Clone Graph

**Algorithm Used:** Depth-First Search (DFS)

## Intuition
The problem involves creating a deep copy of an undirected graph where each node has a list of its neighbors. The solution uses Depth-First Search (DFS) to traverse the graph and clone each node while maintaining the structure of the original graph.

## Approach
1. **Initialization**:
   - Use a `Map` to keep track of the original nodes and their corresponding cloned nodes.

2. **DFS Traversal**:
   - If the node is `null`, return `null`.
   - If the node has already been cloned (i.e., exists in the `visited` map), return the cloned node.
   - Create a new node with the same value as the original node.
   - Add the new node to the `visited` map to mark it as cloned.
   - Recursively clone each neighbor of the original node and add the cloned neighbors to the new node.

3. **Return Result**:
   - Return the cloned node, which represents the root of the cloned graph.

This approach ensures that each node and its neighbors are cloned efficiently while preserving the original graph's structure.


#### Java

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    private Map<Node, Node> visited = new HashMap<>();

    public Node cloneGraph(Node node) {
        if (node == null) {
            return null;
        }
        if (visited.containsKey(node)) {
            return visited.get(node);
        }
        Node clone = new Node(node.val);
        visited.put(node, clone);
        for (Node e : node.neighbors) {
            clone.neighbors.add(cloneGraph(e));
        }
        return clone;
    }
}
```

<br>
<br>
<br>

# [399. Evaluate Division](https://leetcode.com/problems/evaluate-division)

## Description

<p>You are given an array of variable pairs <code>equations</code> and an array of real numbers <code>values</code>, where <code>equations[i] = [A<sub>i</sub>, B<sub>i</sub>]</code> and <code>values[i]</code> represent the equation <code>A<sub>i</sub> / B<sub>i</sub> = values[i]</code>. Each <code>A<sub>i</sub></code> or <code>B<sub>i</sub></code> is a string that represents a single variable.</p>

<p>You are also given some <code>queries</code>, where <code>queries[j] = [C<sub>j</sub>, D<sub>j</sub>]</code> represents the <code>j<sup>th</sup></code> query where you must find the answer for <code>C<sub>j</sub> / D<sub>j</sub> = ?</code>.</p>

<p>Return <em>the answers to all queries</em>. If a single answer cannot be determined, return <code>-1.0</code>.</p>

<p><strong>Note:</strong> The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.</p>

<p><strong>Note:&nbsp;</strong>The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;]], values = [2.0,3.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;e&quot;],[&quot;a&quot;,&quot;a&quot;],[&quot;x&quot;,&quot;x&quot;]]
<strong>Output:</strong> [6.00000,0.50000,-1.00000,1.00000,-1.00000]
<strong>Explanation:</strong> 
Given: <em>a / b = 2.0</em>, <em>b / c = 3.0</em>
queries are: <em>a / c = ?</em>, <em>b / a = ?</em>, <em>a / e = ?</em>, <em>a / a = ?</em>, <em>x / x = ? </em>
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
note: x is undefined =&gt; -1.0</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;],[&quot;bc&quot;,&quot;cd&quot;]], values = [1.5,2.5,5.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;c&quot;,&quot;b&quot;],[&quot;bc&quot;,&quot;cd&quot;],[&quot;cd&quot;,&quot;bc&quot;]]
<strong>Output:</strong> [3.75000,0.40000,5.00000,0.20000]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> equations = [[&quot;a&quot;,&quot;b&quot;]], values = [0.5], queries = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;c&quot;],[&quot;x&quot;,&quot;y&quot;]]
<strong>Output:</strong> [0.50000,2.00000,-1.00000,-1.00000]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= equations.length &lt;= 20</code></li>
	<li><code>equations[i].length == 2</code></li>
	<li><code>1 &lt;= A<sub>i</sub>.length, B<sub>i</sub>.length &lt;= 5</code></li>
	<li><code>values.length == equations.length</code></li>
	<li><code>0.0 &lt; values[i] &lt;= 20.0</code></li>
	<li><code>1 &lt;= queries.length &lt;= 20</code></li>
	<li><code>queries[i].length == 2</code></li>
	<li><code>1 &lt;= C<sub>j</sub>.length, D<sub>j</sub>.length &lt;= 5</code></li>
	<li><code>A<sub>i</sub>, B<sub>i</sub>, C<sub>j</sub>, D<sub>j</sub></code> consist of lower case English letters and digits.</li>
</ul>

# Solutions

# Evaluate Division

**Algorithm Used:** Union-Find (Disjoint Set Union, DSU)

## Intuition
The problem involves evaluating division expressions given a set of equations and corresponding values. Each equation represents a division relationship between two variables. The solution uses the Union-Find data structure to efficiently manage and query these relationships.

## Approach
1. **Initialization**:
   - Use two maps: `p` for the parent of each variable and `w` for the weight of each variable relative to its parent.
   - Initialize each variable's parent to itself and weight to 1.0.

2. **Union Operation**:
   - For each equation, perform a union operation to connect the two variables.
   - Update the weight of the parent to reflect the division value.

3. **Find Operation**:
   - Use path compression to find the root of a variable and update its weight relative to its root.

4. **Query Processing**:
   - For each query, check if both variables are present and connected.
   - If connected, compute the result using the stored weights. If not connected or variables are missing, return -1.0.

5. **Return Result**:
   - Return an array of results for all queries.

This approach ensures that each equation and query is processed efficiently, leading to an overall time complexity of O((E + Q) * α(N)), where E is the number of equations, Q is the number of queries, and α(N) is the inverse Ackermann function.

#### Java

```java
class Solution {
    private Map<String, String> p;
    private Map<String, Double> w;

    public double[] calcEquation(
        List<List<String>> equations, double[] values, List<List<String>> queries) {
        int n = equations.size();
        p = new HashMap<>();
        w = new HashMap<>();
        for (List<String> e : equations) {
            p.put(e.get(0), e.get(0));
            p.put(e.get(1), e.get(1));
            w.put(e.get(0), 1.0);
            w.put(e.get(1), 1.0);
        }
        for (int i = 0; i < n; i++) {
            List<String> e = equations.get(i);
            String a = e.get(0), b = e.get(1);
            String pa = find(a), pb = find(b);
            if (Objects.equals(pa, pb)) {
                continue;
            }
            p.put(pa, pb);
            w.put(pa, w.get(b) * values[i] / w.get(a));
        }
        int m = queries.size();
        double[] ans = new double[m];
        for (int i = 0; i < m; i++) {
            String c = queries.get(i).get(0), d = queries.get(i).get(1);
            ans[i] = !p.containsKey(c) || !p.containsKey(d) || !Objects.equals(find(c), find(d))
                ? -1.0
                : w.get(c) / w.get(d);
        }
        return ans;
    }

    private String find(String x) {
        if (!Objects.equals(p.get(x), x)) {
            String origin = p.get(x);
            p.put(x, find(p.get(x)));
            w.put(x, w.get(x) * w.get(origin));
        }
        return p.get(x);
    }
}
```

<br>
<br>
<br>

# [207. Course Schedule](https://leetcode.com/problems/course-schedule)

## Description

<p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you <strong>must</strong> take course <code>b<sub>i</sub></code> first if you want to take course <code>a<sub>i</sub></code>.</p>

<ul>
	<li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li>
</ul>

<p>Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0]]
<strong>Output:</strong> true
<strong>Explanation:</strong> There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0],[0,1]]
<strong>Output:</strong> false
<strong>Explanation:</strong> There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= numCourses &lt;= 2000</code></li>
	<li><code>0 &lt;= prerequisites.length &lt;= 5000</code></li>
	<li><code>prerequisites[i].length == 2</code></li>
	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; numCourses</code></li>
	<li>All the pairs prerequisites[i] are <strong>unique</strong>.</li>
</ul>

# Solutions

# Course Schedule

**Algorithm Used:** Topological Sort (Kahn's Algorithm)

## Intuition
The problem is to determine if it is possible to finish all courses given a list of prerequisites. Each course may have one or more prerequisites, forming a directed graph where an edge from course A to course B indicates that course A must be completed before course B. The solution uses a topological sort to check if there are any cycles in the graph, which would make it impossible to complete all courses.

## Approach
1. **Graph Construction**:
   - Create an adjacency list `g` to represent the graph where each course points to its subsequent courses.
   - Use an array `indeg` to track the in-degrees of each course (i.e., the number of prerequisites for each course).

2. **Initialize Queue**:
   - Add all courses with zero in-degrees (i.e., courses that have no prerequisites) to a queue.

3. **Process Courses**:
   - While the queue is not empty:
     - Remove a course from the queue and increment the count of completed courses.
     - For each course dependent on the removed course, decrement its in-degree. If the in-degree of any course becomes zero, add it to the queue.

4. **Check Completion**:
   - After processing all courses, compare the count of completed courses with the total number of courses.
   - If they match, return `true`, indicating all courses can be completed. Otherwise, return `false`.

This approach ensures that all courses are processed if no cycles are present, with a time complexity of O(V + E), where V is the number of courses and E is the number of prerequisites.

#### Java

```java
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<Integer>[] g = new List[numCourses];
        Arrays.setAll(g, k -> new ArrayList<>());
        int[] indeg = new int[numCourses];
        for (var p : prerequisites) {
            int a = p[0], b = p[1];
            g[b].add(a);
            ++indeg[a];
        }
        Deque<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < numCourses; i++) {
            if (indeg[i] == 0) {
                q.offer(i);
            }
        }
        int cnt = 0;
        while (!q.isEmpty()) {
            int i = q.poll();
            ++cnt;
            for (int j : g[i]) {
                if (--indeg[j] == 0) {
                    q.offer(j);
                }
            }
        }
        return cnt == numCourses;
    }
}
```

<br>
<br>
<br>

# [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii)

## Description

<p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you <strong>must</strong> take course <code>b<sub>i</sub></code> first if you want to take course <code>a<sub>i</sub></code>.</p>

<ul>
	<li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li>
</ul>

<p>Return <em>the ordering of courses you should take to finish all courses</em>. If there are many valid answers, return <strong>any</strong> of them. If it is impossible to finish all courses, return <strong>an empty array</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0]]
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
<strong>Output:</strong> [0,2,1,3]
<strong>Explanation:</strong> There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> numCourses = 1, prerequisites = []
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= numCourses &lt;= 2000</code></li>
	<li><code>0 &lt;= prerequisites.length &lt;= numCourses * (numCourses - 1)</code></li>
	<li><code>prerequisites[i].length == 2</code></li>
	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; numCourses</code></li>
	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>
	<li>All the pairs <code>[a<sub>i</sub>, b<sub>i</sub>]</code> are <strong>distinct</strong>.</li>
</ul>

# Solutions

# Course Schedule II

**Algorithm Used:** Topological Sort (Kahn's Algorithm)

## Intuition
The problem requires finding a possible order to complete all courses given a list of prerequisites. Each course may depend on other courses, forming a directed graph where an edge from course A to course B indicates that course A must be completed before course B. The solution uses a topological sort to determine a valid order to complete all courses, or returns an empty array if it's not possible.

## Approach
1. **Graph Construction**:
   - Create an adjacency list `g` to represent the graph where each course points to its dependent courses.
   - Use an array `indeg` to track the in-degrees of each course (i.e., the number of prerequisites for each course).

2. **Initialize Queue**:
   - Add all courses with zero in-degrees (i.e., courses that have no prerequisites) to a queue.

3. **Process Courses**:
   - While the queue is not empty:
     - Remove a course from the queue and add it to the result array.
     - For each course dependent on the removed course, decrement its in-degree. If the in-degree of any course becomes zero, add it to the queue.

4. **Check Completion**:
   - After processing all courses, if the number of processed courses equals the total number of courses, return the result array containing the valid order. Otherwise, return an empty array, indicating that it's not possible to complete all courses.

This approach ensures that a valid course order is found if possible, with a time complexity of O(V + E), where V is the number of courses and E is the number of prerequisites.

#### Java

```java
class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        List<Integer>[] g = new List[numCourses];
        Arrays.setAll(g, k -> new ArrayList<>());
        int[] indeg = new int[numCourses];
        for (var p : prerequisites) {
            int a = p[0], b = p[1];
            g[b].add(a);
            ++indeg[a];
        }
        Deque<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < numCourses; i++) {
            if (indeg[i] == 0) {
                q.offer(i);
            }
        }
        int[] ans = new int[numCourses];
        int cnt = 0;
        while (!q.isEmpty()) {
            int i = q.poll();
            ans[cnt++] = i;
            for (int j : g[i]) {
                if (--indeg[j] == 0) {
                    q.offer(j);
                }
            }
        }
        return cnt == numCourses ? ans : new int[0];
    }
}
```

