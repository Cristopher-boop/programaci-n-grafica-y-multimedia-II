import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
  brillo = signal(100);
  contraste = signal(100);
  blur = signal(0);
  
  Vintage = signal(false);

  filtroScss = computed(() => {
    const vintageEfecto = this.Vintage() ? 'grayscale(100%)' : '';
    return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px) ${vintageEfecto}`;
  })

  actualizar(prop: string, evento: Event) {
    const valor = (evento.target as HTMLInputElement).value;
    if (prop === 'brillo') this.brillo.set(+valor);
    if (prop === 'contraste') this.contraste.set(+valor);
    if (prop === 'blur') this.blur.set(+valor);
  }

  cambioVintage() {
    this.Vintage.update(valor => !valor);
  }
}