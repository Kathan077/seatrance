"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceData = [
  {
    id: 1,
    title: "Global Freight Shipping",
    desc: "End-to-end ocean & air cargo solutions across 150+ trade lanes worldwide.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    tag: "Ocean & Air",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12h4l3-9 4 18 3-9h4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "24/7 Logistics Assistance",
    desc: "Round-the-clock support with real-time tracking and dedicated account managers.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
    tag: "Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Customs Clearance",
    desc: "Expert compliance handling, HS code classification, and duty optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    tag: "Compliance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 14l2 2 4-4"/>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Agile Warehouse Facility",
    desc: "Smart fulfillment centers with automated inventory and cross-dock capabilities.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
    tag: "Warehousing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Supply Chain Solutions",
    desc: "Digitized end-to-end supply chain orchestration with predictive analytics.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    tag: "Strategy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="18" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <path d="M13 6h3a2 2 0 0 1 2 2v7"/>
        <line x1="6" y1="9" x2="6" y2="21"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Port Handling Services",
    desc: "Priority berth allocation, stevedoring, and container yard management.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    tag: "Port Ops",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M2 20h20M12 4v16M8 8H4l2 8M16 8h4l-2 8"/>
        <circle cx="12" cy="4" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 7,
    title: "Cold Chain Logistics",
    desc: "Temperature-controlled transport for pharma, fresh produce, and perishables.",
    image: "https://images.unsplash.com/photo-1586528116224-f757457419e5?q=80&w=1200&auto=format&fit=crop",
    tag: "Cold Chain",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <line x1="12" y1="2" x2="12" y2="22"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    id: 8,
    title: "Road Freight & Express",
    desc: "FTL/LTL trucking with GPS tracking across major domestic corridors.",
    image: "https://images.unsplash.com/photo-1516576885502-d13d7af4e8b8?q=80&w=1200&auto=format&fit=crop",
    tag: "Road",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 4v4h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

function ServiceCard({ title, desc, image, tag, icon, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isHovered ? styles.cardHovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className={styles.cardImg}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.cardBgImg}
          unoptimized
        />
      </div>

      {/* Gradient Overlay */}
      <div className={styles.cardOverlay} />

      {/* Tag pill */}
      <div className={styles.cardTag}>{tag}</div>

      {/* Icon */}
      <div className={styles.cardIcon}>{icon}</div>

      {/* Bottom Content */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardCta}>
          <span>Learn More</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={styles.ctaArrow}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>

      {/* Hover shimmer line */}
      <div className={styles.shimmerLine} />
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Header stagger animation
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Counter animation
      if (counterRef.current) {
        const counters = counterRef.current.querySelectorAll("[data-count]");
        counters.forEach((el) => {
          const target = parseInt(el.getAttribute("data-count"));
          gsap.fromTo(
            el,
            { textContent: 0 },
            {
              textContent: target,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: counterRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              onUpdate: function () {
                el.textContent = Math.ceil(this.targets()[0].textContent) + (el.dataset.suffix || "");
              },
            }
          );
        });
      }

      // Cards stagger reveal
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          Array.from(cards),
          { opacity: 0, y: 70, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.09,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.servicesSection}>
      {/* Ambient background orbs */}
      <div className={styles.orbTop} />
      <div className={styles.orbBottom} />

      <div className={styles.container}>
        {/* Section Header */}
        <div ref={headerRef} className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Our Services
          </div>
          <h2 className={styles.sectionTitle}>
            Comprehensive Logistics &<br />
            <span className={styles.titleAccent}>Supply Chain Solutions</span>
          </h2>
          <p className={styles.sectionSubtext}>
            From first mile to last mile — Seatrans delivers intelligent, resilient, and digitized freight solutions across every trade lane.
          </p>
        </div>

      

        {/* Services Grid */}
        <div ref={gridRef} className={styles.grid}>
          {serviceData.map((svc, i) => (
            <ServiceCard key={svc.id} {...svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
