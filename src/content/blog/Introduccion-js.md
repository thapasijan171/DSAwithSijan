---
title: "JavaScript Introduction: A Practical Guide" 
description: "Basic concepts of Javascript. Pt1 "
pubDate: "Jan 5 2024"
heroImage: "../img/img_blog/javascript_portada.webp"
---

Welcome to the fascinating journey in the JavaScript world! In this guide we will explore the most fundamental concepts so that you can take your first steps with confidence and understand the true magic of JavaScript. Ready to dive into the wonderful JavaScript universe? Let's start!

![Javascript](/img/img_blog/javascript_portada.webp)

## What is JavaScript?

JavaScript is a dynamic and versatile programming language widely used to add interactivity to web pages. Its direct execution in the user's browser facilitates HTML element manipulation, event handling, and performing actions that bring pages to life. As an essential component in contemporary web development, JavaScript plays a crucial role in enhancing user experience and creating modern, interactive web applications.

## Technical Description

JavaScript is a high-level, interpreted, and object-oriented programming language. Primarily designed for web development, its capability to run on the client side allows for dynamic HTML content manipulation, user interaction, and real-time event management.

It is known for its versatility, as it can be used for both frontend and backend development, thanks to environments like Node.js. JavaScript follows the ECMAScript standard and has evolved over time, incorporating new features and improvements that have solidified its central role in the web development landscape. Its simple syntax and seamless integration with HTML and CSS make it an essential tool for creating interactive experiences and modern web applications.

## How to Run JavaScript: Various Methods

There are several ways to execute JavaScript, providing flexibility to developers. Here are some common methods:

### 1. Direct Integration into HTML

```html
<!doctype html>
<html>
  <head>
    <title>My JavaScript Page</title>
    <script>
      // Your JavaScript code goes here
      alert("Hello, World!");
    </script>
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

```html

<!doctype html>
<html>
  <head>
    <title>My Page with External JavaScript</title>
    <script src="my_script.js"></script>
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

### 3. Browser Console

The browser console is a great place to test JavaScript code snippets in real time.

## Data Types in JavaScript

JavaScript handles various data types that are essential for any programmer. Here are some examples:

### Number

Numbers in JavaScript can be either integers or decimals.

```javascript
let age = 25;
let price = 19.99;
```

### Strings

Strings represent sequences of characters.

```javascript
let name = "Juan";
let message = "Hello, how are you?";
```

### Boolean

Booleans represent true or false values.

```javascript
let isAdult = true;
let isRaining = false;
```

### Array

Arrays are ordered lists of values.

```javascript
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
```

### Object

Objects are data structures that store key-value pairs.

```javascript
let person = {
  name: "Ana",
  age: 30,
  city: "Exampleville",
};
```

In addition to the previously mentioned types, it is crucial to understand two additional types: `null` and `undefined`.

### Null

`null` is a special value in JavaScript that indicates the intentional absence of any object or value. It is used when we want to represent the lack of a value or the non-existence of an object.

```javascript
let myVariable = null;
  ```

### Undefined

`undefined` is automatically assigned to variables that have been declared but not initialized. It is also the value returned by functions that do not have a `return` statement.

```javascript
let variableWithoutValue;
console.log(variableWithoutValue); // Output: undefined
```

## Differences Between Null and Undefined

The main difference between `null` and `undefined` lies in their origin and usage. `null` is a value assigned by the programmer to indicate the absence of a value, while `undefined` indicates that a variable has not been assigned a value or does not have a value assigned.

In summary, `null` is an intentional assignment to indicate the absence of a value, whereas `undefined` generally means that the variable has been declared but not yet assigned a value.

## What Are Variables

Variables are containers that store data in JavaScript. They can be declared using the keywords `var`, `let`, or `const`.

```javascript
let myVariable = "Hello, World!";
```

## Types of Variables and Their Differences

### `var`

It was the classic way to declare variables but has function scope and can have unexpected behaviors.

### `let`

Introduced in ES6, it has block scope and is preferred over `var`.

### `const`

Used to declare constant variables whose value does not change. It also has block scope.

```javascript
let variableLet = 5;
const PI = 3.14;
```

## Various Ways to Write and Assign Variables

### Camel Case

```javascript
let userName = "John";
```

### Snake Case

```javascript
let user_name = "John";
```

### Pascal Case (for class or constructor names)

```javascript
let UserName = "John";
```

## 💛 In Summary

In this first part of our practical JavaScript guide, we've explored the essential fundamentals. From what JavaScript is and how to execute it, to data types and variable management, you now have a solid foundation. As we move forward, we'll dive into more advanced topics and guide you through practical projects to consolidate your knowledge. Don't miss the upcoming installments and get ready to unlock the full potential of JavaScript in your web projects! 🚀✨
