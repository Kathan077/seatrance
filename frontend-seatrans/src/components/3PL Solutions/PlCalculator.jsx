"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PlCalculator.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PlCalculator() {
  const [cargoType, setCargoType] = useState("ambient"); // ambient, cold, ecom
  const [volume, setVolume] = useState(500); // 50 to 5000
  const [hasKitting, setHasKitting] = useState(true);
  const [hasReturns, setHasReturns] = useState(true);
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

  // Price Calculation Logic
  const baseRates = {
    ambient: 18, // per pallet/month
    cold: 36,
    ecom: 1.25, // per order
  };

  const unitRate = baseRates[cargoType];
  const rawCost = volume * unitRate;
  const kittingFee = hasKitting ? volume * 0.15 : 0;
  const returnsFee = hasReturns ? volume * 0.10 : 0;

  const estimatedTotal = Math.round(rawCost + kittingFee + returnsFee);
  const savingsPct = cargoType === "cold" ? 32 : cargoType === "ecom" ? 28 : 25;
  const estimatedSavings = Math.round(estimatedTotal * (savingsPct / 100));

  return (
    <section ref={sectionRef} id="3pl-calculator" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>INTERACTIVE ESTIMATOR</div>
          <h2 className={styles.title}>
            Calculate Your <span className={styles.blueAccent}>3PL Efficiency & Savings</span>
          </h2>
          <p className={styles.subtext}>
            Select your storage requirements to estimate monthly fulfillment efficiency and potential cost optimization with Seatrans 3PL.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className={styles.calcBox}>
          {/* Left Inputs */}
          <div className={styles.calcLeft}>
            {/* Storage Category */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>1. Select Cargo & Storage Type</label>
              <div className={styles.typeGrid}>
                <button
                  className={`${styles.typeBtn} ${cargoType === "ambient" ? styles.typeActive : ""}`}
                  onClick={() => setCargoType("ambient")}
                >
                  <span className={styles.typeIcon}>📦</span>
                  <span className={styles.typeName}>Ambient Warehousing</span>
                  <span className={styles.typeSub}>High-Density RFID Racking</span>
                </button>

                <button
                  className={`${styles.typeBtn} ${cargoType === "cold" ? styles.typeActive : ""}`}
                  onClick={() => setCargoType("cold")}
                >
                  <span className={styles.typeIcon}>❄️</span>
                  <span className={styles.typeName}>Cold Chain Storage</span>
                  <span className={styles.typeSub}>-20°C to +25°C GDP Chamber</span>
                </button>

                <button
                  className={`${styles.typeBtn} ${cargoType === "ecom" ? styles.typeActive : ""}`}
                  onClick={() => setCargoType("ecom")}
                >
                  <span className={styles.typeIcon}>⚡</span>
                  <span className={styles.typeName}>E-commerce Parcel Pick</span>
                  <span className={styles.typeSub}>High-Velocity Omnichannel</span>
                </button>
              </div>
            </div>

            {/* Volume Range Slider */}
            <div className={styles.fieldGroup}>
              <div className={styles.sliderHeader}>
                <label className={styles.fieldLabel}>
                  2. Monthly Volume ({cargoType === "ecom" ? "Orders" : "Pallets"})
                </label>
                <span className={styles.sliderVal}>
                  {volume.toLocaleString()} {cargoType === "ecom" ? "Orders/mo" : "Pallets/mo"}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.sliderMinMax}>
                <span>100</span>
                <span>2,500</span>
                <span>5,000+</span>
              </div>
            </div>

            {/* Value Added Services */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>3. Value-Added Services</label>
              <div className={styles.toggleRow}>
                <label className={styles.checkboxCard}>
                  <input
                    type="checkbox"
                    checked={hasKitting}
                    onChange={(e) => setHasKitting(e.target.checked)}
                  />
                  <span>Custom Kitting & Unboxing Prep</span>
                </label>

                <label className={styles.checkboxCard}>
                  <input
                    type="checkbox"
                    checked={hasReturns}
                    onChange={(e) => setHasReturns(e.target.checked)}
                  />
                  <span>Automated Returns Management</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Results Summary */}
          <div className={styles.calcRight}>
            <div className={styles.resultBadge}>ESTIMATED MONTHLY SUMMARY</div>

            <div className={styles.priceRow}>
              <span className={styles.priceCurrency}>$</span>
              <span className={styles.priceBig}>{estimatedTotal.toLocaleString()}</span>
              <span className={styles.priceUnit}>/ month</span>
            </div>

            <div className={styles.savingsCard}>
              <div className={styles.savingsIcon}>📈</div>
              <div className={styles.savingsInfo}>
                <span className={styles.savingsTitle}>Estimated Cost Savings</span>
                <span className={styles.savingsVal}>
                  ~ ${estimatedSavings.toLocaleString()} / mo ({savingsPct}% Reduction)
                </span>
              </div>
            </div>

            {/* Breakdown List */}
            <div className={styles.breakdownList}>
              <div className={styles.bRow}>
                <span>Base Fulfillment SLA</span>
                <span className={styles.bVal}>99.98% Guaranteed</span>
              </div>
              <div className={styles.bRow}>
                <span>Dispatch Speed</span>
                <span className={styles.bVal}>Same-Day Cutoff (18:00)</span>
              </div>
              <div className={styles.bRow}>
                <span>WMS API Integration</span>
                <span className={styles.bVal}>Included Free</span>
              </div>
            </div>

            <a href="#quote" className={styles.ctaBtn}>
              <span>Get Formal 3PL Proposal</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.ctaSvg}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
