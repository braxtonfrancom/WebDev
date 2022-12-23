CS2610 - Wednesday, October 19 - Lecture 21 - Module 3

# Topics:
* [Announcements](#announcements)
* [Finish 1st draft of `grades.js`](#finish-1st-draft-of-gradesjs)
* [JavaScript and the Document Object Model](#javascript-and-the-document-object-model)
* [Give `grades.js` a face-lift](#give-gradesjs-a-face-lift)


------------------------------------------------------------
# Announcements

## Free Software and Linux Club

*   **What**  How to get an internship
*   **When**  6:30pm Wednesday, October 19th
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)

Have you ever wondered how to score a killer summer internship, but just don't know where to start? Come join us this Wednesday in ESLC 053 at 6:30 PM to hear from fellow club members who will share their insight from their internship experiences. We'll talk about topics ranging from the interview process, to skills that recruiters look for, to questions that you have for us.


# Action Items

*   Call on 2 designated questioners



# Finish 1st draft of `grades.js`

Let's finish the first draft of this program.  Our goals for this version are to print this information to the console (completed items are ~~struck through~~):

0.  ~~Number of submissions made~~
1.  ~~The maximum score~~
2.  Number of scores that fall into each letter grade
3.  Each individual student's letter grade and score
    *   Students are identified by the order of their submission
    *   e.g. Student #0, Student #1, ...

These features will be helpful:

*   [JavaScript Objects](../JavaScript.md#objects)
*   [Loops and iteration in JavaScript](../JavaScript.md#loops-and-iteration)

As before, the script can be run by loading the file [grades.html](./grades.html) in a browser.

[The 'grades.js' JavaScript program](./grades.js)



# [JavaScript and the Document Object Model](../JavaScript+DOM.md)


[JavaScript-generated Content Demo](./34-content/index.html)

<details>
<summary>Where did all of the words come from?</summary>

From JavaScript code contained in [content.js](./34-content/content.js)

</details>

<details>
<summary>How might we improve the example in `grades.js`?</summary>

By displaying the results on the webpage instead of in the JavaScript console.

</details>


JavaScript was created to solve the problem of creating an interactive experience in the browser.

HTML is not a *programming* language and can't do anything by itself.

JavaScript uses the DOM to provide an interactive user interface.

#### Document Object Model (DOM)
A browser API which connects a web page's content (HTML) to runnable code



# Give `grades.js` a face-lift

Let's improve the UI of [grades.js](./grades.js) by displaying the results on the page instead of the console.



