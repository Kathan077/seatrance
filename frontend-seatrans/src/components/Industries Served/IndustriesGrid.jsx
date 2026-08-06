"use client";

import { useState, useRef } from "react";
import IndustryModal from "./IndustryModal";
import styles from "./IndustriesGrid.module.css";

export const INDUSTRIES_DATA = [
  {
    id: "defense",
    category: "Defense & Heavy Tech",
    tag: "ITAR & MIL-SPEC",
    title: "Defense & Tactical Logistics",
    description: "Secure cross-border logistics for sensitive military equipment, defense hardware, tactical vehicles, and classified charter shipments.",
    detailedDesc: "Seatrans provides end-to-end ITAR-compliant defense logistics. We operate high-security military-certified air chartering, heavy-duty armored vehicle transport, specialized ammunition packaging, and diplomatic clearance protocols across 50+ sovereign jurisdictions.",
    accentColor: "#38bdf8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M8 12h8" strokeWidth="1.5" />
      </svg>
    ),
    capabilities: [
      "ITAR & Diplomatic Customs Clearance",
      "Dedicated High-Security Air & Sea Charters",
      "Armored Vehicle & Ordnance Transport",
      "24/7 Armed Escort & Satellite Telematics"
    ],
    standards: ["ITAR Certified", "MIL-STD-810H", "Diplomatic Permit Approved"],
    equipment: "Heavy-duty lowbed trailers, bulletproof escort vehicles, temperature-controlled ammunition containers.",
    stats: [
      { value: "100%", label: "ITAR Compliance Rate" },
      { value: "24/7", label: "Armed Telematics Watch" },
      { value: "45+", label: "Military Ports Served" }
    ]
  },
  {
    id: "odc",
    category: "ODC & Machinery",
    tag: "OVER-DIMENSIONAL CARGO",
    title: "ODC Handling & Project Cargo",
    description: "Specialized movement of super-heavy machinery, power transformers, oil rig components, and over-dimensional project cargo.",
    detailedDesc: "Our Project Cargo Division specializes in executing high-tonnage, non-standard dimensional freight. From route survey and bridge load analysis to multi-axle hydraulic trailer mobilization and floating barge crane operations, we handle cargo up to 500+ Metric Tons.",
    accentColor: "#f59e0b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    capabilities: [
      "Bridge Load Analysis & Civil Route Clearance",
      "Multi-Axle Hydraulic Modular Trailer Deployment",
      "Heavy Lift Vessel & Floating Crane Chartering",
      "On-Site Crane Rigging & Jacking-to-Foundation"
    ],
    standards: ["ISO 9001:2015", "Heavy Lift Sling Certified", "State Highway Permitted"],
    equipment: "Goldhofer multi-axle modular trailers, SPMTs, 500T mobile cranes, flat-rack containers.",
    stats: [
      { value: "500T+", label: "Max Single Piece Weight" },
      { value: "1,200+", label: "ODC Routes Surveyed" },
      { value: "Zero", label: "Structural Damage Record" }
    ]
  },
  {
    id: "food",
    category: "Agro & Cold Chain",
    tag: "COLD CHAIN GDP",
    title: "Food & Perishable Logistics",
    description: "Temperature-regulated cold chain solutions for seafood, frozen poultry, dairy, produce, and processed food products.",
    detailedDesc: "Seatrans operates advanced cold chain corridors powered by smart reefer containers equipped with real-time temperature loggers and humidity controls. We ensure unbroken cold chain integrity from farm/processing facility to global consumer shelves.",
    accentColor: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    capabilities: [
      "Sub-Zero to Ambient Thermo-Regulated Reefer Units",
      "Phytosanitary & Food Safety Health Clearance",
      "Port Side Priority Reefer Plug-in Infrastructure",
      "Controlled Atmosphere (CA) Container Shipping"
    ],
    standards: ["GDP Compliant", "HACCP Certified", "FSSAI & FDA Cleared"],
    equipment: "Active ThermoKing Smart Reefers, Gensets, Cold Storage Bonded Hubs.",
    stats: [
      { value: "-30°C", label: "Max Deep Freeze Temp" },
      { value: "99.9%", label: "Temp Stability Record" },
      { value: "Express", label: "Port Quarantine Pass" }
    ]
  },
  {
    id: "machinery",
    category: "ODC & Machinery",
    tag: "HEAVY INDUSTRIAL",
    title: "Industrial Machinery & Equipment",
    description: "Precision shipping for CNC machines, industrial presses, manufacturing assembly lines, and heavy plant equipment.",
    detailedDesc: "Moving high-value manufacturing machinery requires custom anti-vibration lashing, moisture-proof vacuum foil packaging, and specialized open-top/flat-rack containerization. Seatrans handles complete factory plant relocations across sea and land corridors.",
    accentColor: "#1e65b3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    capabilities: [
      "Vacuum Foil & Anti-Corrosion Seaworthy Packaging",
      "Factory Dismantling & Plant Relocation Project Management",
      "Custom Steel Cradle & Wooden Dunnage Lashing",
      "Open-Top & High-Cube Container Stowage"
    ],
    standards: ["VDI 2700 Cargo Securing", "ISPM-15 Wood Stamped", "CE Compliant"],
    equipment: "Open-top containers, flat racks, heavy forklifts, hydraulic gantry systems.",
    stats: [
      { value: "450+", label: "Factory Plants Relocated" },
      { value: "Zero", label: "Moisture / Rust Claims" },
      { value: "100%", label: "Lashing Cert Compliance" }
    ]
  },
  {
    id: "agro",
    category: "Agro & Cold Chain",
    tag: "BULK & GRAIN",
    title: "Agro Commodities & Grains",
    description: "High-volume bulk shipping, containerized agricultural products, grains, spices, sugar, and cotton global trading logistics.",
    detailedDesc: "Seatrans facilitates seamless export and import of agricultural commodities. We offer ISO flexitanks for liquid agro products (oils/juices), liner bags for bulk grain containerization, and dedicated breakbulk chartered vessels for mega agro shipments.",
    accentColor: "#84cc16",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M8 11s1.5 2 4 2 4-2 4-2" />
        <path d="M9 15s1.5 2 3 2 3-2 3-2" />
      </svg>
    ),
    capabilities: [
      "Bulk Grain Liner Bag Containerization",
      "ISO Flexitank Liquid Agro Transport (Edible Oils)",
      "Fumigation & Port Grain Elevator Management",
      "Bespoke Seasonal Crop Surge Capacity Booking"
    ],
    standards: ["GAFTA & FOSFA Standards", "ISO 22000", "Phytosanitary Protocol"],
    equipment: "Flexitanks, Dry Bulk Liner Bags, Grain Hopper Trailers, Bulk Vessels.",
    stats: [
      { value: "2.5M", label: "Tons Agro Goods Moved" },
      { value: "ISO", label: "Flexitank Certified" },
      { value: "24h", label: "Fast Fumigation Clear" }
    ]
  },
  {
    id: "aerospace",
    category: "Defense & Heavy Tech",
    tag: "AEROSPACE & AOG",
    title: "Aerospace & Aviation Cargo",
    description: "Aircraft On Ground (AOG) emergency parts delivery, jet engine transportation, turbine logistics, and satellite payload transport.",
    detailedDesc: "When an aircraft is grounded, every minute costs thousands. Seatrans operates an emergency 24/7 AOG desk with hand-carry onboard couriers, dedicated charter flights, and specialized air-ride shock-absorbing trailers for delicate jet engines and space avionics.",
    accentColor: "#06b6d4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.6-.1-1.2.1-1.5.6l-1 1.5c-.3.4-.2 1 .2 1.3L8 14.5l-3.5 3.5-2.5-.5c-.4-.1-.8.1-1 .5l-.5 1c-.2.4 0 .9.4 1.1l3.5 2 2 3.5c.2.4.7.6 1.1.4l1-.5c.4-.2.6-.6.5-1l-.5-2.5 3.5-3.5 4.5 5c.3.4.9.5 1.3.2l1.5-1c.5-.3.7-.9.6-1.5z" />
      </svg>
    ),
    capabilities: [
      "24/7 Dedicated AOG Emergency Response Desk",
      "Air-Ride Shock Absorbing Engine Transport",
      "Hand-Carry On-Board Courier (OBC) Dispatch",
      "Cleanroom-grade Satellite Payload Logistics"
    ],
    standards: ["IATA Cargo Agent", "AOG 2-Hour Dispatch", "Traceable Telematics"],
    equipment: "Engine cradles, climate-controlled shock trucks, air freighter charters.",
    stats: [
      { value: "< 2 Hrs", label: "AOG Dispatch SLA" },
      { value: "100%", label: "Zero Shock Spike Record" },
      { value: "Global", label: "Hand-Carry Courier Desk" }
    ]
  },
  {
    id: "automotive",
    category: "Chemical & Auto",
    tag: "AUTOMOTIVE & EV",
    title: "Automotive & EV Supply Chain",
    description: "Just-In-Time (JIT) production line component feeds, finished vehicle RoRo shipping, and UN-certified EV battery transport.",
    detailedDesc: "We power automotive assembly lines across continents. Our automotive freight ecosystem includes specialized Roll-on/Roll-off (RoRo) vessel space, multi-car carriers, CKD/SKD containerization, and UN 38.3 certified hazardous battery shipping.",
    accentColor: "#6366f1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.2 1 12 1 12.8V16c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    capabilities: [
      "JIT Component Delivery to Assembly Lines",
      "RoRo Car-Carrier Vessel Booking & Loading",
      "EV Lithium-Ion Battery UN 38.3 Shipping",
      "CKD (Completely Knocked Down) Container Packing"
    ],
    standards: ["VDA Automotive Standard", "UN 38.3 Battery Cert", "ISO 14001"],
    equipment: "Car-carrier trailers, RoRo vessels, hazardous battery containers.",
    stats: [
      { value: "99.95%", label: "JIT Delivery Precision" },
      { value: "50K+", label: "Vehicles Moved Annually" },
      { value: "UN 38.3", label: "EV Battery Certified" }
    ]
  },
  {
    id: "chemical",
    category: "Chemical & Auto",
    tag: "HAZMAT & IMO DG",
    title: "Chemicals & Dangerous Goods (DG)",
    description: "IMO Class 1-9 certified dangerous goods transportation, ISO tank container fleets, and hazardous material customs compliance.",
    detailedDesc: "Handling chemical and dangerous cargo demands uncompromising safety protocols. Seatrans features certified DG safety advisers, ISO tank fleets for liquid chemicals, temperature-monitored hazardous stowage, and rapid emergency response dispatch.",
    accentColor: "#ef4444",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A2 2 0 0 0 6.508 23h10.984a2 2 0 0 0 1.788-2.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
        <line x1="8.5" y1="2" x2="15.5" y2="2" />
        <path d="M7 16h10" />
      </svg>
    ),
    capabilities: [
      "IMO Class 1-9 Dangerous Goods Clearance & Stowage",
      "Dedicated ISO Tank Container Fleet Management",
      "Certified DG Safety Advisor (DGSA) Supervision",
      "Spill Response & Emergency Contingency Protocols"
    ],
    standards: ["IMO DG Class 1-9", "ADR / IMDG Code", "ISO 9001 Safety"],
    equipment: "T11-T50 ISO Tanks, Hazmat Lined Containers, Temperature Monitors.",
    stats: [
      { value: "Class 1-9", label: "Full IMO DG Clearance" },
      { value: "100%", label: "Hazmat Inspection Pass" },
      { value: "ISO Tank", label: "Dedicated Global Fleet" }
    ]
  }
];

const CATEGORIES = [
  "All Sectors",
  "Defense & Heavy Tech",
  "ODC & Machinery",
  "Agro & Cold Chain",
  "Chemical & Auto"
];

export default function IndustriesGrid() {
  const [activeCategory, setActiveCategory] = useState("All Sectors");
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const cardsRef = useRef([]);

  const filteredIndustries =
    activeCategory === "All Sectors"
      ? INDUSTRIES_DATA
      : INDUSTRIES_DATA.filter((item) => item.category === activeCategory);

  const handleMouseMove = (e, idx) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const handleMouseLeave = (idx) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    card.style.setProperty("--tilt-x", `0deg`);
    card.style.setProperty("--tilt-y", `0deg`);
  };

  return (
    <section id="industries-grid" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>SPECIALIZED CAPABILITIES</span>
          <h2 className={styles.title}>Tailored Logistics Infrastructure by Sector</h2>
          <div className={styles.divider} />
          <p className={styles.leadText}>
            Every industry possesses unique cargo geometry, regulatory constraints, and velocity demands. Explore our specialized logistics architecture built for high performance.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className={styles.filterBar}>
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              className={`${styles.filterBtn} ${
                activeCategory === cat ? styles.activeFilter : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className={styles.cardsGrid}>
          {filteredIndustries.map((ind, idx) => (
            <div
              key={ind.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={styles.industryCard}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              style={{ "--accent-theme": ind.accentColor }}
            >
              <div className={styles.cardShine} />

              <div className={styles.cardWaveWrap}>
                <div className={styles.cardWave} style={{ "--wave-color": ind.accentColor + "18" }} />
                <div className={styles.cardWave2} style={{ "--wave-color": ind.accentColor + "0d" }} />
              </div>

              {/* Top Row: Icon + Badges */}
              <div className={styles.cardHeader}>
                <div
                  className={styles.iconContainer}
                  style={{ backgroundColor: `${ind.accentColor}15`, color: ind.accentColor }}
                >
                  {ind.icon}
                </div>
                <div className={styles.tagWrap}>
                  <span
                    className={styles.tagBadge}
                    style={{ backgroundColor: `${ind.accentColor}20`, color: ind.accentColor }}
                  >
                    {ind.tag}
                  </span>
                </div>
              </div>

              {/* Title & Short Description */}
              <h3 className={styles.cardTitle}>{ind.title}</h3>
              <p className={styles.cardDesc}>{ind.description}</p>

              {/* Capabilities List */}
              <div className={styles.capabilitiesBox}>
                <h4 className={styles.capHeading}>Key Logistics Features:</h4>
                <ul className={styles.capList}>
                  {ind.capabilities.slice(0, 3).map((cap, cIdx) => (
                    <li key={cIdx}>
                      <span className={styles.capDot} style={{ backgroundColor: ind.accentColor }} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Button trigger Modal */}
              <div className={styles.cardFooter}>
                <button
                  onClick={() => setSelectedIndustry(ind)}
                  className={styles.specsBtn}
                >
                  <span>EXPLORE SECTOR SPECS</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={styles.btnArrow}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detailed View */}
      {selectedIndustry && (
        <IndustryModal
          industry={selectedIndustry}
          onClose={() => setSelectedIndustry(null)}
        />
      )}
    </section>
  );
}
