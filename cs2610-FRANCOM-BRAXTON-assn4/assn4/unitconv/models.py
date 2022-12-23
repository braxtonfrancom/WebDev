from django.db import models

class unitConversions(models.Model):
    unit = models.CharField(max_length=100)
    conversion_factor = models.FloatField()

    def __str__(self):
	    return self.unit