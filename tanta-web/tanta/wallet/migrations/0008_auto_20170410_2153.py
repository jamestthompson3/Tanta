# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-10 21:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wallet', '0007_auto_20170408_1917'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wallet',
            name='dollars',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='wallet',
            name='euros',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='wallet',
            name='local',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='wallet',
            name='pounds',
            field=models.FloatField(default=0),
        ),
    ]
