"use client";

import ContactHero from "@/components/Contact/ContactHero";
import ContactInfoCards from "@/components/Contact/ContactInfoCards";
import ContactFormMap from "@/components/Contact/ContactFormMap";

export default function ContactUsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Contact Hero */}
      <ContactHero />

      {/* Partner Contacts, Hotline, Email & Business Hours */}
      <ContactInfoCards />

      {/* Inquiry Form & Embedded Google Map with Office Address */}
      <ContactFormMap />
    </main>
  );
}
