CS2610 - Wednesday, November 09 - Lecture 30 - Module 4

# Topics:
* [Announcements](#announcements)
* [Finish the RESTful Fibonacci API in Django](#finish-the-restful-fibonacci-api-in-django)
* [Cross-Origin Resource Sharing (CORS) Errors](#cross-origin-resource-sharing-cors-errors)


------------------------------------------------------------
# Announcements

## AIS Speaker Series Presents: Sherrie Cowley

*   **What**  Head of Security Operations, 3M Health Care
*   **When**  6:00pm Thursday, November 10th
*   **Where** Huntsman Hall Room 320

![./02-speaker-promo-sherrie.png](./02-speaker-promo-sherrie.png "Flyer for AIS Speaker Series: Sherrie Cowley")


## Lucid Software Technical Challenge Workshop

*   **What**  Learn how to ace the technical questions in your job interview!
*   **When**  5:00 - 6:30pm Thursday, November 17th
*   **Where** Life Science Building (LSB) room 231
    *   Free Pizza
    *   Industry Insight
    *   Technical interview practice

![./02-Lucid-technical-challenge-workshop.jpg](./02-Lucid-technical-challenge-workshop.jpg "Flyer for the Lucid Software Technical Challenge Workshop")


# Action Items

*   Call on 2 designated questioners



# Finish the RESTful Fibonacci API in Django

Last time we put together a RESTful API that *slowly* computes Fibonacci numbers in Django.  It works, but the quality leaves something to be desired.  Let's finish it now by adding these features:

0.  ~~Add instrumentation into the API endpoint to echo the request headers to the console (this will come in handy later ;)~~
1.  Display the round-trip time as seen by the client
    *   Subtracting `Date` objects yields a difference in milliseconds
2.  Check the response object for errors caught by the server
    *   Comment out the client-side error checking to test
3.  Add a `.catch()` to the Promise chain to report on rejected promises
4.  Test whether the HTTP Response Status code control the fulfillment/rejection of the Promise returned by `fetch()`
    *   The status code of a Django response is set with the `.status_code` attribute
    *   e.g. `r.status_code = 501`
5.  Use `.finally()` to show the round-trip time for the API regardless of its success



[The completed app](../../cs2610proj/fib/)

You can try this out the `cs2610proj/` directory of the lecture notes repository.  Play with the code until you are comfortable with how the UI works together.



# Cross-Origin Resource Sharing (CORS) Errors

As you work with APIs you will undoubtedly encounter pesky CORS errors that stop your project dead in its tracks.  Worse, they seem to happen to you (or your grader) completely at random.

CORS errors happen for a good reason, though understanding that reason requires quite a bit of background.  Going online to learn how to fix them can yield advice that either goes way over your head or fails to fix the problem.


## Necessary Jargon

The full CORS concept is pretty sophisticated, but the particular situation you are most likely to encounter is quite straightforward.  I will explain this as simply as possible.  In order to clue you in to what's going on, you must first learn a few new concepts and jargon:


#### [Origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)

> Web content's origin is defined by the scheme (protocol), hostname (domain), and port of the URL used to access it.  Two objects have the same origin only when the **scheme**, **hostname**, and **port** all match.

Other parts of a URL don't factor into the *origin*.  Neither path, nor query string, nor fragment matter.

These URLs all share the same origin:

*   `http://localhost:8000/app1/index.html`
*   `http://localhost:8000/app2/index.html`  *(paths don't matter)*
*   `http://LOCALHOST:8000`  *(Domain names are case-insensitive)*

The origin of these URLs differ:

*   `http://localhost:8000/`
*   `https://localhost:8000/`  *(scheme differs - http vs https)*
*   `http://127.0.0.1:8000/` *(host differs)*
*   `http://localhost:8888/`  *(port differs - 8000 != 8888)*
*   `http://localhost/`  *(port differs - HTTP defaults to 80, not 8000)*


#### [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

>   The same-origin policy is a critical security mechanism that restricts how a document or script loaded by one origin can interact with a resource from another origin.

This policy is in place to protect you from giving malicious websites access to your sensitive accounts.


#### [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

The CORS system works by the sending and receiving of a few special HTTP headers.  The server may or may not pay these any heed; security-conscious browsers will block risky requests without the participation of the server.  

We'll focus on the simplest CORS use-case involving two headers


#### The [Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) Request Header

>   The `Origin` HTTP request header indicates the origin of the request. This header **does not** include any path information. It is similar to the Referer header, but unlike that header, the Origin header does not disclose the whole path.

Examples:

```
Origin: https://gitlab.cs.usu.edu
Origin: http://localhost:8000
```

When the browser sends this header as part of a `fetch()` request, it is set to the origin of the URL in the **address bar**.  It is **not** the origin of the URL that is passed to `fetch()` as its argument.

*   The `Origin` request header is *only* sent by your browser when making a **cross-origin** request
*   In other words, it is only sent when the origin of the URL used in `fetch()` **does not** match that of the address bar


#### The [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) Response Header

>   The `Access-Control-Allow-Origin` response header indicates whether the response can be shared with requesting code from the given origin.

If the server chooses to include this header in its response, it is set to an origin that it trusts to handle the data payload.

Examples:

```
Access-Control-Allow-Origin: http://localhost:8000
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: null
```

If the origin named by this header **does not** match that of the address bar, the browser will *reject* the promise returned by `fetch()`.

The special value `*` is the server's way of saying "I trust everybody!"  These servers also pick up the phone every time somebody calls about their car's extended warranty.

For security reasons, JavaScript will not know exactly why the Promise was rejected; as far as it knows, something went wrong with the network.  This lie makes is difficult for a clever piece of malware to find a way around this security mechanism.

For similar reasons, the `fetch()` API does not allow you to manually set the `Origin` request header.  The browser always tells the truth.


## CORS Error demo

*   **Note: This demo doesn't work properly in recent versions of Google Chrome-based browsers.**
    *   Chrome refuses to make cross-origin requests to non-HTTPS resources
    *   This behavior can temporarily be disabled by launching Chrome from the command line with the command line arguments `--disable-web-security` and `--user-data-dir=<SOME DIRECTORY>`
    *   The user data directory needs not to be the path to the default profile location.  This is easy, since you probably don't know where Chrome keeps your profile by default!
    *   The user data directory does not need to exist; Chrome will create a new folder.
    *   For example, on my computer I can run:
        *   `$ google-chrome-stable --disable-web-security --user-data-dir=/dev/shm/chrome-throwaway`

Let's observe the problem first-hand in the [FibAPI](../../cs2610proj/fib/).

We can trigger a CORS error by taking advantage of the fact that the distinct hostnames **localhost** and **127.0.0.1** actually refer to the same server.

0.  Edit the JavaScript code in the Fibonacci app's User Interface to `fetch()` the API through a hard-coded host (say, `localhost:8000`)
1.  Visit that webpage on `http://127.0.0.1:8000/fib/`
2.  Make a request, either with the `Calculate` button, or manually in the JavaScript console with `fetch()`


#### There are two ways to fix this:

0.  Make the hostname used by `fetch()` always matches the URL in the address bar (i.e. use `window.location.host`)
1.  Set the `Access-Control-Allow-Origin` header to a permissive value in the API's response



## An example of how CORS can save your bacon

This CORS stuff seems very inconvenient, but serves an important purpose.  Here's a story to illustrate why CORS is actually a good thing.

When you log in to your webmail account (let's call it **qmail**), your browser receives a *session cookie*

*   The session cookie enables you to continue to access qmail without re-logging in every time you want to read a new email message.
    *   This works because *every* subsequent request your browser makes to qmail.com includes the session cookie.
*   Leaving qmail.com open in another browser tab, you browse the dark side of the web to order a spooky mystery box to anonymously ship to your annoying neighbors.
    *   You find a really skeezy shop at http://spooky-darkweb-mystery-boxes-ome.ga
    *   It is such a sketchy shop, that their `index.html` sends your browser this snippet of JavaScript:
        *   ```javascript
            fetch('https://qmail.com/account/contacts')
                .then(r => r.json())
                .then(json => {
                    // Pretend this is code to upload your contact list to mega.nz
                    })
            ```

If your browser didn't enforce the Same-origin policy, it would happily send along your qmail.com session cookie in this `fetch()` request, handing your contacts list over to the JavaScript from **spooky-darkweb-mystery-boxes-ome.ga**.

As it is, this `fetch()` request will expire under mysterious circumstances.


## Cool story, bro...

*...now how do I make my CORS errors go away?*

There are two situations where you'll get CORS errors in this class:

### CORS errors that happen with your own API written in Django

*   This happens when the origin in your address bar does not match the origin of your API
    *   e.g., you wrote your request to the `unitconv` API in JavaScript as `fetch('http://127.0.0.1:8000...')`, but visited your Gold app at the URL `http://localhost:8000`
    *   e.g., you browsed to your `index.html` as a file (i.e. the URL begins `file:///`)

In both of these cases the **origin** of your `fetch()` doesn't match that of the address bar.  This makes your `fetch()` a **cross-origin request**, which your browser thinks is very sus.

**How to fix**

0.  *Client-side:* don't hard-code the origin into the `fetch()` request; 
    *   Include `window.location` into the destination of `fetch()` so that it's a **same-origin request**
1.  *Server-side:* include the `Access-Control-Allow-Origin` header in the response.
    *   You can inspect the `Origin` header to decide if you trust the request or not
    *   If you just don't care, you can always send back `*`
    *   If you are paranoid, send back `null`
    *   ```python
        resp = JsonResponse(response_data)
        if 'Origin' in request.headers:
            resp['Access-Control-Allow-Origin'] = request.headers['Origin']
        else:
            resp['Access-Control-Allow-Origin'] = 'null'
        return resp
        ```


### CORS errors that happen with a 3rd-party API

Properly fixing the CORS error requires that you make changes to the server.  Since this isn't your server, this isn't an option for you.

What you *can* do (and this is admittedly quite the *kludge*) is set up a *proxy server* in between your browser and the 3rd-party API that is on your side.  The proxy server will edit the HTTP headers that go back and forth and make everything look copacetic.

You can stand up your own Proxy server (the best option), or you can trust these guys with your requests (sketchy):

*   https://corsproxy.github.io/
*   https://codetabs.com/cors-proxy/cors-proxy.html


## Further reading

*   https://en.wikipedia.org/wiki/Same-origin_policy
*   https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors
*   https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
*   [Misleading CORS Errors – Dev Notes by David Truxall](https://davidtruxall.com/misleading-cors-errors/)



