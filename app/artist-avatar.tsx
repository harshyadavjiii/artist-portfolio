"use client";

import { useState } from "react";

export default function ArtistAvatar() {
  const [style, setStyle] = useState({
    transform:
      "perspective(1400px) rotateX(8deg) rotateY(-12deg) translateZ(0)",
  });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `perspective(1400px) rotateX(${8 - y * 10}deg) rotateY(${
        -12 + x * 18
      }deg) translateZ(0)`,
    });
  }

  function resetMove() {
    setStyle({
      transform:
        "perspective(1400px) rotateX(8deg) rotateY(-12deg) translateZ(0)",
    });
  }

  return (
    <div
      className="avatar-card group rounded-[1.75rem] p-6 shadow-inner"
      onMouseMove={handleMove}
      onMouseLeave={resetMove}
    >
      <p className="avatar-label text-xs uppercase tracking-[0.3em]">
        Moving Canvas
      </p>
      <div className="avatar-stage mt-6">
        <div className="canvas-frame">
        <div className="avatar-scene" style={style}>
          <div className="avatar-shadow" />
          <div className="speech-bubble">
            <span>राम राम</span>
          </div>

          <div className="easel">
            <div className="easel-board" />
            <div className="easel-leg easel-leg-left" />
            <div className="easel-leg easel-leg-right" />
          </div>

          <div className="artist-figure">
            <div className="hair-back" />
            <div className="head">
              <div className="hair-front" />
              <div className="face">
                <span className="eye eye-left" />
                <span className="eye eye-right" />
                <span className="mouth" />
              </div>
            </div>
            <div className="neck" />
            <div className="dupatta dupatta-back" />
            <div className="torso" />
            <div className="arm arm-back" />
            <div className="arm arm-front">
              <div className="paintbrush">
                <span className="brush-tip" />
              </div>
            </div>
            <div className="dupatta dupatta-front" />
            <div className="skirt" />
            <div className="leg leg-left" />
            <div className="leg leg-right" />
            <div className="shoe shoe-left" />
            <div className="shoe shoe-right" />
          </div>

          <div className="paint-orb paint-orb-one" />
          <div className="paint-orb paint-orb-two" />
          <div className="paint-orb paint-orb-three" />
        </div>
        </div>
      </div>
      <p className="avatar-copy mt-6 max-w-md text-sm leading-6">
        A living painted scene where an elegant artist steps through the
        canvas, greets you, and moves with subtle depth as the artwork tilts.
      </p>
    </div>
  );
}
