"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThemeColors {
  sky: number;
  ground: number;
  character: number;
  light: number;
  shadow: number;
}

const lightThemeColors: ThemeColors = {
  sky: 0xd4b896,
  ground: 0x8b7355,
  character: 0xf5deb3,
  light: 0xffffff,
  shadow: 0x888888,
};

const darkThemeColors: ThemeColors = {
  sky: 0x1a1410,
  ground: 0x4a3728,
  character: 0xd4a574,
  light: 0xccaa88,
  shadow: 0x1a1410,
};

export default function Agronomist3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const characterRef = useRef<THREE.Group | null>(null);
  const lightRef = useRef<THREE.Light | null>(null);
  const skyRef = useRef<THREE.Mesh | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);

  // Detect theme on mount
  useEffect(() => {
    setMounted(true);
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDarkMode(theme === "dark");
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current || !mounted) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);
    lightRef.current = directionalLight;

    // Sky
    const skyGeometry = new THREE.SphereGeometry(100, 32, 32);
    const colors = isDarkMode ? darkThemeColors : lightThemeColors;
    const skyMaterial = new THREE.MeshBasicMaterial({
      color: colors.sky,
      side: THREE.BackSide,
    });
    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(sky);
    skyRef.current = sky;

    // Ground/Farm
    const groundGeometry = new THREE.PlaneGeometry(20, 15);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: colors.ground,
      roughness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create female agronomist character
    const character = new THREE.Group();
    character.castShadow = true;

    // Head
    const headGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const skinMaterial = new THREE.MeshStandardMaterial({
      color: colors.character,
      roughness: 0.3,
    });
    const head = new THREE.Mesh(headGeometry, skinMaterial);
    head.position.y = 1.8;
    head.castShadow = true;
    character.add(head);

    // Hair
    const hairGeometry = new THREE.SphereGeometry(0.45, 32, 32);
    const hairMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.5,
    });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.y = 1.9;
    hair.scale.y = 1.2;
    hair.castShadow = true;
    character.add(hair);

    // Body
    const bodyGeometry = new THREE.CapsuleGeometry(0.35, 1.2, 4, 8);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b4513,
      roughness: 0.4,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.8;
    body.castShadow = true;
    character.add(body);

    // Arms
    const armGeometry = new THREE.CapsuleGeometry(0.15, 0.9, 4, 8);
    const armMaterial = new THREE.MeshStandardMaterial({
      color: colors.character,
      roughness: 0.3,
    });

    const armLeft = new THREE.Mesh(armGeometry, armMaterial);
    armLeft.position.set(-0.6, 1.2, 0);
    armLeft.rotation.z = Math.PI / 6;
    armLeft.castShadow = true;
    character.add(armLeft);

    const armRight = new THREE.Mesh(armGeometry, armMaterial);
    armRight.position.set(0.6, 1.2, 0);
    armRight.rotation.z = -Math.PI / 5;
    armRight.castShadow = true;
    character.add(armRight);

    // Legs
    const legGeometry = new THREE.CapsuleGeometry(0.15, 1, 4, 8);
    const legMaterial = new THREE.MeshStandardMaterial({
      color: 0x3a2a1a,
      roughness: 0.4,
    });

    const legLeft = new THREE.Mesh(legGeometry, legMaterial);
    legLeft.position.set(-0.3, -0.5, 0);
    legLeft.castShadow = true;
    character.add(legLeft);

    const legRight = new THREE.Mesh(legGeometry, legMaterial);
    legRight.position.set(0.3, -0.5, 0);
    legRight.castShadow = true;
    character.add(legRight);

    // Work tool (farming tool)
    const toolGeometry = new THREE.CylinderGeometry(0.08, 0.08, 2, 16);
    const toolMaterial = new THREE.MeshStandardMaterial({
      color: 0xd2b48c,
      roughness: 0.6,
    });
    const tool = new THREE.Mesh(toolGeometry, toolMaterial);
    tool.position.set(0.4, 0.5, 0.2);
    tool.rotation.z = Math.PI / 3;
    tool.castShadow = true;
    character.add(tool);

    // Tool head
    const toolHeadGeometry = new THREE.BoxGeometry(0.4, 0.3, 0.1);
    const toolHeadMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b7355,
      roughness: 0.5,
    });
    const toolHead = new THREE.Mesh(toolHeadGeometry, toolHeadMaterial);
    toolHead.position.set(0.5, 1.3, 0.2);
    toolHead.castShadow = true;
    character.add(toolHead);

    // Bent posture (bowing forward to work)
    character.rotation.z = 0.3;
    character.position.y = -0.5;

    characterRef.current = character;
    scene.add(character);

    // Create plants/crops around
    for (let i = 0; i < 8; i++) {
      const plantGeometry = new THREE.ConeGeometry(0.3, 0.8, 8);
      const plantMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a7c3a,
        roughness: 0.5,
      });
      const plant = new THREE.Mesh(plantGeometry, plantMaterial);
      const angle = (i / 8) * Math.PI * 2;
      plant.position.set(
        Math.cos(angle) * 3,
        -1.8,
        Math.sin(angle) * 3 + 1
      );
      plant.castShadow = true;
      scene.add(plant);
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.current = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY.current = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotationY.current = mouseX.current * Math.PI * 0.5;
      targetRotationX.current = mouseY.current * Math.PI * 0.3;
    };

    // Animation loop with day/night cycle
    let frameCount = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frameCount++;

      // Update day/night cycle (smooth transition)
      const cycle = (frameCount % 600) / 600; // 600 frames = 1 full cycle

      // Smooth rotation towards mouse position
      if (character) {
        character.rotation.y +=
          (targetRotationY.current - character.rotation.y) * 0.05;
        character.rotation.x +=
          (targetRotationX.current - character.rotation.x) * 0.05;
      }

      // Update lighting based on time of day
      if (directionalLight && sky) {
        const isDaylight = cycle > 0.25 && cycle < 0.75;

        if (isDaylight) {
          const dayProgress = (cycle - 0.25) / 0.5;
          const brightness = Math.cos(dayProgress * Math.PI) * 0.5 + 0.8;
          directionalLight.intensity = brightness;
          (sky.material as THREE.MeshBasicMaterial).color.copy(
            new THREE.Color(colors.sky)
          );
        } else {
          directionalLight.intensity = 0.3;
          (sky.material as THREE.MeshBasicMaterial).color.copy(
            new THREE.Color(isDarkMode ? 0x0a0805 : 0x2a2420)
          );
        }
      }

      renderer.render(scene, camera);
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
    }
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      (camera as THREE.PerspectiveCamera).aspect = width / height;
      (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [mounted, isDarkMode]);

  if (!mounted) {
    return (
      <div
        className="avatar-card group rounded-[1.75rem] p-6 shadow-inner"
        style={{
          overflow: "hidden",
          height: "22rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p className="text-sm text-muted-text">Loading 3D model...</p>
      </div>
    );
  }

  return (
    <div
      className="avatar-card group rounded-[1.75rem] p-6 shadow-inner"
      style={{ overflow: "hidden" }}
    >
      <p className="avatar-label text-xs uppercase tracking-[0.3em]">
        Agronomist AR 3D
      </p>
      <div className="avatar-stage mt-6" style={{ position: "relative" }}>
        <div
          className="canvas-frame"
          style={{
            position: "relative",
            width: "100%",
            height: "22rem",
            overflow: "hidden",
          }}
        >
          <div
            ref={containerRef}
            style={{
              width: "100%",
              height: "100%",
              cursor: "grab",
            }}
          />
        </div>
      </div>
      <p className="avatar-copy mt-6 max-w-md text-sm leading-6">
        An interactive 3D female agronomist working the farm. Use your mouse to
        explore from different angles. Watch as the day transitions to night,
        and colors adapt to your theme.
      </p>
    </div>
  );
}
