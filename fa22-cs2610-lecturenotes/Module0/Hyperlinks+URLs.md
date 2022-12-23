## Hyperlinks and URLs

<details>
<summary>Q: What does HTML stand for?</summary>

A: HyperText Markup Language

</details>


<details>
<summary>Q: What does the H mean?</summary>

A: Hyper; as in *hyper*connected.

</details>

HTML documents may contain links to other HTML documents.  These links are encoded as `a` elements.

Different cultures may disagree over which side of the book is the "front", but we can all agree that a book has a beginning and an end with one page following another page.  

HTML allows an arbitrary number of pages to follow from one page.  There may or may not be a "first" page of a website.  Likewise, there may or may not be a "last" page.  Pages can link to other pages which in turn link back to the first page.  A page may be linked back onto itself directly.

If there is such a thing as a "first" page, it would be `index.html` (or some variation on that name: `index.php`, `index.aspx`, etc.).  This is simply a convention that web browsers and web servers follow: If you visit a webpage and don't specify which exact page you want to see, you'll be given a default page with a name chosen from the list above.


### The [anchor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) element

*   `a` is for "anchor".  The content of the `a` tag is what the user will click on.  *Where* the hyperlink takes you is encoded in the `href` attribute.

    ```
    Hyperlinks <a href="https://amazon.com">Spend all of your $$$ here!</a>
    ```
*   For an `<a>` element to become active, it must contain the `href` attribute in the opening tag
*   The `<a>` element is what makes HTML "hyper"
*   Text as well as other HTML elements can be wrapped in the `<a>` element
    *   Clickable text is underlined blue
    *   Buttons can be made by placing an image inside the anchor tag


### Practice

*   Add hyperlinks to your document
*   Make a clickable image that takes you to another site



### Questions to consider:

*   Can HTML do everything which can be done with an ordinary, bound book?
*   Can you replicate the "hyper"-ness of the web in traditional media? 



## URLs

#### Uniform Resource Locator (URL)

A unique name for an object on a computer network.

Also related: URI

#### Uniform Resource Identifier (URI)

A unique name for an object on a computer network.

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL


### Syntax of URLs

    [scheme:[//host[:port]]][path[?query]][#fragment]

*   `scheme`
    *   Indicates how the computer/browser will transfer the retrieved
    *   On the web this is usually `http` or `https`, though `ftp` and `mailto` are also common
*   `host`
    *   The name of the computer from which the resource is retrieved
    *   Can be a domain name
        *   `google.com`
        *   `usu.edu`
        *   `localhost`
    *   Or an IP address
        *   `127.0.0.1`
        *   `192.168.1.1`
        *   `144.39.200.85`
*   `port`
    *   A number from 1-65535
    *   This is optional (that's what the `[]` mean)
    *   For `http` resources port 80 is implied
    *   For `https` resources port 443 is implied
    *   You will use port `8000` for our Django development web servers
*   `path`
    *   Represents the path to a file or directory on the remote server
    *   Doesn't *need* to correspond to any real files
    *   Use Unix file separator `/` (a.ka. frontslask), not a backslash `\` as on Windows 
*   `query`
    *   Must follow a question mark `?` after the hostname and path (if any)
    *   Allows extra information to be sent to the server
    *   Sequence of key/value pairs
        *   Keys are separated from values by an equal sign `=`
        *   Pairs are separated from each other by an ampersand `&`
*   `fragment`
    *   Must follow a hash character `#`
    *   Comes at the very end of the URL
    *   Indicates the position of a subsection of an HTML document
        *   Does *NOT* correspond to anything on the server
        *   In fact, browsers won't even send the fragment to the server.

Other notes:

*   As you can see above, many parts of a URL are actually optional
    *   A URL can be just a path or a fragment
    *   The special fragment `#` refers to the page itself, regardless of its own file name
*   Only a limited subset of ASCII characters are allowed in a URL
*   Spaces are replaced by `+`
*   Other characters are *URL Encoded* by writing a percent sign `%` followed by the character's ASCII code in Hexadecimal
    *   e.g. `%` is encoded as `%25`
    *   e.g. `\` is encoded as `%5C`

[URL Syntax on MDN](https://en.wikipedia.org/wiki/URL#Syntax)


### Practice

*   Open a new browser tab and navigate to a website that you are familiar with
    *   Modify the address of the site in the address bar to see what happens
    *   What happens if you remove some of the "optional" parts of the URL and hit Enter?
        *   Try removing the scheme (`http:` or `https:`).  What happens?
        *   Change the scheme from `http:` to `https:` (or vice versa).  Are you sent back to the `https:` address?
        *   Repeatedly remove the last component of the path.  Does the server let you visit those pages, or does it respond with an "Access Denied" error?
        *   What happens when you change the domain name of the site?
*   Does the browser treat URLs in hyperlinks any differently than those written directly into the address bar?



## Absolute vs Relative URLs

#### Absolute URL
An address that includes all information necessary to reach a resource

These include the domain name, and only work when that domain name hosts the
specified resource (webpage, image, stylesheet, etc.).

*   Pros:
    *   Specifies the main website - 1st point of contact
    *   This is the only way to refer to a webpage on *another* server
*   Cons:
    *   If the target website is moves to a new domain, absolute URLs must be updated
    *   This applies to you when you move your own website


#### Relative URL
A partial address which locates a resource within an assumed context

*   Relative URLs generally do *NOT* include the domain name; your browser automatically converts links with relative URLs into an absolute URL by prefixing the current domain name from the address bar.
*   The browser converts path-only relative URLs are into absolute URLs by chopping off the filename from the end of the path and adding directory/file names to the end
*   The sequence `../` refers to the *parent* directory of the current path
*   The special fragment `#`, which refers to the page itself, is a kind of relative URL
*   Pros:
    *   Shorter = less typing ;)
    *   Less work when moving website to another location
*   Cons:
    *   Cannot be used to refer to an outside website

Try entering a relative URL into the address bar and see what happens.


### Practice

*   Make another webpage called `otherpage.html`
*   Use hyperlinks to join these pages into a complete site of multiple pages
