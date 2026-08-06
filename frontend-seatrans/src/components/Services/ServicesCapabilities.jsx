"use client";

import styles from "./ServicesCapabilities.module.css";

const CAPABILITIES = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "AEO & IATA Certified Compliance",
    desc: "Authorized Economic Operator (AEO) tier status providing priority customs clearance and expedited border processing worldwide."
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "FTWZ Duty Deferment Advantage",
    desc: "Store and re-export high-value inventory in Free Trade Warehousing Zones with 0% upfront import duties or taxes."
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Single-Window Bill of Lading",
    desc: "One single accountable transport document covering factory pickup, ocean voyage, customs, and final door delivery."
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "24/7 Critical Freight Control Tower",
    desc: "Round-the-clock live operational desk providing proactive exception handling, rerouting, and real-time status dispatch."
  }
];



export default function ServicesCapabilities() {
  return (
    <section className={styles.capabilitiesSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>WHY SEATRANS LOGISTICS</span>
          <h2 className={styles.title}>Engineered for Uncompromising Global Trade</h2>
          <p className={styles.subtitle}>
            We combine licensed regulatory expertise, bonded infrastructure, and deep maritime partnerships 
            to protect your supply chain from costly delays.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className={styles.grid}>
          {CAPABILITIES.map((cap) => (
            <div key={cap.id} className={styles.card}>
              <div className={styles.iconCircle}>{cap.icon}</div>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
