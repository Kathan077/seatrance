"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/components/Blog/BlogGrid";

export default function BlogPostPage({ params }) {
  // Unwrap dynamic params
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff", padding: "140px 0 100px" }}>
      <article style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#64748b", marginBottom: "28px" }}>
          <Link href="/" style={{ color: "#1e65b3", fontWeight: "600" }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: "#1e65b3", fontWeight: "600" }}>Blog</Link>
          <span>/</span>
          <span style={{ color: "#0c2340", fontWeight: "700" }}>{post.category}</span>
        </div>

        {/* Article Meta Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{
            fontSize: "12px",
            fontWeight: "700",
            color: "#1e65b3",
            background: "rgba(30, 101, 179, 0.08)",
            padding: "4px 14px",
            borderRadius: "20px"
          }}>
            {post.category}
          </span>
          <span style={{ fontSize: "13px", color: "#94a3b8" }}>•</span>
          <span style={{ fontSize: "13px", color: "#64748b" }}>{post.date}</span>
          <span style={{ fontSize: "13px", color: "#94a3b8" }}>•</span>
          <span style={{ fontSize: "13px", color: "#64748b" }}>{post.readTime}</span>
        </div>

        {/* Article Title */}
        <h1 style={{
          fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
          fontSize: "clamp(30px, 3.8vw, 48px)",
          fontWeight: "850",
          color: "#0c2340",
          lineHeight: "1.2",
          letterSpacing: "-1px",
          marginBottom: "20px"
        }}>
          {post.title}
        </h1>

        {/* Author Bio Line */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px", paddingBottom: "24px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#1e65b3", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "16px" }}>
            {post.author.charAt(0)}
          </div>
          <div>
            <div style={{ fontSize: "15px", fontWeight: "800", color: "#0c2340" }}>{post.author}</div>
            <div style={{ fontSize: "12px", color: "#64748b" }}>Seatrans Global Shipping Logistics</div>
          </div>
        </div>

        {/* Featured Image */}
        <div style={{ position: "relative", width: "100%", height: "420px", borderRadius: "24px", overflow: "hidden", marginBottom: "40px" }}>
          <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} unoptimized />
        </div>

        {/* Article Body Content */}
        <div style={{ fontSize: "17px", color: "#334155", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "24px" }}>
          <p style={{ fontSize: "20px", fontWeight: "600", color: "#0c2340", lineHeight: "1.6" }}>
            {post.excerpt}
          </p>

          <p>
            Global freight networks are undergoing rapid transformation in 2026. As vessel routings adjust across major trade lanes and enterprise supply chains prioritize resilience over pure cost minimization, logistics managers must leverage data telemetry, bonded warehousing, and multi-modal strategies to guarantee product availability.
          </p>

          <h2 style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)", fontSize: "26px", fontWeight: "800", color: "#0c2340", marginTop: "16px" }}>
            Key Strategic Operational Takeaways:
          </h2>

          <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li><strong>Proactive Capacity Allocation:</strong> Securing vessel allocations 4 to 6 weeks ahead of peak shipping windows.</li>
            <li><strong>Digital WMS Visibility:</strong> Utilizing real-time RFID tracking to monitor stock levels across multi-regional hubs.</li>
            <li><strong>Customs Compliance Readiness:</strong> Ensuring accurate HS Code classifications and electronic ICEGATE EDI filing to eliminate port demurrage.</li>
          </ul>

          <blockquote style={{ borderLeft: "4px solid #1e65b3", paddingLeft: "20px", margin: "20px 0", fontStyle: "italic", fontSize: "19px", color: "#0c2340", fontWeight: "600" }}>
            "In modern international shipping, agility and predictive visibility separate market leaders from disrupted supply chains."
          </blockquote>

          <p>
            At Seatrans Global, our dedicated ocean freight, air cargo, and 3PL warehousing desks provide single-window support for global enterprises. Connect with our logistics architects today to audit your freight corridors.
          </p>
        </div>

        {/* Back Button */}
        <div style={{ marginTop: "50px", paddingTop: "30px", borderTop: "1px solid #e2e8f0" }}>
          <Link href="/blog" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#1e65b3",
            color: "#ffffff",
            padding: "12px 28px",
            borderRadius: "50px",
            fontWeight: "700",
            fontSize: "14px"
          }}>
            ← Back to Blog Journal
          </Link>
        </div>

        {/* Related Articles Grid */}
        <div style={{ marginTop: "70px" }}>
          <h3 style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)", fontSize: "24px", fontWeight: "850", color: "#0c2340", marginBottom: "24px" }}>
            Related Industry Articles
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {relatedPosts.map((rel) => (
              <Link key={rel.id} href={`/blog/${rel.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "18px", height: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#1e65b3" }}>{rel.category}</span>
                  <h4 style={{ fontSize: "16px", fontWeight: "800", color: "#0c2340", margin: 0, lineHeight: "1.3" }}>{rel.title}</h4>
                  <span style={{ fontSize: "12px", color: "#64748b", marginTop: "auto" }}>{rel.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
