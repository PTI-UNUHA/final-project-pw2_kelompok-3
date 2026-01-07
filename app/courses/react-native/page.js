"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function ReactNativePage() {
  const router = useRouter();
  const kursus = "React Native";

  const [tab, setTab] = useState("overview");
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan React Native",
      detail:
        "Konsep dasar React Native, perbedaan dengan React JS, arsitektur mobile app, dan setup environment."
    },
    {
      week: "Minggu 2",
      title: "Komponen Dasar",
      detail:
        "View, Text, Image, ScrollView, StyleSheet, dan struktur UI React Native."
    },
    {
      week: "Minggu 3",
      title: "State & Props",
      detail:
        "useState, props, dan pengelolaan data antar component."
    },
    {
      week: "Minggu 4",
      title: "Layout & Flexbox",
      detail:
        "Flexbox di React Native, styling responsif, dan pengaturan layout mobile."
    },
    {
      week: "Minggu 5",
      title: "Navigation",
      detail:
        "Navigasi antar screen menggunakan React Navigation."
    },
    {
      week: "Minggu 6",
      title: "Handling Input & Event",
      detail:
        "TextInput, Button, Touchable, dan event handling."
    },
    {
      week: "Minggu 7",
      title: "Mini Project React Native",
      detail:
        "Membangun aplikasi mobile sederhana berbasis React Native."
    },
    {
      week: "Minggu 8",
      title: "Presentasi & Evaluasi",
      detail:
        "Presentasi aplikasi, evaluasi hasil pembelajaran, dan perbaikan project."
    }
  ];

  useEffect(() => {
    const savedTab = localStorage.getItem("react-native-tab");
    if (savedTab) setTab(savedTab);
  }, []);

  useEffect(() => {
    localStorage.setItem("react-native-tab", tab);
  }, [tab]);

  return (
    <main className={styles.page}>
      {/* TOP BAR */}
      <header className={styles.topbar}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          ← Kembali
        </button>
        <span className={styles.brand}>EduCourse UNUHA</span>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1>React Native</h1>
          <p>
            Program pembelajaran fundamental untuk membangun aplikasi mobile
            Android dan iOS menggunakan React Native secara terstruktur.
          </p>

          <div className={styles.meta}>
            <span>📱 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>⚛️ JS Mobile App</span>
          </div>
        </div>
      </section>

      {/* TAB */}
      <section className={styles.tabs}>
        <button className={tab==="overview"?styles.active:""} onClick={() => setTab("overview")}>Overview</button>
        <button className={tab==="silabus"?styles.active:""} onClick={() => setTab("silabus")}>Silabus</button>
        <button className={tab==="evaluasi"?styles.active:""} onClick={() => setTab("evaluasi")}>Evaluasi</button>
        <button className={tab==="tools"?styles.active:""} onClick={() => setTab("tools")}>Tools</button>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        {tab === "overview" && (
          <div className={styles.card}>
            <h2>Deskripsi Akademik</h2>
            <p>
              React Native adalah kursus dasar pengembangan aplikasi mobile
              menggunakan JavaScript dan React. Peserta akan mempelajari konsep
              UI, navigasi, dan logika aplikasi mobile lintas platform.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa pemula mobile development</li>
              <li>Peserta yang memahami JavaScript dasar</li>
              <li>Calon mobile developer</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>JavaScript dasar</li>
              <li>Logika pemrograman</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Membangun aplikasi React Native</li>
              <li>Mengelola state & component</li>
              <li>Membuat mobile app Android & iOS</li>
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
              <li>Tugas Praktik: 40%</li>
              <li>Kuis Konsep React Native: 20%</li>
              <li>Mini Project Mobile App: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Aplikasi React Native sederhana</li>
              <li>Mini project portofolio</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>React Native</li>
              <li>JavaScript (ES6)</li>
              <li>Expo / CLI</li>
              <li>Android Emulator / Device</li>
            </ul>
          </div>
        )}
      </section>

      {/* CTA */}
      <div className={styles.stickyCTA}>
        <button onClick={() => router.push(`/daftar?kursus=${encodeURIComponent(kursus)}`)}>
          Daftar Kursus Sekarang
        </button>
      </div>
    </main>
  );
}
