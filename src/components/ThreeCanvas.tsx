import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    PerspectiveCamera,
    Environment,
    MeshDistortMaterial,
    ContactShadows,
} from '@react-three/drei';
import { MathUtils } from 'three';
function AnimatedSphere({ position = [0, 0, 0], color = '#5686f5' }) {
    const meshRef = useRef(null);
    const rotationSpeed = useRef(Math.random() * 0.01 + 0.005);
    const floatSpeed = useRef(Math.random() * 0.5 + 0.5);
    useFrame(({ clock }) => {
        if (!meshRef.current) return;

        // Rotation
        meshRef.current.rotation.x = clock.getElapsedTime() * rotationSpeed.current;
        meshRef.current.rotation.y =
            clock.getElapsedTime() * rotationSpeed.current * 1.5;

        // Floating animation
        const floatY = Math.sin(clock.getElapsedTime() * floatSpeed.current) * 0.2;
        meshRef.current.position.y = position[1] + floatY;

        // Subtle movement
        const newX = position[0] + Math.sin(clock.getElapsedTime() * 0.3) * 0.3;
        const newZ = position[2] + Math.cos(clock.getElapsedTime() * 0.2) * 0.3;
        meshRef.current.position.x = MathUtils.lerp(
            meshRef.current.position.x,
            newX,
            0.03
        );
        meshRef.current.position.z = MathUtils.lerp(
            meshRef.current.position.z,
            newZ,
            0.03
        );
    });

    return (
        <mesh ref={meshRef} position={position} scale={[1, 1, 1]}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
                color={color}
                envMapIntensity={0.8}
                clearcoat={0.2}
                clearcoatRoughness={0.2}
                metalness={0.1} 
                distort={0.4}
                speed={3}
            />
        </mesh>
    );
}

export default function ThreeCanvas() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 2;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        // Create multiple 3D objects for a more interesting scene
        const cubeGeometry = new THREE.BoxGeometry();
        const cubeMaterial = new THREE.MeshStandardMaterial({
            color: 0x0077ff,
            metalness: 0.3,
            roughness: 0.4,
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.x = -1;
        scene.add(cube);

        // Add a sphere
        const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const sphereMaterial = new THREE.MeshStandardMaterial({
            color: 0xff5500,
            metalness: 0.7,
            roughness: 0.2,
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = 1;
        scene.add(sphere);

        // Enhanced lighting setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        // Add directional light for better shadows and highlights
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Add point light for additional dimension
        const pointLight = new THREE.PointLight(0x00ffff, 1, 10);
        pointLight.position.set(0, 2, 2);
        scene.add(pointLight);

        function animate() {
            requestAnimationFrame(animate);

            // Rotate cube
            cube.rotation.x += 0.005;
            cube.rotation.y += 0.007;

            // Animate sphere with a different pattern
            sphere.rotation.y += 0.01;
            sphere.rotation.z += 0.003;

            // Add subtle floating movement
            const time = Date.now() * 0.001;
            cube.position.y = Math.sin(time) * 0.2;
            sphere.position.y = Math.sin(time * 1.5) * 0.2;

            // Animate point light for dynamic lighting
            pointLight.position.x = Math.sin(time) * 3;
            pointLight.position.z = Math.cos(time) * 3;

            renderer.render(scene, camera);
        }
        animate();
    }, []);

    return (
        <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={50} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                <pointLight
                    position={[-10, -10, -10]}
                    intensity={0.5}
                    color="#ffffff"
                />

                <AnimatedSphere position={[-4, 2, -2]} color="#5686f5" />
                <AnimatedSphere position={[4, -2, -4]} color="#ff5679" />
                <AnimatedSphere position={[0, 0, 0]} color="#7151f3" />
                <AnimatedSphere position={[6, 3, 0]} color="#5686f5" />
                <AnimatedSphere position={[-5, -3, 2]} color="#fecc78" />

                <ContactShadows
                    position={[0, -6, 0]}
                    opacity={0.4}
                    scale={20}
                    blur={1.5}
                    far={10}
                />
                <Environment preset="city" />
            </Canvas>
        </motion.div>
    );
}
