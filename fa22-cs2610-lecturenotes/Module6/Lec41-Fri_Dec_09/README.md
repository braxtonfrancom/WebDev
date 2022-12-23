CS2610 - Friday, December 09 - Lecture 41 - Module 6

# Topics:
* [Announcements](#announcements)
* [Last call for questions about the Final Assignment](#last-call-for-questions-about-the-final-assignment)
* [Showcased Software](#showcased-software)
* [Burp Suite](#burp-suite)
* [Exploitation Step 0: Enumeration with Nmap "The Network Mapper"](#exploitation-step-0-enumeration-with-nmap-the-network-mapper)
* [Exploitation Step 1: Launch an automated attack](#exploitation-step-1-launch-an-automated-attack)
* [Exploitation Step 2: Sneak in through the back door](#exploitation-step-2-sneak-in-through-the-back-door)
* [Other Brute Force attacks](#other-brute-force-attacks)


------------------------------------------------------------
# Announcements

## 2022 SANS Holiday Hack Challenge & KringleCon

*   **What**  Online cybersecurity conference and hacking challenge
*   **When**  Now open, through January 6th
*   **Where** https://www.sans.org/mlp/holiday-hack-challenge/


## BSidesSLC 2022

*   **When**  Friday, December 16th
*   **Where** [Conference Center at Miller Campus](https://millerconfctr.com/venues/karen-gail-miller-conference-center/)
    *   BSidesSLC is a non-profit, 501(c)(3) run, conference focused on cybersecurity.
    *   At this conference you can expect to meet & network with industry experts, many of whom are located throughout Utah.
    *   General Admission (GA) @ $19.00 + tax & fees


# Action Items

*   **Reminder:** graded Mastery Quizzes must be completed by **11:59pm Sunday, December 11th**
*   **Reminder:** Canvas participation closes at midnight on **Sunday, December 11th**
    *   If you're lacking very many participation points this late in the semester, the best I can do is wish you luck!
    *   I will publish final participation scores during the day on **Monday, December 12th**
*   **Today is the last day to be DQ**



# Last call for questions about the Final Assignment

*   ...
*   ...



# Showcased Software

Start your cybersecurity lab right now!  Install these programs and follow
along with today's lecture videos.  You'll find that the hard part is getting
things installed.  Once you see how easy the actual hacking is you'll be
hooked (or terrified)!

*   [BurpSuite Community Edition](https://portswigger.net/burp/communitydownload)
    *   BurpSuite is like an IDE for breaking web applications.
    *   It operates as an HTTP proxy, sitting between your browser and a web server.
    *   From this vantage point it can inspect and manipulate traffic going in both directions.
*   [VirtualBox](https://www.virtualbox.org/wiki/Download)
    *   [Installation instructions](https://www.virtualbox.org/manual/ch01.html#intro-installing)
*   [DC435 Insecure Server](http://bit.ly/insecsrvr)
    *   Downloads a .ova file from Google Drive
    *   This is a rather large download (~1.38GB)
    *   After you download this file start VirtualBox
    *   Open the `File` menu and select `Import Appliance...`
    *   Navigate to the .ova file and open it
    *   Follow the on-screen prompts, leaving the defaults alone
    *   Once imported, select the VM and click the `Start` button (green arrow)
*   [Nmap Security Scanner](https://nmap.org/download.html)
    *   Binaries available for all mainstream OSes
    *   [Installation instructions](https://nmap.org/book/install.html)
*   [Hydra](https://github.com/vanhauser-thc/thc-hydra/releases)
    *   This tool is a little more hard-core in that you must compile it
        directly from source.
    *   This is no sweat on Linux, though precise details vary by Linux
        distribution.  You can probably find a pre-built Hydra (a.k.a.
        THC-Hydra) in your package manager.
    *   I don't know a lot about MacOS X, but I do know that you'd start with Xcode
        *   [Xcode](https://developer.apple.com/xcode/)
        *   [Building from the Command Line with Xcode FAQ](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)
    *   There are pre-built Windows binaries out on the web, but I'm not sure
        how well I trust those...  You might look into [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)



# Break into Django with [Burp Suite](https://portswigger.net/burp/)

The authentication used by the Django admin page is rather sophisticated and
can give some of these tools a hard time.  Let's apply Burp Suite to the
problem and see how it fares.

*Reset Django's admin password by running `passwdreset`*

I followed along with the instructions presented in this
[YouTube video](https://www.youtube.com/watch?v=EC9BI7SLo9Y).  The most
important difference is that I knew that I was targeting the 'admin' account,
so I applied the dictionary only to the password field.

0.  `python manage.py createsuperuser admin`
    *   Create a truly stupid password, something that's in the top 20 of a
        password list since this process is terribly slow.  You have to set a
        weak password at the time of user creation because the `changepassword`
        tool doesn't let you set a weak password later on.
1.  `python manage.py runserver`
2.  Fire up Burp Suite, go to the **Target** tab, sub-tab **Scope**, add `http://localhost:8000` to scope.
3.  Go to the **Proxy** tab, sub-tab **Intercept**, and turn *interception* on.
4.  In Firefox go to `about:preferences`, enable basic manual proxy for `localhost` and `8080`.
5.  If Firefox go to `about:config`, search for the setting called `network.proxy.allow_hijacking_localhost` and set it to **true**.
6.  Visit `http://localhost:8000/admin`, and make a login request with bogus credentials.  This will be caught in the **Intercept** tab.   Click the **Action** button and choose *Send to Intruder* (`Ctrl-I`).
7.  In the **Intruder** tool clear all attack positions (positions are annotated with cyan highlighting, delimited by section symbols `§`) then select the password part of the request.
8.  Go to the **Payloads** tool, and select "Runtime file" for payload set 1, and use the `rockyou_top512.txt` password dictionary.
9.  **Start Attack**
10. Watch for one request that differs from the others - the correct password results in an HTTP `302 Found` response redirecting to `/admin/` and has a different response length.

This is terribly slow for me; the Community edition throttles this tool to about 1 request per second.  But it does work!

If you are serious about becoming a professional pen-tester, this tool is worth its weight in gold.  Besides brute force attacks, it can do so much more.



# Exploitation Step 0: Enumeration with Nmap "The Network Mapper"

* [Nmap homepage](https://nmap.org/)

To paraphrase the Nmap documentation:

> Nmap ("Network Mapper") is an open source tool for network exploration and
> security auditing.  Nmap determines what hosts are available on the network,
> what services those hosts are offering, what operating systems they are
> running, etc.  While Nmap is commonly used for security audits, many systems
> and network administrators find it useful for routine tasks such as network
> inventory, managing service upgrade schedules, and monitoring host or service
> uptime.


## Using Nmap from the command line

The syntax of the Nmap tool is simple.

    nmap [Scan Type...] [Options] {target specification}

Remember that when command line syntax is explained, square brackets indicate
optional parameters.  In this case, both `Scan Type` and `Options` are actually
optional.  The trick to Nmap is learning what all of the Scan Types and
Options are.  We'll walk through a few in a moment, but let's first learn what
`target specification` means.


## Identify your target IP address/network

Today we are targeting a virtual machine specially prepared with a few
[insecure web services](http://bit.ly/insecsrvr).  I already know that it's
connected to my computer via the 192.168.56.0/24 network, but even if I didn't,
I could still use Nmap to track it down for me (though this could take a
while).


*Be careful with Nmap!  The USU NOC can tell when people are scanning our network.
If it's you doing the scanning, yes, they know your IP address.*

Let's ask Nmap what systems are live on this network in
CIDR notation:

```bash
$ nmap 192.168.56.0/24
```


The first result, 192.168.56.1, is my own laptop, so we'll ignore it.  Besides
my laptop, there are 5 other IP addresses which Nmap identified as hosting
network services.

    1. 192.168.56.16
    2. 192.168.56.17
    3. 192.168.56.18
    4. 192.168.56.19
    5. 192.168.56.20

From Nmap's output we can see the port numbers that were detected.  We already
recognize a few of these ports from a previous lecture: SSH servers, FTP and
web servers hosting both HTTP and HTTPS services.  Nmap also gives us a few
hints for some others, such as the MySQL service apparently running on
192.168.56.18 port 3306.  This is just a guess based upon the fact that port
3306 is commonly used by MySQL.

Let's focus on these 5 IP addresses and see what more information Nmap can dig
up for us.  We'll refine our `target specification` to `192.168.56.16-20` to
save time.  We will also ask Nmap to perform a deeper scan to discover exactly
what services are running on those ports, and what versions of software are
behind them.

```bash
$ nmap -sV 192.168.56.16-20
```

It turns out that the machine `192.168.56.18` actually is running MySQL!  But
Nmap wasn't able to log in to poke around more.  This is a big find because
MySQL isn't the sort of thing that should be exposed to the outside world like
this.  A few of the machines are running web servers.  Let's visit them and see
what their homepages offer.

One of them, `192.168.56.16`, is hosting a WordPress site!  WordPress is a very
common Content Management System built with the PHP language.  It is also
notorious for having all sorts of security flaws due to its under-regulated
plugin system.


## The moral of this story

Protect sensitive resources from being accessible outside of an appropriate
boundary.



# Exploitation Step 1: Launch an automated attack

Let's take an even deeper look at the machine running WordPress:

```bash
$ nmap -A 192.168.56.16
```

The `-A` flag causes Nmap to run an aggressive scan.  Presently this enables OS
detection (-O), version scanning (-sV), script scanning (-sC) and `traceroute`
(--traceroute).  The point is to enable a comprehensive set of scan options
without people having to remember a large set of flags.  However, because
script scanning with the default set is considered intrusive, you should not
use -A against target networks without permission.

By using an aggressive scan Nmap was able to grab the text within the `title`
HTML element of the main web page on that server.

It's kinda creepy how much information is so readily available to somebody with
Open Source software and a few minutes to experiment with it.

Well, if you think that's creepy, you haven't seen anything yet!  Let's ask
Nmap to run a script that will spider its way across the website, looking for
more webpages we might attack.

```bash
$ nmap -sV --script http-enum 192.168.56.16
```

Well, that turned up a few interesting tidbits.  Among other things, we found a
couple of login pages.  I wonder if this site admin changed the password after
installing?  Or did the admin pick a weak password?

There's a script for that!  Nmap has a handy option called `--script-help`
which dumps documentation for all installed scripts.  You can filter the list
by giving `--script-help` a pattern to match against.  I can look for all
WordPress related scripts with

```bash
$ nmap --script-help '*wordpress*'
```

The script named `http-wordpress-brute` sounds appropriate.

Next, we need a dictionary of passwords for Nmap to try.  Daniel Miessler has
a few [password lists](https://github.com/danielmiessler/SecLists).  But I
think so poorly of this sysadmin that I'm willing to bet that the password is
one of the top 512 passwords revealed when RockYou.com was [hacked in 2009](
https://www.ghacks.net/2010/01/21/rockyou-hacked-some-30-million-passwords-in-the-wild-security/).

I have that dictionary in a file called `rockyou_top512.txt`.  Let's hand it over
to Nmap's WordPress BruteForce login script and see what happens:

```bash
$ nmap -sV --script=http-wordpress-brute --script-args=passdb=rockyou_top512.txt 192.168.56.16
```


## The moral of this story

Use care when choosing authentication credentials; choose a password that's
*not* in a well-known cracker dictionary.



# Exploitation Step 2: Sneak in through the back door

When we ran the in-depth service scan above, I noticed an **old** version of an
FTP server running on one of the boxes:

```bash
$ nmap -sV 192.168.56.16-20
```

Doesn't anybody patch their systems anymore?

On `192.168.56.19` there is a version of ProFTPD which seems familiar to me for
some reason...  Let's see if Nmap knows anything about ProFTPD.

```bash
$ nmap --script-help '*proftpd*'
Starting Nmap 7.70 ( https://nmap.org ) at 2019-04-09 23:09 MDT

ftp-proftpd-backdoor
Categories: exploit intrusive malware vuln
https://nmap.org/nsedoc/scripts/ftp-proftpd-backdoor.html
  Tests for the presence of the ProFTPD 1.3.3c backdoor
```


Oh yes, let's try that!  We'll try the backdoor and attempt to run the `id`
program, which will tell us both whether the backdoor is indeed present, and if
so, it will tell us whether we have administrator access to the system.

```bash
$ nmap -sV --script ftp-proftpd-backdoor 192.168.56.19
```

In addition to running an out-of-date and known-broken version of ProFTPD, this
sysadmin is also running it as the root user!  We can do anything we like on
this system.

I wonder what user accounts are active.  Let's check the password and shadow files:

```bash
$ nmap -sV --script ftp-proftpd-backdoor --script-args="cmd=cat /etc/passwd" 192.168.56.19

$ nmap -sV --script ftp-proftpd-backdoor --script-args="cmd=cat /etc/shadow" 192.168.56.19
```


## The moral of this story

Be aware of what services you are using and stay on top of security alerts.
Update your software so you aren't vulnerable to known attacks that Script
Kiddies can pull off.



# Other Brute Force attacks

## Brute Force SSH with Hydra
According to the file `/etc/shadow` on `192.168.56.19` the account called
`user` has a password.  We could try an offline attack and crack that hash on
our own computer.  But this sysadmin is known to use poor passwords on other
systems; it's not much of a stretch to think this is the case here as well.
Let's try brute-forcing the `user` account via ssh (which Nmap reported is
running on this server) with another automated tool called
[Hydra](https://github.com/vanhauser-thc/thc-hydra):

```bash
$ hydra -l user -P rockyou_top512.txt 192.168.56.19 ssh
```



