"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Message() {
  return (
    <section className="fixed bottom-5 right-5 z-10 cursor-pointer md:bottom-10 md:right-10">
      <Button
        variant="link"
        onClick={() => {
          // meta pixel
          window.fbq("track", "Contact");

          // open link
          location.href = "https://wa.link/lwhmyg";
        }}
        id="whatsapp"
        data-umami-event="Whatsapp"
      >
        <Image src="/whatsapp.svg" alt="Message" width={60} height={60} />
      </Button>
    </section>
  );
}
