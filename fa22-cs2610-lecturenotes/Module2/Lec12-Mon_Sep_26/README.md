CS2610 - Monday, September 26 - Lecture 12 - Module 2

# Topics:
* [Announcements](#announcements)
* [Assignment #1 follow up & advice](#assignment-1-follow-up-advice)
* [Have you ever needed a quick HTTP server](#have-you-ever-needed-a-quick-http-server)
* [Mud card followup](#mud-card-followup)
* [HTML Forms](#html-forms)
* [What is an Application Programming Interface (API)](#what-is-an-application-programming-interface-api)
* [HTML Form Input Elements](#html-form-input-elements)
* [POSTing data to a server](#posting-data-to-a-server)


------------------------------------------------------------
# Announcements

## Lucid Tech Talk at USU **TONIGHT**

*   **What**  Taking Ownership as a New Engineer
*   **When**  6:00pm Monday, September 26th
*   **Where** Old Main 115
    *   Free Pizza!
    *   $300 in Prizes!

Starting out in industry as a new software engineer can be a taunting task. At Lucid we strive to create an environment where new engineers are able to take ownership of their roles and thrive in an autonomous fashion.

Whether it be learning new coding languages, developing in a different tech stack, or adopting a company's culture, Lucid has the tools to help you succeed. Come hear two of Lucid's engineers speak on how they grew in and adopted Lucid's values.

This is a great opportunity to hear from industry professionals and ask questions!



## Free Software and Linux Club

*   **What**  Pick Your Side in the Holy Wars!
*   **When**  6:30pm Wednesday, September 28th
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)

You're either a pious saint in the Church of Vi, or an unholy apostate in the Cult of Emacs.

Unfortunately, not everyone has yet decided which holy text editor to worship.  At our next meeting you can practice the doctrine and teachings of each and decide which is more true for you.

Just don't bring Visual Studio - you will be excommunicated.


# Action Items

## Call on 2 designated questioners



# Assignment #1 follow up & advice


Assignment #1 is due Wednesday, September 28 at midnight.
Are there any final questions about this assignment?

*   ...
*   ...


## Advice for the home-stretch

*   The debugging page probably should *not* be a static file... while it can be done that way, it will be more complex than necessary
    *   This page is meant to be a pain; your pain is in anticipation of better things to come
*   Don't worry about GET (a.k.a. Query parameters) on this assignment
    -   `?q=search+term` <- these things
    -   You can trim these from the URL, or respond with `404 Not Found`; either is fine
*   Your server ought to be able to serve up *any* arbitrary file that happens to be in its current directory
    -   However, this feature is *not* a requirement of the assignment
    -   It actually takes less code to do this than it does to handle each individual file with hard-coded logic



# Have you ever needed a quick HTTP server...

If you ever need to quickly share some files on your computer with a friend, you don't need to hassle with Dropbox or Google Drive.  You can build a basic HTTP server with 1 line of code!


## First, find your own IP address and give it to your friends

*   Linux & Mac OS: run `ifconfig` and look for a line that starts with the word `inet` followed by 4 `.`-separated numbers
*   Windows: run `ipconfig` and look for the line starting with `IPv4 Address`

On a WiFi network at your home, it'll likely be a number that looks like `192.168.1.215`



## Host the files in your current directory on port 8000 to anybody who has your IP address:

```
$ python -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

When you are done, simply hit `Ctrl-C` to turn off the server.

You can change the port to any number you like in the range [1024 .. 65535] by supplying it as an argument:

```
$ python -m http.server 1337
Serving HTTP on 0.0.0.0 port 1337 (http://0.0.0.0:1337/) ...
```

Binding to `localhost` or `127.0.0.1` with the `--bind` option launches a web server accessible *only* within your own computer:

```
$ python -m http.server --bind localhost
Serving HTTP on 127.0.0.1 port 8000 (http://127.0.0.1:8000/) ...
```

This is the default behavior of the starter code that I provided.  You can bind to an address *and* a port at the same time; just type the port number after `localhost`:

```
$ python -m http.server --bind localhost 8888
Serving HTTP on 127.0.0.1 port 8888 (http://127.0.0.1:8888/) ...
```


## Incidentally, if you want your `server.py` to be accessible for your friends...

Change this line at the bottom of `server.py`:

```python3
server_address = ('localhost', 8000)
```

To read:

```python3
server_address = ('0.0.0.0', 8000)
```

Then run `server.py` as usual.  If your IP address is `192.168.1.215`, your friends can browse to `http://192.168.215:8000` and behold your server.


## Security Implications

*   "Normal" Web servers don't use port `8000`, they listen on port `80`.  Why doesn't this server use port `80`?
    *   Port numbers in the range [0 .. 1023] are **system ports**, and are reserved by the Operating System
    *   In order for **your** server to listen on port `80`, it must be run with **administrator** privileges
    *   Running a rinky-dink web server as an administrator is asking for trouble
*   As long as your server is *running* and *bound* to the wildcard address `0.0.0.0`, *anybody* who knows your external IP address can download files from your computer
    *   Don't leave the server running unsupervised!
*   Don't bind it to the wildcard address `0.0.0.0` unless you are *prepared* and *willing* to share access to your computer



# Mud card followup

## Cookies

> Is there any major disadvantage of blocking cookies other than less personalized ads & tracking?

> What are some of the less creepy uses of cookies?

**Authentication**

*   HTTP is a *stateless* protocol
    *   This means that one request has no knowledge of any previous requests that were made
    *   Think about it: Without cookies, the server wouldn't remember you right after you log in
*   Cookies used to track users after login are called *session cookies*
    *   If an attacker is able to get a hold of your session cookie, they can impersonate you without needing to know your password
    *   This is why you must periodically re-login to online services

> Is there a way to disable all creepy cookies by default?

*   How do you know which ones are the "creepy" ones?
*   This is the use-case that **Private Browsing Tabs** are for
    *   In a private tab you still get all of the cookies, but they are deleted when the tab closes
    *   The next time you open a private tab and visit those sites, they cannot associate this visit with the previous one, and must give you new cookies 
*   Some browsers (like the Brave browser) are more aggressive about blocking cookies
    *   This comes at the expense of possibly breaking some websites


> Do browsers delete the cookies after using them? Or do they accumulate endlessly

*   Cookies can have an expiration date set, after which the browser will delete them
    *   However, if this expiration date isn't sent with the `Set-Cookie` header, the browser must keep them forever
*   You should go through your browser's Cookies list and see how old some of your cookies are!


## HTTP Server Assignment

> What is the best way to debug the server?

It depends on what you want to debug:

0.  If your server is crashing, run in from within PyCharm and step through it with the debugger
1.  If your server is sending the wrong/malformed response headers, you can easily diagnose it with Netcat


> How do we connect to our server from the terminal so we can start debugging?

Review [Experience HTTP requests and responses firsthand](../../Module1/Experience-HTTP-firsthand.md)


## Miscellaneous

> Since most mainstream web browsers will correct code issues automatically, is it common for commercial websites to be riddled with errors & just rely on the browser to fix it?

I don't know if it's as much an intentional *reliance* on browsers to fix problems they cannot be bothered with...

I think it is more the case that these developers are not even *aware* of the problems in their HTTP/HTML.


> If your browser always asks for the favicon, then how/why can what you do in the page's HTML "overrule" the browser's request?  Does the browser just ask for the favicon *before* the HTML is served?

I believe that the browser *only* requests `/favicon.ico` *after* it has parsed enough of the main HTML document to determine that it doesn't specify a particular icon image.



# Sending data to servers with [HTML Forms](../HTML_Forms.md)

Examine the demonstration file [../forms_server_demo/search.html](../forms_server_demo/search.html)



# What is an Application Programming Interface (API)?

An API describes

*   Packages you can import/include into a program
*   Variables that are defined (global or within a namespace)
*   Functions (and methods) that can be called
*   Data types taken as parameters and returned as values
*   Classes and objects that can be instantiated

The traditional definition of API referred to libraries of code used within a programming environment.  The concept of API also covers protocols used to facilitate communication between systems.

More recently this acronym has become closely associated with web-based technologies.

A web API might describe:

*   The URLs that data may be retrieved from or sent to
*   What format that data will be presented in (i.e. XML, JSON, binary, etc.)
*   How a user can authenticate themselves to the system, and how many system resources they are allowed to consume

In this course you'll study both kinds of APIs.



# [HTML Form Input Elements](../HTML_Forms.md#form-input-elements)

<details>

<summary>How are HTML Forms an Application Programming Interface?</summary>

They allow us to build interactive applications which facilitate communication between a *client* and a *server*.

*   HTML Forms use special elements to provide a graphical user interface.
*   These data are formatted in a special way when sent to the server.

</details>

Effectively using HTML Forms as an API means understanding the user interface they provide.

## Buttons

These HTML elements are seen in the [buttons demo](../forms_server_demo/buttons.html) HTML document:

*   Clickable inputs
    -   `<input type="checkbox">`
    -   `<input type="radio">`
*   Buttons
    -   `<button type="submit">`
    -   `<button type="reset">`
    -   `<button type="button">`


## Text, numeric and miscellaneous inputs

These HTML elements are seen in the [text inputs demo](../forms_server_demo/text-inputs.html) HTML document:

*   Text types
    -   `<input type="text">`
    -   `<input type="search">`
    -   `<input type="password">`
    -   `<input type="email">`
    -   `<input type="tel">`
    -   `<input type="url">`
    -   `<input type="hidden">`
    -   `<textarea>`
*   Numeric types
    -   `<input type="number" min="..." max="..." step="...">`
    -   `<input type="range" min="..." max="...">`
    -   `<input type="datetime-local">`
    -   `<input type="month">`
    -   `<input type="time">`
*   Miscellaneous
    -   `<input type="color">`
    -   `<input type="file">`


## Drop-downs

These HTML elements are seen in the [drop down demo](../forms_server_demo/drop-down.html) HTML document:

*   `<select>`
    *   `<option>`
    *   `<optgroup>`
*   `<input type="text" list="...">`
    *   `<datalist>`



# POSTing data to a server

Let's modify [server.py](../forms_server_demo/server.py) to accept requests sent using the `POST`
HTTP method.  This version of the server can receive and process users' input.

This will be achieved by

0.  Edit `index.html` to include a link to `search.html`
1.  Update the contents of `search.html` so that it can make requests to other servers
2.  Defining the `do_POST()` method in `server.py`
    *   Inspect the `Content-Length` header when POST requests cause the server library to call the `do_POST()` method
    *   Read & print the provided data from the `self.rfile` file object



