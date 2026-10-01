"use client";

import { useState } from "react";
import styles from "./ContactFormMap.module.css";

export default function ContactFormMap() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Ocean Freight",
    origin: "",
    destination: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "17ba1585-64d5-44c9-aa78-c2516a2bb132";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `New Rate Card / Consultation Request from ${formData.fullName}`,
          from_name: "Seatrans Contact Form",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "N/A",
          service_required: formData.service,
          origin_port_city: formData.origin || "N/A",
          destination_port_city: formData.destination || "N/A",
          message_cargo_specs: formData.message || "N/A"
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "An error occurred during submission. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Failed to send message due to a network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form-section" className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Form */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <span className={styles.badge}>INQUIRY & QUOTATION</span>
              <h2 className={styles.formTitle}>Request a Rate Card or Freight Consultation</h2>
              <p className={styles.formDesc}>
                Fill out your cargo parameters below. Our pricing desk will get back to you within 2 business hours.
              </p>
            </div>

            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Inquiry Submitted Successfully!</h3>
                <p className={styles.successText}>
                  Thank you for reaching out to Seatrans Global. One of our partner representatives will contact you shortly at {formData.email || "your email"}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.rowTwo}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.rowTwo}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Exports Pvt Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Service Required *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={styles.select}
                  >
                    <option value="Ocean Freight">Ocean Freight Shipping (FCL / LCL)</option>
                    <option value="Air Freight">International Air Cargo Freight</option>
                    <option value="3PL Warehousing">3PL Warehousing & Order Fulfillment</option>
                    <option value="Customs Clearance">Customs Clearance & EDI Filing</option>
                    <option value="Port Handling">Port & Terminal Handling</option>
                    <option value="General Query">General Logistics Query</option>
                  </select>
                </div>

                <div className={styles.rowTwo}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Origin Port / City</label>
                    <input
                      type="text"
                      placeholder="e.g. Mundra / Nhava Sheva"
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Destination Port / City</label>
                    <input
                      type="text"
                      placeholder="e.g. Hamburg / Dubai / Rotterdam"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Message & Cargo Specs</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details such as container type (20ft/40ft), gross weight, commodity, or specific SLA requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={styles.textarea}
                  />
                </div>

                {errorMessage && (
                  <div style={{ color: "#ef4444", fontSize: "14px", fontWeight: "600", padding: "8px 12px", background: "#fef2f2", borderRadius: "8px", border: "1px solid #fecaca" }}>
                    ⚠️ {errorMessage}
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                  <span>{isSubmitting ? "Submitting..." : "Submit Inquiry"}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnArrow}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Address & Google Map */}
          <div className={styles.mapCard}>
            <div className={styles.officeHeader}>
              <div className={styles.officeBadge}>HEADQUARTERS</div>
              <h3 className={styles.officeTitle}>Ahmedabad Office</h3>

              <div className={styles.addressBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.locationIcon}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className={styles.addressText}>
                  <strong>4th Floor, Office No. 419, North Plaza,</strong>
                  <span>Nr. 4D Square Mall, Visat-Gandhinagar Highway,</span>
                  <span>Motera, Ahmedabad - 380005.</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=North+Plaza,+Visat-Gandhinagar+Highway,+Motera,+Ahmedabad+-+380005"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLinkBtn}
              >
                <span>View on Google Maps</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.linkIcon}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className={styles.iframeWrapper}>
              <iframe
                title="Seatrans Ahmedabad Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.082987590895!2d72.5956784!3d23.0940897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e839e55555555%3A0x123456789abcdef!2sNorth%20Plaza%2C%20Motera%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
