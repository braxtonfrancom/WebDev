CS2610 - Friday, October 28 - Lecture 25 - Module 4

# Topics:
* [Announcements](#announcements)
* [Any final questions about Assignment 3](#any-final-questions-about-assignment-3)
* [Mud Cards](#mud-cards)
* [Function Invocation Patterns in JavaScript](#function-invocation-patterns-in-javascript)
* [Arrow Functions `=>`](#arrow-functions-)


------------------------------------------------------------
# Announcements

## Campus Cup Challenge

Online voter registration ends TODAY at 5pm!

The Campus Cup is is a competition between all the schools in the state to see who can register to vote.

As of the latest update, USU trailing a little bit behind BYU.

Use [this link](https://secure.utah.gov/voterreg/index.html?fromLocation=USU) to register to vote (or update your existing registration) to help our school take the lead Register today to make your voice heard in our democracy!

![02-Campus_Cup_Street_Sign.png](02-Campus_Cup_Street_Sign.png)


## Lucid 10th annual Programming Competition TOMORROW!!!

*   **What**  Compete virtually against students from universities across the U.S. for a chance to win graet prizes.  It's always a good time - you won't want to miss it!
*   **When**  9am-2pm Saturday, October 29th
*   **Where** https://lucid.co/programming-competition

![02-lucid.png](./02-lucid.png)


# Action Items

*   Call on 2 designated questioners



# Any final questions about Assignment 3?

*   What problems are you facing with the current assignment?
    *   ...
    *   ...
*   When you get stuck, don't forget to read the **Hints** section of the assignment's Canvas page
*   I also gave you some JavaScript tips [here](../../Module3/JavaScript.md#miscellaneous-tips)
*   BTW, [Vanilla JS](https://vanilla-js.com/) is a meme


## `this` vs. `event` passed to a callback function in HTML

[What is the difference between these two ways to configure a callback function in an HTML attribute?](../../Module3/EventDrivenJavaScript.md#configuring-callback-functions-in-html)

```html
onclick="divClickEvent(event)
```

and 


```html
onclick="divClickEvent(this)
```

Code examples:

*   [event.html](./event.html)
*   [this.html](./this.html)



# Mud Cards

As we discuss some new aspects of how functions work in JavaScript, you should have questions!

Jot your thoughts & impressions down on your mud cards for me to review after class.



# [Function Invocation Patterns in JavaScript](../JavaScript_Arrow_Functions.md#function-invocation-patterns-in-javascript)

In most programming languages, a function's behavior depends upon how it is *declared*, and not on how it is invoked.

JavaScript is unlike those other languages.  A single function in JavaScript can behave differently depending upon *how* it is invoked.



# [Arrow Functions `=>`](../JavaScript_Arrow_Functions.md#arrow-functions-)

In 2015 a new syntax for declaring functions was introduced to JavaScript in a draft of the language called "ES6".  

This new syntax streamlines the creation and use of anonymous functions that are declared at the same site they are used.

Recall the `doMath(f, a, b)` function that we wrote in an earlier lecture:


```javascript
var doMath = function(f, a, b) {
    return f(a, b);
}
```


In addition to the named functions `add(a, b)` and `sub(a, b)`, I was able to give it an *anonymous function*.  In all cases, it works equally well:

```javascript
doMath(add, 2, 3);  // => 5
doMath(sub, 2, 3);  // => -1
doMath(function(a, b) { return a ** b; }, 2, 3)  // => 8
```

Anonymous functions are very frequently used in JavaScript.  The downside to using them is that there is a lot of extra syntax that needs to be written out.

An equivalent use of `doMath()` looks like this with an Arrow Function:

```javascript
doMath((a, b) => a ** b, 2, 3)
```

Notice how much shorter this becomes!

*   You get to replace the `function` keyword with `=>`
*   You can leave off the curly braces when the function consists of only one expression
*   Likewise, single-expression function bodies do not require the `return` keyword


A function with multiple statements/expressions is written with a curly brace-delimited code block.  Multi-statement arrow functions require the `return` keyword.

```javascript
doMath((a, b) => {
        console.log(`Raising ${a} to the power of ${b}`);
        return a ** b;
    }, 2, 3)
```



