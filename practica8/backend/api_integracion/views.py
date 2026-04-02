# api_integracion/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services import ExternalAPIService

class IntegracionAPIView(APIView):
    def get(self, request):
        data, error = ExternalAPIService.fetch_data()
        
        if error:
            return Response({"error": "No se pudo conectar", "detalle": error}, status=status.HTTP_503_SERVICE_UNAVAILABLE)
        
        paquete = {
            "mensaje": "Datos recuperados y empaquetados exitosamente por Django",
            "origen": "API Externa",
            "cantidad_registros": len(data) if data else 0,
            "resultados": data  
        }
        
        return Response(paquete, status=status.HTTP_200_OK)