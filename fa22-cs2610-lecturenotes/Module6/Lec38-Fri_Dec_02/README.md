CS2610 - Friday, December 02 - Lecture 38 - Module 6

# Topics:
* [Announcements](#announcements)
* [Learning XSS with a pretend webapp (continued)](#learning-xss-with-a-pretend-webapp-continued)
* [Guest Lecturer: John Pope](#guest-lecturer-john-pope)


------------------------------------------------------------
# Announcements

## Grab & Go Breakfast for CS Majors

*   **What**  Pancake dippers freshly cooked by your CS professors who just barely passed the Food Handler's exam
    *   Choose from **Bacon** or **Chocolate Chip** dippers
*   **When**  10-11am Tuesday, Dec 6th
*   **Where** Southeast Corner of Old Main on the Sidewalk
*   Bring a screenshot of Degree Works showing your name and CS as your Major


# Action Items

*   **Reminder:** graded Mastery Quizzes must be completed by **11:59pm Sunday, December 11th**
*   Call on 2 designated questioners



# Learning XSS with a pretend webapp (continued)

## Stored XSS in a username

Can we put a `script` tag into a user account?

+   Sign Out
+   Sign Up
+   Enter `<script>alert("Yo Mamma")</script>`into the "User name" field

At first glance it seems that we cannot do this because the maximum length for
a username is too short to admit any useful code.  But is this limit a **hard**
limit?  Is this limit enforced on the *back-end* as well as on the *front-end*?

+   Open the Inspector and locate the User name `input` element
+   Remove the `maxlength` attribute
+   Enter `<script>alert("Yo Mamma")</script>`into as the username, and `Mamma` for a password
+   Log in with the above username and password (entered verbatim)


### Remediation

*   Validate and sanitize data on the **back-end**
    *   After all, the back-end is the only computer over which you have any control



# Guest Lecturer: John Pope



