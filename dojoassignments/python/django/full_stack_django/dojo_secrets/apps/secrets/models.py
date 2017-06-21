from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Secret(models.Model):
    secret = models.TextField(max_length = 1000)
    author = models.ForeignKey('login_registration.User', related_name="secrets")
    like = models.ManyToManyField('login_registration.User', related_name="likes")
    #users m2m
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


