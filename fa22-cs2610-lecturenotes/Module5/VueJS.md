# The Vue.js Front-end Framework


## Table of Contents

* [Vue.js - The Progressive JavaScript Framework for the front-end](#vue.js-the-progressive-javascript-framework-for-the-front-end)
* [How to "install" Vue into your webpage](#how-to-install-vue-into-your-webpage)
* [Learning Vue.js and troubleshooting your app](#learning-vue.js-and-troubleshooting-your-app)
* [The Vue Instance](#the-vue-instance)
* [Templates](#templates)
* [Vue directives for use in HTML](#vue-directives-for-use-in-html)
* [List Rendering](#list-rendering)
* [Binding HTML attributes](#binding-html-attributes)
* [Class and style bindings](#class-and-style-bindings)
* [Data Binding](#data-binding)
* [Methods](#methods)
* [Event Handlers](#event-handlers)
* [Computed Properties](#computed-properties)
* [Reactivity: How Vue.js tracks changes](#reactivity-how-vuejs-tracks-changes)
* [An aside: Why doing things the Vue.js way saves time in the long-run](#an-aside-why-doing-things-the-vuejs-way-saves-time-in-the-long-run)


## Vue.js - The Progressive JavaScript Framework for the front-end

> Vue (pronounced /vjuː/, like view) is an open-source, progressive framework
> for building user interfaces.  Unlike other monolithic frameworks, Vue is
> designed from the ground up to be incrementally adoptable.

Vue is an alternative to bigger frameworks such as React or Angular.  I chose
it for this class because it is simpler to introduce in a short time frame, and
you don't need a broad foundation in many other concepts to be able to use it.


#### Front-end

Pertaining to the web client


#### Progressive

Use as much or as little as you need right now; you can go deeper later on as needed.


#### Monolithic

Use the entire thing or don't use it at all.  Does not play well with others. 




## [How to "install" Vue into your webpage](https://vuejs.org/guide/quick-start.html#without-build-tools)

To keep things simple we'll link to a copy of Vue.js hosted in the cloud on a Content Delivery Network (CDN).


### Link to the latest version of Vue.js

Use this URL in a `script` element at the top of your webpage.  This can go into the `<head>` of your HTML document:

```html
<script src="https://unpkg.com/vue@next"></script>
```


### Link to a specific version of Vue.js

When you need stability give the CDN a URL containing specific version of Vue.js

```html
<script src="https://unpkg.com/vue@3.2.21"></script>
```



### Serve the `vue.js` script from your project

You can maintain full control over which copy of Vue.js your app uses by
downloading your own copy of the file and serve it yourself.  If you use Vue
with Django this script is placed into your app's `static/` directory.  Use the
`{% static %}` tag to craft the proper URL so that Django can serve it.

Regardless of the method you choose, make sure that you use the **development**
version of Vue.js.  It provides better error messages and is easier to debug.


## Learning Vue.js and troubleshooting your app

The [Vue.js Guide](https://vuejs.org/guide/introduction.html) describes
everything you need to know to complete Assignment #5.  As you learn Vue you
will get stuck several times.  Don't let this discourage you.  This is an
expected part of the learning process!  By working through problems you are
deepening your understanding of Vue as well as developing useful debugging
skills that will serve you throughout your career.  These debugging skills will
be helpful in many other programming environments besides Vue.js.

One thing that I've found to be very helpful in understanding what's going on
with Vue.js is the Vue.js devtools browser plugin.  It is supported for Firefox
and Chrome-based browsers.

Installation instructions are found [here](https://github.com/vuejs/vue-devtools).


## The Vue Instance

The Vue framework operates by associating a Vue object (e.g.  an instance of a
class) with a segment of the DOM.  Collectively, these are called the Vue app.
The Vue instance is created by calling the `createApp()` method of the Vue class.
`createApp()` takes as an argument a JavaScript object which is referred to as
the *configuration object* in the Vue documentation.  The properties of this
object define the behavior of the Vue app.

Once the Vue app is created, it needs to know which portion of the webpage it
is in charge of.  Mark the DOM element that is the "root" of the Vue app with
the HTML `id` attribute.  Then, call the `mount()` method, giving as an
argument a string specifying a CSS selector identifying the app's root element.


```html
<script src="https://unpkg.com/vue@next"></script>

<div id="my-app">
    <h2>This is my Vue App</h2>
    <p>My very first application written with Vue.JS.  My mom says she is very proud of me!</p>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return { };
        },
    });
    
    const vm = app.mount('#my-app');
</script>
```


`app.mount()` returns the app's *root component instance*, which connects the DOM
to the code you write.  In MVC jargon, the root component instance combines the
functionality of the *view* with the *model*; changes this object are
immediately reflected as updates to the screen.  The name of the variable `vm`
reminds us that this object is a combined *ViewModel*.


Other properties are available to further customize the behavior of the Vue instance.

* [The Vue Instance](https://vuejs.org/guide/instance.html)
* [The Root Component](https://vuejs.org/guide/essentials/application.html#the-root-component)
* [Vue.js API documentation](https://vuejs.org/api/)



## Templates

Like templates in Django, dynamic content can be filled-in with code by writing
JavaScript expressions between the delimiters `{{` and `}}`.


```html
<script src="https://unpkg.com/vue@next"></script>
<div id="my-app">
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                title: "This is my Vue App",
                desc: "My very first application written with Vue.JS.  My mom says she is very proud of me!",
            };
        },
    });
    
    const vm = app.mount('#my-app');
</script>
```


The data used for substitution within the delimiters are the properties of the
object returned by the `data()` method.  You can access and change its
properties at any time, even in the REPL.  When you change these properties the
content of the webpage will change before your eyes.  For instance, the title
of the above page within the `<h2>` tag can be changed in the REPL with this
code:

```javascript
>>> vm.title = "Vue is fun and useful"
>>> vm.desc = "This space intentionally left blank"
```

* [Templates](https://vuejs.org/guide/essentials/template-syntax.html)
* [Text Interpolation](https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation)



## Vue directives for use in HTML

The Vue app is able to read and edit the portion of the DOM contained within
the element it is mounted to.  Vue responds to certain HTML attributes it finds
on nodes in this sub-tree of the document.  An important part of understanding
Vue is learning these attributes.

* [Vue.js Guide: Directives](https://vuejs.org/guide/essentials/template-syntax.html#directives)


### Conditional Rendering

* [Vue.js Guide: Conditional Rendering](https://vuejs.org/guide/essentials/conditional.html)

These directives take as their value a JavaScript expression.  The truthiness
of that expression controls whether the element containing the directive is
rendered.

These directives *must* be used together, and in this order.  It is an error to
use `v-else` where it does not immediately follow `v-if` or `v-else-if`.

0. `v-if`
1. `v-else-if`
2. `v-else`

When you render this Vue app, which paragraph will appear on the page?

```html
<script src="https://unpkg.com/vue@next"></script>
<div id="app">
    <h2>{{ title }}</h2>
    <p v-if="sunny">It's a sunny day today!</p>
    <p v-else-if="snowing">It is snowing right now!</p>
    <p v-else-if="raining">It's raining cats and dogs out there!</p>
    <!-- <p>If you uncomment this paragraph you'll get a Vue warning</p> -->
    <p v-else>Welp, I'm not quite sure what it is, but I'm sure it's weather</p>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                title:   "The current weather",
                sunny:   false,
                snowing: true,
                raining: true,
            }
        },
    });

    const vm = app.mount('#app');
</script>
```


You can open the browser's REPL and change which message appears by changing
the value of the named properties of the `vm` constant.

```javascript
>>> vm.sunny = false
>>> vm.snowing = false
```


## List Rendering

* [Vue.js Guide: List rendering](https://vuejs.org/guide/essentials/list.html)

The `v-for` directive repeats a segment of HTML based upon the contents of a
collection.  The value to `v-for` is a JavaScript expression in the form of
`Identifier in Collection`, where `Collection` is the name of a JavaScript
Array in scope to the Vue app.  `Identifier` is a variable name which becomes
bound to each element of `Collection` in turn, for use in template expansion
within the repeated element:

```html
<script src="https://unpkg.com/vue@next"></script>
<div id='app'>
    <h2>A table of elements</h2>
    <ol>
        <li v-for="element in elements">{{element.name}} - {{element.mythology}}</li>
    </ol>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                elements: [
                    { name: 'air', mythology: 'Greek, Captain Planet' },
                    { name: 'fire', mythology: 'Greek, Chinese, Captain  Planet,' },
                    { name: 'water', mythology: 'Greek, Chinese, Captain Planet' },
                    { name: 'earth', mythology: 'Greek, Chinese, Captain Planet' },
                    { name: 'aether', mythology: 'Greek' },
                    { name: 'wood', mythology: 'Chinese' },
                    { name: 'metal', mythology: 'Chinese' },
                    { name: 'heart', mythology: 'Captain Planet' },
                ],
            };
        },
    });

    const vm = app.mount('#app');
</script>
```


Alternatively, the syntax `(Identifier, Index) in Collection` may be used to
enumerate each item in the collection, giving the item as well as its position.
This unordered list provides its own numbers which correspond to each element's position
in its array:

```html
<script src="https://unpkg.com/vue@next"></script>
<div id='app'>
    <h2>A table of elements</h2>
    <ul>
        <li v-for="(element, idx) in elements">#{{idx}}. {{element.name}} - {{element.mythology}}</li>
    </ul>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                elements: [
                    { name: 'air', mythology: 'Greek, Captain Planet' },
                    { name: 'fire', mythology: 'Greek, Chinese, Captain  Planet,' },
                    { name: 'water', mythology: 'Greek, Chinese, Captain Planet' },
                    { name: 'earth', mythology: 'Greek, Chinese, Captain Planet' },
                    { name: 'aether', mythology: 'Greek' },
                    { name: 'wood', mythology: 'Chinese' },
                    { name: 'metal', mythology: 'Chinese' },
                    { name: 'heart', mythology: 'Captain Planet' },
                ],
            };
        },
    });

    const vm = app.mount('#app');
</script>
```


## Binding HTML attributes

Vue can not only supply dynamic content through templates within elements, but it can
also dynamically create and populate attributes on HTML elements.  This is done
not with templates but with the `v-bind` directive.

The syntax is `v-bind:ATTRIBUTE="expression"` where `ATTRIBUTE` is any HTML
attribute of your choosing, and `expression` is a JavaScript expression.

If, for some reason, you wanted to use your API key as the `id` of a `div`, you
could write something like this:

```html
<script src="https://unpkg.com/vue@next"></script>
<div id="app">
    <p v-bind:id="apikey">Bet you can't guess my API key!</p>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                apikey: 'c3VwZXIgc2VjcmV0Cg=='
            }
        },
    });

    const vm = app.mount('#app');
</script>
```


The `div` is rendered by Vue like this:

```html
<div id="app" data-v-app="">
    <p id="c3VwZXIgc2VjcmV0Cg==">Bet you can't guess my API key!</p>
</div>
```


### A shortcut

A common shorthand for attribute bindings that you will see online is to
replace the `v-bind:` with `:`.  For example, `v-bind:id` becomes `:id`.

```html
<script src="https://unpkg.com/vue@next"></script>
<div id="app">
    <p :id="apikey">Bet you can't guess my API key!</p>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                apikey: 'c3VwZXIgc2VjcmV0Cg=='
            }
        },
    });

    const vm = app.mount('#app');
</script>
```



## Class and style bindings

Special faculties are available for binding the `class` and `style` attributes:

* [Vue.js Guide: Class and Style Bindings](https://vuejs.org/guide/essentials/class-and-style.html)

For instance, consider this example which depends upon the simple CSS file that
has been used in code demos throughout the semester (and is present in this
lecture notes directory):


```html
<script src="https://unpkg.com/vue@next"></script>
<link rel="stylesheet" type="text/css" href="style.css">

<div id="app">
    <p class="stuff-box shadowed" :class="{ red: isRed, blue: !isRed }">A {{adjective}} classy paragraph</p>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                isRed: true,
                adjective: 'really',

            }
        },
    });

    const vm = app.mount('#app');
</script>
```

This paragraph element takes on all of the classes hard-coded into the `class`
attribute and one of the classes `red` or `blue` depending upon the truth value
of the `isRed` data property.  When the Vue app is first initialized the `div`
is rendered as:

```html
<div id="app" data-v-app="">
    <p class="stuff-box shadowed red">A really classy paragraph</p>
</div>
```


By toggling the truth value of `vm.isRed` the Browser's REPL you also toggle
the color of the paragraph.

```javascript
>>> vm.isRed = !vm.isRed  // become blue
>>> vm.isRed = !vm.isRed  // back to red
```



## Data Binding

Another special case of attribute bindings is to put Vue data into a
general-purpose attribute on a DOM node.  This lets you use the DOM to store
data in addition to markup.

Making up your own HTML attributes runs the same risks as making up your own
HTML elements: you may accidentally pick the name of an attribute that the
browser already treats specially.  Or, your attributes may work today in HTML5
but will have a special meaning in HTML version 6.

To avoid these issues name your attributes beginning with `data-`.  This
special class of attributes has been set aside for your use as a web developer.
[Browsers promise to never clash with attributes with these names](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*).

> The `data-*` global attributes form a class of attributes called custom data
> attributes, that allow proprietary information to be exchanged between the
> HTML and its DOM representation by scripts.

Additionally, follow these rules:

*   the name must not start with `xml`, whatever case is used for these letters
*   the name must not contain any semicolon `(U+003A)`
*   the name must not contain capital letters.


Binding `data-` attributes in Vue will look like this:

```html
<script src="https://unpkg.com/vue@next"></script>
<div id='app'>
    <div :data-apikey="apikey">
        <p :data-number="number">{{ message }}</p>
    </div>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                apikey: 'c3VwZXIgc2VjcmV0Cg==',
                number: 1337,
                message: "Bet you can't guess my API key!",

            };
        },
    });

    const vm = app.mount('#app');
</script>
```


The resulting DOM elements are rendered as

```html
<div id="app" data-v-app="">
    <div data-apikey="c3VwZXIgc2VjcmV0Cg==">
        <p data-number="1337">Bet you can't guess my API key!</p>
    </div>
</div>
```

The attributes `data-apikey` and `data-number` may be accessed through the DOM
as usual.  For instance,

```javascript
>>> document.querySelector('p').getAttribute('data-number')
"1337"
```

This attribute could be accessed by JavaScript code that runs outside of the Vue object.  Of course, modifying the ViewModel's state automatically changes the DOM:

```javascript
>>> vm.number = 42
```

Results in:

```html
<div id="app" data-v-app="">
    <div data-apikey="c3VwZXIgc2VjcmV0Cg==">
        <p data-number="42">Bet you can't guess my API key!</p>
    </div>
</div>
```



## Methods

The Vue configuration object recognizes a property called `methods` which
contains functions declared within the configuration object.  Functions
declared here are set up by Vue in such a way that `this` refers to the Vue
app's `data` object.  No matter how the method is invoked `this` will always
refer to the data inside the Vue app itself.

This is used to create components which can react to changes in stored data in
more complex ways than just displaying the updated value.  Here is an app which
pluralizes a word in response to the value stored in `counter`:

```html
<script src="https://unpkg.com/vue@next"></script>
<div id='app'>
    <h2>You can count on me!</h2>
    <p>I can count to one {{counter}} time{{pluralize()}}</p>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                counter: 42,
            };
        },

        methods: {
            pluralize() {
                return this.counter == 1 ? '' : 's'
            },
        },
    });

    const vm = app.mount('#app');
</script>
```


When you enter the REPL and change `counter` to `1`:

```javascript
>>> vm.counter = 1
```

The text in the paragraph stays grammatically correct.


## Event Handlers

By now you understand that event handlers (a.k.a. *event listeners*) are
functions of one argument which the browser calls in response to some external
event occurring.  Vue.js is built from the ground-up for interactivity, so it
is only natural to think about how to connect DOM events to a Vue app.  Instead
of diving in to Vanilla.js event handlers, we need to think about how to do
this the Vue way.  To work well with Vue your event handlers must be declared
in a special place.

The reason why event handlers look a bit different in Vue is that the Vue app
presents a bit of a puzzle: variables defined within the `data` property of the
configuration object are safely hidden away inside the Vue app.  How could a
callback function declared *outside* of the Vue configuration object access the
Vue app's internal `data` property?

You *could* assign the Vue app to a global variable and access it that way.
But that would make you feel bad.  Whenever you find yourself in a situation
where you need a global you should say to yourself **There must be a better
way** (I know, I know, this is advice the browser itself doesn't follow... but
you are better than this!).

You may next consider defining a function inside of the config object's `data`
property.  You're getting warmer...

Object-Oriented programming suggests a solution better than using globals
variables: objects possess methods to access private data contained within an
object.  Indeed, the Vue configuration object recognizes a property called
`methods` which contains functions declared within the configuration object.
Functions declared here are set up by Vue in such a way that `this` refers to
the Vue app's `data` object, resulting in a method with full access to the
app's data.

```html
<script src="https://unpkg.com/vue@next"></script>

<div id='app'>
    <h2 v-on:click="annoyUser">You can count on me!</h2>
    <p v-on:click="increment">I've been clicked {{counter}} time{{pluralize()}}</p>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                counter: 0,
            };
        },

        methods: {
            // A method of 0 arguments
            increment() {
                ++this.counter
            },

            pluralize() {
                return this.counter == 1 ? '' : 's';
            },

            annoyUser(event) {
                this.counter = 0;
                alert(`Just kidding, I don't count, I'm just an ${event.originalTarget.nodeName} element!\nClick the paragraph instead.`);
            }
        },
    });

    const vm = app.mount('#app');
</script>
```


Event handlers which call Vue `method`s can update the state of `data` within
the Vue app, which in turn automatically triggers updates to the DOM when data
that a template depends upon is changed.  The result is that very sophisticated
interactive apps can be written with very little code on your part; much of the
heavy lifting is handled for you by the Vue framework.

To connect a method defined in the Vue configuration object's `methods`
property a slightly different syntax is employed.

Compare this ordinary HTML with the equivalent Vue.js app which both use a
callback named `activate`:

```html
<!-- Plain, old HTML -->
<div
    class="cool-button"
    onclick="activate()">
    Click me!
</div>


<!-- HTML within a Vue app -->
<div
    class="cool-button"
    v-on:click="activate">
    Click me!
</div>
```


Instead of plain HTML's `onclick` attribute, Vue uses an attribute beginning
with the name `v-on:` followed by the name of the DOM event.  The name of the
Vue method is supplied but parentheses are *not*!  This is important, because
you are not trying to call the method right now!  Leave the parentheses off and
Vue will replace this attribute with the appropriate call to
`addEventListener()`.


* [Vue.js Event handling](https://vuejs.org/guide/essentials/event-handling.html)


### A shortcut

A common shorthand for event handlers that you will see online is to replace
the `v-on:` with `@`.  For example, `v-on:click` becomes `@click`.

```html
<!-- Vue's event handler shorthand -->
<div
    class="cool-button"
    @click="activate">
    Click me!
</div>
```


## Computed Properties

* [Vue Guide: Computed Properties](https://vuejs.org/guide/essentials/computed.html)

In-template expressions are very convenient, but they are meant for simple
operations.  Putting too much logic in your templates can make them bloated and
hard to maintain.

Create computed properties by adding functions under a sub-object called `computed`.
These functions are called whenever changes to `data` are registered.

```html
<script src="https://unpkg.com/vue@next"></script>
<div id='app'>
    <h2>A secret message:</h2>
    <p>{{reversedMessage}}</p>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                message: 'amanaP :lanac a ,nalp a ,nam A',
            };
        },

        computed: {
            reversedMessage() {
                console.log(`reversedMessage() was called in response to '${this.message}' changing`);
                // `this` points to the vm instance
                return this.message.split('').reverse().join('')
            }
        }
    });

    const vm = app.mount('#app');
</script>
```

You can re-trigger the computed property `reverse` by modifying the property
`message`.  Watch the console for the message so you can see when it is called.

```javascript
>>> vm.message = '?evaC A nI staB batS I naC ,avE';
```


### Computed getters and setters

* [Computed getters and setters](https://vuejs.org/guide/essentials/computed.html#writable-computed)

You may also create getters and setters for properties that let you control how
data is changed.  In this example the data properties `firstName` and
`lastName` are meant to be accessed through the getter/setter `fullName`.  When
used as a setter, `fullName` only allows you to rename this character as "Baba
Yaga".

```html
<script src="https://unpkg.com/vue@next"></script>
<div id='app'>
    <h2>I am called {{fullName}}</h2>
    <div v-if="error" style="color: red">
        <p>I refuse to answer to <em>that</em> weak name</p>
        <p>It does not strike the requisite amount of fear into hearts</p>
    </div>
</div>

<script>
    const app = Vue.createApp({
        data() {
            return {
                firstName: "John",
                lastName: "Wick",
                error: false,
            };
        },

        computed: {
            fullName: {
                // getter
                get() {
                    return this.firstName + ' ' + this.lastName;
                },

                // setter
                set(newValue) {
                    const names = newValue.split(' ');
                    const f = names[0];
                    const l = names[names.length - 1];
                    if (f != "Baba" || l != "Yaga") {
                        this.error = true;
                    }
                    else {
                        this.firstName = f;
                        this.lastName = l;
                        this.error = false;
                    }
                },
            },
        },
    });

    const vm = app.mount('#app');
</script>
```

I hope that nobody tells Keanu that Baba Yaga is an old witch who lives in a
hut that walks on chicken legs...



## Reactivity: How Vue.js tracks changes

If you are experiencing trouble getting Vue to respond to changes in your
`data`, this section is for you!

When you give `Vue.createApp()` a configuration object containing a `data`
property, Vue will convert all properties contained therein into *Watchers*.  A
watcher is an object with getter/setter methods that are automatically used by
JavaScript when you access that data in the normal way.  When you use the
assignment operator `=` on a watcher, its setter is invoked automatically.
This is handy because you don't need to be aware that there is a setter between
you and your data.

In addition to updating your data, this setter method informs the Vue system
that something has changed which causes your template to be re-rendered.

This is explained in much more depth [here](https://vuejs.org/guide/essentials/reactivity-fundamentals.html).


### The most common problem for students on Assignment 5

Many students try to add a new property to the forecast returned from
OpenWeatherMap to track which of the 3 states that forecast is in
*neutral/likely/unlikely*.  However, Vue cannot sense it when you add a new
property to that object and will not detect subsequent changes.

One way to resolve this is to store the state of a forecast in the DOM.  You're
probably already using a CSS class to style the `<div>` according to its
likelihood; you can also look at that same attribute in your JavaScript code to
count the number of *neutral/likely/unlikely* forecasts.

Another solution is to create a parallel data structure within `data` to track
the likelihood of each forecast.  By initializing the array *before* Vue starts
you can store the state of each forecast in a data structure *and* enjoy
reactivity.


```javascript
// I know there are 40 forecasts, so this array is pre-populated with 40 'neutral's
data: {
    states: [ 'neutral', 'neutral', ...],  /* repeated 40 times */
    ...
},

methods: {
    forecastToggle(event) {
        ...

        // Get the index of this <div> from the DOM
        let idx = div.getAttribute('data-idx');
        if (this.states[idx] === 'neutral') {
            this.states[idx] = 'likely';
        }
        else if (this.states[idx] === 'likely') {
            this.states[idx] = 'unlikely';
        }
        else if (this.states[idx] === 'unlikely') {
            this.states[idx] = 'neutral';
        }

        div.setAttribute('class', this.states[idx]);
    }
    ...
},
```


## An aside: Why doing things the Vue.js way saves time in the long-run

Think about the code you wrote for Assignment 4: Worth your Weight in Gold,
especially as regards event handling and updating the DOM.

How many lines of code did you write to add one `<div>` in response to a single
button click?  Now consider how much more complicated Assignment #5 is and
multiply your effort accordingly.  This is particularly difficult code to
write; you know everything about Vanilla JS to do this.  The problem is that
you would end up creating a lot of tedious, repetitive code.  Your biggest
challenge would be keeping everything straight and well-organized.

You are not the only web developer facing this challenge.  This problem has
been solved independently countless times.  Vue.js is one solution that has
been open-sourced and made available to web developers generally.  By standing
on the shoulders of programmers who have gone before you can be more productive
because you can spend your time solving *new* problems that haven't been solved
before.

By having a firm grounding in the fundamentals of Vanilla JS you don't rely on
Vue as a crutch.  You *could* write the app without Vue, though it would be
less convenient.  You have a choice in the matter.  A developer who doesn't
understand the fundamentals can't even begin write an app without their
framework; they are enslaved by their ignorance to a particular technology.
Instead of a convenience it has become their shackles.
