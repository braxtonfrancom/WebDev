CS2610 - Wednesday, September 28 - Lecture 13 - Module 2

# Topics:
* [Announcements](#announcements)
* [POSTing data to a server (continued)](#posting-data-to-a-server-continued)
* [Introducing Assignment #2: Dynamic Django Blog](#introducing-assignment-2-dynamic-django-blog)
* [What is an Application Framework](#what-is-an-application-framework)
* [What does Django actually do?](#what-does-django-actually-do)
* [Installing Django with `pip`](#installing-django-with-pip)
* [Checking your version of Django](#checking-your-version-of-django)
* [Start on the Django Tutorial](#start-on-the-django-tutorial)


------------------------------------------------------------
# Announcements


## Free Software and Linux Club

*   **What**  Pick Your Side in the Holy Wars!
*   **When**  6:30pm Wednesday, September 28th
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)

You're either a pious saint in the Church of Vi, or an unholy apostate in the Cult of Emacs.

Unfortunately, not everyone has yet decided which holy text editor to worship.  At our next meeting you can practice the doctrine and teachings of each and decide which is more true for you.

Just don't bring Visual Studio - you will be excommunicated.


## STEM Fair Tomorrow

*   **What**  USU Fall 2022 STEM Fair
*   **When**  3:00-7:00pm Thursday, September 29th
*   **Where** TSC Ballroom

We have 86 companies and nearly 300 recruiters coming to campus for this event. Here are some quick numbers:

*   52 are seeking *Engineering* students and 40 are seeking students from the *Sciences*
    *   *(Therefore 6 overlap and are seeking both)*
*   83 of them are hiring *Full-Time* employees
*   60 are hiring *Interns*
*   And 27 are hiring for *Part-Time* jobs

Career Fairs are one of the most effective ways for students to connect with industry and secure *professional opportunities* ahead of graduation. All are highly encouraged to attend! There will also be some in-person recruiting events outside of the Fair that students can take advantage of.


# Action Items

*   Assignment 1 is due **tonight** at midnight
    *   Be sure to carefully follow the instructions in [How To Submit Assignments](../../How_To_Submit_Assignments.md)
* Call on 2 designated questioners



# POSTing data to a server (continued)

Let's finish our work on [../forms_server_demo/server.py](../forms_server_demo/server.py)
to accept requests sent using the `POST` HTTP method.  This version of the
server can receive and process users' input.

This will be achieved by (~~struck-through~~ items were completed in the previous lecture)

0.  ~~Edit `index.html` to include a link to `search.html`~~
1.  ~~Update the contents of `search.html` so that it can make requests to other servers~~
2.  ~~Defining the `do_POST()` method in `server.py`~~
    *   Inspect the `Content-Length` header when POST requests cause the server library to call the `do_POST()` method
    *   Read & print the provided data from the `self.rfile` file object
3.  As an easter-egg, if the user inputs the string `"home"` into the input box with `name=Nancy`, redirect the browser back to the path `/`
    *   Otherwise, redirect back to `/search.html`, as usual



# Introducing Assignment #2: Dynamic Django Blog

As I show you this assignment, briefly answer these prompts on your mudcard:

*   Briefly describe what the outcome of this assignment will look like
*   Explain how you will approach each of the three big sub-tasks within this assignment:
    *   HTML `<form>` that will POST comments into the database
    *   The template system, including the *tags* and *filters* you will need to use
    *   Reading to and writing from the database
*   What questions should you keep in mind as you work through the **Django tutorial**?



# [What is an Application Framework](../Django.md#what-is-an-application-framework)

An application framework is software that provides a fundamental structure to support the development of applications for a specific environment.



# [What does Django actually do?](../Django.md#what-does-django-actually-do)

Django can be use to create a "real" web server.  But what do "real" web servers actually do?



# [Installing Django with `pip`](../Django.md#installing-django-with-pip)

Django is an ordinary Python package. The easiest way to install it is to use Python's built-in package manager `pip`.



# [Checking your version of Django](../Django.md#checking-your-version-of-django)

You can quickly check the version of Django that is installed on your computer with one command.



# Start on the Django Tutorial

Once you've gotten to this point, you should begin working on [The Official Django Tutorial](../Django.md#the-official-django-tutorial)

This is the reason I have given you a few extra days on this assignment.

The Django tutorial walks you through the creation of a Polls app.  Nearly everything that you will need to know to complete the blog is learned through this tutorial.  Consider the tutorial to be **required reading** and the polls app to be part of this **assignment**.  I don't directly grade your polls app, but the quality of your blog app will reflect the amount of effort you put into doing this.



