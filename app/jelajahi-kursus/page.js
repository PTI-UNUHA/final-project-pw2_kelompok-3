"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const COURSES = [
  { title: "HTML & CSS Dasar", slug: "html-css-dasar", category: "Web Development", level: "Pemula", rating: 4.9, price: "Gratis", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { title: "JavaScript Dasar", slug: "javascript-dasar", category: "Web Development", level: "Pemula", rating: 4.8, price: "Rp 120.000", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { title: "React JS", slug: "react-js-fundamental", category: "Web Development", level: "Menengah", rating: 4.9, price: "Rp 200.000", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c" },
  { title: "Next.js", slug: "next-js", category: "Web Development", level: "Mahir", rating: 4.8, price: "Rp 250.000", image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498" },

  { title: "Flutter Mobile App", slug: "flutter-mobile-app", category: "Mobile Development", level: "Menengah", rating: 4.8, price: "Rp 150.000", image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6" },
  { title: "Android Development", slug: "android-development-kotlin", category: "Mobile Development", level: "Pemula", rating: 4.9, price: "Gratis", image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb" },
  { title: "Kotlin Advanced", slug: "kotlin-advanced", category: "Mobile Development", level: "Mahir", rating: 4.7, price: "Rp 220.000", image: "https://images.unsplash.com/photo-1581091012184-5c7dcb8f60b4" },
  { title: "Flutter UI Animations", slug: "flutter-ui-animations", category: "Mobile Development", level: "Menengah", rating: 4.8, price: "Rp 180.000", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4" },

  { title: "UI/UX Design Figma", slug: "figma-ui-design", category: "UI/UX Design", level: "Pemula", rating: 4.8, price: "Rp 120.000", image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742" },
  { title: "UX Research", slug: "ux-research-wireframing", category: "UI/UX Design", level: "Menengah", rating: 4.7, price: "Rp 160.000", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c" },
  { title: "Design System", slug: "design-system", category: "UI/UX Design", level: "Mahir", rating: 4.9, price: "Rp 230.000", image: "https://images.unsplash.com/photo-1558655146-d09347e92766" },
  { title: "UX Portfolio Project", slug: "ux-portfolio-project", category: "UI/UX Design", level: "Menengah", rating: 4.8, price: "Rp 190.000", image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28" },
];

export default function JelajahiKursusPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const filteredCourses = COURSES.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || c.category === category;
    const matchLevel = level === "All" || c.level === level;
    return matchSearch && matchCategory && matchLevel;
  });

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <button className={styles.backBtn} onClick={() => window.history.back()}>
          ← Kembali
        </button>

        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Jelajahi Kursus"
          fill
          priority
          className={styles.heroImg}
        />
        <div className={styles.overlay}></div>

        <div className={styles.heroText}>
          <h1>Jelajahi Semua Kursus</h1>
          <p>Total {filteredCourses.length} Kursus Tersedia</p>
        </div>
      </section>

      {/* FILTER */}
      <section className={styles.filterSection}>
        <input
          placeholder="Cari kursus..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">Semua Kategori</option>
          <option>Web Development</option>
          <option>Mobile Development</option>
          <option>UI/UX Design</option>
        </select>

        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="All">Semua Level</option>
          <option>Pemula</option>
          <option>Menengah</option>
          <option>Mahir</option>
        </select>
      </section>

      {/* COURSE GRID */}
      <section className={styles.courseGrid}>
        {filteredCourses.map((c, i) => (
          <div className={styles.card} key={i}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${c.image})` }}
            ></div>

            <div className={styles.cardBody}>
              <span className={styles.category}>{c.category}</span>
              <h4>{c.title}</h4>
              <p className={styles.level}>Level: {c.level}</p>
              <span className={styles.rating}>⭐ {c.rating}</span>

              <div className={styles.cardFooter}>
                <span className={styles.price}>{c.price}</span>
              <Link href={`/jelajahi-kursus/${c.slug}`}>
                <button className={styles.detailBtn}>
                  Lihat Detail
                </button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Siap Meningkatkan Skillmu?</h2>
        <p>Gabung sekarang dan mulai belajar.</p>
        <Link href="/register">
          <button className={styles.cardBtn}>Daftar Sekarang</button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        © 2026 EduCourse UNUHA
      </footer>
    </>
  );
}
