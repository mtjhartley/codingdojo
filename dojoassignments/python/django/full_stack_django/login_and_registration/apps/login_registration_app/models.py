from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import datetime
import re 
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.


class UserManager(models.Manager):
    # isValidLogin takes in the userInfo from request.POST on the views.py, and the request.
    # Uses .objects.filter to check if the email exists. If it does, check the bcrypt hashed password 
    # and see if it matches what the hash is from the input. 
    # Message warnings might be dangerous (revealing if email exists in db by distinguishing, but is fine for debugging
    def isValidLogin(self, userInfo, request):
        validLogin = True
        if User.objects.filter(email = userInfo['email']):
            hashed = User.objects.get(email = userInfo['email']).password
            hashed = hashed.encode('utf-8')
            password = userInfo['password']
            password = password.encode('utf-8')
            if bcrypt.hashpw(password, hashed) == hashed:
                messages.success(request, "Success! Welcome, " + User.objects.get(email=userInfo['email']).first_name + "!")
            else:
                messages.warning(request, "Unsuccessful login, incorrect password.")
                validLogin = False
        else:
            messages.warning(request, "Unsuccessful login, email is not in our db.")
            validLogin = False
        return validLogin
                
    # isValidRegistration takes userInfo from request.POST on views.py, and the request.
    # If checks to see if the various parameters are valid, and if they are not, adds a 
    # warning to django messages with a label warning. 
    # If any tests fail, the boolean is set to False and the page is redirected to the index,
    # flashing the fails on the index page.
    # If all of the tests pass, the user receives a success message, the hashed password is generated 
    # with bcrypt, and the function returns True. On views.py, returning true redirects us to the successful 
    # login page, which flashes the Success! message. 
    def isValidRegistration(self, userInfo, request):
        validRegistration = True
        if not userInfo['first_name'].isalpha():
            messages.warning(request, 'First name contains non-alpha character(s)')
            validRegistration = False
        if len(userInfo['first_name']) < 2:
            messages.warning(request, 'First name is less than 2 char.')
            validRegistration = False
        if not userInfo['last_name'].isalpha():
            messages.warning(request, 'Last name contains non-alpha character(s)')
            validRegistration = False
        if len(userInfo['last_name']) < 2:
            messages.warning(request, 'Last name is less than 2 char.')
            validRegistration = False
        if not EMAIL_REGEX.match(userInfo['email']):
            messages.warning(request, 'Email is not a valid Email!')
            validRegistration = False
        if len(userInfo['password']) < 7:
            messages.warning(request, 'Password is too short. Must be 8 char.')
            validRegistration = False
        if userInfo['password'] != userInfo['confirm_password']:
            messages.warning(request, 'Passwords do not match!')
            validRegistration = False
        if User.objects.filter(email = userInfo['email']):
            messages.error(request, "This email already exists in our database.")
            validRegistration = False
        
        now = datetime.datetime.now()
        birthday = datetime.datetime.strptime(userInfo['birthday'], '%Y-%m-%d') 
        if birthday > now:
            messages.error(request, "You can't be born in the future!")
            validRegistration = False
        
        if validRegistration:
            messages.success(request, "Success! Welcome, " + userInfo['first_name'] + "!")
            hashed = bcrypt.hashpw(userInfo['password'].encode(), bcrypt.gensalt())
            User.objects.create(first_name = userInfo['first_name'], last_name = userInfo['last_name'], email = userInfo['email'], password = hashed, birthday=userInfo['birthday'])
            return validRegistration
        else:
            return validRegistration

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length = 45)
    birthday = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()