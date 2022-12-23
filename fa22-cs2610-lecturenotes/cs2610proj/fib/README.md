# Django Fibonacci Number API + App

Compute the Fibonacci numbers on the server using the recursive algorithm.

## Installation


3. Add a pathconfig to Django project's urls.py:
    urlpatterns += [path('fib/', include('fib.urls'))]



## Usage

### Pretty interface

Navigate to http://localhost:8000/fib/


### JSON API endpoint

Hit with http://localhost:8000/fib/fibAPI?n=N cURL or similar:

    $ curl -s 'http://localhost:8000/fib/fibAPI?n=3'
    {"n": 3, "fibonacci": 2}

    $ curl -s 'http://localhost:8000/fib/fibAPI?n=13'
    {"n": 13, "fibonacci": 233}
