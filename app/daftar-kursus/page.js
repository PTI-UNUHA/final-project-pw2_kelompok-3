"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function DaftarKursusPage() {
  const router = useRouter();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <button className={styles.backBtn} onClick={() => router.back()}>
          ← Kembali
        </button>

        <div className={styles.heroText}>
          <h1>Daftar Kursus EduCourse</h1>
          <p>
            Isi formulir di bawah untuk mendaftar kursus <br />
            dan mulai perjalanan belajarmu bersama EduCourse UNUHA.
          </p>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className={styles.formSection}>
        <form className={styles.formCard}>
          <h2>Form Pendaftaran</h2>
          <p className={styles.sub}>
            Pastikan data yang kamu isi sudah benar.
          </p>

          <div className={styles.field}>
            <label>Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama lengkap" />
          </div>

          <div className={styles.field}>
            <label>NIM</label>
            <input type="text" placeholder="Masukkan NIM" />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="contoh@email.com" />
          </div>

          <div className={styles.field}>
            <label>Pilih Kursus</label>
            <select>
              <option>Web Development Dasar</option>
              <option>HTML & CSS Fundamental</option>
              <option>JavaScript Dasar</option>
              <option>React JS Fundamental</option>

              <option>Android Development (Kotlin)</option>
              <option>Flutter Mobile App</option>
              <option>React Native</option>
              <option>Firebase untuk Mobile App</option>

              <option>UI/UX Design Fundamental</option>
              <option>UI/UX Mobile Design</option>
              <option>Figma untuk UI Design</option>
              <option>UX Research & Wireframing</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Alasan Mengikuti Kursus</label>
            <textarea placeholder="Ceritakan alasanmu..." />
          </div>

        <button onClick={() => router.push("/sukses")}>
        Kirim Pendaftaran
        </button>

        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        © 2024 EduCourse UNUHA. All rights reserved.
      </footer>
    </>
  );
}
