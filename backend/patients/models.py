from django.db import models
from datetime import date
from dateutil.relativedelta import relativedelta


class Patient(models.Model):
    first_name = models.CharField(max_length=100) # Minimum requirement for creating a patient object
    middle_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    _age = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def age(self):
        """ Calculates and return the current age best on available information. """
        if self.date_of_birth:
            # TODO: Refactor the age calculation lines to a separate method
            today = date.today()
            return today.year - self.date_of_birth.year - (
                    (today.month, today.day) < (self.date_of_birth.month, self.date_of_birth.day))
        elif self._age is not None:
            # Age calculation based on created_at and manually set _age
            # Implementation allows for incrementation of age over time
            # TODO: Should I indicate if the age is "EXACT" or "Approximated" based on created_at
            reference_date = self.created_at.date() + relativedelta(years=self._age)
            today = date.today()
            return today.year - reference_date.year - (
                    (today.month, today.day) < (reference_date.month, reference_date.day))
        return self._age

    @age.setter
    def age(self, value):
        """ Set the _age field to a manually provided value """
        self._age = value

    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
        ("I", "Intersex"),
        ("X", "Unknown")
    ]

    gender = models.CharField(max_length=1, null=True, choices=GENDER_CHOICES)

    def save(self, *args, **kwargs):
        # Calculate age from date_of_birth if it's available and if age isn't explicitly set
        if self.date_of_birth:
            today = date.today()
            calculated_age = today.year - self.date_of_birth.year - (
                (today.month, today.day) < (self.date_of_birth.month, self.date_of_birth.day))
            self.age = calculated_age
        super(Patient, self).save(*args, **kwargs)
