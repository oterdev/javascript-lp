import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bingung Mulai dari Mana Belajar JavaScript? Ini Solusinya",
  description:
    "Ebook ini dirancang khusus untuk pemula yang ingin memulai petualangan di dunia pemrograman. Materinya jelas, mudah dipahami, dan dilengkapi contoh yang relevan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
