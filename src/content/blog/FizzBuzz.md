---
title: "Learn how to solve the FizzBuzz challenge"
description: "Solving technical tests: FizzBuzz"
pubDate: "Mar 06 2024"
heroImage: "../img/floette2.jpg"

---
### Step-by-Step Guide to Solving the FizzBuzz Challenge

The FizzBuzz challenge is one of the most common problems in coding interviews. Its purpose is to test a candidate's ability to write basic code and understand fundamental concepts such as loops, conditionals, and arithmetic operations. In this guide, we will break down the problem step-by-step and explain how to solve it.

### Introduction to Multiples in Mathematics

Before we dive into solving FizzBuzz, it’s important to understand what multiples are in mathematics, as this is central to the problem.

Understanding how to solve the problem is of no use if you don’t grasp what you’re writing. If you already know what multiples are and how they are obtained, you can skip this part.

A multiple of a number is simply another number that results from multiplying that number by an integer. For example, the first multiples of 3 are 3, 6, 9, 12, etc., as they are obtained by multiplying 3 by 1, 2, 3, 4, etc., respectively.

```javascript
To find the multiples of 3:
- Multiply the base number (3) by successive integers:

   3 * 1 = 3
   3 * 2 = 6
   3 * 3 = 9
   3 * 4 = 12
To find the multiples of 3:
```

#### Common Multiple

When we talk about common multiples, we refer to numbers that are multiples of two or more numbers simultaneously. For example, common multiples of 3 and 5 are numbers that are divisible by both 3 and 5. In mathematics, we can find the least common multiple (LCM) of two numbers using the concept of the least common multiple (LCM).

```javascript
To find the common multiple of two numbers (a and b):
- Identify the multiples of each number separately.
- Look for the first number that appears in both sets of multiples.

For example, to find the common multiple of 3 and 5:
- Multiply each base number (3 and 5) by successive integers:
  - Multiples of 3: 3, 6, 9, 12, 13, 14, 15, ...
  - Multiples of 5: 5, 10, 15, 20, ...
- Notice that the first number appearing in both sets of multiples is 15.
- Therefore, 15 is the least common multiple of 3 and 5.


```

### Understanding the Logic of Finding Multiples

To determine which numbers are not multiples of a given number **(e.g., 3)**, you can use the modulus operator ``(%)``.

#### Is It a Multiple?

If a number is not divisible by 3 (i.e., the remainder of the division by 3 is not zero), then that number is not a multiple of 3.

`For each integer from 1 to n: If the number % 3 is equal to 0: That number is a multiple of 3.`

In this code, ` % ` is the modulus operator, which returns the remainder of the division between two numbers. **If the remainder of the division between a number and 3 is zero**, it means that number is a multiple of 3.

For example, if we apply this code to the numbers from 1 to 10, we will find that `the numbers that are not multiples of 3 are: 1, 2, 4, 5, 7, 8, 10.` This is because when we divide these numbers by 3, we do not get a remainder of zero.

```javascript
//ejemplo Si es multiplo

let residuo = 3 %3;

console.log(residuo);

//ejemplo NO es multiplo

let residuo = 5 %3;

console.log(residuo);
```

Ahora que hemos repasado estos conceptos básicos, podemos abordar el desafío de FizzBuzz.

## The challenge

```javascript
// Write a program that shows by console the 
// numbers from 1 to 100 (both included and with a line break between 
// each print), replacing the following: 
// - Multiples of 3 by the word "fizz". 
// - Multiples of 5 by the word "buzz". 
// - Multiples of 3 and 5 at a time by the word "fizzbuzz".


```

#### Step 1: Initialize the loop

Let's start by writing a loop that goes through the numbers from 1 to 100. This can be accomplished with a `for` loop in many programming languages.

```javascript
for (let i = 1; i <= 100; i++) {
    // Cuerpo del bucle
}
```

This loop will execute the code inside your body 100 times, with `i` taking values from 1 to 100 in each iteration.

#### Step 2: Check the multiples of 3 and 5

Within the loop, we are going to check if the current number (`i`) is a multiple of 3, 5, or both. If it is a multiple of 3, we will print "fizz". If it is a multiple of 5, we will print "buzz". And if it is a multiple of both, we will print "fizzBuzz".

```javascript
if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz");
} else if (i % 3 === 0) {
    console.log("fizz");
} else if (i % 5 === 0) {
    console.log("buzz");
} else {
    console.log(i);
}
```

The expression `i% 3 === 0` verifies if `i` is divisible by 3 without leaving a residue, and the same applies to 5. If `i` is divisible by both, then it is a common multiple of 3 and 5.

#### Step 3: Run and test the solution

With the complete code, we can run it and see the results. This will allow us to verify if our solution works correctly and produces the expected sequence of numbers and words according to the FizzBuzz rules.

```javascript
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(); // We call the function to run it

```

When executing this code, we should see the expected sequence of numbers and words according to the FizzBuzz rules.

This concludes our step-by-step guide to solving the FizzBuzz challenge. We hope this explanation has been clear and useful in understanding how to address this common programming problem. Good luck in your future coding challenges!
