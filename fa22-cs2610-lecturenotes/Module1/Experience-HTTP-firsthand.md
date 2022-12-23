# Experience HTTP requests and responses firsthand

HTTP is a simple plain-text protocol.  Typing out HTTP requests yourself is a great way to get "hands-on" experience and demystify what browsers and servers do.  I would like you to spend some time in the command shell with a text-based tool called `netcat` and have an HTTP "chat" with a real server.

While you are working on this assignment you will find `netcat` to be a valuable debugging tool because it can only give you straight answers when your server does something wrong.  Your browser, by contrast, may be able to fix simple syntax and semantic errors on the part of your server.  For most users this behavior is a Good Thing (TM) because it means they can browse sites hosted on buggy servers.  But it isn't helpful when you are trying to debug a server.  `netcat` has the virtue of not being too clever for its own good.


## Table of Contents

*   [Install and launch Netcat](#install-and-launch-netcat)
*   [Netcat command syntax](#netcat-command-syntax)
*   [Trying out HTTP request headers](#trying-out-http-request-headers)
*   [Examining HTTP headers with your browser's DevTools](#examining-http-headers-with-your-browsers-devtools)

## Install and launch Netcat

> Netcat is a simple Unix utility which reads and writes data across network connections, using TCP or UDP protocol.  It is designed to be a reliable "back-end" tool that can be used directly or easily driven by other programs and scripts.  At the same time, it is a feature-rich network debugging and exploration tool, since it can create almost any kind of connection you would need and has several interesting built-in capabilities.

*   Linux: you likely already have Netcat installed.  It may be found by the name of `nc`, `ncat` or `netcat`.  Otherwise, install it from your distro's package manager
*   Mac: The command `nc` will already be installed
*   Windows: you can download a Windows-compatible build of this program from https://joncraton.org/blog/46/netcat-for-windows/
    *   Because this program has been used by hackers in the past, Windows may regard it as malware
    *   Extract the program `nc.exe` from the zip file using the password **"nc"**
        *   The password protects the zip file from being "sanitized" by malware scanners
    *   You can either run `nc.exe` from the extracted location or copy it into a directory in your system's `%PATH%`
    *   If Windows thinks `nc.exe` is malware, download the *safe* version of Netcat instead
    *   If Windows **still** blocks the *safe* version, as a last resort install the pure-Python version of Netcat with `pip`:
        *   `$ pip install netcat`

You may also use a program called `telnet` to do this, too.  For our needs it behaves as a drop-in replacement for `nc`.  Simply replace `nc` with `telnet` in the command lines below.

*   Linux: the command `telnet` is likely already installed
*   Mac: Telnet is not already installed, but since you have `nc` you're not missing anything
*   Windows: telnet is already kind-of installed for you, but is disabled for "security" reasons
    *   You'll have to go into the Control Panel under "Add Programs and Feature" and manually enable "Telnet Client"
    *   Even then, some students have reported trouble getting this to work

To run these examples leave off the leading white space but otherwise type them EXACTLY as presented below (the line starting with a dollar sign denotes the command that I typed on my computer; don't copy the dollar sign, but do copy the rest of the command).  When you type `nc` (or `telnet`) the computer will wait for you to finish entering the complete HTTP request.  Signal that your input is finished by typing `Return` twice.

After the request is displayed you may not be returned to the command prompt.  When this happens press `Ctrl-C` to exit from `nc`.  If you're using Telnet you must press `Ctrl-]` and type `quit` at the 'telnet>' prompt.


### Practice: run `nc` from the command line as a smoke test

*	Open a command window on your OS
    *   Windows users: If needed, navigate into the folder where you downloaded `nc.exe`
*	Run `nc` or `netcat`
*   Do you see an error like `Bad command or file name` or `Command not found`?
    *   If so, contact the TA or instructor for help
    *   If you see your prompt change to read `Cmd line:` or print a usage message such as `Ncat: You must specify a host to connect to. QUITTING.`, **you win!!!**


## Netcat command syntax

As stated above, the name of your Netcat program may vary between `nc`, `ncat`
or `netcat`.  In a pinch you can use `telnet` as a drop-in replacement.  On my
computer this program is called `nc`, so that's what I'll show you here.
Adjust these commands to work on your computer.

Regardless of what your program is called, the syntax of the command we'll
use is always the same:

```
$ nc HOSTNAME PORT_NUMBER
```

### An explanation of Port numbers

The `HOSTNAME` is the URL *minus* the scheme `http://`, and *minus* the path
component (the part that occurs after the hostname).  Because HTTP servers
ordinarily listen for connections on port 80, that's what I'll use for
`PORT_NUMBER` below.

Netcat doesn't deal with encryption, so you won't be able to use this program to speak to HTTPS servers.  Additionally, HTTPS uses port 443 instead of port 80.

In other words,

*   A URL beginning with `http://` means "connect to the host's port 80 and
    speak HTTP"
*   URLs that start with `https://` mean "connect to the host's port 443 and
    speak HTTPS"

The HTTP servers that you will write in this course will listen on port 8000
instead of port 80.  The reasons for this are twofold:

0.  As a matter of system security, the OS does **not** allow ordinary user
    programs to listen on ports in the range 0-1023.
1.  There may already be a web server running on port 80.  To enable a test
    server to run on the same machine as a production server a different port
    number is needed.  Traditionally, ports 8000, 8008, 8080 and 8888 have been
    used for this.



## Trying out HTTP request headers

### `Connection`

Can you spot the difference between these requests?  What does the `Connection` header do?

    $ nc google.com 80
    GET /search?q=cool+stuff HTTP/1.1


    $ nc google.com 80
    GET /search?q=cool+stuff HTTP/1.1
    Connection: close


    $ nc google.com 80
    GET /search?q=cool+stuff HTTP/1.1
    Connection: keep-alive


### `Accept-Encoding`

Can you spot the difference from one of the requests above?

    $ nc google.com 80
    GET /search?q=cool+stuff HTTP/1.1
    Accept-Encoding: gzip
    Connection: close


### A website that responds differently based upon the `Host` header

    $ nc www.ask.com 80
    GET /web?q=cool+stuff&o=0&qo=homepageSearchBox HTTP/1.1
    Connection: close


    $ nc www.ask.com 80
    GET /web?q=cool+stuff&o=0&qo=homepageSearchBox HTTP/1.1
    Host: www.ask.com
    Connection: close


### Visit Google's `teapot` service to see the rare 418 status code

    $ nc google.com 80
    GET /teapot HTTP/1.1
    Connection: close


### Find out your own external IP address:

Using DynDNS's service:

    $ nc checkip.dyndns.org 80
    GET / HTTP/1.1


Using IP-API's service to return information in JSON format:

    $ nc ip-api.com 80
    GET /json/ HTTP/1.1
    Host: ip-api.com
    Connection: close


You can get this data in different formats by specifying a different path.

*   for CSV use `/csv/` as the path
*   for XML use `/xml/` as the path

    $ nc ip-api.com 80
    GET /csv/ HTTP/1.1
    Host: ip-api.com
    Connection: close

Try this with and without the `Host` and `Connection` headers.  What
differences do you see?


### Practice

*	Try all of the examples shown above for yourself
*   Find another server that still serves HTTP content and talk to it with Netcat
    *   This is becoming increasingly difficult as more and more sites are switching over to HTTPS
    *   You know you've found one if you type "http://" in the address bar and it remains "http://" after the page loads
    *   Seek out "older" websites
*   Write your own HTTP requests and type them in with Netcat.  How do the sites respond?
    *   You can write up your requests (including headers) in a text editor and copy and paste them into the terminal after connecting with Netcat
*   Visit these same sites with your web browser and observe the results in the browser's dev tools
    *   What differences do you notice from when you visit with Netcat?
*   Post your experiences in a thread on Piazza


## Examining HTTP headers with your browser's DevTools

In cases where you aren't anticipating bugs in the server you can also examine headers in the browser.

0.	Open the developer tools and go to the Network tab.
1.	Check the option "Disable cache" (this is present both in Firefox and Chrome)
2.	Type an address in the address bar and hit Enter to make a request
3.	Click on one of the responses that appear in Network tab
4.	Click on the "Headers" tab on the right side of the developer console; the
  	request and response headers are listed in their own sections
5.	Toggle the "Raw headers" switch to view the headers in plain text, just the
  	way the server sent them


### Beware of caches!

Web browsers may try to save bandwidth by not constantly downloading resources
that are not expected to change very frequently.  Examples include Favicons and
CSS files.  You can disable this feature while the DevTools are open by
selecting "Disable cache" in the Network tab.

This will manifest to you when you make an update to a file in your site but
don't see the changes in your browser when you refresh the page.  The server's
log won't report that your browser ever tried to access the page.


On the other side, web servers will cache parts of statically hosted web pages
for performance reasons.  The server may use the `Cache-Control` header to ask
your browser to not re-request a resource within a certain time frame.  Our
simple server doesn't do this, but "real" servers will.

Some websites employ CDNs to cache parts of websites to improve delivery speed
and to reduce their bandwidth costs.


#### Content delivery network (CDN)

> A system of distributed servers (network) that deliver pages and other Web
> content to a user, based on the geographic locations of the user, the origin
> of the webpage and the content delivery server.
>
> https://www.webopedia.com/TERM/C/CDN.html

It can take upwards of half an hour for changes to propagate through a CDN
back to users.


### Practice

*	Visit the same sites in the browser that you've visited with Netcat
*	View the Request and Response headers in the 'Network' tab of the Developer tools...
    *   ...in their pretty-printed form
    *   ...in the raw view mode
