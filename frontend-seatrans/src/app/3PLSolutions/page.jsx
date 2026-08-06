"use client";

import PlHero from "@/components/3PL Solutions/PlHero";
import PlServices from "@/components/3PL Solutions/PlServices";
import PlTabbedSolutions from "@/components/3PL Solutions/PlTabbedSolutions";
import PlFulfillmentFlow from "@/components/3PL Solutions/PlFulfillmentFlow";
import PlFaq from "@/components/3PL Solutions/PlFaq";

export default function ThreePLSolutionsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <PlHero />

      {/* 3PL Core Capabilities Grid */}
      <PlServices />

      {/* Client Requirements Tabbed Section */}
      <PlTabbedSolutions />

      {/* 5-Stage Interactive Fulfillment Flow */}
      <PlFulfillmentFlow />

      {/* Frequently Asked Questions & Consultation CTA */}
      <PlFaq />
    </main>
  );
}
