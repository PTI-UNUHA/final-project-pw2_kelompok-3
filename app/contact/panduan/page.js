"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function ContactPanduanPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>EduCourse UNUHA</span>
          <h1>Panduan Bantuan EduCourse</h1>
          <p>
            Panduan singkat untuk mahasiswa yang membutuhkan
            bantuan seputar penggunaan platform EduCourse.
          </p>

          <div className={styles.breadcrumb}>
            <Link href="/contact">Contact</Link>
            <span>›</span>
            <span>Panduan</span>
          </div>
        </div>
      </section>

      {/* ================= PANDUAN UTAMA ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Bagaimana Kami Membantu?</h2>
          <p className={styles.desc}>
            Berikut panduan umum yang sering dibutuhkan mahasiswa
            saat menggunakan EduCourse.
          </p>

          <div className={styles.guideGrid}>
            <div className={styles.guideCard}>
              <h3>📚 Mengakses Kursus</h3>
              <p>
                Buka menu Kursus untuk melihat seluruh daftar
                pembelajaran yang tersedia.
              </p>
            </div>

            <div className={styles.guideCard}>
              <h3>🔍 Memilih Kursus</h3>
              <p>
                Pilih kursus sesuai bidang dan tingkat
                kemampuan yang diinginkan.
              </p>
            </div>

            <div className={styles.guideCard}>
              <h3>📄 Melihat Detail</h3>
              <p>
                Baca deskripsi, tujuan, dan alur
                pembelajaran kursus.
              </p>
            </div>

            <div className={styles.guideCard}>
              <h3>🛠 Mengikuti Pembelajaran</h3>
              <p>
                Ikuti materi secara berurutan
                dan fokus pada praktik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ RINGKAS ================= */}
      <section className={styles.lightSection}>
        <h2>Pertanyaan yang Sering Ditanyakan</h2>

        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>Apakah EduCourse berbayar?</h4>
            <p>
              Tidak. EduCourse disediakan gratis
              untuk mahasiswa Universitas Nurul Huda.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>Apakah wajib mengikuti semua kursus?</h4>
            <p>
              Tidak wajib. Mahasiswa bebas memilih
              kursus sesuai kebutuhan.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>Jika masih bingung harus ke mana?</h4>
            <p>
              Silakan kembali ke halaman Contact
              untuk melihat informasi bantuan.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.ctaSection}>
        <h2>Masih Butuh Bantuan?</h2>
        <p>
          Kembali ke halaman Contact untuk melihat
          informasi resmi EduCourse.
        </p>

        <Link href="/contact" className={styles.ctaBtn}>
          Kembali ke Contact →
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <p>© 2024 EduCourse UNUHA. All rights reserved.</p>
      </footer>
    </>
  );
}
