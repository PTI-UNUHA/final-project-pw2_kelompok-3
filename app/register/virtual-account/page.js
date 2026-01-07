"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "../page.module.css";

export default function VirtualAccountPage() {
  const params = useSearchParams();
  const bank = params.get("bank");
  const total = params.get("total");

  const [copied, setCopied] = useState(false);

  const vaCode = `8808${Math.floor(
    100000000 + Math.random() * 900000000
  )}`;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.card}>
          <h1>Virtual Account</h1>

          <div className={styles.bankInfo}>
            <strong>{bank?.toUpperCase()} VA</strong>

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
              Total: Rp {Number(total).toLocaleString("id-ID")}
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
