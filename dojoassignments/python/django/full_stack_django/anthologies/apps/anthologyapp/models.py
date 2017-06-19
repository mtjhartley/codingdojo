from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=45)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)


class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ManyToManyField(Author)
    published_date = models.DateField(auto_now_add=True)
    category = models.CharField(max_length=255)