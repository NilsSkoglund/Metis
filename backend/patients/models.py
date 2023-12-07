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
    modified_at = models.DateTimeField(auto_now=True)

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
            # TODO: Implementation allows for incrementation of age over time
            return self._age
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
        if self.date_of_birth is None and self._age is not None:
            # If _age is provided but date_of_birth is not, set age directly
            self.age = self._age
        # Calculate age from date_of_birth if it's available and if age isn't explicitly set
        elif self.date_of_birth:
            today = date.today()
            calculated_age = today.year - self.date_of_birth.year - (
                (today.month, today.day) < (self.date_of_birth.month, self.date_of_birth.day))
            self.age = calculated_age
        super(Patient, self).save(*args, **kwargs)
