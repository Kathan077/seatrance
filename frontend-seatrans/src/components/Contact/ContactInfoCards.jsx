"use client";

import styles from "./ContactInfoCards.module.css";

export default function ContactInfoCards() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          {/* Card 1: Partner Contacts */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <span className={styles.cardTag}>KEY CONTACTS</span>
                <h3 className={styles.cardTitle}>Partner Leadership</h3>
              </div>
            </div>

            <div className={styles.partnersContainer}>
              {/* Kandarp */}
              <div className={styles.partnerBox}>
                <div className={styles.partnerHeader}>
                  <span className={styles.partnerName}>Kandarp</span>
                  <span className={styles.partnerRole}>Partner</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email:</span>
                  <a href="mailto:kandarp@seatransshipping.net" className={styles.contactLink}>
                    kandarp@seatransshipping.net
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone:</span>
                  <a href="tel:+919106202999" className={styles.contactLink}>
                    +91 91062 02999
                  </a>
                </div>
              </div>

              <div className={styles.dividerLine} />

              {/* Lakshay */}
              <div className={styles.partnerBox}>
                <div className={styles.partnerHeader}>
                  <span className={styles.partnerName}>Lakshay</span>
                  <span className={styles.partnerRole}>Partner</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email:</span>
                  <a href="mailto:lakshay@seatransshipping.net" className={styles.contactLink}>
                    lakshay@seatransshipping.net
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone:</span>
                  <a href="tel:+919898587515" className={styles.contactLink}>
                    +91 98985 87515
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Company Email & General Hotline */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span className={styles.cardTag}>SUPPORT & DESK</span>
                <h3 className={styles.cardTitle}>Hotline & Email</h3>
              </div>
            </div>

            <div className={styles.hotlineSection}>
              <div className={styles.supportBox}>
                <span className={styles.subLabel}>COMPANY EMAIL</span>
                <a href="mailto:Info@seatransshipping.net" className={styles.mainLink}>
                  Info@seatransshipping.net
                </a>
                <span className={styles.subDesc}>For official inquiries, quotes & documentations</span>
              </div>

              <div className={styles.dividerLine} />

              <div className={styles.supportBox}>
                <span className={styles.subLabel}>GENERAL HOTLINE</span>
                <a href="tel:+919898697515" className={styles.mainLinkPhone}>
                  +91 98986 97515
                </a>
                <span className={styles.subDesc}>Customer support & tracking helpline</span>
              </div>
            </div>
          </div>

          {/* Card 3: Business Hours & Timings */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <span className={styles.cardTag}>TIMINGS & OPS</span>
                <h3 className={styles.cardTitle}>Business Hours</h3>
              </div>
            </div>

            <div className={styles.hoursContainer}>
              <div className={styles.hoursBox}>
                <span className={styles.subLabel}>SUPPORT TIMING</span>
                <div className={styles.daysBadge}>Monday - Saturday</div>
                <div className={styles.timeHighlight}>09:30 AM - 06:30 PM (IST)</div>
                <p className={styles.hoursSubtext}>
                  Our office team is available during standard IST hours. 24/7 emergency dispatch support is provided for live ocean & air cargo in transit.
                </p>
              </div>

              <div className={styles.statusBadge}>
                <span className={styles.greenDot} />
                <span>Desk Active Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
