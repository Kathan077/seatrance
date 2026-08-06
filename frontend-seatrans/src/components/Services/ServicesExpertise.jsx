"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesExpertise.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EXPERTISE_DATA = [
  {
    id: "first-mile",
    number: "01",
    title: "First Mile Service",
    subtitle: "Factory-to-Port Consolidation & Drayage",
    badge: "99.8% On-Time Pickup",
    category: "Origin Operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="6.5" cy="17.5" r="2.5" />
        <circle cx="16.5" cy="17.5" r="2.5" />
      </svg>
    ),
    description:
      "Seamless origin logistics designed to bridge the gap between manufacturing facilities and export gateways. We handle factory pickups, origin drayage, container stuffing, and pre-shipment inspections with precision timing.",
    features: [
      "Factory & Supplier Pickups",
      "Container Stuffing & De-stuffing",
      "GPS-Monitored Fleet Drayage",
      "Pre-Carriage Quality Inspection",
      "Origin Cargo Consolidation (LCL to FCL)"
    ],
    accentColor: "from-blue-600 to-cyan-500"
  },
  {
    id: "customs-clearance",
    number: "02",
    title: "Export Customs Clearance",
    subtitle: "Regulatory EDI Compliance & Duty Optimization",
    badge: "Zero-Delay Customs Audit",
    category: "Regulatory & Compliance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    description:
      "Eliminate border bottlenecks with licensed customs brokers and direct EDI filing. We manage complex documentation, HS code classification, export declarations, and DG cargo approvals to guarantee rapid clearance.",
    features: [
      "ICEGATE Direct EDI Filing",
      "HS Code & Tariff Classification",
      "Hazardous (DG) Cargo Clearance",
      "Certificate of Origin & Legalization",
      "Duty Drawback & Tax Optimization"
    ],
    accentColor: "from-blue-600 to-indigo-600"
  },
  {
    id: "ftwz-warehousing",
    number: "03",
    title: "FTWZ Handling & Bonded Warehousing",
    subtitle: "Duty-Deferred Free Trade Zones & Strategic Storage",
    badge: "100% Tax & Duty Deferment",
    category: "Free Trade Logistics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 18h6" />
        <path d="M9 14h6" />
        <path d="M9 10h6" />
      </svg>
    ),
    description:
      "Maximize cash flow leveraging Free Trade Warehousing Zones (FTWZ) and customs-bonded facilities. Store, re-export, assemble, or re-pack your global freight without immediate duty payout.",
    features: [
      "Duty-Deferred Cargo Storage",
      "Re-Export Without Local Tax Impact",
      "Value-Added Kitting & Relabeling",
      "24/7 High-Security & Climate Bay",
      "Seamless Customs Inventory Audits"
    ],
    accentColor: "from-cyan-600 to-teal-500"
  },
  {
    id: "door-to-door",
    number: "04",
    title: "Door-to-Door Delivery",
    subtitle: "End-to-End Multimodal Transport Accountability",
    badge: "Global Single-Window Control",
    category: "Multimodal Transit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    description:
      "Complete end-to-end logistics ownership from supplier warehouse to buyer door. We coordinate ocean/air freight, port handling, customs clearance, and final-mile trucking under one single bill of lading.",
    features: [
      "Single Accountable Logistics Partner",
      "Comprehensive DDP & DAP Terms",
      "Final Mile Trucking & Tailgate Unloading",
      "White-Glove & Oversized Cargo Delivery",
      "Integrated Cargo Insurance Coverage"
    ],
    accentColor: "from-blue-700 to-blue-500"
  },
  {
    id: "cargo-tracking",
    number: "05",
    title: "Real-Time Cargo Tracking",
    subtitle: "IoT Telemetry & Predictive Milestone Analytics",
    badge: "24/7 IoT Live Telemetry",
    category: "Digital Visibility",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h5l2 8 5-16 2 8h6" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
    description:
      "Full supply chain transparency with live GPS and satellite tracking. Receive automated milestone status notifications, temperature/humidity alerts for reefer containers, and AI-predicted ETAs.",
    features: [
      "Container Live GPS & Satellite Telemetry",
      "Automated Milestone Status Updates",
      "Reefer Temperature & Door Sensor Alerts",
      "Predictive AI Arrival ETAs",
      "Client Portal & API Webhook Integration"
    ],
    accentColor: "from-sky-500 to-blue-600"
  }
];

export default function ServicesExpertise() {
  const [activeTab, setActiveTab] = useState(0);

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        `.${styles.sectionHeader}`,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );

      // Stagger reveal cards
      gsap.fromTo(
        `.${styles.expertiseCard}`,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.expertiseGrid}`,
            start: "top 82%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);



  return (
    <section ref={sectionRef} className={styles.expertiseSection} id="our-expertise">
      {/* Subtle Background Elements */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGridPattern} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badgeSparkle}>★</span>
            <span>OUR EXPERTISE & INTEGRATED SOLUTIONS</span>
          </div>
          <h2 className={styles.mainTitle}>
            Specialized Supply Chain Operations <br />
            <span className={styles.gradientText}>Built for Speed, Compliance & Precision</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            From factory pickup and customs clearance to FTWZ bonded warehousing and real-time GPS telemetry, 
            we manage your entire freight lifecycle with absolute accountability.
          </p>

          {/* Nav Tabs for Quick Filter / Jump */}
          <div className={styles.tabsWrapper}>
            {EXPERTISE_DATA.map((item, idx) => (
              <button
                key={item.id}
                className={`${styles.tabBtn} ${activeTab === idx ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className={styles.tabNum}>{item.number}</span>
                <span className={styles.tabTitle}>{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Service Spotlight Banner */}
        <div className={styles.spotlightCard}>
          <div className={styles.spotlightHeader}>
            <div className={styles.spotlightBadgeRow}>
              <span className={styles.categoryBadge}>{EXPERTISE_DATA[activeTab].category}</span>
              <span className={styles.highlightBadge}>{EXPERTISE_DATA[activeTab].badge}</span>
            </div>
           
          </div>

          <div className={styles.spotlightGrid}>
            <div className={styles.spotlightLeft}>
              <div className={styles.iconCircle}>
                {EXPERTISE_DATA[activeTab].icon}
              </div>
              <h3 className={styles.spotlightTitle}>{EXPERTISE_DATA[activeTab].title}</h3>
              <p className={styles.spotlightSubtitle}>{EXPERTISE_DATA[activeTab].subtitle}</p>
              <p className={styles.spotlightDesc}>{EXPERTISE_DATA[activeTab].description}</p>
              
              <div className={styles.spotlightActions}>
                <Link href="#quote" className={styles.primaryCtaBtn}>
                  <span>Book This Service</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.ctaArrow}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <a href="tel:+912212345678" className={styles.secondaryCtaBtn}>
                  <span>Speak with Expert</span>
                </a>
              </div>
            </div>

            <div className={styles.spotlightRight}>
              <h4 className={styles.featuresHeading}>Core Service Capabilities:</h4>
              <ul className={styles.featureList}>
                {EXPERTISE_DATA[activeTab].features.map((feat, i) => (
                  <li key={i} className={styles.featureItem}>
                    <div className={styles.checkIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 5-Card Full Expertise Grid */}
        <div className={styles.expertiseGrid}>
          {EXPERTISE_DATA.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.expertiseCard} ${activeTab === index ? styles.cardSelected : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <div className={styles.cardTopRow}>
                <span className={styles.cardNum}>{item.number}</span>
                <div className={styles.cardIconBox}>
                  {item.icon}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardSubtitle}>{item.subtitle}</p>
              <p className={styles.cardShortDesc}>{item.description}</p>

              <div className={styles.cardBottom}>
                <span className={styles.cardMetricBadge}>{item.badge}</span>
                <button className={styles.cardSelectBtn}>
                  <span>View Details</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.btnChevron}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
