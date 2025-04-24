"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#a78bfa" },
          size: { value: 2, random: true },
          move: { enable: true, speed: 0.6, outModes: { default: "bounce" } },
          links: {
            enable: true,
            color: "#c084fc",
            distance: 100,
            opacity: 0.3,
            width: 1
          }
        },
        detectRetina: true
      }}
    />
  );
}
