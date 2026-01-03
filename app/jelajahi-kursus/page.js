"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function JelajahiKursusPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>

        <button
            className={styles.backBtn}
            onClick={() => window.history.back()}
        >
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
          <p>
            Temukan berbagai kursus terbaik untuk meningkatkan
            <br />
            skill akademik dan profesionalmu.
          </p>
        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className={styles.filterSection}>
        <input placeholder="Cari kursus..." />
        <select>
          <option>Semua Kategori</option>
          <option>Web Development</option>
          <option>Mobile Development</option>
          <option>UI/UX Design</option>
        </select>
        <select>
          <option>Semua Level</option>
          <option>Pemula</option>
          <option>Menengah</option>
          <option>Mahir</option>
        </select>
        <button>Cari</button>
      </section>

      {/* ================= COURSE GRID ================= */}
      <section className={styles.courseGrid}>
        <CourseCard
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          title="Belajar HTML & CSS"
          category="Web Development"
          level="Pemula"
          rating="4.9"
          price="Gratis"
        />

        <CourseCard
          image="https://images.unsplash.com/photo-1518770660439-4636190af475"
          title="JavaScript Dasar"
          category="Web Development"
          level="Pemula"
          rating="4.8"
          price="Rp 120.000"
        />

        <CourseCard
          image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          title="React JS"
          category="Web Development"
          level="Menengah"
          rating="4.9"
          price="Rp 200.000"
        />

        <CourseCard
          image="https://images.unsplash.com/photo-1581091012184-5c7dcb8f60b4"
          title="Flutter Mobile App"
          category="Mobile Development"
          level="Menengah"
          rating="4.8"
          price="Rp 150.000"
        />

        <CourseCard
          image="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb"
          title="Android Development"
          category="Mobile Development"
          level="Pemula"
          rating="4.9"
          price="Gratis"
        />

        <CourseCard
          image="https://images.unsplash.com/photo-1618788372246-79faff0c3742"
          title="UI/UX Design dengan Figma"
          category="UI/UX Design"
          level="Pemula"
          rating="4.8"
          price="Rp 120.000"
        />
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <h2>Siap Meningkatkan Skillmu?</h2>
        <p>Gabung bersama mahasiswa UNUHA dan mulai belajar sekarang.</p>
        <Link href="/register">
          <button>Daftar Sekarang →</button>
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <p>© 2024 EduCourse UNUHA. All rights reserved.</p>
      </footer>
    </>
  );
}

/* ================= CARD ================= */
function CourseCard({ image, title, category, level, rating, price }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className={styles.cardBody}>
        <span className={styles.category}>{category}</span>
        <h4>{title}</h4>
        <p>Level: {level}</p>
        <span className={styles.rating}>⭐ {rating}</span>

        <div className={styles.cardFooter}>
          <b>{price}</b>
          <button>Lihat Detail</button>
        </div>
      </div>
    </div>
  );
}
