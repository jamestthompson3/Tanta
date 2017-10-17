from django.db import models

# Create your models here.

#this should be in app "app/models.py"
class UserModel(models.Model):
	name = models.CharField(max_length = 40)
	last_name = models.CharField(max_length = 40)