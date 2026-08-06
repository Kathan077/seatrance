"use client";

import styles from "./PlFulfillmentFlow.module.css";

const STEPS = [
  {
    step: "01",
    title: "Inbound Cargo Receiving",
    desc: "Fast container unloading, barcode scanning, and instant WMS stock registration upon dock arrival.",
    tag: "Dock Ingestion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="6.5" cy="17.5" r="2.5" />
        <circle cx="16.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Smart RFID Placement",
    desc: "Guided placement into high-density ambient or temperature-controlled RFID storage bays.",
    tag: "RFID Storage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 18h6" />
        <path d="M9 14h6" />
        <path d="M9 10h6" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Precision Pick & Pack",
    desc: "API-triggered order routing with pick-to-light validation for 99.98% pick accuracy.",
    tag: "Pick & Pack",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Custom Branding & Audit",
    desc: "Weight-scale double check, custom eco-packaging, insert cards, and serial verification.",
    tag: "Quality Audit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Express Carrier Hand-off",
    desc: "Automated multi-carrier dispatch (FedEx, DHL, UPS) with same-day order hand-off.",
    tag: "Express Dispatch",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 4v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function PlFulfillmentFlow() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>SIMPLE & FAST PIPELINE</div>
          <h2 className={styles.title}>
            How Our 3PL <span className={styles.blueAccent}>Fulfillment Flow Works</span>
          </h2>
          <p className={styles.subtext}>
            From dock receiving to express doorstep dispatch — a seamless 5-step automated logistics engine.
          </p>
        </div>

        {/* 5-Step Simple Card Grid */}
        <div className={styles.grid}>
          {STEPS.map((item) => (
            <div key={item.step} className={styles.card}>
              {/* Card Header: Step Number & Icon */}
              <div className={styles.cardTop}>
                <span className={styles.stepNumber}>{item.step}</span>
                <div className={styles.iconBox}>{item.icon}</div>
              </div>

              {/* Card Content */}
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>

              {/* Bottom Tag Pill */}
              <div className={styles.cardTag}>{item.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
