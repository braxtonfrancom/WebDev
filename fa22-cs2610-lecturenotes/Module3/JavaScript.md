# The JavaScript Language

JavaScript is an imperative, interpreted, dynamically-typed programming
language.  It supports functional programming with first-class functions.
While there are objects in JavaScript, it is *not* a class-based
object-oriented language in the same vein as Java, C#, etc.; JavaScript follows
the example set forth by the *Self* language where inheritance is prototypical.

JavaScript has been a core web technology since the early days of the World
Wide Web in the mid 90's.  The language was originally developed by Netscape
Corporation employee Brendan Eich for use in the Netscape Navigator browser.
Microsoft quickly adopted, reverse-engineered and extended the language for use
in their Internet Explorer browser.  This resulted in developers coding against
two similar-but-incompatible languages.

In response, Netscape approached the European Computer Manufacturers
Association (ECMA) to govern a standards body that would define a unified
language standard that all web browsers could implement.  The resulting
language that exists as a specification document is called ECMAScript.
ECMAScript is the scripting language that forms the basis of JavaScript.

The evolution of JavaScript continues as ECMA releases updated language
standard documents.  The latest edition is the
[2022 edition (13th ed)](https://ecma-international.org/ecma-262/),
released June 2022.

Here are some useful JavaScript resources that will help you as you get
started.

-   [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
-   [Document Object Model API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
-   [MDN Solve Common JavaScript Problems](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto)


## Table of Contents
* [Using the browser's developer tools](#using-the-browsers-developer-tools)
* [Basic features of the JavaScript language ](#basic-features-of-the-javascript-language)
* [Variables, Scope and Conditionals](#variables-scope-and-conditionals)
* [Objects](#objects)
* [Loops and iteration](#loops-and-iteration)
* [Functions](#functions)
* [Automatic Semicolon Insertion](#automatic-semicolon-insertion)
* [Debugging JavaScript](#debugging-javascript)
* [Miscellaneous tips](#miscellaneous-tips)



## Using the browser's developer tools

The best way to get up to speed is to experiment and try things out.  Luckily
for you, you've had a very capable JavaScript IDE installed all along in your
Browser.

It is my expectation that you will spend a significant amount of time wrestling
with JavaScript code in your browser's JavaScript console.  You are allowed to
use the console on exams in the Testing Center.

-   [MDN Web Console (Firefox-specific)](https://developer.mozilla.org/en-US/docs/Tools/Web_Console)
-   [MDN Browser Console (Firefox-specific)](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console)
-   [Using the Console (Google Chrome-specific, should work for Brave and Edge, too)](https://developers.google.com/web/tools/chrome-devtools/console/)



## Basic features of the JavaScript language

JavaScript shares many features with mainstream ALGOL-derived languages you are
already familiar with, such as C, C++, Java, and C#.

### Comments

*   As in Java, single line comments start with `//` and run to the end of the
    line.
*   Block comments are delimited by matching `/*`, `*/` pairs, and may span
    many lines.


### Data types

JavaScript is a dynamically-typed language, just like Python.
This means that in JavaScript

*   *Variables* aren't constrained to hold only 1 type of data
*   *Functions* aren't constrained to only take a certain number of parameters or that the parameters must have a specific type
*   Neither are *functions* required to return one particular type of data
*   *Values* do have a data type

JavaScript relies to a great extent on a technique called "coercion" to convert
values between types.  In contrast to Python, which tends to raise `TypeError`,
JavaScript is very willing to coerce values from one type to another.

*   Python does use coercion at times
    *   Python freely converts an `int` to a `float` without raising
        `TypeError`: `pi = 3 + 0.14159`
*   JavaScript takes this idea further, coercing numbers into strings, etc.
    *   In general, values are converted to another type when the new type can
        represent *more* values.
    *   *ex.* any number can be written as a string simply by surrounding it
        with quote marks.  But the converse is not true: there is no way to
        write "Hello World!" as a floating-point literal.
*   JavaScript provides two pairs of equality operators `==` and `!=` vs. `===` and `!==` ([see below](#comparison-operators))
    *   The **non-strict** operators *do* allow their operands to be coerced before comparing
    *   The **strict** operators *do not* allow their operands to be coerced before comparing

The latest edition of the language defines seven primitive data types:

*   Boolean
    *   Represented by values `true` and `false`
*   Null (like `NoneType` in Python)
    *   Represented by the value `null`
*   Undefined
    *   Represented by the value `undefined`
*   Number
    *   All values are stored internally in 64-bit double-precision floating-point format
*   BigInt
    *   Written by appending an `n` after an integer literal
    *   e.g.  `1337n`
*   String
    *   Can use both single `'` and double `"` quotes for literals
    *   Backticks construct *interpolated strings* which operate like Python's f-strings
        *   Expressions are inserted into interpolated strings with `${}`
*   Object 
    *   These are *not* quite like the objects in an Object-Oriented programming language
    *   They are more akin to Python's Dictionaries - mappings of key-value pairs
*   Symbol
    *   From the MDN:
        *   *"A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.  In some programming languages, Symbols are called 'atoms'."*
    *   We won't be using symbol values in this class

[JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)


### What about Arrays?

Just like in Python, arrays may contain values of different types (heterogeneous).  As in Python, array literals are constructed by writing a comma-separated list of values between square brackets `[ ]`.  They can also be created by calling the `Array()` function with a list of values.

```javascript
>> a1 = [1, 2, "three", 2**2, 5.0, false]
Array(6) [ 1, 2, "three", 4, 5, false ]

>> a2 = Array(7.0, 2**3, 3**2, 1e1, true)
Array(5) [ 7, 8, 9, 10, true ]
```

JavaScript's arrays are not a primitive data type, but are a kind of Object which provides the interface of an array.  This is explained later in this document under the heading of [Loops](#loops).


_**JS Protip**_ Use the `typeof` keyword to determine the type of a value.  `typeof` is a keyword and not a function; you don't need to write parentheses `()` to use it:


In the examples below `>>` represents the prompt of the browser console:

```javascript
>> typeof true
"boolean"

>> typeof 1
"number"

>> typeof 1.0
"number"

>> typeof "1.0"
"string"

>> typeof [1, 2, 3]
"object"

>> typeof { 'a': 1 }
"object"

>> typeof NaN
"number"
```

Like Python, JavaScript is a dynamically-typed language.  This means that variables aren't declared to contain only one type of data.  A variable containing a string may be re-assigned a number without error.

It is also possible to combine different types of values using the arithmetic operators described, often with unexpected effects (for example, applying `+` to a string and an integer).  There are [rules governing the results](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Data_type_conversion) of various combinations of types. Misunderstanding these rules is a common source of confusion for new JavaScript programmers.  Don't forget that you are never very far away from a high-quality JavaScript REPL.  When in doubt, try it out!


```javascript
>> 1 + 1    // + is an arithmetic operator when both operands are numeric
2

>> 1 + "1"  // the number 1 is first coerced into the string "1", then + performs string concatenation
"11"
```


### Numbers and arithmetic operators

* [MDN Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Numbers)
* [MDN Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

Ordinary numbers are always stored as 64-bit double-precision floating-point values in JavaScript.  Recent editions of JavaScript have a BigInt datatype, but there is no datatype for integers of modest scale.  When the programmer calls for an integer operation (such as remainder `%` or one of the [bitwise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators) operations) the data is first converted to a 32-bit signed integer, the operation is carried out, then the result is converted back to a 64-bit double.  This is true even though the console doesn't always show the fractional portion of the number.  The TL;DR is that you shouldn't implement cryptographic algorithms in this language as there will be extra overhead and a potential for loss of precision.

JavaScript's arithmetic operators include

-   Addition `+`
-   Subtraction `-`
-   Multiplication `*`
-   Division `/`
-   Remainder `%`
-   Increment `++`
-   Decrement `--`
-   Exponentiation `**`


JavaScript's built-in [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Math_object) object provides advanced mathematical functions such as `.abs()`, `.sqrt()`, `.random()`, the trigonometric functions, and more.  This object is always present to your code without needing to be imported.



### Comparison operators

* [MDN Comparison operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Comparison_operators)

| Operator | Name                     | Purpose                                                                            | Example
| :-------:|--------------------------|------------------------------------------------------------------------------------|--------------
| `===`    | Strict equality          | Tests whether the left and right values and types are identical to one another     | `5 === 2 + 4`
| `!==`    | Strict-non-equality      | Tests whether the left and right values and types are not identical to one another | `5 !== 2 + 3`
| `<`      | Less than                | Tests whether the left value is smaller than the right one.                        | `10 < 6`
| `>`      | Greater than             | Tests whether the left value is greater than the right one.                        | `10 > 20`
| `<=`     | Less than or equal to    | Tests whether the left value is smaller than or equal to the right one.            | `3 <= 2`
| `>=`     | Greater than or equal to | Tests whether the left value is greater than or equal to the right one.            | `5 >= 4`
| `==`     | Non-strict equality      | Tests whether the left and right values are identical to one another               | `'5' == 2 + 3`
| `!=`     | Non-strict-non-equality  | Tests whether the left and right values are not identical to one another           | `'5' != 3 + 3`

_**JS Protip**_ The familiar-looking non-strict comparisons should be used with
caution!  They cause the values under consideration to be converted to the same
data type *before* the comparison takes place.  This leads to surprising
results and hard-to-find bugs if you are not careful.  Best practices suggest
to *always* use the strict comparison operators.



## Variables, Scope and Conditionals


### Declaring named values

* [MDN: Variable Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Declarations)

#### `var`

A new variable is declared with the keyword `var`.  The scope of `var`
variables is the containing function, and *not* the containing curly braces.
This is different from the scoping rules of the programming languages you've
been using so far.

In other words, the scope a `var` variable declared within the block of a `for`
loop or `if` statement extends *outside* of the block.


#### `let`

Declare a new variable with block-scope semantics.  If you are coming from
Java, `let` variables in JavaScript will behave as you expect.

In other words, the scope a `let` variable declared within the block of a `for`
loop or `if` statement ends at the boundary of the block.


#### `const`

Declare a read-only constant value.  Scope-wise, `const` values are like `let`
variables, respecting curly brace delimited blocks.  It is an error to attempt
to change the value of a value declared as `const`.



### Conditional execution

* [MDN: Control Flow and Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

`if`/`else` blocks in JavaScript have the same familiar look as C/C++/Java.

There is no `elif` keyword as in Python; instead, use them together as `else if`:

```javascript
if (condition_1) {
    statement_1;
}
else if (condition_2) {
    statement_2;
}
else if (condition_n) {
    statement_n;
}
else {
    statement_last;
}
```

### JavaScript scope rules explained

*Always* remember that with respect to variables declared with `var`, `{ }`
isn't a scope delimiter in JavaScript.

`{ }` is a scope delimiter in the other languages which JavaScript is trying to
look like.  This may confuse you if you have used those other languages (you
have).  Said another way, curly braces _don't_ by themselves introduce a new
scope as they do in C/C#/C++/Java.  Historically, JavaScript only had 2 layers of
scope:

*   **Global Scope** - the default scope
*   **Function Scope** - exists within a function body

This is an example of what I mean:

```javascript
var count = 1;
if (count === 3) {
    console.log("count was three");
    var a = count;
} else if (count === 4){
    var b = count;
    console.log("count was four");
} else {
    var c = count;
    console.log("count was something else: " + c);
}
```

This example just put an identifier in the global scope. After evaluating this
code, which of `a`, `b`, or `c` will have been defined as a global variable?

In 2015 the `let` keyword was added to JavaScript to enable 'block statement'
scope which will behave more as you expect:

```javascript
var count = 1;
if (count === 3) {
    console.log("count was three");
    let a = count;
} else if (count === 4){
    let b = count;
    console.log("count was four");
} else {
    let c = count;
    console.log("count was something else: " + c);
}
```


Now none of `a`, `b`, or `c` will be available out in the global scope.
The difference is the use of the `let` keyword instead of `var`.

Because `{ }` isn't a scope delimiter in JavaScript as it is in the other
languages which JavaScript is trying to look like, you must remember to use
`let` instead of 'var' to create a variable which will behave as you'd expect
with regards to scope and curly-braces


### There is an important thing called 'the global object'

* [MDN: Window.window](https://developer.mozilla.org/en-US/docs/Web/API/Window/window)
* [MDN: Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

A lot of people will talk about *the global object* but none of them will tell
you what it is or where to find it.

Let me save you 20 minutes of Googling.  You're using a browser, so the *global
object* is named `window`.  If you were using Node.js, the global object is
named `global`.

`window` represents the browser tab that your webpage is viewed in.  All of the
"global" variables in the scripts running in the tab are properties of
`window`.

You can see this for yourself in the browser's Console:

```javascript
>> var a = "The letter A"

>> window.a
"The letter A"
```

You can learn a lot about JavaScript and your browser's capabilities by
spending a little time exploring `window` in the console.  Try seeing what code
completion suggestions it comes up with.

Likewise, you will learn many useful things by exploring the other *standard
built-in objects* that are available in the main namespace without needing to
be imported.  In fact, you will need use a few of these (such as
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date))
on the next assignments.



## Objects

[MDN: Introducing JavaScript Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)

An "Object" in JavaScript resembles Dictionaries from Python, both as regards
its syntax and semantics:

```javascript
var myObject = {
    uno: 1,
    dos: ['two', 'deux'],
    tres: { another_object: true },
    cuatro: function() { console.log("This is a function stored as a property within an object"); },
    'the number five': function() { console.log("Well, this is awkward"); },
    '61x': "basically six",
};
```

The "key" of the Python dictionary is called a "property" in JavaScript.
Unlike in Python, the property does not need to always be surrounded with
quotes.  When the name of a property is a valid identifier the quotes are
optional (`uno`, `dos` in the example above).  The properties `'the number
five'` and `'61x'` are *not* valid identifiers, and hence are quoted.

Each property name is unique within the Object; an attempt to create a second
property of the same name results in the first being overwritten.

Like a Python Dictionary, property-value pairs are joined with a colon `:`, and
pairs are delimited by commas `,`.



### Accessing properties of an object

There are two ways to refer to an object's property by name.

#### Object-Oriented syntax

In the examples below `>>` represents the prompt of the browser console:

```javascript
>> myObject.uno
1

>> myObject.cuatro()
This is a function stored as a property within an object

>> myObject."the number five"()
Uncaught SyntaxError: Unexpected string
```

Most programmers prefer this style because it looks familiar and is easier to
type.  It doesn't work when the name of a property is *not* a valid identifier.
A valid identifier does *not* consist of white space, leading digits, and
operators like `+,` `-`, `*`, `/`, etc.  Most punctuation is off-limits,
however underscores `_` *are* permitted.


#### Dictionary syntax

```javascript
>> myObject['uno']
1

>> myObject['cuatro']()
"This is a function stored as a property within an object"

>> myObject['the number five']()
"Well, this is awkward"
```

This approach requires more typing, but doesn't have the limitations of the
object-oriented syntax.



#### Object.keys( ... ).length

How many things are in my object?  Objects don't have a `.length` property
(unless you make it yourself).  The way to answer this question is to use the
`Object.keys()` method to create a list of the property names in your object,
then use the resulting lists' `.length` property:

```javascript
>> obj = { 'a' : 1, 'a' : 1, 'a' : 1, 'a' : 1, 'a' : 1, 'a' : 1, 'a' : 1 }

>> Object.keys(obj).length
1

>> obj = { 'a' : 1, 'b' : 1, 'c' : 1, 'd' : 1, 'e' : 1, 'f' : 1, 'g' : 1 }

>> Object.keys(obj).length
7
```



## Loops and iteration

* [MDN: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)


### [Ordinary 3-part `for` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

The familiar `while` and `do/while` loops from Java exist in JavaScript.

The 3-part `for` loops familiar to you from Java/C++ work similarly in
JavaScript, apart from that pesky scope thing we just discovered (it is best to
declare variables with `let` unless you must write for a *really* old browser):

```javascript
for (let i = 0; i < 5; i++){
    console.log("i is " + i);
}
```



### [`for x in y` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)

_mnemonic: the `for in` loop iterates over indices of an array; index begins with **in**_

This is a handy loop for dealing with an array by its indices and objects one property at a time:

```javascript
var person = { fname:"Paul", lname:"Ken", age:18, pet:"doggy", 'favorite food!!!:P lol':"pizza"};

for (var x in person){
    console.log(person[x]);
}
```

After running this `for` loop the variable `x` persists because it was declared with `var`.

When looping over an array with this style of `for` loop, the value `x` will be
the _index_ into the array, and _NOT_ the value at that index.

Try this code in your console to see whether it does what you expect it
to. Is there a way to write this loop such that the _values_ of the array
literal are displayed in the console?

```javascript
for (var x in [10, 11, 12, 13, 14, 15]) {
    console.log(`x is ${x}`);
}
```

Remember that
[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Array_object)
are basically "glorified" objects in JavaScript.



### [`for x of y` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)

_mnemonic: the `for of` loop iterates over objects in an array; object begins with **o**_

It may more natural to iterate over each element of an array without being
concerned with its index within the collection.  For these situations use the
`for ... of` loop:

```javascript
for (var x of [10, 11, 12, 13, 14, 15]) {
    console.log(`x is ${x}`);
}
```

Again, use the `let` keyword instead of `var` to prevent your loop index
variable from leaking into the surrounding scope.


*NOTE*: The `for of` loop does **not** work with Objects!  You will get a `TypeError` with a message explaining that your Object is not iterable.  This seems counter-intuitive because the `for in` loop has no trouble with Objects.


## Functions

[MDN: Functions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

One of JavaScript's most distinct features is that functions are first-class
values. When people speak of something being a "first-class" part of a
language, they refer to the fact that such values may be stored in variables,
passed to and returned from functions. In fact, functions in JavaScript are
actually objects and have properties.


### Declaring functions

There are a few ways to declare functions in JavaScript.  I'll show the most
simple and flexible way now.  You are welcome to use the other syntaxes as you
wish.

The keyword `function` creates a function object in JavaScript.  A `function`
in JavaScript is exactly the same as a `lambda` in other languages.  A
function object associates executable code with a list of named parameters.
The values of the named parameters are bound to the values given in a
parenthesised list when the code is executed.  Unlike "traditional" compiled
languages, `function` objects can be created at runtime, just like any other
type of value.

In the examples below `>>` represents the prompt of the browser console.

```javascript
// Create a function of one argument and assign it to the variable `f`
var f = function(arg) {
    return 1337 + arg;
};
```


### Function parameters

Calling a function with an incorrect number of arguments is not treated as an
error in JavaScript.  What would be a compile-time error in another language
is at worst a runtime error in JavaScript.  What actually happens depends upon
the code that you write in the function body.  You can assume that everything
will be fine, as `f()` does:


```javascript
>> f()
NaN

>> f(0)
1337

>> f(1337)
2674

>> f(1, 2, 3)
1338

>> f("hello, world!")
"1337hello, world!"
```

As you can see, `f()` isn't picky as regards the types or number of parameters
given.


#### What happens when too few arguments are passed to a function?

Arguments which are not not given a value at the time the function is called
have the special value `undefined`.

```javascript
> var twoArgs = function(a, b) {
    console.log(`The parameter a is ${a}`);
    console.log(`The parameter b is ${b}`);
  }

> twoArgs()
The parameter a is undefined
The parameter b is undefined

> twoArgs(1)
The parameter a is 1
The parameter b is undefined

> twoArgs(1, 2)
The parameter a is 1
The parameter b is 2

> twoArgs(1, 2, 3)
The parameter a is 1
The parameter b is 2
```

#### What happens to extra function arguments?

Extra parameters passed to a function are ignored but not forgotten.  It is fine if you don't use them.
All function parameters, whether given formal names or not, are always
accessible via the [`arguments` Array-like object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

```javascript
// countArgs() is declared to take no arguments,
// but can actually take any number of arguments
> var countArgs = function() {
  var len = arguments.length;
  if (len == 1) {
      var plural = '';
  }
  else {
      var plural = 's';
  }
  return `This function recieved ${len} argument${plural}`;
}
```

You can manually perform your own type-checking by inspecting the contents of
`arguments`.


### Functions are values in JavaScript

I say that the above method of declaring functions is the most flexible as it enables you to associate a function with a name by assigning it to a variable immediately. In contexts where you pass one function into another function (as a parameter), you can do so by using the variable containing the function. Or, you can directly pass the function without first assigning it a name. When used in this way we say that the function is "anonymous". This is a very common and popular pattern in JavaScript, so spend some time with it as it will come up often.

```javascript
var add = function(a, b) {
    return a + b;
}

var sub = function(a, b) {
    return a - b;
}

var doMath = function(f, a, b) {
    return f(a, b);
}

> doMath(add, 2, 3)
5

> doMath(sub, 2, 3)
-1
```


### Anonymous functions

In the above example I gave the functions names by assigning them to the
variables `add`, `sub` and `doMath` when I defined them.  But a function does
not need a name to be used.

In the next example I define a function that performs exponentiation on its
two arguments, and immediately pass it as `doMath()`'s first parameter:

```javascript
> doMath(function(a, b) { return a ** b; }, 2, 3)
8
```

The function is defined by the `function` keyword, right in the middle of the
function call to `doMath()`.  It is an "anonymous" function, a function
without a name.  The function itself is then bound to the first parameter of
`doMath()`.  So, within the body of `doMath()` this function is not anonymous
because it goes by the name of `f()`.

You can take this a step further by calling a function in the same expression
that you declare it.  If you supply a parenthesized parameter list right after
declaring it, JavaScript *immediately* invokes the function with that list of
parameters, and returns the result of calling the function instead of
returning the function itself.

For reasons of operator precedence you must surround the function declaration
expression with parentheses:


```javascript
// Evaluate 2**8
> (function(a, b) {
    var r = 1;
    for (; b > 0; b--) {
      r *= a;
    }
    return r;
  })(2, 8)
16
```

This may seem like a useless, if not curious, feature of JavaScript, but it is
actually very important and useful.

Question: Is the variable `r` declared within the anonymous function above a
global or a function-local variable?


### Scope of variables within functions

As explained earlier in this document, pre-2015 the JavaScript language had
only two scopes for variables: *global* and *function-local*.  Developers
still needed variables that were safely constrained within scoped sandboxes,
and had to resort to clever tricks to achieve this.

Today, developers may declare a variable with the `let` keyword instead of
`var` to take advantage of nested scopes, however, you must be prepared to
encounter a common JavaScript idiom used pre-2015.


#### Lexical Closures: that one weird trick for making new scopes

This trick is known as a **lexical closure**, which is another another idea
borrowed from functional programming languages such as Scheme.

Here is an example where a lexical closure is used to implement the behavior of
a **static** variable, another feature which the JavaScript language lacks
explicit support for, but arguably doesn't need to support because of closures.

A variable that is out-of-scope at the REPL can still be accessed by a function
which was defined within that scope.  Because functions are first-class values,
we can create a function within another function and assign it to a global
variable.  It has access to variables defined in the same function scope that
it was created in, and yet be called by the name of the global variable it is
assigned to.

First, the counter-example that proves the need for this convoluted-sounding
concept.  The behavior of the function `shutUpWesley()` is dependent upon the
value of a global variable named `shutUps`.


```javascript
// This is an icky global variable, just begging for trouble
var shutUps = 0;

var shutUpWesley = function () {
    console.log("Sir, I know this may finish me as an acting ensign, but...");
    shutUps++;

    // risky use of a global variable is risky
    console.log("SHUT UP, WESLEY" + "!".repeat(shutUps));
};
```

We all agree that globals are bad, mmm'kay.  What if some other function
changes `shutUps` to an unexpected value?   What if `shutUps` is set to a
negative number?

To protect `shutUps` from external meddling, we can hide it within a function's
scope.  In this formulation, only `shutUpWesley()` can modify this important
value because the scope of `shutUps` is limited to the surrounding anonymous
function.


```javascript
(function () {
    var shutUps = 0;  // local variable in the anonymous function declared on the line above

    shutUpWesley = function () { // shutUpWesley declared without `var` is actually global!
        console.log("Sir, I know this may finish me as an acting ensign, but...");
        shutUps++;
        console.log("SHUT UP, WESLEY" + "!".repeat(shutUps));
    };
})();
```

This may make you feel weird; why does `shutUps` continue to exist after the
function it was declared in has returned?  Once the anonymous function has run
its course there is no way to call it again.  Why should its local variables
hang around?

This idiom is known as [Immediately invoked function expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression).

There are two functions going on here:

* An anonymous function on the outside, which we immediately invoke
* An inner function defined and assigned to the global variable `shutUpWesley`

I create an *outer* function with no name and immediately call it.  After it is
finished I have no need to call it again, so it needs no name.  Its only
purpose is to lend its private *function scope* to my variable `shutUps`.  That
variable persists because the *inner* function named `shutUpWesley` that uses
it can still be called.  It is the Garbage Collector's job to figure out which
variables can still be accessed so it can decide what data is garbage and what
is not.


## Automatic Semicolon Insertion

Like Java, C++ and other syntactically similar languages, semicolons are
required after each statement.

Unlike those other languages, the JavaScript compiler/interpreter doesn't
require _you_ to write them.  When you leave them off the interpreter will
_guess_ where they ought to go and _silently_ insert them for you.  This is a
wonderful labor-saving enhancement for lazy programmers that almost always
works.  But when it doesn't work it will drive you mad.

To maintain your sanity (and because you're not a lazy slob) just put a `;` at
the end of each statement.

* Write the semicolons yourself even though the language doesn't force you.
* Write the semicolons yourself even though nobody on Stack Overflow does it.
* Write your own semicolons even though none of the great and successful
  JavaScript hackers you know and respect don't write them.

Leaving it off will result in frustrating, hard-to-track-down bugs that will
stump even experienced JavaScript programmers.  Every serious JavaScript
programmer I know has spent *days* tracking down an elusive bug that occurred
because the interpreter guessed **wrong**.

You will encounter situations in JavaScript where you **must** write a `;` at
the end of an expression even though it really doesn't look like it is needed.
You'll only find out that it was needed after days of tedious debugging.  This
is what we in the biz call "doing it the hard way".


#### See if you can spot the missing semicolon

It is easy to spot something that is out of place or doesn't belong.  It is
hard to find a thing that is missing.

There is a bug in this code.  You even know that it is a missing semicolon.

But which missing semicolon is it?

```javascript
var shutUpWesley = function () {
    console.log("Sir, I know this may finish me as an acting ensign, but...")
}

(function() {
    shutUpWesley()
})()
```


## Debugging JavaScript

Your browser includes a very capable [debugger](https://developer.mozilla.org/en-US/docs/Tools/Debugger) with all of the features you expect:

*   Set breakpoints
*   Step through code
*   Examine the stack
*   Inspect variables
*   Break on exceptions


## The `debugger` statement

In addition to setting breakpoints in the debugger, you can also hard-code a
breakpoint into your program by adding the `debugger` statement directly into
your source code.

The `debugger` statement is ordinarily ignored by the JavaScript interpreter.
While the Developer Tools console is open, the `debugger` statement pauses
execution just like a regular breakpoint.



## Miscellaneous tips

### Use the HTML `<script>` element properly

You can use the script tag to embed JavaScript source code directly into an HTML document.

```html
<script type="text/javascript">
    // this is JavaScript source code
    window.globals = "are bad";
    var another_global = 1 + "1";
    console.log("Global variables " + globals);
    console.log('1 + "1" = ' + another_global);
</script>
```

Or you may also use the script element's `src=""` attribute to link to an
external JavaScript file:

```html
<script src="fib.js"></script>
```

Note that when you use the `script` tag to link to an external script you still
need to write the closing tag.

When you use **both** the `src` attribute *and* embed code within the
`<script>` tag, the browser will only load the code specified by the `src`
attribute.

Remember this when you wonder why your program isn't being run.



### The `type=""` attribute of `<script>` is actually optional in HTML5.

When left off, the default value of this attribute is `"text/javascript"`.



### JavaScript's `alert()` function pops up a window containing a message

Developers once had to (ab)use this faculty to display debug messages because
there wasn't a console or a log file to send them to.  Because this is super
annoying, your browser may stop showing messages if it thinks you are spamming
the user.

If you have ever been the victim of this spam, now you know how they did it to
you.  Use this knowledge only for good.



### Why doesn't JavaScript have `print()`?

Because JavaScript didn't start out with a debugging console it didn't need a
`print()` function.  Nowadays browsers do have a console, but JavaScript still
lacks the `print()` function.  Instead, use `console.log()` to print messages
to the console.

`console.log()` is considered better netiquette than `alert()`.



### JavaScript has a feature equivalent to Python's f-strings.

Over here they are called *template literals* or *template strings*

[MDN: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

JavaScript template literals use backticks ``` instead of double or single quote marks.

Within the backtick-quoted string the template expression is surrounded by
curly brackets preceeded with a dollar sign:

```javascript
var blank = "template string";
console.log(`This is a ${blank}`)
```
