import time

from django.shortcuts import render
from django.http import JsonResponse

from . import rand


SLEEPYTIME = 2


def index(request):
    return render(request, 'charactersheet/characterSheet.html')


def gender(request):
    time.sleep(SLEEPYTIME)
    return JsonResponse(
            {
                "gender": rand.gender(),
            })


def name(request):
    time.sleep(SLEEPYTIME)
    gender = request.GET['gender']
    if gender == 'undefined':
        return JsonResponse({ "error": "Gender is undefined, cannot roll a name" })
    else:
        return JsonResponse(
                {
                    "first": rand.firstName(gender),
                    "last": rand.lastName(),
                    "gender": gender,
                })


def stats(request):
    time.sleep(SLEEPYTIME)
    return JsonResponse(
            {
                "str": rand.stat(),
                "dex": rand.stat(),
                "chr": rand.stat(),
                "int": rand.stat(),
                "wis": rand.stat(),
                "con": rand.stat(),
            })


def attribs(request):
    time.sleep(SLEEPYTIME)
    gender = request.GET['gender']
    if gender == 'undefined':
        return JsonResponse({ "error": "Gender is undefined, cannot roll attributes" })
    else:
        return JsonResponse(
                {
                    "attrs": [
                        ["race", rand.race()],
                        ["age", rand.age()],
                        ["height", rand.height()],
                        ["hair", rand.hair(gender)],
                        ["eyes", rand.eyes()],
                    ]
                })
