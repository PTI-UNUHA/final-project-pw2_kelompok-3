"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function CoursesPage() {
  const router = useRouter();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <button className={styles.backBtn} onClick={() => router.push("/")}>
          ← Kembali
        </button>

        <div className={styles.heroText}>
          <span className={styles.badgeHero}>EduCourse UNUHA</span>
          <h1>Semua Kursus</h1>
          <p>
            Jelajahi seluruh kursus Web, Mobile, dan UI/UX <br />
            yang dirancang untuk mahasiswa UNUHA.
          </p>
        </div>
      </section>

      {/* WEB */}
      <section className={styles.section}>
        <h2>Web Development</h2>
        <p className={styles.sectionDesc}>
          Bangun website modern dari dasar hingga framework.
        </p>

        <div className={styles.courseGrid}>
          <CourseCard bg="web1" title="Web Development Dasar" />
          <CourseCard bg="web2" title="HTML & CSS Fundamental" />
          <CourseCard bg="web3" title="JavaScript Dasar" />
          <CourseCard bg="web4" title="React JS Fundamental" />
        </div>
      </section>

      {/* MOBILE */}
      <section className={styles.sectionAlt}>
        <h2>Mobile Development</h2>
        <p className={styles.sectionDesc}>
          Kembangkan aplikasi Android & iOS profesional.
        </p>

        <div className={styles.courseGrid}>
          <CourseCard bg="mobile1" title="Android Development (Kotlin)" />
          <CourseCard bg="mobile2" title="Flutter Mobile App" />
          <CourseCard bg="mobile3" title="React Native" />
          <CourseCard bg="mobile4" title="Firebase untuk Mobile App" />
        </div>
      </section>

      {/* UIUX */}
      <section className={styles.section}>
        <h2>UI / UX Design</h2>
        <p className={styles.sectionDesc}>
          Desain antarmuka modern & pengalaman pengguna.
        </p>

        <div className={styles.courseGrid}>
          <CourseCard bg="uiux1" title="UI/UX Design Fundamental" />
          <CourseCard bg="uiux2" title="UI/UX Mobile Design" />
          <CourseCard bg="uiux3" title="Figma untuk UI Design" />
          <CourseCard bg="uiux4" title="UX Research & Wireframing" />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Siap Tingkatkan Skill?</h2>
        <p>Mulai belajar sekarang bersama EduCourse UNUHA</p>
        <Link href="/register">
          <button>Daftar Sekarang →</button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        © 2024 EduCourse UNUHA. All rights reserved.
      </footer>
    </>
  );
}

/* ===================== TAMBAHAN LINK MAP ===================== */
const courseLinks = {
  "Web Development Dasar": "/courses/web-development",
  "HTML & CSS Fundamental": "/courses/html-css",
  "JavaScript Dasar": "/courses/java",
  "React JS Fundamental": "/courses/react-js",

  "Android Development (Kotlin)": "/courses/android",
  "Flutter Mobile App": "/courses/flutter",
  "React Native": "/courses/react-native",
  "Firebase untuk Mobile App": "/courses/firebase",

  "UI/UX Design Fundamental": "/courses/uiux-fundamental",
  "UI/UX Mobile Design": "/courses/uiux-design",
  "Figma untuk UI Design": "/courses/figma",
  "UX Research & Wireframing": "/courses/ux"
};

/* ===================== COURSE CARD ===================== */
function CourseCard({ bg, title }) {
  return (
    <div className={`${styles.card} ${styles[bg]}`}>
      <div className={styles.cardImage}></div>
      <div className={styles.cardBody}>
        <span className={styles.level}>Pemula</span>
        <h3>{title}</h3>
        <p className={styles.desc}>
          Materi lengkap + praktik langsung.
        </p>
        <Link href={courseLinks[title]}>
          <button>Lihat Kursus →</button>
        </Link>
      </div>
    </div>
  );
}
