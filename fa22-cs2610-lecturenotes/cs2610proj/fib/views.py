from django.http import JsonResponse
from django.shortcuts import render


def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)


def fibAPI(request):
    # look at the GET paramters
    # if N is not present, return an error
    # if N is empty string or not an int, return an error
    # else, compute fibonacci of n (converted from string to int)
    # return JSON that contains N and the fib(N)
    for k, v in request.GET.items():
        print(f"  GET parameter {k} => {v}")
    resp = {}

    if 'N' not in request.GET:
        resp['error'] =  "Usage: N=[non-negative integer]"
    else:
        N = request.GET['N']
        if not N.isdigit():
            resp['error'] =  "Usage: N=[non-negative integer]"
        else:
            N = int(N)
            val = fibonacci(N)
            resp = {
                    'N': N,
                    'fibonacci': val
                    }

    j = JsonResponse(resp)
    # The HTTP status code does not count as an error as far as fetch() and the Promises are concerned
    # j.status_code = 501

    if 'Origin' in request.headers:
        j['Access-Control-Allow-Origin'] = request.headers['Origin']
    else:
        j['Access-Control-Allow-Origin'] = '*'

    return j


def index(request):
    return render(request, 'fib/index.html')
