"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>EduCourse UNUHA</span>
          <h1>Pusat Informasi & Bantuan</h1>
          <p>
            Akses resmi informasi, panduan penggunaan, serta
            kontak EduCourse UNUHA untuk mendukung pembelajaran mahasiswa.
          </p>

          <div className={styles.heroActions}>
            <Link href="/courses" className={styles.btnPrimary}>
              Jelajahi Kursus
            </Link>
            <Link href="/contact/panduan" className={styles.btnGhost}>
              Lihat Panduan
            </Link>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT */}
      <section className={styles.announce}>
        <div className={styles.announceInner}>
          <span>📢</span>
          <p>
            EduCourse mengutamakan pembelajaran berbasis praktik dan proyek nyata.
          </p>
          <Link href="/contact/panduan">Pelajari caranya →</Link>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className={styles.section}>
        <h2>Akses Cepat</h2>
        <p className={styles.subtitle}>
          Navigasi utama untuk informasi penting EduCourse
        </p>

        <div className={styles.actionGrid}>
          <Link href="/courses" className={styles.actionCard}>
            <h3>📚 Kursus</h3>
            <p>Daftar lengkap kursus Web, Mobile, dan UI/UX</p>
            <span>Lihat Kursus →</span>
          </Link>

          <Link href="/contact/panduan" className={styles.actionCard}>
            <h3>📖 Panduan</h3>
            <p>Cara menggunakan EduCourse secara optimal</p>
            <span>Lihat Panduan →</span>
          </Link>

          <Link href="/about" className={styles.actionCard}>
            <h3>ℹ️ Tentang</h3>
            <p>Profil, visi, dan misi EduCourse UNUHA</p>
            <span>Tentang EduCourse →</span>
          </Link>
        </div>
      </section>

      {/* PLATFORM STATUS */}
      <section className={styles.lightSection}>
        <h2>Status Platform</h2>

        <div className={styles.statusGrid}>
          <Status label="Sistem Aktif" type="ok" />
          <Status label="Kursus Tersedia" type="ok" />
          <Status label="Akses Normal" type="ok" />
          <Status label="Update Berkala" type="info" />
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className={styles.section}>
        <h2>Kontak Resmi</h2>
        <p className={styles.subtitle}>
          Hubungi EduCourse melalui informasi resmi berikut
        </p>

        <div className={styles.infoGrid}>
          <Info title="📍 Lokasi" text="Universitas Nurul Huda, Oku Timur" />
          <Info title="📧 Email" text="educourse@unuha.ac.id" />
          <Info title="📞 Admin" text="+62 812-3456-7890" />
          <Info title="⏰ Jam Operasional" text="Sen–Jum, 08.00–16.00" />
        </div>
      </section>

      {/* MAP */}
      <section className={styles.section}>
        <h2>Lokasi Kampus</h2>
        <div className={styles.mapBox}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.101235512349!2d104.4584217!3d-4.2500742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e390307a53f5b8f%3A0xd5df3967a2c3cfa0!2sUniversitas%20Nurul%20Huda!5e0!3m2!1sid!2sid!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        © 2024 EduCourse UNUHA. All rights reserved.
      </footer>
    </>
  );
}

/* ===== COMPONENT ===== */

const Status = ({ label, type }) => (
  <div className={styles.statusCard}>
    <span className={type === "ok" ? styles.dotOk : styles.dotInfo} />
    {label}
  </div>
);

const Info = ({ title, text }) => (
  <div className={styles.infoCard}>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);
