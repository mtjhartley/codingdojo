from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    published_date = models.DateField(auto_now_add=True)
    category = models.CharField(max_length=255)
    #adding new field in_print, lets see how the migrations and stuff work out!
    in_print = models.BooleanField()
    in_audio = models.BooleanField(default=False)

#shell commands
#book1 = Book.objects.create(title="Harry Potter 1", author="J.K. Rowling", category="Fantasy")
#book2 = Book.objects.create(title="Harry Potter 2", author="J.K. Rowling", category="Fantasy")
#book3 = Book.objects.create(title="Hunger Games 1", author="Suzanne Collins", category="Young Adult")
#book4 = Book.objects.create(title="Fahrenheit 451", author="Ray Bradbury", category="Dystopian Future")
#book5 = Book.objects.create(title="Noctis + Luna", author="Tabata", category="Fantasy")




