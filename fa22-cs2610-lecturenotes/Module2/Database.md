# Databases and Django

A this point you should be all of the way through the tutorial, from start to
finish, skipping over those sections marked unnecessary in
[Django.md](./Django.md).  Don't neglect to complete the tutorial as it is the
best way to come up to speed on Django!

This document explains how Django works together with a database to support all
CRUD operations, powering your fully dynamic website.

## Table of Contents

*   [What is "database schema"?]( #what-is-database-schema)
*   [Django's Object-Relational Mapper (ORM)](#djangos-object-relational-mapper-orm)
*   [Django Migrations](#django-migrations)
*   [Explore the Django database API in the REPL](#explore-the-django-database-api-in-the-repl)
*   [How to do database queries in Django without SQL?](#how-to-do-database-queries-in-django-without-sql)
*   [What is the Admin app, and how do I use it?](#what-is-the-admin-app-and-how-do-i-use-it)
*   [Populate a database with testing data using a Custom Migration](#populate-a-database-with-testing-data-using-a-custom-migration)



## What is "database schema"?

A database is a program that stores information in a particular way that
facilitates retrieval later.  The effectiveness of queries depends upon how the
data is stored into the database to begin with.  Careful thought should be
given at the design stage.

#### Schema
The organization of data as a blueprint of how the database is constructed

When designing a database you will want to follow organizational principles
that are similar how you would organize object-oriented code.

*   What entities should exist in the system?
    *   What information belongs to each entity?
    *   What are the types of data in an entity?
    *   If one piece of data could belong to more than one entity, which entity
        is the most "responsible" for it?
*   How are the entities related to one another?
    *   Are the relationships hierarchical or flat?
    *   If an entity is deleted, what happens to any related entities?  Should
        they be left behind (orphaned) or automatically removed at the same
        time (cascading deletes)?

In the above discussion, the primary entities are called *tables*.  Tables are
defined in terms of *columns*, which have a name and a type.  A record of
related information that can be stored in a table is called a *row*.  The
structural layout of a database can be visualized with a spreadsheet.

* [Polls app schema as code](https://docs.djangoproject.com/en/4.1/intro/tutorial02/#creating-models)
* [Polls app schema as a spreadsheet](./polls_app_schema.ods)



## Django's Object-Relational Mapper (ORM)

Consider an object-oriented application that stores blog posts and comments on
those posts.

* What objects will your system include?
* How will the objects relate to one another?
* What pieces of data will you store in each object?


#### Classes : Object :: Table : Rows

* Object-Oriented Code is organized into classes with data members
* Databases are organized into tables with columns

The concepts of classes and tables are virtually the same, so much so that
nearly every programming interface to a database represents database tables as
classes, and rows of data in a database as instances (a.k.a. objects).


#### Object-Relational Mapper (ORM)
A piece of software which acts as a bridge between a database and an
object-oriented programming language

https://en.wikipedia.org/wiki/Object-relational_mapping

Learning how to control the database through Django means learning to use its
ORM.  In other words, Django's ORM is its database API.

An ORM gives us many benefits:

* You don't have to learn/write/read SQL
* You are isolated from the various platform-specific SQL idiosyncrasies
* You get to treat the DB as if it's a collection of objects - within an OOP
  language, this is snazzy!
* Increased security: common attacks against SQL applications are much more difficult to launch when the app doesn't directly deal with SQL


### Models in Django

At this point I shall encourage you to go through the Django tutorial from the
beginning, not just reading, but actually building the Polls app described
therein.  It won't take you very long to build it, and will introduce you to
many useful concepts and techniques that I will expect you to understand.

https://docs.djangoproject.com/en/4.1/intro/tutorial02/

Additionally, the MDN has a similar Django tutorial for building a slightly
more sophisticated app that you may find to be helpful to follow:

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django

A model in Django is a class which inherits from `models.Model`.  Its data
members correspond to the columns contained within.



### Data types in the database

A database naturally wants to impose certain data types on each of its columns;
if a column is declared to hold character data it is an error to introduce
textual data.  This will feel familiar if you're coming from C++ or Java,
however databases tend to take it even further, specifying that character data
(strings) be no longer than some maximum length.

Naturally, this poses a difficulty for a dynamically-typed language such as
Python which does not ordinarily impose this restriction on its variables.

You can work around this limitation by creating values that are a special kind
of object created by the Django folks.  When you try to assign a value into one
of these special Django fields (using something like a setter function), code
is run which ensures that the incoming value matches the expected type.

Django ships with dozens of built-in field types; here is the complete list:

https://docs.djangoproject.com/en/4.1/ref/models/fields/#model-field-types


## Django Migrations

As your app evolves your models will change.  This means that the objects in your code will change over time, as well as the data on disk in the database.  Django's *migrations* are Python scripts that allow existing data to "follow" your code changes, such that your database always matches your code.  Luckily, for simple cases you do not need to write migration scripts; Django can generate them automatically.

We won't delve too deeply into what migrations are or how they work; it suffices to understand that Django notices when you change the schema of your database.  You need to manually run a couple of commands to get Django to quiet down about it.

Today you will finally get rid of Django's scary red warning `You have 18 unapplied migration(s)` whenever you start the server.


#### `$ python manage.py migrate`

Run the migration code in any apps which have un-applied changes.  This will
create a database file if there is none, and update any existing data according
to the instructions in the migration.

How do you create the "instructions in the migration"?
You don't.  Django writes them for you ;)


#### `$ python manage.py makemigrations`

Django will read through the `models.py` files of your `INSTALLED_APPS[]`,
detect any changes, and write the migration instructions for you.  Then, you
may run the previous command to make the changes stick.



## Explore the Django database API in the REPL

I will expect you to carefully follow and understand everything in part 2 of
the Django tutorial:

https://docs.djangoproject.com/en/4.1/intro/tutorial02/#playing-with-the-api

It will teach you how to explore the Django database API in the Django shell
(REPL).  The skills you practice in this environment translate directly to the
code you will write in your view functions.

Here you learn how to

*   Create database row objects
    *   Save them to the DB
    *   Retrieve them from the DB again
    *   Delete them from the DB
*   Override the model's `__str__()` method (Python's equivalent of `ToString()`) to give each row in your Database a pleasant string representation.
*   Perform simple queries over a *single* table
*   Perform complex queries which work across *two related* tables


### Some key observations:

*   You must run `./manage.py makemigrations APP_NAME` and then `./manage.py
    migrate` before you can begin to use the database (the file `db.sqlite3`
    does not exist before you migrate).
*   The models you're using in your Blog app (`Blog` and `Comment`) have a lot
    of functionality given to you for free by virtue of the fact that they
    inherit from Django's `models.Model` class.
*   New rows in the database are created by saving the result of a call to the
    model's constructor. In the case of your blog app,
    ```python
    Blog(title="What's new?", pub_date=timezone.now())
    ```
    creates a new row object in the `Blog` table.  You should save that object
    into a variable so you can later call the `save()` method on it to write it
    down into the DB:
    ```python
    b = Blog(title="What's new?", pub_date=timezone.now())
    ```
*   The database isn't actually changed until you call the `save()` method on
    an object:
    ```python
    b.save()
    ```
*   The validity of the data isn't tested/enforced until you attempt to save
    it.  Become familiar with what the error trace looks like when this
    happens, as it will happen often during development.
*   The primary key field is called `id`.  You do not define it in your model;
    it's a freebie that your model inherits from `models.Model`.
    *   This field isn't assigned a value until you call `save()`.
    *   If you go out of your way to manually set the `id` field, calling
        `save()` will overwrite the existing row.  Otherwise, `save()` adds a
        new row to the DB.
*   Tables with a foreign key field are linked to records in another table.  In
    our schema, each `Comment` must be connected to a single `Blog` record.
    Connecting a `Comment` record to the `Blog` object held in the variable `b`
    is as easy as setting the `blog` field to the value `b` in the constructor:
    ```python
    c = Comment(blog=b,
            commenter="North Korean Bot #2981",
            email="NorKorBot.2981@haxorbase.nk",
            content="All praise to Dear Leader",
            posted=timezone.now());
    c.save()
    ```


## How to do database queries in Django without SQL?

Django provides a rich database lookup API that's entirely driven by functions
taking keyword arguments.

`Blog.objects` represents the interface from Python to the rows in your Database
table `Blog`. Because `Blog.objects` is a well-designed OOP class it contains
many useful methods.  Here are a few that you'll use the most often ( In case
you know SQL, I've translated them into their SQL equivalent):

-   `Blog.objects.all()` (e.g. `SELECT * FROM table`)
-   `Blog.objects.filter()` (e.g. `SELECT * FROM table WHERE ...`)
-   `Blog.objects.get()` (e.g. `SELECT * FROM table WHERE ... LIMIT=1`)

The keyword argument given to `get()` and `filter()` asks Django to perform an
SQL Database query for you. What keywords are available for use is explained in
[this document](https://docs.djangoproject.com/en/4.1/topics/db/queries/#field-lookups-intro)

[Queries](https://docs.djangoproject.com/en/4.1/topics/db/queries/) describes
the entire Database API.  Keep it handy.

I strongly encourage you to spend a good portion of your time understanding
part 2 of the Django tutorial. The interaction with the database is the most
crucial part of your webapp.  After this part of the tutorial, the going
becomes much easier!

As a nice bonus, Django's Database API (a.k.a. the ORM) protects against
[SQL-Injection attacks](https://docs.djangoproject.com/en/4.1/topics/security/#sql-injection-protection).



## What is the Admin app, and how do I use it?

https://docs.djangoproject.com/en/4.1/intro/tutorial02/#explore-the-free-admin-functionality

Yay! More free stuff from the Django framework! An entire web application
devoted to making managing your database models easy.

Let's face it, you're not going to maintain your database by running the Django
REPL directly.

You can reach the admin app by visiting the `/admin` path of your app http://127.0.0.1:8000/admin

You may have noticed that in your project's `urls.py` file

It's installed by default in your project's `settings.py` file, in the INSTALLED_APPS list.


### How do I use the admin app?

Let's visit your admin app by running Django and visiting http://127.0.0.1:8000/admin

Uh oh, what's the password?  Wait, what's your username?


#### Create an administrator account

```
$ python manage.py createsuperuser
```



#### Make your models editable in the admin

Register your models with the admin app by

0. Editing `blog/admin.py`
1. Importing your models
2. Registering each model with `admin.site.register(Blog)`

Did you notice how the admin site uses your `__str__()` methods from your models?



## Populate a database with testing data using a Custom Migration

Once you understand the OOP interface provided by Django's ORM, writing code to
manipulate the database is easy.  Code that works in the Django REPL works
just as well within a view function or another Python script.

To test that your web app functions properly requires that some data be present
in the database.  While you *could* manually add testing data through the admin
interface, this task quickly becomes tedious.  When working on a team with
multiple developers it is desirable for everybody to use an identical testing
database to ensure consistency.  It would be nice to just write a Python script
to create the same testing database every time.

Before you can even use the admin interface you must run a migration; why not
have the migration process automatically populate your testing data at the same
time?

A **Data Migration** is a Python script that is run with the migration process
that uses the ORM to populate the database.  Include a data migration with your
project to allow the grader to quickly and easily verify that your submission
is complete and correct.

Data migrations are described in the official documentation
[here](https://docs.djangoproject.com/en/4.1/topics/migrations/#data-migrations).

This quickstart guide get you started:

### Data Migration Quickstart Guide

0.  Create an empty migration script with this command, replacing the app name
    `polls` with the name of your app.  The word following the `--name`
    argument is a name that you give for the migration file.
    ```
    python manage.py makemigrations --empty polls --name populate
    ```
1.  Locate the new file in your app's `migrations/` directory.  Its name begins
    with 4 digits followed by the name you gave in the previous command.  Edit
    the file and define a new function named `populate_db` that takes two
    arguments: an application registry and a schema editor.  You will use the
    1st parameter to gain access to your models *(see the example code linked
    below)*.  Your code can ignore the 2nd parameter.  Fill this function with
    code that will create new records in the database.  Don't forget to
    `.save()` each one!
2.  In the `class Migration`, add to the `operations` array this line of code:
    ```python
    migrations.RunPython(populate_db),
    ```
3.  Run these commands at the CLI to affect your changes to the database:
    ```
    $ python manage.py makemigrations
    $ python manage.py migrate
    ```


### Resetting the database

During the course of your testing you may wish to start over from scratch in a
clean database.  While undergoing testing Django uses the simple SQLite
database as the backing store.  Your entire database is contained in the file
`db.sqlite3`.  To wipe the slate clean you simply need to delete this file and
run `python manage.py migrate` again.

Be aware that this will destroy the credentials created for the administrator
account.


### Demonstration Code 

Refer to the file [0002_populate.py](./0002_populate.py) which is a data
migration that populates the Polls app with two questions and eight choices.
