"use client";

import { useState } from "react";
import styles from "./ServicesFlow.module.css";

const FLOW_STEPS = [
  {
    step: "01",
    phase: "Origin Pickup",
    title: "Booking & Factory Drayage",
    desc: "Instant booking confirmation, container allocation, and GPS-monitored truck dispatch to your factory for origin loading.",
    badge: "Origin Stage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="6.5" cy="17.5" r="2.5" />
        <circle cx="16.5" cy="17.5" r="2.5" />
      </svg>
    )
  },
  {
    step: "02",
    phase: "Quality Audit",
    title: "Stuffing & Weight Verification",
    desc: "Precision cargo stuffing, Verified Gross Mass (VGM) weighing, tamper-evident seal application, and pre-carriage inspection.",
    badge: "Port Gate-In",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    step: "03",
    phase: "Regulatory",
    title: "Export Customs & EDI Clearance",
    desc: "Automated Shipping Bill filing on ICEGATE, HS Code audit, DG cargo approvals, and rapid Let Export Order (LEO) release.",
    badge: "Customs Cleared",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    )
  },
  {
    step: "04",
    phase: "Main Leg Transit",
    title: "Vessel / Flight Loading & Departure",
    desc: "Container loading onto ocean vessel or air cargo freighter with Master Bill of Lading (MBL) issuance and departure dispatch.",
    badge: "In Transit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a6 6 0 0 0 12 0 6 6 0 0 1 10 0" />
        <path d="M4 17l2-7h12l2 7" />
        <path d="M12 3v7" />
      </svg>
    )
  },
  {
    step: "05",
    phase: "Warehousing & Telemetry",
    title: "FTWZ Storage & IoT Live Tracking",
    desc: "Optional duty-deferred storage in Free Trade Warehousing Zones or 24/7 satellite GPS tracking with temperature monitoring.",
    badge: "Bonded / Telemetry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 18h6" />
      </svg>
    )
  },
  {
    step: "06",
    phase: "Final Mile",
    title: "Destination Customs & Door Delivery",
    desc: "Destination import customs clearance, duty settlement, final mile trucking, and white-glove doorstep unloading.",
    badge: "Delivered",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
];

export default function ServicesFlow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={styles.flowSection} id="service-flow">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badgeWrapper}>
            <span>END-TO-END EXECUTION LIFECYCLE</span>
          </div>
          <h2 className={styles.title}>
            Transparent 6-Step Service Execution Flow
          </h2>
          <p className={styles.subtitle}>
            From factory pickup to international customs clearance and final doorstep delivery, 
            every milestone is digitally tracked and managed with single-window accountability.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className={styles.stepPillsRow}>
          {FLOW_STEPS.map((s, idx) => (
            <button
              key={s.step}
              className={`${styles.stepPill} ${activeStep === idx ? styles.activePill : ""}`}
              onClick={() => setActiveStep(idx)}
            >
              <span className={styles.pillNum}>{s.step}</span>
              <span className={styles.pillText}>{s.phase}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Highlight Box */}
        <div className={styles.stageHighlightCard}>
          <div className={styles.stageTopRow}>
            <div className={styles.stageLeftHeader}>
              <div className={styles.stageIconBox}>
                {FLOW_STEPS[activeStep].icon}
              </div>
              <div>
                <span className={styles.stagePhaseLabel}>STAGE {FLOW_STEPS[activeStep].step} — {FLOW_STEPS[activeStep].phase.toUpperCase()}</span>
                <h3 className={styles.stageTitle}>{FLOW_STEPS[activeStep].title}</h3>
              </div>
            </div>
            <span className={styles.stageBadge}>{FLOW_STEPS[activeStep].badge}</span>
          </div>

          <p className={styles.stageDesc}>{FLOW_STEPS[activeStep].desc}</p>
        </div>

        {/* 6-Step Timeline Grid */}
        <div className={styles.flowGrid}>
          {FLOW_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className={`${styles.flowCard} ${activeStep === index ? styles.cardActive : ""}`}
              onClick={() => setActiveStep(index)}
            >
              <div className={styles.flowCardTop}>
                <span className={styles.stepCircle}>{stepItem.step}</span>
                <div className={styles.miniIcon}>{stepItem.icon}</div>
              </div>

              <h4 className={styles.flowCardTitle}>{stepItem.title}</h4>
              <p className={styles.flowCardDesc}>{stepItem.desc}</p>

              <div className={styles.flowCardFooter}>
                <span className={styles.footerBadge}>{stepItem.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
