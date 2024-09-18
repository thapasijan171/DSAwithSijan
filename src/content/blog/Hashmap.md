---
title: 'Hashmap'
description: "All solutions leetcode Top Interview 150 Hashmap"
pubDate: '2024'
heroImage: 'https://creatorspace.imgix.net/users/clzmwqjs107miod018j7gwvu9/Vvfdj3SXHlTJ05dk-Dalhousie.jpeg?w=750&h=750'
---

# [383. Ransom Note](https://leetcode.com/problems/ransom-note)

## Description

<p>Given two strings <code>ransomNote</code> and <code>magazine</code>, return <code>true</code><em> if </em><code>ransomNote</code><em> can be constructed by using the letters from </em><code>magazine</code><em> and </em><code>false</code><em> otherwise</em>.</p>

<p>Each letter in <code>magazine</code> can only be used once in <code>ransomNote</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> ransomNote = "a", magazine = "b"
<strong>Output:</strong> false
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> ransomNote = "aa", magazine = "ab"
<strong>Output:</strong> false
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> ransomNote = "aa", magazine = "aab"
<strong>Output:</strong> true
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= ransomNote.length, magazine.length &lt;= 10<sup>5</sup></code></li>
	<li><code>ransomNote</code> and <code>magazine</code> consist of lowercase English letters.</li>
</ul>

# Solutions

# Ransom Note

**Algorithm Used:** Frequency Counting

## Intuition
The problem is to determine if it is possible to construct a ransom note using the letters from a magazine. Each letter in the ransom note must be present in the magazine with at least the same frequency. The solution uses frequency counting to efficiently check if the ransom note can be constructed from the magazine.

## Approach
1. **Frequency Count**:
   - Initialize an array `cnt` of size 26 to count the occurrences of each letter in the magazine.
   - Iterate through each character in the magazine and update the count in the `cnt` array.

2. **Check Ransom Note**:
   - Iterate through each character in the ransom note.
   - For each character, decrement its count in the `cnt` array. If the count goes below zero, return `false` as there are not enough characters in the magazine.
   - If all characters in the ransom note can be accounted for, return `true`.

This approach ensures that the ransom note can be constructed from the magazine if all required letters are available in the required quantities, with a time complexity of O(M + R), where M is the length of the magazine and R is the length of the ransom note.


#### Java

```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] cnt = new int[26];
        for (int i = 0; i < magazine.length(); i++) {
            ++cnt[magazine.charAt(i) - 'a'];
        }
        for (int i = 0; i < ransomNote.length(); i++) {
            if (--cnt[ransomNote.charAt(i) - 'a'] < 0) {
                return false;
            }
        }
        return true;
    }
}
```

<br>
<br>
<br>

# [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings)


## Description

<!-- description:start -->

<p>Given two strings <code>s</code> and <code>t</code>, <em>determine if they are isomorphic</em>.</p>

<p>Two strings <code>s</code> and <code>t</code> are isomorphic if the characters in <code>s</code> can be replaced to get <code>t</code>.</p>

<p>All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;egg&quot;, t = &quot;add&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>The strings <code>s</code> and <code>t</code> can be made identical by:</p>

<ul>
	<li>Mapping <code>&#39;e&#39;</code> to <code>&#39;a&#39;</code>.</li>
	<li>Mapping <code>&#39;g&#39;</code> to <code>&#39;d&#39;</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;foo&quot;, t = &quot;bar&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<p>The strings <code>s</code> and <code>t</code> can not be made identical as <code>&#39;o&#39;</code> needs to be mapped to both <code>&#39;a&#39;</code> and <code>&#39;r&#39;</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;paper&quot;, t = &quot;title&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>t.length == s.length</code></li>
	<li><code>s</code> and <code>t</code> consist of any valid ascii character.</li>
</ul>

# Solutions

# Isomorphic Strings

**Algorithm Used:** Hash Maps for Character Mapping

## Intuition
To determine if two strings `s` and `t` are isomorphic, we need to ensure that each character in `s` can be consistently mapped to a character in `t` and vice versa. This means that no two characters in `s` map to the same character in `t`, and no two characters in `t` map to the same character in `s`.

## Approach
1. **Character Mapping**:
   - Use two hash maps:
     - `d1` to map characters from `s` to characters in `t`.
     - `d2` to map characters from `t` to characters in `s`.
   - Iterate through each character of both strings simultaneously:
     - For each character pair `(a, b)` from `s` and `t`, check:
       - If `a` is already mapped in `d1`, ensure it maps to `b`. If not, return `false`.
       - If `b` is already mapped in `d2`, ensure it maps to `a`. If not, return `false`.
     - If both conditions are satisfied, update the mappings in `d1` and `d2`.

2. **Consistency Check**:
   - If the loop completes without inconsistencies, the strings are isomorphic and return `true`.

This approach ensures that both strings maintain a one-to-one character mapping, with a time complexity of O(n), where n is the length of the strings.

#### Java

```java
class Solution {
    public boolean isIsomorphic(String s, String t) {
        Map<Character, Character> d1 = new HashMap<>();
        Map<Character, Character> d2 = new HashMap<>();
        int n = s.length();
        for (int i = 0; i < n; i++) {
            char a = s.charAt(i), b = t.charAt(i);
            if (d1.containsKey(a) && d1.get(a) != b) {
                return false;
            }
            if (d2.containsKey(b) && d2.get(b) != a) {
                return false;
            }
            d1.put(a, b);
            d2.put(b, a);
        }
        return true;
    }
}
```

<br>
<br>
<br>

# [290. Word Pattern](https://leetcode.com/problems/word-pattern)

## Description

<p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code>&nbsp;follows the same pattern.</p>

<p>Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> word in <code>s</code>. Specifically:</p>

<ul>
	<li>Each letter in <code>pattern</code> maps to <strong>exactly</strong> one unique word in <code>s</code>.</li>
	<li>Each unique word in <code>s</code> maps to <strong>exactly</strong> one letter in <code>pattern</code>.</li>
	<li>No two letters map to the same word, and no two words map to the same letter.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">pattern = &quot;abba&quot;, s = &quot;dog cat cat dog&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>The bijection can be established as:</p>

<ul>
	<li><code>&#39;a&#39;</code> maps to <code>&quot;dog&quot;</code>.</li>
	<li><code>&#39;b&#39;</code> maps to <code>&quot;cat&quot;</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">pattern = &quot;abba&quot;, s = &quot;dog cat cat fish&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">pattern = &quot;aaaa&quot;, s = &quot;dog cat cat dog&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= pattern.length &lt;= 300</code></li>
	<li><code>pattern</code> contains only lower-case English letters.</li>
	<li><code>1 &lt;= s.length &lt;= 3000</code></li>
	<li><code>s</code> contains only lowercase English letters and spaces <code>&#39; &#39;</code>.</li>
	<li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.</li>
	<li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</li>
</ul>

# Solutions

# Word Pattern

**Algorithm Used:** Hash Maps for Bidirectional Mapping

## Intuition
To determine if a given pattern matches a string `s` where each pattern character corresponds to a unique word in the string, we need to ensure that each character in `pattern` maps consistently to a word in `s` and vice versa.

## Approach
1. **Split the String**:
   - Split the string `s` into words using space as the delimiter.

2. **Check Length**:
   - If the length of the `pattern` does not match the number of words in `s`, return `false` immediately.

3. **Character-to-Word Mapping**:
   - Use two hash maps:
     - `d1` to map each character in `pattern` to a word.
     - `d2` to map each word in `s` to a character in `pattern`.

4. **Iterate and Validate**:
   - Iterate through the characters of `pattern` and words of `s` simultaneously:
     - For each character `a` and corresponding word `b`:
       - Check if `a` is already mapped to a different word in `d1` or if `b` is already mapped to a different character in `d2`. If so, return `false`.
       - If not, update the mappings in `d1` and `d2`.

5. **Consistency Check**:
   - If no inconsistencies are found, the pattern matches the string `s` and return `true`.

This approach ensures that both the pattern and the string `s` maintain a consistent one-to-one mapping, with a time complexity of O(n), where n is the number of words in `s` (and the length of `pattern`).

#### Java

```java
class Solution {
    public boolean wordPattern(String pattern, String s) {
        String[] ws = s.split(" ");
        if (pattern.length() != ws.length) {
            return false;
        }
        Map<Character, String> d1 = new HashMap<>();
        Map<String, Character> d2 = new HashMap<>();
        for (int i = 0; i < ws.length; i++) {
            char a = pattern.charAt(i);
            String b = ws[i];
            if (!d1.getOrDefault(a, b).equals(b) || d2.getOrDefault(b, a) != a) {
                return false;
            }
            d1.put(a, b);
            d2.put(b, a);
        }
        return true;
    }
}
```

<br>
<br>
<br>

# [242. Valid Anagram](https://leetcode.com/problems/valid-anagram)

## Description

<!-- description:start -->

<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an <span data-keyword="anagram">anagram</span> of <code>s</code>, and <code>false</code> otherwise.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;anagram&quot;, t = &quot;nagaram&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;rat&quot;, t = &quot;car&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, t.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> What if the inputs contain Unicode characters? How would you adapt your solution to such a case?</p>

# Solutions

# Valid Anagram

**Algorithm Used:** Frequency Count

## Intuition
To determine if two strings `s` and `t` are anagrams of each other, they must contain the exact same characters with the exact same frequencies. This problem is solved by counting character occurrences and comparing these counts.

## Approach
1. **Check Length**:
   - If the lengths of `s` and `t` are not equal, return `false` immediately since they cannot be anagrams.

2. **Frequency Count**:
   - Use an integer array `cnt` of size 26 (for each letter of the alphabet) to count the frequency of each character in `s` and subtract the frequency of each character in `t`.

3. **Validate Counts**:
   - After processing both strings, check if all values in the `cnt` array are zero. A non-zero value indicates that the frequencies of some characters do not match, meaning the strings are not anagrams.

4. **Return Result**:
   - If all values in `cnt` are zero, the strings are anagrams; otherwise, they are not.

This approach is efficient with a time complexity of O(n), where n is the length of the strings.

#### Java

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        int[] cnt = new int[26];
        for (int i = 0; i < s.length(); i++) {
            ++cnt[s.charAt(i) - 'a'];
            --cnt[t.charAt(i) - 'a'];
        }
        for (int i = 0; i < 26; i++) {
            if (cnt[i] != 0) {
                return false;
            }
        }
        return true;
    }
}
```

<br>
<br>
<br>

# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams)

## Description

<p>Given an array of strings <code>strs</code>, group the <span data-keyword="anagram">anagrams</span> together. You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">strs = [&quot;eat&quot;,&quot;tea&quot;,&quot;tan&quot;,&quot;ate&quot;,&quot;nat&quot;,&quot;bat&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">[[&quot;bat&quot;],[&quot;nat&quot;,&quot;tan&quot;],[&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;]]</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>There is no string in strs that can be rearranged to form <code>&quot;bat&quot;</code>.</li>
	<li>The strings <code>&quot;nat&quot;</code> and <code>&quot;tan&quot;</code> are anagrams as they can be rearranged to form each other.</li>
	<li>The strings <code>&quot;ate&quot;</code>, <code>&quot;eat&quot;</code>, and <code>&quot;tea&quot;</code> are anagrams as they can be rearranged to form each other.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">strs = [&quot;&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">[[&quot;&quot;]]</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">strs = [&quot;a&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">[[&quot;a&quot;]]</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 100</code></li>
	<li><code>strs[i]</code> consists of lowercase English letters.</li>
</ul>

# Solutions

# Group Anagrams

**Algorithm Used:** Frequency Count and Hashing

## Intuition
To group anagrams, we need a way to identify which strings are anagrams of each other. Anagrams have the same characters with the same frequencies. Therefore, a common representation (key) for anagrams can be derived from the character frequencies of each string.

## Approach
1. **Frequency Count**:
   - For each string, compute the frequency of each character using an integer array `cnt` of size 26 (for each letter of the alphabet).

2. **Generate Key**:
   - Construct a key from the character frequencies. This key will represent the anagram group. Use a `StringBuilder` to build this key by appending each character and its count.

3. **Group by Key**:
   - Use a `HashMap` to map each key to a list of strings (anagram group). For each string, compute its key and add it to the corresponding list in the map.

4. **Return Result**:
   - Convert the values of the `HashMap` to a list and return it. Each value in the map represents a group of anagrams.

This approach ensures that all anagrams are grouped together efficiently with a time complexity of O(n * k), where `n` is the number of strings and `k` is the maximum length of the strings.



#### Java

```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> d = new HashMap<>();
        for (String s : strs) {
            int[] cnt = new int[26];
            for (int i = 0; i < s.length(); i++) {
                ++cnt[s.charAt(i) - 'a'];
            }
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < 26; i++) {
                if (cnt[i] > 0) {
                    sb.append((char) ('a' + i)).append(cnt[i]);
                }
            }
            String k = sb.toString();
            d.computeIfAbsent(k, key -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(d.values());
    }
}
```

<br>
<br>
<br>

# [1. Two Sum](https://leetcode.com/problems/two-sum)


## Description

<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?

# Solutions

# Two Sum

**Algorithm Used:** Hash Map

## Intuition
To find two numbers in an array that add up to a given target, we need an efficient way to check if the complement of each number (i.e., `target - current number`) exists in the array.

## Approach
1. **Hash Map Initialization**:
   - Use a `HashMap` to store each number and its index as we iterate through the array. The key will be the number, and the value will be its index.

2. **Iterate Through Array**:
   - For each number `x` in the array, calculate its complement `y` which is `target - x`.

3. **Check for Complement**:
   - If the complement `y` exists in the `HashMap`, return the indices of `y` and `x`.

4. **Update Hash Map**:
   - If the complement does not exist in the `HashMap`, add the current number `x` and its index to the `HashMap`.

5. **Return Result**:
   - Once a valid pair is found, return their indices.

This approach ensures that we find the pair of indices in linear time, O(n), where `n` is the number of elements in the array.

#### Java

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> d = new HashMap<>();
        for (int i = 0;; i++) {
            int x = nums[i];
            int y = target - x;
            if (d.containsKey(y)) {
                return new int[] {d.get(y), i};
            }
            d.put(x, i);
        }
    }
}
```

<br>
<br>
<br>

# [202. Happy Number](https://leetcode.com/problems/happy-number)

## Description

<p>Write an algorithm to determine if a number <code>n</code> is happy.</p>

<p>A <strong>happy number</strong> is a number defined by the following process:</p>

<ul>
	<li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li>
	<li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li>
	<li>Those numbers for which this process <strong>ends in 1</strong> are happy.</li>
</ul>

<p>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 19
<strong>Output:</strong> true
<strong>Explanation:</strong>
1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


# Solutions

# Happy Number

**Algorithm Used:** Floyd's Cycle Detection (Tortoise and Hare)

## Intuition
A happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit repeatedly. If it does not reach 1, it falls into a cycle that does not include 1.

## Approach
1. **Cycle Detection**:
   - Use Floyd's Tortoise and Hare algorithm to detect cycles. This involves using two pointers (slow and fast) that advance through the sequence at different speeds. If there's a cycle, these two pointers will eventually meet.

2. **Calculate Next Number**:
   - Define a helper function `next(x)` to compute the sum of the squares of the digits of `x`.

3. **Iterate and Check**:
   - Initialize `slow` and `fast` pointers. `slow` moves one step at a time while `fast` moves two steps at a time.
   - Continue moving the pointers until they meet or `slow` reaches 1.

4. **Check Result**:
   - If `slow` equals 1, then the number is a happy number. Otherwise, it falls into a cycle and is not happy.

This method efficiently determines if a number is happy or not using O(log n) space for the digit operations and O(log n) time for detecting the cycle.

#### Java

```java
class Solution {
    public boolean isHappy(int n) {
        int slow = n, fast = next(n);
        while (slow != fast) {
            slow = next(slow);
            fast = next(next(fast));
        }
        return slow == 1;
    }

    private int next(int x) {
        int y = 0;
        for (; x > 0; x /= 10) {
            y += (x % 10) * (x % 10);
        }
        return y;
    }
}
```

<br>
<br>
<br>

# [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii)

## Description

<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> <em>if there are two <strong>distinct indices</strong> </em><code>i</code><em> and </em><code>j</code><em> in the array such that </em><code>nums[i] == nums[j]</code><em> and </em><code>abs(i - j) &lt;= k</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1], k = 3
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,0,1,1], k = 1
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1,2,3], k = 2
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>

# Solutions

# Contains Nearby Duplicate

**Algorithm Used:** Hash Map

## Intuition
The goal is to check if there are any duplicate values in an array where the duplicates are within a certain index distance from each other.

## Approach
1. **Hash Map for Tracking**:
   - Use a hash map to keep track of the most recent index of each element in the array.

2. **Iterate Through Array**:
   - Traverse the array, and for each element, check if it has been seen before and if the difference between the current index and the stored index is less than or equal to `k`.

3. **Update Hash Map**:
   - Update the hash map with the current index of the element after the check.

4. **Check for Duplicates**:
   - If a duplicate is found within the required index range, return `true`. Otherwise, return `false` after the traversal is complete.

This approach ensures an O(n) time complexity with O(n) space complexity due to the use of the hash map.


#### Java

```java
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer, Integer> d = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (i - d.getOrDefault(nums[i], -1000000) <= k) {
                return true;
            }
            d.put(nums[i], i);
        }
        return false;
    }
}
```

<br>
<br>
<br>

# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence)

## Description

<!-- description:start -->

<p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence.</em></p>

<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [100,4,200,1,3,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Therefore its length is 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,3,7,2,5,8,4,6,0,1]
<strong>Output:</strong> 9
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

# Solutions

# Longest Consecutive Sequence

**Algorithm Used:** Sorting

## Intuition
To find the longest sequence of consecutive integers in an array, first sort the array and then iterate through it to count the length of consecutive sequences.

## Approach
1. **Handle Small Cases**:
   - If the array has fewer than 2 elements, the longest consecutive sequence is the length of the array itself.

2. **Sort the Array**:
   - Sort the array to bring consecutive integers together.

3. **Iterate and Count**:
   - Traverse the sorted array and count the length of consecutive sequences.
   - Use a variable to keep track of the length of the current consecutive sequence and update the maximum length found.

4. **Update the Longest Sequence**:
   - If the current number is consecutive to the previous number, increment the count of the current sequence.
   - If it is not consecutive, reset the count to 1.

5. **Return the Result**:
   - After completing the traversal, return the length of the longest consecutive sequence.

This approach ensures an O(n log n) time complexity due to the sorting step, followed by an O(n) traversal.

#### Java

```java
class Solution {
    public int longestConsecutive(int[] nums) {
        int n = nums.length;
        if (n < 2) {
            return n;
        }
        Arrays.sort(nums);
        int ans = 1, t = 1;
        for (int i = 1; i < n; i++) {
            if (nums[i] == nums[i - 1]) {
                continue;
            }
            if (nums[i] == nums[i - 1] + 1) {
                ans = Math.max(ans, ++t);
            } else {
                t = 1;
            }
        }
        return ans;
    }
}
```
