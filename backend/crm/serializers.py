from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from .models import *

class customerserializer(serializers.ModelSerializer):
    class Meta:
            model = customer
            fields = '__all__'
class leadserializer(serializers.ModelSerializer):
    class Meta:
            model = lead
            fields = '__all__'

class contactsserializer(serializers.ModelSerializer):
    class Meta:
            model = contacts
            fields = '__all__'

class marketingserializer(serializers.ModelSerializer):
    class Meta:
            model = marketing
            fields = '__all__'
