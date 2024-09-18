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

# Solutions

# Snakes and Ladders

**Algorithm Used:** Breadth-First Search (BFS)

## Intuition
The problem involves navigating a board game where the player starts at square 1 and aims to reach the last square using dice rolls. The board contains snakes and ladders that alter the player's position. The goal is to find the minimum number of dice rolls required to reach the last square.

## Approach
1. **Initialization**:
   - Create a queue to perform Breadth-First Search (BFS) starting from square 1.
   - Maintain a boolean array `vis` to track visited squares and prevent revisits.
   - Initialize the queue with the starting position (square 1) and mark it as visited.

2. **Breadth-First Search (BFS)**:
   - Use a level-wise approach to explore all possible moves from the current position.
   - For each position, simulate dice rolls from 1 to 6.
   - Compute the destination square based on the dice roll and check if it is a ladder or snake. Adjust the position accordingly.
   - If the destination square is the last square, return the number of moves taken.
   - If not, add the position to the queue if it hasn't been visited.

3. **Board Conversion**:
   - Convert the 2D board position to a 1D representation to simplify movement calculations.
   - Handle the board's zigzag pattern by adjusting column indices based on the row.

4. **Return Result**:
   - If the queue is exhausted and the last square hasn't been reached, return -1 indicating that the last square is not reachable.

This approach ensures that the shortest path is found using BFS, with each position being processed at most once, resulting in efficient traversal of the board.

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

# Solutions

# Minimum Genetic Mutation

**Algorithm Used:** Breadth-First Search (BFS)

## Intuition
The problem involves finding the shortest sequence of genetic mutations required to transform a start gene into an end gene using a given list of valid mutations (bank). Each mutation changes exactly one character, and valid mutations are specified in the bank.

## Approach
1. **Initialization**:
   - Use a queue to perform Breadth-First Search (BFS) starting from the `startGene`.
   - Maintain a set to track visited genes and prevent reprocessing.

2. **Breadth-First Search (BFS)**:
   - Initialize the queue with the `startGene` and mark it as visited.
   - For each gene in the queue, check all possible mutations by comparing with each gene in the bank.
   - A mutation is valid if it differs by exactly one character.
   - If a valid mutation matches the `endGene`, return the current depth of the BFS traversal.
   - Otherwise, add the valid mutation to the queue and mark it as visited.

3. **Gene Mutation**:
   - For each gene, compare it with each gene in the bank to determine if they differ by exactly one character.
   - This comparison is done by counting character differences. If only one character differs, it's a valid mutation.

4. **Return Result**:
   - If the BFS completes and the `endGene` is not found, return -1 indicating that the mutation sequence is not possible.

This approach ensures that the shortest mutation sequence is found efficiently using BFS, with each gene being processed at most once, resulting in a time complexity proportional to the number of genes and mutations.

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

# Solutions

# Word Ladder II

**Algorithm Used:** Bidirectional Breadth-First Search (BFS)

## Intuition
The problem involves finding the shortest transformation sequence from a `beginWord` to an `endWord` using a dictionary of words where each transformation changes exactly one character and must be in the dictionary. The solution leverages bidirectional BFS to efficiently find the shortest path.

## Approach
1. **Initialization**:
   - Convert the list of words into a set for O(1) lookups.
   - Check if the `endWord` is present in the set. If not, return 0 as transformation is not possible.

2. **Bidirectional BFS Setup**:
   - Use two queues: `q1` for the forward search from `beginWord` and `q2` for the backward search from `endWord`.
   - Maintain two maps: `m1` to track distances from `beginWord` and `m2` to track distances from `endWord`.

3. **Bidirectional Search**:
   - Perform BFS from both ends (start and end) simultaneously:
     - Extend the search by one step from the current queue.
     - For each word, generate all possible transformations by changing each character to all letters from 'a' to 'z'.
     - Check if the transformed word is in the set and has not been visited in the current direction.
     - If a transformed word is found in the opposite direction's map, the shortest path is found.

4. **Return Result**:
   - If a connection is found between the forward and backward searches, return the total number of steps.
   - If the queues are exhausted without finding a connection, return 0 indicating no possible transformation sequence.

This approach ensures that the shortest transformation sequence is found efficiently by reducing the search space using bidirectional BFS, which is faster than a single-ended BFS for large graphs.

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