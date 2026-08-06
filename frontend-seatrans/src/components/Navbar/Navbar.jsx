"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import QuoteModal from "@/components/QuoteModal/QuoteModal";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Handle scroll sizing transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for global openQuoteModal events
  useEffect(() => {
    const handleOpenModal = () => setIsQuoteModalOpen(true);
    window.addEventListener("openQuoteModal", handleOpenModal);
    return () => window.removeEventListener("openQuoteModal", handleOpenModal);
  }, []);

  // Close menus on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleQuoteClick = (e) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsQuoteModalOpen(true);
  };

  return (
    <header className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Main navigation container */}
      <div className={styles.navbarContainer}>
        {/* Brand Logo (Positioned absolutely outside the clipped body to prevent clipping) */}
        <Link href="/" className={styles.logoContainer} onClick={handleLinkClick}>
          <Image 
            src="/images/Seatrans-logo.png" 
            alt="Seatrans Logo" 
            className={styles.logoImage} 
            width={684}
            height={662}
            priority
          />
        </Link>

        {/* White center trapezoid body */}
        <div className={styles.navbarBody}>
          {/* Navigation links & dropdowns */}
          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navLink} onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink} onClick={handleLinkClick}>
              About Us
            </Link>
            <Link href="/Services" className={styles.navLink} onClick={handleLinkClick}>
              Services
            </Link>
            <Link href="/Industries-Served" className={styles.navLink} onClick={handleLinkClick}>
              Industries Served
            </Link>
            <Link href="/3PLSolutions" className={styles.navLink} onClick={handleLinkClick}>
              3PL Solutions
            </Link>
            <Link href="/blog" className={styles.navLink} onClick={handleLinkClick}>
              Blog
            </Link>
            <Link href="/contactus" className={styles.navLink} onClick={handleLinkClick}>
              Contact Us
            </Link>
          </nav>

          {/* Right widgets */}
          <div className={styles.widgetsContainer}>



            {/* Mobile hamburger button */}
            <button
              className={`${styles.hamburgerButton} ${isMobileMenuOpen ? styles.active : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          </div>
        </div>

        {/* Slanted blue CTA button */}
        <button className={styles.ctaButton} onClick={handleQuoteClick}>
          <span className={styles.ctaText}>Get A Quote</span>
          <div className={styles.ctaIconWrapper}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.ctaIcon}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </button>
      </div>

      {/* Mobile drawer menu */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.open : ""}`}>
        {/* Mobile Header Bar with Logo and Close (X) Button */}
        <div className={styles.mobileDrawerHeader}>
          <Link href="/" className={styles.mobileLogoContainer} onClick={handleLinkClick}>
            <Image 
              src="/images/Seatrans-logo.png" 
              alt="Seatrans Logo" 
              width={140}
              height={135}
              className={styles.mobileLogoImage}
              priority
            />
          </Link>
          <button
            className={styles.mobileCloseBtn}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Home
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="/about" className={styles.mobileNavLink} onClick={handleLinkClick}>
            About Us
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="/Services" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Services
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="/Industries-Served" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Industries Served
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="/3PLSolutions" className={styles.mobileNavLink} onClick={handleLinkClick}>
            3PL Solutions
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="/blog" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Blog
          </Link>
          <div className={styles.mobileDividerLine} />
          <Link href="/contactus" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Contact Us
          </Link>
          
          <div className={styles.mobileDrawerFooter}>
            <button
              className={styles.mobileCta}
              onClick={handleQuoteClick}
            >
              Get A Quote
            </button>
          </div>
        </nav>
      </div>

      {/* Global Get A Quote Modal Popup */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </header>
  );
}
