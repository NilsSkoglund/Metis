from django.db import models


class Patient(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True)
    temporary_age = models.IntegerField(null=True)

    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
        ("I", "Intersex"),
        ("X", "Unknown")
    ]

    gender = models.CharField(max_length=1, null=True, choices=GENDER_CHOICES)

    def age(self):
        if self.date_of_birth:
            today = date.today()
            return today.year - self.date_of_birth.year - ((today.month, today.day) < (self.date_of_birth.month, self.date_of_birth.day))
        elif self.temporary_age is not None:
            return self.temporary_age
        else:
            return None
