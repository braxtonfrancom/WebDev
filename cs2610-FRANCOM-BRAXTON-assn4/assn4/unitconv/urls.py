from django.urls import path
from . import views



app_name = 'unitconv'
urlpatterns = [
    path('', views.mainPageConv),

    # /convert?from=lb&to=t_oz&value=3.14159
    path('convert', views.convert, name="unitsAPI")
]