import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "EduCourse UNUHA",
  description: "Platform Katalog Kursus Online Mahasiswa Universitas Nurul Huda",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        {/* NAVBAR */}
        <header className="navbar">
          <div className="navbarInner">
            <span className="logo">EduCourse</span>

            <nav className="menu">
              <Link href="/">Home</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/register" className="register">
                Register
              </Link>
            </nav>
          </div>
        </header>

        {/* ISI HALAMAN */}
        <main className="pageContent">
          {children}
        </main>
      </body>
    </html>
  );
}
