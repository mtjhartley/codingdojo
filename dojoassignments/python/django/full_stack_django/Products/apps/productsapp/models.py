from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=45)
    description = models.TextField()
    weight = models.FloatField()
    price = models.FloatField()
    cost = models.FloatField()
    category = models.CharField(max_length=45)

#product = Product.objects.create(name="Tennis Racket", description="Good for hitting balls", weight=12.1, price= 19.99, cost=9.99, category="Sports")