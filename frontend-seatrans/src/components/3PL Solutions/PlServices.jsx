"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PlServices.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const servicesData = [
  {
    id: "smart-warehousing",
    title: "Smart Warehousing & RFID Racking",
    badge: "Smart WMS",
    desc: "Multi-tier automated racking system with RFID real-time inventory tracking, biometric security, and climate control.",
    highlights: ["24/7 Live Inventory Telemetry", "High-Density VNA Racking", "Bonded & Customs Free-Zone Space"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    id: "order-fulfillment",
    title: "High-Speed Order Pick & Pack",
    badge: "< 2-Hour SLA",
    desc: "Robotics-assisted order dispatch with barcode double-verification, custom unboxing experiences, and automated carrier label generation.",
    highlights: ["99.98% Pick Accuracy", "Kitting & Custom Assembly", "Branded Eco-Packaging Options"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "omnichannel-sync",
    title: "Omnichannel ERP & API Integration",
    badge: "150+ Plug-and-Play",
    desc: "Seamless two-way API webhooks connecting Seatrans WMS to Shopify, Amazon, SAP, Oracle, NetSuite, and custom storefronts.",
    highlights: ["Sub-Second Stock Updates", "Automated Order Ingestion", "Custom EDI & ERP Endpoints"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
  {
    id: "cross-docking",
    title: "Express Cross-Docking & Transloading",
    badge: "Zero Dwell Time",
    desc: "Direct ocean container to domestic truck fleet transfers, completely bypassing warehousing delays to drastically lower holding costs.",
    highlights: ["Rapid Pier-to-Fleet Dispatch", "De-consolidation & Sorting", "LTL/FTL Fleet Matching"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 4v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "reverse-logistics",
    title: "Reverse Logistics & Returns Tech",
    badge: "Automated Inspection",
    desc: "Turn returns into revenue with rapid grade-A inspection, item refurbishment, restocking, and automated customer refund triggers.",
    highlights: ["Same-Day Return Sorting", "Grade-A Refurbishment", "Instant Customer Refund Sync"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </svg>
    ),
  },
  {
    id: "cold-chain",
    title: "Pharma & Temp-Controlled Storage",
    badge: "-20°C to +25°C",
    desc: "GDP-certified cold chain chambers with dual-redundant power, active thermal logging, and ultra-strict healthcare compliance.",
    highlights: ["Active Sensor Telemetry", "GDP & FDA Certified", "Dedicated Cleanroom Facilities"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function PlServices() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Grid Cards Animation
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          Array.from(cards),
          { opacity: 0, y: 55, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="3pl-services" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div ref={headerRef} className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            3PL CAPABILITIES
          </div>
          <h2 className={styles.sectionTitle}>
            Enterprise Fulfillment & <br />
            <span className={styles.titleGradient}>Smart Warehouse Solutions</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Tailored 3PL modular services engineered for hyper-growth brands, global manufacturers, and enterprise supply networks.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className={styles.grid}>
          {servicesData.map((service) => {
            const isOpen = activeCard === service.id;
            return (
              <div
                key={service.id}
                className={`${styles.card} ${isOpen ? styles.cardActive : ""}`}
                onClick={() => setActiveCard(isOpen ? null : service.id)}
              >
                {/* Top Row: Icon + Badge */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>{service.icon}</div>
                  <span className={styles.cardBadge}>{service.badge}</span>
                </div>

                {/* Service Title */}
                <h3 className={styles.cardTitle}>{service.title}</h3>

                {/* Service Description */}
                <p className={styles.cardDesc}>{service.desc}</p>

                {/* Key Highlight Bullets */}
                <ul className={styles.highlightList}>
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.checkIcon}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer Action */}
                <div className={styles.cardFooter}>
                  <span className={styles.exploreText}>
                    {isOpen ? "Hide Specs" : "Explore Capabilities"}
                  </span>
                  <div className={`${styles.arrowCircle} ${isOpen ? styles.arrowRotate : ""}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.arrowIcon}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>

                {/* Top Border Accent Glow */}
                <div className={styles.topAccentGlow} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
