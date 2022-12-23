# Fa22 CS 2610 Lecture Notes Repository

This git repository is your textbook for CS 2610.
Code examples written in class, demos and other important resources will be found here.


## How to use this repository

Clone the repository to your computer *(do this one time)*:

```
$ git clone https://gitlab.cs.usu.edu/erik.falor/fa22-cs2610-lecturenotes
```

I would like you to *experiment* with the demo programs I include in the lectures.  This is my invitation for you to change and/or break my code.  You can put all files in the repository back to their original state with this command:

```
$ git restore :/
```

Update your local repo with the latest notes *(do this after each lecture)*:

```
$ cd fa22-cs2610-lecturenotes
$ git restore :/
$ git pull origin master
```



## Table of Contents

*   Outline of [Topics in CS 2610](./Outline_of_Topics.md)
*   [How To Submit Assignments](./How_To_Submit_Assignments.md)
*   The [Software Development Plan](./Software_Development_Plan.md)
    *   An [SDP Template](./SDP-Template.md) you should fill out and turn in with every assignment
*   [Unix command line basics](./Unix_CLI.md)
    *   [Unix command shell cheat sheet](./Shell_Cheatsheet.md)
*   Your Guide to [Using Git](./Using_Git/README.md)



<details>
<summary><h3>Module 0</h3></summary>

01. [Monday, August 29](./Module0/Lec01-Mon_Aug_29/README.md)
	* [Get to know your professor](./Module0/Lec01-Mon_Aug_29/README.md#get-to-know-your-professor)
	* [Get to know the course](./Module0/Lec01-Mon_Aug_29/README.md#get-to-know-the-course)
	* [Software Development Plan](./Module0/Lec01-Mon_Aug_29/README.md#software-development-plan)
02. [Wednesday, August 31](./Module0/Lec02-Wed_Aug_31/README.md)
	* [Assignment #0: Static Blog with HTML & CSS (Web 1.0)](./Module0/Lec02-Wed_Aug_31/README.md#assignment-0-static-blog-with-html-css-web-10)
	* [Unix command line basics](./Module0/Lec02-Wed_Aug_31/README.md#unix-command-line-basics)
	* [Git refresher](./Module0/Lec02-Wed_Aug_31/README.md#git-refresher)
	* [The Hyper Text Markup Language](./Module0/Lec02-Wed_Aug_31/README.md#the-hyper-text-markup-language)
	* [Required HTML5 Elements for Assignment 0](./Module0/Lec02-Wed_Aug_31/README.md#required-html5-elements-for-assignment-0)
03. [Friday, September 02](./Module0/Lec03-Fri_Sep_02/README.md)
	* [Finish the `index.html` page begun last time](./Module0/Lec03-Fri_Sep_02/README.md#finish-the-indexhtml-page-begun-last-time)
	* [Hyperlinks and URLs](./Module0/Lec03-Fri_Sep_02/README.md#hyperlinks-and-urls)
	* [HTML Minor Ingredients](./Module0/Lec03-Fri_Sep_02/README.md#html-minor-ingredients)
	* [Valid HTML5 Document Outline](./Module0/Lec03-Fri_Sep_02/README.md#valid-html5-document-outline)
04. [Wednesday, September 07](./Module0/Lec04-Wed_Sep_07/README.md)
	* [HTML Recap](./Module0/Lec04-Wed_Sep_07/README.md#html-recap)
	* [Validating HTML using W3C's online tool](./Module0/Lec04-Wed_Sep_07/README.md#validating-html-using-w3cs-online-tool)
05. [Friday, September 09](./Module0/Lec05-Fri_Sep_09/README.md)
	* [Mud card activities](./Module0/Lec05-Fri_Sep_09/README.md#mud-card-activities)
	* [The Browser's Developer Tools](./Module0/Lec05-Fri_Sep_09/README.md#the-browsers-developer-tools)
	* [Cascading Style Sheets](./Module0/Lec05-Fri_Sep_09/README.md#cascading-style-sheets)
	* [What happens when many CSS rules apply to the same element?](./Module0/Lec05-Fri_Sep_09/README.md#what-happens-when-many-css-rules-apply-to-the-same-element)

</details>


<details>
<summary><h3>Module 1</h3></summary>

06. [Monday, September 12](./Module1/Lec06-Mon_Sep_12/README.md)
	* [Block-level vs. Inline elements](./Module1/Lec06-Mon_Sep_12/README.md#block-level-vs-inline-elements)
	* [The Box Model](./Module1/Lec06-Mon_Sep_12/README.md#the-box-model)
	* [Validating CSS](./Module1/Lec06-Mon_Sep_12/README.md#validating-css)
	* [Bootstrap CSS](./Module1/Lec06-Mon_Sep_12/README.md#bootstrap-css)
	* [Create your own protocol](./Module1/Lec06-Mon_Sep_12/README.md#create-your-own-protocol)
07. [Wednesday, September 14](./Module1/Lec07-Wed_Sep_14/README.md)
	* [Mud card followup](./Module1/Lec07-Wed_Sep_14/README.md#mud-card-followup)
	* [Assignment #1: Simple HTTP Server in Python](./Module1/Lec07-Wed_Sep_14/README.md#assignment-1-simple-http-server-in-python)
	* [How does a web server fit into the scheme of things](./Module1/Lec07-Wed_Sep_14/README.md#how-does-a-web-server-fit-into-the-scheme-of-things)
08. [Friday, September 16](./Module1/Lec08-Fri_Sep_16/README.md)
	* [How does the HyperText Transfer Protocol (HTTP) work?](./Module1/Lec08-Fri_Sep_16/README.md#how-does-the-hypertext-transfer-protocol-http-work)
	* [HTTP Headers](./Module1/Lec08-Fri_Sep_16/README.md#http-headers)
	* [Experience HTTP requests and responses firsthand](./Module1/Lec08-Fri_Sep_16/README.md#experience-http-requests-and-responses-firsthand)
09. [Monday, September 19](./Module1/Lec09-Mon_Sep_19/README.md)
	* [Building an HTTP server in Python](./Module1/Lec09-Mon_Sep_19/README.md#building-an-http-server-in-python)
10. [Wednesday, September 21](./Module1/Lec10-Wed_Sep_21/README.md)
	* [Continue building an HTTP server in Python](./Module1/Lec10-Wed_Sep_21/README.md#continue-building-an-http-server-in-python)
	* [Binary data and your Python HTTP server](./Module1/Lec10-Wed_Sep_21/README.md#binary-data-and-your-python-http-server)
	* [moved to M21- Try out different Response headers with our `server.py`](./Module1/Lec10-Wed_Sep_21/README.md#moved-to-m21-try-out-different-response-headers-with-our-serverpy)
	* [HTTP Redirects](./Module1/Lec10-Wed_Sep_21/README.md#http-redirects)

</details>


<details>
<summary><h3>Module 2</h3></summary>

11. [Friday, September 23](./Module1/Lec11-Fri_Sep_23/README.md)
	* [Finish building an HTTP server in Python](./Module1/Lec11-Fri_Sep_23/README.md#finish-building-an-http-server-in-python)
	* [Add a favicon to my site](./Module1/Lec11-Fri_Sep_23/README.md#add-a-favicon-to-my-site)
	* [Try out different Response headers with our Server](./Module1/Lec11-Fri_Sep_23/README.md#try-out-different-response-headers-with-our-server)
12. [Monday, September 26](./Module2/Lec12-Mon_Sep_26/README.md)
	* [Assignment #1 follow up & advice](./Module2/Lec12-Mon_Sep_26/README.md#assignment-1-follow-up-advice)
	* [Have you ever needed a quick HTTP server](./Module2/Lec12-Mon_Sep_26/README.md#have-you-ever-needed-a-quick-http-server)
	* [Mud card followup](./Module2/Lec12-Mon_Sep_26/README.md#mud-card-followup)
	* [HTML Forms](./Module2/Lec12-Mon_Sep_26/README.md#html-forms)
	* [What is an Application Programming Interface (API)](./Module2/Lec12-Mon_Sep_26/README.md#what-is-an-application-programming-interface-api)
	* [HTML Form Input Elements](./Module2/Lec12-Mon_Sep_26/README.md#html-form-input-elements)
	* [POSTing data to a server](./Module2/Lec12-Mon_Sep_26/README.md#posting-data-to-a-server)
13. [Wednesday, September 28](./Module2/Lec13-Wed_Sep_28/README.md)
	* [POSTing data to a server (continued)](./Module2/Lec13-Wed_Sep_28/README.md#posting-data-to-a-server-continued)
	* [Introducing Assignment #2: Dynamic Django Blog](./Module2/Lec13-Wed_Sep_28/README.md#introducing-assignment-2-dynamic-django-blog)
	* [What is an Application Framework](./Module2/Lec13-Wed_Sep_28/README.md#what-is-an-application-framework)
	* [What does Django actually do?](./Module2/Lec13-Wed_Sep_28/README.md#what-does-django-actually-do)
	* [Installing Django with `pip`](./Module2/Lec13-Wed_Sep_28/README.md#installing-django-with-pip)
	* [Checking your version of Django](./Module2/Lec13-Wed_Sep_28/README.md#checking-your-version-of-django)
	* [Start on the Django Tutorial](./Module2/Lec13-Wed_Sep_28/README.md#start-on-the-django-tutorial)
14. [Friday, September 30](./Module2/Lec14-Fri_Sep_30/README.md)
	* [Mud card followup](./Module2/Lec14-Fri_Sep_30/README.md#mud-card-followup)
	* [Creating your first Django project and app](./Module2/Lec14-Fri_Sep_30/README.md#creating-your-first-django-project-and-app)
	* [What's the difference between a _project_ and an _app_?](./Module2/Lec14-Fri_Sep_30/README.md#whats-the-difference-between-a-_project_-and-an-_app_)
	* [What are all of the files Django makes for me?](./Module2/Lec14-Fri_Sep_30/README.md#what-are-all-of-the-files-django-makes-for-me)
	* [What is MVC and/or MTV?](./Module2/Lec14-Fri_Sep_30/README.md#what-is-mvc-andor-mtv)
	* [Writing your first Django view](./Module2/Lec14-Fri_Sep_30/README.md#writing-your-first-django-view)
15. [Monday, October 03](./Module2/Lec15-Mon_Oct_03/README.md)
	* [How *NOT* to create static content](./Module2/Lec15-Mon_Oct_03/README.md#how-not-to-create-static-content)
	* [How *NOT* to create dynamic content](./Module2/Lec15-Mon_Oct_03/README.md#how-not-to-create-dynamic-content)
	* [How well did this little exercise go](./Module2/Lec15-Mon_Oct_03/README.md#how-well-did-this-little-exercise-go)
	* [Effectively generating dynamic HTML content with templates](./Module2/Lec15-Mon_Oct_03/README.md#effectively-generating-dynamic-html-content-with-templates)
	* [Assignment #1 Code ~~Review~~ Roast](./Module2/Lec15-Mon_Oct_03/README.md#assignment-1-code-review-roast)
16. [Wednesday, October 05](./Module2/Lec16-Wed_Oct_05/README.md)
	* [Features of the Django template language](./Module2/Lec16-Wed_Oct_05/README.md#features-of-the-django-template-language)
	* [Including static content](./Module2/Lec16-Wed_Oct_05/README.md#including-static-content)
	* [What is CRUD?](./Module2/Lec16-Wed_Oct_05/README.md#what-is-crud)
17. [Friday, October 07](./Module2/Lec17-Fri_Oct_07/README.md)
	* [What is "database schema"?](./Module2/Lec17-Fri_Oct_07/README.md#what-is-database-schema)
	* [Django's Object-Relational Mapper (ORM)](./Module2/Lec17-Fri_Oct_07/README.md#djangos-object-relational-mapper-orm)
	* [Django Migrations](./Module2/Lec17-Fri_Oct_07/README.md#django-migrations)
18. [Monday, October 10](./Module2/Lec18-Mon_Oct_10/README.md)
	* [Mud card followup](./Module2/Lec18-Mon_Oct_10/README.md#mud-card-followup)
	* [Explore the Django database API in the REPL](./Module2/Lec18-Mon_Oct_10/README.md#explore-the-django-database-api-in-the-repl)
	* [How to do database queries in Django without SQL?](./Module2/Lec18-Mon_Oct_10/README.md#how-to-do-database-queries-in-django-without-sql)
	* [How to clean up a database in Django](./Module2/Lec18-Mon_Oct_10/README.md#how-to-clean-up-a-database-in-django)
	* [Populate a database with testing data using a Data Migration](./Module2/Lec18-Mon_Oct_10/README.md#populate-a-database-with-testing-data-using-a-data-migration)
	* [Models in practice: finish the `HighFive` demo](./Module2/Lec18-Mon_Oct_10/README.md#models-in-practice-finish-the-highfive-demo)

</details>

<details>
<summary><h3>Module 3</h3></summary>

19. [Wednesday, October 12](./Module3/Lec19-Wed_Oct_12/README.md)
	* [What questions do you have about Assignment #2](./Module3/Lec19-Wed_Oct_12/README.md#what-questions-do-you-have-about-assignment-2)
	* [Models in practice: finish the `HighFive` demo](./Module3/Lec19-Wed_Oct_12/README.md#models-in-practice-finish-the-highfive-demo)
	* [Intro to JavaScript](./Module3/Lec19-Wed_Oct_12/README.md#intro-to-javascript)
20. [Monday, October 17](./Module3/Lec20-Mon_Oct_17/README.md)
	* [Mud card followup: Introduction to JavaScript](./Module3/Lec20-Mon_Oct_17/README.md#mud-card-followup-introduction-to-javascript)
	* [Introduce Assignment #3](./Module3/Lec20-Mon_Oct_17/README.md#introduce-assignment-3)
	* [Remember the difference between syntax and semantics](./Module3/Lec20-Mon_Oct_17/README.md#remember-the-difference-between-syntax-and-semantics)
	* [Intro to JavaScript continued](./Module3/Lec20-Mon_Oct_17/README.md#intro-to-javascript-continued)
	* [`grades.js` - a practice program](./Module3/Lec20-Mon_Oct_17/README.md#gradesjs-a-practice-program)
21. [Wednesday, October 19](./Module3/Lec21-Wed_Oct_19/README.md)
	* [Finish 1st draft of `grades.js`](./Module3/Lec21-Wed_Oct_19/README.md#finish-1st-draft-of-gradesjs)
	* [JavaScript and the Document Object Model](./Module3/Lec21-Wed_Oct_19/README.md#javascript-and-the-document-object-model)
	* [Give `grades.js` a face-lift](./Module3/Lec21-Wed_Oct_19/README.md#give-gradesjs-a-face-lift)
22. [Friday, October 21](./Module3/Lec22-Fri_Oct_21/README.md)
	* [Finish `grades.js`](./Module3/Lec22-Fri_Oct_21/README.md#finish-gradesjs)
	* [Pokemon Go](./Module3/Lec22-Fri_Oct_21/README.md#pokemon-go)
	* [WAT](./Module3/Lec22-Fri_Oct_21/README.md#wat)
23. [Monday, October 24](./Module3/Lec23-Mon_Oct_24/README.md)
	* [JavaScript Functions](./Module3/Lec23-Mon_Oct_24/README.md#javascript-functions)
	* [Function Parameters in JavaScript](./Module3/Lec23-Mon_Oct_24/README.md#function-parameters-in-javascript)
	* [Functions are Values in JavaScript](./Module3/Lec23-Mon_Oct_24/README.md#functions-are-values-in-javascript)
	* [Automatic Semicolon Insertion](./Module3/Lec23-Mon_Oct_24/README.md#automatic-semicolon-insertion)
	* [Debugging JavaScript](./Module3/Lec23-Mon_Oct_24/README.md#debugging-javascript)
24. [Wednesday, October 26](./Module3/Lec24-Wed_Oct_26/README.md)
	* [Today's In-Person Lecture is Cancelled](./Module3/Lec24-Wed_Oct_26/README.md#todays-in-person-lecture-is-cancelled)
	* [Events and Event-Driven Programming with Callback Functions](./Module3/Lec24-Wed_Oct_26/README.md#events-and-event-driven-programming-with-callback-functions)
	* [List Slider demo](./Module3/Lec24-Wed_Oct_26/README.md#list-slider-demo)
	* [Updating the DOM Interactively](./Module3/Lec24-Wed_Oct_26/README.md#updating-the-dom-interactively)
	* [Miscellaneous tips](./Module3/Lec24-Wed_Oct_26/README.md#miscellaneous-tips)

</details>

<details>
<summary><h3>Module 4</h3></summary>

25. [Friday, October 28](./Module4/Lec25-Fri_Oct_28/README.md)
	* [Any final questions about Assignment 3](./Module4/Lec25-Fri_Oct_28/README.md#any-final-questions-about-assignment-3)
	* [Mud Cards](./Module4/Lec25-Fri_Oct_28/README.md#mud-cards)
	* [Function Invocation Patterns in JavaScript](./Module4/Lec25-Fri_Oct_28/README.md#function-invocation-patterns-in-javascript)
	* [Arrow Functions `=>`](./Module4/Lec25-Fri_Oct_28/README.md#arrow-functions-)
26. [Monday, October 31](./Module4/Lec26-Mon_Oct_31/README.md)
	* [SAINTCON recap by Carter Bailey](./Module4/Lec26-Mon_Oct_31/README.md#saintcon-recap-by-carter-bailey)
	* [Assignment #4: Worth Your Weight In Gold (Web 2.0)](./Module4/Lec26-Mon_Oct_31/README.md#assignment-4-worth-your-weight-in-gold-web-20)
	* [Modern web applications leverage APIs in two ways](./Module4/Lec26-Mon_Oct_31/README.md#modern-web-applications-leverage-apis-in-two-ways)
	* [How do I learn how to use a web API?](./Module4/Lec26-Mon_Oct_31/README.md#how-do-i-learn-how-to-use-a-web-api)
	* [What tools can I use to access web APIs?](./Module4/Lec26-Mon_Oct_31/README.md#what-tools-can-i-use-to-access-web-apis)
	* [Write a Shell Script to make curl more convenient](./Module4/Lec26-Mon_Oct_31/README.md#write-a-shell-script-to-make-curl-more-convenient)
27. [Wednesday, November 02](./Module4/Lec27-Wed_Nov_02/README.md)
	* [Web APIs Mud Card Questions](./Module4/Lec27-Wed_Nov_02/README.md#web-apis-mud-card-questions)
	* [Types of APIs and how to use them](./Module4/Lec27-Wed_Nov_02/README.md#types-of-apis-and-how-to-use-them)
	* [What is an API key?](./Module4/Lec27-Wed_Nov_02/README.md#what-is-an-api-key)
	* [Getting data from NASDAQ's API using `curl`](./Module4/Lec27-Wed_Nov_02/README.md#getting-data-from-nasdaqs-api-using-curl)
	* [XMLHttpRequest - the old-fashioned way to make asynchronous HTTP requests](./Module4/Lec27-Wed_Nov_02/README.md#xmlhttprequest-the-old-fashioned-way-to-make-asynchronous-http-requests)
28. [Friday, November 04](./Module4/Lec28-Fri_Nov_04/README.md)
	* [Promises & `fetch()`](./Module4/Lec28-Fri_Nov_04/README.md#promises-fetch)
	* [Getting data from NASDAQ's API using `fetch()`](./Module4/Lec28-Fri_Nov_04/README.md#getting-data-from-nasdaqs-api-using-fetch)
	* [I Promise that I can't stand rejection!](./Module4/Lec28-Fri_Nov_04/README.md#i-promise-that-i-cant-stand-rejection)
29. [Monday, November 07](./Module4/Lec29-Mon_Nov_07/README.md)
	* [REST: Representational state transfer](./Module4/Lec29-Mon_Nov_07/README.md#rest-representational-state-transfer)
	* [Write a Django App which provides a RESTful API](./Module4/Lec29-Mon_Nov_07/README.md#write-a-django-app-which-provides-a-restful-api)
30. [Wednesday, November 09](./Module4/Lec30-Wed_Nov_09/README.md)
	* [Finish the RESTful Fibonacci API in Django](./Module4/Lec30-Wed_Nov_09/README.md#finish-the-restful-fibonacci-api-in-django)
	* [Cross-Origin Resource Sharing (CORS) Errors](./Module4/Lec30-Wed_Nov_09/README.md#cross-origin-resource-sharing-cors-errors)

</details>

<details>
<summary><h3>Module 5</h3></summary>

31. [Friday, November 11](./Module5/Lec31-Fri_Nov_11/README.md)
	* [Any final questions about Assignment 4](./Module5/Lec31-Fri_Nov_11/README.md#any-final-questions-about-assignment-4)
	* [The Domain Name System (DNS)](./Module5/Lec31-Fri_Nov_11/README.md#the-domain-name-system-dns)
	* [The HTTP Hosts header](./Module5/Lec31-Fri_Nov_11/README.md#the-http-hosts-header)
	* [How the Domain Name System helps you find things online](./Module5/Lec31-Fri_Nov_11/README.md#how-the-domain-name-system-helps-you-find-things-online)
	* [Choosing your own DNS server](./Module5/Lec31-Fri_Nov_11/README.md#choosing-your-own-dns-server)
	* [Adding an entry to the DNS](./Module5/Lec31-Fri_Nov_11/README.md#adding-an-entry-to-the-dns)
	* [Common DNS Record Types](./Module5/Lec31-Fri_Nov_11/README.md#common-dns-record-types)
	* [Querying DNS servers](./Module5/Lec31-Fri_Nov_11/README.md#querying-dns-servers)
32. [Monday, November 14](./Module5/Lec32-Mon_Nov_14/README.md)
	* [Mud card followup: The Domain Name System](./Module5/Lec32-Mon_Nov_14/README.md#mud-card-followup-the-domain-name-system)
	* [Assignment 5: Vue.js Weather App](./Module5/Lec32-Mon_Nov_14/README.md#assignment-5-vuejs-weather-app)
	* [Introducing the Vue.js Front-end Framework](./Module5/Lec32-Mon_Nov_14/README.md#introducing-the-vuejs-front-end-framework)
33. [Wednesday, November 16](./Module5/Lec33-Wed_Nov_16/README.md)
	* [Introducing the Vue.js Front-end Framework (continued)](./Module5/Lec33-Wed_Nov_16/README.md#introducing-the-vuejs-front-end-framework-continued)
	* [Use Vue.js to create a dynamically-generated TODO list](./Module5/Lec33-Wed_Nov_16/README.md#use-vuejs-to-create-a-dynamically-generated-todo-list)
	* [List Rendering](./Module5/Lec33-Wed_Nov_16/README.md#list-rendering)
	* [Binding HTML attributes](./Module5/Lec33-Wed_Nov_16/README.md#binding-html-attributes)
	* [Event Handlers](./Module5/Lec33-Wed_Nov_16/README.md#event-handlers)
	* [Class and style bindings](./Module5/Lec33-Wed_Nov_16/README.md#class-and-style-bindings)
	* [Data Binding](./Module5/Lec33-Wed_Nov_16/README.md#data-binding)
34. [Friday, November 18](./Module5/Lec34-Fri_Nov_18/README.md)
	* [Vue.js Lifecycle Hooks](./Module5/Lec34-Fri_Nov_18/README.md#vuejs-lifecycle-hooks)
	* [Connect the Vue.js TODO list to the cloud](./Module5/Lec34-Fri_Nov_18/README.md#connect-the-vuejs-todo-list-to-the-cloud)
	* [Reactivity: How Vue.js tracks changes](./Module5/Lec34-Fri_Nov_18/README.md#reactivity-how-vuejs-tracks-changes)
	* [Chaining Promises](./Module5/Lec34-Fri_Nov_18/README.md#chaining-promises)
	* [Case Study: Django Nerdgame Character Generator](./Module5/Lec34-Fri_Nov_18/README.md#case-study-django-nerdgame-character-generator)
	* [Methods](./Module5/Lec34-Fri_Nov_18/README.md#methods)
	* [Computed Properties](./Module5/Lec34-Fri_Nov_18/README.md#computed-properties)
	* [An aside: Why doing things the Vue.js way saves time in the long-run](./Module5/Lec34-Fri_Nov_18/README.md#an-aside-why-doing-things-the-vuejs-way-saves-time-in-the-long-run)
	* [Convert the Grades.js App from Vanilla JS to Vue.js](./Module5/Lec34-Fri_Nov_18/README.md#convert-the-gradesjs-app-from-vanilla-js-to-vuejs)

</details>

<details>
<summary><h3>Module 6</h3></summary>

35. [Monday, November 21](./Module6/Lec35-Mon_Nov_21/README.md)
	* [Any questions about Assignment 5](./Module6/Lec35-Mon_Nov_21/README.md#any-questions-about-assignment-5)
	* [The Secure Shell and Encrypted Tunnels](./Module6/Lec35-Mon_Nov_21/README.md#the-secure-shell-and-encrypted-tunnels)
36. [Monday, November 28](./Module6/Lec36-Mon_Nov_28/README.md)
	* [Any final questions about Assignment 5](./Module6/Lec36-Mon_Nov_28/README.md#any-final-questions-about-assignment-5)
	* [Reading Assignment: Reflections on Trusting Trust](./Module6/Lec36-Mon_Nov_28/README.md#reading-assignment-reflections-on-trusting-trust)
	* [ACM Code of Ethics](./Module6/Lec36-Mon_Nov_28/README.md#acm-code-of-ethics)
	* [Responsible disclosure](./Module6/Lec36-Mon_Nov_28/README.md#responsible-disclosure)
	* [Privacy](./Module6/Lec36-Mon_Nov_28/README.md#privacy)
37. [Wednesday, November 30](./Module6/Lec37-Wed_Nov_30/README.md)
	* [Assignment 6 - Hack the Planet](./Module6/Lec37-Wed_Nov_30/README.md#assignment-6-hack-the-planet)
	* [How do I get started in cybersecurity?](./Module6/Lec37-Wed_Nov_30/README.md#how-do-i-get-started-in-cybersecurity)
	* [OWASP Top Ten Project](./Module6/Lec37-Wed_Nov_30/README.md#owasp-top-ten-project)
	* [Learning XSS with a pretend webapp](./Module6/Lec37-Wed_Nov_30/README.md#learning-xss-with-a-pretend-webapp)
	* [Do try this at home (and hopefully at your job!)](./Module6/Lec37-Wed_Nov_30/README.md#do-try-this-at-home-and-hopefully-at-your-job)
38. [Friday, December 02](./Module6/Lec38-Fri_Dec_02/README.md)
	* [Learning XSS with a pretend webapp (continued)](./Module6/Lec38-Fri_Dec_02/README.md#learning-xss-with-a-pretend-webapp-continued)
	* [Guest Lecturer: John Pope](./Module6/Lec38-Fri_Dec_02/README.md#guest-lecturer-john-pope)
39. [Monday, December 05](./Module6/Lec39-Mon_Dec_05/README.md)
	* [Mud card followup](./Module6/Lec39-Mon_Dec_05/README.md#mud-card-followup)
	* [Reflections on Trusting Trust](./Module6/Lec39-Mon_Dec_05/README.md#reflections-on-trusting-trust)
	* [Hosting a website in the cloud, by Taylor Anderson](./Module6/Lec39-Mon_Dec_05/README.md#hosting-a-website-in-the-cloud-by-taylor-anderson)
	* [Brute Force in JavaScript](./Module6/Lec39-Mon_Dec_05/README.md#brute-force-in-javascript)
40. [Wednesday, December 07](./Module6/Lec40-Wed_Dec_07/README.md)
	* [Mudcard quiz](./Module6/Lec40-Wed_Dec_07/README.md#mudcard-quiz)
	* [Path traversal attacks](./Module6/Lec40-Wed_Dec_07/README.md#path-traversal-attacks)
	* [White box hacking](./Module6/Lec40-Wed_Dec_07/README.md#white-box-hacking)
	* [Cookie Replay Attack](./Module6/Lec40-Wed_Dec_07/README.md#cookie-replay-attack)
	* [Learning XSS with a pretend webapp (continued)](./Module6/Lec40-Wed_Dec_07/README.md#learning-xss-with-a-pretend-webapp-continued)
	* [Can XSS happen on Django](./Module6/Lec40-Wed_Dec_07/README.md#can-xss-happen-on-django)
	* [How To Build a Successful Career In Cybersecurity](./Module6/Lec40-Wed_Dec_07/README.md#how-to-build-a-successful-career-in-cybersecurity)
41. [Friday, December 09](./Module6/Lec41-Fri_Dec_09/README.md)
	* [Last call for questions about the Final Assignment](./Module6/Lec41-Fri_Dec_09/README.md#last-call-for-questions-about-the-final-assignment)
	* [Showcased Software](./Module6/Lec41-Fri_Dec_09/README.md#showcased-software)
	* [Burp Suite](./Module6/Lec41-Fri_Dec_09/README.md#burp-suite)
	* [Exploitation Step 0: Enumeration with Nmap "The Network Mapper"](./Module6/Lec41-Fri_Dec_09/README.md#exploitation-step-0-enumeration-with-nmap-the-network-mapper)
	* [Exploitation Step 1: Launch an automated attack](./Module6/Lec41-Fri_Dec_09/README.md#exploitation-step-1-launch-an-automated-attack)
	* [Exploitation Step 2: Sneak in through the back door](./Module6/Lec41-Fri_Dec_09/README.md#exploitation-step-2-sneak-in-through-the-back-door)
	* [Other Brute Force attacks](./Module6/Lec41-Fri_Dec_09/README.md#other-brute-force-attacks)

</details>


## Creating a comprehensive study guide from individual lecture notes files

I have created a little tool to help you to easily find a topic when you don't
remember on which day it was covered or to create a study guide for an exam.

[concatenate.sh](concatenate.sh) is a shell script that concatenates (joins)
all lecture note files found in this repository into one comprehensive file.
Only lecture notes named `README.md` are included; extra files such as code,
images and media are left out.

This program creates a read-only file called `all_notes.md`.  It is marked
read-only to remind you to not make any important changes as they will be
destroyed the next time you run `concatenate.sh`.

### Instructions

0. Run `git pull` to get the latest, most up-to-date lecture notes
1. Open a command shell (on Windows this is in a Git+Bash terminal)
2. Run `./concatenate.sh`
3. The resulting file is named `all_notes.md`
