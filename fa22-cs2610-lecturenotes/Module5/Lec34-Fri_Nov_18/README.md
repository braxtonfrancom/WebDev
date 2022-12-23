CS2610 - Friday, November 18 - Lecture 34 - Module 5

# Topics:
* [Announcements](#announcements)
* [Vue.js Lifecycle Hooks](#vuejs-lifecycle-hooks)
* [Connect the Vue.js TODO list to the cloud](#connect-the-vuejs-todo-list-to-the-cloud)
* [Reactivity: How Vue.js tracks changes](#reactivity-how-vuejs-tracks-changes)
* [Chaining Promises](#chaining-promises)
* [Case Study: Django Nerdgame Character Generator](#case-study-django-nerdgame-character-generator)
* [Methods](#methods)
* [Computed Properties](#computed-properties)
* [An aside: Why doing things the Vue.js way saves time in the long-run](#an-aside-why-doing-things-the-vuejs-way-saves-time-in-the-long-run)
* [Convert the Grades.js App from Vanilla JS to Vue.js](#convert-the-gradesjs-app-from-vanilla-js-to-vuejs)


------------------------------------------------------------
# Announcements

## IDEA Surveys - Rare Extra Credit Opportunity

You should have received a notification about the IDEA Student Rating of Instruction (SRI) survey.

Your feedback is very important to me, and I really want you to take this survey.  Each semester I take many useful suggestions and incorporate them into my future courses.  If I'm doing anything right, it is due to suggestions given by previous students.

The more input I get from you the better I am able to improve as an instructor.  My goal is to reach 80% participation.  To that end I am offering 25 points of sweet, sweet *extra credit* for your response.  This is the *only* extra credit I give.  Your responses remain anonymous, and I will not even see them until after finals week.

*   The extra points will be automatically applied to your grade on Canvas by the University **at the end of Finals Week**
    *   There is nothing that I can do to speed this up, or verify that your submission was accepted - **it's anonymous!**
    *   Your points will come through; trust the system
*   The survey opens on Monday, November 21st at 8:00 AM.
*   The survey closes Friday, December 9th at 11:59 PM.


## Coaching Center hours next week

The Coaching Center will be open Monday and Tuesday next week, but will be online only. You can continue to join the queue just as normal at https://coach.cs.usu.edu.


## Erik's Office Hours next week

Due to the Thanksgiving holiday falling on a Thursday this year, my ordinary office hours will be canceled next week.

I will be available for an appointment over Zoom on an as-needed basis.  If you have questions about the assignment or anything else, please contact me to set up a time.



# Action Items

*   Call on 2 designated questioners



# [Vue.js Lifecycle Hooks](../VueJS+APIs.md#lifecycle-hooks)

A **lifecycle hook** is a function that will be automatically called by Vue at a particular point in the lifetime of your app.  Your code is said to "hook into" an event.  They are essentially the same thing as event handlers/listeners in a GUI application.



# Connect the Vue.js TODO list to the cloud

Let's take the Vue.js TODO list app to the next level by populating the list of tasks from the cloud.

*   We'll store the TODO list on service [JSONBin.io](https://jsonbin.io/)
*   The we'll `fetch()` it from within the appropriate Vue.js Lifecycle hook  

Follow along with [my demo app](./todo.html)



# [Reactivity: How Vue.js tracks changes](../VueJS.md#reactivity-how-vuejs-tracks-changes)

If you are experiencing trouble getting Vue to respond to changes in your `data()` block, this section is for you!



# [Chaining Promises](../VueJS+APIs.md#chaining-promises)

Using the browser's `fetch()` method works well enough when only one resource is needed at a time.

Calls to `fetch()` happen asynchronously in the background, which may defy your intuition about how code behaves.  This comes to a head when you try to `fetch()` a resource whose URL depends upon the result of a previous `fetch()`.



# [Case Study: Django Nerdgame Character Generator](../VueJS+APIs.md#case-study-django-nerdgame-character-generator)

Let's explore this problem in the context of a Vue app which uses a custom Django REST API.

This app creates a random character for a fantasy table top game using a sequence of 4 API calls.  The API calls are designed in such a way that some of them depend upon the results of earlier calls to operate correctly.



# [Methods](../VueJS.md#methods)

The Vue configuration object recognizes a property called `methods` which contains functions declared within the configuration object.  

No matter how the method is invoked, `this` will always refer to the data inside the Vue app itself.



# [Computed Properties](../VueJS.md#computed-properties)

While you can put rather complex JavaScript expressions within Vue's template
brackets `{{`, `}}`, it is not considered good practice to do so.

*   Computed properties offer a better place to put your complex (and reusable) code.
*   A computed property is used to count the number of *completed* and *remaining* tasks.
    *   When the count of remaining tasks reaches `0`, we replace the TODO list with a congratulatory message.


## Vue.js: Methods vs. Computed Properties

I've seen many students misuse methods and computed properties in this assignment.

The confusion arises because both entities are created out of JavaScript functions.  This table illustrates the similarities and differences between them


| Feature          | Methods            | Computed Properties |
|------------------|:------------------:|:-------------------:|
| Is a function    | :heavy_check_mark: | :heavy_check_mark:  |
| Return a value   | :heavy_check_mark: | :heavy_check_mark:  |
| Takes parameters | :heavy_check_mark: |                     |
| Result is cached |                    | :heavy_check_mark:  |


* [Vue Guide: Computed Caching vs Methods](https://vuejs.org/guide/essentials/computed.html#computed-caching-vs-methods)


## Vue Cached Value Demo

This code demo illustrates the most important difference between Methods and Computed Properties in Vue: the function underlying a Computed Property is only called **as needed**.

[Vue: The "annoying" demo](./47-vue-methods-vs-computed-props)


*   **Challenge:** This demo can be improved by using [Form Input Bindings](https://vuejs.org/guide/essentials/forms.html).  Can you figure out how use this feature of Vue?


## [Computed Property Best Practices](https://vuejs.org/guide/essentials/computed.html#best-practices)

0.  Getters should be **side-effect free**
    *   A computed property should be used as a **read-only** quantity
        *   *There is a way to make computed properties work as getters/setters*
        *   It is not necessary for this assignment
        *   You can learn how to do this on your own
    *   It is unexpected for a read-only operation to affect other parts of the system
        *   A computed property should be **safe** and **idempotent**
    *   Avoid...
        *   changing the DOM
        *   modifying the app's `data`
        *   calling `fetch()`
1.  Avoid **mutating** a computed value
    *   Once you receive the computed value, **don't** change it
    *   The computed value is **derived** from other values
    *   If the computed value needs to change, update the pieces of data it depends on instead
        *   Failing to do this is how **cache invalidation** happens
        *   Your app will become inconsistent, and you'll have a heck of a time finding out why

> There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors. 


## Method Best Practices

0.  Create a method when a side-effect is needed
    *   The app's data must be mutated
    *   An external resource must be accessed (e.g. via `fetch()`)
    *   The desired effect is not **safe** nor **idempotent**
1.  Use a method when a parameter is necessary to complete the operation
    *   The only input a *computed property* can get is in the state of the app itself
    *   In addition to the app's state, a *method* can take parameters
        *   Thus, methods are used in conjunction with event handlers



# [An aside: Why doing things the Vue.js way saves time in the long-run](../VueJS.md#an-aside-why-doing-things-the-vuejs-way-saves-time-in-the-long-run)

Think about the code you wrote for Assignment 4: Worth your Weight in Gold, especially as regards event handling and updating the DOM.

How many lines of code did you write to add one `<div>` in response to a single button click?

You are not the only web developer facing this challenge.  This problem has been solved independently countless times.  Vue.js is one solution that has been open-sourced and made available to web developers generally.  



# Convert the Grades.js App from Vanilla JS to Vue.js

Knowing what we now do about Vue, let's compare and contrast the implementation of the same app in Vanilla vs. Vue:

*   [grades.html](./grades.html)
*   [grades.js](./grades.js)


## Discussion

*   Do you think it was easier to write this app in Vanilla then convert it to Vue, or would it have been better to start with Vue in the first place?
    *   ...
    *   ...
*   Does knowing how things work in Vanilla make you more or less confident with Vue?
    *   ...
    *   ...
*   How do you think you would regard Vue.js if you had no knowledge of the browser’s built-in DOM manipulation API (a.k.a. Vanilla JS)?
    *   ...
    *   ...



