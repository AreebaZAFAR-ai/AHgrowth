"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import AssemblingIcosahedron from "@/components/canvas/AssemblingIcosahedron";
import { gsap, useGSAP } from "@/lib/gsap";

const SESSION_KEY = "ahgrowth-splash-shown";
const LOAD_DURATION = 2.2; // seconds — simulated asset preload

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  useGSAP(
    () => {
      const alreadyShown = sessionStorage.getItem(SESSION_KEY);

      if (alreadyShown) {
        setVisible(false);
        onComplete();
        return;
      }

      const counterState = { value: 0 };
      const tl = gsap.timeline({
        // Marked "shown" only once the timeline actually finishes, not at
        // the start — React 18 Strict Mode double-invokes this effect in
        // dev (mount -> cleanup -> mount), and the throwaway first mount's
        // timeline gets killed by useGSAP's cleanup before it ever
        // completes, so it never reaches here to flag the session.
        onComplete: () => {
          sessionStorage.setItem(SESSION_KEY, "1");
          setVisible(false);
          onComplete();
        },
      });

      tl.to(counterState, {
        value: 100,
        duration: LOAD_DURATION,
        ease: "power2.out",
        onUpdate: () => {
          progressRef.current = counterState.value / 100;
          if (counterRef.current) {
            counterRef.current.textContent = `${Math.round(counterState.value)}%`;
          }
          if (barRef.current) {
            barRef.current.style.width = `${counterState.value}%`;
          }
        },
      }).to(
        rootRef.current,
        {
          scale: 0.94,
          opacity: 0,
          y: -16,
          duration: 0.6,
          ease: "power3.inOut",
        },
        "+=0.15"
      );
    },
    { scope: rootRef }
  );

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 0, 4.6], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <AssemblingIcosahedron progressRef={progressRef} />
          </Canvas>
        </div>
        <h1 className="relative font-heading text-3xl font-medium tracking-tight text-text-primary sm:text-4xl">
          AH GROWTH<span className="text-accent-lime">.</span>
        </h1>
      </div>

      <div className="absolute bottom-8 left-8 font-body text-sm">
        <span ref={counterRef} className="tabular-nums text-text-primary">
          0%
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10">
        <div ref={barRef} className="h-full w-0 bg-accent-lime" />
      </div>
    </div>
  );
}
