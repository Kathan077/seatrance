"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.85,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className={styles.container}>
        <div ref={heroRef} className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            DIRECT LOGISTICS SUPPORT
          </div>

          <h1 className={styles.heroTitle}>
            Connect With Our <br />
            <span className={styles.blueAccent}>Global Shipping Experts</span>
          </h1>

          <p className={styles.heroDesc}>
            Have questions about ocean freight, air cargo, 3PL warehousing, or customs clearance?
            Reach out directly to our leadership team or request an instant rate quotation.
          </p>

          <div className={styles.quickPillsRow}>
            <div className={styles.pill}>
              <span className={styles.pillIcon}>📍</span>
              <span>Ahmedabad HQ, India</span>
            </div>
            <div className={styles.pill}>
              <span className={styles.pillIcon}>📞</span>
              <span>+91 98986 97515</span>
            </div>
            <div className={styles.pill}>
              <span className={styles.pillIcon}>✉️</span>
              <span>Info@seatransshipping.net</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
