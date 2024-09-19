import { MapPin, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg">
              Punya pertanyaan atau mau tau lebih lanjut tentang ebook ini?
              Jangan ragu buat kontak kita ya!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-yellow-500" />
                <span>+62 858-9380-7017</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-yellow-500" />
                <span>Jl. Jawa 3 No. 19, Pamulang</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-yellow-500" />
                <span>sariandeveloper@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <form
              action="https://formspree.io/f/mwpedppj"
              method="POST"
              className="space-y-4"
            >
              <Input name="name" type="text" placeholder="Nama" />
              <Input name="email" type="email" placeholder="Email" />
              <Textarea name="message" placeholder="Pesan" />
              <Button
                id="contact"
                data-umami-event="Contact"
                className="bg-[#343434] text-white hover:bg-[#202020]"
              >
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
