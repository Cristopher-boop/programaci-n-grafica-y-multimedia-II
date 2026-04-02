// src/app/services/api.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, PaqueteRespuesta } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/datos-externos/'; 

  // Cambiamos el tipo de retorno a PaqueteRespuesta
  getUsers(): Observable<PaqueteRespuesta> {
    return this.http.get<PaqueteRespuesta>(this.apiUrl);
  }
}