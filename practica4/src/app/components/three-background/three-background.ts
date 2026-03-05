import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

@Component({
  selector: 'app-three-background',
  standalone: true,
  templateUrl: './three-background.html',
  styleUrl: './three-background.scss'
})
export class ThreeBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private sphere!: THREE.Mesh;
  private controls!: OrbitControls; // 1. Nueva variable para los controles
  private animationId!: number;

  ngAfterViewInit(): void {
    this.initThreeJs();
    this.animate();
  }

  private initThreeJs(): void {
    this.scene = new THREE.Scene();

    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 0.1);

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // 2. Inicializamos los controles (Conectan la cámara con el canvas)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false; // Desactivamos el zoom para no salirnos de la esfera
    this.controls.enablePan = false;  // Desactivamos el paneo para mantenernos en el centro

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); 

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/fondo-360.jpg'); 

    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.sphere = new THREE.Mesh(geometry, material); 
    this.scene.add(this.sphere);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    // 3. Actualizamos los controles en cada frame (y quitamos la rotación automática)
    this.controls.update();

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
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    cancelAnimationFrame(this.animationId);
    if (this.controls) {
      this.controls.dispose(); // Limpiamos los controles de la memoria
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}