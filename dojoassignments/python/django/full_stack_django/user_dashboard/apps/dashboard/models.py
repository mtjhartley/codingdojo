from __future__ import unicode_literals
from ..login_registration.models import User
from django.db import models

# Create your models here.
class Message(models.Model):
    message_text = models.TextField(max_length=1000) 
    wall = models.ForeignKey(User, related_name="wall_messages")
    user = models.ForeignKey(User, related_name="users_messages")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    comment_text = models.TextField(max_length=1000)
    message = models.ForeignKey(Message, related_name='messages_comments')
    commenter = models.ForeignKey(User, related_name='users_comments')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
