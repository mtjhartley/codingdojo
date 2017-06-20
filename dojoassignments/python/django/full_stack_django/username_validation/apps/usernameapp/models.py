from __future__ import unicode_literals
from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$')
# Create your models here.
class UserManager(models.Manager):
	def isValidUsername(self, username):
		if EMAIL_REGEX.match(username):
			return True
		else:
			return False
	def doesUsernameExist(self, username):
    		#filter(username=username).exists();
			#try returning user objects or error objects
		existing_user = User.objects.filter(username=username)
		if len(existing_user) > 0:
			print "Username already exists from models.py"
			return True

class User(models.Model):
	username = models.CharField(max_length=250)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	objects = UserManager()

