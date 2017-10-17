# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-11 02:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wallet', '0008_auto_20170410_2153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wallet',
            name='dollars',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=9),
        ),
        migrations.AlterField(
            model_name='wallet',
            name='euros',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=9),
        ),
        migrations.AlterField(
            model_name='wallet',
            name='local',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=9),
        ),
        migrations.AlterField(
            model_name='wallet',
            name='pounds',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=9),
        ),
    ]