"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FileDown, ChevronLeft, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function DownloadSamplePage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    // Simulasi proses download
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);

      window.location.href = "https://dub.sh/free-sample";
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center p-4 text-[#343434] lg:min-h-screen">
      <Card className="w-full max-w-lg">
        <CardContent className="p-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FileDown className="mx-auto mb-6 h-20 w-20 text-yellow-500" />
            <h1 className="mb-6 text-center text-3xl font-bold">
              Sample Ebook
            </h1>
            <p className="mb-8 text-center text-lg text-gray-500">
              Makasih udah tertarik sama ebook Jagojs. Sekarang, kamu bisa
              download sample ebook ini:
            </p>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              className={`w-full py-3 text-lg ${
                isDownloaded
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
              onClick={handleDownload}
              disabled={isDownloading || isDownloaded}
            >
              {isDownloading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Downloading...
                </span>
              ) : isDownloaded ? (
                <span className="flex items-center justify-center">
                  <Check className="mr-2" /> Downloaded
                </span>
              ) : (
                "Download Sample "
              )}
            </Button>
            <div className="rounded-lg bg-yellow-100 p-4">
              <p className="text-gray-500">
                Selain itu kamu juga bisa bisa cek inbox atau folder spam ya.
                Kalo dalam 15 menit belom dapet, langsung kontak saya aja di{" "}
                <Link
                  href="mailto:sariandeveloper@gmail.com"
                  className="text-yellow-600 hover:underline"
                >
                  sariandeveloper@gmail.com
                </Link>
              </p>
            </div>
            <p className="text-center text-gray-500">
              Suka sama isi sample ebook ini? Yuk, beli versi lengkapnya
              sekarang juga!
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/">
                <Button className="bg-[#343434] text-white hover:bg-[#202020]">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Kembali
                </Button>
              </Link>
              <Link href="https://dub.sh/buy-js-ebook">
                <Button className="bg-yellow-500 text-white hover:bg-yellow-600">
                  Beli Sekarang
                </Button>
              </Link>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
