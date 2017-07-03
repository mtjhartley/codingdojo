from __future__ import unicode_literals
from django.core.validators import MinValueValidator
from django.db import models


# Create your models here.


class ProductManager(models.Manager):
    def isValidProduct(self, productInfo, user):
        validProduct = True
        productObject = {
            "errors": []
        }
        if len(productInfo['name']) < 2:
            productObject['errors'].append("Product name can not be less than 2 characters.")
            validProduct = False
        if len(productInfo['description']) < 1:
            productObject['errors'].append("Product description can not be blank.")
            validProduct = False
        if productInfo['price'] < 0.01 or not productInfo['price']:
            productObject['errors'].append("Product must cost at least 1 penny and be in XX.XX format")
            validProduct = False
        if validProduct:
            new_product = Product.objects.create(name=productInfo['name'], description=productInfo['description'], price=productInfo['price'], user=user)
            productObject['product'] = new_product
        return productObject
    def updateValidProduct(self, productInfo, product_id):
        validUpdate = True
        productObject = {
            "errors": []
        }
        if len(productInfo['name']) < 2:
            productObject['errors'].append("Product name can not be less than 2 characters.")
            validUpdate = False
        if len(productInfo['description']) < 1:
            productObject['errors'].append("Product description can not be blank.")
            validUpdate = False
        if productInfo['price'] < 0.01 or not productInfo['price']:
            productObject['errors'].append("Product must cost at least 1 penny and be in XX.XX format")
            validUpdate = False
        if validUpdate:
            product = Product.objects.filter(id=product_id).update(name=productInfo['name'], description=productInfo['description'], price=productInfo['price'])
            product = Product.objects.get(id=product_id)
            productObject['product'] = product
        return productObject

            

        
        
    

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    price = models.FloatField(validators=[MinValueValidator(0.01)])
    user = models.ForeignKey('login_registration.User', related_name='products')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = ProductManager()
