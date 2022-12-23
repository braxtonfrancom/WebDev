CS2610 - Friday, October 07 - Lecture 17 - Module 2

# Topics:
* [Action Items](#action-items)
* [What is "database schema"?](#what-is-database-schema)
* [Django's Object-Relational Mapper (ORM)](#djangos-object-relational-mapper-orm)
* [Django Migrations](#django-migrations)


------------------------------------------------------------
# Action Items


## Call on 2 designated questioners



# [What is "database schema"?](../Database.md#what-is-database-schema)

The organization of data as a blueprint of how the database is constructed

When designing a database you will want to follow organizational principles
that are similar how you would organize object-oriented code.


## Mud card activity

*   Write your *name* and *A Number* on your mud card.
*   Jot down any thoughts or questions you have about anything we discuss today:
    *   Database schema
    *   The Object-Relational Mapper (ORM)
    *   Migrations
    *   The Django Shell, etc.



# [Django's Object-Relational Mapper (ORM)](../Database.md#djangos-object-relational-mapper-orm)

The ORM is Django's Object-Oriented database programming interface.  It presents database entities to you as Python classes.



# [Django Migrations](../Database.md#django-migrations)

As your app evolves your models will change.  This means that the objects in your code will change over time, as well as the data on disk in the database.

Django's "migrations" are Python scripts that allow existing data to "follow" your code changes, such that your database always matches your code.



