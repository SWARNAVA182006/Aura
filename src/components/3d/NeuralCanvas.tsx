"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralNodes({ count = 120 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;

      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  const linePositions = useMemo(() => {
    // Allocation for max potential connections
    return new Float32Array(count * count * 6);
  }, [count]);

  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geom;
  }, [linePositions]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const currentPositions = posAttr.array as Float32Array;

    // Slow subtle rotation
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;

    // Update positions
    for (let i = 0; i < count; i++) {
      currentPositions[i * 3] += velocities[i * 3];
      currentPositions[i * 3 + 1] += velocities[i * 3 + 1];
      currentPositions[i * 3 + 2] += velocities[i * 3 + 2];

      // Bounce bounds
      if (Math.abs(currentPositions[i * 3]) > 7) velocities[i * 3] *= -1;
      if (Math.abs(currentPositions[i * 3 + 1]) > 7) velocities[i * 3 + 1] *= -1;
      if (Math.abs(currentPositions[i * 3 + 2]) > 7) velocities[i * 3 + 2] *= -1;
    }
    posAttr.needsUpdate = true;

    // Recompute line segments for nearby nodes
    let lineIndex = 0;
    const threshold = 2.8;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = currentPositions[i * 3] - currentPositions[j * 3];
        const dy = currentPositions[i * 3 + 1] - currentPositions[j * 3 + 1];
        const dz = currentPositions[i * 3 + 2] - currentPositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < threshold) {
          linePositions[lineIndex++] = currentPositions[i * 3];
          linePositions[lineIndex++] = currentPositions[i * 3 + 1];
          linePositions[lineIndex++] = currentPositions[i * 3 + 2];

          linePositions[lineIndex++] = currentPositions[j * 3];
          linePositions[lineIndex++] = currentPositions[j * 3 + 1];
          linePositions[lineIndex++] = currentPositions[j * 3 + 2];
        }
      }
    }

    if (linesRef.current) {
      linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.rotation.y = pointsRef.current.rotation.y;
      linesRef.current.rotation.x = pointsRef.current.rotation.x;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#00F0FF"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#7000FF"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export function NeuralCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-60">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <NeuralNodes count={100} />
      </Canvas>
    </div>
  );
}
