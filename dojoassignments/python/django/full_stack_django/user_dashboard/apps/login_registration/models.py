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

        if User.objects.filter(email=userInfo['email']):
            hashed = User.objects.get(email=userInfo['email']).password
            hashed = hashed.encode('utf-8')
            password = userInfo['password']
            password = password.encode('utf-8')
            if bcrypt.hashpw(password, hashed) == hashed:
                user = User.objects.get(email=userInfo['email'])
                loginObject['user'] = user
            else:
                loginObject['errors'].append("Unsuccessful login, incorrect password")
        else:
            loginObject['errors'].append("Unsuccessful login, email does not exist.")
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
        if not userInfo['first_name'].isalpha():
            registrationObject['errors'].append('First name contains non-alpha character(s).')
            validRegistration = False
        if len(userInfo['first_name']) < 2:
            registrationObject['errors'].append('First name is less than 2 char.')
            validRegistration = False
        if not userInfo['last_name'].isalpha():
            registrationObject['errors'].append('Last name contains non-alpha character(s).')
            validRegistration = False
        if len(userInfo['last_name']) < 2:
            registrationObject['errors'].append('Last name is less than 2 char.')
            validRegistration = False
        if not EMAIL_REGEX.match(userInfo['email']):
            registrationObject['errors'].append('Email is not a valid Email!')
            validRegistration = False
        if len(userInfo['password']) < 7:
            registrationObject['errors'].append('Password is too short. Must be at least 8 char.')
            validRegistration = False
        if userInfo['password'] != userInfo['confirm_password']:
            registrationObject['errors'].append('Passwords do not match!')
            validRegistration = False
        if User.objects.filter(email=userInfo['email']):
            registrationObject['errors'].append("This email already exists in our database.")
            validRegistration = False
        
        now = datetime.datetime.now()
        birthday = datetime.datetime.strptime(userInfo['birthday'], '%Y-%m-%d')
        if birthday > now:
            registrationObject['errors'].append("You can't be born in the future!")
            validRegistration = False
        
        if validRegistration:
            hashed = bcrypt.hashpw(userInfo['password'].encode(), bcrypt.gensalt())
            new_user = User.objects.create(first_name = userInfo['first_name'], last_name = userInfo['last_name'], email=userInfo['email'], password=hashed, birthday=userInfo['birthday'], admin=admin)
            registrationObject['user'] = new_user
        return registrationObject
        


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=60)
    birthday = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    admin = models.BooleanField(default=False)

    objects = UserManager()