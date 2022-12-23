CS2610 - Monday, October 10 - Lecture 18 - Module 2

# Topics:
* [Announcements](#announcements)
* [Mud card followup](#mud-card-followup)
* [Explore the Django database API in the REPL](#explore-the-django-database-api-in-the-repl)
* [How to do database queries in Django without SQL?](#how-to-do-database-queries-in-django-without-sql)
* [How to clean up a database in Django](#how-to-clean-up-a-database-in-django)
* [Populate a database with testing data using a Data Migration](#populate-a-database-with-testing-data-using-a-data-migration)
* [Models in practice: finish the `HighFive` demo](#models-in-practice-finish-the-highfive-demo)


------------------------------------------------------------
# Announcements

## Free Software and Linux Club

*   **What**  Online Anonymity with Open Source
*   **When**  6:30pm Wednesday, October 12th
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)

Are you tired of targeted ads invading your privacy? Worried about Big Brother watching over your shoulder? Then swing by ESLC 053 this Wednesday at 6:30 PM to learn about online anonymity and the tools of the trade, including Tor, PGP, and the wonderful world of the dark web.

👁️ Big Brother expects to see you there 👁️


## Fall Break is this week

*   There will be no lecture on Friday, October 14th
*   I am **NOT** holding office hours on Thursday, October 13th
*   Assignment #2 is due Sunday, October 16th


# Action Items

*   Call on 2 designated questioners



# Mud card followup

## SQL vs. NoSQL

> Is there a reason to use a relational database vs. a NoSQL database and vice versa?  I really like NoSQL databases, but is it just a passing fad that allows for poor code?

*   Both types of databases serve the same purpose - to enable applications to effectively & efficiently store data
    *   They fulfill this purpose in drastically different ways
    *   One isn't better than the other - they're just different
    *   Either type of database can yield poor results if you use it wrong
*   One way to think of it is that Relational (SQL) databases optimize to *reduce storage demands*, and NoSQL optimizes to *minimize CPU time*
    *   Here is a [really good talk](https://youtu.be/HaEPXoXVf2k) by Rick Houlihan, Principal Technologist for NoSQL at AWS that explains when & how to use NoSQL right
    *   Here is a [podcast interview](https://softwareengineeringdaily.com/2020/01/09/nosql-optimization-with-rick-houlihan/) Rick
        *   [Transcript](https://softwareengineeringdaily.com/wp-content/uploads/2020/01/SED979-NoSQL-Rick-Houlihan.pdf)


## Django

> Who updates and maintains Django, and how do they go about changes?

*   Development of Django is supported by an [independent foundation](https://www.djangoproject.com/foundation/) established as a 501(c)(3) non-profit.
*   Django is an Open Source project, so people like **you** can get involved by contributing code, documentation, etc.


## General Database Questions

> What happens if you or a user tries to put a value into the database that is larger than the specified length?

*   What actually happens depends upon the database engine you're using
    *   It could either:
        1.  signal an error and not complete the transaction
        2.  complete the transaction by truncating (chopping off) the data that's too long
*   In the databases I've used, the data gets truncated without warning


> Can running migrations potentially lose data?

*   Yes.
    *   Either by mistake or system error (i.e. Django crashes in the middle of the process)
    *   Or because your migration script was written to deliberately lose data
        *   Using my example of a migration that splits a "name" field into "first" and "last", your code could ignore middle initials or split a name like "Mary Beth Smith" into `first="Mary"` and `last="Beth Smith"`


> Follow up question: do big companies keep multiple copies of a database to prevent data loss?

*   I sure hope so!


> What happens if you have a poorly designed database a couple of years into a business?  How can you smoothly transition that database into a more thoughtfully designed one?

*   I don't know if "smooth" is a word I would choose for this
*   In a nutshell, you could
    1.  Pick a convenient time to take the system down (i.e. middle of the night Monday or Tuesday morning) and migrate the data
    2.  Perform the migration on a backup database, then pull a switcheroo and make the backup database become the primary database
    3.  Gradually migrate the database one customer at a time over the course of a week


> What databases are considered the most efficient?

*   This is a holy-war kind of question.  Are you trying to get me in trouble?
    *   In the corporate world the big players are Oracle Enterprise, MySQL Enterprise (now an Oracle product), and Microsoft SQL Server (not the same thing as Microsoft Access)
    *   In the open source world the big factions are MySQL, MariaDB (forked from MySQL when it was bought by Oracle), and PostgreSQL
*   Among the developers that I hung out with PostgreSQL was the best


> What is the difference in the SQL language between PostgreSQL and MySQL?

*   Dumb little things, like what kind of quote mark to use in certain contexts, the names of some built-in functions
    *   I always had a hard time with these details when I had to switch between dialects at my job
    *   SQL stands for _**Structured** Query Language_, not _**Standard** Query Language_
*   This is the nice thing about an ORM - I don't have to think about these dumb details anymore



# [Explore the Django database API in the REPL](../Database.md#explore-the-django-database-api-in-the-repl)

Part 2 of the Django Tutorial taught you how to explore the Django database API in the Django shell (REPL). The skills you practice in this environment translate directly to the code you will write in your view functions.





# [How to do database queries in Django without SQL?](../Database.md#how-to-do-database-queries-in-django-without-sql)

At this point you should be all of the way through the tutorial, from start to finish, skipping over those sections marked unnecessary in [Django.md](../Django.md).



# How to clean up a database in Django

Sometimes in the course of your work, your database accumulates a bunch of junk.  Fortunately, it's very easy to clean up Django's development database:

0.  Stop the server (if it's running)
1.  Delete the file `db.sqlite3`
2.  Run `python manage.py migrate` to re-create `db.sqlite3`
3.  You may need/want to re-run `python manage.py createsuperuser` as your admin account credentials were wiped away with the database
4.  Restart the server



# [Populate a database with testing data using a Data Migration](../Database.md#populate-a-database-with-testing-data-using-a-data-migration)

To test that your web app functions properly requires that some data be present
in the database.  While you *could* manually add testing data through the admin
interface, this task quickly becomes tedious.  

It would be nice to just write a Python script to create the same testing
database every time.

Django's *Migrations* are these scripts.



# Models in practice: finish the `HighFive` demo

Now that we know how models work, let's use one to finally get rid of that pesky global variable in my hello app's HighFive counter.



