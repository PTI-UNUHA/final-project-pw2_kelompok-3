"use client";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>EduCourse UNUHA</span>
          <h1>
            Tentang <span>EduCourse</span>
          </h1>
          <p>
            Platform katalog kursus digital yang membantu mahasiswa
            Universitas Nurul Huda mengembangkan skill IT secara terarah,
            praktis, dan relevan dengan kebutuhan industri.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div>
              <h2>Apa itu EduCourse?</h2>
              <p>
                EduCourse UNUHA adalah platform frontend berbasis web
                yang dirancang sebagai katalog kursus online.
                Mahasiswa dapat melihat daftar kursus, detail materi,
                serta alur pembelajaran secara terstruktur.
              </p>
              <p>
                Fokus utama EduCourse adalah bidang
                <b> Web Development</b>, <b>Mobile Development</b>,
                dan <b>UI/UX Design</b>.
              </p>
            </div>

            <div className={styles.aboutBox}>
              <h4>Kenapa Dibuat?</h4>
              <ul>
                <li>Membantu mahasiswa belajar mandiri</li>
                <li>Memudahkan akses informasi kursus</li>
                <li>Menyiapkan skill dunia kerja</li>
                <li>Mendukung pembelajaran digital</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE ================= */}
      <section className={styles.lightSection}>
        <h2>Keunggulan EduCourse</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>📘 Materi Terstruktur</h3>
            <p>Disusun dari dasar hingga lanjutan.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>🛠 Berbasis Praktik</h3>
            <p>Belajar lewat studi kasus dan proyek.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>🎓 Fokus Mahasiswa</h3>
            <p>Disesuaikan kebutuhan UNUHA.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>💡 Skill Relevan</h3>
            <p>Materi sesuai perkembangan IT.</p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className={styles.stats}>
        <div>
          <h3>12+</h3>
          <p>Kursus</p>
        </div>
        <div>
          <h3>3</h3>
          <p>Bidang Utama</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Mahasiswa</p>
        </div>
        <div>
          <h3>Project</h3>
          <p>Based Learning</p>
        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className={styles.section}>
        <h2>Alur Pembelajaran</h2>
        <p className={styles.subtitle}>
          EduCourse dirancang dengan alur belajar yang jelas
        </p>

        <div className={styles.flow}>
          <div>📚 Pilih Kursus</div>
          <div>🧠 Pelajari Materi</div>
          <div>🛠 Kerjakan Proyek</div>
          <div>🎯 Tingkatkan Skill</div>
        </div>
      </section>

      {/* ================= TARGET ================= */}
      <section className={styles.lightSection}>
        <h2>EduCourse Cocok Untuk</h2>

        <div className={styles.targetGrid}>
          <div className={styles.targetCard}>
            <h4>Mahasiswa Pemula</h4>
            <p>Yang baru mulai belajar IT</p>
          </div>
          <div className={styles.targetCard}>
            <h4>Mahasiswa Berkembang</h4>
            <p>Yang ingin upgrade skill digital</p>
          </div>
          <div className={styles.targetCard}>
            <h4>Calon Profesional</h4>
            <p>Yang ingin siap kerja</p>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className={styles.darkSection}>
        <div className={styles.container}>
          <h2>Visi & Misi</h2>

          <div className={styles.visionGrid}>
            <div>
              <h4>Visi</h4>
              <p>
                Menjadi platform katalog kursus digital terbaik
                untuk mahasiswa Universitas Nurul Huda.
              </p>
            </div>

            <div>
              <h4>Misi</h4>
              <ul>
                <li>Meningkatkan kompetensi digital</li>
                <li>Menyediakan kursus berkualitas</li>
                <li>Mendukung pembelajaran mandiri</li>
                <li>Mempersiapkan dunia kerja</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <p>© 2024 EduCourse UNUHA. All rights reserved.</p>
      </footer>
    </>
  );
}
