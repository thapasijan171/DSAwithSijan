---
title: "Bit Manipulation"
description: "All solutions leetcode Top Interview 150 Bit Manipulation"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/EKFBzHjO8QtocQLj-received_811096953652154.jpg?w=750&h=750"
---

# [67. Add Binary](https://leetcode.com/problems/add-binary)

## Description

<p>Given two binary strings <code>a</code> and <code>b</code>, return <em>their sum as a binary string</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> a = "11", b = "1"
<strong>Output:</strong> "100"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> a = "1010", b = "1011"
<strong>Output:</strong> "10101"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= a.length, b.length &lt;= 10<sup>4</sup></code></li>
	<li><code>a</code> and <code>b</code> consist&nbsp;only of <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code> characters.</li>
	<li>Each string does not contain leading zeros except for the zero itself.</li>
</ul>

## Solutions

### Solution 1: Simulation

We use a variable `carry` to record the current carry, and two pointers `i` and `j` to point to the end of `a` and `b` respectively, and add them bit by bit from the end to the beginning.

The time complexity is `O(\max(m, n))`, where `m` and `n` are the lengths of strings `a` and `b` respectively. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public String addBinary(String a, String b) {
        var sb = new StringBuilder();
        int i = a.length() - 1, j = b.length() - 1;
        for (int carry = 0; i >= 0 || j >= 0 || carry > 0; --i, --j) {
            carry += (i >= 0 ? a.charAt(i) - '0' : 0) + (j >= 0 ? b.charAt(j) - '0' : 0);
            sb.append(carry % 2);
            carry /= 2;
        }
        return sb.reverse().toString();
    }
}
```

<br>
<br>
<br>

# [190. Reverse Bits](https://leetcode.com/problems/reverse-bits)

## Description

<p>Reverse bits of a given 32 bits unsigned integer.</p>

<p><strong>Note:</strong></p>

<ul>
	<li>Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer&#39;s internal binary representation is the same, whether it is signed or unsigned.</li>
	<li>In Java, the compiler represents the signed integers using <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank">2&#39;s complement notation</a>. Therefore, in <strong class="example">Example 2</strong> above, the input represents the signed integer <code>-3</code> and the output represents the signed integer <code>-1073741825</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 00000010100101000001111010011100
<strong>Output:</strong>    964176192 (00111001011110000010100101000000)
<strong>Explanation: </strong>The input binary string <strong>00000010100101000001111010011100</strong> represents the unsigned integer 43261596, so return 964176192 which its binary representation is <strong>00111001011110000010100101000000</strong>.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 11111111111111111111111111111101
<strong>Output:</strong>   3221225471 (10111111111111111111111111111111)
<strong>Explanation: </strong>The input binary string <strong>11111111111111111111111111111101</strong> represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is <strong>10111111111111111111111111111111</strong>.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The input must be a <strong>binary string</strong> of length <code>32</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p>

## Solutions

### Solution 1: Bit Manipulation

We can extract each bit of `n` from the least significant bit to the most significant bit, and then place it in the corresponding position of `ans`.

For example, for the `i`-th bit, we can use `(n & 1) << (31 - i)` to extract the `i`-th bit of `n` and place it on the `31 - i`-th bit of `ans`, then right shift `n` by one bit.

The time complexity is `O(\log n)`, and the space complexity is `O(1)`.

#### Java

```java
public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        int ans = 0;
        for (int i = 0; i < 32 && n != 0; i++) {
            ans |= (n & 1) << (31 - i);
            n >>>= 1;
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits)

## Description

<p>Write a function that takes the binary representation of a positive integer and returns the number of <span data-keyword="set-bit">set bits</span> it has (also known as the <a href="http://en.wikipedia.org/wiki/Hamming_weight" target="_blank">Hamming weight</a>).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 11</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The input binary string <strong>1011</strong> has a total of three set bits.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 128</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The input binary string <strong>10000000</strong> has a total of one set bit.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 2147483645</span></p>

<p><strong>Output:</strong> <span class="example-io">30</span></p>

<p><strong>Explanation:</strong></p>

<p>The input binary string <strong>1111111111111111111111111111101</strong> has a total of thirty set bits.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> If this function is called many times, how would you optimize it?

## Solutions

### Solution 1

#### Java

```java
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int ans = 0;
        while (n != 0) {
            n &= n - 1;
            ++ans;
        }
        return ans;
    }
}
```

### Solution 2

#### Java

```java
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int ans = 0;
        while (n != 0) {
            n -= (n & -n);
            ++ans;
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [136. Single Number](https://leetcode.com/problems/single-number)

## Description

<p>Given a <strong>non-empty</strong>&nbsp;array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p>

<p>You must&nbsp;implement a solution with a linear runtime complexity and use&nbsp;only constant&nbsp;extra space.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,1]
<strong>Output:</strong> 1
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [4,1,2,1,2]
<strong>Output:</strong> 4
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> 1
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></li>
	<li>Each element in the array appears twice except for one element which appears only once.</li>
</ul>

## Solutions

### Solution 1: Bitwise Operation

The XOR operation has the following properties:

-   Any number XOR 0 is still the original number, i.e., `x \oplus 0 = x`;
-   Any number XOR itself is 0, i.e., `x \oplus x = 0`;

Performing XOR operation on all elements in the array will result in the number that only appears once.

The time complexity is `O(n)`, where `n` is the length of the array. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public int singleNumber(int[] nums) {
        int ans = 0;
        for (int v : nums) {
            ans ^= v;
        }
        return ans;
    }
}
```

### Solution 2

#### Java

```java
class Solution {
    public int singleNumber(int[] nums) {
        return Arrays.stream(nums).reduce(0, (a, b) -> a ^ b);
    }
}
```

<br>
<br>
<br>

# [137. Single Number II](https://leetcode.com/problems/single-number-ii)

## Description

<p>Given an integer array <code>nums</code> where&nbsp;every element appears <strong>three times</strong> except for one, which appears <strong>exactly once</strong>. <em>Find the single element and return it</em>.</p>

<p>You must&nbsp;implement a solution with a linear runtime complexity and use&nbsp;only constant&nbsp;extra space.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,3,2]
<strong>Output:</strong> 3
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,0,1,0,1,99]
<strong>Output:</strong> 99
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li>Each element in <code>nums</code> appears exactly <strong>three times</strong> except for one element which appears <strong>once</strong>.</li>
</ul>

## Solutions

### Solution 1: Bitwise Operation

We can enumerate each binary bit `i`, and for each binary bit, we calculate the sum of all numbers on that bit. If the sum of the numbers on that bit can be divided by 3, then the number that only appears once on that bit is 0, otherwise it is 1.

The time complexity is `O(n \times \log M)`, where `n` and `M` are the length of the array and the range of elements in the array, respectively. The space complexity is `O(1)`.


#### Java

```java
class Solution {
    public int singleNumber(int[] nums) {
        int ans = 0;
        for (int i = 0; i < 32; i++) {
            int cnt = 0;
            for (int num : nums) {
                cnt += num >> i & 1;
            }
            cnt %= 3;
            ans |= cnt << i;
        }
        return ans;
    }
}
```

### Solution 2: Digital Circuit

We can use a more efficient method that uses digital circuits to simulate the above bitwise operation.

Each binary bit of an integer can only represent 2 states, 0 or 1. However, we need to represent the sum of the `i`-th bit of all integers traversed so far modulo 3. Therefore, we can use two integers `a` and `b` to represent it. There are three possible cases:

1. The `i`-th bit of integer `a` is 0 and the `i`-th bit of integer `b` is 0, which means the modulo 3 result is 0;
2. The `i`-th bit of integer `a` is 0 and the `i`-th bit of integer `b` is 1, which means the modulo 3 result is 1;
3. The `i`-th bit of integer `a` is 1 and the `i`-th bit of integer `b` is 0, which means the modulo 3 result is 2.

We use integer `c` to represent the number to be read in, and the truth table is as follows:

| `a_i` | `b_i` | `c_i` | New `a_i` | New `b_i` |
| ----- | ----- | ----- | --------- | --------- |
| 0     | 0     | 0     | 0         | 0         |
| 0     | 0     | 1     | 0         | 1         |
| 0     | 1     | 0     | 0         | 1         |
| 0     | 1     | 1     | 1         | 0         |
| 1     | 0     | 0     | 1         | 0         |
| 1     | 0     | 1     | 0         | 0         |

Based on the truth table, we can write the logical expression:

`
a_i = a_i' b_i c_i + a_i b_i' c_i'
`

and:

`
b_i = a_i' b_i' c_i + a_i' b_i c_i' = a_i' (b_i \oplus c_i)
`

The final result is `b`, because when the binary bit of `b` is 1, it means that the number appears only once.

The time complexity is `O(n)`, where `n` is the length of the array. The space complexity is `O(1)`.

#### Java

```java
class Solution {
    public int singleNumber(int[] nums) {
        int a = 0, b = 0;
        for (int c : nums) {
            int aa = (~a & b & c) | (a & ~b & ~c);
            int bb = ~a & (b ^ c);
            a = aa;
            b = bb;
        }
        return b;
    }
}
```

<br>
<br>
<br>

# [201. Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range)

## Description

<p>Given two integers <code>left</code> and <code>right</code> that represent the range <code>[left, right]</code>, return <em>the bitwise AND of all numbers in this range, inclusive</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> left = 5, right = 7
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> left = 0, right = 0
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> left = 1, right = 2147483647
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= left &lt;= right &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

## Solutions

### Solution 1

#### Java

```java
class Solution {
    public int rangeBitwiseAnd(int left, int right) {
        while (left < right) {
            right &= (right - 1);
        }
        return right;
    }
}
```

<br>
<br>
<br>

