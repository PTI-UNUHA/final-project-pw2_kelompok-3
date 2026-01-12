"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function VirtualAccountPage() {
  const router = useRouter();
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
            <li>Buka mobile banking atau internet banking BRI</li>
            <li>Pilih menu Virtual Account</li>
            <li>Masukkan kode VA di atas</li>
            <li>Konfirmasi pembayaran</li>
          </ol>

          <div className={styles.linkGroup}>
            <a href="https://ib.bri.co.id/" target="_blank" rel="noopener noreferrer" className={styles.bankLink}>
              🌐 Buka BRI Internet Banking
            </a>
            <a href="intent://#Intent;scheme=bri;package=com.linkaja.bri;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.linkaja.bri;end" className={styles.bankLink}>
              📱 Buka BRI Mobile (Android)
            </a>
            <a href="https://apps.apple.com/id/app/bri-mobile/id1146836150" target="_blank" rel="noopener noreferrer" className={styles.bankLink}>
              🍎 Buka BRI Mobile (iOS)
            </a>
          </div>

          <p className={styles.waiting}>
            ⏳ Menunggu pembayaran…
          </p>

          <button onClick={() => router.push("/daftar-kursus/sukses")}>
            Saya Sudah Bayar
          </button>
        </section>
      </div>
    </main>
  );
}
