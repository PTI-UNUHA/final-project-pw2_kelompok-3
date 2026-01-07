"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <span className={styles.badge}>EduCourse UNUHA</span>
          <h1>Pusat Informasi & Bantuan</h1>
          <p>
            Semua akses penting, panduan, dan informasi resmi EduCourse
            untuk mahasiswa Universitas Nurul Huda.
          </p>
          <div className={styles.heroActions}>
            <Link href="/courses" className={styles.primaryBtn}>Jelajahi Kursus</Link>
            <Link href="/contact/panduan" className={styles.ghostBtn}>Lihat Panduan</Link>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT */}
      <section className={styles.announce}>
        <div className={styles.announceInner}>
          <strong>📢 Info:</strong> EduCourse fokus pada pembelajaran praktis berbasis proyek.
          <Link href="/contact/panduan"> Pelajari caranya →</Link>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className={styles.section}>
        <h2>Akses Cepat</h2>
        <div className={styles.actionGrid}>
          <div className={styles.actionCard}>
            <h3>📚 Kursus</h3>
            <p>Daftar & detail kursus Web, Mobile, UI/UX</p>
            <Link href="/courses">Lihat Kursus →</Link>
          </div>
          <div className={styles.actionCard}>
            <h3>📖 Panduan</h3>
            <p>Cara menggunakan EduCourse secara optimal</p>
            <Link href="/contact/panduan">Lihat Panduan →</Link>
          </div>
          <div className={styles.actionCard}>
            <h3>ℹ️ Tentang</h3>
            <p>Profil, visi, dan misi EduCourse</p>
            <Link href="/about">Tentang EduCourse →</Link>
          </div>
        </div>
      </section>

      {/* STATUS PLATFORM */}
      <section className={styles.lightSection}>
        <h2>Status Platform</h2>
        <div className={styles.statusGrid}>
          <div className={styles.statusCard}><span className={styles.dotOk}/> Sistem Aktif</div>
          <div className={styles.statusCard}><span className={styles.dotOk}/> Kursus Tersedia</div>
          <div className={styles.statusCard}><span className={styles.dotOk}/> Akses Normal</div>
          <div className={styles.statusCard}><span className={styles.dotInfo}/> Update Berkala</div>
        </div>
      </section>

      {/* KONTAK RESMI */}
      <section className={styles.section}>
        <h2>Kontak Resmi</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}><h4>📍 Lokasi</h4><p>Universitas Nurul Huda<br/>Oku Timur</p></div>
          <div className={styles.infoCard}><h4>📧 Email</h4><p>educourse@unuha.ac.id</p></div>
          <div className={styles.infoCard}><h4>📞 Admin</h4><p>+62 812-3456-7890</p></div>
          <div className={styles.infoCard}><h4>⏰ Jam</h4><p>Sen–Jum<br/>08.00–16.00</p></div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles.section}>
        <h2>Lokasi Kampus</h2>
        <div className={styles.mapBox}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.101235512349!2d104.4584217153012!3d-4.250074249212524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e390307a53f5b8f%3A0xd5df3967a2c3cfa0!2sUniversitas%20Nurul%20Huda%20(Kampus%20B)!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>© 2024 EduCourse UNUHA</footer>
    </>
  );
}
