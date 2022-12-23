# The Secure Shell and Encrypted Tunnels

The Secure Shell (SSH) is an indispensable piece of technology.  Many web
development shops take advantage of SSH to automatically deploy websites.  You
have already been relying on SSH to securely submit your assignments to my Git
server.  Mastery of this powerful tool will set you apart from your peers
whether your interests lie in app development, system administration and
deployment or application security.

SSH is a vast topic.  This document explains a small portion of SSH's
functionality, namely how to use SSH to securely connect to a remote system and
establish secure tunnels between systems.  If you want to learn how to 

*   Configure SSH clients and servers
*   Use SSH keys to avoid the hassle of passwords
*   Use SSH to securely transfer files between systems

I recommend that you read the [OpenSSH manual](https://www.openssh.com/manual.html)

## Topics:

*   [SSH and the Web Developer Roadmap](#ssh-and-the-web-developer-roadmap)
*   [Remote shells 1.0: `telnet` and `rsh`](#remote-shells-10-telnet-and-rsh)
*   [Remote shells++: SSH](#remote-shells-ssh)
*   [Network connections and port numbers](#network-connections-and-port-numbers)
*   [SSH tunnels](#ssh-tunnels)
*   [Local port forwarding](#local-port-forwarding)
*   [SOCKS proxy (a.k.a. Dynamic port forwarding) (a.k.a. Poor man's VPN)](#socks-proxy-aka-dynamic-port-forwarding-aka-poor-mans-vpn)
*   [Remote port forwarding](#remote-port-forwarding)



## SSH and the Web Developer Roadmap

[WebDev Roadmap](https://github.com/joshuajosh59/Webdeveloper-roadmap)


So far you've been working with a web server that runs on your laptop.
However, a real-life production system won't be running from your personal
workstation.  It likely won't even be running on a machine that is within
driving distance of your office.

Controlling a web site means either:

0.  Using the control panel webpage provided by a web hosting company. This
    works so long as the web host has provided all of the tools that I want to
    be able to use (not likely, since their target audience are all muggles).
1.  Connecting to a command console on the server and directly running
    commands.  This puts you in complete control.  And so long as the server
    has a command shell and familiar tools, you won't have to re-learn a new
    control panel interface every time you encounter a new web hosting provider
    (or when the web host upgrades the control panel at their own whims).

This semester we've been using the command line because many web technologies
were created in this environment.  You are not likely to become a well-rounded
web developer by avoiding contact with the command line.

SSH enables you to securely connect to and administer remote systems from
anywhere in the world, and gives you the most control of any interface
available.  Let's take a look at why security is such an important
consideration.


## Remote shells 1.0: `telnet` and `rsh`

The earliest remote shell programs offered users the convenience of connecting
to remote systems over the internet, albeit without the protection of
encryption.

Wireshark (https://wireshark.org) is a tool that allows me to snoop on network
traffic. I'll use it to illustrate the shortcomings of a non-encrypted remote
shell program:

*Demo: telnet jim@localhost w/ wireshark*

![A tube you can see through is not secure](./assets/wonka-gloop-pipe.gif "A tube you can see through is not secure")


You can see everything the server prints out, including the prompts. You also
can see every keystroke I make, including my username and password. They're
helpfully highlighted by the prompts!


## Remote shells++: SSH

The Secure SHell (SSH) prevents this information leakage by encrypting the
entire conversation using secret keys which aren't exchanged directly over the
wire, so an eavesdropper cannot decrypt our conversation.

The details of how the secret key exchange works is outside of the scope of our
class.  However, I highly encourage you to read up on it over the upcoming
break.  It's fascinating stuff!

*   [Diffie-Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
*   [RFC 4419: DH Group Exchange](https://www.ietf.org/rfc/rfc4419.txt)


Most folks use a version of SSH software called [OpenSSH](https://www.openssh.com),
created by the OpenBSD foundation.  OpenSSH is a console-only program and does
not provide a GUI or a terminal emulator to run in.  Another popular
implementation is PuTTY, which is an SSH client embedded within its own
terminal emulator.

I will show you how to use the OpenSSH client.  If you understand how it works
it is straightforward to figure out how to do the same things in another
client.

The OpenSSH client is invoked from the command line like this (optional
arguments are surrounded by square brackets):

```
ssh [-R address] [-L address] [-D port] [-p port] [user@]hostname
```


If you leave off the username, SSH substitutes the name under which you are
currently logged in.  If you leave off `[-p port]`, port 22 is used for the SSH
connection itself.

*Demo: SSH to jim@localhost w/ wireshark*

![This is what SSH looks like to your computer](./assets/trippy-tunnel-0.gif "This is what SSH looks like to your computer")


## Network connections and port numbers

Communication between two computers across a network requires two pieces of information:

*   IP address
*   Port number

The IP address identifies a machine on the network.  Domain names (or host
names) are human-friendly synonyms for numeric, machine-friendly IP addresses.
The special IP address `127.0.0.1` is used by a computer to refer to itself.
The hostname `localhost` is the synonym for `127.0.0.1`.

A port number identifies a service on that machine.  A port number is a 16-bit
unsigned integer, covering the range `[0..65535]`.  Some port numbers are
reserved for the use of specific services.

| Port | Service
|:----:|---------------------------------------------
| 20   | File Transfer Protocol (FTP) data
| 21   | File Transfer Protocol command
| 22   | Secure Shell (SSH)
| 23   | Telnet
| 25   | Email - Simple Mail Transfer Protocol (SMTP)
| 43   | WHOIS
| 53   | Domain Name System (DNS)
| 80   | Hyper Text Transfer Protocol (HTTP)
| 443  | HTTP over Secure Sockets Layer (HTTPS)
| 666  | Doom PvP Deathmatch
| 3389 | Microsoft Remote Desktop Protocol (RDP)
| 8000 | Django development server
| 8080 | HTTP alternative


As you've noticed as you've worked on Django, you can specify a port number
(i.e. 8000) after the hostname in a URL, separating the port number with a
colon `:`.

You might think of port numbers as analogous to channels on a TV.  You tune
into channel 80 to talk to the HTTP server, and use port 443 to talk to the
server securely.  The `nslookup` program talks to a DNS server over port 53,
etc.

*   [Ports on Wikipedia](https://en.wikipedia.org/wiki/Port_(computer_networking))
*   [IANA Service Name and Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)


## SSH tunnels

Another SSH feature is called "tunnels", which are secure channels for other
data apart from the secure shell to flow.  There are many uses for this - I'll
illustrate just a few for you today.

For purposes of today's lecture I'll use the hostname `viking-dyn` as the
SSH server. In all of my examples you may replace that with the hostname of
*your* SSH server.

When dealing with tunnels, we name the two ends of the tunnel **local** and
**remote** from the point of view of the *SSH client*.  Each end of a tunnel is
defined by its *IP address* and its *port number*.  Network traffic is directed
to a port on one machine, flows through the tunnel, and comes out at the other
side.  The traffic will enter from one IP:port and come out with a new IP:port.

Keep these definitions in mind throughout this discussion:

#### Local: the end of the tunnel at the SSH Client (e.g. your laptop)

#### Remote: the end of the tunnel at the SSH Server

Further reading: https://rufflewind.com/2014-03-02/ssh-port-forwarding


## Local port forwarding

This causes a port on your laptop to be connected through a tunnel to a port on
the machine hosting the SSH server.  Traffic from your laptop appears to come
out at the server.


### Use case: Access systems protected behind a firewall

I have a router in my home network.  It has a webpage from which I administer
it.  To prevent hackers from taking over my home network, this admin webpage is
only available from within my home network.  What if I need to fix something on
my home network for my family while I'm here at school?  Do I need to run home
to fix it?

If only I had a way to "bounce" a connection from my laptop here at work
through some device within my home network into my router...

![We'll dig our way out of this prison](./assets/great-escape-tunnel-0.jpg "We'll dig our way out of this prison")


Now, I do have a Raspberry Pi in my house which has an internet-exposed SSH
server.

I'll connect to my Raspberry Pi (named `viking-dyn`) and command SSH to tunnel
port 9000 on my laptop through the SSH connection into `viking-dyn`, connecting
the other end of the tunnel to port 80 on my router:

```
$ ssh viking-dyn -L9000:router.asus.com:80
```

The syntax of the -L argument breaks down like this:

```
-L local port ':' remote address ':' remote port
```

So long as this SSH connection is alive, I can go to http://localhost:9000 on
my own laptop and it will go to my router by way of my Raspberry Pi.

The "remote address" is a hostname which is reachable from the SSH Server.
The address `router.asus.com` is the hostname of my own router from the
point-of-view of my Raspberry Pi.

The connection formed by this command is made from the *perspective of the
remote machine*.  What computer does the name `localhost` refer to?  It depends
on which computer you're on!  I may connect to a service *on* my Raspberry Pi
itself by using `localhost` as the *remote* address.  Here's a coinflip service
I run from my house:

```
$ ssh viking-dyn -L9001:localhost:5050
$ nc localhost 9001
```

You may forward multiple connections on one command line by repeating the `-L` option.
This command:

```
$ ssh viking-dyn \
    -L9000:router.asus.com:80 \
    -L8000:printer.falor:80 \ 
    -L9001:localhost:5050 
```

0.  Connects to my Raspberry Pi named `viking-dyn`
1.  Forwards port 9000 on *this* computer to the HTTP port on my router.  Within my home network the hostname `router.asus.com` resolves to `192.168.1.1`.  Outside of my home network that name does not resolve to *any* IP address.
2.  Forwards port 8000 on *this* computer to the HTTP port on a device named `printer.falor` from the point-of-view of my Raspberry Pi.
3.  Forwards port 9001 on *this* computer to port 5050 of my Raspberry Pi (again, `localhost` is interpreted from the point-of-view of my Raspberry Pi).


### Adding new tunnels at runtime (Optional)

I've showed how to set up tunnels using command line arguments to the ssh
program. If you're using the OpenSSH client you can add new tunnels without
closing down your SSH process, using the same syntax as the command line
arguments.

To do this I need to tell OpenSSH to *not* pass the next keystrokes I type
through the connection to the remote system. Do this by using the SSH *escape*
key, which by default is tilde `~`

0.  Type the SSH *escape* key (tilde) to put the OpenSSH client into command
    line mode SSH only recognizes the escape key if it immediately follows a
    newline.
    *   Just to be safe, it's best to hit Enter before typing the escape key.
1.  Enter 'C' to put OpenSSH into command line mode
2.  Enter a command line argument in the prompt just as you would enter it if
    you were invoking the ssh program on the command line

You can use the escape sequence `~?` to cause OpenSSH to print out a help
screen of the available commands.  



### Use case: Covering your tracks

I can make it appear to the internet that I'm accessing certain webpages from
my home network instead of USU campus.  The 'remote address' in the -L argument
can be *any* address reachable from my SSH server (in this case, my Raspberry
Pi).  Suppose I want to visit the site http://checkip.dyndns.org *through* my
Raspberry Pi:

```
$ ssh viking-dyn -L9002:checkip.dyndns.org:80
```

Now, if I connect to http://localhost:9002 from my laptop, I reach
checkip.dyndns.org having first gone through my Raspberry Pi at home.  So far
as dyndns.org can determine, I'm connecting from my house, not from USU campus!

Theoretically, I could use this to tunnel to any website of my choosing; if I
have enough local ports I can map each one to a separate web site and give them
the impression that I'm connecting from my SSH server.

In practicality, systems such as HTTPS with hostname-based certificates make
this brittle.  Moreover, nearly all webpages include resources from lots of
different addresses, and this only lets me tunnel into a few at a time.

![We're gettin' out of here or we'll die trying!](./assets/great-escape-tunnel-1.jpg "We're gettin' out of here or we'll die trying!")


## SOCKS proxy (a.k.a. Dynamic port forwarding) (a.k.a. Poor man's VPN)

Cause a port on your laptop to forward requests from a web browser through the
SSH Server.

Suppose I work at an office with a web filter which prevents me from visiting
Stack Overflow or other websites because "muh social media and inappropriate
content".

#### True story

Experts-exchange.com is a site similar in intent to Stack Overflow.  It was
once hosted on the domain 'expertsexchange.com'.  Our HR department didn't
approve of employees visiting that site while on the clock.  Whenever
programmers had coding questions that couldn't be answered elsewhere, they had
to resort to tunneling through their computer back at home to reach this
webpage.  The IT department was aware that we did this but looked the other way
because the firewall policy existed "mostly to keep sales & support on-task".


#### Other reasons to tunnel

Perhaps your IT department trusts a creepy Russian antivirus program which
installs its own certificates so they it decrypt my traffic as it moves
through their router.

Or, suppose that you're at McRestaurant using McFree WiFi.  You may not
trust WiFi networks that you don't pay for.  For one thing, it is provided by a
corporation which doesn't regard its customers well enough to feed them real
food.  For another thing, there is a dude sitting across from you with what
appears to be a WiFi Pineapple sticking out of his laptop.

You can use local port forwards to protect traffic on a host-by-host basis, but
it would require you to manually set up lots of port forwards, and you would
still have to remember which port goes with which website.  Any websites which
use absolute URLs will break (this would be almost all of them).

It would be nice if you could tell your browser to bounce *all* of its requests
through the SSH server running on a trusted system, and do all of the work of
keeping everything straight.

OpenSSH has you covered as it provides an interface known as a SOCKS proxy
which scales my tunnels up to a usable level.  It's a bit like using a VPN
connection on an application-by-application basis.

```
$ ssh viking-dyn -D12345
```

Next, configure the web browser on your laptop to use local port 12345 as a
SOCKS proxy.  Each request will securely go through an encrypted tunnel to my
Raspberry Pi and all of my web traffic will appear to originate from my house.
All of it.

![./assets/trippy-tunnel-1.gif](./assets/trippy-tunnel-1.gif "Surf cyberspace in security and convenience")


### Use case: Test a web service from many locations

If I ask DuckDuckGo [what is my ip address?](https://duckduckgo.com/?q=what+is+my+ip+address),
it reports that I'm at USU.  What happens when I ask the same question from
another computer?



## Remote port forwarding

Make a port at the server connect to a port on your own laptop.

Here's the Django server I've been developing on my laptop:

    http://localhost:8000/hello/highfives

Right now, I need somebody to visit that URL and tell me how nice it looks.


Oh, you can't reach my laptop through the domain name `localhost`? Now try this:

    http://endeavour.bluezone.usu.edu:8000/hello/highfives

How does that look?  Impressive?  The only trouble with this scheme is that I have to

0.  Remember to run my Django server with the command

    ```
    $ python manage.py runserver 0.0.0.0:8000
    ```
1.  Share with you my IP address (which is always different), or
2.  Share with you my hostname on this network (which I may or may not be aware of)

I must also be aware that anybody who I invite onto my laptop this way can
*always* connect to Django if I leave it running on the IP address `0.0.0.0`.
It would be nice if I could turn *that* part of it off without needing to stop
Django.

A better approach is to tunnel a connection to a separate server with a stable
IP address/hostname.  When I want to block you from accessing my Django server,
I simply close the SSH connection to the server in the middle.


### Use case: Let a customer test a web site under development on my laptop

Suppose that I'm a freelance webdev hacker working on my client's cool new web
site on my own laptop.  I don't want to give my client full access to my laptop
because I have other stuff on there that's not for them.

Yet, the client demands to know that I'm making progress.  I haven't yet gotten
the kinks all worked out on the testing server.  The app works *great* on my
laptop, but it isn't exactly impressive (or practical) bring my laptop to their
office to show them how awesome it is (maybe they are on the other side of
the country).

Remember that my Raspberry Pi *is* on the internet.  What if I could ask my
client to connect to my Raspberry Pi, and have that connection come directly
into my own laptop.  Now the client can see what I'm working on right now,
without having to physically look over my shoulder.  My private laptop is only
online so long as I keep that SSH connection open, so I can cut it off at will.

For this to work, I must edit my Raspberry Pi's SSH server configuration file
and enable the `GatewayPorts` setting:

    GatewayPorts yes


From the machine *running* Django I issue the command

    $ ssh viking-dyn -R8000:localhost:8000


Now, will someone please visit `http://unnovative.net:8000/hello/highfives`?


The syntax of the `-R` command breaks down like this:

```
-R remote port ':' local address ':' local port
```

The 1st number is the port which you may connect over the internet to my
Raspberry Pi.

The "local address" in the middle is the hostname of the machine hosting the
Django server *from the point of view* of the SSH command.  Because the SSH
command is running on the same machine as Django, the correct hostname is
`localhost` which means "this very same machine".

The 3rd number is the port on my laptop which my Django server is listening to
connections on. 



#### ngrok: remote port forwarding as a service

If you don't have your own Raspberry Pi on the internet, you can use a 3rd
party service such as https://ngrok.com/ to do this.

You install a program on your computer which does the SSH connection for you.
On ngrok's end, they give you a nice, memorable domain name which connects back
through your tunnel onto your laptop.

![./assets/plaid-tunnel.gif](./assets/plaid-tunnel.gif "They've gone into plaid!")
