---
title: "JavaScript: Functions and scope of variables"
description: "Functions and Understanding Variables"
pubDate: "Jan 9 2024"
heroImage: "../img/img_blog/javascript3.webp"
---

## JavaScript: Explorando Funciones y Comprendiendo Variables

![javascript image](/img/img_blog/javascript2.webp)

In this second installment of our practical JavaScript guide, we will dive into the fascinating world of functions and explore the subtleties between `var`, `let`, and `const`. Get ready to unravel these crucial concepts on your journey through web development.

## Functions in JavaScript

Functions are reusable blocks of code that perform a specific task. Creating a function involves two fundamental steps: declaration and execution.

### Function Declaration


```javascript
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
```

Here, `saludar` is the name of the function, and `(nombre)` are the parameters it can accept.

### Function Execution


```javascript
saludar("Juan");
```

By calling the `saludar` function with the argument `"Juan"`, we execute the code inside the function and get the expected output.

### Types of Functions

#### Functions with Return Value

```javascript
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(3, 5);
// 8
```

#### Anonymous Functions

```javascript
let saludar = function(nombre) {
  console.log(`¡Hola, ${nombre}!`);
};

saludar("Ana");
// Output: ¡Hola, Ana!
```

#### Arrow Functions

```javascript
let multiplicar = (a, b) => a * b;

let producto = multiplicar(4, 6);
// producto: 24
```

Arrow functions (`arrow functions`) are a more concise way to write functions.

## Variables: var, let y const

### `var`

```javascript
function ejemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}

ejemploVar();
// 10
```

`var` has a scope of function, which means that its statement rises to the top level of its execution context.

### `let`

```javascript
function exampleLet () { 
  if (true) { 
    let and = 20;
    } console.log (y); // Error! } exampleLet ();


```

`let` has a block scope, which means it is limited to the closest code block.

### `const`

```javascript
function ejemploConst() {
  const PI = 3.14;
  console.log(PI);
}

ejemploConst();
// Salida: 3.14
```

In this example, `const` is used to declare a constant `PI` and is assigned the value of `3.14`. Although it is possible to assign a value to `const` only once, keep in mind that this does not prevent the content of the object you are referring to from changing if it is a mutable object.

## Scope en JavaScript

The scope refers to the accessibility and visibility of the variables in different parts of the code.

### Scope Global

```javascript
let globalVar = "Soy global";

function ejemploScopeGlobal() {
  console.log(globalVar);
}

ejemploScopeGlobal();
// Salida: Soy global
```

### Scope Local

```javascript
function ejemploScopeLocal() {
  let localVar = "Soy local";
  console.log(localVar);
}

ejemploScopeLocal();
// Salida: Soy local

console.log(localVar); // ¡Error!
```

Variables declared with `let` and `const` have a block scope, limiting their accessibility to the block in which they are declared.

## Conclusion 

In this part of our JavaScript guide, we have explored how to create and run functions, as well as the differences between `var`, `let` and `const`. Understanding these concepts is essential to build solid applications and understand how variables affect the flow and structure of your code. In the next installment, we will immerse ourselves in more advanced concepts and take you through practical exercises to consolidate your knowledge. Keep exploring and unlocking the potential of JavaScript in your web projects! 🚀 ✨

