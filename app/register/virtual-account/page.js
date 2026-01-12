"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

function VirtualAccountContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bank = searchParams.get("bank") || "bri";
  const total = searchParams.get("total") || "0";

  const bankDetails = {
    bca: {
      name: "BCA",
      instructions: [
        "Buka BCA Mobile atau internet banking BCA",
        "Pilih menu Transfer",
        "Pilih Virtual Account",
        "Masukkan kode VA di atas",
        "Konfirmasi pembayaran"
      ],
      links: {
        web: "https://ibank.klikbca.com/",
        android: "https://play.google.com/store/apps/details?id=com.bca",
        ios: "https://apps.apple.com/id/app/bca-mobile/id524479615"
      }
    },
    bni: {
      name: "BNI",
      instructions: [
        "Buka BNI Mobile atau internet banking BNI",
        "Pilih menu Transfer",
        "Pilih Virtual Account Billing",
        "Masukkan kode VA di atas",
        "Konfirmasi pembayaran"
      ],
      links: {
        web: "https://ibank.bni.co.id/",
        android: "https://play.google.com/store/apps/details?id=com.bni",
        ios: "https://apps.apple.com/id/app/bni-mobile-banking/id1107822082"
      }
    },
    bri: {
      name: "BRI",
      instructions: [
        "Buka mobile banking atau internet banking BRI",
        "Pilih menu Virtual Account",
        "Masukkan kode VA di atas",
        "Konfirmasi pembayaran"
      ],
      links: {
        web: "https://ib.bri.co.id/",
        android: "https://play.google.com/store/apps/details?id=com.linkaja.bri",
        ios: "https://apps.apple.com/id/app/bri-mobile/id1146836150"
      }
    },
    mandiri: {
      name: "Mandiri",
      instructions: [
        "Buka Mandiri Online atau mobile banking Mandiri",
        "Pilih menu Pembayaran",
        "Pilih Virtual Account",
        "Masukkan kode VA di atas",
        "Konfirmasi pembayaran"
      ],
      links: {
        web: "https://ibank.bankmandiri.co.id/",
        android: "https://play.google.com/store/apps/details?id=com.bankmandiri.mandirionline",
        ios: "https://apps.apple.com/id/app/mandiri-online/id1445406421"
      }
    },
    seabank: {
      name: "SeaBank",
      instructions: [
        "Buka aplikasi SeaBank",
        "Pilih menu Transfer",
        "Pilih Virtual Account",
        "Masukkan kode VA di atas",
        "Konfirmasi pembayaran"
      ],
      links: {
        web: "https://www.seabank.co.id/",
        android: "https://play.google.com/store/apps/details?id=com.seabank.mobile",
        ios: "https://apps.apple.com/id/app/seabank/id6472694079"
      }
    }
  };

  const currentBank = bankDetails[bank] || bankDetails.bri;

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
            <strong>{currentBank.name} VA</strong>

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
            {currentBank.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>

          <div className={styles.linkGroup}>
            <a href={currentBank.links.web} target="_blank" rel="noopener noreferrer" className={styles.bankLink}>
              🌐 Buka {currentBank.name} Internet Banking
            </a>
            <a href={currentBank.links.android} className={styles.bankLink}>
              📱 Buka {currentBank.name} Mobile (Android)
            </a>
            <a href={currentBank.links.ios} target="_blank" rel="noopener noreferrer" className={styles.bankLink}>
              🍎 Buka {currentBank.name} Mobile (iOS)
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

export default function VirtualAccountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VirtualAccountContent />
    </Suspense>
  );
}
