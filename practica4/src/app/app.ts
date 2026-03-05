import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeBackgroundComponent } from './components/three-background/three-background'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThreeBackgroundComponent], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practica4');
}