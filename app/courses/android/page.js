"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function AndroidKotlinPage() {
  const router = useRouter();
  const kursus = "Android Development (Kotlin)";

  const [tab, setTab] = useState("overview");
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan Android & Kotlin",
      detail:
        "Konsep dasar Android, arsitektur aplikasi mobile, pengenalan Kotlin, serta setup Android Studio."
    },
    {
      week: "Minggu 2",
      title: "Dasar Bahasa Kotlin",
      detail:
        "Variabel, tipe data, control flow, function, dan sintaks dasar Kotlin."
    },
    {
      week: "Minggu 3",
      title: "Activity & Layout",
      detail:
        "Activity lifecycle, XML layout, constraint layout, dan struktur tampilan aplikasi."
    },
    {
      week: "Minggu 4",
      title: "UI Component",
      detail:
        "Button, TextView, EditText, RecyclerView, serta penerapan UI interaktif."
    },
    {
      week: "Minggu 5",
      title: "Navigation & Intent",
      detail:
        "Perpindahan antar activity menggunakan intent dan dasar navigasi aplikasi."
    },
    {
      week: "Minggu 6",
      title: "Data Sederhana",
      detail:
        "Pengelolaan data sederhana menggunakan SharedPreferences dan ArrayList."
    },
    {
      week: "Minggu 7",
      title: "Mini Project Android",
      detail:
        "Pengembangan aplikasi Android sederhana sebagai project akhir."
    },
    {
      week: "Minggu 8",
      title: "Presentasi & Evaluasi",
      detail:
        "Presentasi aplikasi, evaluasi hasil pembelajaran, dan perbaikan aplikasi."
    }
  ];

  useEffect(() => {
    const savedTab = localStorage.getItem("android-kotlin-tab");
    if (savedTab) setTab(savedTab);
  }, []);

  useEffect(() => {
    localStorage.setItem("android-kotlin-tab", tab);
  }, [tab]);

  return (
    <main className={styles.page}>
      {/* ===== TOP BAR ===== */}
      <header className={styles.topbar}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          ← Kembali
        </button>
        <span className={styles.brand}>EduCourse UNUHA</span>
      </header>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1>Android Development (Kotlin)</h1>
          <p>
            Program pembelajaran fundamental untuk membangun aplikasi Android
            menggunakan bahasa Kotlin secara terstruktur dan aplikatif.
          </p>

          <div className={styles.meta}>
            <span>🤖 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>📱 Mobile Project</span>
          </div>
        </div>
      </section>

      {/* ===== TAB ===== */}
      <section className={styles.tabs}>
        <button className={tab==="overview"?styles.active:""} onClick={() => setTab("overview")}>Overview</button>
        <button className={tab==="silabus"?styles.active:""} onClick={() => setTab("silabus")}>Silabus</button>
        <button className={tab==="evaluasi"?styles.active:""} onClick={() => setTab("evaluasi")}>Evaluasi</button>
        <button className={tab==="tools"?styles.active:""} onClick={() => setTab("tools")}>Tools</button>
      </section>

      {/* ===== CONTENT ===== */}
      <section className={styles.content}>
        {tab === "overview" && (
          <div className={styles.card}>
            <h2>Deskripsi Akademik</h2>
            <p>
              Android Development (Kotlin) adalah kursus dasar yang membahas
              pengembangan aplikasi mobile Android. Peserta akan mempelajari
              konsep UI, logika aplikasi, dan alur kerja Android Studio.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa pemula mobile development</li>
              <li>Peserta yang ingin belajar Android</li>
              <li>Calon mobile developer</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Mampu menggunakan komputer</li>
              <li>Logika pemrograman dasar</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Membuat aplikasi Android sederhana</li>
              <li>Menggunakan Kotlin dasar</li>
              <li>Mengelola UI & navigasi</li>
            </ul>
          </div>
        )}

        {tab === "silabus" && (
          <div className={styles.card}>
            <h2>Silabus Mingguan</h2>
            {silabus.map((s, i) => (
              <div key={i} className={styles.accordion}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => setOpenWeek(openWeek === i ? null : i)}
                >
                  {s.week} — {s.title}
                  <span>{openWeek === i ? "−" : "+"}</span>
                </button>
                {openWeek === i && (
                  <div className={styles.accordionBody}>{s.detail}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "evaluasi" && (
          <div className={styles.card}>
            <h2>Metode Evaluasi</h2>
            <ul>
              <li>Tugas Praktik Android: 40%</li>
              <li>Kuis Konsep Kotlin: 20%</li>
              <li>Mini Project Aplikasi: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Aplikasi Android sederhana</li>
              <li>Mini project untuk portofolio</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>Android Studio</li>
              <li>Kotlin</li>
              <li>Android SDK</li>
              <li>Emulator / Device Android</li>
            </ul>
          </div>
        )}
      </section>

      {/* ===== STICKY CTA ===== */}
      <div className={styles.stickyCTA}>
        <button onClick={() => router.push(`/daftar?kursus=${encodeURIComponent(kursus)}`)}>
          Daftar Kursus Sekarang
        </button>
      </div>
    </main>
  );
}
