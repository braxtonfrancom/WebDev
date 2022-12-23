# Getting Started in Cyber Security

The USA is #1... at being the target of cyber attacks.  Both private companies and all levels of government are in dire need of cybersecurity professionals.  If you have even a *slight* interest in security they are **very** interested in hiring you.

Do you have what it takes to enter an exciting and important job field?

*(That was a rhetorical question - of course you do!)*


## Table of Contents

*   [Computer Security Concepts](#computer-security-concepts)
*   [Cyber Security Glossary](#cyber-security-glossary)
*   [Security Best Practices](#security-best-practices)
*   [How To Build a Successful Career In Cybersecurity](#how-to-build-a-successful-career-in-cybersecurity)
*   [Red Team Tools](#red-team-tools)
*   [Blue Team tools](#blue-team-tools)

## Computer Security Concepts

### Three truths to embrace

As you open your eyes to the world of cyber security, remember that these facts have always *been* true and will always *remain* true.

0. Life is risk
1. Everything is vulnerable
2. Attacks happen all the time

The sooner you embrace these truths the sooner you will be able to take useful measures to protect yourself.


### Your best defense against hackers is to *think like a hacker* yourself

*   You are honest and decent, and thoughts of illegal behavior do not come naturally to you.
*   You need to overcome this inclination and begin to see the world the way the bad guys see it
    *   This does *not* mean that you have to start *acting* like a bad guy
*   Only when you see can the world like a hacker will you be able to anticipate the dangers that you face every day
*   Unfortunately, well-intentioned idiots keep trying to make this illegal:
    *   http://www.beskerming.com/commentary/2007/08/12/249/German_Security_Professionals_in_the_Mist
    *   http://www.europarl.europa.eu/news/en/press-room/20120326IPR41843/hacking-it-systems-to-become-a-criminal-offence
    *   https://www.eff.org/deeplinks/2018/04/55-infosec-professionals-sign-letter-opposing-georgias-computer-crime-bill
*   Researching cyber security is *not* in itself unethical, nor should it be made illegal
    *   Laws and rules cannot protect us from technology
    *   If "hacking" tools are made illegal, then only criminals will have them
    *   Instead, encourage "ethical" hacking


### Understand the difference between *ethical hacking* and *cybercrime*

*   The difference is *permission*.  Do you have it?
*   You don't get to decide whether or not you are being a criminal
    *   The owner of the computer you're accessing gets to choose that
    *   It doesn't matter how noble and pure your intentions are
    *   If you have upset whoever owns that computer, you are entirely at their mercy
*   If you are working as a professional penetration tester on behalf of the system owner, secure their express permission before you touch their system
    *   Get it in writing
    *   The written permission slip should define your *scope* 
        *   What things are you allowed to access?
        *   What is off-limits?
        *   What time frame are you allowed to use their system?


### Everybody makes mistakes - not everybody advertises it

The "Oil and Gas International Kerfuffle"

*   https://arstechnica.com/security/2017/03/firefox-gets-complaint-for-labeling-unencrypted-login-page-insecure/
*   https://www.reddit.com/r/programming/comments/60jc69/company_with_an_httpserved_login_form_filed_a/
*   [The original Mozilla bug report filed by O&GI sysadmin](https://archive.fo/53Cbd)

**TL;DR** Don't publicly thumb your nose at the cybersecurity community; there are plenty of people out there who are thirsty for cred, and will break into your systems for spite or lulz.


## Cyber Security Glossary

Here is a small glossary of jargon terms that you'll see/hear as you enter this realm.

#### Hacker
Before the media appropriated *our word*, this referred to a curious person who
enjoys pushing technology to its limit by discovering its clever and unintended
(mis)uses.

Now it refers to *any* [cyber criminal](http://www.catb.org/jargon/html/H/hacker.html)


#### [Cracker](http://www.catb.org/jargon/html/C/cracker.html)
One who breaks the security on a system; metaphor borrowed from "cracking" a safe.


#### [Script Kiddie](http://www.catb.org/jargon/html/S/script-kiddies.html)
(*Pejorative*) An unskilled cracker who relies upon pre-written programs or scripts created by other script kiddies only slightly more advanced than they are.

The reason *script kiddies* are looked down upon is because the temptation for the quick and easy success found in somebody else's programs quashes any drive or curiosity they had to learn something for themselves.  Being unable to contribute to the scene in a meaningful way while acting like they are 1337 makes them insufferable both to the victims of their attacks as well as those within the scene.


#### [Black Hat](http://www.catb.org/jargon/html/B/black-hat.html)
An attacker who is motivated by malice or personal gain.  The image is take from old black-and-white westerns where the **bad guys** conveniently wore easily identifiable black cowboy hats.


#### White Hat
An attacker who is motivated by a sense of altruistic duty and is just trying to help


#### Gray Hat
A cracker with "flexible" morals/motivations

In either case, unless you are invited onto a system for the purpose of hacking, you are an intruder and will be treated as such. The "I was only trying to help" defense doesn't work on [embarrassed CIOs](https://www.theverge.com/2017/8/5/16097946/marcus-hutchins-malware-tech-wannacry-arrest-cfaa-prosecution-charges)

Smart companies and organizations are serious about security and take a proactive approach by hiring professional penetration testers to "hack" into their system to learn about their own vulnerabilities.  Not-so-smart companies and organizations react to cyber security attacks by turning to legal remedies and threats.  Be sure you know who you're dealing with before offering your "help".


#### Red Team
Professional attackers hired to break into a system to discover weaknesses


#### Blue Team
Professionals tasked with keeping attackers out of a system


#### Red Team == Blue Team
It is worth pointing out that for most (smart) organizations "red team" and "blue team" don't refer to specific employment positions within a company.  The same people perform both roles, spending a portion of their time building up defenses and a portion of their time poking at the walls looking for soft spots.


#### Penetration Testing
A red team activity that discovers weaknesses in a system.

How easy your job is as a haX0r/pen tester depends upon how much information you can gain about the target.  The weakest link in your system is most often not the technology, but rather the people who use it.


#### Open Source Intelligence (OSINT)
Collecting and analyzing data available through publicly-available sources.


#### Google-Foo / Google Dorking
Using search engines to find information that is inadvertently public.  These terms imply that the user makes use of advanced search features and specialized query operators.


#### [Social Engineering](http://www.catb.org/jargon/html/S/social-engineering.html)
The use of deception to manipulate individuals into divulging confidential or personal information that may be used for fraudulent purposes.  Despite the perception of hackers being socially awkward basement dwellers,  An awful lot of hacker culture is based upon this necessary skill.

#### [Phreaking](http://www.catb.org/jargon/html/P/phreaking.html)
"Hacking" the telephone system.  Due to the early internet's reliance on the telephone network for connectivity, from the mid 70's through the late 80's the phreaking scene and the hacking scene were essentially the same.  While phreaking has since gone the way of land-line telephones, it is most notable for the cultural legacy it has left on the scene.

#### White Box Hacking
Defeating the security of a program with the aid of its source code


#### Black Box Hacking
Defeating the security of a program WITHOUT the aid of its source code


#### [Security Through Obscurity](http://www.catb.org/jargon/html/S/security-through-obscurity.html)
The naive belief that maintaining the secrecy of source code will protect systems from misuse.

Obviously, `source code > !source code`.  But don't make the mistake of believing that keeping source private leads to increased security.  Many great systems have fallen due to the hubris of their designers' whose belief in their own cleverness was sadly over-inflated.

The obscure system only needs to fall *once*.  After that, Pandora's box is open and the vital secret is never to be covered again.


#### Network Operations Center (NOC)
Where the system administrators do their work.


#### Two-Factor Authentication (2FA)
A method of confirming a user's claimed identity in which a user is granted access only after successfully presenting 2 pieces of evidence to an authentication mechanism.



### C-suite positions related to computer security (C-level)

*   While at conferences and online you'll come across these important acronyms which aren't, strictly speaking, hacker jargon, but may be confusing nonetheless.
*   The people holding these positions are very often the target of directed attacks.
    *   In your own organization, the accounts and credentials of these officers are the most important to protect, since they have access to the most sensitive information.

#### Chief Information Officer (CIO)
Director of Information Technology in an organization.  Often, the responsibilities of cyber security fall on this individual.


#### Chief Security Officer (CSO)
Senior executive responsible for security in all of its aspects, including physical, financial, and reputation.


#### Chief Information Security Officer (CISO)
Position specifically appointed to address all risks and needs involving all information assets.



## Security Best Practices

### Security is about Risk Management

There is one technique or technology that is guaranteed to protect a system from attack: pull the plug.  A computer that is not running can't be hacked into.

Jokes aside, there is, in general, an inverse relationship between usability and security; the more secure a system is, the less user-friendly it is.  This creates friction for the users who actually work on the system on a daily basis.  Out of frustration users will actively defeat protective measures in exchange for convenience.

The question that system administrators need to answer is "how much security is *too much*?"  There is a point of diminishing returns, both in terms of financial cost and users' goodwill.  Once that point is exceeded, adding another security measure may harm the security of the system.

The cost of being breached must be weighed against the cost of defense.  A good balance is reached when you raise the bar *just* enough to make breaking into your system more hassle than it's worth.  When you're being chased by a bear, you don't need to be faster than the bear.  You just need to be faster than your buddy.

![Be faster than your buddy](./assets/outrun-the-bear.jpg "Be faster than your buddy")


*   Are you expecting attacks from script kiddies, from Hacktivists or from national security organizations?
*   What's the worst thing that could happen if your Raspberry Pi is hacked into?
*   What's the worst thing that could happen if your database server is hacked into?
*   What does it cost you if your Netflix account is broken into?
*   What does it cost you if your online Bank account is broken into?

Your system doesn't have to be the most secure thing in the world; it only needs to be secure enough to make attackers pass on to easier targets.



### Password Hygiene

NIST has published best-practices revolving around passwords and digital identity management.

*   [NIST's new password rules: a summary](https://nakedsecurity.sophos.com/2016/08/18/nists-new-password-rules-what-you-need-to-know/)
*   [NIST: Digital Identity Guidelines](https://pages.nist.gov/800-63-3/)

[Key updates include the following](https://pages.nist.gov/800-63-FAQ/#q-b5)

0. Avoid using passwords from dictionaries - both real-world and h4X0r dictionaries.  Lists of known passwords are [easily obtainable](https://github.com/danielmiessler/SecLists).  *Do* check that your new password *does not* occur in a password list.
1. Don't rely on adding extra 'special' characters to your password if it makes it too difficult to remember.  Complexity is good, but longer and memorable is better than complex and cryptic.  [GRC's Password Haystack](https://www.grc.com/haystack.htm).
2. Don't change your password unless you have reason to believe it is compromised.  Your password is not a nuclear launch code - it must be optimized for ease-of-use instead of resilience against snoopy bad guys. The standard practice of requiring frequently changing passwords leads to poor passwords.
3. Enable 2FA where possible.  This is the #1 thing that stops attackers in their tracks.  It can be annoying for users, but is devastating to intruders.


### Protect your primary email account

Don't share passwords between services - if one password falls, hackers will try it on other services you are likely to use.

Give your primary email account the highest level of scrutiny and security.  If your email account's password is discovered, it is game over.  From your email account, a motivated attacker can:

0. Lock you out of the one resource you need to access to protect everything else.
1. Easily find other accounts and services you subscribe to, and they have a prime candidate to guess for the password.
2. If you didn't re-use your email password on the other services, they'll request a password reset, which sends a link back to your email account.  This also locks you out of your other accounts, too.


### Git Repo Hygiene

Lots of developers/organizations make the mistake of committing files containing sensitive information into their publicly-available git repositories.  Sensitive information includes:

* Usernames/passwords for administration interfaces
* Cryptography keys
* API keys to privileged endpoints

A plethora of user-friendly tools for scanning GitHub for vulnerabilities exist:

+ [Gittyleaks](https://github.com/kootenpv/gittyleaks)
+ [Git Secrets](https://github.com/awslabs/git-secrets)
+ [Repo Supervisor](https://github.com/auth0/repo-supervisor)
+ [truffleHog](https://github.com/dxa4481/truffleHog)

Once your private data has been put on a public-facing git service there is no way to get it back.  Who can say how many times your repository has been cloned or scanned by script kiddies?  If you create a new commit which scrubs the data, the data still exists in prior commits and can be easily recovered.

While it is possible to retroactively scrub old commits in a git repository, doing so creates a very noticeable nuisance for users who must now re-clone the repository.  This only draws attention to the fact that those old commits must have contained *interesting* information.



### The Layered Approach to Security

[Layers of Security](https://blogs.cisco.com/security/layers-of-security)

Good advice for going out in the winter is to wear layers of warm clothing.  A light, waterproof jacket isn't enough to keep out the cutting wind, but combined with a sweater it will be as good as a parka.  Plus, you have the flexibility to adjust if the wind stops and the sun comes out.

Security tools should be made to work together to cover each others' weaknesses to improve the overall protection and maximize flexibility.  Instead of plonking down $1M on the latest gee-whiz firewall appliance and hoping for the best, you may achieve better protection by combining a few free Open Source systems and enabling firewall already provided by your OS.


## How To Build a Successful Career In Cybersecurity

When speaking to James and John Pope after a guest lecture one semester it came up that many organizations are facing a severe shortage of cybersecurity personnel.

Entry level wages are ~$60k, and this can go up as high as ~$120k with a few years' experience.

If you can pass a background test and a drug test, you could get a job with the FBI today (A person who hires for the federal government told James that he really likes to hire Utahans because they tend to not have problems passing these sorts of tests).

Notice that no mention of skills, training, or degrees is mentioned here.  The most important qualification (after passing the tests) is merely having an *interest* in cybersecurity.

The jobs are out there.  Put on your black hoodie and go get 'em!


### Network, network, network: Get out there and meet people

*   [DC435](https://dc435.org)
    +   Meets 7pm on the 1st Thursday of every month at BTech located at 1301 N 600 W, Logan, UT 84321 - Room 840
    +   On their Slack channel @pope posts a daily roundup of current cybersecurity events
*   Association for Information Systems - Cyber Security Group
    +   2nd & 4th Thursday 6pm Huntsman Hall
    +   Join their Discord [here](https://discord.gg/bCaX6QNRR7)
*   [BSidesSLC](https://www.bsidesslc.org/)
*   [DEF CON](https://defcon.org)
*   [SAINTCON](https://saintcon.org/)
*   Netsec Subreddit [/r/netsec](https://www.reddit.com/r/netsec/)



### Study, study, study: General Security information

*   Podcasts & YouTube Channels
    +   [Network Chuck](khttps://www.youtube.com/networkchuck) *Hack your IT career*
    +   [DC Cybersec](https://www.youtube.com/DCcybersec) *I'm here to help you get into the Cyber Security industry by teaching you the tools and techniques I use on a daily basis, as well as give you motivational support to push ahead and be the best you can*
    +   [PwnFunction](https://www.youtube.com/channel/UCW6MNdOsqv2E9AjQkv9we7A) *I make Animated Computer Science Videos*
    +   [Black Hills InfoSec](https://www.blackhillsinfosec.com/blog/) "Pay what you can" trainings and seminars
    +   [Darknet Diaries](https://darknetdiaries.com/) - *True stories from the dark side of the Internet*
    +   [Security Now](https://twit.tv/shows/security-now) *Cybersecurity authority Steve Gibson and technology expert Leo Laporte explore digital security topics in depth*
    +   [IntelTechniques by Michael Bazzell](https://inteltechniques.com/podcast.html) *This weekly podcast presents ideas to help you become digitally invisible, stay secure from cyber threats, and make you a better online investigator*
*   Mailing lists - where a lot of up-to-date security news is broken
    +   http://seclists.org/
    +   http://openwall.com/lists/
*   Common Vulnerabilities and Exposures - Authoritative list of publicly known security vulnerabilities
    +   https://cve.mitre.org/
*   Electronic Frontier Foundation - A nonprofit defending digital privacy and free speech online
    +   https://www.eff.org/
*   Bruce Schneier's Crypto-gram Newsletter - Bruce is the Chuck Norris of cybersecurity
    +   https://www.schneier.com/crypto-gram/
*   Brian Krebs - Journalist/blogger specializing in cybersecurity
    +   https://krebsonsecurity.com/
*   The Open Web Application Security Project (OWASP) - the free and open software security community
    +   [OWASP Cheat Sheet Series Project](https://cheatsheetseries.owasp.org/)
        +   common security pitfalls and advice
    +   [OWASP Top Ten Project](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
        A quasi-annual ranking of the most common security issues.  These are not the
        most critical nor dangerous issues, they are the *most common* security
        issues in real-world applications.  Defend yourself against these low-hanging
        fruit and you'll be way ahead of the pack!
*   [List of miscellaneous resources curated by Mubix](https://github.com/mubix/repos)
*   [List of miscellaneous resources curated by Robert Musser](https://rmusser.net/docs/)
*   [MITRE ATT&CK](https://attack.mitre.org/) *A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.*
*   [MITRE D3FEND](https://d3fend.mitre.org/) *A knowledge graph of cybersecurity countermeasures*


### Practice, practice, practice: Advice from Daniel Miessler

> If you can't code, you'll always be dependent on those who can.
>
> https://danielmiessler.com/blog/build-successful-infosec-career/


Learn to code. Create a security laboratory and play with code.  The biggest investment into your laboratory isn't money, but time.  Start with a few programs in Virtual Machines on your laptop or Desktop.  Acquire small pieces of hardware as your needs grow.  A cheap router and a few Raspberry Pis will suffice to mock up a physical network.


### Offline Tutorials and Games

Stock your laboratory with these programs and go to town!  Because these apps *are* vulnerable, you should not run them on a computer which contain important or sensitive information.  It is best to sequester these within a Virtual Machine or to keep them on a separate network which is not accessible from the Internet.

*   [Terracotta Bank](https://github.com/terracotta-bank/terracotta-bank)
    *   An intentionally vulnerable Java web application for educating on and practicing secure Java coding techniques
*   [Vulnhub](https://www.vulnhub.com/)
    *   A site that provides materials to allow anyone to gain practical 'hands-on' experience in digital security, computer software & network administration
    *   Lots of intentionally vulnerable VM images that you can download and exploit in your home lab
*   [OWASP Security Shepherd](https://www.owasp.org/index.php/OWASP_Security_Shepherd)
    *   A guided tutorial with interactive labs to reinforce each new topic introduced.
*   [OWASP Security Knowledge Framework](https://www.securityknowledgeframework.org/)
    *   SKF is a fully open-source Python-Flask web-application that uses the OWASP Application Security Verification Standard to train you and your team in writing secure code, by design.
*   [OWASP Broken Web Applications Project](https://www.owasp.org/index.php/OWASP_Broken_Web_Applications_Project)
    *   A laboratory project for learning how to exploit and defend from common web application vulnerabilities.
*   [OWASP WebGoat Project](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project)
    *   An intentionally vulnerable .NET web application
*   [OWASP Juice Shop](https://www2.owasp.org/www-project-juice-shop/)
    *   OWASP Juice Shop is probably the most modern and sophisticated insecure web application! Juice Shop encompasses vulnerabilities from the entire OWASP Top Ten along with many other security flaws found in real-world applications!
*   [Damn Vulnerable Web Application (DVWA)](http://www.dvwa.co.uk/)
    *   An intentionally vulnerable PHP/MySQL web application
*   [bWApp - buggy Web App](http://www.itsecgames.com/)
    *   bWAPP, or a buggy web application, is a free and open source deliberately insecure web application


### Online tutorials and games

*   [OverTheWire](http://overthewire.org/wargames/)
    *   One site with many kinds of CTF games, including command line challenges and web app
*   [Hack The Box](https://www.hackthebox.eu/)
    *   You must hack into this site to get an account
*   [Google Gruyere](https://google-gruyere.appspot.com/)
    *   An online code lab created by Google.  Contains an easy-to-follow tutorial that guides you through black box and white box exploits
*   [Hack This Site](https://www.hackthissite.org/)
    *   An online web application hacking training
*   [Vulnlab (Beta)](https://vulnlab.com) *Vulnlab is a private lab environment for Patreon subscribers with various vulnerable machines*
*   [CTF Time](https://ctftime.org/) *Worldwide schedule of open CTF events*
*   [SANS KringleCon](https://www.sans.org/mlp/holiday-hack-challenge/) *The SANS Holiday Hack Challenge is a FREE series of super fun, high-quality, hands-on cybersecurity challenges where you learn new skills*


## Red Team Tools

*   [Have I Been Pwned](https://haveibeenpwned.com/)
    *   Find out whether your username/email address has been compromised in a publicly-acknowledged data breach
    *   Or somebody else's
*   [Shodan](https://shodan.io)
    *   Exploit search engine for the Internet of Things
    *   Look up your own IP address to see what you look like to the outside world
*   [NMAP - The Network Mapper](https://nmap.org/)
    *   A Free Network Scanner
*   [OWASP Zed Attack Proxy (ZAP)](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project)
    *   The OWASP Zed Attack Proxy can help you automatically find security vulnerabilities in your web applications while you are developing and testing your applications. Its also a great tool for experienced penetration testers to use for manual security testing.
*   [Burp Suite](https://portswigger.net/)
    *   Web Application Security Tool
*   [Kismet](https://www.kismetwireless.net/)
    *   WiFi network sniffer
*   [Metasploit](https://www.metasploit.com/)
    *   Penetration Testing Multi-tool
*   Linux Distributions for Penetration Testing and Ethical Hacking
    *   [Kali](https://www.kali.org/)
    *   [BlackArch](https://www.blackarch.org/) - A derivative of Arch Linux
    *   [ParrotSec](https://www.parrotsec.org/)
*   [Wireshark](https://www.wireshark.org/)
    *   Network traffic analysis tool


## Blue Team tools

Defenders have a harder job than attackers.  Attackers have to succeed but once, but defenders are expected to block 100% of attacks.  Additionally, defenders have the extra burden of keeping their users happy.  The attacker's boss doesn't usually care how inconvenient his employees activities are to his target's users.

*   Antivirus (AV)
*   Firewalls
*   Automated alerts when an application logs a particular message
*   System updates
*   Personnel polices and procedures
*   plus all of the "red team" tools

The blue team's biggest asset are the people who they work with.  Unfortunately, their coworkers are also their biggest weakness.

Oftentimes a breach goes unnoticed for a time; rarely does a blue team get to lock-down a system as a threat is unfolding (i.e. real-time anti-hacking as seen in movies).

In order to reduce the amount of time between the breach and its detection, automated Intrusion Detection Systems can be used to raise the visibility of attacks.

### File Integrity Monitoring (FIM)

Looks for changes in files which should not be changed. Distinct from a virus scanner in that a virus scanner is looking for particular patterns within files which are known to be due to a virus. A FIM tool notifies the administrator when a file undergoes *any* change for *any* reason, without regard to matching a known pattern.

Example: [Open Source Tripwire](https://github.com/Tripwire/tripwire-open-source)


### Intrusion Detection System (IDS)

A Network Intrusion Detection System (NIDS) monitors traffic moving into and out from a network-connected device for anomalies. The NIDS can simply report anomalies as it sees them or take action in response to this.

There is some conceptual crossover between a NIDS and a firewall, and emerging technologies are blending all of these devices into one:

*   Firewall: look over just the headers of a network packet and reject bad packets
*   NIDS: performs a deep inspection of the entire contents of a packet and log malicious events (a.k.a. passive NIDS)
*   Intrusion Prevention System: perform deep inspection of packets and reject bad ones. (a.k.a. active NIDS)

Example: [Snort](https://www.snort.org)
