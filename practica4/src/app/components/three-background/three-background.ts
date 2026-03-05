import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-background',
  standalone: true,
  templateUrl: './three-background.html',
  styleUrl: './three-background.scss'
})
export class ThreeBackgroundComponent implements AfterViewInit, OnDestroy {
  // Atrapa el div del HTML
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;
  private animationId!: number;

  ngAfterViewInit(): void {
    this.initThreeJs();
    this.animate();
  }

  private initThreeJs(): void {
    // 1. Escena
    this.scene = new THREE.Scene();

    // 2. Cámara
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // 3. Renderizador
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // 4. Crear el entorno 360
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    // Invertimos la geometría en el eje X para que la imagen se vea por dentro
    geometry.scale(-1, 1, 1); 

    // Cargamos la textura (Asegúrate de poner el nombre correcto de tu imagen)
    const textureLoader = new THREE.TextureLoader();
    // Si la pusiste en la carpeta public, la ruta empieza con '/'
    const texture = textureLoader.load('/fondo-360.jpg'); 

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    this.scene.add(sphere);

    // Ajustar si el usuario cambia el tamaño de la ventana
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    // Rotación constante
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  ngOnDestroy(): void {
    // Limpieza al cambiar de componente
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    cancelAnimationFrame(this.animationId);
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
