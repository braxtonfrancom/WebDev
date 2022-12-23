from django.db import models

class HighFiveLog(models.Model):
    when = models.DateTimeField()
    who  = models.CharField(max_length=128)
