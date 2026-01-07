"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function FlutterMobileAppPage() {
  const router = useRouter();
  const kursus = "Flutter Mobile App";

  const [tab, setTab] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("flutter-tab") || "overview" : "overview"));
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan Flutter & Dart",
      detail:
        "Konsep dasar Flutter, keunggulan cross-platform, pengenalan bahasa Dart, dan setup environment Flutter."
    },
    {
      week: "Minggu 2",
      title: "Dasar Bahasa Dart",
      detail:
        "Variabel, tipe data, function, control flow, dan struktur dasar bahasa Dart."
    },
    {
      week: "Minggu 3",
      title: "Widget Dasar",
      detail:
        "StatelessWidget, StatefulWidget, Text, Container, Row, Column, dan dasar penyusunan UI."
    },
    {
      week: "Minggu 4",
      title: "Layout & Styling",
      detail:
        "Pengaturan layout, padding, margin, alignment, serta styling UI Flutter."
    },
    {
      week: "Minggu 5",
      title: "Navigation & Routing",
      detail:
        "Perpindahan halaman menggunakan Navigator dan pengelolaan routing sederhana."
    },
    {
      week: "Minggu 6",
      title: "State Management Dasar",
      detail:
        "Pengelolaan state sederhana menggunakan setState dan konsep dasar state management."
    },
    {
      week: "Minggu 7",
      title: "Mini Project Flutter",
      detail:
        "Membangun aplikasi Flutter sederhana sebagai project akhir."
    },
    {
      week: "Minggu 8",
      title: "Presentasi & Evaluasi",
      detail:
        "Presentasi aplikasi, evaluasi hasil pembelajaran, dan perbaikan project."
    }
  ];

  useEffect(() => {
    localStorage.setItem("flutter-tab", tab);
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
          <h1>Flutter Mobile App</h1>
          <p>
            Program pembelajaran fundamental untuk membangun aplikasi mobile
            Android dan iOS menggunakan Flutter secara terstruktur dan aplikatif.
          </p>

          <div className={styles.meta}>
            <span>📱 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>🔁 Cross Platform</span>
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
              Flutter Mobile App adalah kursus dasar yang membahas pengembangan
              aplikasi mobile lintas platform menggunakan Flutter. Peserta akan
              mempelajari konsep widget, layout, dan alur kerja Flutter.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa pemula mobile development</li>
              <li>Peserta yang ingin membuat aplikasi Android & iOS</li>
              <li>Calon mobile developer</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Mampu menggunakan komputer</li>
              <li>Logika pemrograman dasar</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Membangun aplikasi Flutter sederhana</li>
              <li>Menggunakan widget & layout Flutter</li>
              <li>Membuat aplikasi cross-platform</li>
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
              <li>Tugas Praktik Flutter: 40%</li>
              <li>Kuis Konsep Dart: 20%</li>
              <li>Mini Project Aplikasi: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Aplikasi Flutter sederhana</li>
              <li>Mini project untuk portofolio</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>Flutter SDK</li>
              <li>Dart</li>
              <li>Android Studio / VS Code</li>
              <li>Emulator / Device</li>
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
