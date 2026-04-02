# api_integracion/services.py
import requests

class ExternalAPIService:
    BASE_URL = "https://jsonplaceholder.typicode.com/users" 

    @staticmethod
    def fetch_data():
        try:
            response = requests.get(ExternalAPIService.BASE_URL)
            response.raise_for_status() 
            return response.json(), None
        except requests.RequestException as e:
            return None, str(e)