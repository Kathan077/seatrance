"use client";

import Link from "next/link";
import styles from "./IndustriesCTA.module.css";

export default function IndustriesCTA() {
  const handleOpenQuote = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openQuoteModal"));
    }
  };

  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.container}>
        <div className={styles.ctaCard}>
          <div className={styles.ambientGlow} />
          
          <div className={styles.content}>
            <div className={styles.badgeWrap}>
              <span className={styles.pulseDot} />
              <span className={styles.badgeText}>READY TO SHIP CRITICAL CARGO?</span>
            </div>

            <h2 className={styles.title}>
              Engineered Industry Logistics Built for <br />
              <span className={styles.highlightText}>Uncompromising Velocity & Safety</span>
            </h2>

            <p className={styles.desc}>
              Whether you are moving heavy power plant machinery, ITAR defense hardware, or sub-zero perishable food supplies, Seatrans project cargo engineers are on standby 24/7.
            </p>

            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>24/7 Telematics Desk</span>
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>ITAR & GDP Certified</span>
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>50+ Global Port Corridors</span>
              </div>
            </div>

            <div className={styles.btnGroup}>
              <button onClick={handleOpenQuote} className={styles.primaryBtn}>
                <span>Request Custom Sector Proposal</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnArrow}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <Link href="/contactus" className={styles.secondaryBtn}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.phoneIcon}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Speak with Sector Specialist</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
