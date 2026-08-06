"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ServicesFAQ.module.css";

const FAQS = [
  {
    q: "What documentation is required for export customs clearance in India?",
    a: "Standard export requirements include the Commercial Invoice, Packing List, Shipping Instruction, Master Bill of Lading (MBL), and GST Invoice. For specialized commodities, Certificate of Origin, FSSAI, or DG Inspection certificates may apply. Our EDI brokers manage end-to-end filing on ICEGATE."
  },
  {
    q: "How does FTWZ (Free Trade Warehousing Zone) duty deferment work?",
    a: "FTWZ allows foreign and domestic companies to import goods into a customs-bonded zone without immediate payment of basic customs duties or GST. Duties are paid only when the goods enter the Domestic Tariff Area (DTA). Re-exported goods pay 0% duty."
  },
  {
    q: "What is included in Door-to-Door (DDP / DAP) shipping services?",
    a: "Our single-window Door-to-Door solution encompasses factory pickup, origin drayage, customs clearance, ocean/air main leg transit, destination port clearance, and final-mile trucking straight to your warehouse loading dock."
  },
  {
    q: "Can you handle oversized, dangerous (DG), or temperature-sensitive cargo?",
    a: "Yes. We operate specialized breakbulk & project cargo teams for heavy equipment, certified Hazmat/DG specialists for chemical freight, and active temperature-monitored reefer containers for pharma and perishable goods."
  }
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 className={styles.title}>Services & Regulatory Clarifications</h2>
          <p className={styles.subtitle}>
            Have questions about customs filing timelines, bonded warehousing rules, or multimodal pricing? 
            Find instant answers below.
          </p>
        </div>

        {/* Accordion */}
        <div className={styles.accordionWrapper}>
          {FAQS.map((faq, idx) => (
            <div key={idx} className={`${styles.accordionItem} ${openIndex === idx ? styles.activeItem : ""}`}>
              <button className={styles.accordionHeader} onClick={() => toggleAccordion(idx)}>
                <span className={styles.questionText}>{faq.q}</span>
                <span className={styles.iconBox}>{openIndex === idx ? "−" : "+"}</span>
              </button>

              {openIndex === idx && (
                <div className={styles.accordionBody}>
                  <p className={styles.answerText}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* High-Converting CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaBadge}>EXPERT CONSULTATION</span>
            <h3 className={styles.ctaTitle}>Need a Customized Logistics & Supply Chain Audit?</h3>
            <p className={styles.ctaDesc}>
              Connect directly with our senior freight forwarding strategists to optimize your tariffs, 
              transit routes, and warehousing infrastructure.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="#quote" className={styles.ctaPrimaryBtn}>
              <span>Request Consultation</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.ctaArrow}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
