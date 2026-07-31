"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesSection from "@/components/Services/ServicesSection";
import WorkingProcess from "@/components/Services/Working_process";
import ServicesShowcase from "@/components/Home/ServicesShowcase";
import styles from "./services.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.0 },
        "-=0.6"
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(actionsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );

      // Hero background scale animation on scroll
      gsap.to(`.${styles.heroBg}`, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.servicesPageWrapper}>
      {/* Services Hero Section */}
      <section ref={heroRef} className={styles.heroSection}>
        {/* Background Image / Overlay */}
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span ref={subtitleRef} className={styles.heroSubtitle}>
              SEATRANS GLOBAL SOLUTIONS
            </span>
            <h1 ref={titleRef} className={styles.heroTitle}>
              Logistics & Supply <br />
              <span className={styles.blueAccent}>Chain Excellence</span>
            </h1>
            <p ref={descRef} className={styles.heroDesc}>
              Whether you need complex international ocean cargo routing, global air transport corridors, 
              customs compliance clearance, or integrated 3PL warehousing, Seatrans delivers resilient and 
              digitized logistics solutions.
            </p>
            <div ref={actionsRef} className={styles.heroActions}>
              <Link href="#services-grid" className={styles.primaryBtn}>
                <span>Explore Services</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnArrow}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="#quote" className={styles.secondaryBtn}>
                <span>Request a Rate Card</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal Bottom Divider to match site design */}
        <div className={styles.bottomSlantedDivider}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.slantedSvg}>
            <polygon points="0,100 100,0 100,100" fill="#f4f8fa" />
          </svg>
        </div>
      </section>

      {/* Interactive Services Grid Section */}
      <div id="services-grid">
        <ServicesSection />
      </div>

      {/* Working Process Section */}
      <WorkingProcess />

      {/* Standard Services Showcase Section */}
      <ServicesShowcase />

      {/* FAQ & CTA Section can go here, but Navbar & Footer are rendered globally */}
    </main>
  );
}
