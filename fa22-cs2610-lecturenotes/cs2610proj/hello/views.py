from django.shortcuts import render
from django.http import HttpResponse
from django.utils import timezone
from time import strftime
import platform

from .models import HighFiveLog

import lorem
import random


def index(request):
    numbers = list(range(random.randint(0, 3)))
    random.shuffle(numbers)
    return render(request, 'hello/index.html',
                  {  # this is a python dictionary
                   "now": strftime("%c"),
                   "lorem": lorem.paragraph(),
                   "numbers": numbers,
                   "hostname": platform.node(),
            })


def highFive(request):
    HighFiveLog(when=timezone.now(), who=request.META['REMOTE_ADDR']).save()
    highFives = HighFiveLog.objects.order_by("-when")

    return render(request, 'hello/highFive.html',
            {
                "sinister": len(highFives) % 3 == 0,
                "highFives": highFives,
                "remote_ip": request.META['REMOTE_ADDR'],
                "ip_addr": "144.39.225.31",
            })
