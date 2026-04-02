# api_integracion/urls.py
from django.urls import path
from .views import IntegracionAPIView

urlpatterns = [
    path('datos-externos/', IntegracionAPIView.as_view(), name='datos_externos'),
] 