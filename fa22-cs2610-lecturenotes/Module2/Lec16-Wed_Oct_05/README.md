CS2610 - Wednesday, October 05 - Lecture 16 - Module 2

# Topics:
* [Announcements](#announcements)
* [Features of the Django template language](#features-of-the-django-template-language)
* [Including static content](#including-static-content)
* [What is CRUD?](#what-is-crud)


------------------------------------------------------------
# Announcements

## TONIGHT Free Software and Linux Club

*   **What**  uPnP Workshop
*   **When**  6:30pm Wednesday, October 5th
*   **Where** ESLC 053, [FSLC Discord server](https://discord.gg/p4jRxrQmqP)

Have you ever wanted to access your computer from outside of your home network, or host an HTTP or Minecraft server from your home network?  Heard about port forwarding, but don't have admin access to your apartment's router? Come to our uPnP workshop this Wednesday at 6:30PM in ESLC 053 to learn about uPnP and how it can help you more easily forward your ports.


## TOMORROW AIS Workshop: Hacking WordPress Sites 

*   **What**  Professional Hacking Workshop with Senior Security Engineer Brad Poulton
*   **When**  7:15pm Thursday, October 6th
*   **Where** Huntsman Hall 326
    *   Learn how to hack into WordPress sites using tools like WireShark, Burp Suite, and Hydra!
    *   Come to Huntsman Hall 322 @ 6:30 the same night if you would like help setting up your environment to follow along!

![./AIS_hacking_workshop.png](./AIS_hacking_workshop.png "Professional Hacking Workshop Promo Flyer")


# Action Items

* Call on 2 designated questioners



# [Features of the Django template language](../Django.md#the-django-template-language)

* `{{ Variables }}`
* `{% Tags %}`
* `{# Comments #}`
* `{{ textVariable | Filters }}` [Template filters](https://docs.djangoproject.com/en/3.0/ref/templates/builtins/#ref-templates-builtins-filters)

What template filters can we use to make our page look a little nicer?

* `length`
* `pluralize`
* `truncatewords`
* Changing case of text
    - `title`
    - `upper`
    - `lower`


## Installing the `lorem` package

For this assignment you are permitted to install another 3rd party module called `lorem` to generate random Lorem Ipsum text for your blog posts.

It is installed with `pip` in much the same way as Django:

```
$ pip install --user lorem
```

You can learn how to use this module in the REPL:

```
>>> import lorem
>>> help(lorem)
```

### Troubleshooting

*   Replace `pip3` for `pip` if your `pip` program is for Python 2
*   If you get a "command not found" error or the above command doesn't work, try this:
    *   `$ python -m pip install --user lorem`
    *   Replace `python3` for `python` if your `python` program is Python 2



# [Including static content](../Django.md#how-to-include-static-content-in-a-django-generated-page)

Use the `{% static %}` tag to include our CSS as a static file instead of passing it through the template engine



# [What is CRUD?](../CRUD.md)

Do you know what they put in that square lake 3 1/2 miles west of here?



