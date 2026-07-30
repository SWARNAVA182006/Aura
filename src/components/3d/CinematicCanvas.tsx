"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  chapterIndex: number;
}

function FloatingUniverse({ chapterIndex }: { chapterIndex: number }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 160;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;

      // Cyan / Purple / White palette
      const r = Math.random() > 0.5 ? 0 : 0.6;
      const g = 0.9;
      const b = 1.0;

      col[i * 3] = r;
      col[i * 3 + 1] = g;
      col[i * 3 + 2] = b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();

    // Chapter-dependent camera rotation & tilt speeds
    const speedMultiplier = 0.03 + chapterIndex * 0.015;
    pointsRef.current.rotation.y = time * speedMultiplier;
    pointsRef.current.rotation.x = Math.sin(time * 0.05) * (0.1 + chapterIndex * 0.05);

    // Scale shifts per chapter
    const targetScale = 1 + (chapterIndex % 3) * 0.15;
    pointsRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export function CinematicCanvas({ chapterIndex }: SceneProps) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-50 transition-opacity duration-1000">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <FloatingUniverse chapterIndex={chapterIndex} />
      </Canvas>
    </div>
  );
}
