"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const LIME = new THREE.Color("#C6FF3D");
const VIOLET = new THREE.Color("#5B4CFF");

type ProgressRef = { current: number };

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function AssemblingIcosahedron({
  progressRef,
}: {
  progressRef: ProgressRef;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  const { targetPositions, scatteredPositions, colors, vertexCount } =
    useMemo(() => {
      const icoGeo = new THREE.IcosahedronGeometry(1.3, 0);
      const edgesGeo = new THREE.EdgesGeometry(icoGeo);
      const targetPositions = (
        edgesGeo.attributes.position.array as Float32Array
      ).slice();
      const vertexCount = targetPositions.length / 3;
      const edgeCount = vertexCount / 2;

      const scatteredPositions = new Float32Array(targetPositions.length);
      const colors = new Float32Array(targetPositions.length);

      for (let e = 0; e < edgeCount; e++) {
        const i0 = e * 2;
        const i1 = e * 2 + 1;

        const p0 = new THREE.Vector3(
          targetPositions[i0 * 3],
          targetPositions[i0 * 3 + 1],
          targetPositions[i0 * 3 + 2]
        );
        const p1 = new THREE.Vector3(
          targetPositions[i1 * 3],
          targetPositions[i1 * 3 + 1],
          targetPositions[i1 * 3 + 2]
        );
        const edgeLength = p0.distanceTo(p1);

        // scattered fragment: random anchor point + random orientation,
        // same edge length so it still reads as a "piece" once assembled
        const anchor = new THREE.Vector3(
          (Math.random() - 0.5) * 6.5,
          (Math.random() - 0.5) * 6.5,
          (Math.random() - 0.5) * 6.5
        );
        const dir = new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize();

        const s0 = anchor.clone().addScaledVector(dir, -edgeLength / 2);
        const s1 = anchor.clone().addScaledVector(dir, edgeLength / 2);

        scatteredPositions[i0 * 3] = s0.x;
        scatteredPositions[i0 * 3 + 1] = s0.y;
        scatteredPositions[i0 * 3 + 2] = s0.z;
        scatteredPositions[i1 * 3] = s1.x;
        scatteredPositions[i1 * 3 + 1] = s1.y;
        scatteredPositions[i1 * 3 + 2] = s1.z;

        // lime -> violet gradient by vertical position on the target shape
        const t = THREE.MathUtils.clamp((p0.y / 1.3 + 1) / 2, 0, 1);
        const c = LIME.clone().lerp(VIOLET, t);
        colors[i0 * 3] = c.r;
        colors[i0 * 3 + 1] = c.g;
        colors[i0 * 3 + 2] = c.b;
        colors[i1 * 3] = c.r;
        colors[i1 * 3 + 1] = c.g;
        colors[i1 * 3 + 2] = c.b;
      }

      icoGeo.dispose();
      edgesGeo.dispose();

      return { targetPositions, scatteredPositions, colors, vertexCount };
    }, []);

  const workingPositions = useMemo(
    () => new Float32Array(targetPositions.length),
    [targetPositions]
  );

  useFrame((state, delta) => {
    const eased = easeOutCubic(THREE.MathUtils.clamp(progressRef.current, 0, 1));

    const geometry = lineRef.current?.geometry;
    const posAttr = geometry?.attributes.position as
      | THREE.BufferAttribute
      | undefined;

    if (posAttr) {
      for (let i = 0; i < workingPositions.length; i++) {
        workingPositions[i] =
          scatteredPositions[i] +
          (targetPositions[i] - scatteredPositions[i]) * eased;
      }
      (posAttr.array as Float32Array).set(workingPositions);
      posAttr.needsUpdate = true;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={vertexCount}
            array={scatteredPositions.slice()}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={vertexCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.85} />
      </lineSegments>
    </group>
  );
}
