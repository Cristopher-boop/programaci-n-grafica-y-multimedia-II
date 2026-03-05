import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginCard } from './components/login-card/login-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practica4');
}
