import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Panduan Lengkap Belajar JavaScript untuk Pemula - Jagojs",
  description:
    "Mau jago JavaScript? Ebook ini jawabannya! Pelajari semua yang perlu kamu tahu dari dasar hingga advanced. Dapatkan sampel gratis dan diskon 60% sekarang juga!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
