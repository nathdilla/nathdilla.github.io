import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import globeTexture from '../../images/globe-texture.jpeg';
import cloudTexture from '../../images/atmosphere-globe.png'; // Import the cloud texture

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

    // Create a sphere geometry for the globe
    const globeGeometry = new THREE.SphereGeometry(15, 32, 32); // Increased size from 1 to 2

    // Load the texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(globeTexture);

    // Create a material with the texture
    const globeMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });

    // Create a mesh with the geometry and material
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);

    // Move the globe lower
    globe.position.y = -10;
    globe.position.z = -13;

    // Reorient the globe to face 90 degrees counterclockwise
    globe.rotation.z = Math.PI / 2; // Rotate by 90 degrees

    // Add the globe to the scene
    scene.add(globe);

    // Create a sphere geometry for the clouds
    const cloudGeometry = new THREE.SphereGeometry(15.1, 32, 32); // Slightly larger radius

    // Load the cloud texture
    const cloudTextureMap = textureLoader.load(cloudTexture);

    // Create a material for the clouds
    const cloudMaterial = new THREE.MeshBasicMaterial({
      map: cloudTextureMap,
      transparent: true, // Ensure the clouds are transparent
      opacity: 0.5, // Set the opacity of the clouds
    });

    // Create a mesh for the clouds
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);

    // Move the clouds lower
    clouds.position.y = -10;
    clouds.position.z = -13;

    // Add the clouds to the scene
    scene.add(clouds);

    // Add a light source
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, -10, -15).normalize();
    // scene.add(directionalLight);

    // Animation loop for the globe and clouds
    const animateGlobe = () => {
      requestAnimationFrame(animateGlobe);

      // Rotate the globe
      globe.rotation.x += 0.0005;

      // Rotate the clouds
      clouds.rotation.x += 0.0003;

      renderer.render(scene, camera);
    };

    animateGlobe();

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