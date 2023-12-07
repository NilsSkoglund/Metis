from rest_framework import serializers
from .models import Patient


class PatientSerializer(serializers.ModelSerializer):
    age = serializers.IntegerField(read_only=True)

    class Meta:
        model = Patient
        fields = ["id", "first_name", "middle_name", "last_name", "age", "_age", "gender", "created_at", "modified_at",
                  "date_of_birth"]
