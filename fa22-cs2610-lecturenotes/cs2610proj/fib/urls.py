from django.urls import path

from . import views


app_name = 'fib'
urlpatterns = [
    # /fib/fibAPI?N=[some non-negative number]
    path('fibAPI', views.fibAPI, name="fibAPI"),

    # /fib/
    path('', views.index, name="index"),
]
