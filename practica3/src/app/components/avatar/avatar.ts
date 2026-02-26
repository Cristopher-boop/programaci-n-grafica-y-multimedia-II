import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';

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

  cambiarColor(event: Event){
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }
 cambiarTamano(event: Event){
   const input = event.target as HTMLInputElement;
   this.tamano.set(parseInt(input.value));
 }
 toggleLentes(){
    this.tieneLentes.update(flag => !flag);
 }
 setExpresion(tipo: number){
    this.tipoExpresion.set(tipo);
 }
}
