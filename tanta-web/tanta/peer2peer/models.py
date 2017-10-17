from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class Borrow(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	lender = models.CharField(max_length=200)
	interest_rate = models.DecimalField(default=0,decimal_places=2,max_digits=5)
	amount_remaining = models.DecimalField(default=0,decimal_places=2,max_digits=9)
	start_date = models.DateTimeField(default=timezone.now)
	next_payment_due = models.DateTimeField(default=timezone.now)
	last_payment_made = models.DateTimeField(default=timezone.now)
	loan_length = models.IntegerField()
	time_remaining = models.DateTimeField(default=timezone.now)
	initial_amount = models.DecimalField(default=0,decimal_places=2,max_digits=9)

	def __str__(self):
		return str(self.user)

class Lend(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	borrower = models.CharField(max_length=200)
	interest_rate = models.DecimalField(default=0,decimal_places=2,max_digits=5)
	amount_remaining = models.DecimalField(default=0,decimal_places=2,max_digits=9)
	start_date = models.DateTimeField(default=timezone.now)
	next_payment_due = models.DateTimeField(default=timezone.now)
	last_payment_made = models.DateTimeField(default=timezone.now)
	loan_length = models.IntegerField()
	time_remaining = models.DateTimeField(default=timezone.now)
	initial_amount = models.DecimalField(default=0,decimal_places=2,max_digits=9)

	def __str__(self):
		return str(self.user)