CS2610 - Monday, October 31 - Lecture 26 - Module 4

# Topics:
* [Announcements](#announcements)
* [SAINTCON recap by Carter Bailey](#saintcon-recap-by-carter-bailey)
* [Assignment #4: Worth Your Weight In Gold (Web 2.0)](#assignment-4-worth-your-weight-in-gold-web-20)
* [Modern web applications leverage APIs in two ways](#modern-web-applications-leverage-apis-in-two-ways)
* [How do I learn how to use a web API?](#how-do-i-learn-how-to-use-a-web-api)
* [What tools can I use to access web APIs?](#what-tools-can-i-use-to-access-web-apis)
* [Write a Shell Script to make curl more convenient](#write-a-shell-script-to-make-curl-more-convenient)


------------------------------------------------------------
# Announcements

## Free Software and Linux Club

*   **What**  Build your own website!
*   **When**  6:30pm Wednesday, November 2nd
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)

Are you looking to build your own web site?  This Wednesday in ESLC 053 we'll take a look at how to build and host web applications with entirely free software on the campus network.


## AIS Cybersecurity Challenge

*   **What**  USU Cybersecurity Competition
*   **When**  Kickoff is 7pm Thursday, November 17th
    *   Awards ceremony at 5pm Friday, November 18th
*   **Where** [Discord](https://discord.gg/JsA7e4BqVj)

![02-cybersec-challenge.png](./02-cybersec-challenge.png "AIS Cybersecurity Challenge flyer")


# Action Items

*   Call on 2 designated questioners



# SAINTCON recap by Carter Bailey

## Next Up: BSidesSLC 2022 Cybersecurity Conference

*   Learn, Train, Compete, & Network!
*   Dec 16th, 2022
*   https://www.bsidesslc.org/



# Assignment #4: Worth Your Weight In Gold (Web 2.0)

The next assignment combines Django and Vanilla.JS with web APIs

*   Watch the video on Canvas
*   Read through the assignment requirements
*   Ask any questions on Discord or in a Canvas discussion thread

## Key points

*   Your project combines Django and JavaScript code
    *   Your JavaScript code may be embedded within your HTML templates in script elements, or may be served by Django from static files
    *   You are allowed to write plain, old HTML in files
    *   You **do not** need to completely construct the DOM programmatically like Assignment #3!
*   Deliver **one** Django project consisting of **two** distinct apps:
    1.  An app providing the *User Interface* by serving HTML, CSS and JavaScript through templates and static files 
    2.  An app that exposes a web API which serves JSON
*   The Django app providing the web API *must* use a Model to store the unit conversion factors
    *   It is okay to store these factors in a dictionary while you're developing it, but the unit conversion data *must* ultimately come from a database
    *   In other words, there is only **one** Python file into which the conversion factors can be hard-coded: the data migration of the `unitconv` app
*   Your webpage needs to fetch data from your web API *and* from the 3rd party API **data.nasdaq.com**
    *   **Do not** fetch the NASDAQ data from the Django server!
        *   The fetch *must* happen on the client-side using the browser's `fetch()` API
        *   If your Django app involves `import requests` or `import http.cilent` **you're doing it wrong!**



# [Modern web applications leverage APIs in two ways](../Web_APIs.md#modern-web-applications-leverage-apis-in-two-ways)

We had been using the term *API* to describe how code we write interfaces with pre-written systems to access computational resources on our own machines.

Now we shall consider web APIs which enable us to use resources distributed across the internet and made accessible through HTTP.



# [How do I learn how to use a web API?](../Web_APIs.md#how-do-i-learn-how-to-use-a-web-api)

Using a web API is analogous to calling a function in a programming language.

Learning how to use a library of code comes down to learning three things.



# [What tools can I use to access web APIs?](../Web_APIs.md#what-tools-can-i-use-to-access-web-apis)

Once you have identified an API and located its documentation, you will need to find a way to send HTTP requests to it.  


## [curl - The Internet Swiss Army Knife](../Web_APIs.md#curl-a-universal-command-line-api-tool)

*   First, check whether `curl` is already installed on your computer
    *   If not, install it
*   Practice using `curl` with the web APIs described below.  Try the following experiments:
    *   What happens when you change the URL?
    *   What happens when you change the HTTP request method?
    *   What happens when you change HTTP headers?
        *   Changing the `User-Agent` header is so common that `curl` dedicates the `-A` command-line argument solely to this
*   Using your command shell, combine `curl` with `python -m json.tool` to pretty-print the results
    *   The command looks like this: `curl "URL_in_quotes" | python -m json.tool`
    *   When you run it, you will see something like this (shuffling a new deck on DeckOfCardsAPI):
    *   ```bash
        $ curl "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1" | python -m json.tool
        % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                       Dload  Upload   Total   Spent    Left  Speed
          100    79  100    79    0     0    156      0 --:--:-- --:--:-- --:--:--   156
          {
              "deck_id": "ofr4lsjtp7h5",
              "remaining": 52,
              "shuffled": true,
              "success": true
          }
        ```



# Write a Shell Script to make curl more convenient

Always piping `curl`s output to `python -m json.tool` is easy to read, but hard to write.  It is easy to turn your command-line experiments into repeatable *Shell Scripts*; new command-line programs that capture the essence of a repetitive task.


## How to make a Shell Script

0.  Create a new file (the `.sh` file name extension is actually *optional*)
1.  Write a *Shebang* line at the very top of the file
    *   The Shebang line begins `#!`, and is followed by the absolute path to the program that will run the script
        *   e.g. `#!/usr/bin/bash` for a Bash script
        *   e.g. `#!/usr/bin/python3` for a Python 3 program
        *   This is how the operating system knows to run your script, and why it doesn't pay attention to the script's name
    *   Shebang is a contraction of "hash bang"
    *   It looks like a comment because it starts with `#`, the same symbol that comments in the shell language begin with
    *   This is why Python uses `#` for its comments, too
2.  Paste some commands that you've been using at the shell prompt
3.  Save the file
4.  **[Linux and Mac]** mark the script as an executable with the `chmod` command:
    *   `$ chmod +x new_script.sh`
5.  You can now run the script directly:
    *   `$ ./new_script.sh`
    *   You can also manually run the script with Bash:
        *   `$ bash new_script.sh`


## Shell Language Features

*   Variable names always start with a dollar sign `$`
*   Command line arguments are available in variables `$1`, `$2`, `$3` ... `$9`
    *   There is another way to access these arguments if you need more than 9 of them, but even I rarely need to do this
*   The variable `$#` holds the count of command-line arguments
*   Unlike other languages, the shell's `if` statement doesn't consider the truth of a boolean expression, but the *exit status* of a command
*   When assigning to a variable, **DO NOT** write any spaces around the `=` assignment operator!
    *   **NO!** `DECK = 418bqwvj7m6p`
    *   **YES** `DECK=418bqwvj7m6p`


### Testing conditions

*   To count the number of arguments in a shell script, you ask `if` to run a command to compare the variable `$#` to a number
*   That command is the test command `[[`, so named because it *looks* like programming syntax
*   Among other things, the test command can establish the relationship between two numbers
    *   `[[ $A -eq $B ]]`  # is $A equal to $B?
    *   `[[ $A -ne $B ]]`  # is $A not equal to $B?
    *   `[[ $A -lt $B ]]`  # is $A less than $B?
    *   `[[ $A -gt $B ]]`  # is $A greater than $B?
    *   `[[ $A -le $B ]]`  # is $A less than or equal to $B?
    *   `[[ $A -ge $B ]]`  # is $A greater than or equal to $B?
*   For symmetry, the final argument to `[[` should be `]]`


### `if` syntax

The semi-colons in these examples can be replaced by a newline

`if` *command* *;* `then` *block of code* *;* `elif` *command* *;* `then` *block of code* *;* `else` *;* *block of code* `fi`

```shell
if [[ $# -eq 0 ]]
then
    echo "Error!  This program requires exactly one argument!"
    exit 1
elif [[ $# -eq 1 ]]
then
    echo "You passed the lone argument $1"
    exit
else
    echo "You passed the arguments $1 $2 $3 $4 $5 $6 $7 $8 $9"
    exit
fi
```

### Examples

Here are the scripts I wrote in class today for the DeckOfCardsAPI:

* [Draw a card from a deck](./draw_card.sh)
* [Re-shuffle an existing deck](./shuffle_deck.sh)



