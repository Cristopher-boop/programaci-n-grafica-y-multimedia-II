import { Component} from '@angular/core';
import { EditorFiltroComponent } from './editor-filtro/editor-filtro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EditorFiltroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
