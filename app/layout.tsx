import { ReactNode } from "react";
import type { Viewport } from "next";
import "./globals.css";

export const metadata = {
  title: "EduCourse UNUHA",
  description: "Landing Page EduCourse UNUHA",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

interface Props {
  children?: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
