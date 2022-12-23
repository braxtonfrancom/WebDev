CS2610 - Wednesday, October 26 - Lecture 24 - Module 3

# Topics:
* [Announcements](#announcements)
* [Today's In-Person Lecture is Cancelled](#todays-in-person-lecture-is-cancelled)
* [Events and Event-Driven Programming with Callback Functions](#events-and-event-driven-programming-with-callback-functions)
* [List Slider demo](#list-slider-demo)
* [Updating the DOM Interactively](#updating-the-dom-interactively)
* [Miscellaneous tips](#miscellaneous-tips)


------------------------------------------------------------
# Announcements

## Thursday Office Hours Cancelled

*   I'll return for class on Friday.
*   If you have any questions, you can reach out to the TAs, or to me via email
*   Fair warning: I may not be as responsive as usual


## Lucid 10th annual Programming Competition

*   **What**  Compete virtually against students from universities across the U.S. for a chance to win graet prizes.  It's always a good time - you won't want to miss it!
*   **When**  9am-2pm Saturday, October 29th
*   **Where** https://lucid.co/programming-competition

![02-lucid.png](./02-lucid.png)



# Today's In-Person Lecture is Cancelled

Instead, watch the [videos on Canvas](https://usu.instructure.com/courses/706336/pages/dom-events-and-event-driven-programming-in-javascript) and follow along with the code demos in this directory.  Clone (or pull) the lecture notes repository onto your computer so you have the code at your fingertips.

*   Clone this repository:
    *   ```
        $ git clone https://gitlab.cs.usu.edu/erik.falor/fa22-cs2610-lecturenotes
        ```
*   Or, pull the latest changes (run this command from within the lecture notes repo):
    *   ```
        $ git restore :/
        $ git pull origin master
        ```
*   When you are finished working with the demo code, you can restore it to its original state with this command:
    *   ```
        $ git restore :/
        ```



# [Events and Event-Driven Programming with Callback Functions](../EventDrivenJavaScript.md#callback-functions)

This document contains a lot of good information for your use on Assignment #3.
Keep it handy as you work on the JS Calculator.

There are two ways to configure callback functions:

0.  Using HTML `on*` [attributes](../EventDrivenJavaScript.md#configuring-callback-functions-in-html)
1.  In JavaScript with the `addEventListener()` [method](../EventDrivenJavaScript.md#configuring-callback-functions-in-javascript)

Let's take a [close look](./60-u-cant-touch-this/index.html) at how callback functions and the DOM work together.



# [List Slider demo](./62-list-slider/index.html)

This demo is another example of an event-driven user interface in HTML+JavaScript.


To make this page work we must learn the [Events which DOM elements may respond to](../EventDrivenJavaScript.md#events-which-dom-elements-may-respond-to)


I hope this brief list of [Event Hints](../EventDrivenJavaScript.md#event-hints) will save you some grief as you work on the assignment.



# [Updating the DOM Interactively](../EventDrivenJavaScript.md)

## Bonus challenge!

*We didn't get to this demo in class, but if you want to take a crack at it, post your code to Piazza*

See the [interact](./64-interact/index.html) demo for an example of how to modify the DOM of a
document in response to user input.


Implement the behavior for the bottom two buttons `Copy` and `Move` and post your solutions to a thread on Piazza (first student to create the thread gets 10 participation points).

We'll discuss and judge your submissions on Friday.



# [Miscellaneous tips](../JavaScript.md#miscellaneous-tips)

Here I put into writing a few tidbits that you may have seen me use along the
way.  I hope these tips save you a few hours of trouble.



