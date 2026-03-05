import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeBackgroundComponent } from './components/three-background/three-background';
import { LoginCard } from './components/login-card/login-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThreeBackgroundComponent, LoginCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practica4');
}