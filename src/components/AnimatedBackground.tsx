/**
 * Composant AnimatedBackground - Fond animé avec particules Three.js
 * Crée une scène 3D avec un nuage de particules qui tourne continuellement
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 🎯 Récupère le canvas HTML sur lequel Three.js va dessiner
    const canvas = document.createElement('canvas');
    containerRef.current.appendChild(canvas);

    // 🌌 Crée une scène 3D vide (c'est l'environnement principal)
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 🎥 Crée une caméra en perspective : (champ de vision, ratio largeur/hauteur, plan proche, plan lointain)
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    // 🧭 Positionne la caméra sur l'axe Z pour avoir une vue globale de la scène
    camera.position.z = 100;

    // 🖼️ Crée le moteur de rendu WebGL, en le liant au canvas + fond transparent (alpha: true)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    rendererRef.current = renderer;
    // 📐 Définit la taille du rendu = taille de la fenêtre
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 📏 Met à jour la taille du canvas et les propriétés de la caméra si l'utilisateur redimensionne la fenêtre
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 🔺 Crée une géométrie pour les particules (vide au début)
    const geometry = new THREE.BufferGeometry();
    // 📦 Tableau pour stocker les coordonnées des particules
    const vertices = [];
    // 🎯 Nombre total de particules
    const numParticles = 800;

    // 🔁 Génère des coordonnées (x, y, z) aléatoires pour chaque particule
    for (let i = 0; i < numParticles; i++) {
      vertices.push((Math.random() - 0.5) * 400); // x
      vertices.push((Math.random() - 0.5) * 400); // y
      vertices.push((Math.random() - 0.5) * 400); // z
    }

    // 🎯 Attribue les positions à la géométrie sous forme de tableau optimisé (Float32)
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    // 🎨 Définit le style des particules : couleur et taille RÉDUITE
    const material = new THREE.PointsMaterial({ color: 0x00d4ff, size: 1.5 });

    // 🧩 Combine la géométrie et le matériau pour créer un nuage de particules
    const particles = new THREE.Points(geometry, material);
    particlesRef.current = particles;
    // ➕ Ajoute ce nuage à la scène
    scene.add(particles);

    // 🔁 Fonction d'animation appelée à chaque frame (~60 fois par seconde)
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // 🌪️ Fait tourner le nuage de particules sur X et Y lentement
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;

      // 🖌️ Dessine la scène depuis le point de vue de la caméra
      renderer.render(scene, camera);
    };

    // ▶️ Lance l'animation en continu
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current && canvas) {
        containerRef.current.removeChild(canvas);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

export default AnimatedBackground;
