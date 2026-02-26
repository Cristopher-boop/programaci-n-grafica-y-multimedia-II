import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
  colorFondo = signal<string>('#3498db');
  tamano = signal<number>(150);
  tieneLentes = signal<boolean>(false);
  tipoExpresion = signal<number>(1);
  etiquetaIdentidad = signal<string>('Pibe');
  
  modoRocola = signal<boolean>(false);

  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }

  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamano.set(parseInt(input.value));
  }

  actualizarIdentidad(evento: Event) {
    const elemento = evento.target as HTMLInputElement;
    this.etiquetaIdentidad.set(elemento.value);
  }

  toggleLentes() {
    this.tieneLentes.update(banderica => !banderica);
  }
  
  toggleGiro() {
    this.modoRocola.update(rotoncio => !rotoncio);
  }

  setExpresion(tipo: number) {
    this.tipoExpresion.set(tipo);
  }
}