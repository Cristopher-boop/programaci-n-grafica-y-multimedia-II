import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-login-card',
  standalone: true,
  templateUrl: './login-card.html',
  styleUrl: './login-card.scss'
})
export class LoginCard implements AfterViewInit, OnDestroy {
  @ViewChild('loginCanvas', { static: true }) loginCanvas!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationId!: number;

  // Variables para nuestros bloques 3D
  private userBlock!: THREE.Mesh;
  private passBlock!: THREE.Mesh;
  private btnBlock!: THREE.Mesh;

  ngAfterViewInit(): void {
    this.initThreeJs();
    this.animate();
  }

  private initThreeJs(): void {
    this.scene = new THREE.Scene();

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Cámara frontal para mirar los bloques
    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    this.camera.position.z = 10; // Nos alejamos para ver los bloques enteros

    // Renderizador con ALPHA TRUE (Fondo transparente)
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.loginCanvas.nativeElement.appendChild(this.renderer.domElement);

    // --- LUCES --- (Necesarias para que el material físico se vea bien)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    this.scene.add(directionalLight);

    // --- MATERIAL DE LOS BLOQUES --- (Estilo cristal oscuro / elegante)
    const blockMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x222222,
      metalness: 0.5,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
      reflectivity: 1,
    });

    // --- BLOQUE 1: USUARIO ---
    const inputGeometry = new THREE.BoxGeometry(5, 1, 0.5); // Ancho, alto, profundidad
    this.userBlock = new THREE.Mesh(inputGeometry, blockMaterial);
    this.userBlock.position.set(0, 2, 0); // Posición (Arriba)
    this.scene.add(this.userBlock);

    // --- BLOQUE 2: CONTRASEÑA ---
    this.passBlock = new THREE.Mesh(inputGeometry, blockMaterial);
    this.passBlock.position.set(0, 0, 0); // Posición (Centro)
    this.scene.add(this.passBlock);

    // --- BLOQUE 3: BOTÓN DE ENTRAR ---
    const btnGeometry = new THREE.BoxGeometry(2.5, 1, 0.5); // Más corto
    // Le damos un color ligeramente distinto (ej. un tono azulado oscuro) para destacar
    const btnMaterial = blockMaterial.clone();
    btnMaterial.color.setHex(0x004488); 
    
    this.btnBlock = new THREE.Mesh(btnGeometry, btnMaterial);
    this.btnBlock.position.set(0, -2, 0); // Posición (Abajo)
    this.scene.add(this.btnBlock);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    // --- EFECTO FLOTANTE ---
    const time = Date.now() * 0.002;
    
    // Movimiento suave arriba y abajo (Math.sin)
    this.userBlock.position.y = 2 + Math.sin(time) * 0.1;
    this.passBlock.position.y = 0 + Math.sin(time + 1) * 0.1; // Desfasado para que se vea natural
    this.btnBlock.position.y = -2 + Math.sin(time + 2) * 0.1;

    // Pequeña rotación en el eje X para dar volumen
    this.userBlock.rotation.x = Math.sin(time * 0.5) * 0.05;
    this.passBlock.rotation.x = Math.sin((time + 1) * 0.5) * 0.05;
    this.btnBlock.rotation.x = Math.sin((time + 2) * 0.5) * 0.05;

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
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}