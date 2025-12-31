export default function Home() {
  return (
    <main>
      {/* SECTION UTAMA (NAVBAR + HERO + KATEGORI) */}
      <section className="section-full">
        <a href="#" className="btn btn-hero">
          Jelajahi Kursus →
        </a>

        <a href="#" className="btn btn-kategori">
          Lihat Semua Kursus →
        </a>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <a href="#" className="btn btn-cta">
          Daftar Sekarang →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2024 EduCourse UNUHA. All rights reserved.
      </footer>
    </main>
  );
}
