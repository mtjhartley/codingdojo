from __future__ import unicode_literals
import datetime
from django.db import models

# Create your models here.

class DestinationManager(models.Manager):
    def isValidDestination(self, destinationInfo, user):
        validDestination = True 
        destinationObject = {
            "errors": []
        }
        if len(destinationInfo['place']) == 0:
            destinationObject['errors'].append("Destination can not be empty")
            validDestination = False
        if len(destinationInfo['plan']) == 0:
            destinationObject['errors'].append("Plan can not be empty")
            validDestination = False
        now = datetime.datetime.now()
        try:
            start_date = datetime.datetime.strptime(destinationInfo['start_date'], '%Y-%m-%d')
            if now > start_date:
                destinationObject['errors'].append("You can't start a trip in the past!")
                validDestination = False
        except ValueError:
            destinationObject['errors'].append("You must input a start date!")
            start_date = None
            validDestination = False

        try:
            end_date = datetime.datetime.strptime(destinationInfo['end_date'], '%Y-%m-%d')
            if start_date > end_date:
                destinationObject['errors'].append("Your trip can't end before it starts!")
                validDestination = False
        except ValueError:
            destinationObject['errors'].append("You must input a end date!")
            end_date = None
            validDestination = False
            

        if validDestination:
            new_destination = Destination.objects.create(place=destinationInfo['place'], plan=destinationInfo['plan'], start_date=destinationInfo['start_date'], end_date=destinationInfo['end_date'], creator=user)
            destinationObject['destination'] = new_destination
            #or do i add the user after lol, i can with new_destination.travelers.add(user), for joining
        return destinationObject

class Destination(models.Model):
    place = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    plan = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey('login_registration.user', related_name="planned_trips")
    travelers = models.ManyToManyField('login_registration.User', related_name='destinations')

    objects = DestinationManager()
