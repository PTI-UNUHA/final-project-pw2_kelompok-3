"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

/* ================= DATA UI/UX ================= */
const courses = [
  {
    id: 1,
    title: "UI Design dengan Figma",
    level: "Pemula",
    desc: "Mendesain antarmuka aplikasi modern dengan Figma.",
    price: "Gratis",
    bg: "bgFigma",
  },
  {
    id: 2,
    title: "UX Research Dasar",
    level: "Pemula",
    desc: "Riset user untuk memahami kebutuhan pengguna.",
    price: "Rp 120.000",
    bg: "bgUxResearch",
  },
  {
    id: 3,
    title: "Wireframe & User Flow",
    level: "Menengah",
    desc: "Menyusun alur aplikasi yang efektif dan logis.",
    price: "Rp 130.000",
    bg: "bgWireframe",
  },
  {
    id: 4,
    title: "Prototype Interaktif",
    level: "Menengah",
    desc: "Membuat prototype interaktif untuk usability testing.",
    price: "Rp 150.000",
    bg: "bgPrototype",
  },
  {
    id: 5,
    title: "Design System",
    level: "Menengah",
    desc: "Membangun sistem desain yang konsisten.",
    price: "Rp 170.000",
    bg: "bgDesignSystem",
  },
  {
    id: 6,
    title: "UI/UX Portfolio Project",
    level: "Lanjutan",
    desc: "Studi kasus nyata untuk portofolio UI/UX.",
    price: "Rp 200.000",
    bg: "bgPortfolio",
  },
];

export default function UiuxDesignPage() {
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
      {/* HERO */}
      <section className={`${styles.hero} ${styles.sectionAnimate}`}>
        <Image
          src="/unuha.jpg"
          alt="UI UX Design"
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
            Home / Courses / UI/UX Design
          </span>
          <h1>UI / UX Design</h1>
          <p>
            Jalur pembelajaran untuk membangun desain
            aplikasi & website yang user-friendly.
          </p>
        </div>
      </section>

      {/* INFO + FILTER */}
      <section className={`${styles.topSection} ${styles.sectionAnimate}`}>
        <div className={styles.infoBox}>
          <h2>Kenapa UI/UX Design?</h2>
          <ul className={styles.keyList}>
            <li>User Research & Usability</li>
            <li>Wireframe & Prototype</li>
            <li>Design System</li>
            <li>Portofolio berbasis studi kasus</li>
          </ul>
        </div>

        <aside className={styles.filter}>
          <h3>Filter Kursus</h3>

          <div className={styles.filterGroup}>
            <span>Tingkat</span>
            <div className={styles.levelGroup}>
              {["Semua", "Pemula", "Menengah", "Lanjutan"].map((item) => (
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
              placeholder="Cari kursus UI/UX..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.resultInfo}>
            {filteredCourses.length} dari {courses.length} kursus
          </div>
        </aside>
      </section>

      {/* GRID */}
      <section className={`${styles.courseGrid} ${styles.sectionAnimate}`}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </section>

      {/* CTA */}
      <section className={`${styles.cta} ${styles.sectionAnimate}`}>
        <h2>Siap Menjadi UI/UX Designer?</h2>
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
function CourseCard({ bg, title, level, desc, price }) {
  return (
    <div className={`${styles.card} ${styles[bg]}`} tabIndex="0">
      <div className={styles.cardImage} />
      <div className={styles.cardBody}>
        <span className={styles.levelBadge}>{level}</span>
        <h4>{title}</h4>
        <p>{desc}</p>

        <div className={styles.cardFooter}>
        <Link href="/daftar?kursus=UI UX Design Dasar">
          <button>Daftar</button>
        </Link>

          <b>{price}</b>
        </div>
      </div>
    </div>
  );
}
