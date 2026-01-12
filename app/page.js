"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.homeWrapper}>
      {/* NAVBAR */}
      <header className={styles.navbar}>
        <div className={styles.navbarInner}>
          <div className={styles.brand}>
            <span className={styles.logo}>EduCourse</span>
          </div>

          <nav className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
            <Link href="/" className={styles.active} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/register" className={styles.register} onClick={() => setMenuOpen(false)}>Register</Link>
          </nav>

          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
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
            <p>Temukan bidang yang sesuai minatmu!</p>
          </div>

        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardTop}>Web Development</div>
            <div className={styles.cardBody}>
              <p>
                Mekanisme pembuatan website dengan HTML, CSS, dan JavaScript.
              </p>
             <Link href="/web-development">
              <button>Lihat Kursus →</button>
            </Link>
            <button 
              className={styles.shareBtn}
              onClick={() => navigator.share?.({
                title: 'Web Development Kursus',
                text: 'Pelajari mekanisme pembuatan website dengan HTML, CSS, dan JavaScript',
                url: window.location.origin + '/web-development'
              }) || alert('Share feature not supported')}
            >
              📤 Share
            </button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>Mobile Development</div>
            <div className={styles.cardBody}>
              <p>
                Desain dan pengembangan aplikasi mobile yang interaktif dan responsif.
              </p>

            <Link href="/mobile-development">
              <button>Lihat Kursus →</button>
            </Link>
            <button 
              className={styles.shareBtn}
              onClick={() => navigator.share?.({
                title: 'Mobile Development Kursus',
                text: 'Pelajari desain dan pengembangan aplikasi mobile yang interaktif dan responsif',
                url: window.location.origin + '/mobile-development'
              }) || alert('Share feature not supported')}
            >
              📤 Share
            </button>

            </div>
          </div>


          <div className={styles.card}>
            <div className={styles.cardTop}>UI/UX Design</div>
            <div className={styles.cardBody}>
              <p>
                Mengerti dasar desain antarmuka, prototipe, dan pengalaman pengguna.
              </p>
             <Link href="/uiux-design">
              <button>Lihat Kursus →</button>
            </Link>
            <button 
              className={styles.shareBtn}
              onClick={() => navigator.share?.({
                title: 'UI/UX Design Kursus',
                text: 'Pelajari dasar desain antarmuka, prototipe, dan pengalaman pengguna',
                url: window.location.origin + '/uiux-design'
              }) || alert('Share feature not supported')}
            >
              📤 Share
            </button>

            </div>
          </div>
        </div>

       <Link href="/courses">
        <button className={`${styles.primaryBtn} ${styles.center}`}>
          Lihat Semua Kursus →
        </button>
      </Link>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.sectionDivider}></div>
        <h2>Siap Tingkatkan Skillmu?</h2>
        <p>
          Gabung bersama mahasiswa UNUHA dan mulailah perjalanan belajarmu di EduCourse!
        </p>

      </section>

{/* FOOTER */}
<footer className={styles.footer}>
  <div className={styles.footerContainer}>

    {/* BRAND */}
    <div className={styles.footerBrand}>
      <h3>EduCourse</h3>
      <p>
        EduCourse adalah platform pembelajaran teknologi
        untuk mahasiswa Universitas Nurul Huda
        yang berfokus pada skill masa depan.
      </p>

      <ul>
        <li>Universitas Nurul Huda</li>
        <li>OKU Timur, Sumatera Selatan</li>
        <li>Email: educourse@unuha.ac.id</li>
        <li>Phone: +62 812-xxxx-xxxx</li>
      </ul>
    </div>

    {/* QUICK LINKS */}
    <div className={styles.footerCol}>
      <h4>Quick Links</h4>
      <Link href="/about">About Us</Link>
      <Link href="/courses">Courses</Link>
      <a>Career</a>
      <a>FAQs</a>
    </div>

    {/* SERTIFIKASI (CSS IMAGE) */}
    <div className={styles.footerCol}>
      <h4>Sertifikasi</h4>
      <div className={styles.certWrap}>
        <div className={styles.certItem}></div>
        <div className={styles.certItem}></div>
      </div>
    </div>

    {/* CONNECT (CSS ICON) */}
    <div className={styles.footerCol}>
      <h4>Connect With Us</h4>
      <Link href="https://youtube.com/@educourse_unuha" target="_blank" rel="noopener noreferrer">
        <div className={`${styles.socialCard} ${styles.youtube}`}>YouTube</div>
      </Link>
      <Link href="https://instagram.com/educourse_unuha" target="_blank" rel="noopener noreferrer">
        <div className={`${styles.socialCard} ${styles.instagram}`}>Instagram</div>
      </Link>
      <Link href="https://facebook.com/educourse.unuha" target="_blank" rel="noopener noreferrer">
        <div className={`${styles.socialCard} ${styles.facebook}`}>Facebook</div>
      </Link>
      <Link href="https://linkedin.com/company/educourse-unuha" target="_blank" rel="noopener noreferrer">
        <div className={`${styles.socialCard} ${styles.linkedin}`}>LinkedIn</div>
      </Link>
    </div>

  </div>

  <div className={styles.footerBottom}>
    © 2026 EduCourse UNUHA
  </div>
</footer>
    </div>
  );
}
