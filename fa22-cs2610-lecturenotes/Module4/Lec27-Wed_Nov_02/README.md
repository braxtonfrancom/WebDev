CS2610 - Wednesday, November 02 - Lecture 27 - Module 4

# Topics:
* [Announcements](#announcements)
* [Web APIs Mud Card Questions](#web-apis-mud-card-questions)
* [Types of APIs and how to use them](#types-of-apis-and-how-to-use-them)
* [What is an API key?](#what-is-an-api-key)
* [Getting data from NASDAQ's API using `curl`](#getting-data-from-nasdaqs-api-using-curl)
* [XMLHttpRequest - the old-fashioned way to make asynchronous HTTP requests](#xmlhttprequest-the-old-fashioned-way-to-make-asynchronous-http-requests)


------------------------------------------------------------
# Announcements

## DC435 Meeting Tomorrow Night

*   **When**  7:00pm Thursday, November 3rd
*   **Where** Bridgerland Technical College, 1301 North 600 West in Logan, room 840

DC435 is a Defcon group of people in Cache Valley, UT who are passionate about information security.  It is made up of students, professionals, researchers, and hobbyists that meet and discuss, learn, and interact with like minded people.

DC435 is always free and open to everyone regardless of skill, age, career, gender, etc.


## AIS Speaker Series Presents: Sherrie Cowley

*   **What**  Head of Security Operations, 3M Health Care
*   **When**  6:00pm Thursday, November 10th
*   **Where** Huntsman Hall Room 320

![./02-speaker-promo-sherrie.png](./02-speaker-promo-sherrie.png "Flyer for AIS Speaker Series: Sherrie Cowley")


# Action Items

*   Call on 2 designated questioners



# Web APIs Mud Card Questions

Write on your mud card responses to these questions:

*   What is an Application Programming Interface (API)?
*   What is a web API?
*   How does API relate to our role as software creators?

Also, write any questions that occur to you during our discussion today




# Types of APIs and how to use them

Try out these APIs out with the `curl` tool and your browser


## Driven by URI

These APIs are accessed via GET requests.  Their parameters are taken from the
path portion of the URI.  Simply visit these in your browser.

### XKCD API

[XKCD](https://xkcd.com/json.html)

*   Get info about the current comic
    ```
    $ curl https://xkcd.com/info.0.json | python -m json.tool
    {
        "alt": "Doing great here in the sixth and hopefully final year of the 2016 election.",
        "day": "28",
        "img": "https://imgs.xkcd.com/comics/fall_back.png",
        "link": "",
        "month": "10",
        "news": "",
        "num": 2378,
        "safe_title": "Fall Back",
        "title": "Fall Back",
        "transcript": "",
        "year": "2020"
    }
    ```
*   Get info about comic #1481
    ```
    $ curl https://xkcd.com/1481/info.0.json | python -m json.tool
    {
        "alt": "ACCESS LIMITS: Clients may maintain connections to the server for no more than 86,400 seconds per day. If you need additional time, you may contact IERS to file a request for up to one additional second.",
        "day": "2",
        "img": "https://imgs.xkcd.com/comics/api.png",
        "link": "",
        "month": "2",
        "news": "",
        "num": 1481,
        "safe_title": "API",
        "title": "API",
        "transcript": "((This is a faux-screenshot of a technical document))\n[[A figure sits at a computer upon a desk, apparently engrossed in the document which we now see before us.]]\nTITLE: API GUIDE\nRequest URL Format: domain\nuser\nitem\nServer will return an XML document which contains the requested data and documentation describing how the data is organized spatially.\nAPI KEYS: To obtain API access, contact the x.509-authenticated server and request an ECDH-RSA TLS key...\n\nCaption: If you do things right, it can take people a while to realize that your \"API documentation\" is just instructions for how to look at your website.\n\n{{Title text: ACCESS LIMITS: Clients may maintain connections to the server for no more than 86,400 seconds per day. If you need additional time, you may contact IERS to file a request for up to one additional second.}}",
        "year": "2015"
    }
    ```

### The Lorem Ipsum web service

[LoremIpsum](https://loripsum.net/)

Elements of the path are interpreted by this API as options.

Scroll to the bottom of the home page for detailed instructions.

The order of options does not matter:

Examples:

```bash
$ curl https://loripsum.net/api/

$ curl https://loripsum.net/api/5/long

$ curl https://loripsum.net/api/5/long/allcaps

$ curl https://loripsum.net/api/5/long/allcaps/plaintext

$ curl https://loripsum.net/api/plaintext/long/5/allcaps
```


## Driven by GET parameters

These APIs take their GET parameters from the URI after the path is terminated
by a question mark `?`.  Parameters are given as `key=value` pairs.  Multiple
parameters are separated from each other with ampersands `&` (in lieu of
commas).

### [RoboHash](https://robohash.org) Image Generator

> Robohash is a easy web service that makes it easy to provide unique,
> robot/alien/monster/whatever images for any text.  Put in any text, such as
> IP address, email, filename, userid, or whatever else you like, and get back
> a pretty image for your site. 

* [Basic](https://robohash.org/ErikFalor/)  https://robohash.org/ErikFalor/
* [Human](https://robohash.org/ErikFalor/?set=set5)  https://robohash.org/ErikFalor/?set=set5
* [Kitty](https://robohash.org/ErikFalor/?set=set4)  https://robohash.org/ErikFalor/?set=set4
* [Kitty with background](https://robohash.org/ErikFalor/?set=set4&bgset=bg2)  https://robohash.org/ErikFalor/?set=set4&bgset=bg2


### [MusicBrainz](https://musicbrainz.org/doc/MusicBrainz_API)

> MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public.

Through a combination of URL paths and GET parameters, one can query MusicBrainz for information about recordings, artists, genres, etc.

You must supply a meaningful `User-Agent` header in order to access their database.  This is such a common need that curl's `-A` command-line option is dedicated to this.

For instance, to look up an album by the name of "Waking Season", visit

`https://musicbrainz.org/ws/2/recording` with the GET paraeter `query=waking+season`:

```bash
$ curl -A "cs2610 (a.cs.student@usu.edu)" "https://musicbrainz.org/ws/2/recording?query=waking+season"

<?xml version="1.0" encoding="UTF-8" standalone="yes"?><metadata created="2022-11-02T02:12:59.872Z" xmlns="http://musicbrainz.org/ns/mmd-2.0#" xmlns:ns2="http://musicbrainz.org/ns/ext#-2.0"><recording-list count="63694" offset="0"><recording id="b6fa3b00-c0eb-4ff7-b7ec-db9a99340581" ns2:score="100"><title>Waking Season</title><length>322000</length><artist-credit><name-credit><name>Caspian</name><artist id="f8a5d80c-a6b7-414c-9482-c5d710171622"><name>Caspian</name><sort-name>Caspian</sort-name><disambiguation>US post-rock band</disambiguation></artist></name-credit></artist-credit><first-release-date>2012-09-25</first-release-date> ...
```

That huge pile of text that command barfs up is XML data.  MusicBrainz has been around so long that it was created before people realized there are better formats to share data.

Make MusicBrainz give us JSON data by adding the `fmt=json` query parameter:

```bash
$ curl -A "cs2610 (a.cs.student@usu.edu)" "https://musicbrainz.org/ws/2/recording?query=waking+season&fmt=json"

{"created":"2022-11-02T02:16:23.295Z","count":63694,"offset":0,"recordings":[{"id":"b6fa3b00-c0eb-4ff7-b7ec-db9a99340581","score":100,"title":"Waking Season","length":322000,"video":null,"artist-credit":[{"name":"Caspian","artist":{"id":"f8a5d80c-a6b7-414c-9482-c5d710171622","name":"Caspian","sort-name":"Caspian","disambiguation":"US post-rock band"}}],"first-release-date":"2012-09-25", ...
```

Of course, you can pipe that through `python -m json.tool` to pretty-print it:

```bash
$ curl -A "cs2610 (a.cs.student@usu.edu)" "https://musicbrainz.org/ws/2/recording?query=waking+season&fmt=json" | python -m json.tool

{
    "created": "2022-11-02T02:16:23.295Z",
    "count": 63694,
    "offset": 0,
    "recordings": [
        {
            "id": "b6fa3b00-c0eb-4ff7-b7ec-db9a99340581",
            "score": 100,
            "title": "Waking Season",
            "length": 322000,
    ...
```

Look up the artist "Rick Astley" to find his MusicBrainz ID (MBID):


```bash
$ curl -A "cs2610 (a.cs.student@usu.edu)" "https://musicbrainz.org/ws/2/artist?query=name:rick+astley&fmt=json" | python -m json.tool

{
    "created": "2022-11-02T02:29:58.221Z",
    "count": 10793,
    "offset": 0,
    "artists": [
        {
            "id": "db92a151-1ac2-438b-bc43-b82e149ddd50",
            "type": "Person",
            "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
            "score": 100,
            "gender-id": "36d3d30a-839d-3eda-8cb3-29be4384e4a9",
            "name": "Rick Astley",
            "sort-name": "Astley, Rick",
            "gender": "male",
            "country": "GB",
    ...
```

There it is!  **`"id": "db92a151-1ac2-438b-bc43-b82e149ddd50"`**

Once I have his MBID, I can look up all of his albums (`?inc=recordings`):

```bash
$ curl -A "cs2610 (a.cs.student@usu.edu)" "https://musicbrainz.org/ws/2/artist/db92a151-1ac2-438b-bc43-b82e149ddd50?fmt=json&inc=recordings" | python -m json.tool
{
    ...

    "id": "db92a151-1ac2-438b-bc43-b82e149ddd50",
    "type": "Person",
    "gender": "Male",
    "disambiguation": "English singer, songwriter and radio personality",
    "ipis": [
        "00159849414"
    ],
    "country": "GB",

    ...

    "name": "Rick Astley",
    "recordings": [
        {
            "title": "(It Would Take a) Strong Strong Man",
            "length": 222240,
            "id": "321e97ff-4af4-420d-99ee-0db6569279a9",
            "video": false,
            "disambiguation": ""
        },
        {
            "disambiguation": "",
            "video": false,
            "length": 367533,
            "id": "3e9b6337-3494-4ab9-b59a-4c91e66a01be",
            "title": "A Dream for Us"
        },

    ...
```


## Driven by HTTP Headers

As you've seen, some APIs ask that you send a unique `User-Agent` HTTP header
to identify you to their system.  They do this to prevent users from abusing
the system by making too many requests.

There are other uses for HTTP headers.  Some APIs rely on headers instead of
the URI path or GET parameters to customize your interaction with their
service.


### Dad jokes

[iCanHazDadJoke](https://icanhazdadjoke.com/api)

*   A plain GET request to the site's URL gives the home page in HTML:
    ```bash
    $ curl https://icanhazdadjoke.com/
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    ...
    ```
*   Fetching the site's URL and specifying that you accept a plain-text
    response results in a joke displayed in plain ASCII text with **NO** markup
    ```bash
    $ curl -H "Accept: text/plain" https://icanhazdadjoke.com
    You can't run through a camp site. You can only ran, because it's past tents.
    ```
*   Fetching the site's URL and specifying that you accept a result in
    `application/json` returns a joke embedded in JSON:
    ```bash
    $ curl -H "Accept: application/json" https://icanhazdadjoke.com
    {"id":"TC5TCt49prc","joke":"Why did the A go to the bathroom and come out as an E? Because he had a vowel movement.","status":200}
    ```


## Driven by POST data

These APIs expect their input to come in the data portion of an HTTP POST request.

While these particular examples *could* have been implemented with GET
parameters, other APIs accepting POST data are suitable for big inputs that are
larger than what can be transmitted in a URL, or which operate on binary data.
For example, images, data files, large passages of text.


### [Colormind](http://colormind.io/api-access/) color scheme generator

> Colormind is a color scheme generator that uses deep learning. It can learn
> color styles from photographs, movies, and popular art. 

Request a random color palette:

```bash
$ curl -X POST http://colormind.io/api/ --data '{"model":"default"}'

{"result":[[171,141,72],[233,185,169],[186,126,118],[117,97,75],[68,56,65]]}
```

To get color suggestions with input, label blank fields with the "N" character.  This returns a new color scheme based upon the inputs.

```bash
$ curl -X POST http://colormind.io/api/ --data '{"input":[[44,43,44],[90,83,82],"N","N","N"], "model":"default"}'
					
{"result":[[49,47,49],[91,83,81],[133,155,143],[226,209,167],[235,198,126]]}
```
				

### [CleanURI](https://cleanuri.com) URL shortener

*   Create a short URL with a POST
    ```
    $ curl -X POST --data url=https://www.pokemon.com https://cleanuri.com/api/v1/shorten
    ```

### SENTIM-API sentiment analysis

*   Analyze some text for positive or negative sentiment
    ```
    $ curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST --data '{"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Nihil sane. Sed ego in hoc resisto; Maximus dolor, inquit, brevis est. Duo Reges: constructio interrete. Ipse Epicurus fortasse redderet, ut Sextus Peducaeus, Sex. Sed quot homines, tot sententiae;"}' https://sentim-api.herokuapp.com/api/v1/ 
    ```


## [A list of free public APIs](../JavaScript_and_Web_APIs.md#a-list-of-free-public-apis)
 
Many APIs require that you make an account before you may access their
resources.  Some APIs charge users based upon how much they access the provided
resources.  You can get started playing with APIs by using some which are
freely available.

[Public APIs by toddmotto](https://github.com/toddmotto/public-apis)



# [What is an API key?](../Web_APIs.md#what-is-an-api-key)
 
An API key is a small, randomly-generated piece of text that functions as both a username and a password.



# Getting data from NASDAQ's API using `curl`

In this demo you will see my NASDAQ API key.

[They are available for free](https://data.nasdaq.com/sign-up), so don't use
mine, **get your own!**

Access to the NASDAQ API is rate-limited; if everybody in the class shared the
same API key our projects would intermittently fail if we all accessed it at
the same time.

<details>
<summary>Erik's NASDAQ Data Link API Key</summary>

```
o8A-AZSvTssXC8RkJooE
```
</details>

The API key is included in the request as a parameter.  As usual, check the [documentation](https://docs.data.nasdaq.com/) to see how to properly form a request.

In our case, the NASDAQ Data Link API is driven by GET parameters, so I send my API key in the URL in the GET query parameter `api_key`.

All together, the command line will look like this:

```bash
$ curl "https://data.nasdaq.com/api/v3/datasets/<<DATASET_NAME>>?api_key=o8A-AZSvTssXC8RkJooE" | python -m json.tool
```

These are some datasets we can query:

*   The University of Michigan's consumer survey
    *   Data points for the most recent 6 months are unofficial; they are sourced from articles in the Wall Street Journal.
    *   `https://data.nasdaq.com/api/v3/datasets/UMICH/SOC1.json`
*   United Nations Global Indicators
    *   This database offers a wide range of global indicators, covering population and more.
    *   `https://data.nasdaq.com/api/v3/datasets/UGID/POPTOT_.json`
*   Thomas Brinkhoff: City Populations
    *   Thomas Brinkhoff provides population data for cities and administrative areas in most countries.
    *   `https://data.nasdaq.com/api/v3/datasets/CITYPOP/CITY_SALTLAKECITYUTUSA.json`
    *   `https://data.nasdaq.com/api/v3/datasets/CITYPOP/CITY_NEWYORKNYUSA.json`


## Further Reading

*   [Time-series Usage](https://docs.data.nasdaq.com/docs/in-depth-usage)
*   [Time-series Parameters](https://docs.data.nasdaq.com/docs/parameters-2)



# XMLHttpRequest - the old-fashioned way to make asynchronous HTTP requests

The ability to make behind-the-scenes HTTP requests to web APIs was added to
the JavaScript language in the early 2000's (by Microsoft, of all outfits).
The original implementation was Object-Oriented in nature.

Over time, a new implementation has been developed that relies on functional
programming concepts and practices.  This is the `fetch()` API that is all the
rage these days.  The concepts underlying it are a little...  out-of-reach...
for new programmers.

Before you can appreciate where we are today, I'd like to tell you the story of
how we got here:
[XMLHttpRequest](https://gitlab.cs.usu.edu/erik.falor/fa22-cs2610-lecturenotes/-/blob/master/Module4/Web_APIs.md#the-old-way-xmlhttprequest)



