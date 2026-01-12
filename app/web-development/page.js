"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

/* ================= DATA ================= */
const courses = [
  {
    id: 1,
    title: "HTML & CSS Fundamental",
    slug: "html-css-dasar",
    level: "Pemula",
    desc: "Membangun struktur dan tampilan website modern.",
    price: "Gratis",
    bg: "bgHtml",
  },
  {
    id: 2,
    title: "JavaScript Dasar",
    slug: "javascript-dasar",
    level: "Pemula",
    desc: "Logika pemrograman & interaksi website.",
    price: "Rp 120.000",
    bg: "bgJs",
  },
  {
    id: 3,
    title: "Bootstrap Framework",
    slug: "bootstrap-framework",
    level: "Menengah",
    desc: "Membuat layout responsif dengan cepat.",
    price: "Rp 150.000",
    bg: "bgBootstrap",
  },
  {
    id: 4,
    title: "React JS Fundamental",
    slug: "react-js-fundamental",
    level: "Menengah",
    desc: "Frontend modern berbasis komponen.",
    price: "Rp 200.000",
    bg: "bgReact",
  },
];

export default function WebDevelopmentPage() {
  const router = useRouter();
  const [level, setLevel] = useState("Semua");
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((c) => {
    const matchLevel = level === "Semua" || c.level === level;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchLevel && matchSearch;
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <Image
          src="/unuha.jpg"
          alt="UNUHA"
          fill
          priority
          className={styles.heroImg}
        />
        <div className={styles.overlay} />

        <button className={styles.backBtn} onClick={() => router.push("/")}>
          ← Home
        </button>

        <div className={styles.heroContent}>
          <span className={styles.breadcrumb}>
            Home / Courses / Web Development
          </span>
          <h1>Web Development</h1>
          <p>
            Jalur pembelajaran terstruktur untuk membangun
            website modern dan profesional.
          </p>
        </div>
      </section>

      {/* ================= INFO + FILTER ================= */}
      <section className={styles.topSection}>
        <div className={styles.infoBox}>
          <h2>Kenapa Web Development?</h2>
          <p>
            Web Development merupakan skill inti di dunia IT
            yang digunakan pada website, sistem informasi,
            dan aplikasi berbasis web.
          </p>

          <ul className={styles.keyList}>
            <li>HTML, CSS, JavaScript</li>
            <li>Framework modern</li>
            <li>Responsive & interaktif</li>
            <li>Proyek berbasis praktik</li>
          </ul>
        </div>

        <aside className={styles.filter}>
          <h3>Filter Kursus</h3>

          <div className={styles.filterGroup}>
            <span>Tingkat</span>
            <div className={styles.levelGroup}>
              {["Semua", "Pemula", "Menengah"].map((item) => (
                <button
                  key={item}
                  className={`${styles.levelBtn} ${
                    level === item ? styles.active : ""
                  }`}
                  onClick={() => setLevel(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span>Cari</span>
            <input
              placeholder="Cari kursus..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.resultInfo}>
            {filteredCourses.length} dari {courses.length} kursus
          </div>
        </aside>
      </section>

      {/* ================= COURSES ================= */}
      <section className={styles.courseGrid}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <h2>Siap Mulai Belajar?</h2>
        <p>
          Tingkatkan skill Web Development dan
          bangun portfolio pertamamu.
        </p>

        <Link href="/contact">
          <button className={styles.primaryBtn}>
            Hubungi Admin →
          </button>
        </Link>
      </section>

      <footer className={styles.footer}>
        © 2024 EduCourse UNUHA
      </footer>
    </>
  );
}

/* ================= CARD ================= */
function CourseCard({ bg, title, level, desc, price, slug }) {
  return (
    <div className={`${styles.card} ${styles[bg]}`} tabIndex="0">
      <div className={styles.cardImage} />
      <div className={styles.cardBody}>
        <span className={styles.levelBadge}>{level}</span>
        <h4>{title}</h4>
        <p>{desc}</p>

        <div className={styles.cardFooter}>
        <Link href={`/jelajahi-kursus/${slug}`}>
          <button>Lihat Detail</button>
        </Link>

          <b>{price}</b>
        </div>
      </div>
    </div>
  );
}
