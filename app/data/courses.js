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
  {
    slug: "javascript-dasar",
    title: "JavaScript Dasar",
    category: "Web Development",
    level: "Pemula",
    rating: 4.8,
    reviews: 256,
    duration: "8 Minggu",
    certificate: true,
    price: "Rp 120.000",

    heroImage: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",

    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    ],

    description: "Pelajari dasar-dasar JavaScript untuk membuat website interaktif.",

    outcomes: ["Menguasai sintaks JS", "Manipulasi DOM", "Event handling"],

    learn: ["Variabel & Tipe Data", "Fungsi", "DOM Manipulation", "Events"],

    syllabus: [
      { week: "Minggu 1", topics: ["Intro JS", "Variabel"] },
      { week: "Minggu 2", topics: ["Fungsi", "Array"] },
      { week: "Minggu 3", topics: ["DOM", "Events"] },
    ],

    method: ["Video", "Praktik", "Project"],

    testimonials: [
      { name: "Budi", text: "JS jadi mudah dipahami." },
    ],

    faq: [
      { q: "Pemula?", a: "Ya." },
      { q: "Sertifikat?", a: "Ya." },
    ],
  },
  {
    slug: "react-js-fundamental",
    title: "React JS Fundamental",
    category: "Web Development",
    level: "Menengah",
    rating: 4.7,
    reviews: 189,
    duration: "10 Minggu",
    certificate: true,
    price: "Rp 200.000",

    heroImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",

    gallery: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    ],

    description: "Pelajari React untuk frontend modern.",

    outcomes: ["Component", "State", "Props"],

    learn: ["JSX", "Hooks", "Routing"],

    syllabus: [
      { week: "Minggu 1", topics: ["Intro React", "JSX"] },
      { week: "Minggu 2", topics: ["Component", "Props"] },
    ],

    method: ["Video", "Build App"],

    testimonials: [{ name: "Cici", text: "React keren!" }],

    faq: [
      { q: "Level?", a: "Menengah." },
    ],
  },
  {
    slug: "android-development-kotlin",
    title: "Android Development (Kotlin)",
    category: "Mobile Development",
    level: "Pemula",
    rating: 4.6,
    reviews: 145,
    duration: "12 Minggu",
    certificate: true,
    price: "Rp 150.000",

    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",

    gallery: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    ],

    description: "Bangun app Android dengan Kotlin.",

    outcomes: ["Activity", "Layout", "Data"],

    learn: ["Kotlin Basics", "Android Studio", "UI Design"],

    syllabus: [
      { week: "Minggu 1", topics: ["Intro Android", "Kotlin"] },
      { week: "Minggu 2", topics: ["Activity", "Intent"] },
    ],

    method: ["Video", "Project"],

    testimonials: [{ name: "Dedi", text: "Mudah belajar Android." }],

    faq: [
      { q: "Tools?", a: "Android Studio." },
    ],
  },
  {
    slug: "flutter-mobile-app",
    title: "Flutter Mobile App",
    category: "Mobile Development",
    level: "Pemula",
    rating: 4.5,
    reviews: 132,
    duration: "10 Minggu",
    certificate: true,
    price: "Rp 180.000",

    heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3",

    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    ],

    description: "Buat app cross-platform dengan Flutter.",

    outcomes: ["Widget", "State", "Navigation"],

    learn: ["Dart", "Flutter Widgets", "Firebase"],

    syllabus: [
      { week: "Minggu 1", topics: ["Intro Flutter", "Dart"] },
      { week: "Minggu 2", topics: ["Widgets", "Layout"] },
    ],

    method: ["Video", "App Build"],

    testimonials: [{ name: "Eka", text: "Flutter powerful." }],

    faq: [
      { q: "Cross-platform?", a: "Ya." },
    ],
  },
  {
    slug: "react-native",
    title: "React Native",
    category: "Mobile Development",
    level: "Menengah",
    rating: 4.4,
    reviews: 98,
    duration: "12 Minggu",
    certificate: true,
    price: "Rp 200.000",

    heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3",

    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    ],

    description: "Develop mobile app dengan React Native.",

    outcomes: ["Component", "Navigation", "API"],

    learn: ["React Native Basics", "Expo", "AsyncStorage"],

    syllabus: [
      { week: "Minggu 1", topics: ["Intro RN", "Setup"] },
      { week: "Minggu 2", topics: ["Components", "Styling"] },
    ],

    method: ["Video", "Project"],

    testimonials: [{ name: "Fani", text: "RN mudah." }],

    faq: [
      { q: "JS knowledge?", a: "Dibutuhkan." },
    ],
  },
  {
    slug: "firebase-mobile-app",
    title: "Firebase untuk Mobile App",
    category: "Mobile Development",
    level: "Menengah",
    rating: 4.3,
    reviews: 76,
    duration: "6 Minggu",
    certificate: true,
    price: "Rp 100.000",

    heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",

    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    ],

    description: "Integrasi Firebase ke mobile app.",

    outcomes: ["Auth", "Database", "Storage"],

    learn: ["Firebase Auth", "Firestore", "Cloud Storage"],

    syllabus: [
      { week: "Minggu 1", topics: ["Intro Firebase", "Auth"] },
      { week: "Minggu 2", topics: ["Database", "Storage"] },
    ],

    method: ["Video", "Integration"],

    testimonials: [{ name: "Gina", text: "Firebase membantu." }],

    faq: [
      { q: "Backend?", a: "Ya." },
    ],
  },
  {
    slug: "ui-ux-design-fundamental",
    title: "UI/UX Design Fundamental",
    category: "UI/UX Design",
    level: "Pemula",
    rating: 4.8,
    reviews: 201,
    duration: "8 Minggu",
    certificate: true,
    price: "Rp 150.000",

    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5",

    gallery: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    ],

    description: "Dasar-dasar UI/UX design.",

    outcomes: ["Wireframe", "Prototype", "User Research"],

    learn: ["Design Principles", "Tools", "Usability"],

    syllabus: [
      { week: "Minggu 1", topics: ["Intro UI/UX", "Principles"] },
      { week: "Minggu 2", topics: ["Wireframing", "Prototyping"] },
    ],

    method: ["Video", "Design Project"],

    testimonials: [{ name: "Hana", text: "Design jadi seru." }],

    faq: [
      { q: "Tools?", a: "Figma, etc." },
    ],
  },
  {
    slug: "ui-ux-mobile-design",
    title: "UI/UX Mobile Design",
    category: "UI/UX Design",
    level: "Pemula",
    rating: 4.7,
    reviews: 167,
    duration: "6 Minggu",
    certificate: true,
    price: "Rp 150.000",

    heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3",

    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    ],

    description: "Design UI/UX untuk mobile.",

    outcomes: ["Mobile UI", "Interaction", "Testing"],

    learn: ["Mobile Guidelines", "Gestures", "A/B Testing"],

    syllabus: [
      { week: "Minggu 1", topics: ["Mobile Design", "Guidelines"] },
      { week: "Minggu 2", topics: ["Interactions", "Testing"] },
    ],

    method: ["Video", "Mockup"],

    testimonials: [{ name: "Ika", text: "Mobile design fun." }],

    faq: [
      { q: "iOS/Android?", a: "Keduanya." },
    ],
  },
  {
    slug: "figma-ui-design",
    title: "Figma untuk UI Design",
    category: "UI/UX Design",
    level: "Pemula",
    rating: 4.9,
    reviews: 289,
    duration: "4 Minggu",
    certificate: true,
    price: "Rp 120.000",

    heroImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",

    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    ],

    description: "Master Figma untuk UI design.",

    outcomes: ["Figma Tools", "Components", "Collaboration"],

    learn: ["Interface", "Prototyping", "Team Libraries"],

    syllabus: [
      { week: "Minggu 1", topics: ["Intro Figma", "Tools"] },
      { week: "Minggu 2", topics: ["Components", "Variants"] },
    ],

    method: ["Tutorial", "Project"],

    testimonials: [{ name: "Joko", text: "Figma powerful." }],

    faq: [
      { q: "Free?", a: "Ada free plan." },
    ],
  },
  {
    slug: "ux-research-wireframing",
    title: "UX Research & Wireframing",
    category: "UI/UX Design",
    level: "Menengah",
    rating: 4.5,
    reviews: 112,
    duration: "8 Minggu",
    certificate: true,
    price: "Rp 130.000",

    heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",

    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    ],

    description: "Pelajari UX research dan wireframing.",

    outcomes: ["User Research", "Wireframes", "Personas"],

    learn: ["Interviews", "Surveys", "Wireframing Tools"],

    syllabus: [
      { week: "Minggu 1", topics: ["UX Research", "Methods"] },
      { week: "Minggu 2", topics: ["Wireframing", "Tools"] },
    ],

    method: ["Video", "Case Study"],

    testimonials: [{ name: "Kiki", text: "Research penting." }],

    faq: [
      { q: "Tools?", a: "Miro, etc." },
    ],
  },
  {
    slug: "web-development-dasar",
    title: "Web Development Dasar",
    category: "Web Development",
    level: "Pemula",
    rating: 4.6,
    reviews: 198,
    duration: "10 Minggu",
    certificate: true,
    price: "Rp 120.000",

    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    ],

    description: "Dasar web development.",

    outcomes: ["HTML", "CSS", "JS Basics"],

    learn: ["HTML5", "CSS3", "JavaScript Intro"],

    syllabus: [
      { week: "Minggu 1", topics: ["HTML", "CSS"] },
      { week: "Minggu 2", topics: ["JS", "DOM"] },
    ],

    method: ["Video", "Website Build"],

    testimonials: [{ name: "Lala", text: "Web dev basics." }],

    faq: [
      { q: "No experience?", a: "OK." },
    ],
  },
];

export default courses;
