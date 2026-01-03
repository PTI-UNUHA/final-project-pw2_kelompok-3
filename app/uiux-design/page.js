"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function UiuxDesignPage() {
  const router = useRouter();

  return (
    <>
      {/* ================= HERO ================= */}
    <section className={styles.hero}>
      <Image
        src="/unuha.jpg"   // simpan di /public
        alt="UI UX Design"
        fill
        priority
        className={styles.heroImg}
      />

      <div className={styles.overlay}></div>

      <button className={styles.backBtn} onClick={() => router.back()}>
        ← Kembali
      </button>

      <div className={styles.heroText}>
        <h1>Kursus UI/UX Design</h1>
        <p>
          Bangun desain aplikasi & website <br />
          yang user-friendly dan profesional.
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
          <h2>Kursus UI/UX Design</h2>
          <p>Bangun desain aplikasi & website yang user-friendly.</p>

          <div className={styles.highlightBox}>
            <div className={styles.iconBox}>🎨</div>
            <ul>
              <li>UI Design & UX Research</li>
              <li>Wireframe & Prototype</li>
              <li>Design System</li>
              <li>Studi Kasus Nyata</li>
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
        <CourseCard bg="bgFigma" title="UI Design dengan Figma" rating="4.9 | 342 | Pemula" desc="Membangun aplikasi Android native." price="Gratis" />
        <CourseCard bg="bgUxResearch" title="UX Research Dasar" />
        <CourseCard bg="bgWireframe" title="Wireframe & User Flow" />
        <CourseCard bg="bgPrototype" title="Prototype Interaktif" />
        <CourseCard bg="bgDesignSystem" title="Design System" />
        <CourseCard bg="bgPortfolio" title="UI/UX Portfolio Project" />
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

