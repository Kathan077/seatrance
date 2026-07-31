"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ServiceCard({ title, image, isHighlighted }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Track actual width and height of the card dynamically to avoid SVG path scaling distortions
  const [size, setSize] = useState({ width: 300, height: 400 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const card = cardRef.current;
    if (!card) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth 3D tilt
    const maxTilt = 8;
    const tiltX = -(y / (rect.height / 2)) * maxTilt;
    const tiltY = (x / (rect.width / 2)) * maxTilt;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const w = size.width;
  const h = size.height;

  return (
    <div 
      ref={cardRef}
      className={`${styles.card} ${isHighlighted ? styles.highlightedCard : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.03, 1.03, 1.03)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.25, 1, 0.3, 1)',
      }}
    >
      {/* Floating circular arrow button centered perfectly inside the curved notch */}
      <div className={`${styles.circleBtn} ${isHighlighted ? styles.highlightedBtn : ""}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnArrow}>
          <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* SVG Background Path with perfect anti-aliased curved notch (non-deforming) */}
      <div className={styles.cardBgContainer}>
        <svg viewBox={`0 0 ${w} ${h}`} className={styles.cardBgSvg}>
          <path 
            className={styles.cardPath}
            d={`M 24,0 
               L ${w - 80},0 
               C ${w - 50},0 ${w - 40},15 ${w - 40},40 
               C ${w - 40},60 ${w},60 ${w},80 
               L ${w},${h - 24} 
               A 24,24 0 0,1 ${w - 24},${h} 
               L 24,${h} 
               A 24,24 0 0,1 0,${h - 24} 
               L 0,24 
               A 24,24 0 0,1 24,0 
               Z`} 
            fill={isHighlighted ? "#ff6f3c" : "#ffffff"} 
            stroke={isHighlighted ? "#ff6f3c" : "rgba(12, 35, 64, 0.06)"} 
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Card Content Overlay */}
      <div className={styles.cardContent}>
        <div className={styles.cardHeaderArea}>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        
        {/* Slanted Image container */}
        <div className={styles.cardImageWrapper}>
          <Image 
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={styles.cardImage}
            unoptimized
          />
          <div className={styles.imageOverlay} />
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Grid Cards Stagger Reveal
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(Array.from(cards),
          { opacity: 0, y: 60, rotationY: -10, transformPerspective: 1000 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            stagger: 0.18,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const serviceData = [
    {
      title: "Global Freight Shipping",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
      isHighlighted: false
    },
    {
      title: "24/7 Logistics Assistance",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
      isHighlighted: false
    },
    {
      title: "Customs Clearance Support",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      isHighlighted: false
    },
    {
      title: "Agile warehouse Facility",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop",
      isHighlighted: false
    },
    {
      title: "Supply Chain Solutions",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      isHighlighted: false
    },
    {
      title: "Port Handling Services",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
      isHighlighted: false
    },
    {
      title: "Cold Chain Logistics",
      image: "https://images.unsplash.com/photo-1586528116224-f757457419e5?q=80&w=800&auto=format&fit=crop",
      isHighlighted: false
    },
    {
      title: "Road Freight & Express",
      image: "https://images.unsplash.com/photo-1516576885502-d13d7af4e8b8?q=80&w=800&auto=format&fit=crop",
      isHighlighted: false
    }
  ];

  return (
    <section ref={sectionRef} className={styles.servicesSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div ref={headerRef} className={styles.sectionHeader}>
          <span className={styles.badge}>
            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.badgeIcon}>
              <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
            </svg>
            Services
          </span>
          <h2 className={styles.sectionTitle}>
            Comprehensive Logistics and <br />
            Supply Chain Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className={styles.grid}>
          {serviceData.map((svc, index) => (
            <ServiceCard 
              key={index}
              title={svc.title}
              image={svc.image}
              isHighlighted={svc.isHighlighted}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
