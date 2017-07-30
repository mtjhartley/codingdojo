from __future__ import unicode_literals

from django.db import models
import datetime
import re
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    #takes request.POST, returns loginObject. If "user" in loginObject, can proceed. Else,
    #model views will handle logic to redirect to login page and render messages.
    def isValidLogin(self, userInfo):
        loginObject = {
            "errors": []
        }

        if User.objects.filter(user_name=userInfo['user_name']):
            hashed = User.objects.get(user_name=userInfo['user_name']).password
            hashed = hashed.encode('utf-8')
            password = userInfo['password']
            password = password.encode('utf-8')
            if bcrypt.hashpw(password, hashed) == hashed:
                user = User.objects.get(user_name=userInfo['user_name'])
                loginObject['user'] = user
            else:
                loginObject['errors'].append("Invalid Login Credentials.")
        else:
            loginObject['errors'].append("Invalid Login Credentials.")
        return loginObject
    
    def isValidRegistration(self, userInfo):
        all_users = User.objects.all()
        if all_users:
            admin = False
        else:
            admin = True
        registrationObject = {
            "errors": []
        }
        validRegistration = True
        if len(userInfo['name']) < 4:
            registrationObject['errors'].append('First name must be at least 3 characters.')
            validRegistration = False
        if len(userInfo['user_name']) < 4:
            registrationObject['errors'].append('Last name must be at least 3 characters.')
            validRegistration = False
        if User.objects.filter(user_name=userInfo['user_name']):
            registrationObject['errors'].append("This Username already exists in our database.")
            validRegistration = False
        if len(userInfo['password']) <= 7:
            registrationObject['errors'].append('Password is too short. Must be at least 8 char.')
            validRegistration = False
        if userInfo['password'] != userInfo['confirm_password']:
            registrationObject['errors'].append('Passwords do not match!')
            validRegistration = False

        if validRegistration:
            hashed = bcrypt.hashpw(userInfo['password'].encode(), bcrypt.gensalt())
            new_user = User.objects.create(name = userInfo['name'], user_name = userInfo['user_name'], password=hashed, admin=admin)
            registrationObject['user'] = new_user
        return registrationObject
        


class User(models.Model):
    name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=60)
    #birthday = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    admin = models.BooleanField(default=False)

    objects = UserManager()