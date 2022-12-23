## The Browser's Developer Tools

The appearance of an HTML element in a document depends upon the complex
interaction of all CSS rules which are at in play. If your element doesn't take
on its expected appearance, how will you debug the problem?

Fortunately for you, the web browser that you use every day is actually a
capable web development IDE. To activate your browser's hidden powers, try the
following:

*Note: In Safari, first go into Preferences -> Advanced -> Show Develop menu and menu bar*

-   Press `Ctrl+Shift+I` (or `Command+Shift+I` in Firefox on Mac)
    -   or `Option+Command+I` on a Mac??? (let me know if this actually works in Safari)
-   Press `Ctrl+Shift+J`
-   Press `Ctrl+Shift+C` (or `Command+Shift+C` in Firefox on Mac)
-   Press `F12`
-   Right-click a point on the document and select **Inspect Element**
-   Open the browser's main menu > Tools > Developer Tools


The window that appears contains a lot of tabs and at first glance will feel
overwhelming.  Don't panic!  You'll learn about many of these over the course
of the semester.  The developer tools enable you to debug HTML, CSS and
JavaScript, explore the HTTP protocol, view cookies and locally-stored data,
measure a site's performance, etc.  


### Tools that you'll use in this class

*   Page Inspector
    *   View and edit page content and layout
    *   Visualise many aspects of the page including the box model, animations, and grid layouts
*   Style Editor
    *   View and edit all the stylesheets associated with a page
    *   Try out new style possibilities
*   Web Console
    *   See messages logged by a web page
    *   Evaluate JavaScript expressions
    *   Interact with the page through JavaScript code
*   JavaScript Debugger
    *   Stop, step through, examine, and modify the JavaScript running in a page
*   Network Monitor
    *   See the network requests made when a page is loaded
    *   Inspect HTTP headers sent and received by the browser


### Practice

*   Open the developer tools in your browser...
    *   ...using two of the keyboard shortcuts shown above
    *   ...with the mouse
*   Find the Inspector (or Elements) tab
    *   Explore the structure of this very page
        *   Don't worry if what you see is confusing, before long you'll feel right at home!
        *   Use the "Pick an element" button to zero in on this sentence
*   Find the Network tab and refresh this page
    *   Count how many network requests are necessary to put this page together; it's probably far more than you imagined!
*   Read this article on the MDN: [What are browser developer tools?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)
*   Read an article about the developer tools in your favorite browser
    *   [Firefox developer tools](https://developer.mozilla.org/en-US/docs/Tools)
    *   [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
    *   [Tools - Safari](https://developer.apple.com/safari/tools/)
    *   [Microsoft Edge (Chromium) Developer Tools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/)



## The Document Inspector

For now you'll focus just on the Inspector (Firefox) or Elements (Chrome) tab, which gives you a peek at the HTML structure of the webpage you're looking at.

_Note_: what you see in the developer tools' Inspector tab is _not_ the same thing that you see with "View Source" (`Ctrl+U`)!

In the early days of the web the HTML that you downloaded is exactly what you'd see on screen.  Today it is more common for websites to be delivered as a skeleton of HTML plus a JavaScript program and to "build" themselves on your computer.  The HTML that you initially downloaded will very quickly differ from what you see rendered on-screen.  You'll learn how to write webpages that do this soon enough.  But for now it is enough to understand that webpages are *very* malleable.

The Inspector lets you *modify* the contents of the webpage you're viewing.  This is a good way to try new things out.  (It's also great for creating convincing faux screenshots without Photoshop!)  Anything that you change here affects only your own browser.  You can't modify webpages for other users this way.  The changes are *temporary*, and are reverted as soon as you refresh the page.

There are many useful things to do in the Inspector:

*   The "Pick an element from the page" button locates a visible item's markup in the document
*   There is also a Search bar to find elements by their name, attribute or text content
*   Once selected in the inspector, elements are highlighted on the screen to show how much space they occupy
    *   The `Up` and `Down` arrow keys select new elements
    *   The `Right` and `Left` arrow keys expand and collapse branches of elements contained under a parent
    *   `Delete` removes an element and its children from the document
*   Right-clicking elements opens a context menu with many useful options.  A few include:
    *   `Edit as HTML`
        *   Opens a small text editing window to give you full control over the markup
        *   Press `Ctrl+Enter` to submit your changes
        *   Press `Esc` to cancel
    *   `Duplicate Node`
        *   Copy an element and all of its children
    *   `Scroll into view`
        *   Scroll the webpage window up or down until the element selected in the inspector is visible
    *   `Screenshot node`
        *   Save into your Downloads folder an image of just that portion of the document tree


### Protip: never trust screenshots

`https://twitter.com/Lord_Voldemort7/status/1093696565892562946`

> Please stop comparing every bad person in your life to me.  It's very unkind and hurtful.  I have feelings too, you know.  Also, you should read other books.
> -- Twitter for iPhone



### Practice

*   Use the Inspector to delete this `<li>`
*   Use the Inspector to change the text of the `<h3>` above to say something besides "Practice"
*   Change this unordered list into an ordered list
*   Delete *everything* in the `<body>` of this document
*   Visit 'http://unnovative.net'
    *   Press `Ctrl+U` to view source
    *   Open the Inspector and compare what you see there with what is shown in the source view
*   Intentionally write an incomplete webpage (something like the HTML I wrote in an earlier lecture)
    *   Load the page into browser and enter the Inspector
    *   How does the HTML shown in the Inspector differ from what you wrote?
