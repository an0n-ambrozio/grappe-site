import type { ISourceOptions } from "tsparticles-engine";

export const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  particles: {
    number: { value: 50, density: { enable: true, area: 800 } },
    color: { value: "#a855f7" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 4 },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
      attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { quantity: 4 },
    },
  },
  detectRetina: true,
};
