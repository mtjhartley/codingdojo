# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-06-21 19:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('secrets', '0004_auto_20170621_1816'),
    ]

    operations = [
        migrations.AlterField(
            model_name='secret',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='secrets', to='login_registration.User'),
        ),
        migrations.AlterField(
            model_name='secret',
            name='like',
            field=models.ManyToManyField(related_name='likes', to='login_registration.User'),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
