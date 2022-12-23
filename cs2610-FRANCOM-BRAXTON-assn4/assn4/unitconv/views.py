from django.shortcuts import render
from django.http import JsonResponse

from .models import unitConversions

def mainPageConv(request):

    return render(request, 'mainPageConv.html', {})


def convert(request):
    for k, v in request.GET.items():
        print(f" GET PARAMETER {k} => {v}")
    resp = {}
    allowed_options = ['lb', 'oz', 't_oz', 'T', 'g', 'kg']

    if 'from' not in request.GET:
        resp['error'] = "Usage: from = [T | g | t_oz | kg | lb | oz]"
    if 'to' not in request.GET:
        resp['error'] = "Usage: to = [T | g | t_oz | kg | lb | oz]"
    if 'value' not in request.GET:
        resp['error'] = "Usage: value = [a floating-point number]"
    else:
        if (request.GET['from'] in allowed_options and request.GET['to'] in allowed_options):
            myFrom = request.GET['from']
            myTo = request.GET['to']
        else: 
            resp['error'] = "Cannot perform conversion on unknown unit";
            return JsonResponse(resp)
        try: 
            float(request.GET['value']);
            number = request.GET['value'];
        except: 
            resp['error'] =  "Usage: You gotta put a floating-point number";
            return JsonResponse(resp);

        databaseList = unitConversions.objects.order_by('unit');

        for item in databaseList:
            if item.unit == myFrom:
                convFactorFrom = item.conversion_factor;
            if item.unit == myTo:
                convFactorTo = item.conversion_factor;


        convertedAnswer = float(number) / convFactorFrom * convFactorTo
        
        resp = {
            'units': myTo,
            'value': convertedAnswer,
        }

        response = JsonResponse(resp)
        response['Access-Control-Allow-Origin'] = '*'
    return response

    #return JsonResponse(resp)

