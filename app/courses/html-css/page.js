"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function HtmlCssFundamentalPage() {
  const router = useRouter();
  const kursus = "HTML & CSS Fundamental";

  const [tab, setTab] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("htmlcss-tab") || "overview" : "overview"));
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengenalan Web & HTML",
      detail:
        "Pemahaman dasar website, peran HTML, struktur dokumen HTML, tag, atribut, dan praktik membuat halaman HTML pertama."
    },
    {
      week: "Minggu 2",
      title: "Struktur & Semantic HTML",
      detail:
        "Heading, paragraf, list, link, image, table, form, serta penggunaan semantic HTML untuk struktur yang rapi dan aksesibel."
    },
    {
      week: "Minggu 3",
      title: "CSS Dasar",
      detail:
        "Cara kerja CSS, selector, warna, font, background, border, margin, padding, dan styling dasar website."
    },
    {
      week: "Minggu 4",
      title: "Box Model & Layout",
      detail:
        "Box model secara mendalam, display, position, serta pengenalan layout modern menggunakan Flexbox."
    },
    {
      week: "Minggu 5",
      title: "Responsive Design",
      detail:
        "Konsep responsive web, media query, mobile-first design, dan praktik membuat tampilan website ramah HP."
    },
    {
      week: "Minggu 6",
      title: "UI Styling & Best Practice",
      detail:
        "Penyusunan tampilan yang rapi, konsisten, reusable class, serta praktik penulisan CSS yang bersih."
    },
    {
      week: "Minggu 7",
      title: "Mini Project Website",
      detail:
        "Membangun website statis lengkap menggunakan HTML & CSS sebagai project akhir."
    },
    {
      week: "Minggu 8",
      title: "Review & Presentasi",
      detail:
        "Review kode, perbaikan struktur & tampilan, serta presentasi hasil project."
    }
  ];

  useEffect(() => {
    localStorage.setItem("htmlcss-tab", tab);
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
          <h1>HTML & CSS Fundamental</h1>
          <p>
            Program pembelajaran dasar untuk memahami struktur dan tampilan
            website menggunakan HTML dan CSS secara terarah dan aplikatif.
          </p>

          <div className={styles.meta}>
            <span>📘 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>🎨 UI Project</span>
          </div>
        </div>
      </section>

      {/* ===== TAB ===== */}
      <section className={styles.tabs}>
        <button
          className={tab === "overview" ? styles.active : ""}
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        <button
          className={tab === "silabus" ? styles.active : ""}
          onClick={() => setTab("silabus")}
        >
          Silabus
        </button>
        <button
          className={tab === "evaluasi" ? styles.active : ""}
          onClick={() => setTab("evaluasi")}
        >
          Evaluasi
        </button>
        <button
          className={tab === "tools" ? styles.active : ""}
          onClick={() => setTab("tools")}
        >
          Tools
        </button>
      </section>

      {/* ===== CONTENT ===== */}
      <section className={styles.content}>
        {tab === "overview" && (
          <div className={styles.card}>
            <h2>Deskripsi Akademik</h2>
            <p>
              HTML & CSS Fundamental adalah kursus dasar yang berfokus pada
              pembuatan struktur dan tampilan website. Peserta akan mempelajari
              bagaimana membangun halaman web yang rapi, responsif, dan siap
              digunakan sebagai fondasi pengembangan web lanjutan.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa pemula di bidang IT</li>
              <li>Peserta tanpa pengalaman coding</li>
              <li>Calon web designer / frontend pemula</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Mampu menggunakan komputer</li>
              <li>Tidak memerlukan dasar pemrograman</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Menyusun struktur HTML yang benar</li>
              <li>Mendesain tampilan website dengan CSS</li>
              <li>Membuat website responsif</li>
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
              <li>Tugas Praktik HTML & CSS: 40%</li>
              <li>Kuis Konsep Dasar: 20%</li>
              <li>Mini Project Website: 40%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Website statis responsif</li>
              <li>Mini project untuk portofolio</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>Visual Studio Code</li>
              <li>Browser Chrome / Edge</li>
              <li>Live Server Extension</li>
            </ul>
          </div>
        )}
      </section>

      {/* ===== STICKY CTA ===== */}
      <div className={styles.stickyCTA}>
        <button
          onClick={() =>
            router.push("/register")
          }
        >
          Daftar Kursus Sekarang
        </button>
      </div>
    </main>
  );
}
