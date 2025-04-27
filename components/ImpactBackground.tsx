"use client";

export default function ImpactBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none animate-backgroundMove">
      <svg className="w-full h-full" viewBox="0 0 120 120" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#c4b5fd" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
