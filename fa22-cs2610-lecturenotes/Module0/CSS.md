## Cascading Style Sheets (CSS)

You have learned how HTML uses *tags* to encode two types of information:

0.  The structure of a document
1.  The appearance of a document

The original version of HTML used to create webpages in the "Web 1.0" days of
the 1990's relied solely on the structure of the markup document to describe
its appearance.  Over time it was realized that this approach inhibits the
maintainability within a single page as well as across many pages.

Let's look at an example website of that vintage and study its HTML code:

### Practice 

*   Visit 'https://www.spacejam.com/1996'
    *   Press `Ctrl+U` to view source
    *   Open the Inspector and compare what you see there with what is shown in the source view



## What's wrong with writing a webpage like it's 1996?

I mean, I'm not trying to imply that SpaceJam.com is *wrong*...

*   What problems arise from solely using HTML tags to style a webpage?
*   If you don't already know the answer to this question, what do you think a
    better approach would be like?
*   If you do know the answer, explain in your own words why it is superior.

Defining the appearance of an HTML document can be done through several means:

*   Elements defined to have a specific appearance (`em`, `h1`, `strong`, `b`)
    *   *pros:*
        *   simple and backwards-compatible with the 1990's (this is how http://spacejam.com was originally authored)
    *   *cons:*
        *   The author must change the very structure of the document to make it look different
        *   Every node in every document must be individually updated
        *   Because the opening tag may be very far away from its corresponding closing tag there are many opportunities to introduce subtle errors
        *   You are limited to a small set of pre-defined elements
        *   All browsers must agree on the appearance of each element, or else the webpage looks *wrong* on different browsers
*   The style="" attribute on individual elements
    *   *pros:*
        *   You can use the CSS "property: value" syntax that you'll soon become familiar with
        *   You can make any element look just how you like it
    *   *cons:*
        *   again you must visit every node in the document to apply the desired style
*   Cascading Style Sheets
    *   *pros:*
        *   Your style information is all in one place
        *   Conveniently apply the style to large chunks of the document in one fell swoop
        *   The same style can easily be applied to several pages across your site
    *   *cons:*
        *   The added complexity of a learning new language


### Practice

Edit `index.html` and make the following style changes *the old-fashioned way*:

*   Give the entire document a background of `wheat` *(hint: use the `bgcolor` attribute)*
*   Use `em` and `strong` together *everywhere*
*   Use `code` instead of `em` to make HTML tags appear like source code
*   Use the `span` element with the  `style=""` attribute to
    *   Display the word "big" in the `h1` in a very large font *(hint: use style property `font-size`)*
    *   Display the word "smaller" in the `h2` in a very small font
*   Using the `style=""` attribute give some `p` elements a `lightgreen` background *(hint: use style property `background-color`)*
    *   Wrap adjacent paragraphs in a `div` with a background of `springgreen`
*   Choose background colors for alternating list items *(i.e. "zebra-stripes")*
    *   `ol` = `lemonchiffon`
    *   alternating `li` = `peachpuff`
    *   `ul` = `lightskyblue`
    *   alternating `li` = `deepskyblue`



## The big problem solved by CSS

The problem that CSS solves is that of separating the *appearance* of a document from its *structure*.  

Manually writing the style information in every single HTML element is tedious, repetitive, and error prone. At best it means that you must repeat yourself; at worst it makes it difficult for us to apply a consistent look-and-feel across all of the pages on your website.

CSS gives us a way to simultaneously:

0.  Apply style information to specific elements
1.  Follow the *DRY* principle (Don't Repeat Yourself)
    *   Write style info once and it is applied everywhere, automatically

The advantage of CSS is that you can change one piece of code and effect the entire website.  If you relied on visual tags such as `h1`, `strong`, and `em` to decorate a document, you'd need to rewrite large parts of a document to change how it looks.

Instead of crafting a 1990's document by surrounding elements with special tags, modern web devs use ordinarily invisible elements such as `div` and `span` to define the structure of the document, then redefine the appearance of those `div`s and `span`s in CSS.


## CSS Rules = Selectors + Properties

CSS is a *declarative* language.  This means that instead of explaining to the computer *how* something is done, you describe *what* should be done, leaving the details of "how" to the language interpreter.

In this case, the browser is an interpreter for HTML + CSS.  You may specify only the styles you want and let the browser supply defaults for everything else.

CSS Rules combine **selectors** that describe *which* elements to affect with **properties** that describe *what* style to apply.

**Property** and **value** pairs are written in a curly-brace block.  Semicolons separate pairs of properties from values.

*   CSS comments use the same syntax as block comments in Java and C++
*   In this example `h1` and `.urgent` are **selectors**
*   `color`, `background-color`, `border` and `padding` are properties
*   `blue`, `yellow`, `red`, `2mm` and `1px solid black` are values

```
/* CSS comments look like this */
h1 {
    color: blue;
    background-color: yellow;
    border: 1px solid black;
    padding: 2mm;
}

.urgent {
    color: red;
    font-weight: bold;
}
```


## How CSS is applied to the document

You may put CSS code inside a document's head element under the `style`
element.  This is called "internal" CSS.

    <style>
        h1 {
            color: blue;
            background-color: yellow;
        }
        p {
            color: red;
        }
    </style>

An external CSS file can be referenced in a document's `head` with the `link`
element.  The `link` element uses the `rel`, `type` and `href` attributes
together to point to a stylesheet online:

    <link rel="stylesheet" type="text/css" href="style.css"/>


### Internal vs. External CSS

* External CSS can be used across many HTML documents to apply the same style across an entire site
* It's easier to maintain styles when the HTML code and style information are stored separately
* Either way you include CSS, it belongs in the *head* of the document


### Practice

*   Update the appearance of `index.html` using an inline stylesheet
*   Remove as many `style=""` attributes as possible
*   Additionally, make all `code` elements have a `red` foreground color on top of a lightgrey background



## CSS Selectors: Finding your way around the DOM

In order for CSS to be useful you need to be able to explain to the browser how to locate elements in the document.

#### Document Object Model (DOM)
A way to represent and interact with an HTML document

https://developer.mozilla.org/en-US/docs/Glossary/DOM

An HTML document can be thought of as a tree data structure (like a binary or N-ary tree, or a directed acyclic graph if you've taken CS2410).  The DOM is the set of functions and data structures which you use to query and modify the HTML document like a tree data structure.

CSS uses the notion of *selectors* to let us describe locations in the tree.

[CSS Reference - Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#selectors)


### [Simple selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors)

There are three simple CSS selectors

0.  Element or Type selectors: simply name an HTML element
    *   ex. `li`, `p`, `div`
1.  ID selectors: matches a unique element named by the value of the id=""
    attribute; begins with the '#' symbol
    *   ex. `#wiki-content`, `#page-heading`, `#table-of-contents`
2.  Class selectors: matches one or more elements which contain a name in the
    class="" attribute; begins with the '.' symbol
    *   ex. `.summary`, `.note`, `.column`


### Combinators and multiple selectors

The simple selectors may be combined in ways that specify elements based upon their position in the DOM.

[Combinators and multiple selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)



### [Pseudo-class selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

These selectors begin with a colon `:` and match the *state* of an element.

*   To match an item when the mouse is over it, use `:hover`
    *   ex. `div:hover`, `a:hover`
*   To match an item when the keyboard is controlling it, use `:focus`
    *   ex. `input:focus`
*   To match the first child element within another element, use `:first-child`
    *   ex. Match the first list item: `li:first-child`
    *   ex. Match *any* first child of *any* element in the document with plain `:first-child`
*   To match the last child element within another element, use `:last-child`
*   To match the *nth* child element within another element, use `:nth-child()`, where an expression of the form `an+b` goes in the parens
    *   ex. Match even-numbered paragraphs `p:nth-child(2n)`
    *   ex. Match odd-numbered list items `li:nth-child(2n+1)`
    *   ex. Match every fifth div `div:nth-child(5n)`



### To help you get the hang of CSS selectors...

Try this fun game:

http://flukeout.github.io/

Keep the MDN handy while you play

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors



## CSS Properties: Changing elements' appearances

The "fun" part of learning CSS is learning all of the properties which affect
elements, and learning *how* to give the desired effect.  Each CSS property
takes on a value.  Each property has its own set of allowed values.  Most
browsers silently ignore properties that are given invalid values.

[Exhaustive CSS Property Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

*   Replace the style attribute of the really BIG and small words in the headers with equivalent classes
    *   Add colors to further enhance the appearance
    *   Make this word appear as `orange` text on a `blue` background
    *   Make this word appear as `yellow` text on a `black` background
*   Make a `.springgreen` class for the green `div` which holds paragraphs
*   Copy the .`urgent` style from above, apply to the `.springgreen` `div`
    *   What happens when one element has many classes?
    *   How are child elements influenced by their parents' classes?
*   Make a `.blues` class for `background-color: lightskyblue`
    *   Apply this class to the `ul` to replace its `style=""` attribute
    *   Use `li:nth-child(even)` to set `background-color: deepskyblue;`
    *   Use `li:nth-child(odd)` to set `background-color: peachpuff;`
    *   Add `ul` in front of `li:nth-child(even)` to apply to only unordered lists
    *   Add `ol` in front of `li:nth-child(odd)` to apply to only ordered lists



## Block-level vs. Inline elements

Most HTML elements can be placed into one of two major categories related to
how they share space with their neighbors.


#### Block-level elements

Separated vertically from adjacent elements in the source code.  These take up
the entire width of their container.

*   Examples of block-level elements:
    *   `p`
    *   `h1`
    *   `h2`
    *   `div`
        *   this is a general-purpose block-level element which, by itself, has no appearance



#### Inline elements
Not separated vertically; adjacent inline elements are strung together side-by-side.

*   Examples of inline elements:
    *   `em`
    *   `strong`
    *   `a`
    *   `img`
    *   `span`
        *   this is a general-purpose inline element which, by itself, has no appearance


You are able to visualize the extent of an element by opening the Inspector and
hovering the mouse over elements in the document tree.  Alternatively, you can
enter the Inspector by pressing `Ctrl+Shift+C` to "choose" an element on the
page; its extent will be visualized on the page.

#### Everything else
There are a few HTML elements which do not fit into either of these categories.
Some elements are not visually represented in the body of the document; these
include tags that belong in the `head` of the document:

*   `title`
*   `meta`
*   `link`
*   `style`

There are a few non-visible tags that may also go in the body of the document.
The most common that you will encounter is `script` which is used to contain
JavaScript code.

https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Block_versus_inline_elements


### Practice

*   Use "Pick an element" to distinguish block-level from inline elements in the webpage
*   Change the `span` inside the `h1` into a `div`
    *   How would you explain this change?
*   Wrap the `img` of the local-file anchor in a `div` within its `p`
    *   How would you explain this change?
*   Refresh the page - what happened to your changes?


## The box model

[Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)

The last two properties in the list above control how elements are arranged on
the screen.  Conceptually, each visual element is contained within a
rectangular box.  With the developer tools you can visualize the extent of this
box.

The size of the box depends upon the size of its contents, the thickness of the
*padding* between these contents and the thickness of a border surrounding the
box.  A [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border) is
always present but may not be visible.  The empty space just beyond the borders
of the box is called the *margin*.

When you enter the Inspector (Firefox) or Elements (Chrome) tab, of the developer tools, you'll find a panel which shows all of the CSS rules that apply to the selected element (ordinarily this panel is on the *right* side of the HTML tree).  Here you can discover which rules are being overridden by other rules. You can also change, add, disable, and delete rules on-the-fly.  Like other changes made in the Inspector, these modifications are lost when you refresh the page.


### Practice

*   Add padding, margin, and a border (`4px dotted red`) to an `img`
    *   Make a new CSS rule to do the same thing in the Style Editor
*   Change the colors, etc. of other elements



## What happens when many CSS rules apply to the same element?

https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance

CSS is named for "the cascade algorithm" which dictates the order in which
contradicting styles are applied

The cascade algorithm applies rules in order according to this hierarchy:

0.  **Importance**
1.  **Specificity**
2.  **Source order in the CSS file**

Importance is denoted with the `!important` token beside a rule

Specificity refers to how specific the selector is with regard to an element.
From least specific to most specific:

    Element selector < Class selector < ID selector

Ordinarily the "last one" defined wins - "last one" means last in source code
order... unless a more specific selector is used.  The last, most specific
selector is the true winner:

```
#widget { 
    font-size: bigger; /* This loses */
}

/* then later in the file... */

#widget {  /* ID selector; most specific */
    font-size: biggest; /* this rule is applied */
    color: red;
}

.class { /* this is a class selector, and is less specific than an ID selector */
    font-size: 10px;
    color: green;
}  
h1 { /* this is an element selector, and is less specific than a class selector */
    font-size: 14px;
    color: orange;
}
```

*   Add another `p` rule to bottom of the stylesheet to set `background-color: firebrick`
    *   Reload the page: how do you explain this change?
    *   What does this look like in the Style Editor?
    *   Check and uncheck this property's checkbox to toggle this property
*   Add `!important` after the word `lightgreen` in the topmost `p` rule to override `firebrick`
    *   Reload the page: how do you explain this change?
*   Remove `!important` (it's a hack, after all), and add `"spring"` to some `p`s `class attribute`
    *   Reload the page: how do you explain this change?
*   Add a rule for the selector `#pinkie-pie` at the very top of the stylesheet
    *   Set `id="pinkie-pie"` to one of the .spring `p`'s
    *   Also add `id="pinkie-pie"` to another `p`
        *   Do you think this should this work?  Why or why not?


## Bootstrap CSS

Bootstrap is a CSS library that you can drop into your project and use
immediately.  You can treat it as a better set of style defaults than what your
browser provides and immediately benefit without needing to learn much about it.

For purposes of Assignment 0 you must write *some* CSS manually.  However, you are
welcome to incorporate Bootstrap (or other public stylesheets) into this and
all other assignments.


### How do I get Bootstrap CSS onto my site?

[Start here](https://getbootstrap.com)

The easiest thing to do is to include Bootstrap using a `link` tag using a
Content Delivery Network (CDN) URL.  The servers which make up a CDN are close
to you geographically, meaning that your users will download the content
quickly.  Also, because they are distributed around the world, if one server
goes down another is ready to take its place, meaning that your site is more
likely to look good no matter what the internet is doing.


### Practice

*   Load Bootstrap CSS into `index.html` and refresh the page



## Validating CSS

CSS can be validated with a W3C tool just like HTML files.  Be sure to leave
yourself plenty of time to validate and correct any mistakes found in your
Assignment's CSS.

https://jigsaw.w3.org/css-validator/



### Practice

*   Validate your CSS via copy & paste
*   Validate the Bootstrap CSS via URI
*   Bookmark this page as you will need to validate the stylesheet associated with the assignment


## More CSS Guides

-   [CSS Guides](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
    -   [How CSS works](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)
    -   [CSS syntax](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax)
    -   [Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
        -   [Simple Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors)
        -   [Combinators and multiple selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)
    -   [Values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
    -   [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
    -   [The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
