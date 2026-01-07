"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";
import { useEffect } from "react";


export default function WebDevelopmentPage() {
  const router = useRouter();
  const kursus = "Web Development Dasar";

  const [tab, setTab] = useState("overview");
  const [openWeek, setOpenWeek] = useState(null);

  const silabus = [
    {
      week: "Minggu 1",
      title: "Pengantar Web & Internet",
      detail:
        "Konsep dasar internet, arsitektur client-server, cara kerja browser, domain, hosting, serta peran web developer dalam ekosistem teknologi informasi."
    },
    {
      week: "Minggu 2",
      title: "HTML Fundamental",
      detail:
        "Struktur dokumen HTML, semantic HTML, heading, paragraf, list, tabel, form input, dan praktik membangun halaman web statis."
    },
    {
      week: "Minggu 3",
      title: "CSS Dasar",
      detail:
        "Styling website menggunakan CSS, box model, warna, font, spacing, serta pengenalan layout."
    },
    {
      week: "Minggu 4",
      title: "Responsive Web Design",
      detail:
        "Flexbox, media query, mobile-first design, serta praktik membuat website responsif di berbagai ukuran layar."
    },
    {
      week: "Minggu 5",
      title: "JavaScript Dasar",
      detail:
        "Variabel, tipe data, operator, kondisi, perulangan, dan function sebagai dasar logika pemrograman."
    },
    {
      week: "Minggu 6",
      title: "DOM & Event Handling",
      detail:
        "Manipulasi DOM, event click, input, dan interaksi pengguna pada website."
    },
    {
      week: "Minggu 7",
      title: "Mini Project Website",
      detail:
        "Perancangan dan pengembangan website statis sebagai project akhir."
    },
    {
      week: "Minggu 8",
      title: "Presentasi & Evaluasi",
      detail:
        "Presentasi project, evaluasi hasil pembelajaran, dan umpan balik."
    }
  ];

  useEffect(() => {
    const savedTab = localStorage.getItem("webdev-tab");
    if (savedTab) setTab(savedTab);
  }, []);

  useEffect(() => {
    localStorage.setItem("webdev-tab", tab);
  }, [tab]);

  return (
    <main className={styles.page}>
      {/* ===== HEADER (ANTI KETUMPUK) ===== */}
      <header className={styles.topbar}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          ← Kembali
        </button>
        <span className={styles.brand}>EduCourse UNUHA</span>
      </header>

      {/* ===== HERO VISUAL ===== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1>Web Development Dasar</h1>
          <p>
            Program pembelajaran fundamental yang membahas pengembangan
            website modern secara terstruktur, akademis, dan aplikatif.
          </p>

          <div className={styles.meta}>
            <span>📚 8 Minggu</span>
            <span>🎓 Pemula</span>
            <span>🧾 Sertifikat</span>
            <span>💻 Project Nyata</span>
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
              Web Development Dasar adalah kursus yang dirancang untuk
              memberikan pemahaman konseptual dan keterampilan dasar
              dalam membangun website statis. Peserta akan mempelajari
              struktur, tampilan, dan interaksi website sebagai fondasi
              untuk pengembangan lebih lanjut.
            </p>

            <h3>Profil Peserta</h3>
            <ul>
              <li>Mahasiswa dari berbagai disiplin ilmu</li>
              <li>Pemula yang belum memiliki pengalaman coding</li>
              <li>Peserta yang ingin memahami dasar website</li>
            </ul>

            <h3>Prasyarat</h3>
            <ul>
              <li>Mampu menggunakan komputer</li>
              <li>Tidak memerlukan pengalaman pemrograman</li>
            </ul>

            <h3>Capaian Pembelajaran</h3>
            <ul>
              <li>Memahami konsep web & internet</li>
              <li>Mampu membangun website statis</li>
              <li>Menerapkan desain responsif</li>
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
              <li>Tugas Praktik: 30%</li>
              <li>Kuis & Partisipasi: 20%</li>
              <li>Mini Project Website: 50%</li>
            </ul>

            <h3>Output</h3>
            <ul>
              <li>Website statis siap dipublikasikan</li>
              <li>Mini project untuk portofolio</li>
            </ul>
          </div>
        )}

        {tab === "tools" && (
          <div className={styles.card}>
            <h2>Tools & Teknologi</h2>
            <ul>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Visual Studio Code</li>
              <li>Browser Chrome / Edge</li>
              <li>Git & GitHub (dasar)</li>
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
