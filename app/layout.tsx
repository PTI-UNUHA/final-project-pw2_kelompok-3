import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "EduCourse UNUHA",
  description: "Landing Page EduCourse UNUHA",
};

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="id">
      <head />
      <body>{children}</body>
    </html>
  );
}
