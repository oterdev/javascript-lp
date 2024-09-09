"use client";

import { Button } from "@/components/ui/button";
import Meteors from "@/components/magicui/meteors";

import * as fbq from "@/lib/fpixel";

export default function FinalCTA() {
  return (
    <div className="relative overflow-hidden">
      <Meteors number={15} />
      <section className="bg-[#343434] py-16">
        <div className="container max-w-screen-lg px-4 text-center">
          <div className="mx-auto md:w-3/4">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Siap jadi jago JavaScript?
            </h2>
            <p className="mb-6 text-white">
              Jangan lewatin kesempatan buat upgrade skill! Dengan ebook ini,
              kamu bakal jadi jago JavaScript. Yuk, mulai perjalanan kamu jadi
              programmer pro sekarang juga!
            </p>
            <Button
              className="bg-yellow-300 text-[#343434] hover:bg-yellow-400"
              id="beli-sekarang"
              data-umami-event="Beli sekarang"
              onClick={() => {
                // meta pixel
                fbq.event("InitiateCheckout", {
                  currency: "IDR",
                  value: 79000,
                });

                // open link
                location.href = "https://dub.sh/buy-js-ebook";
              }}
            >
              Beli Sekarang
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
