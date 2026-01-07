"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

/* ================= DATA KURSUS ================= */
const courses = [
  {
    id: 1,
    title: "Android Development (Kotlin)",
    level: "Pemula",
    desc: "Membangun aplikasi Android native menggunakan Kotlin.",
    price: "Gratis",
    bg: "bgAndroid",
  },
  {
    id: 2,
    title: "Flutter Mobile App",
    level: "Menengah",
    desc: "Satu codebase untuk Android dan iOS.",
    price: "Rp 150.000",
    bg: "bgFlutter",
  },
  {
    id: 3,
    title: "React Native",
    level: "Menengah",
    desc: "Mobile app dengan JavaScript dan React.",
    price: "Rp 180.000",
    bg: "bgReactNative",
  },
  {
    id: 4,
    title: "iOS Development (Swift)",
    level: "Menengah",
    desc: "Membangun aplikasi iOS modern dengan Swift.",
    price: "Rp 170.000",
    bg: "bgIos",
  },
  {
    id: 5,
    title: "Firebase untuk Mobile App",
    level: "Menengah",
    desc: "Auth, database, dan backend mobile.",
    price: "Rp 130.000",
    bg: "bgFirebase",
  },
  {
    id: 6,
    title: "UI/UX Mobile Design",
    level: "Pemula",
    desc: "Desain UI mobile modern & usable.",
    price: "Rp 120.000",
    bg: "bgUiMobile",
  },
];

export default function MobileDevelopmentPage() {
  const router = useRouter();

  /* ===== STATE FILTER (SAMA DENGAN WEB) ===== */
  const [level, setLevel] = useState("Semua");
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((c) => {
    const matchLevel = level === "Semua" || c.level === level;
    const matchSearch = c.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchLevel && matchSearch;
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <Image
          src="/unuha.jpg"
          alt="Mobile Development"
          fill
          priority
          className={styles.heroImg}
        />
        <div className={styles.overlay} />

        <button
          className={styles.backBtn}
          onClick={() => router.push("/")}
        >
          ← Home
        </button>

        <div className={styles.heroContent}>
          <span className={styles.breadcrumb}>
            Home / Courses / Mobile Development
          </span>
          <h1>Mobile Development</h1>
          <p>
            Jalur pembelajaran untuk membangun aplikasi
            Android dan iOS secara profesional.
          </p>
        </div>
      </section>

      {/* ================= INFO + FILTER ================= */}
      <section className={styles.topSection}>
        <div className={styles.infoBox}>
          <h2>Kenapa Mobile Development?</h2>
          <p>
            Mobile Development adalah skill penting untuk
            membangun aplikasi Android & iOS yang siap
            dipublish.
          </p>

          <ul className={styles.keyList}>
            <li>Android & iOS Development</li>
            <li>Framework lintas platform</li>
            <li>Integrasi API & Firebase</li>
            <li>Build & publish aplikasi</li>
          </ul>
        </div>

        {/* ===== FILTER (COPY 1:1 DARI WEB) ===== */}
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

      {/* ================= COURSE GRID ================= */}
      <section className={styles.courseGrid}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <h2>Siap Jadi Mobile Developer?</h2>
        <p>
          Mulai belajar dan bangun aplikasi pertamamu
          sekarang.
        </p>
        <Link href="/contact">
          <button className={styles.primaryBtn}>
            Hubungi Admin →
          </button>
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        © 2024 EduCourse UNUHA
      </footer>
    </>
  );
}

/* ================= CARD ================= */
function CourseCard({ bg, title, level, desc, price }) {
  return (
    <div className={`${styles.card} ${styles[bg]}`} tabIndex="0">
      <div className={styles.cardImage}></div>

      <div className={styles.cardBody}>
        <span className={styles.levelBadge}>{level}</span>
        <h4>{title}</h4>
        <p>{desc}</p>

        <div className={styles.cardFooter}>
        <Link href="/daftar?kursus=Android Development (Kotlin)">
          <button>Daftar</button>
        </Link>

          <b>{price}</b>
        </div>
      </div>
    </div>
  );
}
