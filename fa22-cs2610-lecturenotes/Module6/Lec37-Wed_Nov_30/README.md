CS2610 - Wednesday, November 30 - Lecture 37 - Module 6

# Topics:
* [Announcements](#announcements)
* [Assignment 6 - Hack the Planet](#assignment-6-hack-the-planet)
* [How do I get started in cybersecurity?](#how-do-i-get-started-in-cybersecurity)
* [OWASP Top Ten Project](#owasp-top-ten-project)
* [Learning XSS with a pretend webapp](#learning-xss-with-a-pretend-webapp)
* [Do try this at home (and hopefully at your job!)](#do-try-this-at-home-and-hopefully-at-your-job)


------------------------------------------------------------
# Announcements

## Free Software and Linux Club

*   **What**  LISP - the reason your programming language has any redeeming qualities at all
*   **When**  6:30pm Wednesday, November 30th
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)

If you're interested in functional programming, this is where it all started $`2^{6}`$ years ago! Come check it out in ESLC 053 at 6:30PM Wednesday evening, or attend virtually on Zoom. 


## DC435 Meeting this Thursday

*   **What** PetitPotam by @Sheeprock
    *   PetitPotam is a PoC tool to coerce Windows hosts to authenticate to other machines via MS-EFSRPC EfsRpcOpenFileRaw or other functions :)
*   **When**  Thursday, December 1st
    *   Doors open @ 6:30pm
    *   Presentation begins @ 7:00pm 
*   **Where** Bridgerland Technical College, 1301 North 600 West in Logan, room 840

DC435 is a Defcon group of people in Cache Valley, UT who are passionate about information security.  It is made up of students, professionals, researchers, and hobbyists that meet and discuss, learn, and interact with like minded people.

# Action Items

*   Call on 2 designated questioners



# Assignment 6 - Hack the Planet!

*   Create an account on the [CTF server](http://aggiectf.gq) today!
    *   When it asks for an **email address**, use your @usu.edu address
    *   Give us your **real name** so we can grade your submission
    *   You can pick whichever *username* you like; that's your login ID
*   There are **achievement badges** to earn
    *   They don't affect your score, but they are **fun**
    *   You should **brag about them** on Discord
*   **Don't ask** me or the TA's for a hint
    *   I already wrote up all of my **hints on Canvas**
    *   You won't get that **1337 h4X0r** feeling if we spoil it for you
    *   Think **outside** the box
    *   You'll figure it out eventually; start early and have a little **faith** in yourself!


## Note the due date of this Assignment!

The due date for Assignment 6 is a little different from other assignments.

**11:59pm Sunday, December 11th**

*   This is the latest time I can possibly have an assignment come due
*   The CTF server will lock itself right at midnight, so make sure you have
    completed the challenges before then!
*   This is an especially bad assignment to **procrastinate**.
    *   But if you work on it a little bit every day it is a lot of **fun**!
    *   You **will get stuck**; when that happens, review the *Hints* section of the assignment on Canvas



# [How do I get started in cybersecurity?](../CyberSec-Getting_Started.md)

The USA is #1... at being the target of cyber attacks.  Both private companies and all levels of government are in dire need of cybersecurity professionals.  If you have even a *slight* interest in security they are **very** interested in hiring you.

Do you have what it takes to enter an exciting and important job field?

*(That was a rhetorical question - of course you do!)*



# OWASP Top Ten Project

The **OWASP Top 10** list is based on data submissions from firms that
specialize in application security and an industry survey.  This data spans
vulnerabilities gathered from hundreds of organizations and over 100,000
real-world applications and APIs.  The Top 10 items are selected and
prioritized according to this prevalence data, in combination with consensus
estimates of exploitability, detectability, and impact.

A primary aim of the OWASP Top 10 is to educate developers, designers,
architects, managers, and organizations about the consequences of the most
common and most important web application security weaknesses. The Top 10
provides basic techniques to protect against these high risk problem areas, and
provides guidance on where to go from here.

* [OWASP Top Ten](https://owasp.org/www-project-top-ten/)


The #1 exploit from 2007-2021 has been injection attacks (beginning in 2021
injections are #3).  Today you'll see how to inject malicious JavaScript code
into somebody else's webpage.


#### Cross-Site Scripting (XSS)
A vulnerability that permits an attacker to inject JavaScript code into the
contents of a website not under the attacker's control.  When other users visit
this site their browsers now run the attacker's code.

*   A better name for this exploit would have been "JavaScript Injection".
*   This specific type of injection attack was #7 on the 2017 OWASP Top 10 list.
    *   Starting in 2021 it is combined with other injection attacks and *moved
        up to the #3 spot*.


#### Reflected Cross-Site Scripting
Idem, but the embedded JavaScript code is delivered via a specially-crafted
URL.  This attack relies on you getting a victim to click on a link which
causes either the server or the browser to do something risky.

*   It is *reflected* because the malicious URL lives on *another* server,
    bringing a third-party into the equation.
    1.  You are the 1st party
    2.  The server under attack is the 2nd party
    3.  The server hosting the malicious URL is the 3rd party
*   Clicking the link on the 3rd-party server "reflects" the attack off their
    server onto the target



# Learning XSS with a pretend webapp

There are lots of excellent web-based resources to learn how to do code
injections.  I like Google's Gruyere Codelab because it's simple, Open Source,
and includes excellent documentation to help you come up to speed quickly.

Visit [Gruyere](https://google-gruyere.appspot.com/) and set up our own little
sandboxed app.  Follow along with me and try these attacks for yourself.


## Let's see if we can inject these JavaScript commands into Google Gruyere

```javascript
// Steal the user's cookies
alert(document.cookie)

// Annoy the user
history.back()

// A good ol' RickRoll
window.open("https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.ogg")
window.open('https://www.dailymotion.com/embed/video/x6b3kz?autoplay=1')
```


# Cross Site Scripting (XSS)

> Cross-site scripting (XSS) is a vulnerability that permits an attacker to inject code (typically HTML or JavaScript) into contents of a website not under the attacker's control. When a victim views such a page, the injected code executes in the victim's browser. Thus, the attacker has bypassed the browser's same origin policy and can steal victim's private information associated with the website in question.
>
> [Gruyere on XSS](https://google-gruyere.appspot.com/part2#2__cross_site_scripting)



## Stored XSS

> In a stored XSS attack, the attacker stores the attack in the application (e.g., in a snippet) and the victim triggers the attack by browsing to a page on the server that renders the attack, by not properly escaping or sanitizing the stored data.

This exploit is to put a `script` tag on a page such that other users visiting
the site will run our code.  Gruyere lets users post "snippets" with support
for "limited HTML".  Let's find out what they mean by "*limited*".

### Stored XSS in a Snippet

+   "Sign up" for a new account
+   "New Snippet"
+   Input this text into the `textarea`:
    ```
    <a onmouseover="alert(document.cookie)" href="#">Click me to win</a>
    ```

### Remediation

*   Do **not** trust your users.
*   Sanitize *all* user input.
*   Don't allow users to input raw HTML.


## Stored XSS in an HTML attribute

Gruyere lets users customize their profile by picking a color to present their
username.  I wonder how this works?

+   Click "Profile" at the top of the page
+   Enter `orange` as the Profile Color and "Update"
+   Use "View Source" to see how the color is set on the user name; it's applied
    on the `style` attribute of a `span` tag, and surrounded with single quotes.
+   Return to "Profile" and enter this as your color:
    ```
    magenta' onmouseover='history.back()
    ```

*Question*: Is this exploit preventable by giving users an `input` where `type="color"`?

### Remediation

*   Sanitize *all* user-provided text which may appear within an HTML attribute.


## Stored XSS via AJAX

Visit https://google-gruyere.appspot.com/*GRUYERE-ID*/feed.gtl
and view source.  Does anything stand out to us here?

+   "New Snippet"
+   Input this text into the `textarea`:
    ```
    Never gonna<span style=display:none>" + window.open("https://ia800605.us.archive.org/8/items/NeverGonnaGiveYouUp/jocofullinterview41.ogg") + "</span> let you down
    ```
+   Return to the Gruyere Home page
+   Click the "Refresh" link

### Remediation

*   Sanitize user-provided text both on the server-side (before it's stored to a database) and on the client-side
*   Don't use the `eval()` function, because it can do *anything*



# Do try this at home (and hopefully at your job!)

What I will show you today could get you into *serious* trouble (the orange
jumpsuit kind) if you do it to a computer system that you aren't permitted to
do these things to.

Don't be scared.  Be smart and use good judgement.

I am showing you this to make you realize how easy it is to do this stuff.

*   The "bad guys" are not smarter than you
*   The only difference between them and you are your hobbies
*   I hope that you will consider cybersecurity as a career

There are many great [career opportunities](../CyberSec-Getting_Started.md#making-a-career-in-cybersecurity)
in the field of cybersecurity.  The most important qualifications are not skill
nor knowledge but *passion*.

I hope the question on your mind right now is ["how do I get started in
cybersecurity?"](../CyberSec-Getting_Started.md#getting-started-with-computer-security)



