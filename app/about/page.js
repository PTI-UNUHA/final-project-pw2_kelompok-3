"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function AboutPage() {
  const router = useRouter();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>EduCourse UNUHA</span>
          <h1>
            Tentang <span>EduCourse</span>
          </h1>
          <p>
            Platform katalog kursus digital untuk membantu mahasiswa
            Universitas Nurul Huda mengembangkan skill IT secara terarah,
            praktis, dan relevan dengan kebutuhan industri.
          </p>

          {/* BUTTON HERO */}
          <div className={styles.heroActions}>
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => router.push("/courses")}
            >
              Lihat Kursus
            </button>

            <button
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={() => router.push("/register")}
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div>
              <h2>Apa itu EduCourse?</h2>
              <p>
                EduCourse UNUHA adalah platform frontend berbasis web
                sebagai katalog kursus digital.
                Mahasiswa dapat memilih kursus dan menentukan jalur belajar.
              </p>
              <p>
                Fokus pada <b>Web Development</b>, <b>Mobile Development</b>,
                dan <b>UI/UX Design</b>.
              </p>
            </div>

            <div className={styles.aboutBox}>
              <h4>Kenapa EduCourse?</h4>
              <ul>
                <li>Belajar mandiri & terarah</li>
                <li>Akses kursus cepat</li>
                <li>Siap dunia kerja</li>
                <li>Pembelajaran digital</li>
              </ul>

              <button
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => router.push("/courses")}
              >
                Jelajahi Semua Kursus →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE (CLICK → COURSES) */}
      <section className={styles.lightSection}>
        <h2>Keunggulan EduCourse</h2>

        <div className={styles.featureGrid}>
          <Feature title="Materi Terstruktur" route="/courses" />
          <Feature title="Berbasis Praktik" route="/courses" />
          <Feature title="Fokus Mahasiswa" route="/courses" />
          <Feature title="Skill Relevan" route="/courses" />
        </div>
      </section>

      {/* FLOW (CLICKABLE & NYAMBUNG) */}
      <section className={styles.section}>
        <h2>Alur Pembelajaran</h2>
        <p className={styles.subtitle}>
          Ikuti alur belajar EduCourse
        </p>

        <div className={styles.flow}>
          <FlowStep label="Pilih Kursus" route="/courses" />
          <FlowStep label="Pelajari Materi" route="/courses" />
          <FlowStep label="Kerjakan Proyek" route="/courses" />
          <FlowStep label="Tingkatkan Skill" route="/register" />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.cta}>
        <h2>Siap Mulai Belajar?</h2>
        <p>Bangun skill IT bersama EduCourse UNUHA</p>

        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={() => router.push("/courses")}
        >
          Mulai Sekarang
        </button>
      </section>

      <footer className={styles.footer}>
        © 2024 EduCourse UNUHA. All rights reserved.
      </footer>
    </>
  );
}

/* ===== COMPONENT ===== */

const Feature = ({ title, route }) => {
  const router = useRouter();
  return (
    <button
      className={`${styles.btn} ${styles.featureCard}`}
      onClick={() => router.push(route)}
    >
      <h3>{title}</h3>
      <p>Disusun rapi dan relevan dengan kebutuhan industri.</p>
    </button>
  );
};

const FlowStep = ({ label, route }) => {
  const router = useRouter();
  return (
    <button
      className={`${styles.btn} ${styles.flowStep}`}
      onClick={() => router.push(route)}
    >
      {label}
    </button>
  );
};
