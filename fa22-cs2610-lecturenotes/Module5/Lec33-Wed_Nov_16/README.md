CS2610 - Wednesday, November 16 - Lecture 33 - Module 5

# Topics:
* [Announcements](#announcements)
* [Introducing the Vue.js Front-end Framework (continued)](#introducing-the-vuejs-front-end-framework-continued)
* [Use Vue.js to create a dynamically-generated TODO list](#use-vuejs-to-create-a-dynamically-generated-todo-list)
* [List Rendering](#list-rendering)
* [Binding HTML attributes](#binding-html-attributes)
* [Event Handlers](#event-handlers)
* [Class and style bindings](#class-and-style-bindings)
* [Data Binding](#data-binding)


------------------------------------------------------------
# Announcements

## Free Software and Linux Club

*   **What**  The Secure Shell (SSH)
*   **When**  6:30pm Wednesday, November 16th
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)

Tonight at Linux Club we'll be doing our semiannual presentation about SSH, one of the most powerful tools at your disposal as a computer user. SSH, the secure shell, is a tool that allows you to log into computers anywhere in the world from the comfort of your own desktop. 


## Lucid Software Technical Challenge Workshop

*   **What**  Learn how to ace the technical questions in your job interview!
*   **When**  5:00 - 6:30pm Thursday, November 17th
*   **Where** Life Science Building (LSB) room 231
    *   Free Pizza
    *   Industry Insight
    *   Technical interview practice


## AIS Cybersecurity Challenge

*   **What**  USU Cybersecurity Competition
*   **When**  Kickoff is 7pm Thursday, November 17th
    *   Awards ceremony at 5pm Friday, November 18th
*   **Where** [Discord](https://discord.gg/JsA7e4BqVj)



# Action Items

*   Call on 2 designated questioners



# [Introducing the Vue.js Front-end Framework (continued)](../VueJS.md)


Last time we covered the ~~struck-out~~ topics.

Today we'll look at:

* ~~[Vue.js - The Progressive JavaScript Framework for the front-end](../VueJS.md#vue.js-the-progressive-javascript-framework-for-the-front-end)~~
* ~~[How to "install" Vue into your webpage](../VueJS.md#how-to-install-vue-into-your-webpage)~~
* ~~[Learning Vue.js and troubleshooting your app](../VueJS.md#learning-vue.js-and-troubleshooting-your-app)~~
* ~~[The Vue Instance](../VueJS.md#the-vue-instance)~~
* ~~[Templates](../VueJS.md#templates)~~
* ~~[Vue directives for use in HTML](../VueJS.md#vue-directives-for-use-in-html)~~
* [List Rendering](../VueJS.md#list-rendering)
* [Binding HTML attributes](../VueJS.md#binding-html-attributes)
* [Class and style bindings](../VueJS.md#class-and-style-bindings)
* [Data Binding](../VueJS.md#data-binding)
* [Methods](../VueJS.md#methods)
* [Event Handlers](../VueJS.md#event-handlers)
* [Computed Properties](../VueJS.md#computed-properties)
* [Reactivity: How Vue.js tracks changes](../VueJS.md#reactivity-how-vuejs-tracks-changes)
* [An aside: Why doing things the Vue.js way saves time in the long-run](../VueJS.md#an-aside-why-doing-things-the-vuejs-way-saves-time-in-the-long-run)



# Use Vue.js to create a dynamically-generated TODO list

Let's use what we know about Vue to build a simple TODO list app.

Follow along with [my demo app](./todo.html)


## Mud card activity

Jot down any questions you have for me about what you see today on your mud card.



# [List Rendering](../VueJS.md#list-rendering)

The `v-for` directive repeats a segment of HTML based upon the contents of a collection.  



# [Binding HTML attributes](../VueJS.md#binding-html-attributes)

Vue can not only supply dynamic content through templates within elements, but
it can also dynamically create and populate attributes on HTML elements.  This
is done not with templates, but with the `v-bind` directive.



# [Event Handlers](../VueJS.md#event-handlers)

Make our TODO app respond to clicks by changing the state (and style) of our TODO list items.



# [Class and style bindings](../VueJS.md#class-and-style-bindings)

Special faculties are available for binding the `class` and `style` attributes.

We can apply these techniques to give the TODO list app some dynamic style.

Use the JS Console to change the state of each TODO list item and watch their style change right before your eyes.



# [Data Binding](../VueJS.md#data-binding)

Another special case of attribute bindings is to put Vue data into a
general-purpose attribute on a DOM node.  This lets you use the DOM to store
data in addition to markup.



