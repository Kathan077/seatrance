"use client";

import IndustriesHero from "./IndustriesHero";
import IndustriesGrid from "./IndustriesGrid";
import IndustryComparisonMatrix from "./IndustryComparisonMatrix";
import GlobalComplianceGrid from "./GlobalComplianceGrid";
import IndustriesCTA from "./IndustriesCTA";

export default function IndustriesServedMain() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* 1. Sector-Specific Cargo Hero with GSAP Entrance & Quick Chips */}
      <IndustriesHero />

      {/* 2. Pro-Level Industry Showcase Grid with Category Filters & Modal */}
      <IndustriesGrid />

      {/* 4. Interactive Sector Risk vs Seatrans Solution Matrix */}
      <IndustryComparisonMatrix />

      {/* 5. International Accreditations & Compliance Standards Grid */}
      <GlobalComplianceGrid />

      {/* 6. High Conversion Sector Proposal CTA */}
      <IndustriesCTA />
    </main>
  );
}
