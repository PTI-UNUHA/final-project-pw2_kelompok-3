const courses = [
  {
    slug: "html-css-dasar",
    title: "HTML & CSS Dasar",
    category: "Web Development",
    level: "Pemula",
    rating: 4.9,
    reviews: 324,
    duration: "6 Minggu",
    certificate: true,
    price: "Gratis",

    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    ],

    description:
      "Kursus HTML & CSS Dasar dirancang untuk pemula yang ingin memahami fondasi pembuatan website modern. Kamu akan belajar dari nol, mulai dari struktur HTML, styling dengan CSS, hingga membuat layout responsif yang siap digunakan di dunia nyata.",

    outcomes: [
      "Mampu membuat website statis sendiri",
      "Memahami struktur HTML dengan benar",
      "Menguasai layout Flexbox & Grid",
      "Membuat tampilan responsive",
    ],

    learn: [
      "Struktur HTML5",
      "CSS dasar & lanjutan",
      "Flexbox & Grid",
      "Responsive Design",
      "Mini Project Website",
    ],

    syllabus: [
      {
        week: "Minggu 1",
        topics: ["Pengenalan Web", "HTML dasar", "Semantic HTML"],
      },
      {
        week: "Minggu 2",
        topics: ["CSS dasar", "Warna", "Typography", "Box Model"],
      },
      {
        week: "Minggu 3",
        topics: ["Flexbox", "Layout Website"],
      },
      {
        week: "Minggu 4",
        topics: ["Responsive Design", "Media Query"],
      },
      {
        week: "Minggu 5",
        topics: ["Mini Project", "Code Review"],
      },
    ],

    method: [
      "Video pembelajaran terstruktur",
      "Studi kasus & praktik",
      "Mini project",
      "Diskusi & evaluasi",
    ],

    testimonials: [
      {
        name: "Andi",
        text: "Materinya jelas dan mudah dipahami. Cocok buat pemula.",
      },
      {
        name: "Siti",
        text: "Setelah ikut kursus ini aku bisa bikin website sendiri.",
      },
    ],

    faq: [
      {
        q: "Apakah kursus ini cocok untuk pemula?",
        a: "Ya, kursus ini dirancang dari nol tanpa perlu pengalaman coding.",
      },
      {
        q: "Apakah mendapatkan sertifikat?",
        a: "Ya, sertifikat akan diberikan setelah menyelesaikan kursus.",
      },
    ],
  },
];

export default courses;
