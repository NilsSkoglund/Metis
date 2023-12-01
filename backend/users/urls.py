from django.urls import path
from . import views

app_name = "users"
urlpatterns = [
    path("register/", views.UserCreate.as_view(), name="register"),
]