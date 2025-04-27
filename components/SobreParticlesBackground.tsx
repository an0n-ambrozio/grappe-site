"use client";

import Particles from "@tsparticles/react"; // sem @tsparticles/all

export default function SobreParticlesBackground() {
  return (
    <Particles
      id="tsparticles-sobre"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
            },
          },
          color: { value: "#a78bfa" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 2 } },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
