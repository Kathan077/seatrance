"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ServicesCalculator.module.css";

const PORTS_DATA = [
  { code: "INNSA", name: "Nhava Sheva (Mumbai), India" },
  { code: "INMAA", name: "Chennai Port, India" },
  { code: "CNSHA", name: "Shanghai Port, China" },
  { code: "NLRTM", name: "Port of Rotterdam, Netherlands" },
  { code: "DEHAM", name: "Port of Hamburg, Germany" },
  { code: "AEDXB", name: "Jebel Ali (Dubai), UAE" },
  { code: "USLAX", name: "Port of Los Angeles, USA" },
  { code: "SGSIN", name: "Port of Singapore, Singapore" }
];

export default function ServicesCalculator() {
  const [serviceType, setServiceType] = useState("ocean-fcl");
  const [origin, setOrigin] = useState("INNSA");
  const [destination, setDestination] = useState("NLRTM");
  const [weight, setWeight] = useState(2500); // kg
  const [volume, setVolume] = useState(12); // CBM

  // Dynamic estimate calculation
  const getRateEstimate = () => {
    let baseRate = 850;
    if (serviceType === "ocean-fcl") baseRate = 1850;
    if (serviceType === "air-express") baseRate = 3200;
    if (serviceType === "ftwz-bonded") baseRate = 950;
    if (serviceType === "customs-drayage") baseRate = 650;

    const weightFactor = (weight / 1000) * 85;
    const volumeFactor = volume * 45;
    const estCost = Math.round(baseRate + weightFactor + volumeFactor);
    const estDays = serviceType === "air-express" ? "3 - 5 Days" : "18 - 24 Days";

    return { estCost, estDays };
  };

  const { estCost, estDays } = getRateEstimate();

  return (
    <section className={styles.calculatorSection}>
      <div className={styles.container}>
        <div className={styles.calcCard}>
          {/* Left Grid: Interactive Form */}
          <div className={styles.calcLeft}>
            <div className={styles.calcBadge}>
              <span>INSTANT ESTIMATOR</span>
            </div>
            <h2 className={styles.calcTitle}>Calculate Your Freight & Shipping Cost</h2>
            <p className={styles.calcDesc}>
              Select your mode of transport, origin, destination, and cargo dimensions to generate 
              an instant operational estimate.
            </p>

            {/* Service Mode Buttons */}
            <div className={styles.modeGrid}>
              <button
                className={`${styles.modeBtn} ${serviceType === "ocean-fcl" ? styles.activeMode : ""}`}
                onClick={() => setServiceType("ocean-fcl")}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.modeIcon}>
                  <path d="M2 20a6 6 0 0 0 12 0 6 6 0 0 1 10 0" />
                  <path d="M4 17l2-7h12l2 7" />
                  <path d="M12 3v7" />
                </svg>
                <span>Ocean FCL / LCL</span>
              </button>

              <button
                className={`${styles.modeBtn} ${serviceType === "air-express" ? styles.activeMode : ""}`}
                onClick={() => setServiceType("air-express")}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.modeIcon}>
                  <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.3-1.8 1.1l-.3 1.2c-.2.7.2 1.5.9 1.8l5.4 2.7-3.4 3.4-2.8-.7c-.4-.1-.9.1-1.1.5l-.5.7c-.3.4-.2 1 .2 1.3l2.8 2.1 2.1 2.8c.3.4.9.5 1.3.2l.7-.5c.4-.2.6-.7.5-1.1l-.7-2.8 3.4-3.4 2.7 5.4c.3.7 1.1 1.1 1.8.9l1.2-.3c.8-.2 1.3-1 1.1-1.8z" />
                </svg>
                <span>Air Freight</span>
              </button>

              <button
                className={`${styles.modeBtn} ${serviceType === "ftwz-bonded" ? styles.activeMode : ""}`}
                onClick={() => setServiceType("ftwz-bonded")}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.modeIcon}>
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                </svg>
                <span>FTWZ Warehousing</span>
              </button>

              <button
                className={`${styles.modeBtn} ${serviceType === "customs-drayage" ? styles.activeMode : ""}`}
                onClick={() => setServiceType("customs-drayage")}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.modeIcon}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Customs & Drayage</span>
              </button>
            </div>

            {/* Origin / Destination Row */}
            <div className={styles.routeGroup}>
              <div className={styles.fieldBox}>
                <label className={styles.fieldLabel}>Origin Port / Hub</label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className={styles.selectInput}
                >
                  {PORTS_DATA.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.fieldBox}>
                <label className={styles.fieldLabel}>Destination Port / Hub</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className={styles.selectInput}
                >
                  {PORTS_DATA.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sliders Grid */}
            <div className={styles.sliderGrid}>
              <div className={styles.sliderBox}>
                <div className={styles.sliderLabelRow}>
                  <span>Gross Cargo Weight</span>
                  <span className={styles.sliderVal}>{weight.toLocaleString()} kg</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="25000"
                  step="100"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className={styles.rangeSlider}
                />
              </div>

              <div className={styles.sliderBox}>
                <div className={styles.sliderLabelRow}>
                  <span>Total Volume</span>
                  <span className={styles.sliderVal}>{volume} CBM</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className={styles.rangeSlider}
                />
              </div>
            </div>
          </div>

          {/* Right Grid: Result Summary Card */}
          <div className={styles.calcRight}>
            <div className={styles.summaryBox}>
              <span className={styles.summaryBadge}>ESTIMATED FREIGHT RATE</span>
              <div className={styles.priceRow}>
                <span className={styles.currency}>$</span>
                <h3 className={styles.priceVal}>{estCost.toLocaleString()}</h3>
                <span className={styles.unit}>USD*</span>
              </div>
              <p className={styles.priceNotice}>
                *Includes origin handling, vessel ocean slot, and estimated bunker surcharge.
              </p>

              <div className={styles.dividerLine} />

              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Transit Duration</span>
                  <span className={styles.metaVal}>{estDays}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Carbon Footprint</span>
                  <span className={styles.metaVal}>Low Emission (IMO 2026)</span>
                </div>
              </div>

              <Link href="#quote" className={styles.calcCtaBtn}>
                <span>Lock In This Rate & Book</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnArrow}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <div className={styles.guaranteeRow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.shieldIcon}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Zero Hidden Surcharges & Guaranteed Vessel Slot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
