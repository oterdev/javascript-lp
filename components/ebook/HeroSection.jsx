"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Star, StarHalf } from "lucide-react";

import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";

export default function HeroSection() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    setColor(theme === "dark" ? "#fff" : "#fff");
  }, [theme]);

  return (
    <>
      <div className="relative overflow-hidden">
        <section className="bg-gradient-to-b from-[#343434] to-[#343434] py-10">
          <div className="container mx-auto flex max-w-screen-lg flex-col items-center gap-14 px-4 md:flex-row md:gap-0">
            <div className="relative z-10 md:w-1/2">
              <Image
                src="/ebook.png?v=1"
                alt="JavaScript eBook Cover"
                width={300}
                height={300}
                priority
                className="mx-auto rounded-lg"
              />
            </div>
            <div className="relative mb-0 md:z-10 md:w-1/2">
              <h1 className="mb-4 text-3xl font-bold leading-[2.8rem] text-white md:text-4xl md:leading-[3rem]">
                Mau Jago JavaScript? Yuk, Mulai dari Sini!
              </h1>
              <p className="mb-6 text-lg text-white">
                Belajar dari nol sampai paham total, tanpa drama coding yang
                bikin pusing kepala. Cocok banget buat kamu yang mau jadi jago
                JavaScript!
              </p>
              <Button
                size="lg"
                className="bg-yellow-300 text-[#343434] hover:bg-yellow-400"
                onClick={() => {
                  location.href = "#discount";
                }}
              >
                Ambil Diskonnya
              </Button>
              <div className="mt-2 flex items-center">
                <Star fill="#fcd53f" className="h-6 w-6" />
                <Star fill="#fcd53f" className="h-6 w-6" />
                <Star fill="#fcd53f" className="h-6 w-6" />
                <Star fill="#fcd53f" className="h-6 w-6" />
                <StarHalf fill="#fcd53f" className="h-6 w-6" />
                <p className="ml-2 text-sm text-gray-300">4.75</p>
              </div>
              <p className="mt-2 text-gray-300">60 reviews</p>
            </div>
          </div>
        </section>

        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={80}
          color={color}
          refresh
        />
      </div>
    </>
  );
}
