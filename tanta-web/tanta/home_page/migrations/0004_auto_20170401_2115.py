# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-01 21:15
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home_page', '0003_auto_20170401_0014'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='email',
        ),
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='portfolio_site',
        ),
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='username',
        ),
    ]