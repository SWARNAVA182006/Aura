"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─────────────────────────────────────────────────────────────────────────────
// Per-chapter palette: gradient color nodes
// Each chapter has a "from" and "to" color for the mesh gradient nodes
// ─────────────────────────────────────────────────────────────────────────────
const CHAPTER_PALETTES = [
  // 0: Architect — deep cyan/indigo
  { a: "#020818", b: "#001a2e", c: "#000d1a", accent: "#00f0ff", accent2: "#7000ff" },
  // 1: Artifacts — shifts per project, falls back to emerald
  { a: "#02100a", b: "#001a12", c: "#000d08", accent: "#00e599", accent2: "#00f0ff" },
  // 2: Expedition — indigo/violet deep
  { a: "#080518", b: "#0f0a28", c: "#050310", accent: "#818cf8", accent2: "#c084fc" },
  // 3: Journal — rose/purple
  { a: "#120510", b: "#1a0818", c: "#0a030e", accent: "#f472b6", accent2: "#818cf8" },
  // 4: Transmission — violet/magenta
  { a: "#0a0512", b: "#180820", c: "#0d040f", accent: "#a855f7", accent2: "#ec4899" },
];

const PROJECT_PALETTES: Record<string, { accent: string; accent2: string; bg: string }> = {
  "seisvision-ai":      { accent: "#00e599", accent2: "#00f0ff", bg: "#001a12" },
  "hpcc-copilot":       { accent: "#00f0ff", accent2: "#7000ff", bg: "#000d1a" },
  "performpro":         { accent: "#818cf8", accent2: "#38bdf8", bg: "#0a0616" },
  "forestnet":          { accent: "#ff2a6d", accent2: "#05d5e8", bg: "#1a000d" },
  "smart-irrigation":   { accent: "#10b981", accent2: "#3b82f6", bg: "#001a0d" },
  "autism-detection-ai":{ accent: "#a855f7", accent2: "#ec4899", bg: "#0f0018" },
  "guidewire-devtrails":{ accent: "#2563eb", accent2: "#06b6d4", bg: "#000d1a" },
};

// ─────────────────────────────────────────────────────────────────────────────
// Vertex shader — displaces a subdivided plane to create organic breathing mesh
// ─────────────────────────────────────────────────────────────────────────────
const VERTEX_SHADER = `
  uniform float uTime;
  uniform float uStrength;
  varying vec2 vUv;
  varying float vElevation;

  // Classic 2D noise (Simplex-ish)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                    + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                             dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0+h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Layered noise for organic displacement
    float n1 = snoise(vec2(pos.x * 0.8 + uTime * 0.12, pos.y * 0.8 + uTime * 0.08));
    float n2 = snoise(vec2(pos.x * 1.6 - uTime * 0.07, pos.y * 1.6 + uTime * 0.11)) * 0.5;
    float n3 = snoise(vec2(pos.x * 3.2 + uTime * 0.04, pos.y * 3.2 - uTime * 0.06)) * 0.25;

    float elevation = (n1 + n2 + n3) * uStrength;
    pos.z += elevation;
    vElevation = elevation;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Fragment shader — smooth color gradient across the mesh
// ─────────────────────────────────────────────────────────────────────────────
const FRAGMENT_SHADER = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    // Three-stop gradient: bottom → middle → top, modulated by elevation
    float t = vUv.y + vElevation * 0.3;
    vec3 color = mix(uColorA, uColorB, smoothstep(0.0, 0.5, t));
    color = mix(color, uColorC, smoothstep(0.5, 1.0, t));

    // Subtle pulsing luminosity
    float pulse = sin(uTime * 0.4) * 0.04 + 0.96;
    color *= pulse;

    gl_FragColor = vec4(color, 1.0);
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Floating particles — ambient nebula dust
// ─────────────────────────────────────────────────────────────────────────────
function AmbientParticles({ accentColor }: { accentColor: THREE.Color }) {
  const ref = useRef<THREE.Points>(null!);
  const PARTICLE_COUNT = 180;

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const sz = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      sz[i] = Math.random() * 0.018 + 0.006;
    }
    return { positions: pos, sizes: sz };
  }, []);

  const origY = useMemo(() => Float32Array.from(positions.filter((_, i) => (i + 2) % 3 === 0)), [positions]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Gentle upward drift + sine wobble
      pos[i * 3 + 1] = origY[i] + Math.sin(t * 0.3 + i * 0.7) * 0.3;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    // Lerp color
    const mat = ref.current.material as THREE.PointsMaterial;
    mat.color.lerp(accentColor, 0.02);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#00f0ff"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Mesh gradient — the living background plane
// ─────────────────────────────────────────────────────────────────────────────
interface MeshGradientProps {
  chapterIndex: number;
  activeProjectId?: string;
}

function MeshGradient({ chapterIndex, activeProjectId }: MeshGradientProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { size } = useThree();

  // Resolve current palette
  const palette = useMemo(() => {
    if (chapterIndex === 1 && activeProjectId && PROJECT_PALETTES[activeProjectId]) {
      const p = PROJECT_PALETTES[activeProjectId];
      return {
        a: new THREE.Color(p.bg),
        b: new THREE.Color(p.accent).multiplyScalar(0.18),
        c: new THREE.Color(p.accent2).multiplyScalar(0.12),
        accent: new THREE.Color(p.accent),
      };
    }
    const ch = CHAPTER_PALETTES[chapterIndex] ?? CHAPTER_PALETTES[0];
    return {
      a: new THREE.Color(ch.a),
      b: new THREE.Color(ch.b),
      c: new THREE.Color(ch.c),
      accent: new THREE.Color(ch.accent),
    };
  }, [chapterIndex, activeProjectId]);

  // Uniforms
  const uniforms = useMemo(
    () => ({
      uTime:     { value: 0 },
      uStrength: { value: 0.55 },
      uColorA:   { value: palette.a.clone() },
      uColorB:   { value: palette.b.clone() },
      uColorC:   { value: palette.c.clone() },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Lerp colors toward target palette on chapter/project change
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uColorA.value.lerp(palette.a, 0.04);
    uniforms.uColorB.value.lerp(palette.b, 0.04);
    uniforms.uColorC.value.lerp(palette.c, 0.04);
  });

  // Scale plane to always fill viewport
  const aspect = size.width / size.height;
  const planeW = 10 * aspect;
  const planeH = 10;

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, -5]}>
        <planeGeometry args={[planeW, planeH, 64, 64]} />
        <shaderMaterial
          vertexShader={VERTEX_SHADER}
          fragmentShader={FRAGMENT_SHADER}
          uniforms={uniforms}
          side={THREE.DoubleSide}
        />
      </mesh>

      <AmbientParticles accentColor={palette.accent} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Public component — fixed behind everything
// ─────────────────────────────────────────────────────────────────────────────
interface CinematicCanvasProps {
  chapterIndex: number;
  activeProjectId?: string;
}

export function CinematicCanvas({ chapterIndex, activeProjectId }: CinematicCanvasProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{
          antialias: false, // off for perf — mesh is smooth anyway
          alpha: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        frameloop="always"
      >
        <MeshGradient chapterIndex={chapterIndex} activeProjectId={activeProjectId} />
      </Canvas>
    </div>
  );
}
