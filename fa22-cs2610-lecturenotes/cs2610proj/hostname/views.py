from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def index(request):
    return render(request, 'hostname/index.html',
            {
                'port':  request.get_port(),
                'host':  request.get_host(),
            })


def hostname(request):
    #import pdb; pdb.set_trace()
    return render(request, 'hostname/hostname.html', { 'host':  request.get_host() })


def requestToDict(request):
    response = {
            'host': request.get_host(),
            'method': request.method,
            }

    if request.GET:
        response['GET'] = request.GET.dict()

    if request.POST:
        response['POST'] = request.POST.dict()
        if request.META and 'CONTENT_LENGTH' in request.META:
            response['CONTENT_LENGTH'] = request.META['CONTENT_LENGTH']

    response['HEADERS'] = {}
    for k in request.META:
        if k.startswith('HTTP'):
            response['HEADERS'][k] = request.META[k]

    response['COOKIES'] = {}
    for k in request.COOKIES:
        response['COOKIES'][k] = request.COOKIES[k]

    return response


def headers(request):
    return render(request, 'hostname/headers.html', requestToDict(request))


def headers_json(request):
    return JsonResponse(requestToDict(request))
