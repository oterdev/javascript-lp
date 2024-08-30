"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import DotPattern from "@/components/magicui/dot-pattern";
import { MagicCard } from "@/components/magicui/magic-card";

import { cn } from "@/lib/utils";

export default function DiscountSection() {
  const { theme } = useTheme();
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
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

    // wait 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3 * 1000));

    // open link
    location.href = "https://dub.sh/buy-js-ebook";
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <MagicCard
          className="flex-col items-center justify-center bg-yellow-100"
          gradientColor={theme === "dark" ? "#262626" : "#fef08a"}
        >
          <section className="py-16 ">
            <div className="container mx-auto px-4 text-center text-[#343434]">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Penawaran Special! 🎉
              </h2>
              <div className="flex justify-center mb-8">
                <Image
                  src="/promo.png?v=2"
                  alt="Ebook Cover"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </div>
              <div className="mb-8">
                <p className="text-xl">
                  <span className="line-through text-gray-500/50 mr-2">
                    Rp 199.000
                  </span>
                  <span className="font-semibold text-2xl text-red-600">
                    Rp 79.000
                  </span>
                </p>
                <p className="text-lg text-gray-600">
                  Hemat 60% untuk waktu yang terbatas!
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl text-gray-600/80 mb-4">
                  Cepat! Penawaran berakhir:
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
              <Button
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-lg"
                onClick={handleClick}
              >
                Beli Sekarang dan Hemat 40%
              </Button>
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
            "[mask-image:linear-gradient(to_top_left,black,transparent,transparent)]"
          )}
        />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_top_right,black,transparent,transparent)]"
          )}
        />
      </div>
    </>
  );
}
