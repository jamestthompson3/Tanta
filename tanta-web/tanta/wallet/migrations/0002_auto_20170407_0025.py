# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-07 00:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wallet', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tantawallet',
            old_name='wallet',
            new_name='balance',
        ),
    ]
