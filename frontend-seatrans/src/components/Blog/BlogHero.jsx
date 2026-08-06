"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./BlogHero.module.css";

export default function BlogHero({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className={styles.container}>
        <div ref={heroRef} className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            INDUSTRY INSIGHTS & KNOWLEDGE HUB
          </div>

          <h1 className={styles.heroTitle}>
            Seatrans Logistics & <br />
            <span className={styles.blueAccent}>Global Freight Journal</span>
          </h1>

          <p className={styles.heroDesc}>
            Stay informed with expert analysis, trade lane updates, customs compliance breakdowns, and supply chain technology trends from Seatrans logistics specialists.
          </p>

          {/* Search & Filter Controls */}
          <div className={styles.searchBarContainer}>
            <div className={styles.searchBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={styles.searchIcon}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search shipping guides, trade lanes, 3PL or customs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button className={styles.clearBtn} onClick={() => setSearchQuery("")}>
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className={styles.categoriesRow}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.catPill} ${selectedCategory === cat ? styles.catActive : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
