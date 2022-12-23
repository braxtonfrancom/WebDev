from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('headers', views.headers, name='headers'),
    path('headers_json', views.headers_json, name='headers_json'),
    path('hostname', views.hostname, name='hostname'),
]
