"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./Preloader.module.css";

const LOADING_STATUSES = [
  "INITIALIZING MARITIME SATELLITE TELEMATICS...",
  "CALIBRATING GLOBAL PORT & CONTAINER CORRIDORS...",
  "LOADING SPECIALIZED DEFENSE & ODC FLEET SPECS...",
  "SYNCHRONIZING 24/7 COMMAND CENTER...",
  "SYSTEM READY • SEATRANS GLOBAL VERIFIED"
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Check if preloader already played in this session
    const hasSeenLoader = sessionStorage.getItem("seatrance_preloaded");
    if (hasSeenLoader === "true") {
      setShouldRender(false);
      return;
    }

    // Counter increment logic
    let start = 0;
    const duration = 2200; // 2.2 seconds
    const interval = 25;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        start = 100;
        clearInterval(timer);

        sessionStorage.setItem("seatrance_preloaded", "true");

        setTimeout(() => {
          triggerExitAnimation();
        }, 300);
      }

      const rounded = Math.floor(start);
      setProgress(rounded);

      if (rounded < 25) setStatusIndex(0);
      else if (rounded < 50) setStatusIndex(1);
      else if (rounded < 75) setStatusIndex(2);
      else if (rounded < 98) setStatusIndex(3);
      else setStatusIndex(4);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const triggerExitAnimation = () => {
    if (!loaderRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setShouldRender(false);
        }
      });

      tl.to([logoRef.current, counterRef.current], {
        opacity: 0,
        scale: 0.9,
        y: -30,
        duration: 0.45,
        ease: "power2.in"
      }).to(
        loaderRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.85,
          ease: "expo.inOut"
        },
        "-=0.15"
      );
    }, loaderRef);

    return () => ctx.revert();
  };

  if (!shouldRender) return null;

  return (
    <div ref={loaderRef} className={styles.preloaderOverlay}>
      {/* Soft Ambient Background Glows */}
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      {/* Main Loader Content Box */}
      <div className={styles.loaderContent}>
        {/* Logo Container with 🌀 Dual Spinning Gyro Rings 🌀 */}
        <div ref={logoRef} className={styles.logoWrapper}>
          {/* Outer Spinning Ring */}
          <div className={styles.spinnerRingOuter} />
          {/* Inner Counter-Spinning Dashed Ring */}
          <div className={styles.spinnerRingInner} />
          {/* Spinning Orbital Node */}
          <div className={styles.orbitalNode} />

          <Image
            src="/images/Seatrans-logo.png"
            alt="Seatrans Global"
            width={240}
            height={230}
            className={styles.logoImage}
            priority
          />
          <div className={styles.logoGlow} />
        </div>

        {/* Dynamic Percentage Counter */}
        <div ref={counterRef} className={styles.counterBox}>
          <span className={styles.progressValue}>{progress}</span>
          <span className={styles.percentSymbol}>%</span>
        </div>

        {/* 🚢 Sailing Cargo Container Vessel Progress Bar Track 🚢 */}
        <div className={styles.progressTrackWrapper}>
          <div
            className={styles.cargoShipContainer}
            style={{ left: `calc(${progress}% - 22px)` }}
          >
            <svg viewBox="0 0 64 36" fill="none" className={styles.cargoShipSvg}>
              {/* Stacked Freight Containers */}
              <rect x="14" y="6" width="10" height="8" rx="1" fill="#1e65b3" />
              <rect x="26" y="6" width="10" height="8" rx="1" fill="#0d9488" />
              <rect x="38" y="6" width="10" height="8" rx="1" fill="#f59e0b" />
              <rect x="20" y="0" width="10" height="6" rx="1" fill="#0c2340" />
              <rect x="32" y="0" width="10" height="6" rx="1" fill="#ef4444" />
              {/* Container Vessel Hull */}
              <path d="M4 16h56l-6 12H10L4 16z" fill="#0c2340" />
              <path d="M10 28l-2 4h48l-2-4H10z" fill="#1e65b3" />
            </svg>
          </div>

          <div className={styles.progressTrack}>
            <div
              ref={progressBarRef}
              className={styles.progressBarFill}
              style={{ width: `${progress}%` }}
            >
              <div className={styles.progressGlowHead} />
            </div>
          </div>
        </div>

        {/* Status Text Ticker */}
        <div className={styles.statusBox}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>
            {LOADING_STATUSES[statusIndex]}
          </span>
        </div>

        {/* Bottom Coordinates & Live Telematics Bar */}
        <div className={styles.telematicsBar}>
          <span>LAT: 18.9402° N, LON: 72.8353° E</span>
          <span className={styles.barDivider}>•</span>
          <span>SEATRANS MARITIME COMMAND NET</span>
          <span className={styles.barDivider}>•</span>
          <span>ENCRYPTED 256-BIT</span>
        </div>
      </div>

      {/* 🌊 FULLSCREEN FLUID OCEAN SEA WAVES ANIMATION 🌊 */}
      <div className={styles.oceanWavesContainer}>
        <div className={styles.waveLayer1} />
        <div className={styles.waveLayer2} />
        <div className={styles.waveLayer3} />
      </div>
    </div>
  );
}
