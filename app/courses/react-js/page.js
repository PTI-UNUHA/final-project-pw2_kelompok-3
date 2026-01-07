"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function ReactJsFundamentalPage() {
  const router = useRouter();
  const kursus = "React JS Fundamental";

  const [tab, setTab] = useState("overview");
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan React",
      detail:
        "Konsep dasar React, pengenalan SPA, perbedaan React dengan JavaScript biasa, dan setup environment React."
    },
    {
      week: "Minggu 2",
      title: "JSX & Component",
      detail:
        "Pengenalan JSX, functional component, props, dan struktur component React."
    },
    {
      week: "Minggu 3",
      title: "State & Event",
      detail:
        "useState, event handling, dan pengelolaan data di dalam component."
    },
    {
      week: "Minggu 4",
      title: "Conditional Rendering",
      detail:
        "Menampilkan UI berdasarkan kondisi, rendering dinamis, dan best practice penulisan component."
    },
    {
      week: "Minggu 5",
      title: "List & Key",
      detail:
        "Rendering data menggunakan map, penggunaan key, dan pengelolaan data array."
    },
    {
      week: "Minggu 6",
      title: "useEffect Dasar",
      detail:
        "Lifecycle component modern menggunakan useEffect dan side effect dasar."
    },
    {
      week: "Minggu 7",
      title: "Struktur Project React",
      detail:
        "Pemisahan component, folder structure, dan reusable component."
    },
    {
      week: "Minggu 8",
      title: "Mini Project React",
      detail:
        "Membangun aplikasi React sederhana sebagai project akhir."
    }
  ];

  useEffect(() => {
    const savedTab = localStorage.getItem("react-tab");
    if (savedTab) setTab(savedTab);
  }, []);

  useEffect(() => {
    localStorage.setItem("react-tab", tab);
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
          <h1>React JS Fundamental</h1>
          <p>
            Program pembelajaran fundamental untuk membangun antarmuka
            website modern menggunakan React secara terstruktur dan bertahap.
          </p>

          <div className={styles.meta}>
            <span>⚛️ 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>🧩 Component Project</span>
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
              React JS Fundamental adalah kursus yang membahas dasar
              pengembangan antarmuka website menggunakan library React.
              Peserta akan mempelajari konsep component-based dan pengelolaan UI
              secara modern.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa yang telah mengenal JavaScript</li>
              <li>Pemula React</li>
              <li>Calon frontend developer</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Memahami JavaScript dasar</li>
              <li>HTML & CSS dasar</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Membangun component React</li>
              <li>Mengelola state & props</li>
              <li>Membuat UI interaktif</li>
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
              <li>Tugas Component: 40%</li>
              <li>Kuis Konsep React: 20%</li>
              <li>Mini Project React App: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Aplikasi React sederhana</li>
              <li>Mini project untuk portofolio</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>React JS</li>
              <li>JavaScript (ES6)</li>
              <li>Node.js & npm</li>
              <li>Visual Studio Code</li>
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
