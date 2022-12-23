CS2610 - Monday, November 14 - Lecture 32 - Module 5

# Topics:
* [Announcements](#announcements)
* [Mud card followup: The Domain Name System](#mud-card-followup-the-domain-name-system)
* [Assignment 5: Vue.js Weather App](#assignment-5-vuejs-weather-app)
* [Introducing the Vue.js Front-end Framework](#introducing-the-vuejs-front-end-framework)


------------------------------------------------------------
# Announcements

## Free Software and Linux Club

*   **What**  The Secure Shell (SSH)
*   **When**  6:30pm Wednesday, November 16th
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)


This Wednesday at Linux Club we'll be doing our semiannual presentation about SSH, one of the most powerful tools at your disposal as a computer user. SSH, the secure shell, is a tool that allows you to log into computers anywhere in the world from the comfort of your own desktop. 

SSH is useful for communicating with servers, Raspberry Pis, and other devices that don't have a keyboard and mouse or that you just don't want to walk to. Not only can you run command line programs remotely with SSH, you can securely transfer files between machines, forward an X11 display, and so much more.

In this presentation we'll show you how to use OpenSSH, the most common implementation of SSH found on most desktop operating systems (even Windows). We'll show some basic skills plus some fancy configuration options. If anything so far has sounded applicable to you, this is a meeting you definitely won't want to miss.


## AIS Cybersecurity Challenge

*   **What**  USU Cybersecurity Competition
*   **When**  Kickoff is 7pm Thursday, November 17th
    *   Awards ceremony at 5pm Friday, November 18th
*   **Where** [Discord](https://discord.gg/JsA7e4BqVj)

![02-cybersec-challenge.png](./02-cybersec-challenge.png "AIS Cybersecurity Challenge flyer")


# Action Items

*   Call on 2 designated questioners



# Mud card followup: The Domain Name System

### Does the DNS Hosting Server look at the whole URL at this point ('cs.usu.edu') or does it just look at the first part ('cs.')?

*   It looks at the *last* part first ('edu') and works *backwards* from there
    *   That's why that end of the domain name is call the *Top Level Domain* (TLD)


### Will we be learning to host our own server to the web without something like AWS but instead with our own computer?

*   Maybe - if we have enough time
*   Taylor is planning on showing you how to run Django in AWS


### How do they protect the domain servers?

*   They are *distributed* so share the load so a DDoS attack is hard to pull off (but is still possible)
*   DNS requests themselves are gradually being protected by a new protocol called DNSSEC

### Who is it that would hypothetically notice your website is full of malware...
... and tell someone like domains.com to contact you and tell you that your website has problems? And what motivation do they have?

*   If my network was getting slammed by gigabytes of requests originating from your network, I'd certainly have something to say
*   Professional and amateur cybersecurity researchers


### Where does WHOIS get its info?

*   From domain registrars who ask for it when you buy a domain


### Why keep the WHOIS lookup around if no-one puts any real or useful info in there? Why not just omit that from the WHOIS response?

*   If it ain't broke, don't fix it


### Who is giving up a street address?

*   These days, nobody 


### Can malware map you to a suspicious DNS server that will route you to more malware?

*   Yes - if the malware can gain administrator privileges on your system it can edit your `/etc/hosts` file
    *   This is why Windows anti-virus (AV) software keeps an eye on this file and is suspicious of any changes, even changes you intentionally make
*   If you can put bad entries into an upstream DNS server, all of the downstream clients will be directed to a bad domain of your choosing
    *   This attack is called *DNS Poisoning* or *DNS Spoofing*



# Assignment 5: Vue.js Weather App 

Use the Vue.js front-end framework to build a simple, reactive single-page application (SPA) that displays the current weather conditions and 5-day forecast based on your current location.

0.   Use conditional rendering to provide the user with feedback for background progress
1.   Learn about class and data bindings
2.   Take advantage of Vue's reactivity system to automatically update parts of the app on-demand
3.   Handle UI events in the Vue way
4.   Expand your API expertise
    0.  Use the technique of Promise chaining in JavaScript
    1.  Geolocate IP addresses through a 3rd-party API
    2.  Access weather forecast data through a 3rd-party API


## Your Recipe for Assignment 5

This is how you should approach this assignment:

0.  Get your own API keys from both services.  It may take a few hours to get their email messages, so do this early on.
1.  Use the browser's address bar to craft a URL that will fetch your IP address's geolocation data from https://freegeoip.app/
2.  Write JavaScript to perform this request with `fetch()`
    *   First print the result to `console.log()`
    *   Then  display the information in the DOM of a simple HTML document
    *   Don't worry about making it look nice yet - just get *something* on the screen
3.  Craft a URL in the browser to look up your locations current weather conditions based upon the latitude & longitude found in the previous step
4.  Write JavaScript to perform this `fetch()`, and display the results
    *   First write 1 line of output with `console.log()` per 
    *   Then display it in the DOM
    *   This doesn't need to look pretty - just dump a few of the data points into an `<ol>` using a few lines of *temporary* VanillaJS
5.  Repeat for your location's 5-day/3-hour weather forecast based upon the latitude & longitude returned from FreeGeoIP
6.  Vue-ify this webpage
    *   You are not done until **all traces of** VanillaJS are removed and replaced with equivalent VueJS templates
7.  Add event handling to make the forecast results respond to clicks
    *   Use *computed properties* and *class binding* to update the UI automatically


## This is the final assignment for which you may use the grading gift

*   As a reminder, per the course rules the Grading Gift **may not be used on the final assignment**.
    *   Therefore, this is the last assignment which the grading gift may be used.
*   After you submit your work, remember to log into you repository on https://gitlab.cs.usu.edu and make sure that all of your files appear there.  Some students have failed to verify their submission and have received late penalties.
    *   If you don't see it on GitLab it's not turned in!



# [Introducing the Vue.js Front-end Framework](../VueJS.md)


Today we covered these topics:

* [Vue.js - The Progressive JavaScript Framework for the front-end](../VueJS.md#vue.js-the-progressive-javascript-framework-for-the-front-end)
* [How to "install" Vue into your webpage](../VueJS.md#how-to-install-vue-into-your-webpage)
* [Learning Vue.js and troubleshooting your app](../VueJS.md#learning-vue.js-and-troubleshooting-your-app)
* [The Vue Instance](../VueJS.md#the-vue-instance)
* [Templates](../VueJS.md#templates)
* [Vue directives for use in HTML](../VueJS.md#vue-directives-for-use-in-html)

This is today's [Vue demo](./index.html)




