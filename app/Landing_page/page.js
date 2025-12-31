import styles from "./page.module.css";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/* NAVBAR */}
      <header className={styles.navbar}>
        <div className={styles.brand}>
          <span className={styles.logo}>EduCourse</span>
        </div>
        <nav className={styles.menu}>
          <a className={styles.active}>Home</a>
          <a>Courses</a>
          <a>About</a>
          <a>Contact</a>
          <button className={styles.register}>Register</button>
        </nav>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h1>EduCourse UNUHA</h1>
          <p>
            Platform Katalog Kursus Online <br />
            Mahasiswa Universitas Nurul Huda.
          </p>
          <button className={styles.primaryBtn}>
            Jelajahi Kursus →
          </button>
        </div>

        {/* ===== CURVE (FINAL – DIBENERIN) ===== */}
        <div className={styles.curve}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path
              fill="#f4f6f5"
              d="M0,35 C240,65 480,80 720,75 960,70 1200,55 1440,60 L1440,90 L0,90 Z"
            />
          </svg>
        </div>
      </section>

      {/* KATEGORI */}
      <section className={styles.category}>
        <div className={styles.categoryHead}>
          <div className={styles.titleBlock}>
            <h2>Kategori Kursus</h2>
            <p>Temukan bidang yang sesuai minatmu</p>
          </div>

          <div className={styles.filter}>
            <span className={styles.filterText}>Semua Kategori</span>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardTop}>Web Development</div>
            <div className={styles.cardBody}>
              <p>
                Mekanisme pembuatan website dengan HTML, CSS, dan JavaScript.
              </p>
             <Link href="/courses/web-development">
              <button>Lihat Kursus →</button>
            </Link>

            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>Mobile Development</div>
            <div className={styles.cardBody}>
              <p>
                Desain dan pengembangan aplikasi mobile yang interaktif dan responsif.
              </p>
              <button>Lihat Kursus →</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>UI/UX Design</div>
            <div className={styles.cardBody}>
              <p>
                Mengerti dasar desain antarmuka, prototipe, dan pengalaman pengguna.
              </p>
              <button>Lihat Kursus →</button>
            </div>
          </div>
        </div>

        <button className={`${styles.primaryBtn} ${styles.center}`}>
          Lihat Semua Kursus →
        </button>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.sectionDivider}></div>
        <h2>Siap Tingkatkan Skillmu?</h2>
        <p>
          Gabung bersama mahasiswa UNUHA dan mulailah perjalanan belajarmu di EduCourse!
        </p>
        <button className={styles.primaryBtn}>
          Daftar Sekarang →
        </button>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <span className={styles.logo}>EduCourse</span>
          <div className={styles.footerLinks}>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
        </div>
        <p className={styles.copy}>
          © 2024 EduCourse UNUHA. All rights reserved.
        </p>
      </footer>
    </>
  );
}
