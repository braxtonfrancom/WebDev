CS2610 - Monday, December 05 - Lecture 39 - Module 6

# Topics:
* [Announcements](#announcements)
* [Mud card followup](#mud-card-followup)
* [Reflections on Trusting Trust](#reflections-on-trusting-trust)
* [Hosting a website in the cloud, by Taylor Anderson](#hosting-a-website-in-the-cloud-by-taylor-anderson)
* [Brute Force in JavaScript](#brute-force-in-javascript)


------------------------------------------------------------
# Announcements

## Cancelled: Grab & Go Breakfast for CS Majors

Unfortunately, due to low numbers, we’ll need to cancel the breakfast tomorrow.
It seems the time slot wasn't ideal and not many could make it. We will do a
survey to find a time and try it again early next semester.


## Free Software and Linux Club

*   **What**  Hacker Movie Night
*   **When**  6:30pm Wednesday, December 7th
*   **Where** ESLC 053

This Wednesday we'll be hosting the traditional end-of-semester movie night. There will be snacks involved, but also feel free to bring your own if you'd like to share :).

The current options are:

1. Hackers (1995)
2. War Games (1983)
3. Half Past Dead (2002)
4. Mr Robot (Series)
5. Star Trek - First Contact
6. The Matrix

Log on to the [FSLC Discord server](https://discord.gg/p4jRxrQmqP) and vote for your pick on the **announcements** channel.

Next week we will not have a meeting due to finals.


# Action Items

*   **Reminder:** graded Mastery Quizzes must be completed by **11:59pm Sunday, December 11th**



# Mud card followup

### Does linking to other websites violate copyright?

*   [No](https://www.dmlp.org/legal-guide/linking-copyrighted-materials)
    *   But embedding content is still a legal grey area


### What sorts of ethics/laws apply to products that don't reach the market...
>   ...such as homework, products that businesses only use in-house, etc.?  Are there any special conditions for personal/private projects?

*   Copyright law protects such creations by default
    *   Nobody else can use your code unless you give them permission to do so
    *   A license *is* written permission
*   Speaking of homework, *you* own the copyright for code that you write for homework in all of your classes
    *   If you're doing *research* here at the University, I believe the school owns the copyright, much as a company does the code you write while in their employ


### Are there copyright terms that come with the default Python libraries?

*   [Yes](https://docs.python.org/3/license.html)
    *   Python has their own GPL-compatible (i.e. copyleft-compatible) license called the **Python Software Foundation License**
    *   Various components of its standard library have different licenses.
    *   This is because the various packages in the standard library were written by different authors who exercised the privileges of their copyright to chose the terms of use of their code.
    *   All of this is conveniently laid out at the above website.  Otherwise, you'd have to scan the source code to find all of the license terms yourself


### What is the best place to find reliable information on copyright laws, patent laws, etc.?

*   The [Electronic Frontier Foundation](https://www.eff.org)
*   [Choose a License.com](https://choosealicense.com/)


### Are trademarks something that you have to buy?
>   And where do you go to create one?

*   The [United States Patent and Trademark Office](https://www.uspto.gov/trademarks)


### How much do developers need to know about the laws we discussed?
>   If you work for a company with project managers and lawyers, how much responsibility does a developer have?  Who is ultimately responsible?

*   **IANAL**, but I believe that if you are in the employ of a company and are writing code on their behalf, then you are not personally liable.
    *   The company assumes the risk because they own the code
    *   This is the other side of the coin when you relinquish your copyright


### What is a good place to learn about crazy things that happen in real-life?

*   [Darknet Diaries](https://darknetdiaries.com/) is a podcast about hackers, breaches, shadow government activity, hacktivism, cybercrime, and all the things that dwell on the hidden parts of the network.
*   It's a good entry-level listen for programmers and normies alike ("This American Life", but about technology)


### What helps you stay current...
>   ...both on new technology and new security techniques?

*   Hanging out at security conferences like the upcoming [BSidesSLC](https://www.bsidesslc.org/) conference, on **Friday December 16th**
    *   Entry to the event is very affordable
    *   General Admission (GA) @ $19.00 + tax & fees
*   Don't forget about [DC435](https://dc435.org) and the [CyberSentinels](https://discord.gg/YbB9zuD7f6)



# Reflections on Trusting Trust

## What did you learn from this paper?

*   This isn't a new topic.  People should have known about this stuff for **decades**
*   Maybe I should switch to Gentoo and recompile everything from source
    *   If I don't see the code itself, I don't know what I'm running


## Questions for understanding

<details>
<summary>Q: What type of bug did Ken introduce into his compiler?</summary>

A: A Trojan Horse
</details>

<details>
<summary>Q: What did the compiler hack do?</summary>

A0: One compiler hack injected a backdoor into the Unix `login` command which is *not* present in the source code for `login`

A1: The next hack injected the backdoor-injector into the C compiler itself (`cc`), so the compiler's source code could be *restored* into it's pre-hacked form.
</details>

<details>
<summary>Q: Why is this such a big deal?</summary>

A: The backdoors now live inside the *binary* versions of `login` and `cc`.  An audit of both program's source will reveal nothing, but the bugs persist.
</details>


<details>
<summary>Q: Why can't you just inspect the machine code of the compiled programs to find the problems?</summary>

A: Who's compiler compiled the tools that you are going to use to do that?
</details>


<details>
<summary>Q: What is the moral of this story?</summary>

A: You cannot trust a system that you didn't entirely create by yourself from the ground up.  Any component which came from somebody else can be infected with an invisible virus.  This is also true for open source programs.
</details>



## I haven't been sleeping well since I read this paper

Please tell me there is something that we can do about it.


### Microsoft's solution: Trusted Platform Module

*   https://pluralistic.net/2020/12/05/trusting-trust/

But, this means trusting Microsoft...


### David A. Wheeler's solution: Diverse Double-Compiling

*   https://dwheeler.com/trusting-trust/
*   https://www.schneier.com/blog/archives/2006/01/countering_trus.html
*   https://ieeexplore.ieee.org/document/1565233


On Linux there are a few C compilers available, including the GNU C Compiler (`gcc`) and the Tiny C Compiler (`tcc`)

0.  Build from source `tcc` using your pre-built `gcc` and `tcc` compilers.
    *   Call the binaries resulting from this step `tcc-g` and `tcc-t`, indicating which untrusted compiler was used to build them.
    *   Because `tcc-g` and `tcc-t` were built with different compilers, we expect these binaries to be different bit-for-bit
    *   However, if the original compilers *are not* injecting secret backdoors, they should be *functionally* equivalent, meaning they will create *identical* output
1.  Recompile `tcc` again using `tcc-g` and `tcc-t`.
    *   Call the binaries resulting from this step `tcc-g+` and `tcc-t+`
    *   If `tcc-g` and `tcc-t` **are** functionally equivalent, `tcc-g+` and `tcc-t+` should also be bit-for-bit equivalent
    *   If `tcc-g+` and `tcc-t+` differ, then one or more of the original `tcc` or `gcc` compilers are compromised (or are incorrect)

There are, of course, some limitations to this approach, though some Linux distributions have used it to try to detect instances of the Thompson hack



# Hosting a website in the cloud, by Taylor Anderson

https://github.com/tganderson0/django-aws-example

## Winter project challenge

Follow Taylor's example and see if you can get your **Blog** and **Worth Your Weight in Gold** apps online.

Whether you will host your site on AWS, another cloud provider or a Raspberry Pi, you now know enough to take the next step on your journey!



# Brute Force in JavaScript

A simple brute-force attack doesn't require any fancy tools.

You can mount one yourself with a good dictionary (like [this
one](./rockyou_top64.txt)) and a `for` loop.

Demo code: [brute.js](./brute.js)



