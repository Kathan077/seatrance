"use client";

import { useState } from "react";
import styles from "./IndustryComparisonMatrix.module.css";

const COMPARISON_DATA = [
  {
    id: "defense",
    tabLabel: "Defense & Tactical",
    industryName: "Defense Hardware & Tactical Vehicles",
    challenge: "Extreme regulatory scrutiny, strict ITAR compliance, high risk of espionage/theft, and rigid diplomatic timeline constraints.",
    solution: "Dedicated military-certified chartering, armed satellite-tracked escort convoys, 24/7 command center monitoring, and diplomatic pouch paperwork processing.",
    assets: "Heavy lowbed transports, bulletproof escort vehicles, secure bonded airside hangars.",
    kpi: "100% ITAR Compliance | Zero Security Breaches | On-Time Military SLA"
  },
  {
    id: "odc",
    tabLabel: "ODC & Heavy Lift",
    industryName: "Over-Dimensional Cargo (ODC) & Project Power Plant Equipment",
    challenge: "Over-weight structural limits on public roads/bridges, wide cornering radii, port crane capacity constraints, and marine stability during rough seas.",
    solution: "3D CAD turning radius route surveys, Goldhofer multi-axle SPMTs, floating barge crane mobilization, and structural sea-fastening calculations.",
    assets: "24-axle hydraulic trailers, 500T mobile cranes, ocean-going breakbulk barges.",
    kpi: "Max 500T Single Load | 100% Civil Permit Clearance | Zero Deflection Record"
  },
  {
    id: "agro",
    tabLabel: "Agro & Food Cold Chain",
    industryName: "Perishable Food, Seafood & Agro Commodities",
    challenge: "Rapid decay from temperature fluctuations, moisture damage, strict FDA/FSSAI port quarantine delays, and seasonal crop volume surges.",
    solution: "Smart controlled-atmosphere reefer units, active sub-zero telematic sensors, priority port quarantine lane clearances, and flexitank liquid shipping.",
    assets: "Active ThermoKing reefers, ISO flexitanks, port-side cold storage hubs.",
    kpi: "-30°C Deep Freeze | 99.9% Temperature Stability | Express Customs Gate"
  },
  {
    id: "machinery",
    tabLabel: "Machineries & Industrial",
    industryName: "Industrial Manufacturing Machinery & Plant Lines",
    challenge: "Corrosion from sea air, high center-of-gravity tipping risks during vessel motion, and precision calibration damage during transit.",
    solution: "Vacuum foil anti-rust barrier wrapping, custom engineered steel lashing cradles, open-top container stowage, and shock-logging sensors.",
    assets: "Open-top & flat-rack containers, VDI 2700 certified lashing gear, heavy forklifts.",
    kpi: "Zero Corrosion Guarantee | VDI 2700 Lashing Certified | 100% Intact Plant Delivery"
  },
  {
    id: "aerospace",
    tabLabel: "Aerospace & AOG Desk",
    industryName: "Aircraft On Ground (AOG) & Satellite Payload",
    challenge: "Grounded aircraft incurring up to $100K/hour in idle losses, extreme fragility of jet engines, and cleanroom air transport requirements.",
    solution: "24/7 emergency AOG dispatch team, air-ride suspension trucks, hand-carry onboard couriers (OBC), and climate-controlled freighter charters.",
    assets: "Pneumatic air-ride engine trucks, charter freighters, hand-carry dispatch kit.",
    kpi: "< 2 Hour Emergency Dispatch | Zero Shock G-Force Spike | 24/7 Hand-Carry"
  }
];

export default function IndustryComparisonMatrix() {
  const [activeTab, setActiveTab] = useState(COMPARISON_DATA[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={styles.header}>
          <span className={styles.subtitle}>ENGINEERED VALUE MATRIX</span>
          <h2 className={styles.title}>How Seatrans Overcomes Sector Challenges</h2>
          <div className={styles.divider} />
          <p className={styles.leadText}>
            Select an industry below to examine the specific operational risks we eliminate through specialized equipment and strict SLA protocols.
          </p>
        </div>

        {/* Matrix Tab Navigation */}
        <div className={styles.tabsWrapper}>
          {COMPARISON_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item)}
              className={`${styles.tabBtn} ${
                activeTab.id === item.id ? styles.activeTabBtn : ""
              }`}
            >
              {item.tabLabel}
            </button>
          ))}
        </div>

        {/* Dynamic Matrix Comparison Card */}
        <div className={styles.matrixBox}>
          <div className={styles.matrixHeader}>
            <span className={styles.industryTag}>SELECTED SECTOR</span>
            <h3 className={styles.industryTitle}>{activeTab.industryName}</h3>
          </div>

          <div className={styles.gridColumns}>
            {/* Column 1: Vulnerability / Challenge */}
            <div className={styles.colCard} style={{ borderColor: "#fecaca" }}>
              <div className={styles.colHeader} style={{ background: "#fef2f2", color: "#991b1b" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>Industry Risk / Challenge</span>
              </div>
              <div className={styles.colBody}>
                <p>{activeTab.challenge}</p>
              </div>
            </div>

            {/* Column 2: Seatrans Solution */}
            <div className={styles.colCard} style={{ borderColor: "#bfdbfe" }}>
              <div className={styles.colHeader} style={{ background: "#eff6ff", color: "#1e40af" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span>Seatrans Engineered Solution</span>
              </div>
              <div className={styles.colBody}>
                <p>{activeTab.solution}</p>
              </div>
            </div>

            {/* Column 3: Deployed Fleet Assets */}
            <div className={styles.colCard} style={{ borderColor: "#e9d5ff" }}>
              <div className={styles.colHeader} style={{ background: "#faf5ff", color: "#6b21a8" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span>Deployed Fleet & Technology</span>
              </div>
              <div className={styles.colBody}>
                <p>{activeTab.assets}</p>
              </div>
            </div>
          </div>

          {/* Matrix Footer KPI Bar */}
          <div className={styles.kpiBar}>
            <span className={styles.kpiTitle}>GUARANTEED SLA BENCHMARK:</span>
            <span className={styles.kpiValue}>{activeTab.kpi}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
