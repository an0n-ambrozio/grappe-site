"use client";

import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine); // carrega o preset 'links'
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        preset: "links",
        background: {
          color: "transparent"
        },
        particles: {
          color: {
            value: "#a855f7"
          },
          links: {
            enable: true,
            color: "#a855f7",
            distance: 120,
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800
            }
          },
          opacity: {
            value: 0.3
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 3
          }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
