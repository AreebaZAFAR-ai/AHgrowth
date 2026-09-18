"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Grid, Sparkles, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* =====================================================
   CRYSTAL FORMATIONS
   - low-poly emissive shards scattered on the grid floor
   - each drifts + rotates independently at its own pace
===================================================== */

const CRYSTAL_LAYOUT = [
  { pos: [-3.2, -0.6, -2], scale: 1.1, color: "#00E5FF", speed: 1.1 },
  { pos: [2.6, -0.9, -3.5], scale: 0.85, color: "#FF3DBF", speed: 0.9 },
  { pos: [-1.4, -1.1, -5], scale: 0.65, color: "#7C5CFF", speed: 1.3 },
  { pos: [3.8, -1.0, -6.5], scale: 1.3, color: "#7C5CFF", speed: 0.8 },
  { pos: [-4.4, -0.8, -6], scale: 0.9, color: "#00E5FF", speed: 1.0 },
  { pos: [0.6, -1.2, -8], scale: 0.55, color: "#FF3DBF", speed: 1.4 },
] as const;

function Crystal({
  position,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.25 * speed;
    ref.current.rotation.x = Math.sin(t * 0.3 * speed) * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.15} floatIntensity={0.9}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.9}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>
      {/* soft light bleeding from each crystal onto the floor */}
      <pointLight position={position} color={color} intensity={2.2} distance={4.5} />
    </Float>
  );
}

/* =====================================================
   DISTANT PORTAL
   - a glowing core with two tilted rings, like a beacon
     anchoring the far end of the scene
===================================================== */

function Portal() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      const s = 1 + Math.sin(t * 0.6) * 0.04;
      coreRef.current.scale.setScalar(s);
    }
    if (ring1.current) ring1.current.rotation.z = t * 0.12;
    if (ring2.current) ring2.current.rotation.z = -t * 0.08;
  });

  return (
    <group position={[0, 1.4, -14]}>
      <mesh ref={coreRef}>
        <sphereGeometry args={[2.1, 48, 48]} />
        <meshStandardMaterial
          color="#7C5CFF"
          emissive="#B39CFF"
          emissiveIntensity={1.4}
          roughness={0.25}
          metalness={0.3}
        />
      </mesh>
      <mesh ref={ring1} rotation={[1.3, 0, 0]}>
        <torusGeometry args={[3.1, 0.03, 16, 128]} />
        <meshBasicMaterial color="#00E5FF" toneMapped={false} transparent opacity={0.7} />
      </mesh>
      <mesh ref={ring2} rotation={[1.15, 0.4, 0]}>
        <torusGeometry args={[3.6, 0.02, 16, 128]} />
        <meshBasicMaterial color="#FF3DBF" toneMapped={false} transparent opacity={0.5} />
      </mesh>
      <pointLight color="#B39CFF" intensity={6} distance={18} />
    </group>
  );
}

/* =====================================================
   CAMERA RIG
   - slow autonomous drift forward + gentle mouse parallax
   - reads as a cinematic flythrough, not a static object
===================================================== */

function CameraRig() {
  const { camera } = useThree();
  const targetMouse = useRef(new THREE.Vector2(0, 0));
  const currentMouse = useRef(new THREE.Vector2(0, 0));

  const basePos = useMemo(() => new THREE.Vector3(0, 1.3, 8), []);

  useFrame((state) => {
    const mouse = state.pointer;
    targetMouse.current.set(mouse.x, mouse.y);
    currentMouse.current.lerp(targetMouse.current, 0.03);

    const t = state.clock.elapsedTime;
    const drift = Math.sin(t * 0.05) * 0.6;

    camera.position.x = basePos.x + currentMouse.current.x * 0.8 + drift * 0.3;
    camera.position.y = basePos.y + currentMouse.current.y * 0.4;
    camera.position.z = basePos.z - (Math.sin(t * 0.04) * 0.5 + 0.5) * 1.5;

    camera.lookAt(0, 0.4, -6);
  });

  return null;
}

/* =====================================================
   SCENE
===================================================== */

function Scene() {
  return (
    <>
      <fog attach="fog" args={["#05010f", 6, 22]} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[-3, 5, 4]} intensity={0.8} color="#B39CFF" />

      {/* floor */}
      <Grid
        position={[0, -1.5, -4]}
        args={[40, 40]}
        cellSize={0.5}
        cellThickness={0.6}
        cellColor="#1b1035"
        sectionSize={2.5}
        sectionThickness={1.3}
        sectionColor="#7C5CFF"
        fadeDistance={22}
        fadeStrength={1.4}
        infiniteGrid
        followCamera={false}
      />

      {CRYSTAL_LAYOUT.map((c, i) => (
        <Crystal
          key={i}
          position={c.pos as [number, number, number]}
          scale={c.scale}
          color={c.color}
          speed={c.speed}
        />
      ))}

      <Portal />

      <Stars radius={60} depth={40} count={2500} factor={3} saturation={0} fade speed={0.4} />

      <Sparkles count={90} scale={[14, 6, 14]} size={2} speed={0.25} color="#00E5FF" opacity={0.5} />
      <Sparkles count={70} scale={[14, 6, 14]} size={1.6} speed={0.18} color="#FF3DBF" opacity={0.35} />

      <CameraRig />
    </>
  );
}

/* =====================================================
   EXPORT — same signature as before, drop-in replacement
===================================================== */

export default function LiquidHero({ ready }: { ready: boolean }) {
  return (
    <div
      className={`
        absolute
        inset-0
        transition-opacity
        duration-[1800ms]
        ${ready ? "opacity-100" : "opacity-0"}
      `}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.3, 8], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}