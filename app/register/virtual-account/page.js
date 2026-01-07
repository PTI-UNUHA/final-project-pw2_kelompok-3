"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "../page.module.css";

export default function VirtualAccountPage() {
  const [params, setParams] = useState({ bank: "", total: "" });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setParams({
      bank: searchParams.get("bank"),
      total: searchParams.get("total"),
    });
  }, []);

  const [copied, setCopied] = useState(false);

  const [vaCode] = useState(() => `8808${Math.floor(
    100000000 + Math.random() * 900000000
  )}`);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.card}>
          <h1>Virtual Account</h1>

          <div className={styles.bankInfo}>
            <strong>{params.bank?.toUpperCase()} VA</strong>

            <div className={styles.vaBox}>
              <span>{vaCode}</span>
              <button
                className={styles.copyBtn}
                onClick={() => {
                  navigator.clipboard.writeText(vaCode);
                  setCopied(true);
                }}
              >
                {copied ? "Tersalin ✓" : "Salin"}
              </button>
            </div>

            <h3>
              Total: Rp {Number(params.total).toLocaleString("id-ID")}
            </h3>
          </div>

          <ol className={styles.instruction}>
            <li>Buka mobile banking</li>
            <li>Pilih Virtual Account</li>
            <li>Masukkan kode di atas</li>
            <li>Konfirmasi pembayaran</li>
          </ol>

          <p className={styles.waiting}>
            ⏳ Menunggu pembayaran…
          </p>
        </section>
      </div>
    </main>
  );
}
