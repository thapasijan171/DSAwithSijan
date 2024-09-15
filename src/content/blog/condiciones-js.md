---
title: "Javascript: Conditional"
description: "We will learn about conditions in Javascript as well as its implementation"
pubDate: "Jan 18 2024"
heroImage: "../img/img_blog/sofiRed.webp"
---
** Making Decisions in JavaScript: The Power of Flow Control Structures **

In the programming world, decision-making ability is essential for writing dynamic and adaptive code. In JavaScript, one of the key tools for this purpose is the flow control structure `if`. Join me as we explore the use of `if` and its variants.

![sofi](/img/img_blog/sofiRed.webp)

### 1. if-else: Taking Different Routes

The `if-else` structure allows us to execute different code blocks depending on whether a condition is true or false. Let's see a practical example:

```javascript
let age = 18;

if (age >= 18) {
  console.log("Eres mayor de age");
} else {
  console.log("Eres menor de age");
}
```

Here, the program decides if a person is of legal age or minor, printing the corresponding message. It is like having two possible paths at a crossroads.


### 2. if-else if-else: Navigating Between Options 
For more complex situations with multiple conditions, we can use `else if` to evaluate additional cases:



```javascript
let hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```

Here, the program greets according to the time of day, providing personalized messages for the morning, afternoon and night.

### 3. Ternary Operator: Elegance on a Line

The ternary operator is a concise way to express `if-else` structures on a single line:

```javascript
let esMajor = age >= 18? "Older": "Lower of age"; 
console.log (enMajor);
```

This approach is especially useful when you want to assign a value based on a condition efficiently.

### 4. switch: A Structured Alternative

`switch` is ideal when you have multiple cases and want to run different code blocks depending on the value of an expression:

```javascript
let diaDeLaSemana = "Lunes";

switch (diaDeLaSemana) {
  case "Lunes":
    console.log("Comienzo de la semana");
    break;
  case "Viernes":
    console.log("¡Viernes, por fin!");
    break;
  default:
    console.log("Es otro día de la semana");
}
```

This construction is like an options menu, where the code addresses the corresponding case.

### 5. Truthy and Falsy: Beyond the Strictly True or False

In Boolean contexts, values can be evaluated as `truthy` or `falsy`. This can be used in `if` statements as follows:

```javascript
let nombre = "";

if (nombre) {
  console.log("El nombre es truthy");
} else {
  console.log("El nombre es falsy");
}
```

Here, the program determines whether the name is considered "truthy" or "falsy" in a Boolean context.

By understanding these flow control structures in JavaScript, you equip yourself with powerful tools to guide the behavior of your code. Explore, experiment and make informed decisions in your programs!

