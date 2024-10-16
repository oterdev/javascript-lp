import { Inter } from "next/font/google";
import SchemaOrg from "@/components/ebook/SchemaOrg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jadi Jago JavaScript | Ebook Panduan Lengkap untuk Pemula",
  description:
    "Belajar JavaScript dari dasar hingga mahir dengan ebook ini. Cocok untuk pemula yang ingin memulai karir di dunia web development.",
  keywords: [
    "JavaScript",
    "ebook",
    "pemrograman",
    "web development",
    "belajar coding",
    "front-end",
  ],
  authors: [{ name: "Ahmad Sarian" }],
  creator: "Ahmad Sarian",
  publisher: "Jagojs",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.jagojs.my.id/",
  },
  openGraph: {
    title: "Jadi Jago JavaScript | Ebook Panduan Lengkap untuk Pemula",
    description:
      "Belajar JavaScript dari dasar hingga mahir dengan ebook ini. Cocok untuk pemula yang ingin memulai karir di dunia web development.",
    url: "https://www.jagojs.my.id/",
    siteName: "Jagojs",
    images: [
      {
        url: "https://www.jagojs.my.id/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Banner Ebook Jadi Jago JavaScript",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jadi Jago JavaScript | Ebook Panduan Lengkap untuk Pemula",
    description:
      "Belajar JavaScript dari dasar hingga mahir dengan ebook ini. Cocok untuk pemula yang ingin memulai karir di dunia web development.",
    images: ["https://www.jagojs.my.id/open-graph.png"],
    creator: "@sakirsyarian",
  },
  other: {
    "og:price:amount": "63000",
    "og:price:currency": "IDR",
    "pinterest-rich-pin": "product",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <SchemaOrg />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
