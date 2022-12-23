CS2610 - Monday, November 07 - Lecture 29 - Module 4

# Topics:
* [Announcements](#announcements)
* [REST: Representational state transfer](#rest-representational-state-transfer)
* [Write a Django App which provides a RESTful API](#write-a-django-app-which-provides-a-restful-api)


------------------------------------------------------------
# Announcements

## Free Software and Linux Club

*   **What**  Audio on Linux
*   **When**  6:30pm Wednesday, November 9th
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)

Audio on Linux can be confusing, but if you know what you're doing, you can do anything with it you can elsewhere: music production, film scoring, sound design, and more! 
This week, at the usual time and place, come learn about audio servers like PulseAudio, PipeWire, and JACK, as well as some really cool audio software like Ardour, LMMS, MuseScore, and Vital!


# Action Items

*   Call on 2 designated questioners



# REST: Representational state transfer

[REST on Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)

REST is an architectural style that defines a set of constraints to be used for creating web services.  Web services confirming to the REST style are said to be "RESTful".  RESTful web services are characterized by supporting *stateless* operations.

Being *stateless* makes sense when you remember from our early discussions about the Hyper Text Transfer Protocol that communications always come in pairs:

0.  A **Client** makes a request
1.  The **Server** issues a response

After the server says its piece, the conversation is over.  Period.  Any followup communication from the client is a completely new conversation.  We can work around this limitation by using Cookies, which the server can use to "remember" details from a previous communication.

REST takes this a step further (and goes back to the pure, original intent of HTTP) by designing the system to *not* rely on information from previous messages.  Each interaction is meant to stand on its own without reference to previous events.


## What makes a service *RESTful*?

0.  **Client-server architecture**
    *   Enforce a separation of concerns.
    *   Each participant has a well-defined role.
    *   Peer-to-peer is *not* RESTful.
1.  **Statelessness**
    *   The server doesn't need to store details about each client in order to fulfill requests.
    *   All information needed to fulfill a request is provided by the client in each request.
2.  **Cacheability**
    *   For performance reasons, intermediate systems may exist between the client and the server.
    *   Requests must either be able to be cached, or mark themselves as *uncacheable* so that clients always get up-to-date data and servers can leverage caching systems where appropriate.
3.  **Layered system**
    *   The client doesn't need to know whether it's dealing directly with the server or with an intermediary (see previous point).
4.  **Code on demand (optional)**
    *   Servers can temporarily customize the client by giving it different code to execute (i.e. JavaScript, Flash or Java apps, etc.)
5.  **Uniform interface**
    *   RESTful services provide a consistent interface to enable different parts of the app to be worked on by different teams at different times while remaining unified in function and purpose.


## Why "Statelessness" matters

"State" in this context refers to any information about requests which exists between requests.  This data may be stored in a database (e.g. account information), maintained as global variables in the server (ick!), or stored on the client side (e.g. Cookies).

Being stateless just follows from being delivered over HTTP, which is itself a stateless protocol.  Stateless means that each request stands alone, and no information about the client is stored on the server.  This property enables RESTful services to be spread across many different machines, providing horizontal scalability.

It's not possible or desirable to always take REST to its logical conclusion.  If Canvas were stateless, you'd have to authenticate every time the browser made a request.  This means that you'd have to re-log in each time you clicked a link, and you'd need to give your credentials every time Canvas executed a `fetch()` on your behalf.


## RESTful API Mud Card Prompt

The unit conversion API you're writing for Assignment 4 is an example of a RESTful API.

On your mud card explain one or more ways that your `unitconv` API fits the definition of a RESTful API.



# Write a Django App which provides a RESTful API

Let's write an API endpoint in Django which takes a GET request and computes a Fibonacci number requested in the `N` GET parameter.

Essentially, we want to implement this function in such a way that we can call it over the wire using an HTTP GET request:

```python
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

## Requirements

Ultimately this Django app will mimic what Assignment 4 is doing, though in a simplified way.  Observe the differences between these apps:


| This Demo App                                  | Assignment 4
|------------------------------------------------|-------------
| one app contains both the UI and a RESTful API | separates into two apps
| doesn't use a model                            | *must* use a model
| queries only one API                           | queries two APIs, one of which we don't create


## Design

Before you begin writing any code, take a few minutes to design it.  Together with your study buddies sketch what you think this Django app might look like.  Try to answer these questions:

- What are the inputs to the API view?
- What is the output of the API?
- How many views will you create?
- What will your `urlpatterns` array look like (i.e. the array defined in `urls.py`)?
- What error conditions must you be prepared for?
- What helper functions will you need?


<details>
<summary>Here's the outline I came up with:</summary>

* User Interface: Create a view function that renders a simple HTML file from a template
    * Use the supplied `index.html` and `style.css` files as starting points
    * This template will contain JavaScript code that performs a `fetch` on the user's command
    * For your assignment submission you can place your JavaScript code in a static file under `static/gold/script.js`
* Copy the `fibonacci(n)` helper function from above into Django app's `views.py`
* Create a view function that calculates the `Nth` Fibonacci number
    * Get the input value `N` from `request.GET`
        - Loop over GET parameters and print them out to the console
        - If the GET parameter `N` exists and is non-negative, convert it to an integer `n`
        - Call the `fibonacci(n)` helper function to carry out the computation
    * Create a Python dictionary to contain our response
        - Respond to a valid request with the user's requested data
            -   Include the `n` parameter
            -   Include the output value in a property called `fib`
        - Respond to invalid requests with a helpful error message
    * Return a `JsonResponse` object
        - `from django.http import JsonResponse`
        - Converts our response dictionary into JSON
* Hook our views up to URLs in `fib/urls.py`
* Finally, the JavaScript in `index.html` will reach into the JSON and display the result or the error message

</details>



## Implementation

0.  Add instrumentation into the API endpoint to echo the request headers to the console (this will come in handy later ;)
1.  Display the round-trip time as seen by the client
    *   Subtracting `Date` objects yields a difference in milliseconds
2.  Add a `.catch()` to the Promise chain to report on rejected promises
3.  Test whether the HTTP Response Status code control the fulfillment/rejection of the Promise returned by `fetch()`.
    *   The status code of a Django response is set with the `.status_code` attribute
    *   e.g. `r.status_code = 501`



[Today's progress](../../cs2610proj/fib/)

You can try this out the `cs2610proj/` directory of the lecture notes repository.  Play with the code until you are comfortable with how the UI works together.

We will finish this project on Wednesday.



