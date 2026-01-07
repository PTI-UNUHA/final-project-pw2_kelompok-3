"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function UiUxMobileDesignPage() {
  const router = useRouter();
  const kursus = "UI/UX Mobile Design";

  const [tab, setTab] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("uiux-tab") || "overview" : "overview"));
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan UI/UX",
      detail:
        "Konsep dasar UI dan UX, perbedaan UI vs UX, serta peran UI/UX designer dalam pengembangan aplikasi mobile."
    },
    {
      week: "Minggu 2",
      title: "User Research Dasar",
      detail:
        "Pengenalan user persona, user problem, dan dasar riset pengguna untuk aplikasi mobile."
    },
    {
      week: "Minggu 3",
      title: "User Flow & Information Architecture",
      detail:
        "Penyusunan alur pengguna, struktur halaman, dan navigasi aplikasi mobile."
    },
    {
      week: "Minggu 4",
      title: "Wireframe Mobile",
      detail:
        "Pembuatan wireframe low-fidelity dan mid-fidelity untuk aplikasi mobile."
    },
    {
      week: "Minggu 5",
      title: "Visual Design & UI Style",
      detail:
        "Warna, tipografi, icon, spacing, dan konsistensi desain antarmuka mobile."
    },
    {
      week: "Minggu 6",
      title: "Prototyping Interaktif",
      detail:
        "Pembuatan prototype interaktif menggunakan Figma untuk simulasi aplikasi."
    },
    {
      week: "Minggu 7",
      title: "Usability Testing",
      detail:
        "Pengujian desain kepada pengguna dan perbaikan berdasarkan feedback."
    },
    {
      week: "Minggu 8",
      title: "Mini Project UI/UX Mobile",
      detail:
        "Perancangan UI/UX aplikasi mobile sebagai project akhir."
    }
  ];

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
          <h1>UI/UX Mobile Design</h1>
          <p>
            Program pembelajaran fundamental untuk merancang pengalaman dan
            antarmuka aplikasi mobile yang efektif, estetis, dan berfokus
            pada pengguna.
          </p>

          <div className={styles.meta}>
            <span>🎨 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>📱 Mobile Design</span>
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
              UI/UX Mobile Design adalah kursus yang membahas proses perancangan
              antarmuka dan pengalaman pengguna aplikasi mobile. Peserta akan
              mempelajari pendekatan user-centered design dari riset hingga
              prototype.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa pemula UI/UX</li>
              <li>Calon mobile designer</li>
              <li>Frontend / mobile developer pemula</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Mampu menggunakan komputer</li>
              <li>Tidak memerlukan pengalaman desain</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Menyusun user flow aplikasi mobile</li>
              <li>Mendesain UI mobile yang konsisten</li>
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
              <li>Tugas Desain UI/UX: 40%</li>
              <li>Kuis Konsep UI/UX: 20%</li>
              <li>Mini Project Desain Mobile: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Prototype aplikasi mobile</li>
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
              <li>Google Material Guidelines</li>
              <li>Mobile Design Pattern</li>
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
