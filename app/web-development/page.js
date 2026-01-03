"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function CoursesPage() {
  const router = useRouter();

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

        <div className={styles.overlay}></div>

        <button
          className={styles.backBtn}
          onClick={() => router.back()}
        >
          ← Kembali
        </button>

        <div className={styles.heroText}>
          <h1>Kursus Web Development</h1>
          <p>
            Pelajari cara membuat website <br />
            dari dasar hingga mahir.
          </p>
        </div>

        <div className={styles.curve}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path
              d="M0,40 C240,80 480,90 720,80 960,70 1200,30 1440,40 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ================= INFO + FILTER ================= */}
      <section className={styles.topSection}>
        <div className={styles.infoBox}>
          <h2>Kursus Web Development</h2>
          <p>Pelajari cara membuat website dari dasar hingga mahir.</p>

          <div className={styles.highlightBox}>
            <div className={styles.iconBox}>{"</>"}</div>
            <ul>
              <li>HTML, CSS, JavaScript, Framework</li>
              <li>Website responsif & interaktif</li>
              <li>Materi praktis & studi kasus</li>
              <li>Proyek nyata</li>
            </ul>
          </div>
        </div>

        <aside className={styles.filter}>
          <h3>Filter Kursus</h3>
          <select>
            <option>Semua Tingkat</option>
          </select>
          <select>
            <option>Semua Bahasa</option>
          </select>
          <input placeholder="Cari kursus..." />
          <button>Filter</button>
        </aside>
      </section>

      {/* ================= LIST KURSUS ================= */}
      <section className={styles.courseGrid}>
        <CourseCard
          bg="bgHtml"
          title="Belajar HTML & CSS dari Nol"
          rating="4.9 | 289 | Pemula"
          desc="Pelajari dasar HTML dan CSS dengan mudah."
          price="Gratis"
        />

        <CourseCard
          bg="bgJs"
          title="JavaScript untuk Pemula"
          rating="4.8 | 312 | Pemula"
          desc="Belajar JavaScript dari dasar."
          price="Rp 120.000"
        />

        <CourseCard
          bg="bgBootstrap"
          title="Framework CSS: Bootstrap"
          rating="4.7 | 231 | Menengah"
          desc="Bootstrap untuk web responsif."
          price="Rp 150.000"
        />

        <CourseCard
          bg="bgReact"
          title="React JS: Dasar Hingga Mahir"
          rating="4.9 | 476 | Menengah - Mahir"
          desc="Bangun aplikasi front-end modern."
          price="Rp 200.000"
        />
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>EduCourse</div>
        <p>© 2024 EduCourse UNUHA. All rights reserved.</p>
      </footer>
    </>
  );
}

/* ================= CARD ================= */
function CourseCard({ bg, title, rating, desc, price }) {
  return (
    <div className={`${styles.card} ${styles[bg]}`}>
      <div className={styles.cardImage}></div>

      <div className={styles.cardBody}>
        <h4>{title}</h4>
        <span className={styles.rating}>⭐ {rating}</span>
        <p>{desc}</p>

        <div className={styles.cardFooter}>
          <button>Daftar Kursus</button>
          <b>{price}</b>
        </div>
      </div>
    </div>
  );
}
