"use client";

import { useState } from "react";
import styles from "./ODCSpecialFeature.module.css";

const ODC_CARGO_TYPES = [
  {
    id: "transformer",
    name: "500T Power Transformer",
    category: "Heavy Electrical Grid",
    weight: "485 Metric Tons",
    dims: "14.2m L × 5.8m W × 6.4m H",
    trailer: "24-Axle Goldhofer SPMT Modular Hydralic Axles",
    vessel: "Heavy Lift Vessel (2x 350T Tandem Crane)",
    permits: "State Highway Department & Civil Bridge Clearances",
    lashing: "Grade 100 Heavy Lashing Chains + Friction Rubber Mats",
    icon: "⚡"
  },
  {
    id: "windturbine",
    name: "75m Wind Turbine Blade",
    category: "Renewable Energy",
    weight: "32 Metric Tons",
    dims: "75.4m L × 4.2m W × 3.8m H",
    trailer: "Telescopic Blade Lifter Trailer with 60° Inclination",
    vessel: "Flat Rack Multi-Purpose Vessel",
    permits: "Wide-Sweep Cornering Route Survey & Overhead Wire Clearance",
    lashing: "Custom Fiberglass Root Cradles & Dynamic Tip Supports",
    icon: "🌀"
  },
  {
    id: "refinery",
    name: "Petrochemical Reactor Column",
    category: "Oil & Gas Industrial",
    weight: "320 Metric Tons",
    dims: "42.0m L × 6.2m W × 5.9m H",
    trailer: "Dual Bolster Turn-Table Trailer Assembly",
    vessel: "Chartered Ocean Breakbulk Carrier",
    permits: "Port Gantry Crane Slinging & Sea-Fastening Cert",
    lashing: "Structural Steel Saddle Welded to Vessel Deck",
    icon: "🏗️"
  },
  {
    id: "defense",
    name: "Armored Defense Combat Vehicle",
    category: "Tactical Military",
    weight: "68 Metric Tons",
    dims: "9.8m L × 3.6m W × 3.2m H",
    trailer: "Heavy Duty Drop-Deck Lowbed Trailer",
    vessel: "Roll-on / Roll-off (RoRo) High-Deck Carrier",
    permits: "Diplomatic Transit Clearance & Armed Guard Escort",
    lashing: "MIL-STD Shackles & High-Tension Wire Ropes",
    icon: "🛡️"
  }
];

export default function ODCSpecialFeature() {
  const [selectedCargo, setSelectedCargo] = useState(ODC_CARGO_TYPES[0]);

  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.odcBadge}>
            <span className={styles.warningIcon}>⚠️</span>
            <span>SPECIALIZED HEAVY LIFT DIVISION</span>
          </div>
          <h2 className={styles.title}>Over Dimensional Cargo (ODC) Engineering</h2>
          <p className={styles.leadText}>
            Moving extra-heavy, out-of-gauge (OOG) machinery requires extreme engineering, custom civil route clearance, and specialized multi-axle modular trailers.
          </p>
        </div>

        {/* Interactive Cargo Simulator Panel */}
        <div className={styles.simulatorWrapper}>
          <div className={styles.selectorSidebar}>
            <h3 className={styles.sidebarTitle}>Select Heavy Cargo Profile:</h3>
            <div className={styles.cargoList}>
              {ODC_CARGO_TYPES.map((cargo) => (
                <button
                  key={cargo.id}
                  onClick={() => setSelectedCargo(cargo)}
                  className={`${styles.cargoBtn} ${
                    selectedCargo.id === cargo.id ? styles.activeCargoBtn : ""
                  }`}
                >
                  <span className={styles.cargoIcon}>{cargo.icon}</span>
                  <div className={styles.cargoMeta}>
                    <span className={styles.cargoName}>{cargo.name}</span>
                    <span className={styles.cargoCat}>{cargo.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.displayPanel}>
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.panelBadge}>{selectedCargo.category}</span>
                <h3 className={styles.panelTitle}>{selectedCargo.name}</h3>
              </div>
              <div className={styles.weightBadge}>
                <span className={styles.weightLabel}>TOTAL WEIGHT</span>
                <span className={styles.weightValue}>{selectedCargo.weight}</span>
              </div>
            </div>

            <div className={styles.specGrid}>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>CARGO DIMENSIONS</span>
                <span className={styles.specVal}>{selectedCargo.dims}</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>HEAVY TRANSPORT ASSET</span>
                <span className={styles.specVal}>{selectedCargo.trailer}</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>VESSEL & OCEAN CHARTER</span>
                <span className={styles.specVal}>{selectedCargo.vessel}</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>LASHING & SECURING PLAN</span>
                <span className={styles.specVal}>{selectedCargo.lashing}</span>
              </div>
            </div>

            <div className={styles.permitFooter}>
              <div className={styles.permitIcon}>📜</div>
              <div>
                <strong>Civil Permitting & Compliance:</strong>
                <p>{selectedCargo.permits}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stage ODC Project Execution Lifecycle */}
        <div className={styles.lifecycleGrid}>
          <div className={styles.lifeStep}>
            <div className={styles.stepNum}>01</div>
            <h4 className={styles.stepTitle}>Route Feasibility Survey</h4>
            <p className={styles.stepDesc}>3D CAD turning radius simulation, bridge load capacity testing, and utility line height clearance permits.</p>
          </div>
          <div className={styles.lifeStep}>
            <div className={styles.stepNum}>02</div>
            <h4 className={styles.stepTitle}>Civil & Marine Engineering</h4>
            <p className={styles.stepDesc}>Custom steel cradle fabrication, sea-fastening calculations, and port crane sling rigging schematics.</p>
          </div>
          <div className={styles.lifeStep}>
            <div className={styles.stepNum}>03</div>
            <h4 className={styles.stepTitle}>Hydraulic Axle Mobilization</h4>
            <p className={styles.stepDesc}>Deployment of Goldhofer SPMTs, police escort vehicles, and real-time tilt sensor monitoring.</p>
          </div>
          <div className={styles.lifeStep}>
            <div className={styles.stepNum}>04</div>
            <h4 className={styles.stepTitle}>Jacking & Pad Placement</h4>
            <p className={styles.stepDesc}>On-site hydraulic jacking and precise alignment onto foundation pads at power plants or factories.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
