from django.shortcuts import render
from django.http import JsonResponse

#myAPI = NHszDaMzgoxFFXbAWfJ3;


def mainPage(request):
    return render(request, 'gold/mainPage.html', {})