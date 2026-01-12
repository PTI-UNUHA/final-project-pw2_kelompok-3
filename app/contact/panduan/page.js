"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function ContactPanduanPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>EduCourse UNUHA</span>
          <h1>Panduan Bantuan EduCourse</h1>
          <p>
            Panduan singkat untuk membantu mahasiswa memahami
            alur dan penggunaan platform EduCourse secara efektif.
          </p>

          <div className={styles.breadcrumb}>
            <Link href="/contact">Contact</Link>
            <span>›</span>
            <span>Panduan</span>
          </div>
        </div>
      </section>

      {/* GUIDE */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Bagaimana Kami Membantu?</h2>
          <p className={styles.desc}>
            Ikuti langkah-langkah berikut untuk menggunakan EduCourse
            dengan optimal.
          </p>

          <div className={styles.guideGrid}>
            <Link href="/courses" className={styles.guideCard}>
              <h3>📚 Mengakses Kursus</h3>
              <p>Lihat semua kursus yang tersedia di EduCourse.</p>
              <span>Lihat Kursus →</span>
            </Link>

            <Link href="/courses" className={styles.guideCard}>
              <h3>🔍 Memilih Kursus</h3>
              <p>Pilih kursus sesuai minat dan kebutuhan skill.</p>
              <span>Pilih Kursus →</span>
            </Link>

            <Link href="/courses" className={styles.guideCard}>
              <h3>📄 Melihat Detail</h3>
              <p>Pelajari deskripsi, tujuan, dan materi kursus.</p>
              <span>Lihat Detail →</span>
            </Link>

            <Link href="/register" className={styles.guideCard}>
              <h3>🛠 Mengikuti Pembelajaran</h3>
              <p>Ikuti alur belajar dan praktik untuk meningkatkan skill.</p>
              <span>Mulai Belajar →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.lightSection}>
        <h2>Pertanyaan yang Sering Ditanyakan</h2>

        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>Apakah EduCourse berbayar?</h4>
            <p>EduCourse gratis untuk mahasiswa Universitas Nurul Huda.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>Apakah harus mengikuti semua kursus?</h4>
            <p>Tidak. Mahasiswa bebas memilih kursus sesuai kebutuhan.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>Masih bingung?</h4>
            <p>Kembali ke halaman Contact untuk bantuan lebih lanjut.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Masih Butuh Bantuan?</h2>
        <p>Hubungi pusat informasi EduCourse UNUHA.</p>

        <Link href="/contact" className={styles.ctaBtn}>
          Kembali ke Contact
        </Link>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        © 2024 EduCourse UNUHA. All rights reserved.
      </footer>
    </>
  );
}
