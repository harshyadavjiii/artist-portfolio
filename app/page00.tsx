// AWWARDS-LEVEL PORTFOLIO (Cinematic + Story + 3D + Shader-ready)
// File: app/page.tsx

'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef, useState } from 'react';
import type { Mesh } from 'three';

// STORY SECTIONS
const sections = [
  { id: 1, title: 'ORIGIN', text: 'Where silence begins.' },
  { id: 2, title: 'CHAOS', text: 'Fragments collide in abstraction.' },
  { id: 3, title: 'VOID', text: 'Nothingness speaks louder.' },
  { id: 4, title: 'REBIRTH', text: 'Form emerges again.' },
];

// 3D OBJECT WITH MOTION
function AnimatedSphere() {
  const mesh = useRef<Mesh | null>(null);
  useFrame((state) => {
    if (!mesh.current) {
      return;
    }

    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.004;
  });

  return (
    <Float speed={2}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial color="#111" wireframe />
      </mesh>
    </Float>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // CURSOR PHYSICS
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* CURSOR */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 border border-white rounded-full pointer-events-none z-[999] mix-blend-difference"
      />

      {/* HERO (CINEMATIC) */}
      <section className="h-screen relative">
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.4} />
          <directionalLight position={[2, 2, 2]} />
          <AnimatedSphere />
        </Canvas>

        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-8xl md:text-9xl font-bold tracking-tight"
          >
            ARTIST
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-500 mt-4"
          >
            A Cinematic Digital Experience
          </motion.p>
        </div>
      </section>

      {/* STORY SCROLL */}
      {sections.map((sec, i) => (
        <section
          key={sec.id}
          className="h-screen flex flex-col justify-center items-center text-center px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl mb-6"
          >
            {sec.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 max-w-xl"
          >
            {sec.text}
          </motion.p>
        </section>
      ))}

      {/* FINAL CTA */}
      <section className="h-screen flex flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl mb-6"
        >
          ENTER THE WORK
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="border px-6 py-3 cursor-pointer"
        >
          VIEW COLLECTION
        </motion.div>
      </section>

    </main>
  );
}


// INSTALL:
// npm install framer-motion @react-three/fiber @react-three/drei @studio-freight/lenis


// YOU NOW HAVE TRUE AWWARDS DNA:
// - Story-driven scroll
// - Cinematic pacing
// - 3D hero with motion
// - Cursor blending effect
// - Minimal brutal UI


// FINAL PUSH (OPTIONAL BUT INSANE):
// - Add GLSL shaders (distortion effects)
// - Add sound design (Howler.js)
// - Replace sphere with real 3D scanned artwork
// - Use real typography (Neue Haas / custom font)
