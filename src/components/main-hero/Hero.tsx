"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import MissionSection from "./mission/Mission";
import TimelineSection from "./ourhistory/History";

// --- Three.js Animation Component ---
// This component contains only the WebGL background animation logic.
const HeroAnimation = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mountRef.current || typeof window === 'undefined') return;
        const container = mountRef.current;

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        let animationFrameId: number;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 12;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.5, 0.8);
        composer.addPass(bloomPass);

        const mouse = new THREE.Vector2(-10, -10);

        let imagePlane: THREE.Mesh;
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
          'https://raw.githubusercontent.com/KIIT-IOT-LAB/iot-lab-website-24/main/public/images/iot_lab.png',
          (texture) => {
            const imageGeometry = new THREE.PlaneGeometry(8, 4.5);
            const imageMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.9 });
            imagePlane = new THREE.Mesh(imageGeometry, imageMaterial);
            scene.add(imagePlane);
          }
        );

        const createCircleTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64; canvas.height = 64;
            const context = canvas.getContext('2d');
            if (!context) return null;
            context.beginPath();
            context.arc(32, 32, 30, 0, 2 * Math.PI);
            context.fillStyle = 'white';
            context.fill();
            return new THREE.CanvasTexture(canvas);
        };
        const circleTexture = createCircleTexture();

        const particleCount = 10000;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 6 + Math.random() * 20;
            positions.set([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)], i * 3);
        }
        
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x00aaff, size: 0.08, map: circleTexture,
            transparent: true, blending: THREE.AdditiveBlending, alphaTest: 0.1
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        const handleResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
            composer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        document.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (imagePlane) imagePlane.rotation.y += 0.0005;

            const targetRotationX = -mouse.y * 0.1;
            const targetRotationY = mouse.x * 0.1;
            particles.rotation.x += (targetRotationX - particles.rotation.x) * 0.02;
            particles.rotation.y += (targetRotationY - particles.rotation.y) * 0.02;
            particles.rotation.z += 0.0001;

            camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
            camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
            camera.lookAt(scene.position);
            
            composer.render();
        };
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            if (container && renderer.domElement) container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

// --- Main Hero Section Component ---
const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: '#0B1D64' }}>
            <HeroAnimation />
            <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                <div className="text-white max-w-4xl">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                        Welcome to
                        <span className="block text-7xl lg:text-8xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text mt-2">
                            IoT Lab
                        </span>
                    </h1>
                </div>
            </div>
            {/* This div creates the smooth fade-out effect at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0B1D64] to-transparent z-[5]"></div>
        </section>
    );
};


// --- Final Page Component ---
const HomePage = () => {
  return (
    <main>
      <Hero />
      <MissionSection />
      <TimelineSection />
    </main>
  );
};

export default HomePage;

