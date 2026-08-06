"use client";

import { useState, useEffect } from "react";
import styles from "./QuoteModal.module.css";

const SERVICES_LIST = [
  {
    id: "ocean",
    name: "Ocean Freight (FCL / LCL)",
    desc: "Global containerized sea cargo, FCL, LCL consolidation & vessel chartering.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 20h20M3 15h18l-2-5H5l-2 5z" />
        <path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
        <circle cx="12" cy="15" r="1.5" />
      </svg>
    )
  },
  {
    id: "air",
    name: "Air Freight & Charter",
    desc: "High-speed air freight corridors, charter flights & emergency AOG dispatch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.6-.1-1.2.1-1.5.6l-1 1.5c-.3.4-.2 1 .2 1.3L8 14.5l-3.5 3.5-2.5-.5c-.4-.1-.8.1-1 .5l-.5 1c-.2.4 0 .9.4 1.1l3.5 2 2 3.5c.2.4.7.6 1.1.4l1-.5c.4-.2.6-.6.5-1l-.5-2.5 3.5-3.5 4.5 5c.3.4.9.5 1.3.2l1.5-1c.5-.3.7-.9.6-1.5z" />
      </svg>
    )
  },
  {
    id: "3pl",
    name: "3PL & FTWZ Warehousing",
    desc: "Duty-deferred FTWZ bonded hubs, smart RFID picking & cold storage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21h18M4 21V10l8-6 8 6v11" />
        <rect x="7" y="14" width="4" height="7" />
        <rect x="13" y="14" width="4" height="7" />
      </svg>
    )
  },
  {
    id: "customs",
    name: "Customs Brokerage",
    desc: "Certified customs clearance, port terminal processing & AEO fast lane.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="12" cy="14" r="3" />
        <path d="m10.5 14 1 1 2-2" />
      </svg>
    )
  },
  {
    id: "defense",
    name: "Defense & ITAR Tactical",
    desc: "ITAR compliant military hardware, armored vehicle & diplomatic chartering.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    id: "odc",
    name: "ODC & Project Heavy Cargo",
    desc: "Over Dimensional Cargo (ODC), multi-axle Goldhofer SPMTs & heavy lift cranes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    )
  },
  {
    id: "coldchain",
    name: "Agro & Cold Chain Logistics",
    desc: "Sub-zero reefer containers (-30°C), flexitanks & perishable food clearance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    id: "hazmat",
    name: "Chemicals & ISO Tanks",
    desc: "IMO DG Class 1-9 dangerous goods, ISO tank fleets & hazmat advisors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A2 2 0 0 0 6.508 23h10.984a2 2 0 0 0 1.788-2.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
      </svg>
    )
  }
];

export default function QuoteModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0].id);

  const [formData, setFormData] = useState({
    // Routing
    origin: "",
    destination: "",
    incoterm: "FOB",
    // Cargo specs
    containerType: "20ft Standard",
    weight: "",
    volume: "",
    shippingDate: "",
    specialHandling: [],
    // Contact
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxToggle = (val) => {
    setFormData((prev) => {
      const exists = prev.specialHandling.includes(val);
      return {
        ...prev,
        specialHandling: exists
          ? prev.specialHandling.filter((item) => item !== val)
          : [...prev.specialHandling, val]
      };
    });
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.origin.trim()) errs.origin = "Origin is required";
    if (!formData.destination.trim()) errs.destination = "Destination is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.company.trim()) errs.company = "Company name is required";
    if (!formData.email.trim()) {
      errs.email = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Valid email address required";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) setCurrentStep(3);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setQuoteId(`ST-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setSelectedService(SERVICES_LIST[0].id);
    setFormData({
      origin: "",
      destination: "",
      incoterm: "FOB",
      containerType: "20ft Standard",
      weight: "",
      volume: "",
      shippingDate: "",
      specialHandling: [],
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    });
    setErrors({});
    onClose();
  };

  const activeServiceObj = SERVICES_LIST.find((s) => s.id === selectedService);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSubmitted ? (
          /* Success Receipt Card */
          <div className={styles.successWrapper}>
            <div className={styles.successBadge}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2 className={styles.successTitle}>Rate Quote Request Submitted!</h2>
            <p className={styles.successDesc}>
              Thank you, <strong>{formData.name}</strong> ({formData.company}). Your request reference number is:
            </p>
            <div className={styles.ticketPill}>{quoteId}</div>

            <div className={styles.summaryBox}>
              <div className={styles.sumRow}>
                <span>Selected Service:</span>
                <strong>{activeServiceObj?.name}</strong>
              </div>
              <div className={styles.sumRow}>
                <span>Route Corridor:</span>
                <strong>{formData.origin} ➔ {formData.destination} ({formData.incoterm})</strong>
              </div>
              <div className={styles.sumRow}>
                <span>Guaranteed Response:</span>
                <strong style={{ color: "#10b981" }}>Under 2 Hours SLA</strong>
              </div>
            </div>

            <button onClick={resetModal} className={styles.primaryActionBtn}>
              Close & Return to Page
            </button>
          </div>
        ) : (
          /* Multi-Step Quote Builder */
          <div>
            {/* Header Area */}
            <div className={styles.header}>
              <div className={styles.headerBadge}>
                <span className={styles.pulseDot} />
                <span>SEATRANS PRO QUOTE DESK</span>
              </div>
              <h2 className={styles.modalTitle}>Request Precision Freight Pricing</h2>
              <p className={styles.modalSub}>
                Get instant custom freight rate calculations and vessel schedule allocations.
              </p>
            </div>

            {/* Stepper Progress Bar */}
            <div className={styles.stepper}>
              <div className={`${styles.stepItem} ${currentStep >= 1 ? styles.activeStep : ""}`}>
                <span className={styles.stepNum}>1</span>
                <span className={styles.stepLabel}>Select Service</span>
              </div>
              <div className={styles.stepLine} />
              <div className={`${styles.stepItem} ${currentStep >= 2 ? styles.activeStep : ""}`}>
                <span className={styles.stepNum}>2</span>
                <span className={styles.stepLabel}>Route & Cargo Specs</span>
              </div>
              <div className={styles.stepLine} />
              <div className={`${styles.stepItem} ${currentStep >= 3 ? styles.activeStep : ""}`}>
                <span className={styles.stepNum}>3</span>
                <span className={styles.stepLabel}>Contact & Submit</span>
              </div>
            </div>

            {/* STEP 1: Select Service */}
            {currentStep === 1 && (
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Choose Required Logistics Service:</h3>
                <div className={styles.servicesGrid}>
                  {SERVICES_LIST.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`${styles.serviceCard} ${
                        selectedService === srv.id ? styles.activeServiceCard : ""
                      }`}
                    >
                      <div className={styles.srvIcon}>{srv.icon}</div>
                      <div className={styles.srvMeta}>
                        <h4 className={styles.srvName}>{srv.name}</h4>
                        <p className={styles.srvDesc}>{srv.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className={styles.stepFooter}>
                  <div />
                  <button onClick={handleNext} className={styles.nextBtn}>
                    <span>Continue to Route Details</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Route & Cargo Specs */}
            {currentStep === 2 && (
              <div className={styles.stepContent}>
                <div className={styles.selectedBanner}>
                  <span>Selected Service:</span>
                  <strong>{activeServiceObj?.name}</strong>
                </div>

                <div className={styles.formGrid}>
                  {/* Origin */}
                  <div className={`${styles.formGroup} ${errors.origin ? styles.hasError : ""}`}>
                    <label className={styles.label}>Origin Port / Location *</label>
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="e.g. Mundra Port (INMUN)"
                    />
                    {errors.origin && <span className={styles.errorMsg}>{errors.origin}</span>}
                  </div>

                  {/* Destination */}
                  <div className={`${styles.formGroup} ${errors.destination ? styles.hasError : ""}`}>
                    <label className={styles.label}>Destination Port / Location *</label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="e.g. Rotterdam Port (NLRTM)"
                    />
                    {errors.destination && <span className={styles.errorMsg}>{errors.destination}</span>}
                  </div>

                  {/* Incoterms */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Incoterm Standard</label>
                    <select
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleInputChange}
                      className={styles.select}
                    >
                      <option value="FOB">FOB - Free on Board</option>
                      <option value="CIF">CIF - Cost, Insurance & Freight</option>
                      <option value="EXW">EXW - Ex Works</option>
                      <option value="DDP">DDP - Delivered Duty Paid</option>
                      <option value="DAP">DAP - Delivered at Place</option>
                      <option value="CFR">CFR - Cost & Freight</option>
                    </select>
                  </div>

                  {/* Container / Asset Type */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Container / Equipment Type</label>
                    <select
                      name="containerType"
                      value={formData.containerType}
                      onChange={handleInputChange}
                      className={styles.select}
                    >
                      <option value="20ft Standard">20ft Standard Dry Container</option>
                      <option value="40ft High Cube">40ft High Cube Dry Container</option>
                      <option value="40ft Reefer">40ft Reefer (Temperature Controlled)</option>
                      <option value="Flat Rack / Open Top">Flat Rack / Open Top (ODC)</option>
                      <option value="ISO Tank Container">ISO Tank (Liquid Chemical)</option>
                      <option value="Air Freight Pallet">Air Freight Pallet / Charter</option>
                      <option value="Breakbulk Heavy">Breakbulk Heavy Cargo</option>
                    </select>
                  </div>

                  {/* Estimated Weight */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Estimated Weight (KG / MT)</label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="e.g. 15,000 KG or 25 MT"
                    />
                  </div>

                  {/* Estimated Volume */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Cargo Volume (CBM / Dims)</label>
                    <input
                      type="text"
                      name="volume"
                      value={formData.volume}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="e.g. 45 CBM or 12x2.4x2.6m"
                    />
                  </div>
                </div>

                {/* Special Handling Options */}
                <div className={styles.specialArea}>
                  <label className={styles.label}>Special Cargo Tags & Compliance Requirements:</label>
                  <div className={styles.checkboxGrid}>
                    {[
                      "ITAR / Military Security",
                      "Sub-Zero Cold Chain (-30°C)",
                      "IMO Hazmat Class 1-9",
                      "Over-Dimensional Cargo (ODC)",
                      "Fast Customs AEO Clearance",
                      "FTWZ Bonded Storage"
                    ].map((tag, tIdx) => (
                      <label key={tIdx} className={styles.checkLabel}>
                        <input
                          type="checkbox"
                          checked={formData.specialHandling.includes(tag)}
                          onChange={() => handleCheckboxToggle(tag)}
                        />
                        <span>{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.stepFooter}>
                  <button onClick={handlePrev} className={styles.prevBtn}>
                    Back
                  </button>
                  <button onClick={handleNext} className={styles.nextBtn}>
                    <span>Continue to Contact Details</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact & Submit */}
            {currentStep === 3 && (
              <form onSubmit={handleSubmit} className={styles.stepContent}>
                <div className={styles.formGrid}>
                  {/* Name */}
                  <div className={`${styles.formGroup} ${errors.name ? styles.hasError : ""}`}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="e.g. Rahul Sharma"
                    />
                    {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                  </div>

                  {/* Company */}
                  <div className={`${styles.formGroup} ${errors.company ? styles.hasError : ""}`}>
                    <label className={styles.label}>Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="e.g. Global Exports Ltd"
                    />
                    {errors.company && <span className={styles.errorMsg}>{errors.company}</span>}
                  </div>

                  {/* Email */}
                  <div className={`${styles.formGroup} ${errors.email ? styles.hasError : ""}`}>
                    <label className={styles.label}>Work Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="name@company.com"
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className={`${styles.formGroup} ${errors.phone ? styles.hasError : ""}`}>
                    <label className={styles.label}>Phone Number (with Country Code) *</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                  </div>

                  {/* Additional Notes */}
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Specific Project Requirements / Notes</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.textarea}
                      rows="3"
                      placeholder="Provide any port preferences, L/C terms, or deadline dates..."
                    />
                  </div>
                </div>

                <div className={styles.stepFooter}>
                  <button type="button" onClick={handlePrev} className={styles.prevBtn}>
                    Back
                  </button>
                  <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                    {isSubmitting ? (
                      <span className={styles.loadingSpinner}>
                        <span className={styles.spinDot} />
                        Calculating Freight SLA...
                      </span>
                    ) : (
                      "SUBMIT QUOTE REQUEST"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
