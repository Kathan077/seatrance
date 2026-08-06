"use client";

import styles from "./GlobalComplianceGrid.module.css";

const COMPLIANCE_ITEMS = [
  {
    code: "ITAR REGISTERED",
    title: "Defense Trade Controls",
    badge: "MIL-SPEC SECURE",
    desc: "Licensed handling of sensitive defense items, military hardware, and tactical export permits under strict sovereign security controls.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    code: "GDP COLD CHAIN",
    title: "Good Distribution Practice",
    badge: "SUB-ZERO CERTIFIED",
    desc: "Pharma and perishable food cold chain validation. Active temperature logging, unbroken cold corridors, and priority port quarantine.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    code: "AEO-F STATUS",
    title: "Authorized Economic Operator",
    badge: "FAST CUSTOMS",
    desc: "Highest international customs security status, unlocking fast-track port green lanes, reduced inspections, and priority berth loading.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    code: "IMO DG CLASS 1-9",
    title: "Hazardous Cargo Handling",
    badge: "HAZMAT CERTIFIED",
    desc: "Certified Dangerous Goods Safety Advisers (DGSA) supervising chemicals, explosives, flammables, and lithium EV battery shipments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A2 2 0 0 0 6.508 23h10.984a2 2 0 0 0 1.788-2.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
      </svg>
    )
  },
  {
    code: "ISO 9001 / 14001",
    title: "Quality & Safety Systems",
    badge: "GLOBAL STANDARDS",
    desc: "Audited quality management and environmental safety protocols for heavy lifts, marine operations, and multi-modal logistics.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    code: "IATA & FIATA",
    title: "Air & Ocean Freight Agent",
    badge: "DIRECT AIRLINE DISPATCH",
    desc: "Direct air freight airline chartering and FIATA bill of lading issuance for high-priority emergency AOG and time-critical cargo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.6-.1-1.2.1-1.5.6l-1 1.5c-.3.4-.2 1 .2 1.3L8 14.5l-3.5 3.5-2.5-.5c-.4-.1-.8.1-1 .5l-.5 1c-.2.4 0 .9.4 1.1l3.5 2 2 3.5c.2.4.7.6 1.1.4l1-.5c.4-.2.6-.6.5-1l-.5-2.5 3.5-3.5 4.5 5c.3.4.9.5 1.3.2l1.5-1c.5-.3.7-.9.6-1.5z" />
      </svg>
    )
  }
];

export default function GlobalComplianceGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>TRUST & COMPLIANCE</span>
          <h2 className={styles.title}>Global Industry Accreditations</h2>
          <div className={styles.divider} />
          <p className={styles.leadText}>
            Our global sector operations adhere strictly to international regulatory standards, ensuring zero compliance hold-ups at borders.
          </p>
        </div>

        <div className={styles.grid}>
          {COMPLIANCE_ITEMS.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{item.icon}</div>
                <span className={styles.badge}>{item.badge}</span>
              </div>
              <span className={styles.code}>{item.code}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
