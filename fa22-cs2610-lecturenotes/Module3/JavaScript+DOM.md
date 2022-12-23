# JavaScript and the DOM: Interactive User Interfaces

JavaScript is used by browsers (and increasingly, by desktop applications) to
provide an API that lets developers interact with HTML content in the `<body>`
of a document.

Mastering the DOM will let you more easily make engaging interactive user interfaces.


## Table of Contents
* [JavaScript and the DOM: Interactive User Interfaces](#javascript-and-the-dom-interactive-user-interfaces)
* [The Document Object Model JavaScript API](#the-document-object-model-javascript-api)
* [Changing the document's `<title>` programmatically](#changing-the-documents-`<title>`-programmatically)
* [Locating elements by their position relative to another element](#locating-elements-by-their-position-relative-to-another-element)
* [Locating elements the old-fashioned way: `getElementsBy*()`](#locating-elements-the-oldfashioned-way-`getelementsby`)
* [Locating elements using CSS selectors](#locating-elements-using-css-selectors)
* [Creating new HTML elements](#creating-new-html-elements)
* [Appending elements to the DOM](#appending-elements-to-the-dom)
* [Removing elements from the DOM](#removing-elements-from-the-dom)
* [Copying and moving elements in the DOM](#copying-and-moving-elements-in-the-dom)
* [Manipulating elements' attributes](#manipulating-elements-attributes)



## The Document Object Model JavaScript API

#### Document Object Model (DOM)
The browser API that connects a web page's HTML content to runnable code

*   [MDN: Document Object Model API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
*   [MDN: DOM introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
*   [MDN: Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

Nodes within the DOM have methods that can be used to access other Nodes.  The
global `document` object in JavaScript is your gateway to the DOM.  `document`
is an instance of Node and corresponds to the `<html>` element of an HTML page.
Through it you can access every visible element within the `<body>`, set the
document's title, access CSS stylesheets, etc.

An HTML document is organized as a hierarchical tree structure.  By virtue of
being a tree in a computer there are many fast and robust algorithms to search
and manipulate it.  This document describes several of these methods.  Some
methods can locate an element based upon its position in the document.  Other
methods take a string and return one or more elements based on an element's
name, ID, class, or a matching CSS selector.


### The identifier `Node`

All methods and properties described below are accessed through a reference to
an element in the DOM.  In the examples the identifier `Node` stands in for
*any* HTML element which can be stored into a variable or returned by a method
or attribute reference.


### Experimenting with the DOM with the Browser's DevTools

A great way to learn how to use the DOM is to experiment with webpages right in
the browser.  Practice using the functions explained in this document on a page
that you wrote, or on somebody else's page.  The best part is that you can't
break anything!  Your changes disappear as soon as you refresh the page.


### The `$0` convenience variable

If the browser's DevTools weren't already convenient enough, there is one more
cool trick that will save you time.  This trick works the same both in Firefox
and Chrome-based browsers.

The element Inspector allows you to select a DOM Node.  The selected node will
appear with a blue highlight in the DOM viewer and is surrounded with a pale
blue box in the browser itself.  This is true whether the node was chosen from
the DOM viewer or via the element picker tool (`Ctrl+Shift+C`).

In the JavaScript console this node is made available as a variable named `$0`.
Despite the funny-looking dollar sign in the name this is a valid JavaScript
identifier.  All of the methods described in this document can be called on
this object.

When a new element is selected it becomes `$0`.



## Changing the document's `<title>` programmatically

The `document.title` property is a string that represents the text of the
`<title>` HTML element.

*   Reading from `document.title` lets your code access the page title
*   Writing to `document.title` lets your code change the page title

Thus, you can change the page title after the page has loaded, at any time you
wish.



## Locating elements by their position relative to another element

For nodes in a tree-like data structure the relationships *parent*, *child* and
*sibling* are well-defined.  The DOM provides the following properties to
enable you take advantage of this structure.

### Find all children with `.childNodes`
[`Node.childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
returns a `NodeList` containing references to all child nodes.  While a
`NodeList` is not a JavaScript `Array`, it can be iterated over by a `for`
loop.


### Finding a single child

These properties return a single `Node` reference:

* [`Node.parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
* [`Node.firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
* [`Node.lastChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild)
* [`Node.nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)
* [`Node.previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling)


### Beware of `Text` nodes

Nodes in an HTML document can contain plain text or other nodes.  It is common
for one node to have many children, some of which are plain text and others
which are nodes written as HTML tags in the source document.  In fact, any
white space used for indentation is preserved by the browser as a
[`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) node in the
DOM.

Thus, when using the above properties may result in a surprise if you are not
expecting the `.firstChild` to be a Text node full of newlines and tabs.  For
this reason both Firefox and Chrome supply these undocumented variants of the
above functions with the word `Element` in their names.

These properties skip over the first or last Text node, always returning a real
Element when one is available.

* `Node.firstElementChild`
* `Node.lastElementChild`
* `Node.nextElementSibling`
* `Node.previousElementSibling`



## Locating elements the old-fashioned way: `getElementsBy*()`

The input strings to these methods don't need the leading `.` of classes or `#`
of ID's as used with CSS selectors.  Multiple classes can be specified to
`.getElementsByClassName()` by listing them in a single string, separated by
white space.

* [`Document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* [`Document.getElementsByClassName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
* [`Document.getElementsByName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName)
* [`Document.getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)

Note the difference in naming between `.getElementById()` (*singular*) and the
other methods `.getElementsBy*()` (*plural*).  This difference reinforces the
constraint that there can be only one HTML element with a particular `id`.



## Locating elements using CSS selectors

The CSS selectors you learned way back in the beginning of this class are also
understood by the DOM.

The parameter to these functions is a single string containing a CSS selector.

Because of the flexibility and precision afforded by CSS selectors, you will
find these methods to be much more useful than the preceding
`.getElementsBy*()` methods.


[`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
Returns the first matching element found in the DOM by a depth-first pre-order
traversal of the document's nodes starting with the first element in the
document's markup and iterating through sequential nodes by order of the number
of child nodes.


[`Document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
Returns a `NodeList` of all matching elements in the DOM.



## Creating new HTML elements

[`Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
creates and returns a new HTML element value.  The type of HTML element is
specified as a string naming it.

*   To make a division, pass the string `"div"`.
*   To create a new paragraph, pass the string `"p"`.
*   The text content of a node is accessed through the `.textContent` property

For example:

```javascript
var newDiv = document.createElement('div');
newDiv.textContent = "This is a brand-new div";
```

It is important to remember that newly-created HTML elements are *not* visible
on the page until they have been appended to the DOM.



## Appending elements to the DOM

[`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
This method adds a new HTML element into the DOM as the last child of the invoking
object.

While you create a new element with the `.createElement()` method, it will not
appear on the webpage until it is attached to the HML tree.  This is one way to
put a element into the tree is to add it as a child element to an already
extant element:

```javascript
var newDiv = document.createElement('div');
newDiv.textContent = "This is a brand-new div";
document.body.appendChild(newDiv);
```

[`Node.insertBefore(*newNode*, *refNode*)`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
This method takes *two* arguments:

*   `newNode`: the node to insert into the DOM.
*   `refNode`: the node before which `newNode` is inserted.  When this
    parameter is `null` this method operates identically to `.appendChild()`.



## Removing elements from the DOM

Once you have a reference to an element you may also remove it from the DOM
tree by calling its `.remove()` method:

```javascript
var die = document.querySelector('#userNameInput');
die.remove();
```

Alternatively, you may remove an element by using its parent's `.removeChild()`
method, passing in a reference to the element to be deleted:

This is a long-winded way to do the same thing as above:

```javascript
var die = document.querySelector('#passwordInput');
die.parentElement.removeChild(die);
```



## Copying and moving elements in the DOM

You may wish to copy a child element from one colored `<div>` into another so
that there are *two* identical pieces of text in one webpage.

If you try to do this by using `Node.appendChild()` you will find that the
element is _moved_ to a new location within the DOM structure and not copied.

If you want to create a new element with the same contents you must use
`Node.cloneNode(true | false)` to obtain a reference to a _copy_ of the
element.

Pass a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value
to cause `.cloneNode()` to make a _deep copy_ of the element, meaning that all
of its children are also cloned, recursively.


In summary:

*   You can *move* a node by using `.appendChild()` or `.insertBefore()`
*   To *copy* a node use `.cloneNode(false)`
*   To make a *deep-copy* of a node along with all of its children  use `.cloneNode(true)`



## Manipulating elements' attributes

* Attributes such as `class`, `id`, `href`, `src` are added after the fact with
  the [setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
  method.
* Attributes can be retrieved from an element with the
  [getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
  method.
* Attributes can be removed from an element with the
  [removeAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute)
  method.


To set an attribute with `.setAttribute()`, pass two strings: the name of the
attribute and its value. The value of the 2nd string is exactly what you'd put
between the quote marks in an HTML document.

`.getAttribute()` takes one argument, the name of the attribute you wish to
retrieve.


`.removeAttribute()` takes one argument, the name of the attribute you wish to
remove.
