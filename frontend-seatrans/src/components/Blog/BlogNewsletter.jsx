"use client";

import { useState } from "react";
import styles from "./BlogNewsletter.module.css";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
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
              <button type="submit" className={styles.btn}>
                <span>Subscribe Free</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.svg}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
