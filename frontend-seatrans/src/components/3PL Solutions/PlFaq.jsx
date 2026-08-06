"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PlFaq.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqData = [
  {
    q: "How fast can Seatrans integrate with our existing ERP or E-commerce store?",
    a: "We offer instant 1-click webhooks for Shopify, Amazon, WooCommerce, and Magento. For enterprise ERPs (SAP S/4HANA, NetSuite, Oracle, Microsoft Dynamics), our dedicated engineering team completes custom EDI/API integration within 5 to 7 business days."
  },
  {
    q: "What is your order dispatch SLA and cut-off time?",
    a: "All orders ingested before 18:00 EST are guaranteed to be picked, packed, and handed off to express linehaul carriers on the exact same day with a verified 99.98% accuracy rate."
  },
  {
    q: "Do you support temperature-controlled and bonded warehousing?",
    a: "Yes. Seatrans operates GDP & FDA certified cold storage facilities ranging from -20°C deep freeze to +25°C ambient, alongside customs-bonded free trade zones for tax-efficient international transloading."
  },
  {
    q: "How are inventory accuracy and returns managed?",
    a: "Every unit is tracked via RFID tags and automated barcode checkpoints. Returns are processed on arrival: inspected, graded, refurbished, restocked into active WMS inventory, and synced to your storefront within 24 hours."
  },
  {
    q: "Is there a minimum volume requirement to start 3PL with Seatrans?",
    a: "We cater to both scaling digital-native brands (starting from 100 orders/month) and Fortune 500 enterprise networks moving thousands of pallets monthly. Our pricing scales dynamically with your volume."
  }
];

export default function PlFaq() {
  const [openIdx, setOpenIdx] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>3PL FAQ</div>
          <h2 className={styles.title}>
            Frequently Asked <span className={styles.blueAccent}>Questions</span>
          </h2>
          <p className={styles.subtext}>
            Everything you need to know about migrating your logistics to Seatrans 3PL ecosystem.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className={styles.faqList}>
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqCard} ${isOpen ? styles.cardOpen : ""}`}
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              >
                <div className={styles.questionRow}>
                  <h3 className={styles.questionText}>{item.q}</h3>
                  <div className={`${styles.toggleCircle} ${isOpen ? styles.circleActive : ""}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.toggleSvg}>
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <div className={styles.answerBox}>
                    <p className={styles.answerText}>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Consultation CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaLeft}>
            <span className={styles.ctaBadge}>ENTERPRISE 3PL CONSULTATION</span>
            <h3 className={styles.ctaTitle}>Ready to Accelerate Your Supply Chain Velocity?</h3>
            <p className={styles.ctaDesc}>
              Connect with a Senior Seatrans Logistics Engineer to receive a custom 3PL blueprint, warehouse layout, and SLA audit.
            </p>
          </div>
          <div className={styles.ctaRight}>
            <Link href="#quote" className={styles.primaryCtaBtn}>
              <span>Schedule 1-on-1 Audit</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnSvg}>
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
