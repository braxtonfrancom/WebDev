CS2610 - Monday, September 12 - Lecture 06 - Module 1

# Topics:
* [Announcements](#announcements)
* [Block-level vs. Inline elements](#block-level-vs-inline-elements)
* [The Box Model](#the-box-model)
* [Validating CSS](#validating-css)
* [Bootstrap CSS](#bootstrap-css)
* [Create your own protocol](#create-your-own-protocol)


------------------------------------------------------------
# Announcements

*   Reminder: Assignment #0 is due **Wednesday, September 14th**
*   Get Away Special (GAS) Opening Social
    *   **When**  5:30pm Monday, September 12th
    *   **Where** ENGR 201
*   CyberSentinel Opening Social 
    * **When:**  Wednesday, September 14 at 7:00 p.m.
    * **Where:** Huntsman Hall first floor area


# Action Items

## Call on 2 designated questioners



# [Block-level vs. Inline elements](../../Module0/CSS.md#block-level-vs-inline-elements)

Most HTML elements can be placed into one of two major categories related to
how they share space with their neighbors.



# [The Box Model](../../Module0/CSS.md#the-box-model)

Conceptually, each visual element is contained within a rectangular box.
With the developer tools you can visualize the extent of this box.



# [Validating CSS](../CSS.md#validating-css)

CSS can be validated with a W3C tool just like HTML files.  Be sure to leave
yourself plenty of time to validate and correct any mistakes found in your
Assignment's CSS.

https://jigsaw.w3.org/css-validator/



# [Bootstrap CSS](../CSS.md#bootstrap-css)

Bootstrap is a CSS library that you can drop into your project and use
immediately.  You can treat it as a better set of style defaults than what your
browser provides and immediately benefit without needing to learn much about it.

You may use Bootstrap (or any other pre-made CSS file) on Assignment #0 so long
as you also make use of the CSS properties & selectors that are in the required
list.



# Create your own protocol

First, some definitions:

#### 0. Protocol
A system of rules which define how data is exchanged between systems
Also defines the format of the data

What to say, and when you may say it

#### 1. Server
Exists to provide services to other users/systems

This is the **back-end**

#### 2. Client (a.k.a. User Agent)
Makes requests of servers to provide functionality to their users

This is the **front-end**


## The activity

For the time being I want you to forget everything you may already know about HTTP.

Your team is tasked with devising a language for two computers to in order to communicate with each other.  One of the computers will play the role of a `server`, which lives to fulfill the wishes of its client.  The other computer will be the `client` which will ask questions and make requests of its server.

To keep things simple, we will follow these assumptions:

*   Each interaction will begin with the *client's* request.
*   Each interaction will end with the *server's* response.
*   The client never becomes a server, nor will the server ever take on the role of a client.
*   If a problem arises with a request, the server will respond with an indication of an error, ending this interaction. The client may then initiate a new interaction.


### If you are present today in class...

...answer these questions on your mud card:

+   What are the *nouns* in your language?
+   What are the *verbs* in your language?
+   What concepts do you envision to be the most difficult to exchange information about?
+   What concepts will your language be best suited to facilitate communication?

### If you are watching the recording of this lecture...

...post your responses on Piazza in the thread titled **[Participation] Create your own protocol**

*Your responses are accepted until 11:59 pm Sunday, January 30th*



