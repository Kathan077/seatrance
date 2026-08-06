"use client";

import { useState } from "react";
import BlogHero from "@/components/Blog/BlogHero";
import BlogGrid from "@/components/Blog/BlogGrid";
import BlogNewsletter from "@/components/Blog/BlogNewsletter";

const CATEGORIES = ["All", "Ocean Freight", "Air Freight", "3PL & Warehousing", "Customs & Compliance", "Supply Chain Tech"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Blog Hero with Search & Filter Pills */}
      <BlogHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={CATEGORIES}
      />

      {/* Blog Articles Grid with Spotlight Featured Article */}
      <BlogGrid
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />

      {/* Weekly Intelligence Newsletter Subscription */}
      <BlogNewsletter />
    </main>
  );
}
