"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function IntroLoader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressNumberRef = useRef<HTMLSpanElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force Safari autoplay compatibility
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Phase 1: Logo reveal with blur-to-sharp + scale
    tl.fromTo(
      logoRef.current,
      { scale: 0.6, opacity: 0, filter: "blur(30px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "expo.out",
      }
    );

    // Phase 2: Decorative line expands from center
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.inOut" },
      "-=0.6"
    );

    // Phase 3: Tagline characters reveal with 3D rotation
    const chars = taglineRef.current?.querySelectorAll(".intro-char");
    if (chars) {
      tl.fromTo(
        chars,
        { opacity: 0, y: 20, rotateX: 90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.025,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
    }

    // Phase 4: Progress bar fills with animated counter (extended duration to show video)
    tl.to(
      progressBarRef.current,
      {
        scaleX: 1,
        duration: 3.2,
        ease: "power1.inOut",
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100);
          if (progressNumberRef.current) {
            progressNumberRef.current.textContent = String(progress).padStart(
              3,
              "0"
            );
          }
        },
      },
      "-=0.4"
    );

    // Phase 5: Hold on full screen so user enjoys the video
    tl.to(
      logoRef.current,
      { scale: 1.05, duration: 1.2, ease: "power1.out" },
      "+=0.8"
    );

    // Phase 6: Content fades out before transition
    tl.to(
      logoRef.current,
      { scale: 1.15, opacity: 0, duration: 0.6, ease: "power2.in" }
    );
    tl.to(
      [lineRef.current, taglineRef.current],
      { opacity: 0, y: -20, duration: 0.5 },
      "-=0.4"
    );

    // Phase 7: Clip-path circle reveal — the cinematic exit
    tl.to(overlayRef.current, {
      clipPath: "circle(0% at 50% 50%)",
      duration: 1.2,
      ease: "power4.inOut",
      onComplete: () => {
        document.body.style.overflow = "";
        setIsComplete(true);
      },
    });

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, []);

  if (isComplete) return null;

  const tagline = "Fisioterapia & Pilates";

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center will-change-[clip-path]"
      style={{ clipPath: "circle(150% at 50% 50%)" }}
    >
      {/* ── Video Background ── */}
      <video
        ref={videoRef}
        src="/nantet3.mp4"
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.45) saturate(0.85)" }}
      />

      {/* ── Film Grain Overlay ── */}
      <div className="absolute inset-0 intro-grain opacity-[0.035] pointer-events-none mix-blend-overlay" />

      {/* ── Cinematic Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* ── Central Content ── */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div ref={logoRef} className="opacity-0 mb-6 sm:mb-8">
          <Image
            src="/logo1.png"
            alt="Carolina Nantet"
            width={240}
            height={240}
            className="w-28 sm:w-36 md:w-44 lg:w-52 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            priority
          />
        </div>

        {/* Decorative Line */}
        <div
          ref={lineRef}
          className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-5 sm:mb-6 origin-center"
          style={{ transform: "scaleX(0)" }}
        />

        {/* Tagline — character-by-character */}
        <div
          ref={taglineRef}
          className="flex flex-wrap justify-center"
          style={{ perspective: "600px" }}
        >
          {tagline.split("").map((char, i) => (
            <span
              key={i}
              className="intro-char text-white/75 text-[11px] sm:text-sm md:text-base font-extralight tracking-[0.3em] sm:tracking-[0.35em] uppercase inline-block opacity-0 will-change-transform"
              style={{ transformOrigin: "center bottom" }}
            >
              {char === " " ? "\u00A0\u00A0" : char}
            </span>
          ))}
        </div>
      </div>

      {/* ── Progress Section ── */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 px-8 sm:px-16 md:px-28 lg:px-44 z-10">
        <div className="flex items-end justify-between mb-3 sm:mb-4">
          <span className="text-white/25 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-light select-none">
            Loading Experience
          </span>
          <div className="flex items-baseline gap-[2px]">
            <span
              ref={progressNumberRef}
              className="text-white/60 text-xl sm:text-2xl md:text-3xl font-extralight tabular-nums"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              000
            </span>
            <span className="text-white/25 text-[10px] sm:text-xs font-light">
              %
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/[0.08] overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full w-full origin-left intro-progress-shimmer"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}
