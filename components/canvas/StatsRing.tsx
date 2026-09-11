"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function StatsRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.05;
      ref.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2.3, 0, 0.2]}>
      <torusGeometry args={[2.6, 0.012, 16, 120]} />
      <meshBasicMaterial color="#5B4CFF" transparent opacity={0.22} />
    </mesh>
  );
}
