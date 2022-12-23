from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('gender', views.gender, name='gender'),
    path('name', views.name, name='name'),
    path('stats', views.stats, name='stats'),
    path('attribs', views.attribs, name='attribs'),
]
