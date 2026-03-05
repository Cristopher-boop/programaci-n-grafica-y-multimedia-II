import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Importa tu nuevo componente (ajusta la ruta si es necesario)
import { ThreeBackgroundComponent } from './components/three-background/three-background'; 

@Component({
  selector: 'app-root',
  // 2. Agrégalo al array de imports junto a RouterOutlet
  imports: [RouterOutlet, ThreeBackgroundComponent], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practica4');
}