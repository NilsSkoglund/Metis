from django.urls import path
from . import views


app_name = 'patients'
urlpatterns = [
    path('', views.PatientListCreateView.as_view(), name='patient_list_create'),
    path('<int:pk>', views.PatientRetrieveUpdateDestroyView.as_view(), name='patient_retrieve_update_destroy')
]