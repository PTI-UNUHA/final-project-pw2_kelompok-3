"use client";

import { useSearchParams, useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function SuksesPage() {
  const params = useSearchParams();
  const router = useRouter();

  return (
    <main className={styles.page}>
      <div className={styles.box}>
        <div className={styles.icon}>✓</div>
        <h1 className={styles.title}>Pendaftaran Berhasil</h1>

        <p className={styles.text}>
          <b>{params.get("nama")}</b><br />
          NIM: {params.get("nim")}<br />
          Prodi: {params.get("prodi")}
        </p>

        <p className={styles.kursus}>
          Kursus: <b>{params.get("kursus")}</b>
        </p>

        <button className={styles.primaryBtn} onClick={() => router.push("/")}>
          Kembali ke Home
        </button>
      </div>
    </main>
  );
}
