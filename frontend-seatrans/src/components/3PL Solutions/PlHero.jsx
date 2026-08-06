"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./PlHero.module.css";

export default function PlHero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.95, delay: 0.1 }
      )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.heroWrapper}>
      {/* Background Image Overlay with ambient gradient */}
      <div className={styles.heroBg} />
      <div className={styles.heroOverlay} />
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Hero Title */}
          <h1 ref={titleRef} className={styles.heroTitle}>
            Intelligent 3PL Warehousing & <br />
            <span className={styles.blueGradient}>High-Speed Fulfillment</span>
          </h1>

          {/* Hero Description */}
          <p ref={descRef} className={styles.heroDesc}>
            Elevate your global distribution with Seatrans Enterprise 3PL Infrastructure.
            Combining smart RFID inventory tracking, multi-region bonded warehousing, automated picking,
            and real-time omnichannel ERP sync.
          </p>

          {/* CTA Action Buttons */}
          <div ref={actionsRef} className={styles.heroActions}>
            <Link href="#quote" className={styles.primaryBtn}>
              <span>Request 3PL Proposal</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={styles.btnArrow}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <Link href="#3pl-services" className={styles.secondaryBtn}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={styles.btnIcon}
              >
                <path d="M2 12h20M12 2v20" />
              </svg>
              <span>Explore Capabilities</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Slanted Bottom Divider */}
      <div className={styles.bottomSlantedDivider}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.slantedSvg}>
          <polygon points="0,100 100,0 100,100" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
