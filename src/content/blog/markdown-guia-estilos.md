---
title: 'Markdown style guide'
description: 'Learn the basics of writing at Markdown'
pubDate: 'Nov 11 2023'
heroImage: '../img/IA_coca.webp'
---

Here's a sample of the basic Markdown syntax you can use when writing content to Astro or any other editor that supports Markdown 🖤.


## Headings

The following HTML elements `<h1>`—`<h6>` represent six levels of section headings. `<h1>` is the highest section level, while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraphs

Markdown does not require special tags for paragraphs. Simply separate each paragraph with a blank line.

## Images

#### Syntax

```markdown
![Texto alternativo](./ruta/completa/o/relativa/de/la/imagen)
```

#### Departure

![Marcador de posición del blog](/img/IA_coca.webp)

## Dating

The citation element represents content that is cited from another source, optionally with a citation that must be inside a `footer` or `cite` element, and optionally with online changes such as annotations and abbreviations.

### Appointment without attribution

#### Syntax

```markdown
> This is a quote. 
> ** Note ** that you can use Markdown_ syntax within a quote.

```

#### Departure

> This is a quote. 
> ** Note ** that you can use Markdown_ syntax within a quote.

### Appointment with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating. < br > 
> — <cite > Rob Pike < / cite >
```

#### Departure

> Don't communicate by sharing memory, share memory by communicating. < br > 
> — <cite > Rob Pike < / cite >

## Tables 
#### Syntax

```markdown
| Cursiva   | Negrita     | Código   |
| --------- | -------- | ------ |
| _cursiva_ | **negrita** | `código` |
```

#### Departure

| Cursiva   | Negrita     | Código   |
| --------- | -------- | ------ |
| _cursiva_ | **negrita** | `código` |

## Code blocks

#### Syntax

We can use 3 inverted quotes ``` in a new line and write the code snippet and close with 3 quotes inverted in a new line and to highlight the language-specific syntax, write a word of the language name after the first 3 quotes inverted, for example html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

Departure

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List types

### Ordered list

#### Syntax

```markdown
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

#### Departure

1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Messy list

#### Syntax

```markdown
- Elemento de la lista
- Otro elemento
- Y otro elemento más
```

#### Departure

- Elemento de la lista
- Otro elemento
- Y otro elemento más

### Nested list

#### Syntax

```markdown
1. Primer elemento
   - Elemento anidado
   - Otro elemento anidado
2. Segundo elemento
   - Elemento anidado
   - Otro elemento anidado
```

#### Departure

1. Primer elemento
   - Elemento anidado
   - Otro elemento anidado
2. Segundo elemento
   - Elemento anidado
   - Otro elemento anidado
```