"use client";

import Particles from "@tsparticles/react"; // Pacote certo e moderno

export default function CardParticles() {
  return (
    <Particles
      id="card-particles"
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
            },
          },
          color: {
            value: "#c084fc",
          },
          size: {
            value: { min: 1, max: 2 },
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
          opacity: {
            value: 0.15,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
