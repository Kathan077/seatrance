"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./IndustriesHero.module.css";

const QUICK_SECTORS = [
  { label: "Defense & Tactical", id: "defense" },
  { label: "ODC & Heavy Lift", id: "odc" },
  { label: "Agro & Cold Chain", id: "agro" },
  { label: "Industrial Machinery", id: "machinery" },
  { label: "Aerospace & Tech", id: "aerospace" },
  { label: "Automotive & EV", id: "automotive" }
];

export default function IndustriesHero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const chipsRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.95 },
          "-=0.4"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          chipsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChipClick = (id) => {
    const target = document.getElementById("industries-grid");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className={styles.heroWrapper}>
      {/* Background overlay & animated glows */}
      <div className={styles.heroBg} />
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Top Badge */}
          <div ref={badgeRef} className={styles.heroBadge}>
            <span className={styles.pulseDot} />
            <span>SPECIALIZED INDUSTRY FREIGHT ARCHITECTURE</span>
          </div>

          {/* Main Title */}
          <h1 ref={titleRef} className={styles.heroTitle}>
            Precision Freight Solutions for <br />
            <span className={styles.gradientText}>Earth’s Most Critical Sectors</span>
          </h1>

          {/* Description */}
          <p ref={descRef} className={styles.heroDesc}>
            From high-security <strong>Defense chartering</strong> and <strong>Over Dimensional Cargo (ODC)</strong> multi-axle heavy transport to temperature-controlled <strong>Agro cold chains</strong> and <strong>Heavy Machinery</strong> export, Seatrans engineers custom supply chains tailored to your exact regulatory, physical, and temporal demands.
          </p>

          {/* Quick Jump Sector Chips */}
          <div ref={chipsRef} className={styles.quickChipsWrapper}>
            <span className={styles.chipsLabel}>QUICK SECTOR ACCESS:</span>
            <div className={styles.chipsGrid}>
              {QUICK_SECTORS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChipClick(s.id)}
                  className={styles.chipBtn}
                >
                  <span className={styles.chipDot} />
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slanted Bottom Divider */}
      <div className={styles.bottomSlantedDivider}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.slantedSvg}>
          <polygon points="0,100 100,0 100,100" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
