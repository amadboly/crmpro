from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *

# Create your views here.
class customerview(viewsets.ModelViewSet):
    queryset = customer.objects.all()
    serializer_class = customerserializer

class leadview(viewsets.ModelViewSet):
    queryset = lead.objects.all()
    serializer_class = leadserializer

class contactsview(viewsets.ModelViewSet):
    queryset = contacts.objects.all()
    serializer_class = contactsserializer

class marketingview(viewsets.ModelViewSet):
    queryset = marketing.objects.all()
    serializer_class = marketingserializer
