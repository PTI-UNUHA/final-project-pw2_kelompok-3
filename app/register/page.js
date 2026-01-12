"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

/* ===== DATA KURSUS ===== */
const COURSES = [
  { name: "Web Development Dasar", price: 0 },
  { name: "HTML & CSS Fundamental", price: 0 },
  { name: "JavaScript Dasar", price: 0 },
  { name: "React JS Fundamental", price: 150000 },
  { name: "Android Development (Kotlin)", price: 150000 },
  { name: "Flutter Mobile App", price: 150000 },
  { name: "React Native", price: 150000 },
  { name: "Firebase untuk Mobile App", price: 100000 },
];

export default function RegisterPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const [form, setForm] = useState({
    nama: "",
    nim: "",
    email: "",
    prodi: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [bank, setBank] = useState("");
  const [senderAccount, setSenderAccount] = useState("");

  const [wallet, setWallet] = useState("");
  const [walletNumber, setWalletNumber] = useState("");
  const [walletBalance, setWalletBalance] = useState(null);

  /* ===== LOGIKA ===== */
  const toggleCourse = (course) => {
    setSelectedCourses((prev) =>
      prev.find((c) => c.name === course.name)
        ? prev.filter((c) => c.name !== course.name)
        : [...prev, course]
    );
  };

  const totalPrice = selectedCourses.reduce(
    (sum, c) => sum + c.price,
    0
  );

  function submitForm() {
    if (
      !form.nama ||
      !form.nim ||
      !form.email ||
      !form.prodi ||
      selectedCourses.length === 0
    ) {
      alert("Lengkapi semua data dan pilih kursus");
      return;
    }

    if (totalPrice === 0) {
      alert("Pendaftaran berhasil (Gratis)");
      router.push("/courses");
    } else {
      setStep(2);
    }
  }

  function submitPayment() {
    if (!paymentMethod) {
      alert("Pilih metode pembayaran");
      return;
    }

    if (paymentMethod === "bank") {
      if (!bank || !senderAccount) {
        alert("Lengkapi data transfer bank");
        return;
      }

      router.push(
        `/register/virtual-account?bank=${bank}&total=${totalPrice}`
      );
    }

    if (paymentMethod === "ewallet") {
      if (!wallet || !walletNumber) {
        alert("Lengkapi data e-wallet");
        return;
      }

      if (walletBalance < totalPrice) {
        alert("Saldo tidak cukup");
        return;
      }

      alert("Pembayaran E-Wallet Berhasil (Dummy)");
      router.push("/courses");
    }
  }

  /* ===== HALAMAN PEMBAYARAN ===== */
  if (step === 2) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.card}>
            <h1>Pembayaran</h1>

            <div className={styles.summary}>
              {selectedCourses.map((c, i) => (
                <div key={i} className={styles.summaryRow}>
                  <span>{c.name}</span>
                  <strong>
                    {c.price === 0
                      ? "Gratis"
                      : `Rp ${c.price.toLocaleString("id-ID")}`}
                  </strong>
                </div>
              ))}
            </div>

            {/* TRANSFER BANK */}
            <div
              className={`${styles.method} ${
                paymentMethod === "bank" ? styles.activeMethod : ""
              }`}
              onClick={() => setPaymentMethod("bank")}
            >
              <div className={styles.methodHeader}>Transfer Bank</div>

              {paymentMethod === "bank" && (
                <div className={styles.methodDetail}>
                  <div className={styles.bankGrid}>
                    {["bca","bni","bri","mandiri","seabank"].map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`${styles.bankBtn} ${styles[b]} ${
                          bank === b ? styles.bankActive : ""
                        }`}
                        onClick={() => setBank(b)}
                      />
                    ))}
                  </div>

                  {bank && (
                    <div className={styles.bankInfo}>
                      <strong>{bank.toUpperCase()}</strong>
                      <p>No. Rek Tujuan: <b>1234 5678 9012</b></p>
                      <p>a.n EduCourse UNUHA</p>

                      <label>Nomor Rekening Pengirim</label>
                      <input
                        className={styles.input}
                        placeholder="Masukkan rekening kamu"
                        value={senderAccount}
                        onChange={(e) =>
                          setSenderAccount(e.target.value)
                        }
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* E-WALLET */}
            <div
              className={`${styles.method} ${
                paymentMethod === "ewallet" ? styles.activeMethod : ""
              }`}
              onClick={() => setPaymentMethod("ewallet")}
            >
              <div className={styles.methodHeader}>E-Wallet</div>

              {paymentMethod === "ewallet" && (
                <div className={styles.methodDetail}>
                  <div className={styles.walletGrid}>
                    {["dana","gopay","shopeepay"].map((w) => (
                      <button
                        key={w}
                        type="button"
                        className={`${styles.walletBtn} ${styles[w]} ${
                          wallet === w ? styles.walletActive : ""
                        }`}
                        onClick={() => setWallet(w)}
                      />
                    ))}
                  </div>

                  {wallet && (
                    <>
                      <input
                        className={styles.input}
                        placeholder="Nomor HP E-Wallet"
                        value={walletNumber}
                        onChange={(e) => {
                          setWalletNumber(e.target.value);

                          if (e.target.value.length >= 10) {
                            const saldo =
                              Math.floor(Math.random() * 500000) + 50000;
                            setWalletBalance(saldo);
                          } else {
                            setWalletBalance(null);
                          }
                        }}
                      />

                      {walletBalance !== null && (
                        <div className={styles.balanceInfo}>
                          <span>Saldo tersedia</span>
                          <strong>
                            Rp {walletBalance.toLocaleString("id-ID")}
                          </strong>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            <div className={styles.footerPay}>
              <strong>
                Rp {totalPrice.toLocaleString("id-ID")}
              </strong>
              <button
                className={styles.primaryBtn}
                onClick={submitPayment}
                disabled={
                  paymentMethod === "ewallet" &&
                  walletBalance !== null &&
                  walletBalance < totalPrice
                }
              >
                Konfirmasi Pembayaran
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  /* ===== FORM ===== */
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.card}>
          <h1>Pendaftaran Kursus</h1>

          <div className={styles.courseGrid}>
            {COURSES.map((c) => (
              <label key={c.name} className={styles.courseItem}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => toggleCourse(c)}
                />
                <span>{c.name}</span>
                <small>
                  {c.price === 0
                    ? "Gratis"
                    : `Rp ${c.price.toLocaleString("id-ID")}`}
                </small>
              </label>
            ))}
          </div>

          <input className={styles.input} placeholder="Nama Lengkap"
            onChange={(e)=>setForm({...form,nama:e.target.value})} />
          <input className={styles.input} placeholder="NIM"
            onChange={(e)=>setForm({...form,nim:e.target.value})} />
          <input className={styles.input} placeholder="Email"
            onChange={(e)=>setForm({...form,email:e.target.value})} />

          <select className={styles.select}
            onChange={(e)=>setForm({...form,prodi:e.target.value})}>
            <option value="">Program Studi</option>
            <option>Informatika</option>
            <option>Pendidikan Teknologi Informasi</option>
            <option>Sistem Informasi</option>
          </select>

          <button className={styles.primaryBtn} onClick={submitForm}>
            Lanjutkan
          </button>
        </section>
      </div>
    </main>
  );
}
