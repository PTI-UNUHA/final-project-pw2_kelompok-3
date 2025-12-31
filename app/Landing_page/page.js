import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>

      <section className={styles.hero}>
        <h1>Educourse UNUHA</h1>
        <p>Platform pembelajaran online untuk mahasiswa</p>

        <Link href="/courses">
          <button className={styles.button}>Lihat Kursus</button>
        </Link>
      </section>

      <section className={styles.content}>
        <h2>Kursus Unggulan</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image
              src="/courses/web.jpg"
              width={300}
              height={180}
              alt="Web Development"
            />
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript</p>
          </div>

          <div className={styles.card}>
            <Image
              src="/courses/mobile.jpg"
              width={300}
              height={180}
              alt="Mobile App"
            />
            <h3>Mobile App</h3>
            <p>Android dan iOS</p>
          </div>

          <div className={styles.card}>
            <Image
              src="/courses/uiux.jpg"
              width={300}
              height={180}
              alt="UI UX Design"
            />
            <h3>UI / UX Design</h3>
            <p>Desain antarmuka aplikasi</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        © 2025 Educourse UNUHA
      </footer>

    </main>
  );
}

