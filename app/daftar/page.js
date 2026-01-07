"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function DaftarPage() {
  const router = useRouter();
  const [kursus, setKursus] = useState("Kursus");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setKursus(searchParams.get("kursus") || "Kursus");
  }, []);

  const [form, setForm] = useState({
    nama: "",
    nim: "",
    prodi: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.nim || !form.prodi || !form.email) {
      alert("Semua data wajib diisi!");
      return;
    }

    router.push(
      `/daftar/sukses?kursus=${encodeURIComponent(kursus)}&nama=${encodeURIComponent(
        form.nama
      )}&nim=${form.nim}&prodi=${encodeURIComponent(form.prodi)}`
    );
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => router.back()}>
          ← Kembali
        </button>
        <span className={styles.brand}>EduCourse UNUHA</span>
      </header>

      <section className={styles.card}>
        <h1 className={styles.title}>Pendaftaran Kursus</h1>
        <p className={styles.kursus}>{kursus}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            name="nama"
            placeholder="Nama Lengkap"
            onChange={handleChange}
          />
          <input
            className={styles.input}
            name="nim"
            placeholder="NIM"
            onChange={handleChange}
          />
          <input
            className={styles.input}
            name="prodi"
            placeholder="Program Studi"
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email Aktif"
            onChange={handleChange}
          />

          <button className={styles.primaryBtn} type="submit">
            Daftar Sekarang
          </button>
        </form>
      </section>
    </main>
  );
}
