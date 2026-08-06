"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogGrid.module.css";

export const BLOG_POSTS = [
  {
    id: "red-sea-freight-disruptions-2026",
    slug: "red-sea-freight-disruptions-2026",
    title: "Navigating Red Sea Shipping Disruptions: Strategies for Ocean Freight Resilience",
    excerpt: "An in-depth analysis of rerouting around the Cape of Good Hope, transit time impacts, surge surcharges, and how shippers can secure vessel space in 2026.",
    category: "Ocean Freight",
    date: "August 2, 2026",
    readTime: "6 min read",
    author: "Kandarp — Partner, Seatrans",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "rfid-robotics-3pl-warehousing",
    slug: "rfid-robotics-3pl-warehousing",
    title: "The Rise of RFID & Autonomous Robotics in Enterprise 3PL Warehousing",
    excerpt: "Discover how Automated Guided Vehicles (AGVs) and real-time RFID inventory tracking eliminate stockouts and boost pick accuracy to 99.98%.",
    category: "3PL & Warehousing",
    date: "July 28, 2026",
    readTime: "5 min read",
    author: "Lakshay — Partner, Seatrans",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "demystifying-customs-icegate-edi",
    slug: "demystifying-customs-icegate-edi",
    title: "Demystifying Customs Clearance: ICEGATE EDI Filing & Duty Optimization",
    excerpt: "Essential guide to HS code classifications, Bill of Entry filings, and duty-deferred storage in Free Trade Warehousing Zones (FTWZ).",
    category: "Customs & Compliance",
    date: "July 22, 2026",
    readTime: "7 min read",
    author: "Seatrans Compliance Desk",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "cold-chain-logistics-pharmaceuticals",
    slug: "cold-chain-logistics-pharmaceuticals",
    title: "Cold Chain Logistics for Pharmaceuticals: Temperature Control & GDP Protocols",
    excerpt: "Maintaining strict thermal integrity (-20°C to +25°C) across global air and ocean corridors for vaccines and temperature-sensitive biologics.",
    category: "Air Freight",
    date: "July 15, 2026",
    readTime: "4 min read",
    author: "Seatrans Air Cargo Team",
    image: "https://images.unsplash.com/photo-1586528116224-f757457419e5?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "air-vs-ocean-freight-corridors",
    slug: "air-vs-ocean-freight-corridors",
    title: "Air Freight vs Ocean Freight: Selecting the Right Corridor for High-Value Cargo",
    excerpt: "A comparative cost-benefit breakdown analyzing volumetric weight ratios, transit urgency, carbon footprints, and landed cost formulas.",
    category: "Supply Chain Tech",
    date: "July 10, 2026",
    readTime: "5 min read",
    author: "Seatrans Analytics Desk",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "digital-twin-iot-sensor-telemetry",
    slug: "digital-twin-iot-sensor-telemetry",
    title: "Digital Twin Technology: How IoT Sensor Telemetry is Transforming Supply Chains",
    excerpt: "How real-time container shock, humidity, and location telemetry empowers global supply chain managers with predictive risk alerts.",
    category: "Supply Chain Tech",
    date: "July 04, 2026",
    readTime: "6 min read",
    author: "Lakshay — Partner, Seatrans",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "multimodal-transport-cost-optimization",
    slug: "multimodal-transport-cost-optimization",
    title: "Multimodal Logistics: Combining Rail, Trucking & Feeder Vessels for Maximum Savings",
    excerpt: "How integrating inland container depots (ICDs) with coastal feeder routes cuts domestic freight budgets while lowering emissions.",
    category: "Ocean Freight",
    date: "June 28, 2026",
    readTime: "5 min read",
    author: "Kandarp — Partner, Seatrans",
    image: "https://images.unsplash.com/photo-1516576885502-d13d7af4e8b8?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
];

export default function BlogGrid({ searchQuery, selectedCategory }) {
  const [modalPost, setModalPost] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalPost(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (modalPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalPost]);

  // Filtering logic
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {filteredPosts.length === 0 ? (
          <div className={styles.noResultsBox}>
            <div className={styles.noResultsIcon}>🔍</div>
            <h3 className={styles.noResultsTitle}>No Articles Found</h3>
            <p className={styles.noResultsText}>
              We couldn't find any articles matching "{searchQuery}". Try searching for ocean freight, 3PL, or customs.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Article Spotlight */}
            {featuredPost && (
              <div className={styles.featuredCard} onClick={() => setModalPost(featuredPost)}>
                <div className={styles.featuredImageWrapper}>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className={styles.featuredImg}
                    unoptimized
                  />
                  <div className={styles.featuredOverlay} />
                  <span className={styles.spotlightBadge}>FEATURED ARTICLE</span>
                </div>

                <div className={styles.featuredContent}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryTag}>{featuredPost.category}</span>
                    <span className={styles.metaDot}>•</span>
                    <span className={styles.metaText}>{featuredPost.date}</span>
                    <span className={styles.metaDot}>•</span>
                    <span className={styles.metaText}>{featuredPost.readTime}</span>
                  </div>

                  <h2 className={styles.featuredTitle}>
                    {featuredPost.title}
                  </h2>

                  <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>

                  <div className={styles.featuredFooter}>
                    <span className={styles.authorName}>{featuredPost.author}</span>
                    <button
                      type="button"
                      className={styles.readMoreBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalPost(featuredPost);
                      }}
                    >
                      <span>Read Article</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.arrowIcon}>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className={styles.gridHeader}>
              <h3 className={styles.gridTitle}>
                {selectedCategory === "All" ? "Latest Articles & Guides" : `${selectedCategory} Articles`}
              </h3>
              <span className={styles.countText}>{filteredPosts.length} Articles</span>
            </div>

            <div className={styles.grid}>
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className={styles.card}
                  onClick={() => setModalPost(post)}
                >
                  <div className={styles.cardImgWrapper}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className={styles.cardImg}
                      unoptimized
                    />
                    <span className={styles.cardCatBadge}>{post.category}</span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className={styles.cardTitle}>{post.title}</h4>

                    <p className={styles.cardExcerpt}>{post.excerpt}</p>

                    <div className={styles.cardFooter}>
                      <span className={styles.cardAuthor}>{post.author}</span>
                      <button
                        type="button"
                        className={styles.cardArrowBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalPost(post);
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ============================================================
          INTERACTIVE ARTICLE DETAIL MODAL READER
         ============================================================ */}
      {modalPost && (
        <div className={styles.modalOverlay} onClick={() => setModalPost(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className={styles.closeBtn}
              onClick={() => setModalPost(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalMeta}>
                <span className={styles.modalBadge}>{modalPost.category}</span>
                <span>•</span>
                <span>{modalPost.date}</span>
                <span>•</span>
                <span>{modalPost.readTime}</span>
              </div>

              <h2 className={styles.modalTitle}>{modalPost.title}</h2>

              <div className={styles.modalAuthorRow}>
                <div className={styles.authorAvatar}>
                  {modalPost.author.charAt(0)}
                </div>
                <div>
                  <div className={styles.modalAuthorName}>{modalPost.author}</div>
                  <div className={styles.modalAuthorSub}>Seatrans Global Shipping Logistics</div>
                </div>
              </div>
            </div>

            {/* Modal Image */}
            <div className={styles.modalImgWrapper}>
              <Image
                src={modalPost.image}
                alt={modalPost.title}
                fill
                className={styles.modalImg}
                unoptimized
              />
            </div>

            {/* Modal Article Body */}
            <div className={styles.modalBody}>
              <p className={styles.leadPara}>{modalPost.excerpt}</p>

              <p>
                Global freight networks are undergoing rapid transformation in 2026. As vessel routings adjust across major trade lanes and enterprise supply chains prioritize resilience over pure cost minimization, logistics managers must leverage data telemetry, bonded warehousing, and multi-modal strategies to guarantee product availability.
              </p>

              <h3>Key Operational Takeaways:</h3>
              <ul>
                <li><strong>Capacity & Space Allocation:</strong> Securing ocean vessel allocations 4 to 6 weeks ahead of peak shipping windows.</li>
                <li><strong>Digital WMS Visibility:</strong> Utilizing real-time RFID tracking to monitor stock levels across multi-regional 3PL hubs.</li>
                <li><strong>Customs Compliance Readiness:</strong> Ensuring accurate HS Code classifications and electronic ICEGATE EDI filing to eliminate port demurrage.</li>
              </ul>

              <blockquote className={styles.modalQuote}>
                "In modern international shipping, agility and predictive visibility separate market leaders from disrupted supply chains."
              </blockquote>

              <p>
                At Seatrans Global, our dedicated ocean freight, air cargo, and 3PL warehousing desks provide single-window support for global enterprises. Connect with our logistics architects today to audit your freight corridors.
              </p>
            </div>

            {/* Modal Footer Controls */}
            <div className={styles.modalFooter}>
              <button className={styles.modalCloseFooterBtn} onClick={() => setModalPost(null)}>
                Close Reader
              </button>

              <Link href={`/blog/${modalPost.slug}`} className={styles.modalFullPageBtn}>
                <span>Open Full Page View</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.modalSvg}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
