"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PlWMSDashboard.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PlWMSDashboard() {
  const [activeTab, setActiveTab] = useState("inventory");
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>PROPRIETARY TECH STACK</div>
          <h2 className={styles.sectionTitle}>
            Seatrans Cloud WMS & <br />
            <span className={styles.blueGradient}>Telemetry Control Center</span>
          </h2>
          <p className={styles.sectionSubtext}>
            Gain 100% real-time visibility over every pallet, bin, pick, and parcel. Direct API sync with your store & enterprise ERP.
          </p>
        </div>

        {/* Dashboard Mockup Outer Container */}
        <div className={styles.dashContainer}>
          {/* Top Bar Header */}
          <div className={styles.dashHeader}>
            <div className={styles.dashWindowBtns}>
              <span className={`${styles.windowBtn} ${styles.redBtn}`} />
              <span className={`${styles.windowBtn} ${styles.yellowBtn}`} />
              <span className={`${styles.windowBtn} ${styles.greenBtn}`} />
              <span className={styles.dashUrl}>wms.seatransglobal.com/dashboard/live-telemetry</span>
            </div>

            <div className={styles.dashStatusTag}>
              <span className={styles.greenPulse} />
              SYSTEM ACTIVE: 150+ NODES ONLINE
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className={styles.dashNavTabs}>
            <button
              className={`${styles.tabBtn} ${activeTab === "inventory" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("inventory")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.tabIcon}>
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </svg>
              <span>Live Inventory</span>
            </button>

            <button
              className={`${styles.tabBtn} ${activeTab === "velocity" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("velocity")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.tabIcon}>
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>Fulfillment Velocity</span>
            </button>

            <button
              className={`${styles.tabBtn} ${activeTab === "api" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("api")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.tabIcon}>
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <path d="M13 6h3a2 2 0 0 1 2 2v7" />
              </svg>
              <span>ERP & Store Connectors</span>
            </button>

            <button
              className={`${styles.tabBtn} ${activeTab === "cold" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("cold")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.tabIcon}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span>Cold Chain Telemetry</span>
            </button>
          </div>

          {/* Tab Content Display Area */}
          <div className={styles.dashBody}>
            {activeTab === "inventory" && (
              <div className={styles.tabView}>
                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <span className={styles.statBoxTitle}>Total SKUs Managed</span>
                    <span className={styles.statBoxNumber}>48,290</span>
                    <span className={styles.statTrend}>+12.4% this month</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statBoxTitle}>Active Warehouses</span>
                    <span className={styles.statBoxNumber}>14 Hubs</span>
                    <span className={styles.statTrend}>Global Bonded Zones</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statBoxTitle}>Reorder Alerts</span>
                    <span className={`${styles.statBoxNumber} ${styles.greenText}`}>0 Critical</span>
                    <span className={styles.statTrend}>Auto-PO Triggered</span>
                  </div>
                </div>

                {/* SKU Table Mockup */}
                <div className={styles.tableCard}>
                  <div className={styles.tableHeader}>
                    <span>SKU CODE</span>
                    <span>CATEGORY</span>
                    <span>BAY LOCATION</span>
                    <span>AVAILABLE STOCK</span>
                    <span>STATUS</span>
                  </div>
                  <div className={styles.tableRow}>
                    <span className={styles.skuCode}>SKU-88492-MED</span>
                    <span>Pharma / Medical</span>
                    <span>Zone C-14-A</span>
                    <span>14,200 Units</span>
                    <span className={styles.statusGreen}>In Stock (RFID Synced)</span>
                  </div>
                  <div className={styles.tableRow}>
                    <span className={styles.skuCode}>SKU-77210-LUX</span>
                    <span>Apparel / Retail</span>
                    <span>Zone A-08-F</span>
                    <span>8,940 Units</span>
                    <span className={styles.statusGreen}>In Stock (RFID Synced)</span>
                  </div>
                  <div className={styles.tableRow}>
                    <span className={styles.skuCode}>SKU-99104-ECOM</span>
                    <span>Consumer Electronics</span>
                    <span>Zone B-02-D</span>
                    <span>22,100 Units</span>
                    <span className={styles.statusGreen}>In Stock (RFID Synced)</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "velocity" && (
              <div className={styles.tabView}>
                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <span className={styles.statBoxTitle}>Today's Dispatched Orders</span>
                    <span className={styles.statBoxNumber}>12,840</span>
                    <span className={styles.statTrend}>99.98% SLA Met</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statBoxTitle}>Avg. Pick & Pack Time</span>
                    <span className={styles.statBoxNumber}>4.2 Mins</span>
                    <span className={styles.statTrend}>Robotics Accelerated</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statBoxTitle}>Order Cut-off SLA</span>
                    <span className={`${styles.statBoxNumber} ${styles.blueText}`}>18:00 EST</span>
                    <span className={styles.statTrend}>Same-Day Dispatch</span>
                  </div>
                </div>

                <div className={styles.graphCard}>
                  <div className={styles.graphHeader}>
                    <span>Hourly Order Dispatch Velocity (Units/Hr)</span>
                    <span className={styles.liveTag}>LIVE UPDATING</span>
                  </div>
                  <div className={styles.barGraph}>
                    <div className={styles.barItem} style={{ height: "45%" }}><span className={styles.barLabel}>08:00</span></div>
                    <div className={styles.barItem} style={{ height: "65%" }}><span className={styles.barLabel}>10:00</span></div>
                    <div className={styles.barItem} style={{ height: "92%" }}><span className={styles.barLabel}>12:00</span></div>
                    <div className={styles.barItem} style={{ height: "85%" }}><span className={styles.barLabel}>14:00</span></div>
                    <div className={styles.barItem} style={{ height: "100%" }}><span className={styles.barLabel}>16:00</span></div>
                    <div className={styles.barItem} style={{ height: "70%" }}><span className={styles.barLabel}>18:00</span></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "api" && (
              <div className={styles.tabView}>
                <div className={styles.connectorsGrid}>
                  <div className={styles.connectorCard}>
                    <div className={styles.connectorIcon}>🛍️</div>
                    <div className={styles.connectorInfo}>
                      <span className={styles.connectorName}>Shopify Plus</span>
                      <span className={styles.connectorStatus}>Active Webhook (0ms latency)</span>
                    </div>
                    <span className={styles.connectedBadge}>CONNECTED</span>
                  </div>

                  <div className={styles.connectorCard}>
                    <div className={styles.connectorIcon}>📦</div>
                    <div className={styles.connectorInfo}>
                      <span className={styles.connectorName}>Amazon FBA / FBM</span>
                      <span className={styles.connectorStatus}>Two-way Inventory Sync</span>
                    </div>
                    <span className={styles.connectedBadge}>CONNECTED</span>
                  </div>

                  <div className={styles.connectorCard}>
                    <div className={styles.connectorIcon}>💼</div>
                    <div className={styles.connectorInfo}>
                      <span className={styles.connectorName}>SAP S/4HANA ERP</span>
                      <span className={styles.connectorStatus}>Enterprise EDI Connector</span>
                    </div>
                    <span className={styles.connectedBadge}>CONNECTED</span>
                  </div>

                  <div className={styles.connectorCard}>
                    <div className={styles.connectorIcon}>⚡</div>
                    <div className={styles.connectorInfo}>
                      <span className={styles.connectorName}>Custom REST / GraphQL API</span>
                      <span className={styles.connectorStatus}>Real-Time Token Authenticated</span>
                    </div>
                    <span className={styles.connectedBadge}>CONNECTED</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "cold" && (
              <div className={styles.tabView}>
                <div className={styles.coldGrid}>
                  <div className={styles.coldBox}>
                    <span className={styles.coldTitle}>Chamber A (Frozen Pharma)</span>
                    <span className={styles.tempVal}>-18.4 °C</span>
                    <span className={styles.tempStatus}>STATUS: OPTIMAL (-20°C to -15°C)</span>
                  </div>
                  <div className={styles.coldBox}>
                    <span className={styles.coldTitle}>Chamber B (Cold Storage)</span>
                    <span className={styles.tempVal}>+4.2 °C</span>
                    <span className={styles.tempStatus}>STATUS: OPTIMAL (+2°C to +8°C)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
