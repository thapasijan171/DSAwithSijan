---
title: "Graph BFS"
description: "All solutions leetcode Top Interview 150 Graph BFS"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/0BFsFKV9h5pWAcXN-Bhujung%2520Village%252C%2520Lamjung%2520-%2520Largest%2520Gurung%2520Village%2520(1).jpeg?w=750&h=750"
---


# [909. Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders)

## Description

<p>You are given an <code>n x n</code> integer matrix <code>board</code> where the cells are labeled from <code>1</code> to <code>n<sup>2</sup></code> in a <a href="https://en.wikipedia.org/wiki/Boustrophedon" target="_blank"><strong>Boustrophedon style</strong></a> starting from the bottom left of the board (i.e. <code>board[n - 1][0]</code>) and alternating direction each row.</p>

<p>You start on square <code>1</code> of the board. In each move, starting from square <code>curr</code>, do the following:</p>

<ul>
	<li>Choose a destination square <code>next</code> with a label in the range <code>[curr + 1, min(curr + 6, n<sup>2</sup>)]</code>.
<ul>
<li>This choice simulates the result of a standard <strong>6-sided die roll</strong>: i.e., there are always at most 6 destinations, regardless of the size of the board.</li>
</ul>
</li>
<li>If <code>next</code> has a snake or ladder, you <strong>must</strong> move to the destination of that snake or ladder. Otherwise, you move to <code>next</code/li>
<li>The game ends when you reach the square <code>n<sup>2</sup></code>.</li>

</ul>

<p>A board square on row <code>r</code> and column <code>c</code> has a snake or ladder if <code>board[r][c] != -1</code>. The destination of that snake or ladder is <code>board[r][c]</code>. Squares <code>1</code> and <code>n<sup>2</sup></code> are not the starting points of any snake or ladder.</p>

<p>Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do <strong>not</strong> follow the subsequent&nbsp;snake or ladder.</p>

<ul>
	<li>For example, suppose the board is <code>[[-1,4],[-1,3]]</code>, and on the first move, your destination square is <code>2</code>. You follow the ladder to square <code>3</code>, but do <strong>not</strong> follow the subsequent ladder to <code>4</code>.</li>
</ul>

<p>Return <em>the least number of moves required to reach the square </em><code>n<sup>2</sup></code><em>. If it is not possible to reach the square, return </em><code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0900-0999/0909.Snakes%20and%20Ladders/images/snakes.png" style="width: 500px; height: 394px;" />
<pre>
<strong>Input:</strong> board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> 
In the beginning, you start at square 1 (at row 5, column 0).
You decide to move to square 2 and must take the ladder to square 15.
You then decide to move to square 17 and must take the snake to square 13.
You then decide to move to square 14 and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
This is the lowest possible number of moves to reach the last square, so return 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> board = [[-1,-1],[-1,3]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == board.length == board[i].length</code></li>
	<li><code>2 &lt;= n &lt;= 20</code></li>
	<li><code>board[i][j]</code> is either <code>-1</code> or in the range <code>[1, n<sup>2</sup>]</code>.</li>
	<li>The squares labeled <code>1</code> and <code>n<sup>2</sup></code> are not the starting points of any snake or ladder.</li>
</ul>

## Solutions

### Solution 1: BFS

We can use the Breadth-First Search (BFS) method, starting from the starting point, moving forward 1 to 6 steps each time, and then checking for snakes or ladders. If there are any, move to the destination of the snake or ladder; otherwise, move to the next square.

Specifically, we use a queue `\textit{q}` to store the current reachable square numbers, initially putting number `1` into the queue. At the same time, we use a set `\textit{vis}` to record the squares that have been reached to avoid revisiting them, initially adding number `1` to the set `\textit{vis}`.

In each operation, we take out the square number `x` at the front of the queue. If `x` is the endpoint, we can return the current number of steps. Otherwise, we move `x` forward 1 to 6 steps, setting the new number as `y`. If `y` falls outside the board, we skip it directly. Otherwise, we need to find the row and column corresponding to `y`. Since the row numbers decrease from bottom to top, and the column numbers depend on the parity of the row, we need to perform some calculations to get the row and column corresponding to `y`.

If the square corresponding to `y` has a snake or ladder, we need to move to the destination of the snake or ladder, denoted as `z`. If `z` has not been visited, we add `z` to the queue and set, allowing us to continue the breadth-first search.

If we ultimately cannot reach the endpoint, we return `-1`.

The time complexity is `O(n^2)`, and the space complexity is `O(n^2)`. Here, `n` is the length of the side of the board.

#### Java

```java
class Solution {
    public int snakesAndLadders(int[][] board) {
        int n = board.length;
        Deque<Integer> q = new ArrayDeque<>();
        q.offer(1);
        int m = n * n;
        boolean[] vis = new boolean[m + 1];
        vis[1] = true;
        for (int ans = 0; !q.isEmpty(); ans++) {
            for (int k = q.size(); k > 0; k--) {
                int x = q.poll();
                if (x == m) {
                    return ans;
                }
                for (int y = x + 1; y <= Math.min(x + 6, m); y++) {
                    int i = (y - 1) / n, j = (y - 1) % n;
                    if (i % 2 == 1) {
                        j = n - j - 1;
                    }
                    i = n - i - 1;
                    int z = board[i][j] == -1 ? y : board[i][j];
                    if (!vis[z]) {
                        vis[z] = true;
                        q.offer(z);
                    }
                }
            }
        }
        return -1;
    }
}
```

<br>
<br>
<br>

# [433. Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation)

## Description

<p>A gene string can be represented by an 8-character long string, with choices from <code>&#39;A&#39;</code>, <code>&#39;C&#39;</code>, <code>&#39;G&#39;</code>, and <code>&#39;T&#39;</code>.</p>

<p>Suppose we need to investigate a mutation from a gene string <code>startGene</code> to a gene string <code>endGene</code> where one mutation is defined as one single character changed in the gene string.</p>

<ul>
	<li>For example, <code>&quot;AACCGGTT&quot; --&gt; &quot;AACCGGTA&quot;</code> is one mutation.</li>
</ul>

<p>There is also a gene bank <code>bank</code> that records all the valid gene mutations. A gene must be in <code>bank</code> to make it a valid gene string.</p>

<p>Given the two gene strings <code>startGene</code> and <code>endGene</code> and the gene bank <code>bank</code>, return <em>the minimum number of mutations needed to mutate from </em><code>startGene</code><em> to </em><code>endGene</code>. If there is no such a mutation, return <code>-1</code>.</p>

<p>Note that the starting point is assumed to be valid, so it might not be included in the bank.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> startGene = &quot;AACCGGTT&quot;, endGene = &quot;AACCGGTA&quot;, bank = [&quot;AACCGGTA&quot;]
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> startGene = &quot;AACCGGTT&quot;, endGene = &quot;AAACGGTA&quot;, bank = [&quot;AACCGGTA&quot;,&quot;AACCGCTA&quot;,&quot;AAACGGTA&quot;]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= bank.length &lt;= 10</code></li>
	<li><code>startGene.length == endGene.length == bank[i].length == 8</code></li>
	<li><code>startGene</code>, <code>endGene</code>, and <code>bank[i]</code> consist of only the characters <code>[&#39;A&#39;, &#39;C&#39;, &#39;G&#39;, &#39;T&#39;]</code>.</li>
</ul>

## Solutions


### Solution 1: BFS

We define a queue `q` to store the current gene sequence and the number of changes, and a set `vis` to store the visited gene sequences. Initially, we add the starting gene sequence `start` to the queue `q` and the set `vis`.

Then, we continuously take out a gene sequence from the queue `q`. If this gene sequence equals the target gene sequence, we return the current number of changes. Otherwise, we iterate through the gene bank `bank`, calculate the difference value between the current gene sequence and the gene sequence in the gene bank. If the difference value is `1` and the gene sequence in the gene bank has not been visited, we add it to the queue `q` and the set `vis`.

If the queue `q` is empty, it means that the gene change cannot be completed, so we return `-1`.

The time complexity is `O(C \times n \times m)`, and the space complexity is `O(n \times m)`. Where `n` and `m` are the lengths of the gene sequence and the gene bank respectively, and `C` is the size of the character set of the gene sequence. In this problem, `C = 4`.

#### Java

```java
class Solution {
    public int minMutation(String startGene, String endGene, String[] bank) {
        Deque<String> q = new ArrayDeque<>();
        q.offer(startGene);
        Set<String> vis = new HashSet<>();
        vis.add(startGene);
        int depth = 0;
        while (!q.isEmpty()) {
            for (int m = q.size(); m > 0; m--) {
                String gene = q.poll();
                if (gene.equals(endGene)) {
                    return depth;
                }
                for (String next : bank) {
                    int c = 2;
                    for (int k = 0; k < 8 && c > 0; k++) {
                        if (gene.charAt(k) != next.charAt(k)) {
                            --c;
                        }
                    }
                    if (c > 0 && !vis.contains(next)) {
                        q.offer(next);
                        vis.add(next);
                    }
                }
            }
            ++depth;
        }
        return -1;
    }
}
```

<br>
<br>
<br>

# [127. Word Ladder](https://leetcode.com/problems/word-ladder)

## Description

<!-- description:start -->

<p>A <strong>transformation sequence</strong> from word <code>beginWord</code> to word <code>endWord</code> using a dictionary <code>wordList</code> is a sequence of words <code>beginWord -&gt; s<sub>1</sub> -&gt; s<sub>2</sub> -&gt; ... -&gt; s<sub>k</sub></code> such that:</p>

<ul>
	<li>Every adjacent pair of words differs by a single letter.</li>
	<li>Every <code>s<sub>i</sub></code> for <code>1 &lt;= i &lt;= k</code> is in <code>wordList</code>. Note that <code>beginWord</code> does not need to be in <code>wordList</code>.</li>
	<li><code>s<sub>k</sub> == endWord</code></li>
</ul>

<p>Given two words, <code>beginWord</code> and <code>endWord</code>, and a dictionary <code>wordList</code>, return <em>the <strong>number of words</strong> in the <strong>shortest transformation sequence</strong> from</em> <code>beginWord</code> <em>to</em> <code>endWord</code><em>, or </em><code>0</code><em> if no such sequence exists.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]
<strong>Output:</strong> 5
<strong>Explanation:</strong> One shortest transformation sequence is &quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;dot&quot; -&gt; &quot;dog&quot; -&gt; cog&quot;, which is 5 words long.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The endWord &quot;cog&quot; is not in wordList, therefore there is no valid transformation sequence.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= beginWord.length &lt;= 10</code></li>
	<li><code>endWord.length == beginWord.length</code></li>
	<li><code>1 &lt;= wordList.length &lt;= 5000</code></li>
	<li><code>wordList[i].length == beginWord.length</code></li>
	<li><code>beginWord</code>, <code>endWord</code>, and <code>wordList[i]</code> consist of lowercase English letters.</li>
	<li><code>beginWord != endWord</code></li>
	<li>All the words in <code>wordList</code> are <strong>unique</strong>.</li>
</ul>

## Solutions

### Solution 1: BFS

BFS minimum step model. This problem can be solved with naive BFS, or it can be optimized with bidirectional BFS to reduce the search space and improve efficiency.

Bidirectional BFS is a common optimization method for BFS, with the main implementation ideas as follows:

1. Create two queues, q1 and q2, for "start -> end" and "end -> start" search directions, respectively.
2. Create two hash maps, m1 and m2, to record the visited nodes and their corresponding expansion times (steps).
3. During each search, prioritize the queue with fewer elements for search expansion. If a node visited from the other direction is found during the expansion, it means the shortest path has been found.
4. If one of the queues is empty, it means that the search in the current direction cannot continue, indicating that the start and end points are not connected, and there is no need to continue the search.

#### Java

```java
class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> words = new HashSet<>(wordList);
        Queue<String> q = new ArrayDeque<>();
        q.offer(beginWord);
        int ans = 1;
        while (!q.isEmpty()) {
            ++ans;
            for (int i = q.size(); i > 0; i--) {
                String s = q.poll();
                char[] chars = s.toCharArray();
                for (int j = 0; j < chars.length; j++) {
                    char ch = chars[j];
                    for (char k = 'a'; k <= 'z'; k++) {
                        chars[j] = k;
                        String t = new String(chars);
                        if (!words.contains(t)) {
                            continue;
                        }
                        if (endWord.equals(t)) {
                            return ans;
                        }
                        q.offer(t);
                        words.remove(t);
                    }
                    chars[j] = ch;
                }
            }
        }
        return 0;
    }
}
```

### Solution 2

#### Java

```java
class Solution {
    private Set<String> words;

    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        words = new HashSet<>(wordList);
        if (!words.contains(endWord)) {
            return 0;
        }
        Queue<String> q1 = new ArrayDeque<>();
        Queue<String> q2 = new ArrayDeque<>();
        Map<String, Integer> m1 = new HashMap<>();
        Map<String, Integer> m2 = new HashMap<>();
        q1.offer(beginWord);
        q2.offer(endWord);
        m1.put(beginWord, 0);
        m2.put(endWord, 0);
        while (!q1.isEmpty() && !q2.isEmpty()) {
            int t = q1.size() <= q2.size() ? extend(m1, m2, q1) : extend(m2, m1, q2);
            if (t != -1) {
                return t + 1;
            }
        }
        return 0;
    }

    private int extend(Map<String, Integer> m1, Map<String, Integer> m2, Queue<String> q) {
        for (int i = q.size(); i > 0; --i) {
            String s = q.poll();
            int step = m1.get(s);
            char[] chars = s.toCharArray();
            for (int j = 0; j < chars.length; j++) {
                char ch = chars[j];
                for (char k = 'a'; k <= 'z'; k++) {
                    chars[j] = k;
                    String t = new String(chars);
                    if (!words.contains(t) || m1.containsKey(t)) {
                        continue;
                    }
                    if (m2.containsKey(t)) {
                        return step + 1 + m2.get(t);
                    }
                    q.offer(t);
                    m1.put(t, step + 1);
                }
                chars[j] = ch;
            }
        }
        return -1;
    }
}
```