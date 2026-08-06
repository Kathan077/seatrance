"use client";

import { useEffect } from "react";
import styles from "./IndustryModal.module.css";

export default function IndustryModal({ industry, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!industry) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.headerArea}>
          <div className={styles.iconBox} style={{ color: industry.accentColor }}>
            {industry.icon}
          </div>
          <div>
            <div className={styles.badgeRow}>
              <span className={styles.tagBadge} style={{ backgroundColor: `${industry.accentColor}20`, color: industry.accentColor }}>
                {industry.tag}
              </span>
              <span className={styles.categoryBadge}>{industry.category}</span>
            </div>
            <h2 className={styles.title}>{industry.title}</h2>
          </div>
        </div>

        <p className={styles.longDesc}>{industry.detailedDesc || industry.description}</p>

        <div className={styles.gridDetails}>
          {/* Key Capabilities */}
          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Core Operational Capabilities
            </h3>
            <ul className={styles.capabilityList}>
              {industry.capabilities?.map((cap, i) => (
                <li key={i}>
                  <span className={styles.bulletDot} style={{ backgroundColor: industry.accentColor }} />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Standards */}
          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Compliance & Safety Standards
            </h3>
            <div className={styles.compliancePills}>
              {industry.standards?.map((std, i) => (
                <span key={i} className={styles.stdPill}>
                  {std}
                </span>
              ))}
            </div>
            <div className={styles.fleetInfo}>
              <strong>Specialized Equipment:</strong>
              <p>{industry.equipment || "Heavy-duty lowbed trailers, reefer containers, ISO tanks."}</p>
            </div>
          </div>
        </div>

        {/* Highlight Stats */}
        {industry.stats && (
          <div className={styles.statsRow}>
            {industry.stats.map((st, i) => (
              <div key={i} className={styles.statBox}>
                <span className={styles.statVal} style={{ color: industry.accentColor }}>{st.value}</span>
                <span className={styles.statLbl}>{st.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className={styles.footerActions}>
          <a href="#quote" onClick={onClose} className={styles.modalPrimaryBtn}>
            <span>Request Sector Freight Consultation</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
