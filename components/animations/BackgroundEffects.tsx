"use client";

export default function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute right-[-150px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-blue-700/20 blur-[120px]" />
    </>
  );
}