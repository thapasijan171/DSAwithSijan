---
title: "Linked List"
description: "All solutions leetcode Top Interview 150 Linked List Solutions"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/tLSkmlAg3VvRFTaq-Best%2520Things%2520to%2520Do%2520in%2520Pokhara.jpeg?w=750&h=750"
---

# [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)

## Description

<!-- description:start -->

<p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p>

<p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the&nbsp;<code>next</code>&nbsp;pointer. Internally, <code>pos</code>&nbsp;is used to denote the index of the node that&nbsp;tail&#39;s&nbsp;<code>next</code>&nbsp;pointer is connected to.&nbsp;<strong>Note that&nbsp;<code>pos</code>&nbsp;is not passed as a parameter</strong>.</p>

<p>Return&nbsp;<code>true</code><em> if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0141.Linked%20List%20Cycle/images/circularlinkedlist.png" style="width: 300px; height: 97px; margin-top: 8px; margin-bottom: 8px;" />
<pre>
<strong>Input:</strong> head = [3,2,0,-4], pos = 1
<strong>Output:</strong> true
<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0141.Linked%20List%20Cycle/images/circularlinkedlist_test2.png" style="width: 141px; height: 74px;" />
<pre>
<strong>Input:</strong> head = [1,2], pos = 0
<strong>Output:</strong> true
<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 0th node.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0141.Linked%20List%20Cycle/images/circularlinkedlist_test3.png" style="width: 45px; height: 45px;" />
<pre>
<strong>Input:</strong> head = [1], pos = -1
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no cycle in the linked list.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of the nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
	<li><code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Can you solve it using <code>O(1)</code> (i.e. constant) memory?</p>

# Solutions

# Linked List Cycle Detection

**Algorithm Used:** Floyd's Cycle-Finding Algorithm (Tortoise and Hare)

## Intuition
To determine if a linked list contains a cycle, we need to check if there's any node that can be revisited. Floyd's Cycle-Finding Algorithm is efficient for this purpose, using two pointers that traverse the list at different speeds.

## Approach

1. **Initialization**:
   - Use two pointers, `slow` and `fast`. Both start at the head of the linked list.

2. **Traversal**:
   - Move the `slow` pointer one step at a time (`slow = slow.next`).
   - Move the `fast` pointer two steps at a time (`fast = fast.next.next`).

3. **Cycle Detection**:
   - If there's a cycle, the `slow` and `fast` pointers will eventually meet because `fast` moves faster and will lap `slow` if there’s a loop.
   - If `fast` reaches the end of the list (`fast == null` or `fast.next == null`), the list does not contain a cycle.

4. **Return Result**:
   - Return `true` if the `slow` and `fast` pointers meet, indicating a cycle.
   - Return `false` if `fast` reaches the end of the list, indicating no cycle.

#### Java

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }
}
```

<br>
<br>
<br>


# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers)


## Description


<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0002.Add%20Two%20Numbers/images/addtwonumber1.jpg" style="width: 483px; height: 342px;" />
<pre>
<strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 9</code></li>
	<li>It is guaranteed that the list represents a number that does not have leading zeros.</li>
</ul>

# Solutions

# Add Two Numbers

## Problem Statement

Given two non-empty linked lists representing two non-negative integers, where the digits are stored in reverse order and each of their nodes contains a single digit, add the two numbers and return it as a linked list.

## Intuition

To solve this problem, we need to add two numbers represented by linked lists, digit by digit, considering the carry for each digit addition.

## Approach

1. **Initialize** a dummy node to serve as the starting point of the result list and a pointer `cur` to keep track of the current node in the result list.
2. **Iterate** through both linked lists `l1` and `l2` until both lists are exhausted and no carry remains:
   - Retrieve the current digit values from `l1` and `l2` (use 0 if a list is exhausted).
   - Compute the sum of these values along with the carry.
   - Update the carry for the next digit addition.
   - Create a new node with the resulting digit and attach it to the result list.
   - Move to the next node in each list.

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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        int carry = 0;
        ListNode cur = dummy;
        while (l1 != null || l2 != null || carry != 0) {
            int s = (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val) + carry;
            carry = s / 10;
            cur.next = new ListNode(s % 10);
            cur = cur.next;
            l1 = l1 == null ? null : l1.next;
            l2 = l2 == null ? null : l2.next;
        }
        return dummy.next;
    }
}
```

<br>
<br>
<br>

# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)

## Description

<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p>

<p>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p>

<p>Return <em>the head of the merged linked list</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0021.Merge%20Two%20Sorted%20Lists/images/merge_ex1.jpg" style="width: 662px; height: 302px;" />
<pre>
<strong>Input:</strong> list1 = [1,2,4], list2 = [1,3,4]
<strong>Output:</strong> [1,1,2,3,4,4]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> list1 = [], list2 = []
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> list1 = [], list2 = [0]
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</li>
</ul>

# Solutions

# Merge Two Sorted Lists

**Algorithm Used:** Iterative Merge

## Intuition
To merge two sorted linked lists into a single sorted linked list, we use a dummy node to simplify the merging process. By iterating through both lists and comparing their values, we can build the merged list efficiently.

## Approach
1. **Initialize Dummy Node**:
   - Create a dummy node to serve as the starting point of the merged list. Use a pointer, `curr`, to keep track of the current position in the merged list.

2. **Merge Lists**:
   - While both `list1` and `list2` are not empty:
     - Compare the values of the current nodes in `list1` and `list2`.
     - Attach the smaller node to `curr.next` and advance the pointer in the respective list.
     - Move the `curr` pointer to `curr.next`.

3. **Attach Remaining Nodes**:
   - Once one of the lists is exhausted, attach the remaining nodes from the non-empty list to `curr.next`.

4. **Return the Result**:
   - Return `dummy.next`, which points to the head of the merged list.

This approach ensures that the lists are merged in linear time, taking advantage of their sorted order.


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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode();
        ListNode curr = dummy;
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }
        curr.next = list1 == null ? list2 : list1;
        return dummy.next;
    }
}
```

<br>
<br>
<br>

# [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer)


## Description

<p>A linked list of length <code>n</code> is given such that each node contains an additional random pointer, which could point to any node in the list, or <code>null</code>.</p>

<p>Construct a <a href="https://en.wikipedia.org/wiki/Object_copying#Deep_copy" target="_blank"><strong>deep copy</strong></a> of the list. The deep copy should consist of exactly <code>n</code> <strong>brand new</strong> nodes, where each new node has its value set to the value of its corresponding original node. Both the <code>next</code> and <code>random</code> pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. <strong>None of the pointers in the new list should point to nodes in the original list</strong>.</p>

<p>For example, if there are two nodes <code>X</code> and <code>Y</code> in the original list, where <code>X.random --&gt; Y</code>, then for the corresponding two nodes <code>x</code> and <code>y</code> in the copied list, <code>x.random --&gt; y</code>.</p>

<p>Return <em>the head of the copied linked list</em>.</p>

<p>The linked list is represented in the input/output as a list of <code>n</code> nodes. Each node is represented as a pair of <code>[val, random_index]</code> where:</p>

<ul>
	<li><code>val</code>: an integer representing <code>Node.val</code></li>
	<li><code>random_index</code>: the index of the node (range from <code>0</code> to <code>n-1</code>) that the <code>random</code> pointer points to, or <code>null</code> if it does not point to any node.</li>
</ul>

<p>Your code will <strong>only</strong> be given the <code>head</code> of the original linked list.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0138.Copy%20List%20with%20Random%20Pointer/images/e1.png" style="width: 700px; height: 142px;" />
<pre>
<strong>Input:</strong> head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
<strong>Output:</strong> [[7,null],[13,0],[11,4],[10,2],[1,0]]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0138.Copy%20List%20with%20Random%20Pointer/images/e2.png" style="width: 700px; height: 114px;" />
<pre>
<strong>Input:</strong> head = [[1,1],[2,1]]
<strong>Output:</strong> [[1,1],[2,1]]
</pre>

<p><strong class="example">Example 3:</strong></p>

<p><strong><img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0138.Copy%20List%20with%20Random%20Pointer/images/e3.png" style="width: 700px; height: 122px;" /></strong></p>

<pre>
<strong>Input:</strong> head = [[3,null],[3,0],[3,null]]
<strong>Output:</strong> [[3,null],[3,0],[3,null]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 1000</code></li>
	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
	<li><code>Node.random</code> is <code>null</code> or is pointing to some node in the linked list.</li>
</ul>

# Solutions

# Copy List with Random Pointer

**Algorithm Used:** Node Duplication and Separation

## Intuition
To create a deep copy of a linked list where each node has an additional random pointer, we can first duplicate each node and then separate the original list from the copied list. This approach ensures that the random pointers in the copied list are correctly assigned.

## Approach
1. **Duplicate Nodes**:
   - Traverse the original list and, for each node, create a duplicate node.
   - Insert the duplicate node immediately after the original node in the list. For example, if the original list is `A -> B`, the updated list will be `A -> A' -> B -> B'`.

2. **Assign Random Pointers**:
   - Traverse the updated list again and assign the random pointers for the duplicate nodes. If a node’s random pointer points to `X`, then its duplicate node’s random pointer should point to the duplicate of `X`.

3. **Separate the Lists**:
   - Finally, restore the original list and extract the duplicate list. The duplicate list is constructed by linking the duplicate nodes together while detaching them from the original nodes.

4. **Return the Result**:
   - Return the head of the duplicate list.

This approach ensures that each node’s random pointer is correctly copied while maintaining linear time complexity.

#### Java

```java
/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/
class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) {
            return null;
        }
        for (Node cur = head; cur != null;) {
            Node node = new Node(cur.val, cur.next);
            cur.next = node;
            cur = node.next;
        }
        for (Node cur = head; cur != null; cur = cur.next.next) {
            if (cur.random != null) {
                cur.next.random = cur.random.next;
            }
        }
        Node ans = head.next;
        for (Node cur = head; cur != null;) {
            Node nxt = cur.next;
            if (nxt != null) {
                cur.next = nxt.next;
            }
            cur = nxt;
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii)

## Description

<p>Given the <code>head</code> of a singly linked list and two integers <code>left</code> and <code>right</code> where <code>left &lt;= right</code>, reverse the nodes of the list from position <code>left</code> to position <code>right</code>, and return <em>the reversed list</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0092.Reverse%20Linked%20List%20II/images/rev2ex2.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], left = 2, right = 4
<strong>Output:</strong> [1,4,3,2,5]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [5], left = 1, right = 1
<strong>Output:</strong> [5]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>n</code>.</li>
	<li><code>1 &lt;= n &lt;= 500</code></li>
	<li><code>-500 &lt;= Node.val &lt;= 500</code></li>
	<li><code>1 &lt;= left &lt;= right &lt;= n</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you do it in one pass?

# Solutions

# Reverse Linked List Between

**Algorithm Used:** Iterative Reversal

## Intuition
To reverse a portion of a singly linked list between positions `left` and `right`, we can perform the reversal in-place by carefully adjusting the pointers. By using a dummy node, we simplify the operations at the boundaries.

## Approach
1. **Initialize Dummy Node**:
   - Create a dummy node to handle edge cases and simplify pointer adjustments. Set its `next` to the head of the original list.

2. **Find the Pre-Reversal Node**:
   - Traverse the list to find the node just before the `left` position (`pre`). This node will help in reconnecting the reversed portion with the rest of the list.

3. **Reverse the Sublist**:
   - Initialize pointers to perform the reversal. `cur` points to the first node to be reversed, and `pre` will be used to reverse the links.
   - Reverse the links for the nodes between `left` and `right`. After reversal, `pre` will point to the new head of the reversed sublist.

4. **Reconnect the Reversed Sublist**:
   - After reversing, reconnect the reversed portion with the previous and next parts of the list. Adjust the `next` pointers accordingly.

5. **Return the Result**:
   - Return `dummy.next`, which points to the head of the modified list.

This approach ensures that only the specified portion of the list is reversed, with linear time complexity and constant space usage.


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
    public ListNode reverseBetween(ListNode head, int left, int right) {
        if (head.next == null || left == right) {
            return head;
        }
        ListNode dummy = new ListNode(0, head);
        ListNode pre = dummy;
        for (int i = 0; i < left - 1; i++) {
            pre = pre.next;
        }
        ListNode p = pre;
        ListNode q = pre.next;
        ListNode cur = q;
        for (int i = 0; i < right - left + 1; i++) {
            ListNode t = cur.next;
            cur.next = pre;
            pre = cur;
            cur = t;
        }
        p.next = pre;
        q.next = cur;
        return dummy.next;
    }
}
```

<br>
<br>
<br>


# [25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group)

## Description

<!-- description:start -->

<p>Given the <code>head</code> of a linked list, reverse the nodes of the list <code>k</code> at a time, and return <em>the modified list</em>.</p>

<p><code>k</code> is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of <code>k</code> then left-out nodes, in the end, should remain as it is.</p>

<p>You may not alter the values in the list&#39;s nodes, only nodes themselves may be changed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0025.Reverse%20Nodes%20in%20k-Group/images/reverse_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [2,1,4,3,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0025.Reverse%20Nodes%20in%20k-Group/images/reverse_ex2.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 3
<strong>Output:</strong> [3,2,1,4,5]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>n</code>.</li>
	<li><code>1 &lt;= k &lt;= n &lt;= 5000</code></li>
	<li><code>0 &lt;= Node.val &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow-up:</strong> Can you solve the problem in <code>O(1)</code> extra memory space?</p>


# Solutions

# Reverse Nodes in k-Group

**Algorithm Used:** Group Reversal

## Intuition
To reverse nodes in k-sized groups in a linked list, we need to process the list in segments, reversing each segment of size `k` while maintaining the overall structure. This approach ensures that only complete groups are reversed.

## Approach
1. **Initialize Dummy Node**:
   - Create a dummy node to handle edge cases and simplify operations. Set its `next` to the head of the original list.

2. **Iterate Over the List in k-sized Groups**:
   - Use two pointers: `pre` to mark the start of the current segment and `cur` to find the end of the segment.
   - For each k-sized segment, move `cur` to the end of the segment. If `cur` is `null`, there are fewer than `k` nodes left, so no reversal is performed.

3. **Reverse the Current Segment**:
   - Temporarily break the list at `cur` and reverse the segment starting from `pre.next`.
   - Reconnect the reversed segment back to the rest of the list. Update `pre.next` to point to the new head of the reversed segment.

4. **Move to the Next Segment**:
   - Adjust the pointers to move `pre` and `cur` to the next segment.

5. **Return the Result**:
   - Return `dummy.next`, which points to the head of the modified list.

This approach processes each segment in linear time, ensuring that the entire list is handled efficiently.

### Helper Function
- **reverseList**: Reverses a given linked list. Used to reverse segments of size `k`.


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
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(0, head);
        ListNode pre = dummy, cur = dummy;
        while (cur.next != null) {
            for (int i = 0; i < k && cur != null; ++i) {
                cur = cur.next;
            }
            if (cur == null) {
                return dummy.next;
            }
            ListNode t = cur.next;
            cur.next = null;
            ListNode start = pre.next;
            pre.next = reverseList(start);
            start.next = t;
            pre = start;
            cur = pre;
        }
        return dummy.next;
    }

    private ListNode reverseList(ListNode head) {
        ListNode pre = null, p = head;
        while (p != null) {
            ListNode q = p.next;
            p.next = pre;
            pre = p;
            p = q;
        }
        return pre;
    }
}
```

<br>
<br>
<br>

# [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list)

## Description

<!-- description:start -->

<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0019.Remove%20Nth%20Node%20From%20End%20of%20List/images/remove_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], n = 2
<strong>Output:</strong> [1,2,3,5]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [1], n = 1
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> head = [1,2], n = 1
<strong>Output:</strong> [1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li>The number of nodes in the list is <code>sz</code>.</li>
 <li><code>1 &lt;= sz &lt;= 30</code></li>
 <li><code>0 &lt;= Node.val &lt;= 100</code></li>
 <li><code>1 &lt;= n &lt;= sz</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you do this in one pass?</p>

# Solutions

# Remove Nth Node From End of List

**Algorithm Used:** Two-Pointer Technique

## Intuition
To remove the N-th node from the end of a linked list efficiently, we use two pointers. By advancing one pointer `N` steps ahead of the other, we can determine the node to be removed when the first pointer reaches the end.

## Approach
1. **Initialize Dummy Node**:
   - Create a dummy node to simplify edge cases, such as removing the head node. Set its `next` to the head of the original list.

2. **Advance the Fast Pointer**:
   - Move the `fast` pointer `N` steps ahead from the dummy node. This ensures that the gap between the `fast` and `slow` pointers is `N` nodes.

3. **Move Both Pointers**:
   - Move both `fast` and `slow` pointers forward until `fast` reaches the end of the list. By this time, the `slow` pointer will be just before the node to be removed.

4. **Remove the Target Node**:
   - Adjust the `next` pointer of the `slow` node to skip the node to be removed, effectively removing it from the list.

5. **Return the Result**:
   - Return `dummy.next`, which points to the head of the modified list.

This approach ensures a single pass through the list with constant space usage, making it efficient for large lists.


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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0, head);
        ListNode fast = dummy, slow = dummy;
        while (n-- > 0) {
            fast = fast.next;
        }
        while (fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        return dummy.next;
    }
}
```

<br>
<br>
<br>

# [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii)

## Description

<p>Given the <code>head</code> of a sorted linked list, <em>delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list</em>. Return <em>the linked list <strong>sorted</strong> as well</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0082.Remove%20Duplicates%20from%20Sorted%20List%20II/images/linkedlist1.jpg" style="width: 500px; height: 142px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,3,4,4,5]
<strong>Output:</strong> [1,2,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0082.Remove%20Duplicates%20from%20Sorted%20List%20II/images/linkedlist2.jpg" style="width: 500px; height: 205px;" />
<pre>
<strong>Input:</strong> head = [1,1,1,2,3]
<strong>Output:</strong> [2,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 300]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li>The list is guaranteed to be <strong>sorted</strong> in ascending order.</li>
</ul>

# Solutions

# Remove Duplicates from Sorted List II

**Algorithm Used:** Iterative Duplicate Removal

## Intuition
To remove all nodes with duplicate values from a sorted linked list, we can use a dummy node to handle edge cases and iterate through the list, skipping over nodes that have duplicates.

## Approach
1. **Initialize Dummy Node**:
   - Create a dummy node to handle cases where the head of the list needs to be removed. Set its `next` to the head of the original list.

2. **Iterate Through the List**:
   - Use two pointers: `pre` (previous node) and `cur` (current node). Initialize `pre` to the dummy node and `cur` to the head of the list.

3. **Skip Duplicates**:
   - While `cur` is not `null`, check if there are consecutive nodes with the same value:
     - If duplicates are found, move `cur` forward until the end of the duplicates.
     - Adjust the `next` pointer of `pre` to skip over the duplicates and point to the next unique node.

4. **Update Pointers**:
   - If no duplicates were found, move `pre` to `cur`. Always move `cur` to the next node.

5. **Return the Result**:
   - Return `dummy.next`, which points to the head of the modified list without duplicates.

This approach ensures that nodes with duplicate values are completely removed from the list, maintaining a linear time complexity.


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
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(0, head);
        ListNode pre = dummy;
        ListNode cur = head;
        while (cur != null) {
            while (cur.next != null && cur.next.val == cur.val) {
                cur = cur.next;
            }
            if (pre.next == cur) {
                pre = cur;
            } else {
                pre.next = cur.next;
            }
            cur = cur.next;
        }
        return dummy.next;
    }
}
```

<br>
<br>
<br>

# [61. Rotate List](https://leetcode.com/problems/rotate-list)

## Description

<p>Given the <code>head</code> of a linked&nbsp;list, rotate the list to the right by <code>k</code> places.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0061.Rotate%20List/images/rotate1.jpg" style="width: 450px; height: 191px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [4,5,1,2,3]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0061.Rotate%20List/images/roate2.jpg" style="width: 305px; height: 350px;" />
<pre>
<strong>Input:</strong> head = [0,1,2], k = 4
<strong>Output:</strong> [2,0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 500]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li><code>0 &lt;= k &lt;= 2 * 10<sup>9</sup></code></li>
</ul>

# Solutions

# Rotate List

**Algorithm Used:** Two-Pointer Technique

## Intuition
To rotate a linked list to the right by `k` places, we can utilize two pointers to find the new head of the list after rotation. By leveraging the list's circular properties, we can achieve the rotation efficiently.

## Approach
1. **Handle Edge Cases**:
   - If the list is empty or contains only one node, no rotation is needed. Return the head as is.

2. **Calculate the Length**:
   - Traverse the list to determine its length `n`.

3. **Adjust k**:
   - Since rotating the list `n` times results in the same list, reduce `k` to `k % n`. If `k` is 0 after this adjustment, no rotation is needed, and we return the head.

4. **Find the New Tail and Head**:
   - Use two pointers: `fast` and `slow`. Move `fast` pointer `k` steps ahead from the head.
   - Move both `fast` and `slow` pointers together until `fast` reaches the end of the list. At this point, `slow` will be at the new tail of the rotated list.

5. **Rearrange Pointers**:
   - Set the new head to `slow.next`.
   - Update `slow.next` to `null` to mark the end of the rotated list.
   - Link the end of the list (`fast.next`) to the original head.

6. **Return the Result**:
   - Return `ans`, which is the new head of the rotated list.

This approach ensures that the list is rotated efficiently in linear time and constant space.


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
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode cur = head;
        int n = 0;
        for (; cur != null; cur = cur.next) {
            n++;
        }
        k %= n;
        if (k == 0) {
            return head;
        }
        ListNode fast = head;
        ListNode slow = head;
        while (k-- > 0) {
            fast = fast.next;
        }
        while (fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }
        ListNode ans = slow.next;
        slow.next = null;
        fast.next = head;
        return ans;
    }
}
```

<br>
<br>
<br>

# [86. Partition List](https://leetcode.com/problems/partition-list)

## Description

<p>Given the <code>head</code> of a linked list and a value <code>x</code>, partition it such that all nodes <strong>less than</strong> <code>x</code> come before nodes <strong>greater than or equal</strong> to <code>x</code>.</p>

<p>You should <strong>preserve</strong> the original relative order of the nodes in each of the two partitions.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0086.Partition%20List/images/partition.jpg" style="width: 662px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,4,3,2,5,2], x = 3
<strong>Output:</strong> [1,2,2,4,3,5]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [2,1], x = 2
<strong>Output:</strong> [1,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 200]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li><code>-200 &lt;= x &lt;= 200</code></li>
</ul>

# Solutions

# Partition List

**Algorithm Used:** Two List Partitioning

## Intuition
To partition a linked list around a value `x`, we need to rearrange the nodes so that all nodes with values less than `x` come before nodes with values greater than or equal to `x`. We achieve this by maintaining two separate lists and merging them at the end.

## Approach
1. **Initialize Two Lists**:
   - Create two dummy nodes: `d1` for nodes with values less than `x`, and `d2` for nodes with values greater than or equal to `x`. Use `t1` and `t2` as pointers to build these two lists.

2. **Partition the List**:
   - Traverse the original list:
     - If the current node's value is less than `x`, append it to the list represented by `d1` (`t1.next`).
     - Otherwise, append it to the list represented by `d2` (`t2.next`).
   - Move to the next node in the original list after each operation.

3. **Combine the Lists**:
   - After the traversal, connect the end of the list represented by `d1` to the start of the list represented by `d2`.
   - Set `t2.next` to `null` to mark the end of the list.

4. **Return the Result**:
   - Return `d1.next`, which points to the head of the partitioned list.

This approach ensures that the list is partitioned efficiently with linear time complexity and constant space usage.


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
    public ListNode partition(ListNode head, int x) {
        ListNode d1 = new ListNode();
        ListNode d2 = new ListNode();
        ListNode t1 = d1, t2 = d2;
        while (head != null) {
            if (head.val < x) {
                t1.next = head;
                t1 = t1.next;
            } else {
                t2.next = head;
                t2 = t2.next;
            }
            head = head.next;
        }
        t1.next = d2.next;
        t2.next = null;
        return d1.next;
    }
}
```

<br>
<br>
<br>

# [146. LRU Cache](https://leetcode.com/problems/lru-cache)

## Description

<p>Design a data structure that follows the constraints of a <strong><a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU" target="_blank">Least Recently Used (LRU) cache</a></strong>.</p>

<p>Implement the <code>LRUCache</code> class:</p>

<ul>
	<li><code>LRUCache(int capacity)</code> Initialize the LRU cache with <strong>positive</strong> size <code>capacity</code>.</li>
	<li><code>int get(int key)</code> Return the value of the <code>key</code> if the key exists, otherwise return <code>-1</code>.</li>
	<li><code>void put(int key, int value)</code> Update the value of the <code>key</code> if the <code>key</code> exists. Otherwise, add the <code>key-value</code> pair to the cache. If the number of keys exceeds the <code>capacity</code> from this operation, <strong>evict</strong> the least recently used key.</li>
</ul>

<p>The functions <code>get</code> and <code>put</code> must each run in <code>O(1)</code> average time complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;LRUCache&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
<strong>Output</strong>
[null, null, null, 1, null, -1, null, -1, 3, 4]

<strong>Explanation</strong>
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= capacity &lt;= 3000</code></li>
	<li><code>0 &lt;= key &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= value &lt;= 10<sup>5</sup></code></li>
	<li>At most <code>2 * 10<sup>5</sup></code> calls will be made to <code>get</code> and <code>put</code>.</li>
</ul>

# Solutions

# LRU Cache

**Algorithm Used:** Doubly Linked List with HashMap

## Intuition
An LRU (Least Recently Used) Cache allows for efficient retrieval and insertion of key-value pairs, while ensuring that the least recently used items are evicted when the cache exceeds its capacity. This can be efficiently managed using a combination of a doubly linked list and a hash map.

## Approach
1. **Initialize Data Structures**:
   - **HashMap**: To store key-node mappings for O(1) access time.
   - **Doubly Linked List**: To maintain the order of nodes based on usage. The list is structured with a dummy head and tail node to simplify operations.

2. **Get Operation**:
   - Check if the key exists in the hash map.
   - If it exists, retrieve the corresponding node, move it to the head of the list (indicating recent use), and return its value.
   - If it does not exist, return -1.

3. **Put Operation**:
   - If the key already exists, update its value, move the node to the head of the list to mark it as recently used.
   - If the key does not exist:
     - Create a new node and add it to the head of the list.
     - Add the node to the hash map.
     - If the cache exceeds its capacity, remove the tail node (the least recently used item) and update the hash map accordingly.

4. **Helper Methods**:
   - **moveToHead**: Moves a given node to the head of the list.
   - **removeNode**: Removes a node from its current position in the list.
   - **addToHead**: Adds a node right after the head of the list.
   - **removeTail**: Removes the node right before the tail (the least recently used node).

This approach ensures that both `get` and `put` operations are performed in O(1) time complexity due to the hash map and doubly linked list.

#### Java

```java
class Node {
    int key;
    int val;
    Node prev;
    Node next;

    Node() {
    }

    Node(int key, int val) {
        this.key = key;
        this.val = val;
    }
}

class LRUCache {
    private Map<Integer, Node> cache = new HashMap<>();
    private Node head = new Node();
    private Node tail = new Node();
    private int capacity;
    private int size;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        if (!cache.containsKey(key)) {
            return -1;
        }
        Node node = cache.get(key);
        moveToHead(node);
        return node.val;
    }

    public void put(int key, int value) {
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            node.val = value;
            moveToHead(node);
        } else {
            Node node = new Node(key, value);
            cache.put(key, node);
            addToHead(node);
            ++size;
            if (size > capacity) {
                node = removeTail();
                cache.remove(node.key);
                --size;
            }
        }
    }

    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }

    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void addToHead(Node node) {
        node.next = head.next;
        node.prev = head;
        head.next = node;
        node.next.prev = node;
    }

    private Node removeTail() {
        Node node = tail.prev;
        removeNode(node);
        return node;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
```
