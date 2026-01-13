"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function UxResearchWireframingPage() {
  const router = useRouter();
  const kursus = "UX Research & Wireframing";

  const [tab, setTab] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("ux-tab") || "overview" : "overview"));
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan UX & Design Thinking",
      detail:
        "Konsep User Experience, peran UX Designer, dan pengenalan design thinking dalam pengembangan produk digital."
    },
    {
      week: "Minggu 2",
      title: "UX Research Dasar",
      detail:
        "Metode riset pengguna, observasi, wawancara, dan pengumpulan data kebutuhan pengguna."
    },
    {
      week: "Minggu 3",
      title: "User Persona & User Journey",
      detail:
        "Penyusunan user persona, user journey map, dan pemetaan masalah pengguna."
    },
    {
      week: "Minggu 4",
      title: "Information Architecture",
      detail:
        "Penyusunan struktur informasi, sitemap, dan alur navigasi aplikasi."
    },
    {
      week: "Minggu 5",
      title: "Wireframing Dasar",
      detail:
        "Low-fidelity wireframe, sketsa layout, dan struktur halaman aplikasi."
    },
    {
      week: "Minggu 6",
      title: "Wireframe Digital",
      detail:
        "Pembuatan wireframe menggunakan tools digital dan prinsip layout UI."
    },
    {
      week: "Minggu 7",
      title: "Usability Testing",
      detail:
        "Pengujian wireframe, evaluasi usability, dan perbaikan desain berdasarkan feedback."
    },
    {
      week: "Minggu 8",
      title: "Presentasi & Evaluasi",
      detail:
        "Presentasi hasil wireframe dan evaluasi proses UX research."
    }
  ];

  useEffect(() => {
    localStorage.setItem("ux-tab", tab);
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
          <h1>UX Research & Wireframing</h1>
          <p>
            Program pembelajaran fundamental untuk memahami riset pengguna
            dan perancangan wireframe sebagai fondasi desain UI/UX.
          </p>

          <div className={styles.meta}>
            <span>🧠 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>📝 UX Project</span>
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
              UX Research & Wireframing adalah kursus yang membahas proses
              perancangan pengalaman pengguna melalui riset dan wireframe
              sebelum masuk ke tahap desain visual.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa pemula UI/UX</li>
              <li>Calon UX Designer</li>
              <li>Peserta yang tertarik desain produk digital</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Mampu menggunakan komputer</li>
              <li>Tidak memerlukan pengalaman desain</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Melakukan UX research sederhana</li>
              <li>Menyusun user persona & journey</li>
              <li>Membuat wireframe low-fidelity</li>
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
              <li>Tugas UX Research: 30%</li>
              <li>Wireframe Project: 40%</li>
              <li>Presentasi & Evaluasi: 30%</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>Figma</li>
              <li>Miro / FigJam</li>
              <li>Google Form (Research)</li>
              <li>Sticky Notes / Sketch</li>
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
