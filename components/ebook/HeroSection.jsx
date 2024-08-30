"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Particles from "@/components/magicui/particles";

export default function HeroSection() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <>
      <div className="relative overflow-hidden">
        <section className="bg-gradient-to-b from-yellow-300 to-yellow-400 py-10">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <div className="md:w-1/2 mb-0 relative z-10">
              <p className="text-sm text-[#575757] mb-2">---J3---</p>
              <h1 className="text-4xl font-bold text-[#343434] mb-4">
                Jadi Jago JavaScript!
              </h1>
              <p className="text-xl text-[#343434] mb-6">
                Belajar JavaScript dari awal sampe jago, dijamin gak bikin
                pusing! Cocok buat kamu yang pengen jadi programmer pro.
              </p>
            </div>
            <div className="md:w-1/2 relative z-10">
              <Image
                src="/ebook.png?v=1"
                alt="JavaScript eBook Cover"
                width={300}
                height={300}
                priority
                className="mx-auto rounded-lg z-10"
              />
            </div>
          </div>
        </section>

        <Particles
          className="absolute inset-0"
          quantity={200}
          ease={80}
          color={color}
          refresh
        />
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
        )}
      />
    </>
  );
}
