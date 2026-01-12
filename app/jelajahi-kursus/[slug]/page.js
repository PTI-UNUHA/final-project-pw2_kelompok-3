"use client";
import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";

const COURSE_DATA = {
  "html-css-dasar": {
    title: "HTML & CSS Dasar",
    category: "Web Development",
    level: "Pemula",
    price: "Gratis",
    rating: "4.9",
    desc: "Pelajari dasar pembuatan website menggunakan HTML dan CSS dari nol.",
    materi: [
      "Pengenalan HTML",
      "Struktur Website",
      "CSS Dasar",
      "Layout & Responsive",
      "Mini Project"
    ]
  },
  "javascript-dasar": {
    title: "JavaScript Dasar",
    category: "Web Development",
    level: "Pemula",
    price: "Rp 120.000",
    rating: "4.8",
    desc: "Belajar logika pemrograman JavaScript untuk website interaktif.",
    materi: [
      "Variable & Data Type",
      "Condition & Loop",
      "Function",
      "DOM Manipulation",
      "Final Project"
    ]
  },
  "react-js-fundamental": {
    title: "React JS Fundamental",
    category: "Web Development",
    level: "Menengah",
    price: "Rp 200.000",
    rating: "4.7",
    desc: "Membangun aplikasi web modern menggunakan React JS.",
    materi: [
      "Component & JSX",
      "State & Props",
      "Hooks",
      "Routing",
      "Project Aplikasi"
    ]
  },
  "android-development-kotlin": {
    title: "Android Development (Kotlin)",
    category: "Mobile Development",
    level: "Pemula",
    price: "Rp 150.000",
    rating: "4.6",
    desc: "Bangun app Android dengan Kotlin.",
    materi: [
      "Kotlin Basics",
      "Android Studio",
      "UI Design",
      "Data Storage",
      "Final App"
    ]
  },
  "flutter-mobile-app": {
    title: "Flutter Mobile App",
    category: "Mobile Development",
    level: "Pemula",
    price: "Rp 180.000",
    rating: "4.5",
    desc: "Buat app cross-platform dengan Flutter.",
    materi: [
      "Dart Language",
      "Flutter Widgets",
      "State Management",
      "Navigation",
      "Deployment"
    ]
  },
  "react-native": {
    title: "React Native",
    category: "Mobile Development",
    level: "Menengah",
    price: "Rp 200.000",
    rating: "4.4",
    desc: "Develop mobile app dengan React Native.",
    materi: [
      "React Native Setup",
      "Components",
      "Navigation",
      "API Integration",
      "Build & Deploy"
    ]
  },
  "firebase-mobile-app": {
    title: "Firebase untuk Mobile App",
    category: "Mobile Development",
    level: "Menengah",
    price: "Rp 100.000",
    rating: "4.3",
    desc: "Integrasi Firebase ke mobile app.",
    materi: [
      "Firebase Auth",
      "Firestore",
      "Cloud Storage",
      "Push Notifications",
      "Analytics"
    ]
  },
  "ui-ux-design-fundamental": {
    title: "UI/UX Design Fundamental",
    category: "UI/UX Design",
    level: "Pemula",
    price: "Rp 150.000",
    rating: "4.8",
    desc: "Dasar-dasar UI/UX design.",
    materi: [
      "Design Principles",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing"
    ]
  },
  "ui-ux-mobile-design": {
    title: "UI/UX Mobile Design",
    category: "UI/UX Design",
    level: "Pemula",
    price: "Rp 150.000",
    rating: "4.7",
    desc: "Design UI/UX untuk mobile.",
    materi: [
      "Mobile Guidelines",
      "Gestures",
      "Navigation Patterns",
      "A/B Testing",
      "Case Studies"
    ]
  },
  "figma-ui-design": {
    title: "Figma untuk UI Design",
    category: "UI/UX Design",
    level: "Pemula",
    price: "Rp 120.000",
    rating: "4.9",
    desc: "Master Figma untuk UI design.",
    materi: [
      "Figma Interface",
      "Components",
      "Prototyping",
      "Team Collaboration",
      "Advanced Tools"
    ]
  },
  "ux-research-wireframing": {
    title: "UX Research & Wireframing",
    category: "UI/UX Design",
    level: "Menengah",
    price: "Rp 130.000",
    rating: "4.5",
    desc: "Pelajari UX research dan wireframing.",
    materi: [
      "User Interviews",
      "Surveys",
      "Persona Creation",
      "Wireframing Tools",
      "User Flows"
    ]
  },
  "web-development-dasar": {
    title: "Web Development Dasar",
    category: "Web Development",
    level: "Pemula",
    price: "Rp 120.000",
    rating: "4.6",
    desc: "Dasar web development.",
    materi: [
      "HTML5",
      "CSS3",
      "JavaScript Intro",
      "Responsive Design",
      "Basic Project"
    ]
  },
  "next-js": {
    title: "Next.js",
    category: "Web Development",
    level: "Mahir",
    price: "Rp 250.000",
    rating: "4.8",
    desc: "Framework React untuk production.",
    materi: [
      "SSR & SSG",
      "API Routes",
      "Deployment",
      "Performance",
      "Advanced Features"
    ]
  },
  "kotlin-advanced": {
    title: "Kotlin Advanced",
    category: "Mobile Development",
    level: "Mahir",
    price: "Rp 220.000",
    rating: "4.7",
    desc: "Advanced Kotlin untuk Android.",
    materi: [
      "Coroutines",
      "Flow",
      "DSL",
      "Advanced Patterns",
      "Performance"
    ]
  },
  "flutter-ui-animations": {
    title: "Flutter UI Animations",
    category: "Mobile Development",
    level: "Menengah",
    price: "Rp 180.000",
    rating: "4.8",
    desc: "Animations in Flutter.",
    materi: [
      "Implicit Animations",
      "Explicit Animations",
      "Hero Animations",
      "Custom Animations",
      "Performance"
    ]
  },
  "design-system": {
    title: "Design System",
    category: "UI/UX Design",
    level: "Mahir",
    price: "Rp 230.000",
    rating: "4.9",
    desc: "Building design systems.",
    materi: [
      "Component Libraries",
      "Design Tokens",
      "Documentation",
      "Collaboration",
      "Maintenance"
    ]
  },
  "ux-portfolio-project": {
    title: "UX Portfolio Project",
    category: "UI/UX Design",
    level: "Menengah",
    price: "Rp 190.000",
    rating: "4.8",
    desc: "Create UX portfolio.",
    materi: [
      "Case Studies",
      "User Research",
      "Prototyping",
      "Presentation",
      "Feedback"
    ]
  }
};

export default function CourseDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const course = COURSE_DATA[slug];

  if (!course) {
    return (
      <div className={styles.notFound}>
        <h2>Kursus tidak ditemukan</h2>
        <button onClick={() => router.push("/jelajahi-kursus")}>
          Kembali ke Kursus
        </button>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <button
          className={styles.backBtn}
          onClick={() => router.push("/jelajahi-kursus")}
        >
          ← Kembali
        </button>

        <div className={styles.heroContent}>
          <span className={styles.badge}>{course.category}</span>
          <h1>{course.title}</h1>
          <p>{course.desc}</p>
        </div>
      </section>

      {/* DETAIL */}
      <section className={styles.section}>
        <div className={styles.infoGrid}>
          <div><strong>Level</strong><p>{course.level}</p></div>
          <div><strong>Rating</strong><p>⭐ {course.rating}</p></div>
          <div><strong>Harga</strong><p>{course.price}</p></div>
        </div>

        <h2>Materi yang Dipelajari</h2>
        <ul className={styles.materiList}>
          {course.materi.map((item, i) => (
            <li key={i}>✓ {item}</li>
          ))}
        </ul>

        <button
          className={styles.ctaBtn}
          onClick={() => router.push("/register")}
        >
          Daftar Sekarang
        </button>
      </section>
    </>
  );
}
