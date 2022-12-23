CS2610 - Friday, November 11 - Lecture 31 - Module 5

# Topics:
* [Action Items](#action-items)
* [Any final questions about Assignment 4](#any-final-questions-about-assignment-4)
* [The Domain Name System (DNS)](#the-domain-name-system-dns)
* [The HTTP Hosts header](#the-http-hosts-header)
* [How the Domain Name System helps you find things online](#how-the-domain-name-system-helps-you-find-things-online)
* [Choosing your own DNS server](#choosing-your-own-dns-server)
* [Adding an entry to the DNS](#adding-an-entry-to-the-dns)
* [Common DNS Record Types](#common-dns-record-types)
* [Querying DNS servers](#querying-dns-servers)


------------------------------------------------------------
# Action Items

*   Call on 2 designated questioners
*   Bug bounty!
    *   Be on the lookout for mistakes, typos, broken links, etc. as you read and review today's lecture notes about [The Domain Name System](../Domain_Names_and_the_DNS.md)
    *   If you are the first person to email me about a mistake, I'll give you **5 participation points** 
*   Online Mud Cards
    *   I'm beta testing a Canvas app Joseph Ditton made to enable mud cards to be done online.
    *   Connect either on your laptop or through the Canvas app on your phone
    *   I have paper if you want to do it the old-fashioned way
    *   Jot down questions you have about today's topic, [The Domain Name System](../Domain_Names_and_the_DNS.md)



# Any final questions about Assignment 4?

*   What problems are you facing with the current assignment?
    *   Do I need to fetch the latest price of gold each time the user clicks the button?
        *   NO!!! 
    *   Which price of gold to get?
        *   The "latest one", which I didn't define for you
        *   You can choose either today's AM price, today's PM price (if available), or yesterday's PM price
    *   What should my database model look like?
        *   Two columns: conversion factor name, and its value
*   When you get stuck, don't forget to read the **Hints** section of the assignment's Canvas page



# The Domain Name System (DNS)

You use the Domain Name System every day you go online.  In this lecture you will learn:

*   What IP addresses and Host names are
*   How browsers and servers use host names in routine HTTP traffic
*   What the Domain Name System is and how it works
*   How you can control how your devices use and interact with the DNS
*   How to register your own domain name
*   How to run queries against the DNS from your computer


## Important Note

I will show you how to make network configuration changes to your computer in this lecture.

If you follow my instructions closely you shouldn't run into any trouble.  Your computer's DNS options are pretty ordinary as far as network settings go and you shouldn't feel weird about reconfiguring your own computer.  After all, it *is* your computer and you *are* a CS student.

However, it is good practice to keep careful notes of any changes you make just in case you get stuck.  You should also back up files prior to making changes.

I'm not saying that you should be scared of mistakes; you learn the most when you mess up.  What I am saying is to go slow and pay attention.  This will be a very rewarding lecture if you try!



# [The HTTP Hosts header](../Domain_Names_and_the_DNS.md#the-http-hosts-header)

Besides the name of the host you think you're visiting, do you know what other information about you and your computer the server can see?



# [How the Domain Name System helps you find things online](../Domain_Names_and_the_DNS.md#how-the-domain-name-system-helps-you-find-things-online)

The Domain Name System (DNS) translates human-friendly hostnames into IP
addresses that are meaningful to routers and other network equipment.

DNS is essentially a database mapping hostnames to IP addresses.



# [Choosing your own DNS server](../Domain_Names_and_the_DNS.md#choosing-your-own-dns-server)

Right now your computer is making requests to some "default" DNS server,
probably the one suggested by your internet provider.  But you can choose to
use *any* DNS server you want.



#  [Adding an entry to the DNS](../Domain_Names_and_the_DNS.md#adding-an-entry-to-the-dns)

How do Domain Names come to be associated with an IP address?



# [Common DNS Record Types](../Domain_Names_and_the_DNS.md#common-dns-record-types)

Now that you know how to add an IP address to the DNS, learn what other types
of information this database can store.



# [Querying DNS servers](../Domain_Names_and_the_DNS.md#querying-dns-servers)

Adding data to a database is only halfway useful.  Here is how you can query
the DNS database and learn what's in there.



