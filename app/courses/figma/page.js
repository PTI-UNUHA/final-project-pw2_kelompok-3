"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function FigmaUiDesignPage() {
  const router = useRouter();
  const kursus = "Figma untuk UI Design";

  const [tab, setTab] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("figma-ui-tab") || "overview" : "overview"));
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan UI/UX & Figma",
      detail:
        "Konsep dasar UI/UX Design, peran UI designer, pengenalan Figma, dan workflow desain digital."
    },
    {
      week: "Minggu 2",
      title: "Tools & Interface Figma",
      detail:
        "Pengenalan canvas, frame, shape, text, color, serta pengelolaan file di Figma."
    },
    {
      week: "Minggu 3",
      title: "Layout & Grid System",
      detail:
        "Penerapan layout, grid system, spacing, dan alignment dalam desain UI."
    },
    {
      week: "Minggu 4",
      title: "Color & Typography",
      detail:
        "Pemilihan warna, typography, hierarki teks, dan konsistensi visual."
    },
    {
      week: "Minggu 5",
      title: "Komponen & Auto Layout",
      detail:
        "Membuat component reusable, auto layout, dan design system sederhana."
    },
    {
      week: "Minggu 6",
      title: "Wireframe & Mockup",
      detail:
        "Pembuatan wireframe low-fidelity dan mockup high-fidelity."
    },
    {
      week: "Minggu 7",
      title: "Prototype Interaktif",
      detail:
        "Membuat prototype interaktif dan simulasi alur pengguna."
    },
    {
      week: "Minggu 8",
      title: "Presentasi & Evaluasi Desain",
      detail:
        "Presentasi hasil desain UI dan evaluasi berdasarkan prinsip UI/UX."
    }
  ];

  useEffect(() => {
    localStorage.setItem("figma-ui-tab", tab);
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
          <h1>Figma untuk UI Design</h1>
          <p>
            Program pembelajaran fundamental untuk merancang antarmuka
            aplikasi dan website menggunakan Figma secara sistematis dan profesional.
          </p>

          <div className={styles.meta}>
            <span>🎨 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>🖌️ UI Project</span>
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
              Figma untuk UI Design adalah kursus dasar yang membahas
              perancangan antarmuka digital. Peserta akan mempelajari prinsip
              desain, layout, dan pembuatan prototype menggunakan Figma.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa pemula UI/UX</li>
              <li>Peserta non-coding</li>
              <li>Calon UI Designer</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Mampu menggunakan komputer</li>
              <li>Tidak memerlukan kemampuan coding</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Mendesain UI aplikasi & website</li>
              <li>Membuat design system sederhana</li>
              <li>Menyusun prototype interaktif</li>
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
              <li>Tugas Desain UI: 40%</li>
              <li>Kuis Konsep UI/UX: 20%</li>
              <li>Mini Project UI Design: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Mockup UI profesional</li>
              <li>Prototype interaktif</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>Figma</li>
              <li>UI Design Principles</li>
              <li>Prototype & Wireframe</li>
            </ul>
          </div>
        )}
      </section>

      {/* ===== STICKY CTA ===== */}
      <div className={styles.stickyCTA}>
        <button onClick={() => router.push("/register")}>
          Daftar Kursus Sekarang
        </button>
      </div>
    </main>
  );
}
