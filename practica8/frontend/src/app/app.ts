// src/app/app.ts
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api';
import { User } from './models/user.interface';
import { UserCardComponent } from './components/user-card/user-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');
  
  private apiService = inject(ApiService);
  
  users: User[] = [];
  mensajeBackend: string = '';

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next: (paquete) => {
        // ¡ABRIMOS EL PAQUETE!
        this.users = paquete.resultados; 
        this.mensajeBackend = paquete.mensaje;
        console.log('Paquete completo recibido:', paquete);
      },
      error: (err) => {
        console.error('Error al obtener datos', err);
      }
    });
  }
}