from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    hsaid = models.CharField(max_length=4, unique=True, blank=True, null=True)
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)

    TITLE_CHOICES = [
        ("1", "Chief Medical Officer"),
        ("2", "Senior Consultant"),
        ("3", "Specialist Physician"),
        ("4", "Specialist Registrar"),
        ("5", "Licensed Physician"),
        ("6", "Internship Doctor"),
        ("7", "Junior Doctor Before Internship"),
        ("8", "Medical Student"),
        ("0", "Undefined")
    ]

    title = models.CharField(max_length=2, choices=TITLE_CHOICES, default="0")
    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

