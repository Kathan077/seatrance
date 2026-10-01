"use client";

import { useState } from "react";
import styles from "./BlogNewsletter.module.css";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setErrorMsg("");

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
          subject: "New Newsletter Subscriber - Seatrans",
          from_name: "Seatrans Newsletter",
          email: email
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubscribed(true);
        setTimeout(() => {
          setSubscribed(false);
          setEmail("");
        }, 5000);
      } else {
        setErrorMsg(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <span className={styles.badge}>WEEKLY LOGISTICS INTELLIGENCE</span>
            <h2 className={styles.title}>Stay Ahead of Global Freight Rate Fluctuation</h2>
            <p className={styles.desc}>
              Subscribe to the Seatrans Intelligence Briefing for weekly ocean & air rate updates, port congestion alerts, and supply chain market forecasts.
            </p>
          </div>

          {subscribed ? (
            <div className={styles.successBox}>
              <span>✓ Subscribed to Seatrans Journal! Check your inbox soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                required
                placeholder="Enter your corporate email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <button type="submit" disabled={isSubmitting} className={styles.btn}>
                <span>{isSubmitting ? "Subscribing..." : "Subscribe Free"}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.svg}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              {errorMsg && <p style={{ color: "#ef4444", fontSize: "13px", marginTop: "4px" }}>⚠️ {errorMsg}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
