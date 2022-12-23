from django.contrib import admin

# Register your models here.

from django.contrib import admin

from .models import Blog
from .models import Comments

admin.site.register(Blog)
admin.site.register(Comments)
