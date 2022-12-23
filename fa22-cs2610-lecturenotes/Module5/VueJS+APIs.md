# Using Vue with APIs


## Table of Contents

*   [Lifecycle Hooks](#lifecycle-hooks)
*   [Chaining Promises](#chaining-promises)
*   [Case Study: Django Nerdgame Character Generator](#case-study-django-nerdgame-character-generator)


## Lifecycle Hooks

Our simple TODO list app went from hard-coding the list directly in HTML to hard-coding it as a JavaScript object in the `data` section of the app.

A more useful app might `fetch()` this from a RESTful API in the background while the Vue app loads and sets up the DOM.  Once the request is complete the TODO list can be stored into a property of the `data` configuration object.  This will then be automatically displayed by Vue without you needing to write extra code in that callback.

There are just a few issues to address before putting this plan into action:

*   `fetch()` needs to be called from somewhere *within* the Vue configuration object
*   Running `fetch()` outside of the Vue object creates timing and data-flow challenges
    *   Don't call `fetch()` too early; if it finishes before Vue is set up, the data will have nowhere to go
    *   Obviously, you don't want to call `fetch()` too late, either.  Users expect your app to be quick!
*   Any code that handles the result of `fetch()` needs to simultaneously have access to
    *   The object representing the Vue app (i.e. it needs to have a `this` that refers to the Vue app itself)
    *   Any information needed as input to `fetch()` (i.e. the URL)

A **lifecycle hook** is a function that will be automatically called by Vue at a particular point in the lifetime of your app.  Your code is said to "hook into" an event.  They are essentially the same thing as event handlers/listeners in a GUI application.

*   Hook methods may be defined in the configuration object given to `Vue.createApp()`
    *   The `this` variable within the hook method is bound to the Vue instance; this is what makes it feel like you're coding in an object-oriented system.
*   Hooks can be optionally defined:
    *   If they are present, they'll be run at the right time
    *   Otherwise, they are skipped
    *   If you mis-name a hook, Vue simply ignores it.
    *   The names of hooks that Vue recognizes include:
        *   `created`
        *   `mounted`
        *   `updated`
        *   `activated`
    *   The full list is found [here](https://vuejs.org/api/options-lifecycle.html)
    *   The [Vue.js App Lifecycle Diagram](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram) shows you when each hook may be run.


    

### Important note from the docs:

> All lifecycle hooks automatically have their this context bound to the instance, so that you can access data, computed properties, and methods. This means you should not use an arrow function to define a lifecycle method (e.g. `created: () => this.fetchTodos())`. The reason is arrow functions bind the *parent* context, so this will not be the component instance as you expect and `this.fetchTodos` will be undefined.

I can move my `todos` array into the cloud by posting it to https://jsonbin.io/, which is a public JSON bin that is accessed via API.  You will need to log in before you are allowed to create your own JSON snippets on this service.  You can log in without creating an account if you have a Google, Facebook or GitHub account.

<details>
<summary>Which lifecycle hook is the best place to initialize data for our app?</summary>

The todo.html page fetches the TODO list during the `created()` hook.  This is a good place for you to do your API calls in Assignment 5.

</details>



## Chaining Promises

Using the browser's `fetch()` method works well enough when only one resource is needed at a time.  You can even make several `fetch()` calls to multiple different resources at the same time, and your page will automatically fill itself in as each request comes back.

However, the requirements of Assignment #5 throw a wrench into this scheme.  The assignment is designed in such a way that later calls to `fetch()` *depend* upon the results of an earlier call.

But calls to `fetch()` happen asynchronously in the background.  This may defy your intuition about the way code behaves.  Read this code and think about how it executes:


```javascript
console.log("fetching post #1")
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(r => r.json())
    .then(json => console.log("resolved fetch(post #1)"));

// This line is executed before the previous .then() happens
console.log("fetching post #2")
fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then(r => r.json())
    .then(json => console.log("resolved fetch(post #2)"));

// This line is executed before the previous .then() happens
console.log("fetching post #3")
fetch("https://jsonplaceholder.typicode.com/posts/3")
    .then(r => r.json())
    .then(json => console.log("resolved fetch(post #3)"));
```

### Practice

*	What do you predict the outcome of this code to look like in the browser's console?

<details>

<summary>Was this your guess?</summary>

    fetching post #1
    resolved fetch(post #1)
    fetching post #2
    resolved fetch(post #2)
    fetching post #3
    resolved fetch(post #3)

Sorry, but this is wrong.

</details>

<details>
<summary>This is the correct answer:</summary>

    fetching post #1
    fetching post #2
    fetching post #3
    resolved fetch(post #1)
    resolved fetch(post #2)
    resolved fetch(post #3)

</details>


Each call to `fetch()` appears to return instantly, and the program immediately moves on to the next line of code.

The way to understand `fetch().then().then()` is to realize that you are asking the browser to establish a long-running process in the background *and* adding Event Listeners that aren't meant to be called now but *later*, after the HTTP response has come in.  While the `fetch()` process takes a long time to conclude, it can be placed onto the back burner very quickly.  This is why `fetch()` appears to return *before* the remote resource URL has been retrieved.

To return to our original question, how can we force `fetch()`es to happen in order, one after another?  Suppose the URL I need to give to my second call to `fetch()` depends upon what the first call returns.  How can I arrange for the second `fetch()` to happen after the first finishes?


## Case Study: Django Nerdgame Character Generator

Let's explore this problem in the context of a Vue app which uses a custom Django REST API.

This app creates a random character for a fantasy table top game using a sequence of 4 API calls.  The character's name, appearance and stats are chosen randomly.  The new character's name and appearance depend upon the randomly-chosen gender of the character.  If it weren't for this requirement all four API calls would be independent of each other and could be made simultaneously.

To make it easier to tell what's going on, I've made the API views in Django sleep for two seconds before making their responses to give you time to watch how this app puts itself together.



### Practice

*	See the example Django app [charactersheet](../cs2610proj/charactersheet) in the Django project included with the Lecture Notes.
*	Instructions for installing this Django app into your own Django project are found in its [README file](../cs2610proj/charactersheet/README.md).


### A naive solution: calling `fetch()` within callbacks
     
When one realizes that the callback within `.then()` doesn't happen until the HTTP response has been received by the browser, an easy solution presents itself.  Move the subsequent calls to `fetch()` inside the callback.

```javascript
console.log("fetching post #1")
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(r => r.json())
    .then(json => {
        console.log("resolved fetch(post #1)");
        console.log("fetching post #2");
        fetch("https://jsonplaceholder.typicode.com/posts/2")
            .then(r => r.json())
            .then(json => {
                console.log("resolved fetch(post #2)");
                console.log("fetching post #3");
                fetch("https://jsonplaceholder.typicode.com/posts/3")
                    .then(r => r.json())
                    .then(json => console.log("resolved fetch(post #3)"));
            })
    })
```

This does work, but now we're right back where we started with Hadouken code: deeply nested control structures that are confusing to read and which cannot take advantage of other features of Promises.  Consider for a moment what would happen if the `fetch()` to post #2 failed.  How could you handle an error smack in the middle of a bunch of nested functions?  Bailing out or moving forward: both are going to be very difficult with code that has this structure.

### Practice

*   Before reading the next section, take a moment to understand what is wrong with this implementation
    *   What could you do to improve upon this implementation?


### The real solution: Promise Chaining

The solution to this problem is called "Promise Chaining".  The trick is that we can call `fetch()` from within a `.then()` callback.  Recall that `fetch()` returns a Promise object.  When `.then()` returns a Promise, another `.then()` can be tacked on after that.

By returning a call to `fetch()` from within a `.then()` callback, we can write a deeply nested structure of dependent requests so that it reads linearly.

```javascript
console.log("fetching post #1")
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(r => r.json())
    .then(json => {
        console.log("resolved fetch(post #1)");
        console.log("fetching post #2");
        return fetch("https://jsonplaceholder.typicode.com/posts/2");
    })
    .then(r => r.json())
    .then(json => {
        console.log("resolved fetch(post #2)");
        console.log("fetching post #3");
        return fetch("https://jsonplaceholder.typicode.com/posts/3");
    })
    .then(r => r.json())
    .then(json => console.log("resolved fetch(post #3)"));
```
