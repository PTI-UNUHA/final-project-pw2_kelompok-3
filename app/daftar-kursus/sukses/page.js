"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function SuksesPage() {
  const router = useRouter();

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div className={styles.icon}>✓</div>
        <h1>Pendaftaran Berhasil</h1>
        <p>
          Data kamu sudah berhasil dikirim.
          <br />
          Tim EduCourse akan segera memproses pendaftaranmu.
        </p>

        <button onClick={() => router.push("/")}>
          Kembali ke Home
        </button>
      </div>
    </main>
  );
}
