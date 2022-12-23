import datetime
from django.db import models
from django.utils import timezone

class Blog(models.Model):
    title_text = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    content = models.TextField()
    posted = models.DateTimeField('date blog was published')

    def __str__(self):
        return self.title_text

    def was_published_recently(self):
        return self.posted >= timezone.now() - datetime.timedelta(days=1)



class Comments(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE,)
    commenter = models.CharField(max_length=200)
    email = models.EmailField()
    content = models.TextField()
    posted = models.DateTimeField('date comment was published')

    def __str__(self):
        return self.commenter