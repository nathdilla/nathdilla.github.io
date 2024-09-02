import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const ThreeScene = () => {
  const mountRef = useRef(null);
  const startTimeRef = useRef(Date.now()); // Track the start time

  useEffect(() => {
    // Create the scene
    const scene = new THREE.Scene();

    // Set the background color
    scene.background = new THREE.Color(0x121212); // Black background

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Apply styles to make it a background
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    renderer.domElement.style.left = 0;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '-1'; // Make sure it's behind other content

    // Append the renderer to the DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    } else {
      console.error("mountRef.current is null");
    }

    // Load the GLB model
    const loader = new GLTFLoader();
    loader.load('/objects/nathanshead.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Color and intensity
scene.add(ambientLight);

      // Optionally, adjust the model's position or scale
      model.position.set(0, 0, 0);
      model.scale.set(1.5, 1.5, 1.5);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Calculate elapsed time
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000; // Time in seconds

        // Update rotation
        const frequency = 0.5; // How fast the oscillation happens
        const amplitude = Math.PI / 6; // Maximum rotation angle (in radians)
        model.rotation.y = Math.sin(elapsedTime * frequency) * amplitude;

        renderer.render(scene, camera);
      };

      animate();
    }, undefined, (error) => {
      console.error('An error occurred while loading the model:', error);
    });

    // Handle window resizing
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;