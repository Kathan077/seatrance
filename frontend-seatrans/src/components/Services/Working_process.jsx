"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Working_Process.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WorkingProcess() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate the cards on scroll
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="processSection">
      
      {/* Header section styled to match your image */}
      <div className="processHeader">
        <span className="processBadge">
          <span className="badgeStar">✱</span> Working Process
        </span>
        <h2 className="processTitle">We deliver through smooth logistics process</h2>
      </div>

      <div className="processWrapper">
        {/* Floating illustrations that drift up & down */}
        <div className="floatingIllust leftFloat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M5 10h11v8H5z" />
            <path d="M4 18h14M10 6h4M12 6v4" />
            <circle cx="7" cy="20" r="1.5" />
            <circle cx="15" cy="20" r="1.5" />
          </svg>
        </div>
        
        <div className="floatingIllust rightFloat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </div>

        {/* Curved Connection Arrows with active animated cargo pulses */}
        <div className="svgConnections">
          <svg viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none" className="connectionSvg">
            <defs>
              {/* Double-sided arrow marker definition */}
              <marker 
                id="arrowhead" 
                viewBox="0 0 10 10" 
                refX="5" 
                refY="5" 
                markerWidth="6" 
                markerHeight="6" 
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="rgba(30, 101, 179, 0.55)" />
              </marker>
            </defs>

            {/* Left Curve path from card 1 to card 2 (with arrowheads at both ends) */}
            <path 
              id="curveLeft"
              d="M 208,120 C 275,65 375,55 450,95" 
              stroke="rgba(30, 101, 179, 0.28)" 
              strokeWidth="2.5" 
              strokeDasharray="6,8"
              marker-start="url(#arrowhead)"
              marker-end="url(#arrowhead)"
            />
            {/* Right Curve path from card 2 to card 3 (with arrowheads at both ends) */}
            <path 
              id="curveRight"
              d="M 550,95 C 625,55 725,65 792,120" 
              stroke="rgba(30, 101, 179, 0.28)" 
              strokeWidth="2.5" 
              strokeDasharray="6,8"
              marker-start="url(#arrowhead)"
              marker-end="url(#arrowhead)"
            />
            
            {/* Moving active pulse icons representing transit along the paths */}
            <circle r="5.5" fill="var(--brand-blue, #1e65b3)">
              <animateMotion dur="4s" repeatCount="indefinite" path="M 208,120 C 275,65 375,55 450,95" />
            </circle>
            <circle r="5.5" fill="var(--brand-blue, #1e65b3)">
              <animateMotion dur="4s" repeatCount="indefinite" path="M 550,95 C 625,55 725,65 792,120" />
            </circle>
          </svg>
        </div>

        {/* Curved Wave Steps */}
        <div className="stepsArcContainer">
          
          {/* Step 1: Lower Left */}
          <div 
            ref={(el) => (cardsRef.current[0] = el)}
            className="stepArcCard stepLeft"
          >
            <div className="arcIconWrapper">
              <div className="arcIconBg" />
              <span className="arcIcon">
                {/* Hand holding box SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="3" width="12" height="8" rx="1.5" />
                  <path d="M10 3v8M14 3v8" />
                  <path d="M3 15c2 0 4 1 5.5 2.5L12 20l3.5-2.5C17 16 19 15 21 15" />
                  <path d="M12 11v4" />
                </svg>
              </span>
            </div>
            <h3 className="arcStepTitle">Receive Packages</h3>
            <p className="arcStepDesc">
              Seatrans logistics handles secure cargo intake and cataloging at terminal hubs, verifying tracking and compliance.
            </p>
          </div>

          {/* Step 2: Higher Middle */}
          <div 
            ref={(el) => (cardsRef.current[1] = el)}
            className="stepArcCard stepMiddle"
          >
            <div className="arcIconWrapper">
              <div className="arcIconBg" />
              <span className="arcIcon">
                {/* Trolley cart with package SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2v15h13" />
                  <path d="M6 13h10V7H6" />
                  <circle cx="8" cy="19" r="2" />
                  <circle cx="16" cy="19" r="2" />
                  <rect x="8" y="8" width="6" height="4" rx="0.5" />
                </svg>
              </span>
            </div>
            <h3 className="arcStepTitle">Transport Packages</h3>
            <p className="arcStepDesc">
              We design and execute optimized multi-modal routing pathways via ocean, air, and land to accelerate transit.
            </p>
          </div>

          {/* Step 3: Lower Right */}
          <div 
            ref={(el) => (cardsRef.current[2] = el)}
            className="stepArcCard stepRight"
          >
            <div className="arcIconWrapper">
              <div className="arcIconBg" />
              <span className="arcIcon">
                {/* Isometric delivery box SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 7l9 5 9-5-9-5z" />
                  <path d="M3 7v10l9 5V12L3 7z" />
                  <path d="M21 7v10l-9 5V12l9-5z" />
                </svg>
              </span>
            </div>
            <h3 className="arcStepTitle">Deliver Packages</h3>
            <p className="arcStepDesc">
              We manage port customs clearance and final-mile distribution directly to your specified destination.
            </p>
          </div>

        </div>
      </div>

      {/* Infinite Scrolling Ticker Marquee Ribbon in your Brand Blue theme */}
      <div className="processTickerContainer">
        <div className="processTicker">
          <div className="tickerGroup">
            <span>GLOBAL SHIPPING 🚢</span>
            <span>SAFE WAREHOUSING 📦</span>
            <span>INTEGRATED SUPPLY CHAIN ⛓️</span>
            <span>FASTEST CARGO DELIVERY ✈️</span>
            <span>ROAD LOGISTICS 🚚</span>
            <span>PORT OPERATIONS ⚓</span>
          </div>
          <div className="tickerGroup" aria-hidden="true">
            <span>GLOBAL SHIPPING 🚢</span>
            <span>SAFE WAREHOUSING 📦</span>
            <span>INTEGRATED SUPPLY CHAIN ⛓️</span>
            <span>FASTEST CARGO DELIVERY ✈️</span>
            <span>ROAD LOGISTICS 🚚</span>
            <span>PORT OPERATIONS ⚓</span>
          </div>
        </div>
      </div>

    </section>
  );
}
