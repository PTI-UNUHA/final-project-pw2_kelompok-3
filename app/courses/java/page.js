"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function JavaScriptDasarPage() {
  const router = useRouter();
  const kursus = "JavaScript Dasar";

  const [tab, setTab] = useState("overview");
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan JavaScript",
      detail:
        "Pengertian JavaScript, peran JavaScript di website, cara kerja script di browser, dan setup lingkungan belajar."
    },
    {
      week: "Minggu 2",
      title: "Variabel & Tipe Data",
      detail:
        "Penggunaan var, let, const, tipe data dasar (string, number, boolean), dan praktik penulisan kode JavaScript."
    },
    {
      week: "Minggu 3",
      title: "Operator & Kondisi",
      detail:
        "Operator aritmatika dan logika, percabangan if, else, dan switch untuk pengambilan keputusan."
    },
    {
      week: "Minggu 4",
      title: "Perulangan",
      detail:
        "For, while, do while, serta studi kasus penggunaan loop dalam program sederhana."
    },
    {
      week: "Minggu 5",
      title: "Function",
      detail:
        "Pembuatan function, parameter, return value, dan penerapan function untuk modularisasi kode."
    },
    {
      week: "Minggu 6",
      title: "DOM Dasar",
      detail:
        "Mengenal DOM, query selector, manipulasi elemen HTML menggunakan JavaScript."
    },
    {
      week: "Minggu 7",
      title: "Event Handling",
      detail:
        "Event click, input, submit, dan interaksi dasar antara pengguna dan website."
    },
    {
      week: "Minggu 8",
      title: "Mini Project JavaScript",
      detail:
        "Pembuatan aplikasi JavaScript sederhana sebagai project akhir."
    }
  ];

  useEffect(() => {
    const savedTab = localStorage.getItem("jsdasar-tab");
    if (savedTab) setTab(savedTab);
  }, []);

  useEffect(() => {
    localStorage.setItem("jsdasar-tab", tab);
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
          <h1>JavaScript Dasar</h1>
          <p>
            Program pembelajaran fundamental untuk memahami logika
            pemrograman menggunakan JavaScript secara bertahap dan aplikatif.
          </p>

          <div className={styles.meta}>
            <span>📙 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>⚙️ Logic Project</span>
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
              JavaScript Dasar adalah kursus yang membahas konsep logika
              pemrograman untuk membangun interaksi pada website. Peserta akan
              mempelajari JavaScript sebagai bahasa pemrograman utama di sisi
              client.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa pemula pemrograman</li>
              <li>Peserta yang telah mengenal HTML</li>
              <li>Calon frontend developer pemula</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Memahami HTML dasar</li>
              <li>Mampu menggunakan komputer</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Memahami logika pemrograman</li>
              <li>Menggunakan JavaScript dasar</li>
              <li>Membuat website interaktif sederhana</li>
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
              <li>Tugas Logika: 40%</li>
              <li>Kuis Konsep JavaScript: 20%</li>
              <li>Mini Project Interaktif: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Aplikasi JavaScript sederhana</li>
              <li>Mini project untuk portofolio</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>JavaScript (ES6)</li>
              <li>Visual Studio Code</li>
              <li>Browser Chrome / Edge</li>
              <li>Live Server</li>
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
