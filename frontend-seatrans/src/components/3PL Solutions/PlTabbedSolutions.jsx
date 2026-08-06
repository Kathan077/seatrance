"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./PlTabbedSolutions.module.css";

const TAB_DATA = [
  {
    id: "order-fulfillment",
    label: "Order Fulfillment",
    title: "Order Fulfillment",
    subtitle: "Managing Critical Processes For Your Business",
    desc: "At Seatrans, we offer a wide range of 3PL services and 3PL supply chain solutions to meet our clients' diverse needs. Our services cover end-to-end solutions for cargo transport and inventory management, with state-of-the-art infrastructure and top-tier management facilities. Whether you have bulk or small orders, Seatrans ensures efficient and seamless supply chain operations.",
    bulletTitle: "Our Integrated Order-Fulfillment Services Include:",
    bullets: [
      "Packaging, barcode labeling, and invoicing",
      "Primary and secondary regional distribution",
      "Freight forwarding and express dispatch",
      "Real-time inventory tracking and billing management",
    ],
  },
  {
    id: "custom-solutions",
    label: "Custom Tailored Solutions",
    title: "Custom Tailored Solutions",
    subtitle: "Architected For Complex Enterprise Logistics",
    desc: "We understand that every supply chain is unique. Seatrans designs custom 3PL workflows tailored to your specific industry standards, seasonal demand surges, specialized handling rules, and climate requirements. From dedicated bonded warehouse bays to custom API webhooks, we adapt precisely to your operational goals.",
    bulletTitle: "Key Tailored Solutions Feature:",
    bullets: [
      "Custom bonded warehousing and free-zone storage",
      "Dedicated account management and guaranteed SLAs",
      "Specialized temperature-controlled & fragile item handling",
      "Custom WMS workflows and enterprise ERP connectors",
    ],
  },
  {
    id: "direct-delivery",
    label: "Direct Delivery",
    title: "Direct Delivery",
    subtitle: "Streamlined Port-to-Door & Last Mile Transport",
    desc: "Bypass unnecessary handling and warehousing delays with Seatrans Direct Delivery services. We provide seamless cross-docking, container transloading, and dedicated linehaul trucking that moves cargo directly from arrival ports to retail hubs, distribution centers, or customer doorsteps.",
    bulletTitle: "Direct Delivery Capabilities Include:",
    bullets: [
      "Express port-to-door container drayage",
      "Cross-docking with minimal warehouse dwell time",
      "FTL & LTL fleet route optimization",
      "Live GPS telemetry and digital Proof of Delivery (POD)",
    ],
  },
  {
    id: "value-added",
    label: "Value-Added Services",
    title: "Value-Added Services",
    subtitle: "Enhancing Product Value Beyond Standard Logistics",
    desc: "Elevate your brand presence and operational flexibility with our post-manufacturing 3PL value-added services. From custom promotional kitting and quality assurance audits to reverse logistics, we handle intricate post-production tasks inside our tech-enabled warehouse hubs.",
    bulletTitle: "Value-Added Logistics Offerings:",
    bullets: [
      "Custom promotional kitting and gift assembly",
      "Barcoding, serial number tracking, and re-labeling",
      "Reverse logistics, returns inspection, and refurbishing",
      "Quality control audits and specialized protective packaging",
    ],
  },
];

export default function PlTabbedSolutions() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const currentTab = TAB_DATA[activeTabIdx];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Fulfilling Client Requirements With Supply Chain 3PL
          </h2>
        </div>

        {/* Tab Buttons Navigation */}
        <div className={styles.tabsRow}>
          {TAB_DATA.map((tab, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${isActive ? styles.activeTabBtn : ""}`}
                onClick={() => setActiveTabIdx(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Box */}
        <div className={styles.contentBox}>
          {/* Content Header */}
          <div className={styles.contentHeader}>
            <h3 className={styles.contentTitle}>{currentTab.title}</h3>
            <p className={styles.contentSubtitle}>{currentTab.subtitle}</p>
          </div>

          {/* Content Body 2 Columns */}
          <div className={styles.contentGrid}>
            {/* Left Column: Description + CTA */}
            <div className={styles.leftCol}>
              <p className={styles.descText}>{currentTab.desc}</p>
              <Link href="#quote" className={styles.connectBtn}>
                <span>Connect With Us</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 16, height: 16 }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Right Column: Bullets List */}
            <div className={styles.rightCol}>
              <h4 className={styles.bulletTitle}>{currentTab.bulletTitle}</h4>
              <ul className={styles.bulletList}>
                {currentTab.bullets.map((point, index) => (
                  <li key={index} className={styles.bulletItem}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      className={styles.checkIcon}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
