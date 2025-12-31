import "./globals.css";

export const metadata = {
  title: "EduCourse UNUHA",
  description: "Landing Page EduCourse UNUHA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head />
      <body>{children}</body>
    </html>
  );
}
