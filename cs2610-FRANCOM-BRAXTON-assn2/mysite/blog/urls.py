from django.urls import path
from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.blogHome, name='blogHome'),

    path('about', views.about, name='about'),

    path('archive', views.archive, name='archive'),

    path('entry/<int:blogEntry_id>/', views.entry, name='entry'),

    path('plan', views.plan, name='plan'),

    path('techtips+css', views.techTipsWithCss, name='techtips+css'),

    path('techtips-css', views.techTipsNoCss, name='techtips-css')

]