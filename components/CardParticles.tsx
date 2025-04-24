"use client";

import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function CardParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="card-particles"
      init={particlesInit}
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: { value: 20 },
          color: { value: "#c084fc" },
          size: { value: 1.5, random: true },
          move: { enable: true, speed: 0.2 },
          opacity: { value: 0.15 },
        },
      }}
    />
  );
}
