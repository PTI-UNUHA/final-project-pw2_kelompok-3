"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function UiUxDesignFundamentalPage() {
  const router = useRouter();
  const kursus = "UI/UX Design Fundamental";

  const [tab, setTab] = useState("overview");
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan UI/UX Design",
      detail:
        "Pengertian UI dan UX, perbedaan UI vs UX, peran UI/UX designer, dan proses design thinking."
    },
    {
      week: "Minggu 2",
      title: "User Research & Persona",
      detail:
        "User research dasar, pengumpulan kebutuhan pengguna, dan pembuatan user persona."
    },
    {
      week: "Minggu 3",
      title: "User Flow & Information Architecture",
      detail:
        "Penyusunan alur pengguna (user flow), sitemap, dan struktur informasi aplikasi."
    },
    {
      week: "Minggu 4",
      title: "Wireframe",
      detail:
        "Pembuatan wireframe low-fidelity dan mid-fidelity sebagai kerangka desain."
    },
    {
      week: "Minggu 5",
      title: "Visual UI Design",
      detail:
        "Warna, tipografi, layout, icon, dan prinsip visual design pada antarmuka."
    },
    {
      week: "Minggu 6",
      title: "Design System Dasar",
      detail:
        "Komponen UI, konsistensi desain, dan pengenalan design system."
    },
    {
      week: "Minggu 7",
      title: "Prototype Interaktif",
      detail:
        "Pembuatan prototype interaktif menggunakan Figma."
    },
    {
      week: "Minggu 8",
      title: "Presentasi & Evaluasi",
      detail:
        "Presentasi desain, evaluasi UX, dan perbaikan berdasarkan feedback."
    }
  ];

  useEffect(() => {
    const savedTab = localStorage.getItem("uiux-tab");
    if (savedTab) setTab(savedTab);
  }, []);

  useEffect(() => {
    localStorage.setItem("uiux-tab", tab);
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
          <h1>UI/UX Design Fundamental</h1>
          <p>
            Program pembelajaran fundamental untuk merancang antarmuka dan
            pengalaman pengguna aplikasi secara terstruktur dan berorientasi
            pada kebutuhan user.
          </p>

          <div className={styles.meta}>
            <span>🎨 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>🧩 Design Project</span>
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
              UI/UX Design Fundamental adalah kursus dasar yang membahas proses
              perancangan antarmuka dan pengalaman pengguna aplikasi digital.
              Peserta akan mempelajari pendekatan user-centered design.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa pemula di bidang desain</li>
              <li>Peserta yang tertarik UI/UX</li>
              <li>Calon UI/UX Designer</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Mampu menggunakan komputer</li>
              <li>Tidak memerlukan coding</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Menyusun user flow & wireframe</li>
              <li>Mendesain UI yang konsisten</li>
              <li>Membuat prototype interaktif</li>
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
              <li>Tugas Desain: 40%</li>
              <li>Kuis Konsep UI/UX: 20%</li>
              <li>Mini Project Desain: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Wireframe & prototype UI</li>
              <li>Mini project untuk portofolio</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>Figma</li>
              <li>FigJam</li>
              <li>Design Thinking</li>
              <li>Wireframe & Prototype</li>
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
