# What is CRUD?

Do you know what they put in that square lake 3 1/2 miles west of here?


## There is now another meaning of CRUD
https://en.wikipedia.org/wiki/Create,_read,_update_and_delete


CRUD Concept | HTTP<br/>Method | Database<br/>(SQL) | Django<br/>(ORM)                   | Safe/Idempotent
-------------|-----------------|--------------------|------------------------------------|-----------------------
**Create**   | `POST`          | INSERT             | `save()`                           | !idempotent<br/>!safe
**Read**     | `GET`           | SELECT             | `all()`<br/>`get()`<br/>`filter()` | idempotent<br/>safe 
**Update**   | `PUT`           | UPDATE             | `save()`                           | idempotent<br/>!safe 
**Delete**   | `DELETE`        | DELETE             | `delete()`                         | idempotent<br/>!safe 



### Difference between PUT and POST

In this chart I have associated HTTP's POST request with the **Create** verb,
and PUT with **Update**, but the distinction isn't always clear.  Plenty of
APIs in the real world mix the two concepts because HTTP's notions don't
exactly correspond to those in CRUD.

One rule-of-thumb given in the [REST Cookbook](http://restcookbook.com/HTTP%20Methods/put-vs-post/)
suggests that one use **POST** when creating a new resource when the client
doesn't know the URL that new resource will be placed, and using **PUT** when the URL of the resource is known:


> Use PUT when you can update a resource completely through a specific
> resource. For instance, if you know that an article resides at
> http://example.org/article/1234, you can PUT a new resource representation of
> this article directly through a PUT on this URL.
>
> If you do not know the actual resource location, for instance, when you add a
> new article, but do not have any idea where to store it, you can POST it to
> an URL, and let the server decide the actual URL.

An example in our Blog project is the creation of a new comment.  That comment
will get an ID number upon being saved in the Database, but until that happens
the client has no way of predicting that number and cannot use it in any
request.  Therefore, the client should use **POST** to ask the server to create
the comment and assign it an ID.

It would be appropriate to use a **PUT** request to edit an already-existing
comment, since the comment would by that time have an ID number which could be
provided to the client.



### Safety

What does it mean for an operation to be "safe"?

#### Safe
An operation which does not modify resources on the server

This Python loop does not change `value`, and so is safe

```
# This operation is safe AND idempotent (by virtue of it being safe...)
value = 1337
while True:
    print(value)
```

<details>
<summary>Which of the CRUD operations are safe?</summary>

0. Read

</details>


###  Idempotence

How are you supposed to say this silly word?

https://www.youtube.com/watch?v=RE-X9Uqpz8w

What does it mean for an operation to be "idempotent"?


#### Idempotent
It doesn't change things to do an operation more than one time


```
# This operation is NOT safe but IS idempotent
# (after it's run once you can't tell how many times it's executed)

a = 42
for i in range(1000):
    a = 1
```

<details>
<summary>Which of the CRUD operations are idempotent?</summary>

0. Read
1. Update
2. Delete
</details>


```
# This operation is neither safe NOR idempotent

value = 1337
while True:
    value += 1
```

*Hint: `+=` is both a *read* and an *update*.*
