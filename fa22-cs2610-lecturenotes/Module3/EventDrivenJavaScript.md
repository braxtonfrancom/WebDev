# DOM Events and Event-Driven Programming in JavaScript

[MDN Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

Elements in the DOM may respond to some sort of interaction by calling a
JavaScript function that was specified ahead of time.  This function is known
as a "callback".  To write an event-driven user interface in JavaScript
essentially boils down to creating callbacks and attaching them to elements in
the DOM.  Callbacks can be associated with elements in the DOM either through
an attribute in an HTML file or by assigning functions to Node properties in
JavaScript code.


## Table of Contents
* [Callback Functions](#callback-functions)
* [Configuring callback functions in HTML](#configuring-callback-functions-in-html)
* [Configuring callback functions in JavaScript](#configuring-callback-functions-in-javascript)
* [Events which DOM elements may respond to](#events-which-dom-elements-may-respond-to)
* [Event Hints](#event-hints)


## Callback Functions

#### Callback
A function defined to be called automatically by the runtime environment (read:
browser) at some future point to perform an action in response to an external
event.

*   Callback functions in JavaScript that are used in conjunction with Events
    are also known as *Event Listeners*.
*   In other programming environments these may be called *Event Handlers* or
    *Hook functions*

For instance, suppose you would like your webpage to immediately change its DOM
in response to a user moving a slider input widget.

While you're writing the code you can't know _when_ the slider will be moved by
the user; all you can know is that it will happen some time after the page
loads.  It's impossible to write imperative, sequential code that will update
the page at just the right moment since you can't predict when that moment will
be.  Instead, you arrange for the browser to call a JavaScript function for you
when the time is right.

This is a long way of saying that even though you can write a callback
function, you *do not* write the line of code that will ultimately call it.  

Since you don't get to write that call, you don't pass the parameters to your
callback function.  Because you aren't passing parameters to this function,
does it get any parameters at all?

It turns out that the browser does pass **one** argument to the callback, an
object which conforms to the
[Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) interface.

Therefore, your callback function must be written to accept a single argument,
and that this argument will be contain all relevant information about the
user's interaction as collected by the browser.



## Configuring callback functions in HTML

HTML elements can take an attribute corresponding to the type of event you want
to give behavior to.  The name of the attribute is the name of an event
prefixed with "on" (`onclick`, `onchange`, `onhover`, `oninput`, etc.; a longer
list of possible events is given in a later section of this document).

The string content of the `on*` attribute is wrapped inside of a function for
you by the browser.  To connect your callback function to this element simply
write a snippet of JavaScript code within the quote marks that calls your
function.  Event handling functions are passed an object that represents the
event itself.  How do you pass this value into your function?

It turns out that the function that "wraps" your snippet of JavaScript defines
some useful
[local variables](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers#Event_handlers_parameters_this_binding_and_the_return_value)

*   `event` - the Event object that was passed by the browser to the wrapper
    function
*   `this` - set to the DOM object on which the event handler attribute was
    defined


### The `event` variable

If your callback is written to expect an `Event` object instead of a reference
to a DOM element you can use the identifier `event`.

*   The `Event` object contains a property called `target` which resolves to the DOM element on which the event was triggered
*   This object contains lots of other informative properties, such as
    *   `button`, from which you can know *which* mouse button was clicked
    *   `altKey`, a boolean which is true if the `Alt` key was held down while the mouse was clicked
    *   `ctrlKey`, idem. but for `Control`
    *   `shiftKey`, idem. but for `Shift`
    *   `currentTarget` which represents the DOM node related to the original `target` that is now handling the event

```html
<script type="text/javascript">
    function divClickEvent(event) {
        if (event.currentTarget === event.target)
            alert(`The <${event.currentTarget.localName}> was touched by button ${event.button}!`);
        else
            alert(`The <${event.currentTarget.localName}> was touched by button ${event.button}, all because of <${event.target.localName}>!`);
    }
</script>

<div id="clicky" onclick="divClickEvent(event)" class="hello-world">
    <h2 onclick="divClickEvent(event)">U can't touch this!</h2>
    <ul onclick="divClickEvent(event)">
        <li onclick="divClickEvent(event)">My, my, my, my</li>
        <li onclick="divClickEvent(event)">Music hits me so hard</li>
        <li onclick="divClickEvent(event)">(That it) makes me say "Oh, my Lord:</li>
        <li onclick="divClickEvent(event)">Thank you for blessing me</li>
        <li onclick="divClickEvent(event)">With a mind to rhyme and two hyped feet".</li>
        <li onclick="divClickEvent(event)">It feels good when you know you're down,</li>
        <li onclick="divClickEvent(event)">A superdope homeboy from the Oaktown.</li>
        <li onclick="divClickEvent(event)">And I'm known as such.</li>
        <li onclick="divClickEvent(event)">And this is a beat, uh, you can't touch.</li>
        <li onclick="divClickEvent(event)">I told you, homeboy: Can't touch this.</li>
        <li onclick="divClickEvent(event)">Yeah, that's how we livin', and ya know: Can't touch this.</li>
        <li onclick="divClickEvent(event)">Look in my eyes, man: Can't touch this.</li>
        <li onclick="divClickEvent(event)">Yo! Let me bust the funky lyrics.</li>
    </ul>
</div>
```

#### Bubbling and Capturing: an aside

When you click on a child node, any of its ancestors can also respond to this click event provided they have an event listener registered

*   Clicking on a child is the same as clicking on all of its ancestors
    *   This is actually true for *most* UI events, but there are a few exceptions (e.g. hovering the mouse is one)
*   Typically, the event handlers are called in order from *child* to *parent*
    *   This order is called "bubbling" because the events "bubble up" to the top of the HTML tree
    *   Now you know that the DOM is an upside-down tree!
*   There is a way to reverse this so that event handlers are called in the opposite order, but it's not a very common thing to do
    *   It's called *capturing*, and if you're interested read this article [Bubbling and capturing](https://javascript.info/bubbling-and-capturing)


### The `this` argument

Within the snippet of JavaScript code embedded in the HTML attribute
the identifier `this` to refers to the DOM element which is experiencing the
event.

This example is functionally equivalent to the example above:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>U can't touch these DOM elements!</title>
        <script type="text/javascript">
            function divClick(domElement) {
                alert(`The <${domElement.localName}> says it's Hammer Time!`);
            }
        </script>
    </head>
    <body>
        <div id="clicky" onclick="divClick(this)" class="hello-world">
            <h2 onclick="divClick(this)">U can't touch this!</h2>
            <ul onclick="divClick(this)">
                <li onclick="divClick(this)">My, my, my, my</li>
                <li onclick="divClick(this)">Music hits me so hard</li>
                <li onclick="divClick(this)">(That it) makes me say "Oh, my Lord:</li>
                <li onclick="divClick(this)">Thank you for blessing me</li>
                <li onclick="divClick(this)">With a mind to rhyme and two hyped feet".</li>
                <li onclick="divClick(this)">It feels good when you know you're down,</li>
                <li onclick="divClick(this)">A superdope homeboy from the Oaktown.</li>
                <li onclick="divClick(this)">And I'm known as such.</li>
                <li onclick="divClick(this)">And this is a beat, uh, you can't touch.</li>
                <li onclick="divClick(this)">I told you, homeboy: Can't touch this.</li>
                <li onclick="divClick(this)">Yeah, that's how we livin', and ya know: Can't touch this.</li>
                <li onclick="divClick(this)">Look in my eyes, man: Can't touch this.</li>
                <li onclick="divClick(this)">Yo! Let me bust the funky lyrics.</li>
            </ul>
        </div>
    </body>
</html>
```



## Configuring callback functions in JavaScript

There are two ways to associate a callback with an event in JavaScript.


### HTML Event Handler Attributes

DOM elements have properties named to match the equivalent HTML attributes
which can be assigned a callback function.

**IMPORTANT** Unlike the equivalent HTML attributes, **do not** assign a
string!  You must assign a JavaScript function!


```javascript
var helloDiv = document.querySelector('div.hello-world');

helloDiv.onclick = function (event) { alert('Hello Clicky World!') };
helloDiv.onmouseover = function (event) { alert('Hello Hovering World!') };
```

You may assign one callback function per event this way.


### The `.addEventListener(*event*, *callback*, *useCapture*)` method

*   [MDN: `addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

Assigning callbacks to an element's `on*` properties is discouraged in favor of
using the `.addEventListener()` method.  One reason `.addEventListener()` is
preferred because *multiple* callbacks can be assigned to the same DOM element.
In other words, `.addEventListener()` can do everything that the `.on*`
properties can do, and more.

```javascript
// I am sorry, this is a very annoying demo
var helloDiv = document.querySelector('div.hello-world');

for (let i = 0; i < 10; ++i) {
    helloDiv.addEventListener('click', function (event) {
        console.log(`Hello Clicky World #${i}!`);
        alert(`Hello Clicky World #${i}!`);
    });
}

for (let i = 0; i < 10; ++i) {
    helloDiv.addEventListener('mouseover', function (event) {
        console.log(`Hello Hovering World #${i}!`);
        alert(`Hello Hovering World #${i}!`);
    });
}
```

The other advantage of this approach is that event listeners can be removed
with the `.removeEventListener(*type*, *listener*)` method.  However, you must
have first stored the callback function in a variable to do this.


#### Use capturing instead of bubbling

The 3rd argument, `useCapture`, is optional and defaults to `false`.  Passing
`true` is how you can reverse the *bubbling* event resolution order.

Remember, this is *only* relevant when

*   Multiple nodes along the same branch of the DOM need to handle the same event
*   **AND** it matters which order the callbacks are invoked

I don't expect you to use this on the assignment: I present it only for completeness' sake.



#### `.addEventListener()` examples on MDN

These examples are fairly straightforward.  Copy the code into your own HTML
document and experiment away:

*   [MDN Example: click event](https://developer.mozilla.org/en-US/docs/Web/Events/click#Example)
*   [MDN Example: change event](https://developer.mozilla.org/en-US/docs/Web/Events/change#Examples_for_user_input)




## Events which DOM elements may respond to

Some DOM elements are designed for user interaction and are natural launching
points for callback functions. Such elements include `<input>`, `<button>`, and
`<textarea>`.

*   [MDN Button Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)
*   [MDN Checkbox Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
*   [MDN Color Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)
*   [MDN Number Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)
*   [MDN Range Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
*   [MDN TextArea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

However, _any_ visible DOM element can be made to respond to user interaction.
For example, you may create your own custom buttons from `<div>` elements.

There are also _many_ other events besides those for user interaction. The
sheer number of these can be overwhelming. For our purposes, in the following
resource you will want to scroll down on the left sidebar and expand the node
labeled "HTML DOM Events" to find the list of events you may use in the next
few assignments.


### Selected events

These events pertain to user interface activities.  This is a very incomplete
list: there are many more events than these that can occur under all kinds of
circumstances.

*   `focus` - An element has received focus.
*   `blur` - An element has lost focus (blur is the opposite of focus for cameras, so why not here?).
*   `change` - An input element has had its value changed and locked-in by the user (e.g. by pressing Enter).
*   `input` - An input element has had its value changed, but not necessarily committed.
*   `click` - Any mouse button has been pressed *and* released.  Soon this will respond only to the primary mouse button
*   `auxclick` - Non-primary mouse button has been pressed *and* released.
*   `dblclick` - Any mouse button has been quickly clicked twice.
*   `mouseover` - Mouse cursor has moved over an element.
*   `wheel` - Mouse wheel is rotated while cursor is over an element.
*   `keydown` - Any key is pressed.
*   `keypress` - Any key besids Shift, Fn, CapsLock is in pressed position.
*   `keyup` - Any key is released.


### Further reading

*   [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)
*   [Mouse events on MDN](https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events)



## Event Hints

*   Buttons within a `<form>` element default to behaving as a **Submit**
    button.  When such buttons are clicked the page will reload.  To cause a
    `<button>` within a `<form>` to run a JavaScript expression *without*
    reloading the page, give the `type` attribute the value of `button`:
    `<button type="button" onclick="doSomething()>`
*   Any DOM element may have an `onclick` attribute; this is not just
    restricted to buttons and other `<input>` elements.  The value of which the
    `onclick` attribute interpreted to be a JavaScript expression which is
    "wrapped" within a function by the Browser.
*   Within the JavaScript expression in an `onclick` attribute, the keyword
    `this` refers to the DOM element the `onclick` attribute belongs to.
*   The value of an `<input>` element can be retrieved in JavaScript through
    its `.value` property.
*   Use `document.querySelector()` to locate `<input>` elements in the DOM.  If
    there is a label associated with them, they will already have an ID
    attribute.
