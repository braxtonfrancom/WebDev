# Domain Names and the Domain Name System (DNS)

The Domain Name System (DNS) is the internet's *hierarchical, decentralized* naming system.  It is a critical part of the internet's infrastructure.


## Table of Contents

*   [The HTTP Hosts header](#the-http-hosts-header)
*   [How the Domain Name System Helps You Find Things Online](#how-the-domain-name-system-helps-you-find-things-online)
*   [Choosing Your Own DNS Server](#choosing-your-own-dns-server)
*   [Adding an Entry to the DNS](#adding-an-entry-to-the-dns)
*   [Common DNS Record Types](#common-dns-record-types)
*   [Querying DNS Servers](#querying-dns-servers)


## The HTTP Hosts header

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host

### HTTP Protocol and Headers (review)

A client initiates a communication in HTTP by sending a request to a server. 
An HTTP request begin with a block of headers in the form of

    METHOD PATH VERSION
    Header0: value0
    Header1: value1
    ...
    <blank line>
    Content data follows...


#### An example of HTTP headers, as they appear "on the wire":

    POST /unitconv HTTP/1.1
    Host: eriks-cool-django-site.com
    User-Agent: Mozilla-Compatible, but I'm Chrome, and I'm on Linux
    Cookie: chocolateChip=Yummy;
    Content-Length: 1024

    CONTENT GOES HERE, ALL 1024 BYTES OF IT...

Each time your browser makes a request to a website, it sends along the hostname of the website that it's talking to as the `Host` header.  The hostname could be the server's own IP address, but typically the hostname is expressed as a **domain name**.


#### Domain name

> A domain name is a string of text that maps to a numeric IP address, used to access a website from client software.
>
> In plain English, a domain name is the text that a user types into a browser window to reach a particular website. For instance, the domain name for Google is ‘google.com’.
>
> -- Cloudflare, [What is a Domain Name?](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/)



### [Django 'hostname' demo app](../cs2610proj/hostname/)

This Django app renders a different template depending on the domain name your
browser visits, one of

*   `localhost`
*   `dogs.org`
*   or `cats.com`

When your browser requests a page it sends in the `Host` header the domain name of the website it means to visit.  The server chooses to render a different page based on which site the browser thinks it's visiting.

Seeing this app should raise a few questions for you:

* How can three different domains (a `.com` and a `.org`, no less!) point to Django on my own computer?
* Why does my browser need to tell the server what the server's name is?  Doesn't the server already know its own name?

Computers are configured (arbitrarily) to associate the hostname `localhost`
with the IP address `127.0.0.1`.  This is the IP address which Django listens
for connections, but your browser also sends Django the name `localhost` in the
`Host` HTTP header.  This is needed because one IP address can have *multiple*
domain names.

`localhost` is merely the default name for the address `127.0.0.1` but you are
free to change this, provided you can find the hostnames configuration file:

* On Linux and Mac this file is called `/etc/hosts`
* On Windows 7/8/10 look for a file called `C:\Windows\System32\drivers\etc\hosts`

`hosts` is just an ordinary text file that you can edit it with an ordinary
text editor such as Notepad, though you will need administrator privileges.
**Do not change existing text unless you know what you're doing!**  It's always a good
idea to make a backup of this file before changing it.  As in Python, you can
make a comment by starting a line with `#`.  Add these lines near the top and
save (just don't save it with the `.txt` extension!):

    # temporarily map these domain names back to this computer for the Django hostname demo
    127.0.0.1		cats.com dogs.org

Applications and the operating system itself remembers the IP addresses
frequently used host names translate into.  After you change `hosts` you may
need to flush the system's DNS cache to see these new names:

* On Windows, open an administrator command prompt and run `ipconfig /flushdns`
* On Mac I've seen a few different commands to run in a terminal (it may depend on your version)
    * `sudo killall -HUP mDNSResponder`
    * `sudo dscacheutil -flushcache`
    * If you are using OS X 10.5 or earlier try the following command: `lookupd -flushcache`
* This varies on Linux depending on your DNS software
    * Systems running Systemd run `sudo systemd-resolve --flush-caches`
    * Consult the documentation for other distributions

You may also need to restart your browser as it will remember recently used
domain names on its own.

Start up the Django app and browse to these addresses to see what happens for
yourself:

*   http://localhost:8000/hostname/hostname
*   http://dogs.org:8000/hostname/hostname
*   http://cats.com:8000/hostname/hostname



### Aside: Blocking unwanted domains

You can easily prevent your computer from accessing domains which host
dangerous or illicit content, advertisements, etc.  Update your `hosts`
file map the undesired domains to an address that you control, such as
`127.0.0.1`.

This webpage offers a curated list of known Ad servers.  Adding this list to
`hosts` turns your OS's DNS resolver into an ad blocker!

https://pgl.yoyo.org/adservers/

Likewise, malware that can edit this file can direct your computer to *their*
server when you try to visit a common domain such as `amazon.com`,
`google.com`, etc.  For this reason `hosts` is protected by requiring that you
obtain administrator privileges to change it.



### Aside: I don't like that my browser sends out so much information!

This Django app also shows all of the information that your browser sends to
every server you visit.  All of that information can be used by the server to
decide how to respond to your request.  The significance of the `Host:` header
is illustrated by the fact that the same page can be rendered entirely
differently depending upon which address you *(think)* you are visiting.

Now that you're aware of how indiscreet your browser is, there are some steps
you can take to put your shields up.

You can try the [Brave browser](https://brave.com/download/), which is built
from Google's open source Chromium project to be a privacy-preserving browser.

There are browser plugins which help to preserve your privacy and defeat trackers:

* [Privacy Badger](https://privacybadger.org/)
* [Ghostery](https://www.ghostery.com/)

Google Chrome is planning to phase out the `User-Agent` header in favor of a
more fine-grained approach called **Client Hints** that will give users more
control over what information is shared. 

* https://www.zdnet.com/article/google-to-phase-out-user-agent-strings-in-chrome/
* https://wicg.github.io/ua-client-hints/

Google has pioneered some of the most sneaky tracking techniques, so if anybody
knows how to defeat tracking it would be them.  On the other hand, Google is an
advertising company first and a technology company second (in terms of where
their revenue comes from), so maybe this won't be as awesome as it's cracked up
to be.


## How the Domain Name System Helps You Find Things Online

The [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System)
translates human-friendly hostnames into IP addresses that are meaningful to
routers and other network equipment.

DNS is essentially a database mapping hostnames to IP addresses. To promote
fault-tolerance and also to spread the load across many machines, the database
is split across many servers across the world.
    
In other words, there is no single authoritative DNS server in the world. This
responsibility is shared across many systems across the 'net.

[How DNS works in six steps](https://www.verisign.com/en_US/website-presence/online/how-dns-works/index.xhtml)


### The DNS is Hierarchical

In order to spread the load, a hierarchical, recursive structure exists so that
the many requests from the bottom may be served by a server above it.  If the
server on top doesn't know the IP address corresponding to a particular
hostname, it asks the server above it. This process is repeated (recursion)
until master server at the very top level is consulted.

#### Root servers

*   "Root" servers are at the top level
*   12 organizations operate 13 root servers (named `A` through `M`)
*   Each "root" server contains a database that maps a top-level-domain (TLD) to an authoritative DNS server for that domain
    *   This database is like "the phone book of phone books"
    *   The database is around 2 MB in size
        *   You can download a copy from https://www.iana.org/domains/root/files


#### Top Level Domains (TLDs)

DNS servers are organized around Top Level Domains. TLDs are the highest level
of domain names on the internet.  You will recognize TLDs as the last two or
three letters in an internet address:

* `.com`
* `.org`
* `.edu`
* `.us`
* `.gov`


When your system makes a query it starts with a nearby server which if, it it
doesn't recognize the domain name in turn asks another server, and so on until
the root server is finally consulted.  The response is returned to each DNS
server in the query chain which caches the answer for the next time that
same query is made.

Registering a new domain name is done by placing an order with a domain
registrar who has the authority to add a new record to the database that the
root server draws from.  It takes some time for this new DNS record to permeate
through the DNS system after which users are able to access your website by
name.



### The DNS is Decentralized

In the old days each computer kept its own database of host-to-IP mappings in
its `hosts` file.  Whenever the network changed (e.g. new hosts added, old
hosts removed or renamed) each system administrator had to manually update his
own `hosts` database.  This scheme represents the maximum amount of
decentralization possible.  It worked well when the internet was just a few
dozen systems hosted at a handful of locations by people who all knew each
other.

The other end of the spectrum would be having a single, unifying database.
This would cut down on the amount of work spent on maintaining the database,
but that one database would be huge and *busy*.  If something bad happened to
it, nobody could get anywhere on the 'net.  Also, if the only DNS server was in
the U.S. and you weren't, then you'd enjoy trans-oceanic delays every time you
visited a webpage, independent of where the webpage itself was hosted.

The current hierarchical system represents a good middle ground between these two
extremes.


## Choosing Your Own DNS Server

DNS Servers themselves have IP addresses.  Ordinarily, your computer or device
broadcasts a standard query to the router on an reserved IP address to find out
what DNS server to use on the local network.

The "default" DNS server may be owned by your Internet Service Provider (ISP)
or another unsavory entity which you may not fully trust with your browsing
information.  It may be the case that the default DNS server is very slow.  Or,
you wish to use a custom DNS server who's database purposefully does *not*
contain certain domain names, for malware-prevention or content-filtering
purposes.

For these and other reasons it is a good idea to learn how to manually
configure DNS settings on your own devices.  This means that you should learn
the IP addresses for a few DNS servers.  Out of all of the IP addresses in the
world, these are good ones to memorize; if your DNS is misconfigured, how else
would you find anything on the 'net (including a working DNS server)?

Your router or operating system allows you to configure a pair of DNS servers
for a few good reasons:

* Redundancy in the event that one server is unavailable
* Distribute the load between two machines instead of always requesting the same one

These are some services you can try out.  Each has their own pros and cons.
Do some research to find what features you like best.

| Service          | Server 0       | Server 1        |
|------------------|:--------------:|:---------------:|
| OpenDNS          | 208.67.222.222 | 208.67.220.220  |
| Cloudflare DNS   | 1.1.1.1        | 1.0.0.1         |
| Google DNS       | 8.8.8.8        | 8.8.4.4         |
| Verisign DNS     | 64.6.64.6      | 64.6.65.6       |
| Quad9            | 9.9.9.9        | 149.112.112.112 |


### Configuring your router to use a DNS server of your choice

Your router will inherit its DNS settings from your upstream ISP.

*   If you have Comcast at home, this means that by default you use Comcast's DNS system
*   Idem. if you have CenturyLink or one of the wireless internet service providers
*   If you live on-campus, you are using USU's DNS system

You should override this on your home router.  You may experience better,
faster service from one of the aforementioned companies.  Additionally,
consumer ISPs have been known to take advantage of their customers' DNS
information in the past.

The specifics about *how* to make this change this vary from router to router.
Usually this setting will be in the **WAN**, **Wide Area Network** or
**External Network** area of the configuration page.  Look for two or three
text entry boxes labeled something like `DNS Server #1`.  You input multiple
choices because you need a backup in case one fails.


### Configuring your own PC to use a DNS server of your choice

Devices on your network generally inherit their DNS settings from the router
(which inherited its settings from your ISP).  But it is possible to override
these settings on a per-device basis.

If you have your own wireless router for your home it may be better (read:
easier) to just make this configuration there instead of at each device in your
network.  However, if you do not own or control the router, then you will want
to look into doing this.

Quad9 provides tutorial videos that show you how to choose DNS server(s) on Mac
and Windows:

* [Set up guide for Windows](https://quad9.net/support/set-up-guides/windows)
* [Set up guide for MacOS](https://quad9.net/support/set-up-guides/mac-os)


OpenDNS has guides for several OSes: https://support.opendns.com/hc/en-us/sections/206253647

On Linux, changing your DNS servers used to be as simple as editing a
configuration file called `/etc/resolv.conf`.  The one I use on my router looks
like this:

    # Erik's resolv.conf
    # "search" makes the computers on my network belong to the domain .falor
    # Ex. printer.falor, fridge.falor, bacon.falor, vegetable.falor, etc.
    search falor

    # Use OpenDNS for upstream name resolution
    nameserver 208.67.222.222
    nameserver 208.67.220.220


Some years ago RedHat decided that Linux systems were too easy to administer
and saw fit to overcomplicate things by introducing NetworkManager and later
Systemd.  If you're running a distro that uses one (or both) of these you can
try to edit this file, but changes to it will either be disregarded or will
disappear upon reboot.  To permanently change your DNS server look for the
NetworkManager GUI in your system preferences menu.  Failing that, search for
instructions in your distro's documentation or on StackOverflow.



## Adding an Entry to the DNS

When you buy a web hosting plan a domain name is included in the bundle.
Or, you can register just a domain name from a hosting company/registrar.

*   Domain names on some TLDs are more expensive than others
*   There are a few domain registrars who offer *free* domain names on certain TLDs
*   Freenom.com is one such registrar offering free names on a these TLDs:
    * `.tk`
    * `.ml`
    * `.ga`
    * `.cf`
    * `.gq`

[Free domains from Freenom](https://www.freenom.com/en/index.html?lang=en)

A free account is required to register a domain name.  Free domain names expire
after a few months if you don't periodically log in to renew them.  Yearly
reservations can be purchased for up to 10 years.

After you pick your domain name you must associate an IP address with it by
adding an **A** record to the database.  You can learn your own IP address by
visiting ipstack.com or by asking DuckDuckGo *"what is my ip address?"*

Click `use DNS` and enter your IP address into the boxes provided.  In the next
section of this document you'll learn what an **A** is.  For now, click
continue to complete the reservation.

After a few hours (sometimes days) this entry will permeate the DNS system and
you will be able to visit your own computer through your new domain name.  If
you are impatient, you can re-configure your PC or router to use Freenom's own
DNS servers (`80.80.80.80`, `80.80.81.81`) which will promptly recognize your
new domain name.



## Common DNS Record Types

The DNS contains many types of records besides domain name to IP address
mappings.  Here are some of the types of records that can be queried:

| Abbr. | Name               | Description
|-------|--------------------|--------------------------------------------------------------------------------
| A     | Address            | A 32-bit IPv4 address
| AAAA  | IPv6 Address       | A 128-bit IPv6 address
| CNAME | Canonical Name     | Alias for another hostname
| MX    | Mail Exchange      | Map a domain name to a list of message transfer agents (makes email work)
| NS    | Name Server        | Which Name Server is authoritative for a zone (which NS to use for your domain)
| SOA   | Start Of Authority | Contains the authoritative information for a zone
| TXT   | Text               | Originally for arbitrary human-readable text, but now used by machines

*Tip: Freenom's DNS servers are 80.80.80.80 and  80.80.81.81*


## Querying DNS Servers

Your computer has command-line programs which serve as DNS clients and are able
to communicate to DNS servers.  These programs send and receive traffic over
TCP and UDP port 53, which is reserved for DNS.  Learning how to use these
tools lets you inspect the different types of DNS records in the system.

These tools can be used to diagnose network issues, to learn whether a DNS
server has a domain name in its database, or to compare the performance of
different DNS servers.  Some DNS tools can even perform *reverse* queries,
which tell you the domain name(s) an IP address is known by.

The `netstat` tool reports active network connections on your system.

The `whois` tool makes a different sort of query than the DNS tools.  `whois`
reports the person or organization who owns a domain name by querying the WHOIS
database.  When you register a domain name you are required to give your
personal contact information.  Scammers and spammers use this information in
targeted attacks.  Domain name registrars can keep your name out of the WHOIS
database for a fee.


| Tool           | Description
|----------------|--------------------------------------------------------------------------------------------
| `host`         | Simple DNS query tool
| `nslookup`     | Query Internet name servers interactively (also available on Windows)
| `dig`          | Flexible DNS query tool
| `dig -x IP`    | Perform reverse queries (look up domain name from an IP address) 
| `netstat`      | List IP addresses connected to your computer (also available on Windows)
| `netstat -Wpt` | List domain names/IP addresses are connected to programs running on your computer (Linux)
| `netstat -o`   | List domain names/IP addresses are connected to programs running on your computer (Windows)
| `whois`        | Interrogate the WHOIS database for ownership information of a domain


### Usage examples

#### The `host` tool

    $ host usu.edu
    usu.edu has address 129.123.54.210
    usu.edu mail is handled by 0 usu-edu.mail.protection.outlook.com.


#### The `nslookup` tool

`nslookup` uses your system's configured DNS server by default, but can be made
to use a different server:

    $ nslookup usu.edu
    Server:		192.168.1.1
    Address:	192.168.1.1#53

    Non-authoritative answer:
    Name:	usu.edu
    Address: 129.123.54.210


    $ nslookup usu.edu 1.1.1.1
    Server:		1.1.1.1
    Address:	1.1.1.1#53

    Non-authoritative answer:
    Name:	usu.edu
    Address: 129.123.54.210


#### Run a reverse query with `dig -x`

Here I use `dig` to reveal that the IP address `129.123.54.210` goes by the
name `wfe.usu.edu`.

    $ dig -x 129.123.54.210
    ; <<>> DiG 9.14.7 <<>> -x 129.123.54.210
    ;; global options: +cmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 49584
    ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

    ;; OPT PSEUDOSECTION:
    ; EDNS: version: 0, flags:; udp: 512
    ;; QUESTION SECTION:
    ;210.54.123.129.in-addr.arpa.	IN	PTR

    ;; ANSWER SECTION:
    210.54.123.129.in-addr.arpa. 14400 IN	PTR	wfe.usu.edu.

    ;; Query time: 23 msec
    ;; SERVER: 192.168.1.1#53(192.168.1.1)
    ;; WHEN: Tue Nov 05 13:58:48 MST 2019
    ;; MSG SIZE  rcvd: 81



#### See what domains my computer is connected to with `netstat`

This command works on Linux.  On Windows you can try `netstat -o` instead.

    $ netstat -Wpt
    Active Internet connections (w/o servers)
    Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
    tcp        0      0 192.168.1.68:50684      ec2-3-208-207-107.compute-1.amazonaws.com:https ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:37062      23.111.9.38:https       ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:55880      ec2-52-212-70-141.eu-west-1.compute.amazonaws.com:https ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:33020      s3-1-w.amazonaws.com:https ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:55882      ec2-52-212-70-141.eu-west-1.compute.amazonaws.com:https ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:54304      11.9.211.130.bc.googleusercontent.com:https ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:43874      server-13-227-42-85.msp50.r.cloudfront.net:https ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:52164      129.123.25.239:https    ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:55296      72.21.91.29:http        ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:50722      bigblue01.usu.edu:https ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:35794      server-13-226-37-184.ewr53.r.cloudfront.net:http ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:54088      lb-sso.ser321.usu.edu:https ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:43238      159.89.242.24:https     ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:53562      192.0.73.2:https        ESTABLISHED 28567/firefox       
    tcp        0      0 192.168.1.68:35796      slackbuilds.org:http    TIME_WAIT   -                   


#### Request WHOIS information

    $ whois usu.edu

    This Registry database contains ONLY .EDU domains.
    The data in the EDUCAUSE Whois database is provided
    by EDUCAUSE for information purposes in order to
    assist in the process of obtaining information about
    or related to .edu domain registration records.

    The EDUCAUSE Whois database is authoritative for the
    .EDU domain.

    A Web interface for the .EDU EDUCAUSE Whois Server is
    available at: http://whois.educause.edu

    By submitting a Whois query, you agree that this information
    will not be used to allow, enable, or otherwise support
    the transmission of unsolicited commercial advertising or
    solicitations via e-mail.  The use of electronic processes to
    harvest information from this server is generally prohibited
    except as reasonably necessary to register or modify .edu
    domain names.

    -------------------------------------------------------------

    Domain Name: USU.EDU

    Registrant:
        Utah State University
        4410 Old Main Hill
        Abuse Contact: abuse at usu.edu
        Logan, UT 84322-4410
        USA

    Administrative Contact:
        Information Technology
        USU Information Technology
        4410 Old Main Hill
        Abuse Contact: abuse at usu.edu
        Logan, UT 84322-4410
        USA
        +1.4357974357
        admin.contact@usu.edu

    Technical Contact:
        Information Technology
        USU Information Technology
        4410 Old Main Hill
        Abuse Contact: abuse at usu.edu
        Logan, UT 84322-4410
        USA
        +1.4357974357
        tech.contact@usu.edu

    Name Servers:
        ROOT1.USU.EDU
        ROOT2.USU.EDU

    Domain record activated:    03-Jun-1988
    Domain record last updated: 26-Sep-2019
    Domain expires:             31-Jul-2020


*Updated Fri Nov 11 10:31:13 MST 2022*
