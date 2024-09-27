"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { useTheme } from "next-themes";

import DotPattern from "@/components/magicui/dot-pattern";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

export default function DiscountSection() {
  const { theme } = useTheme();
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }
        let newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else if (newTime.minutes > 0) {
          newTime.minutes--;
          newTime.seconds = 59;
        } else if (newTime.hours > 0) {
          newTime.hours--;
          newTime.minutes = 59;
          newTime.seconds = 59;
        } else if (newTime.days > 0) {
          newTime.days--;
          newTime.hours = 23;
          newTime.minutes = 59;
          newTime.seconds = 59;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = async () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // meta pixel
    window.fbq("track", "InitiateCheckout", {
      currency: "IDR",
      value: 79000,
    });

    // wait 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3 * 1000));

    // open link
    location.href = "https://dub.sh/buy-js-ebook";
  };

  return (
    <>
      <div className="relative overflow-hidden" id="discount">
        <MagicCard
          className="flex-col items-center justify-center border-0 bg-white"
          gradientColor={theme === "dark" ? "#262626" : "#fef08a"}
        >
          <section className="py-16">
            <div className="container mx-auto max-w-screen-lg px-4 text-center text-[#343434]">
              <h2 className="mb-8 text-3xl font-semibold text-gray-800">
                Dapetin harga spesial 🎉
              </h2>
              <div className="mb-6 flex justify-center">
                <Image
                  src="/promo.png?v=2"
                  alt="Ebook Cover"
                  width={250}
                  height={250}
                />
              </div>
              <div className="mb-6">
                <p className="text-xl">
                  <span className="mr-2 text-gray-500/50 line-through">
                    Rp 199.000
                  </span>
                  <span className="text-2xl font-semibold text-red-600">
                    Rp 75.000
                  </span>
                </p>
                <p className="text-lg text-gray-600">
                  Hemat 62% untuk waktu yang terbatas!
                </p>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-lg text-gray-600/80">
                  Cepetan! diskonnya bentar lagi abis:
                </h3>
                <div className="flex justify-center gap-4">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="text-3xl font-semibold">{value}</div>
                      <div className="text-sm text-gray-500/70">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="relative inline-flex">
                      <div
                        className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md bg-yellow-300 px-8 text-sm font-semibold text-[#343434] hover:bg-yellow-400"
                        onClick={handleClick}
                        id="beli-rupiah"
                        data-umami-event="Beli rupiah"
                        size="lg"
                      >
                        Beli Rp 75.000
                      </div>
                      <div className="absolute right-0 top-0 -mr-1 -mt-1 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#343434] opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#343434]"></span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ada effect firework saat di pencet tombolnya</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </section>
        </MagicCard>

        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,black,transparent)]",
          )}
        />
      </div>
    </>
  );
}
