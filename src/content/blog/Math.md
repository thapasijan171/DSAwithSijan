---
title: "Math"
description: "All solutions leetcode Top Interview 150 Math Solutions"
pubDate: "2024"
heroImage: "https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/mYblILwJPcw0efDr-The%2520famous%2520place%2520for%2520coffee%2520cultivation%252C%2520Anpchour%252C%2520Gulmi%252C%2520Nepal_.jpeg?w=750&h=750"
---

# [9. Palindrome Number](https://leetcode.com/problems/palindrome-number)

## Description

<p>Given an integer <code>x</code>, return <code>true</code><em> if </em><code>x</code><em> is a </em><span data-keyword="palindrome-integer"><em><strong>palindrome</strong></em></span><em>, and </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 121
<strong>Output:</strong> true
<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> x = -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> x = 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
 <li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it without converting the integer to a string?

# Solutions

# Palindrome Number

**Algorithm Used:** Reversal Technique

## Intuition
To determine if an integer is a palindrome, we can reverse half of the number and compare it to the other half. If both halves are equal, the number is a palindrome. This method avoids converting the number to a string and directly manipulates the integer.

## Approach
1. **Handle Edge Cases**:
   - If the number is negative, it cannot be a palindrome.
   - If the number ends with a zero and is not zero itself, it cannot be a palindrome.

2. **Reverse Half of the Number**:
   - Initialize a variable `y` to build the reversed number.
   - Loop through the digits of `x`, building `y` by adding the last digit of `x` to it and then reducing `x` by removing the last digit.
   - Continue this process until `x` is less than or equal to `y`.

3. **Compare the Two Halves**:
   - For even-length numbers, check if `x` equals `y`.
   - For odd-length numbers, check if `x` equals `y / 10` (since the middle digit is dropped in the reversed half).

4. **Return the Result**:
   - Return `true` if the number is a palindrome, `false` otherwise.

This approach ensures that we determine whether a number is a palindrome in linear time and constant space.

#### Java

```java
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0 || (x > 0 && x % 10 == 0)) {
            return false;
        }
        int y = 0;
        for (; y < x; x /= 10) {
            y = y * 10 + x % 10;
        }
        return x == y || x == y / 10;
    }
}
```

<br>
<br>
<br>

# [66. Plus One](https://leetcode.com/problems/plus-one)

## Description

<p>You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading <code>0</code>&#39;s.</p>

<p>Increment the large integer by one and return <em>the resulting array of digits</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> digits = [1,2,3]
<strong>Output:</strong> [1,2,4]
<strong>Explanation:</strong> The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> digits = [4,3,2,1]
<strong>Output:</strong> [4,3,2,2]
<strong>Explanation:</strong> The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> digits = [9]
<strong>Output:</strong> [1,0]
<strong>Explanation:</strong> The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= digits.length &lt;= 100</code></li>
	<li><code>0 &lt;= digits[i] &lt;= 9</code></li>
	<li><code>digits</code> does not contain any leading <code>0</code>&#39;s.</li>
</ul>

# Solutions

# Plus One

**Algorithm Used:** Increment and Carry Forward

## Intuition
To increment an integer represented by an array of digits, we need to handle the carry over when a digit exceeds 9. This involves updating the digits from the least significant to the most significant, and potentially expanding the array if there is an overflow.

## Approach
1. **Iterate from the End**:
   - Traverse the `digits` array from the last element to the first.
   - Increment the current digit by 1 and update it using modulo 10 to handle any carry over.
   - If the incremented digit is not zero, return the updated `digits` array immediately.

2. **Handle Overflow**:
   - If the loop completes without returning, it means every digit was 9 and has been turned to 0 (e.g., 999 becomes 000).
   - In this case, create a new array with a length of `n + 1` (where `n` is the original length of the array).
   - Set the first element of the new array to 1, representing the incremented value.

3. **Return the Result**:
   - Return the updated `digits` array.

This approach ensures that we handle the carry over efficiently and accommodate cases where the result requires an additional digit.



#### Java

```java
class Solution {
    public int[] plusOne(int[] digits) {
        int n = digits.length;
        for (int i = n - 1; i >= 0; i--) {
            ++digits[i];
            digits[i] %= 10;
            if (digits[i] != 0) {
                return digits;
            }
        }
        digits = new int[n + 1];
        digits[0] = 1;
        return digits;
    }
}
```

<br>
<br>
<br>

# [172. Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes)


## Description

<p>Given an integer <code>n</code>, return <em>the number of trailing zeroes in </em><code>n!</code>.</p>

<p>Note that <code>n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 0
<strong>Explanation:</strong> 3! = 6, no trailing zero.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> 1
<strong>Explanation:</strong> 5! = 120, one trailing zero.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you write a solution that works in logarithmic time complexity?</p>

# Solutions

# Trailing Zeroes

**Algorithm Used:** Count Factors of 5

## Intuition
To determine the number of trailing zeroes in the factorial of a number `n`, we need to count how many times 10 is a factor in the factorial. Since 10 is the product of 2 and 5, and there are usually more factors of 2 than 5 in factorials, counting the number of factors of 5 will give the number of trailing zeroes.

## Approach
1. **Count Factors of 5**:
   - Initialize a counter `ans` to zero.
   - Divide `n` by 5 and add the result to `ans`. This counts the number of multiples of 5.
   - Continue dividing `n` by increasing powers of 5 (i.e., 25, 125, etc.), adding the result each time to `ans`. This counts the additional factors of 5 contributed by higher multiples of 5.

2. **Handle the Loop**:
   - Repeat the division until `n` becomes zero.

3. **Return the Result**:
   - Return `ans`, which represents the total number of trailing zeroes in `n!`.

This approach efficiently counts the number of trailing zeroes without having to compute the factorial itself, which can be very large.


#### Java

```java
class Solution {
    public int trailingZeroes(int n) {
        int ans = 0;
        while (n > 0) {
            n /= 5;
            ans += n;
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [69. Sqrt(x)](https://leetcode.com/problems/sqrtx)

## Description

<!-- description:start -->

<p>Given a non-negative integer <code>x</code>, return <em>the square root of </em><code>x</code><em> rounded down to the nearest integer</em>. The returned integer should be <strong>non-negative</strong> as well.</p>

<p>You <strong>must not use</strong> any built-in exponent function or operator.</p>

<ul>
	<li>For example, do not use <code>pow(x, 0.5)</code> in c++ or <code>x ** 0.5</code> in python.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> The square root of 4 is 2, so we return 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> x = 8
<strong>Output:</strong> 2
<strong>Explanation:</strong> The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= x &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

# Solutions

# Sqrt(x)

**Algorithm Used:** Binary Search

## Intuition
To compute the integer square root of a non-negative integer `x`, we need to find the largest integer `r` such that `r * r` is less than or equal to `x`. Binary search is an efficient way to achieve this by narrowing down the search range.

## Approach
1. **Initialize Variables**:
   - Set `l` to 0 and `r` to `x`.

2. **Binary Search**:
   - Perform binary search by repeatedly dividing the search range:
     - Compute the midpoint `mid` of the current range using `(l + r + 1) >>> 1` to handle large values safely.
     - If `mid * mid` exceeds `x`, adjust the right boundary `r` to `mid - 1`.
     - Otherwise, adjust the left boundary `l` to `mid`.

3. **Return the Result**:
   - After the loop completes, `l` will be the integer square root of `x`.

This approach efficiently finds the integer square root with a time complexity of O(log x) due to the binary search process.


#### Java

```java
class Solution {
    public int mySqrt(int x) {
        int l = 0, r = x;
        while (l < r) {
            int mid = (l + r + 1) >>> 1;
            if (mid > x / mid) {
                r = mid - 1;
            } else {
                l = mid;
            }
        }
        return l;
    }
}
```

<br>
<br>
<br>

# [50. Pow(x, n)](https://leetcode.com/problems/powx-n)

## Description

<!-- description:start -->

<p>Implement <a href="http://www.cplusplus.com/reference/valarray/pow/" target="_blank">pow(x, n)</a>, which calculates <code>x</code> raised to the power <code>n</code> (i.e., <code>x<sup>n</sup></code>).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 2.00000, n = 10
<strong>Output:</strong> 1024.00000
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> x = 2.10000, n = 3
<strong>Output:</strong> 9.26100
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> x = 2.00000, n = -2
<strong>Output:</strong> 0.25000
<strong>Explanation:</strong> 2<sup>-2</sup> = 1/2<sup>2</sup> = 1/4 = 0.25
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-100.0 &lt; x &lt; 100.0</code></li>
	<li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup>-1</code></li>
	<li><code>n</code> is an integer.</li>
	<li>Either <code>x</code> is not zero or <code>n &gt; 0</code>.</li>
	<li><code>-10<sup>4</sup> &lt;= x<sup>n</sup> &lt;= 10<sup>4</sup></code></li>
</ul>

# Solutions

# Pow(x, n)

**Algorithm Used:** Exponentiation by Squaring

## Intuition
To compute `x` raised to the power of `n` (`x^n`), we can use an efficient algorithm known as exponentiation by squaring. This method reduces the number of multiplications by breaking down the exponentiation process into smaller steps, handling large powers efficiently.

## Approach
1. **Handle Negative Exponents**:
   - If `n` is negative, compute `1 / (x^(-n))` to handle negative exponents.

2. **Exponentiation by Squaring**:
   - Use a helper function `qpow` to perform the actual computation:
     - Initialize `ans` to 1 to accumulate the result.
     - While `n` is greater than 0:
       - If `n` is odd (`n & 1` is 1), multiply `ans` by `a`.
       - Square `a` (i.e., `a = a * a`) to handle the next power of 2.
       - Right-shift `n` by 1 bit (`n >>= 1`) to process the next bit of the exponent.

3. **Return the Result**:
   - The result from `qpow` is returned as the final answer.

This approach ensures that the computation is efficient with a time complexity of O(log n), due to the reduction in the number of multiplications through exponentiation by squaring.


#### Java

```java
class Solution {
    public double myPow(double x, int n) {
        return n >= 0 ? qpow(x, n) : 1 / qpow(x, -(long) n);
    }

    private double qpow(double a, long n) {
        double ans = 1;
        for (; n > 0; n >>= 1) {
            if ((n & 1) == 1) {
                ans = ans * a;
            }
            a = a * a;
        }
        return ans;
    }
}
```

<br>
<br>
<br>

# [149. Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line)

## Description

<!-- description:start -->

<p>Given an array of <code>points</code> where <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> represents a point on the <strong>X-Y</strong> plane, return <em>the maximum number of points that lie on the same straight line</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0149.Max%20Points%20on%20a%20Line/images/plane1.jpg" style="width: 300px; height: 294px;" />
<pre>
<strong>Input:</strong> points = [[1,1],[2,2],[3,3]]
<strong>Output:</strong> 3
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0149.Max%20Points%20on%20a%20Line/images/plane2.jpg" style="width: 300px; height: 294px;" />
<pre>
<strong>Input:</strong> points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= points.length &lt;= 300</code></li>
	<li><code>points[i].length == 2</code></li>
	<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
	<li>All the <code>points</code> are <strong>unique</strong>.</li>
</ul>

# Solutions

# Max Points on a Line

**Algorithm Used:** Brute Force with Line Equation Check

## Intuition
To find the maximum number of points that lie on the same straight line, we can use a brute force approach to check all possible lines formed by pairs of points. By iterating through each pair and checking how many other points lie on the same line, we can determine the maximum number of collinear points.

## Approach
1. **Initialize Variables**:
   - `n` is the total number of points.
   - `ans` is initialized to 1 to keep track of the maximum number of collinear points.

2. **Check All Point Pairs**:
   - Iterate through each point `i` and pair it with every other point `j` to form a line.
   - For each line formed by points `i` and `j`, check how many other points `k` lie on the same line:
     - Compute the cross-product to avoid division and floating-point precision issues.
     - If the cross-product is zero, the point `k` is on the line formed by `i` and `j`, so increment the count.

3. **Update Maximum**:
   - After checking all points for each pair, update `ans` with the maximum count of collinear points found.

4. **Return the Result**:
   - Return `ans`, which represents the maximum number of points that lie on the same line.

This approach has a time complexity of O(n^3), where `n` is the number of points. It checks every triplet of points to determine collinearity.

#### Java

```java
class Solution {
    public int maxPoints(int[][] points) {
        int n = points.length;
        int ans = 1;
        for (int i = 0; i < n; i++) {
            int x1 = points[i][0], y1 = points[i][1];
            for (int j = i + 1; j < n; j++) {
                int x2 = points[j][0], y2 = points[j][1];
                int cnt = 2;
                for (int k = j + 1; k < n; k++) {
                    int x3 = points[k][0], y3 = points[k][1];
                    int a = (y2 - y1) * (x3 - x1);
                    int b = (y3 - y1) * (x2 - x1);
                    if (a == b) {
                        ++cnt;
                    }
                }
                ans = Math.max(ans, cnt);
            }
        }
        return ans;
    }
}
```