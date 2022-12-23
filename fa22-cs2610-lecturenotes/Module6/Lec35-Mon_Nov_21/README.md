CS2610 - Monday, November 21 - Lecture 35 - Module 6

# Topics:
* [Announcements](#announcements)
* [Any questions about Assignment 5](#any-questions-about-assignment-5)
* [The Secure Shell and Encrypted Tunnels](#the-secure-shell-and-encrypted-tunnels)


------------------------------------------------------------
# Announcements

## IDEA Surveys - Rare Extra Credit Opportunity

You should have received a notification about the IDEA Student Rating of Instruction (SRI) survey.

Your feedback is very important to me, and I really want you to take this survey.  Each semester I take many useful suggestions and incorporate them into my future courses.  If I'm doing anything right, it is due to suggestions given by previous students.

The more input I get from you the better I am able to improve as an instructor.  My goal is to reach 80% participation.  To that end I am offering 25 points of sweet, sweet *extra credit* for your response.  This is the *only* extra credit I give.  Your responses remain anonymous, and I will not even see them until after finals week.

*   The extra points will be automatically applied to your grade on Canvas by the University **at the end of Finals Week**
    *   There is nothing that I can do to speed this up, or verify that your submission was accepted - **it's anonymous!**
    *   Your points will come through; trust the system
*   The survey opens on Monday, November 21st at 8:00 AM.
*   The survey closes Friday, December 9th at 11:59 PM.


## Coaching Center hours this week

The Coaching Center will be open Monday and Tuesday this week, but will be online only. You can continue to join the queue just as normal at https://coach.cs.usu.edu.


## Erik's Office Hours this week

Due to the Thanksgiving holiday falling on a Thursday this year, my ordinary office hours will be canceled this week.

I will be available for an appointment on Tuesday over Zoom on an as-needed basis.  If you have questions about the assignment or anything else, please contact me to set up a time.


# Action Items

## Assignment 5 schedule

It is important to keep your momentum through this complicated project.  If you are going to cram, I suggest that you try to *finish early* rather than put this off until the weekend.  I recognize that everybody has different travel and celebration plans, so do your best to make it fit into your week.

*   Assignment 5 is due at midnight on **Monday, November 28**
    *   You are given a couple of extra days to accommodate the holiday
*   This is the last assignment that you may use the **Grading Gift**.  If you choose to use the Grading Gift:
    *   Email your request to the TAs and instructors before the original due date of **Monday, November 28**
    *   Submit your work before midnight on **Wednesday, November 30**
        *   Follow the instructions in [How To Submit Assignments](../../How_To_Submit_Assignments.md)


*   Call on 2 designated questioners



# Any questions about Assignment 5?

When you get stuck, don't forget to read the *Hints* section of the instructions on Canvas.

What questions do you have about this assignment?

*   How careful do I need to be about the accuracy of data returned by API?
    *   Take *reasonable* measures to make sure it looks good
    *   e.g. check whether or not there is an `error` property in the JSON



# [The Secure Shell and Encrypted Tunnels](../SSH.md)

Today we will discuss

*   What are network ports?
    *   YouTuber Mental Outlaw published a really nice video about [which network services use which ports](https://www.youtube.com/watch?v=bwqM7XjqBBg)
    *   Mental Outlaw's video on [How SSH Works](https://www.youtube.com/watch?v=5JvLV2-ngCI)
*   Logging in to a remote system securely w/o sending your password in clear text
    *   Computerphile made a video that explains [How Secure Shell Works](https://www.youtube.com/watch?v=ORcvSkgdA58)
*   Forwarding *local* ports through a tunnel to access single resources behind a firewall
*   Dynamic port forwarding through a SOCKS proxy to access many resources from a different location
*   Forwarding *remote* ports back to your computer through a tunnel to enable outsiders to access your services through a firewall



