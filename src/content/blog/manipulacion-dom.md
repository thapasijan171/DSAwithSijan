---
title: "Introduction to DOM and its Manipulation"
description: "The Document Object Model (DOM) is a programming interface for HTML and XML documents."
pubDate: "Feb 18 2024"
heroImage: "../img/img_blog/sofi_funko.webp"
---

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the document structure as a node tree, allowing developers to dynamically access, manipulate, and update the elements and content of a web page using JavaScript or other browser-based technologies.

## **Key Concepts**

1. **Nodes**: In the DOM, each part of the document, such as HTML elements, attributes, text, comments, etc., is represented as a node. Nodes can have parent-child relationships and can be accessed, modified, and deleted programmatically.

2. **Node Tree**: The DOM organizes nodes into a tree structure, where the root node is the entire document and other nodes are its descendants. This hierarchical structure facilitates the navigation and manipulation of document elements.

3. **Elements**: These are nodes that represent HTML tags in the document, such as `<div>`, `<p>`, `<h1>`, etc. Each element can have associated attributes and content.

4. **Attributes**: These are additional characteristics of an element specified in the opening tag, such as `id`, `class`, `src`, etc. Attributes can be accessed and modified with JavaScript to change the behavior or style of an element.

5. **Events**: The DOM allows interaction with users through events, such as mouse clicks, key presses, form changes, etc. Events can be listened to and handled with JavaScript to perform specific actions in response to user actions.

6. **Element Selection**: Developers can select elements from the DOM using various methods, such as `getElementById()`, `querySelector()`, `getElementsByClassName()`, etc. These methods allow access to specific elements based on their ID, class, tag, or other selection criteria.


## **Methods to Modify the DOM with JavaScript**

1. **getElementById()**: Returns the first element with the specified `id` attribute value.

2. **querySelector()**: Returns the first element that matches a specified CSS selector in the document.

3. **createElement()**: Creates a new element with the specified tag name.

4. **appendChild()**: Adds a node as the last child of a specified parent node.

5. **innerHTML**: Provides or returns the HTML content of an element and allows you to change an element's HTML content.

6. **classList**: Provides methods to add, remove, and toggle CSS classes on an element, making it easier to dynamically manipulate styles.

## **Examples of Using Methods**

## **Accessing Parent/Child Elements**

In addition to directly manipulating an element's children, it is often useful to access the parent and child elements in the DOM. Here are some examples of how to do it:

1. **Accessing the Parent of an Element**

Suppose we want to highlight the background of a paragraph when it is clicked, but also want to change the background of the paragraph's container. We can achieve this by accessing the parent of the paragraph:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Accessing Parent/Child Elements in the DOM</title>
    <style>
        .highlighted {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div id="container">
        <p onclick="highlightElement(this)">Click here</p>
    </div>
    <script>
        function highlightElement(element) {
            element.classList.add('highlighted');
            const parent = element.parentNode;
            parent.style.backgroundColor = 'lightblue';
        }
    </script>
</body>
</html>

```

## Example

In this example, when clicking on the paragraph, the function `resaltarElemento()` is executed, passing the paragraph as an argument. Inside this function, we add the 'resaltado' class to the paragraph to highlight its background. Then, we access the paragraph's parent with `parentNode` and change the background color of the container.

## Accessing the Children of an Element

Suppose we want to count the number of child elements of a container and display this number in a message. We can achieve this by accessing the list of children of the container.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Accessing Parent/Child Elements in the DOM</title>
</head>
<body>
    <div id="container">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
    </div>
    <button onclick="countChildren()">Count Children</button>
    <script>
        function countChildren() {
            const container = document.getElementById('container');
            const numberOfChildren = container.children.length;
            alert('The container has ' + numberOfChildren + ' children.');
        }
    </script>
</body>
</html>
```

## Example

In this example, when clicking the "Count Children" button, the function `countChildren()` is executed. Within this function, we select the `<div>` container using `getElementById('container')`, then access its list of children with `children`. We calculate the length of this list to get the number of children and display this number in an alert message.

## **Creating New Elements**

In addition to accessing and modifying existing elements in the DOM, it is common to create new elements dynamically and add them to the webpage as needed. Here are some examples of how you can create and add new elements to the DOM:

1. **Create a new element and add it as a child to another element**

Suppose we want to add a new list item `<li>` to an unordered list `<ul>` each time the user clicks a button:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Creating New Elements in the DOM</title>
</head>
<body>
    <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <button onclick="addElement()">Add Element</button>
    <script>
        function addElement() {
            const list = document.getElementById('myList');
            const newElement = document.createElement('li');
            newElement.textContent = 'New element';
            list.appendChild(newElement);
        }
    </script>
</body>
</html>
```

In this example, clicking the "Add Element" button runs the `add Element ()` function. Within this function, we create a new element `< li >` with `createElement ('li')` and assign the text 'New element' with `textContent`. Then we use `appendChild (newElement)` to add this new item as the last child in the messy list.

2. **Create a new element with attributes and styles**

Suppose we want to create a new button with custom text and a specific style:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Creating New Elements in the DOM</title>
    <style>
        .customButton {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="buttonContainer"></div>
    <script>
        const container = document.getElementById('buttonContainer');
        const newButton = document.createElement('button');
        newButton.textContent = 'Click here';
        newButton.classList.add('customButton');
        container.appendChild(newButton);
    </script>
</body>
</html>
```

In this example, we create a new button using `createElement ('button')` and assign the text 'Click here' with `textContent`. Then we add the 'Custom button' class to the button with `classList.add ('Custom button')` to apply custom CSS styles. Finally, we use `appendChild (newBoton)` to add this new button as the child of the container.

**Adding Items to DOM**

One of JavaScript's fundamental capabilities in handling DOM is the ability to dynamically add new elements to the document tree. Here are some examples of how you can do it:

1. **Add a new paragraph at the end of the document body:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Adding Elements to the DOM</title>
</head>
<body>
    <script>
        // Create a new paragraph element
        const newParagraph = document.createElement('p');
        // Assign text to the paragraph
        newParagraph.textContent = 'This is a new paragraph added dynamically.';
        // Append the paragraph to the end of the document body
        document.body.appendChild(newParagraph);
    </script>
</body>
</html>
```

In this example, a new paragraph element is created using `document.createElement ('p')`, text is assigned using the `textContent` property, and then added to the end of the document body using `document.body. appendChild (new paragraph)`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation</title>
    <style>
        .highlighted {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="container"></div>
    <button onclick="addElement()">Add Element</button>
    <script>
        function addElement() {
            const parent = document.getElementById('container');
            const newElement = document.createElement('p');
            newElement.innerHTML = 'New element';
            newElement.classList.add('highlighted');
            parent.appendChild(newElement);
        }
    </script>
</body>
</html>

```

This code creates a new paragraph when the "Add Element" button is clicked, assigns it content and a class, and adds it as the div's child with the 'container' id.

2. **Add a new item to a specific container:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Adding Elements to the DOM</title>
</head>
<body>
    <div id="container">
        <!-- This is the container where the new element will be added -->
    </div>
    <script>
        // Get the container
        const container = document.getElementById('container');
        // Create a new link element
        const newLink = document.createElement('a');
        // Set attributes for the link
        newLink.href = 'https://floette.vercel.app/';
        newLink.textContent = 'My Portfolio';
        // Add the link to the container
        container.appendChild(newLink);
    </script>
</body>
</html>
```

In this example, the container is obtained using `document.getElementById ('container')`, a new link element is created with `document.createElement ('a')`, attributes such as `href` and `textContent` are assigned , and then added to the container using `container.appendChild (newEnlace)

## **Recap: More Examples of DOM Manipulation**

1. Change the content of an existing item:

```javascript
const element = document.getElementById ('myElement'); 
element.innerHTML = 'New content';
```

2. Delete an item from the DOM:

```javascript
const element = document.getElementById ('Element to Delete'); 
element.parentNode.removeChild (element);
```

3. Add an event handler to an item:

```javascript
const button = document.getElementById ('miBoton'); 
button.addEventListener ('click', function () { 
    alert ('Click the button!'); 
    });


```
