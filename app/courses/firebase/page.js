"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function FirebaseMobileAppPage() {
  const router = useRouter();
  const kursus = "Firebase untuk Mobile App";

  const [tab, setTab] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("firebase-tab") || "overview" : "overview"));
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan Firebase",
      detail:
        "Konsep backend-as-a-service, pengenalan Firebase, arsitektur cloud, dan peran Firebase dalam mobile app."
    },
    {
      week: "Minggu 2",
      title: "Setup Firebase Project",
      detail:
        "Membuat project Firebase, integrasi Firebase dengan Android/Flutter, dan konfigurasi awal."
    },
    {
      week: "Minggu 3",
      title: "Firebase Authentication",
      detail:
        "Login & register menggunakan email/password, autentikasi pengguna, dan pengelolaan user."
    },
    {
      week: "Minggu 4",
      title: "Cloud Firestore",
      detail:
        "Penyimpanan data menggunakan Firestore, struktur collection & document, serta operasi CRUD."
    },
    {
      week: "Minggu 5",
      title: "Realtime Database",
      detail:
        "Konsep realtime data, sinkronisasi data otomatis, dan studi kasus aplikasi realtime."
    },
    {
      week: "Minggu 6",
      title: "Firebase Storage",
      detail:
        "Upload dan download file (gambar/dokumen) menggunakan Firebase Storage."
    },
    {
      week: "Minggu 7",
      title: "Integrasi Firebase ke Mobile App",
      detail:
        "Penerapan Firebase pada aplikasi mobile sebagai backend utama."
    },
    {
      week: "Minggu 8",
      title: "Mini Project Firebase",
      detail:
        "Pembuatan aplikasi mobile dengan Firebase Authentication & Database."
    }
  ];

  useEffect(() => {
    localStorage.setItem("firebase-tab", tab);
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
          <h1>Firebase untuk Mobile App</h1>
          <p>
            Program pembelajaran fundamental untuk membangun backend aplikasi
            mobile menggunakan Firebase sebagai layanan cloud modern.
          </p>

          <div className={styles.meta}>
            <span>☁️ 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>🔥 Backend Cloud</span>
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
              Firebase untuk Mobile App adalah kursus dasar yang membahas
              penggunaan Firebase sebagai backend aplikasi mobile. Peserta akan
              mempelajari autentikasi, database, dan penyimpanan cloud.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa mobile development</li>
              <li>Pemula backend mobile</li>
              <li>Calon mobile developer</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Logika pemrograman dasar</li>
              <li>Pernah membuat aplikasi mobile</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Menggunakan Firebase Authentication</li>
              <li>Mengelola database cloud</li>
              <li>Mengintegrasikan Firebase ke mobile app</li>
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
              <li>Tugas Integrasi Firebase: 40%</li>
              <li>Kuis Konsep Firebase: 20%</li>
              <li>Mini Project Mobile App: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Aplikasi mobile berbasis Firebase</li>
              <li>Mini project untuk portofolio</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>Firebase Console</li>
              <li>Cloud Firestore</li>
              <li>Firebase Auth</li>
              <li>Android / Flutter</li>
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
