"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import courses from "../../data/courses";
import styles from "./page.module.css";

export default function DetailKursusPage() {
  const { slug } = useParams();
  const router = useRouter();

  const [openWeek, setOpenWeek] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const course = courses.find((c) => c.slug === slug);
  if (!course) return <p>Data tidak ditemukan</p>;

  return (
    <>
      {/* HERO */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${course.heroImage})` }}
      >
        <div className={styles.overlay} />
        <button className={styles.backBtn} onClick={() => router.back()}>
          ← Kembali
        </button>

        <div className={styles.heroContent}>
          <span>{course.category}</span>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      </section>

      <main className={styles.container}>
        {/* STATS */}
        <section className={styles.stats}>
          <div>⭐ {course.rating}</div>
          <div>👥 {course.reviews} Peserta</div>
          <div>⏱ {course.duration}</div>
          <div>🎓 Sertifikat</div>
        </section>

        {/* GALLERY */}
        <section className={styles.gallery}>
          {course.gallery.map((img, i) => (
            <div
              key={i}
              className={styles.galleryImg}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </section>

        {/* OUTCOMES */}
        <section className={styles.section}>
          <h2>Hasil yang akan kamu dapatkan</h2>
          <ul>
            {course.outcomes.map((o, i) => (
              <li key={i}>✔ {o}</li>
            ))}
          </ul>
        </section>

        {/* LEARN */}
        <section className={styles.section}>
          <h2>Apa yang akan dipelajari</h2>
          <div className={styles.grid}>
            {course.learn.map((l, i) => (
              <div key={i} className={styles.box}>{l}</div>
            ))}
          </div>
        </section>

        {/* SILABUS */}
        <section className={styles.section}>
          <h2>Silabus</h2>
          {course.syllabus.map((w, i) => (
            <div key={i} className={styles.accordion}>
              <button onClick={() => setOpenWeek(openWeek === i ? null : i)}>
                {w.week}
                <span>{openWeek === i ? "−" : "+"}</span>
              </button>
              {openWeek === i && (
                <ul>
                  {w.topics.map((t, x) => (
                    <li key={x}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* METHOD */}
        <section className={styles.section}>
          <h2>Metode Pembelajaran</h2>
          <div className={styles.grid}>
            {course.method.map((m, i) => (
              <div key={i} className={styles.boxAlt}>{m}</div>
            ))}
          </div>
        </section>

        {/* TESTIMONI */}
        <section className={styles.section}>
          <h2>Testimoni Peserta</h2>
          <div className={styles.testi}>
            {course.testimonials.map((t, i) => (
              <div key={i} className={styles.testiCard}>
                <strong>{t.name}</strong>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2>Pertanyaan Umum</h2>
          {course.faq.map((f, i) => (
            <div key={i} className={styles.accordion}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
                <span>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p>{f.a}</p>}
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <h2>Siap mulai belajar?</h2>
          <button>Daftar Kursus Sekarang</button>
        </section>
      </main>
    </>
  );
}
