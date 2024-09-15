---
title: "Exploring Arrays and Objects in JavaScript"
description: "We will learn about arrays and objects in Javascript as well as its implementation"
pubDate: "Jan 29 2024"
heroImage: "../img/img_blog/arrays.webp"
---

**Exploring Arrays and Objects in JavaScript: Practical Breakdown and Travel and Modification Methods**

This time we will see what are the arrays and objects in JavaScript, exploring methods to access indexes, loop through, and modify these vital data structures.

![portada](/img/img_blog/arrays.webp)

### **Arrays: Sorted Data Sets**

If a variable is like a box where we can store a value, the array could be imagined as a chest in which we can store data sets that we can manipulate and explore. Another way to understand them is like a basket full of frrutras: 🍎, 🍌, 🍓.

#### **Access Elements and Length of an Array**

```javascript
// Create a fruit array
const frutas = ['Manzana', 'Banana', 'Fresa'];

// Access the first item
console.log(frutas[0]); // Departure: Apple

// Access array length

console.log(frutas.length); // Departure: 3
```

In this example, we have created a fruit array and accessed the first element and the length of the array.

#### **Modify and Add Items**

```javascript
// Modify an existing element 
fruits [1] = 'Uva'; // Now the array is ['Apple', 'Uve', 'Strawberry'] 
// Add a new item at the end 

fruits.push ('Pineapple'); // Now, the array is ['Apple', 'Uve', 'Strawberry', 'Pineapple'] ```

Hemos modificado un elemento existente y añadido uno nuevo al final del array utilizando los métodos de acceso y modificación.

#### ** Delete Elements **


```javascript
// Delete the last element fruits.pop (); 
// Now, the array is ['Apple', 'Uve', 'Strawberry']

// Delete the first element fruits.shift (); 
// Now the array is ['Uva', 'Fresa']

```

With `pop` and `shift`, we have removed the last and first elements of the array, respectively.

#### **ForEach method: Exploring each Element of the Array**

```javascript
// Use foreEach to print each fruit
frutas.forEach(fruta => {
  console.log(fruta);
});
```

With `forEach`, we have traversed and explored each element of the array, printing each fruit.

#### **Map method: Transform each Element of the Array**

```javascript
// Create a new array with lengths of each fruit
const longitudesFrutas = frutas.map(fruta => fruta.length);

console.log(longitudesFrutas); // Departure: [4, 5]

```

With `map`, we have created a new array transforming each fruit into its length.

#### **Filter method: Filter Elements based on a Condition**

```javascript
// Create a new array with fruits that have more than 3 letters
const fruits Long = fruits.filter (fruit => fruit.length > 3);

console.log (Longfruits); // Departure: ['Uva', 'Fresa']
```

Using `filter`, we have obtained a new array with fruits that have more than 3 letters.

### **Objects: Storing Data with Key-Value**

Objects in JavaScript allow us to store data in a structured way using unique keys.

#### **Access Properties and Add New**

```javascript
// Create a person object
const person = { 
  name: 'Juan', 
  age: 25, 
  city: 'Pokhara' 
  };

// Access age
console.log (person.age); // Departure: 25

// Add a new property
person.work = 'Developer'; // Now the object has a new property

```

With objects, we have accessed an existing property and added a new property to the object.

#### **Modify and Delete Properties**

```javascript
// Modify the value of an existing property
person.age = 26; // Now the age is 26

// Delete a property
delete person.city; // Now, the object does not have the "city" property
```

We have modified the value of one property and removed another from the object using specific methods.

#### **Object.keys Method: Get the Keys to the Object**

```javascript
// Get object keys
const keysPerson = Object.keys (person);

console.log (keysPerson); // Departure: ['name', 'age', 'work']
```

Using `Object.keys`, we have obtained an array with the keys of the `person` object.

#### **Object.values Method: Obtain Object Values**

```javascript
// Obtain the values of the person object
const valuesPerson = Object.values (person);

console.log (Person values); // Departure: ['Juan', 26, 'Developer']
```

With `Object.values`, we have obtained an array with the values of the `person` object.

### **Practical Exercise: Applying Travel and Modification Methods**

We will combine all these concepts in one exercise:

**Exercise:** Create a fruit array and a person object. Use at least three different methods to modify the array and the object, such as adding new fruits, changing the person's age, and removing a property from the object.

```javascript
// Exercise: Add newFruits to the fruit array
const fruits = ['Apple', 'Uva', 'Strawberry']; 
const newFruits = ['Kiwi', 'Peach']; // Your code here: Use methods like push.

// Edita Ana's age, 18 years old
const persona = {
  name: 'Ana',
  age: 18,
  from: 'pokhara'
};

// Your code here:

// Print results
console.log ('Fruits:', fruits);
console.log ('Person Age:', person);

```

This exercise will provide you with a complete practice, applying methods to both arrays and objects. Explore and experiment with confidence on this exciting JavaScript journey!
