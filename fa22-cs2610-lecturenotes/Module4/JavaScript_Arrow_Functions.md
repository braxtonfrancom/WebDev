# JavaScript Arrow Functions

## Table of Contents

* [Function Invocation Patterns in JavaScript](#function-invocation-patterns-in-javascript)
* [Arrow Functions `=>`](#arrow-functions-)


## Function Invocation Patterns in JavaScript

In most programming languages, a function's behavior depends upon how it is
*declared*, and not on how it is invoked.  JavaScript is unlike those other
mainstream programming languages.  A single function in JavaScript can behave
differently depending upon *how* it is invoked.

There are _four_ ways to invoke (call) a function in JavaScript:

1.  The function invocation pattern
2.  The method invocation pattern
3.  The constructor invocation pattern
4.  The apply and call invocation pattern

This means that you can call the _same_ function in four different ways and get
four different results.  Here is a demonstration of what the first three most
common invocation patterns look like ("apply and call" is not as common, so it
is left out):

```javascript
// Declaring a function `f` which will print a different message
// depending upon how it's called
const f = function() {
    console.log(`This function got ${arguments.length} argument${arguments.length == 1 ? '' : 's'}`);
    if (this === window) {
        console.log(`'this' is the global window object ${this}`);
    }
    else {
        console.log(`'this' is something else ${this}`);
        if (this.hasOwnProperty('name')) {
            console.log(`In fact, 'this' is an object named ${this.name}`);
        }
        else {
            // A constructor in JavaScript works a bit like __init__ from Python
            // Initialize an object by assigning properties to "this"
            this.name = arguments[0];
            this.sum = arguments[1] + arguments[2];
        }
    }
    return true;
};

var r = null;

// Function invocation
r = f(1, 2, 3);

// Method invocation - `f()` is a property of an object, and is invoked
// like a method.
var steve = { name: 'Steve the object', f: f };
r = steve.f(1, 2, 3)

// Constructor invocation
// Notice that while `f()` explicitly returns the boolean value `true`,
// that is not what is assigned into `r`
r = new f("Piper", 2, 3);
```


### Further reading

This article explains the four patterns in more depth:

* [JS Function Invocation Patterns](http://doctrina.org/Javascript-Function-Invocation-Patterns.html)

MDN articles all about functions in JavaScript

-   [MDN: Declaring functions & function statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
-   [MDN Guide on functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
-   [Another MDN reference about functions? Sure, why not?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)



## Arrow Functions `=>`

In light of the foregoing explanation, it is reassuring to realize that,
although one function may have _four_ separate meanings, that meaning is
decided by how the function is _called_.  Once you learn the patterns you will
know roughly how the function will behave when you write the function call.

Wouldn't it be worse if the meaning of a function could also depend upon _how_
it is declared?  Then, in order to know how a function would behave you'd have
to go search for its definition.  It sure is a good thing that this is not the
case in JavaScript... oh, wait.

In 2015 a new syntax for declaring functions was introduced to JavaScript in a
draft of the language called "ES6".  Here is the same function `f()` from
above, written in the new syntax and named `arrow()`.  Note the presence of the
`=>` arrow operator separating the empty parameter list from the body of the
function in curly brackets:

```javascript
const arrow = () => {
    console.log(`This function got ${arguments.length} argument${arguments.length == 1 ? '' : 's'}`);
    if (this === window) {
        console.log(`'this' is the global window object ${this}`);
    }
    else {
        console.log(`'this' is something else ${this}`);
        if (this.hasOwnProperty('name')) {
            console.log(`In fact, 'this' is an object named ${this.name}`);
        }
        else {
            // A constructor in JavaScript works a bit like __init__ from Python
            // Initialize an object by assigning properties to "this"
            this.name = arguments[0];
            this.sum = arguments[1] + arguments[2];
        }
    }
    return true;
};

r = arrow(1, 2, 3);      // ReferenceError: arguments is not defined

var kaleb = { name: 'Kaleb the object', f: arrow };
r = kaleb.f(1, 2, 3);    // ReferenceError: arguments is not defined

r = new arrow(1, 2, 3);  // TypeError: arrow is not a constructor
```

The jarring difference between "arrow" and "regular" functions is that arrow
functions are **not** implicitly passed `this` and `arguments` objects.  Thus
they don't work well as methods in an object, nor can they be used as object
constructors.


### Arrow functions improve readability

So, what *are* they used for?  Arrow functions (also known as "Fat Arrow
Functions", but you're not supposed to call them that anymore) improve the
readability of programs using "anonymous functions".  Anonymous functions are
are commonly used in functional programming, a style of programming which
JavaScript supports and that has become increasingly popular in the past
decade.

Ordinary functions are declared with a name, most often by assignment to a
variable upon declaration.  Programs written in the functional style may pass
functions as parameters to other functions:

```javascript
// Just an ordinary function
var boo = function() {
    console.log("Boo!");
}

// This code will sneak up behind you and scare you in 3 seconds
setTimeout(boo, 3000);
```

A function my be written directly into the parameter list, obviating any need
for a name.  Nameless functions are anonymous.  Since I don't plan on using the
function `boo()` anywhere else, it has No Use For a Name, not unlike that
awesome skate punk band from the 90's (RIP Tony Sly):

```javascript
setTimeout(function(){ console.log("Boo!") }, 3000);
```

This is a very common idiom in modern JavaScript.  As more programmers began
writing code in this style, complaints were raised that the repetitive tokens
`function`, `{` and `}` hindered readability.  The `=>` operator was introduced
to streamline this popular construct.

```javascript
// Arrow function accepting 0 args (denoted by an empty parameter list `()`)
setTimeout(() => console.log("Boo!"), 3000);
```

#### Another example

This is the `doMath()` function I introduced in Module 3.  You will recall that
we can use it with two-parameter functions:

```javascript
var doMath = function(f, a, b) {
    return f(a, b);
}

var add = function(a, b) {
    return a + b;
}

> doMath(add, 2, 3)
5
```

I introduced *Anonymous Functions* with this expression which passes a literal
function value as `doMath()`'s first parameter:

```javascript
> doMath(function(a, b) { return a ** b; }, 2, 3)
8
```

This is written more succinctly with an arrow function:

```javascript
> doMath((a, b) => a ** b, 2, 3)
```

This anonymous function is shorter when written as an arrow function because

*   The `function` keyword is replaced with the `=>` token
*   Curly braces are omitted because the function contains only one statement
*   The sole statement is assumed to be the return value, so no `return` keyword is needed

When an arrow function needs more than one statement you will need to restore
the curly braces.  If your function produces a result, you will also need the
`return` keyword.


### Further reading

*   [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

The second article nicely explains the differences between arrow and ordinary
functions.  Just don't take the joke about the "goes to" operator seriously.
There is no such thing, and talking about it, even as a joke, is probably bad
for your brain cells.
