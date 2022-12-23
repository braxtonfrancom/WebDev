CS2610 - Friday, November 04 - Lecture 28 - Module 4

# Topics:
* [Action Items](#action-items)
* [Promises & `fetch()`](#promises-fetch)
* [Getting data from NASDAQ's API using `fetch()`](#getting-data-from-nasdaqs-api-using-fetch)
* [I Promise that I can't stand rejection!](#i-promise-that-i-cant-stand-rejection)


------------------------------------------------------------
# Action Items

*   Call on 2 designated questioners



# Promises & `fetch()`

In our last lecture we took a brief look at the old, object-oriented way to get browsers to make HTTP requests in the background.  When a program does work in the background, we say that it is "asynchronous".  The greatest challenge is to write a program in such a way that it doesn't "hang" while the work is being done (if the program hangs, then the work is happening in the foreground).

XHR provides an object-oriented interface to setting up an HTTP request which can happen in the background. Instead of causing the execution of the main JavaScript program to await the completion of an HTTP request which may be very slow or could fail entirely, an event-driven approach is followed. User-defined callback functions are added to the XHR object and are automatically called by the browser upon receipt of the HTTP response.

The unforeseen consequence of this design results in a situation called Callback Hell. Callback hell is characterized by deeply nested control structures and anonymous functions. This unfortunate syntactic malady is known as "Hadouken Code"


## [The new way: fetch](../Web_APIs.md#the-new-way-fetch)

In response, a new model of synchronizing a series of asynchronous function calls has been introduced around the concept of Promises.  Leaning on the syntactic simplicity of arrow functions, code written in this style improves the syntactical appearance of deeply nested (read: dependent) asynchronous requests.

Promises are a *very* confusing concept, so don't feel bad if it doesn't click for you immediately.  Fortunately, they are pretty easy to use even if you don't quite have a grasp on them.

Re-read this section a few times, play with code demonstrations, and it'll come to you.



# Getting data from NASDAQ's API using `fetch()`

Let's use `fetch()` in the browser to make the same requests of NASDAQ that we just made on the command-line with `curl`.

I've written a small web page that does this: [`fetch()` data from NASDAQ's API](./42-nasdaq-fetch/).



# [I Promise that I can't stand rejection!](../Web_APIs.md#i-promise-that-i-cant-stand-rejection)

You can write code to handle circumstances when a Promise is *rejected* by adding yet another callback to the Promise chain with the `.catch()` method.

You can test this out in the context of Promises returned by `fetch()` by arranging for a request to be blocked by your browser.

## Block requests in Firefox

*   Open the browser's developer tools
*   Navigate to the "Network" tab
*   Find the crossed out `O` icon (Ø) on the top row to the right of the "Filter URLs" text input and click it
    *   Check "Enable Request Blocking"
    *   Add a URL pattern to be blocked.
    *   This pattern can match any part of a URL - the domain name, the protocol, a path, etc.

## Block requests in Chrome-based browsers

*   Open the browser's developer tools
*   Find the triple-dot menu on the right of the dev tool's tab bar
    *   Select "More Tools" -> "Request Blocking"
    *   Check "Enable Request Blocking"
    *   Add a URL pattern to be blocked.
    *   This pattern can match any part of a URL - the domain name, the protocol, a path, etc.

Let's make this happen in our [example app](./42-nasdaq-fetch/) by blocking requests containing the string `"nasdaq"`.

You can even register a `.finally()` callback to be run after all Promises are resolved and/or rejected.



