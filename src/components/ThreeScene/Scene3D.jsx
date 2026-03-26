import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Scene3D = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const lightsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create dark black gradient background
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#000000');
    gradient.addColorStop(0.5, '#0a0a0a');
    gradient.addColorStop(1, '#050505');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    // Add subtle lightning bolts with dark colors
    const lightningColors = ['#1a1a1a', '#2a2a2a', '#1a1a1a'];
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const color = lightningColors[Math.floor(Math.random() * lightningColors.length)];
      drawLightningBolt(ctx, x, y, Math.random() * 50 + 30, color);
    }

    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;

    // Create particle system for 3D effect
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 200;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.4,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Add subtle white/cyan lights for dark background
    const lightColors = [0xffffff, 0x00ffff, 0x6699ff];
    lightColors.forEach((color, index) => {
      const light = new THREE.PointLight(color, 80, 300);
      light.position.set(
        (index - 1) * 40 + Math.sin(Date.now() * 0.001) * 20,
        Math.cos(Date.now() * 0.001) * 30,
        40
      );
      scene.add(light);
      lightsRef.current.push(light);
    });

    // Handle window resize
    const handleResize = () => {
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;

      // Animate lights
      lightsRef.current.forEach((light, index) => {
        const time = Date.now() * 0.001;
        light.position.x = Math.sin(time + index) * 40;
        light.position.y = Math.cos(time + index * 0.5) * 30;
        light.position.z = 40 + Math.sin(time * 0.5 + index) * 10;
        
        // Subtle pulse effect
        light.intensity = 60 + Math.sin(time * 2 + index) * 25;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />;
};

function drawLightningBolt(ctx, x, y, length, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.shadowColor = color;
  ctx.shadowBlur = 20;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  let currentX = x;
  let currentY = y;

  ctx.beginPath();
  ctx.moveTo(currentX, currentY);

  for (let i = 0; i < length; i++) {
    currentX += (Math.random() - 0.5) * 15;
    currentY += Math.random() * 8;
    ctx.lineTo(currentX, currentY);
  }

  ctx.stroke();

  // Draw a brighter inner glow
  ctx.strokeStyle = 'rgba(255, 200, 255, 0.8)';
  ctx.lineWidth = 1;
  ctx.shadowBlur = 5;
  currentX = x;
  currentY = y;
  ctx.beginPath();
  ctx.moveTo(currentX, currentY);

  for (let i = 0; i < length; i++) {
    currentX += (Math.random() - 0.5) * 15;
    currentY += Math.random() * 8;
    ctx.lineTo(currentX, currentY);
  }

  ctx.stroke();
  ctx.shadowColor = 'transparent';
}

export default Scene3D;
