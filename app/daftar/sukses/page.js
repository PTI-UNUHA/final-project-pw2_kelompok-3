"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function SuksesPage() {
  const router = useRouter();
  const [params, setParams] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setParams({
      nama: searchParams.get("nama"),
      nim: searchParams.get("nim"),
      prodi: searchParams.get("prodi"),
      kursus: searchParams.get("kursus"),
    });
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.box}>
        <div className={styles.icon}>✓</div>
        <h1 className={styles.title}>Pendaftaran Berhasil</h1>

        <p className={styles.text}>
          <b>{params.nama}</b><br />
          NIM: {params.nim}<br />
          Prodi: {params.prodi}
        </p>

        <p className={styles.kursus}>
          Kursus: <b>{params.kursus}</b>
        </p>

        <button className={styles.primaryBtn} onClick={() => router.push("/")}>
          Kembali ke Home
        </button>
      </div>
    </main>
  );
}
