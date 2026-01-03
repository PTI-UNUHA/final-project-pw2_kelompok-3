"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";


export default function MobileDevelopmentPage() {
  const router = useRouter();

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

        <div className={styles.overlay}></div>

        <button
          className={styles.backBtn}
          onClick={() => router.back()}
        >
          ← Kembali
        </button>

        <div className={styles.heroText}>
          <h1>Kursus Mobile Development</h1>
          <p>
            Bangun aplikasi Android & iOS <br />
            dengan teknologi modern.
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
          <h2>Kursus Mobile Development</h2>
          <p>Pelajari pembuatan aplikasi mobile dari dasar hingga mahir.</p>

          <div className={styles.highlightBox}>
            <div className={styles.iconBox}>📱</div>
            <ul>
              <li>Android & iOS Development</li>
              <li>UI Mobile Profesional</li>
              <li>API & Backend Integration</li>
              <li>Build APK & Publish App</li>
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
          bg="bgAndroid"
          title="Android Development (Kotlin)"
          rating="4.9 | 342 | Pemula"
          desc="Membangun aplikasi Android native."
          price="Gratis"
        />

        <CourseCard
          bg="bgFlutter"
          title="Flutter Mobile App"
          rating="4.8 | 410 | Menengah"
          desc="Satu codebase untuk Android & iOS."
          price="Rp 150.000"
        />

        <CourseCard
          bg="bgReactNative"
          title="React Native"
          rating="4.7 | 295 | Menengah"
          desc="Mobile app dengan JavaScript & React."
          price="Rp 180.000"
        />

        <CourseCard
          bg="bgIos"
          title="iOS Development (Swift)"
          rating="4.8 | 210 | Menengah"
          desc="Bangun aplikasi iOS dengan Swift."
          price="Rp 170.000"
        />

        <CourseCard
          bg="bgFirebase"
          title="Firebase untuk Mobile App"
          rating="4.7 | 198 | Menengah"
          desc="Auth, database, dan hosting mobile."
          price="Rp 130.000"
        />

        <CourseCard
          bg="bgUiMobile"
          title="UI/UX Mobile Design"
          rating="4.8 | 260 | Pemula"
          desc="Desain UI mobile modern."
          price="Rp 120.000"
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

