# Python Review

* [Join the "Python Intro" Course on Canvas](#join-the-python-intro-course-on-canvas)
* [Python Gotchas](#python-gotchas)
* [Importing Python Packages](#importing-python-packages)
* [Strings vs. Bytes](#strings-vs-bytes)
* [Reading files in Python](#reading-files-in-python)
* [The Read, Eval, Print, Loop (REPL)](#the-read-eval-print-loop-repl)


## Join the "Python Intro" Course on Canvas

We'll be doing a fair bit of work in the Python language from now through
Assignment #4.

If you are new to the Python language or are a bit rusty, I can invite you to a
[Python Intro](https://usu.instructure.com/courses/474722) course on Canvas.
This course will quickly bring you up to speed with what you need to know to
succeed in this class.

Send me an email if you are interested in this resource.


### TL;DR The most important things to understand about Python right now:

* [Python Numbers](https://usu.instructure.com/courses/474722/pages/numbers)
* [Python Strings](https://usu.instructure.com/courses/474722/pages/strings)
* [Python Lists](https://usu.instructure.com/courses/474722/pages/lists)
* [Python Control Flow](https://usu.instructure.com/courses/474722/pages/control-flow)
* [Python Functions](https://usu.instructure.com/courses/474722/pages/python-functions)
* [Reading Files](https://usu.instructure.com/courses/474722/pages/file-handling)



## Python Gotchas

Perhaps the most distinctive feature of the Python language is the fact that it
doesn't use curly braces to denote the extent of a block of code.  Instead of
merely furthering readability, in Python indentation is syntactically
significant.  Code blocks are indented; the level of indentation signifies
blocks of related code.

Be careful about the following:

*   Mixing tabs and spaces will result in a syntax error.
*   Inconsistent indentation within a block results in a syntax error.  Blocks
    in Python are denoted by their level of indentation as opposed to curly
    braces used in Java.
    *   Indent blocks in multiples of 4 spaces
    *   One line which is indented differently from the rest of its block, even
        if only by a single space, results in a syntax error.
*   The first line of if statements, loops, functions and classes end with a
    colon character `':'`, and the next level of indentation begins following
    the first line.



## Importing Python Packages

> The best line of code is the one you didn't have to write
>     -- me

One factor which contributes to Python's considerable popularity is a large
library of pre-written Python code. Before you sit down to solve a programming
problem you should consider whether there already exists a package which does
what you need.

Packages of code are imported into your program with the 'import' statement.

```python
import time
```

Imported functions and variables are prefixed by the name of their package.

```python
print(time.strftime('%c'))
```


Prefixing identifiers within packages protects any variables and functions that
you have written from being overridden.  Imagine what might happen if you
imported a large package with lots of variables, so many that you didn't know
everything that was in there.  Would it cause trouble for you if that package
used a common variable name such as 'i'?  Or, consider what might happen if you
imported two packages, each containing a function with the same name.  You'd
only be able to access one of the functions.  Which would it be?


You can import a function directly into the current package, allowing access to
a function or variable without needing to add a prefix to its name.  Do this
when you're sure that it won't cause problems.

```python
from time import strftime  # import the strftime() function directly
print(strftime('%c'))
```




## Strings vs. Bytes

Python observes a distinction between `str` and `bytes` values.  `bytes` is a
built-in type in Python.

Strings are represented as beginning and ending with quote marks in Python.
Single and double quotes are both acceptable.  These are `str` values in
Python:

```python
"Hello World"
'Hello World'
"She said 'Hello World'"
'He replied "Hello World"'
"""She retorted "Hello World to you, too!" as she walked away"""
```


Bytes look like strings, except the first quote mark is preceded by `B` or
`b`.  As with strings, single and double quotes are acceptable.  These are
`bytes` values in Python:

```python
B"Hello World"
B'Hello World'
b"She said 'Hello World'"
b'He replied "Hello World"'
b"""She retorted "Hello World to you, too!" as she walked away"""
```


The `bytes()` type constructor converts an ordinary string into a bytes object.
`bytes()` takes two string arguments:

1.  A value to convert into bytes.
2.  The name of an encoding.
    *   For best results use `"utf_8"` as the encoding.

```python
# Convert a string literal into a bytes value
b0 = bytes("Hello Bytes", "utf_8")

# Convert an *f-string* literal into a bytes value:
b1 = bytes(f"<p>You are visiting {self.path}</p>\n", "utf_8")

# Convert a string variable into bytes
a_string = "This is a 'Hello World' string, but will become bytes"
b2 = bytes(a_string, "utf_8")
```


Your server uses the `self.wfile.write()` method to send data to the client.
This method expects a single `bytes` value as its argument.  Your server will
throw errors when you try to send string values back to the client.



## Reading files in Python

The built-in `open()` function is how one accesses the contents of files in
Python.  `open()` takes a string naming a file as its first argument, and
another string which represents the **mode** in which a file may be opened.  If
there is any problem accessing or opening the file named by the string
argument, `open()` will raise an error which may terminate your program.

`open()` returns an object representing the opened file.  Operations on this
object extract data from or insert data into the file.

Files can be opened for *reading* and *writing*, and in *text* or *binary*
mode.  *Text* mode is appropriate for files that are known ahead of time to
contain plain text.  *Binary* mode is best for images, sound files, archives
and other non-text files.  However, text files may also be opened in *binary*
mode.

This table shows the different mode strings that can be used to control
how a file's contents may be accessed.

Mode String   | Reading | Writing
--------------|:-------:|:-------:
Text          | `"r"`   | `"w"`
Binary        | `"rb"`  | `"wb"`


Data read into a variable from a file opened in text mode results in a string
value.  Data read from a file opened in binary mode `"rb"` comes in the form of
a [bytes](https://docs.python.org/3.8/library/functions.html#bytes) object.

```python
f = open("index.html", "rb")
# Read one line of the file as a sequence of bytes
this_is_bytes_data = f.readline()

# Read until EOF into one long bytestring
this_is_the_rest_of_the_data_as_bytes = f.read()

# Close the file when finished
f.close()
```


[Python tutorial section 7.2](https://docs.python.org/3.8/tutorial/inputoutput.html#reading-and-writing-files)


### `f.read()`

You can read any quantity of data from a file up to the number of bytes
contained therein.  To read a particular number of bytes use the `.read()`
method, passing that number as the argument:

```python
tenBytes = f.read(10)
twentyBytes = f.read(20)
```

It is not an error to try to read beyond the end of the file.  For example, if
you call `f.read(100)` and there are only 30 bytes available, you get those
remaining 30 bytes.

Python keeps a cursor within the file object to remember where you were at the
last time you read from the file.  Each time you call `.read()` this cursor is
advanced automatically until you reach the end of the file.

When the *end-of-file* (EOF) is reached `.read()` returns the empty string (or an
empty bytes object), which acts as a sentinel value.  This is the only time
that `.read()` can return an empty value, and is the way your program will
detect that it has reached the end of the file.

#### [Sentinel Value](https://en.wikipedia.org/wiki/Sentinel_value)

A special value in the context of an algorithm whose presence is a condition of termination

If you want to *slurp* the entire file into a variable in one go, give
`.read()` an empty argument list *or* a negative number.



### `f.readline()`

When we know that our file contains lines of text it is more convenient to read
it one line at a time.  `.readline()` will read bytes from the file until it
reaches an *end-of-line* (EOL) sequence or EOF.  `.readline()` returns a string
which includes the EOL sequence.  As with `.read()` the empty string `""` (or
bytes object `b""`) is returned when EOF is reached.

#### The EOL sequence varies by system

*   EOL == `"\n"` on Unix and MacOS
*   EOL == `"\r\n"` on Windows



### `f.close()`

Software is limited by the OS in the number of files it can hold open at a
time.  Once reached, subsequent calls to `open()` will fail until the number of
open files is reduced.

After you are finished using a file it is good programming hygiene to close the
file with the file object's `.close()` method.  This is something that I and
the graders will be on the lookout for.



## The Read, Eval, Print, Loop (REPL)

Perhaps Python's most important feature for the beginning programmer is the REPL.

#### REPL: Read Eval Print Loop

The REPL is an interactive environment where you can play with the language and
see for yourself how stuff works.  It is a great way to experiment with the
language and to try out new ideas.

The idea of the REPL was born in the LISP language (as so many good ideas
were), and all self-respecting "modern" languages feature this nowadays.


[Using the Python Interpreter](https://docs.python.org/3/tutorial/interpreter.html)

Enter the REPL simply by running `python` with no arguments.

You are in the REPL when you see the `>>>` prompt.

You may also launch the REPL after your script has run by running

    $ python -i scriptname.py



### Special instruction for Windows users

Windows users who have installed Git+Bash will find that running Python
interactively freezes their console.  They should instead use the command
`winpty python` instead of running Python alone.  For convenience' sake you can
create a new Bash command called `repl` which invokes the Python REPL with
`winpty` for you.  Edit `~/.bash_profile` in the Nano editor and add this line:

    alias repl=`winpty python`

After saving this file close and re-open your Bash console to activate this
command.

    $ repl


You can use the `-i` argument described above with this command.

    $ repl -i scriptname.py


Once you're in the REPL you can try things out.

    $ python
    Python 3.7.6 (default, Dec 20 2019, 13:54:57)
    [GCC 9.2.0] on linux
    Type "help", "copyright", "credits" or "license" for more information.

    >>> "yabba dabba" + ' ' + "doo"
    'yabba dabba doo'

    >>> 2 + 7
    9

    >>> 2 * 7
    14

    >>> 2 ** 7
    128


### Two important functions: `help()` and `dir()`

#### The `help()` function

Besides being a great base for experimentation, the REPL gives you access to
Python's built-in documentation through the `help()` function.


##### `help()` called with no arguments

Calling `help()` in the REPL opens an interactive help system.  The prompt will
change from `>>>` to `help>`.  Enter the name of a topic to read about it.
High-level topics include "modules", "keywords", "symbols", and "topics".

Leave the help system by typing `"quit"`.


##### `help()` called with one argument

```python
help(OBJ)
```

Displays the built-in documentation for Python object `OBJ`.

`OBJ` may be a number, a string, a function, a class, a module; basically,
anything that can be assigned to a variable in Python can be passed to the help
function.

When `help()` is passed a non-empty string, that string is interpreted as a
topic accessible by the interactive help system as described above.

Other types of values (lists, dictionaries, classes) bring up their own help
article.

When `OBJ` is a function its *signature* is displayed along with its help
article.  This tells you how many parameters this function accepts, their names
and what order they appear.

*   `...` means that many more parameters may be accepted
*   `*` means that an arbitrary number of parameters may be accepted
*   `/` marks the end of *positional* parameters
*   The presence of a 1st parameter called `self` usually indicates this is a method of a class


Remember `help()` any time you have a question about how to use some aspect of
the language.

    $ python
    Python 3.7.1 (default, Dec 14 2018, 19:28:38)
    [GCC 7.3.0] :: Anaconda, Inc. on linux
    Type "help", "copyright", "credits" or "license" for more information.

    >>> help(int)
    # Shows the help for the 'int' class

    >>> help(3 + 7)
    # Idem.

    >>> help(list)
    # Shows the help for 'list' objects, including valid methods that may be
    used on lists.

    >>> help([])
    # Idem.


#### The `dir` function

You can see a more compact list of possibilities with the `dir()` function.
This function gives a directory listing of members and methods on an object in
Python.  This listing is given as a list of strings, so you can use the
ordinary Python list and string operations on it:


```python
>>> dir(list)
['__add__', '__class__', '__contains__', '__delattr__', '__delitem__',
'__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__',
'__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__',
'__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__',
'__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__',
'__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__',
'__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count',
'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']


# Cut the list of methods down to the public ones
>>> for s in dir(list):
...     if not s.startswith('__'): print(s)
...
append
clear
copy
count
extend
index
insert
pop
remove
reverse
sort
```
