"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

const coursePrices = {
  "Web Development Dasar": 120000,
  "HTML & CSS Fundamental": 0, // Gratis
  "JavaScript Dasar": 120000,
  "React JS Fundamental": 200000,
  "Android Development (Kotlin)": 150000,
  "Flutter Mobile App": 180000,
  "React Native": 200000,
  "Firebase untuk Mobile App": 100000,
  "UI/UX Design Fundamental": 150000,
  "UI/UX Mobile Design": 150000,
  "Figma untuk UI Design": 120000,
  "UX Research & Wireframing": 130000,
};

export default function DaftarKursusPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    nama: "",
    nim: "",
    email: "",
    kursus: "",
    alasan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.nim || !form.email || !form.kursus) {
      alert("Semua field wajib diisi!");
      return;
    }
    const total = coursePrices[form.kursus] || 0;
    if (total === 0) {
      router.push("/daftar-kursus/sukses");
    } else {
      router.push(`/register/virtual-account?bank=DANA&total=${total}`);
    }
  };

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
        <form className={styles.formCard} onSubmit={handleSubmit}>
          <h2>Form Pendaftaran</h2>
          <p className={styles.sub}>
            Pastikan data yang kamu isi sudah benar.
          </p>

          <div className={styles.field}>
            <label>Nama Lengkap</label>
            <input type="text" name="nama" placeholder="Masukkan nama lengkap" value={form.nama} onChange={handleChange} />
          </div>

          <div className={styles.field}>
            <label>NIM</label>
            <input type="text" name="nim" placeholder="Masukkan NIM" value={form.nim} onChange={handleChange} />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input type="email" name="email" placeholder="contoh@email.com" value={form.email} onChange={handleChange} />
          </div>

          <div className={styles.field}>
            <label>Pilih Kursus</label>
            <select name="kursus" value={form.kursus} onChange={handleChange}>
              <option value="">Pilih Kursus</option>
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
            <textarea name="alasan" placeholder="Ceritakan alasanmu..." value={form.alasan} onChange={handleChange} />
          </div>

          <button type="submit">
            Lanjut ke Pembayaran
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
