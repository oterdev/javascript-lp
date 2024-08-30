import { Check } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function FeaturesList() {
  const duration = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
  const delay = Math.floor(Math.random() * (13 - 6 + 1)) + 6;

  const features = [
    "Materi yang terus diupdate secara gratis via notion",
    "Latihan coding seru dan menantang untuk nguji skill kamu",
    "Bikin proyek keren buat nambahin portfolio kamu",
    "Akses ke grup belajar eksklusif di mana kamu bisa bertanya dan berdiskusi",
    "1x Free konsultasi via zoom",
    "Study plan agar jadwal belajar kamu bisa konsisten dan disiplin",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[#343434] mb-10">
          Apa yang Bakal Kamu Dapetin?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl hover:shadow-yellow-200/50"
            >
              <CardContent className="p-4 flex items-center gap-2">
                <Check className="h-5 w-5 hidden md:block text-yellow-500 flex-shrink-0" />
                <p>{feature}</p>
              </CardContent>
              <BorderBeam
                size={250}
                duration={duration + (index + 1) * 1.2}
                delay={delay + (index + 2) * 2.5}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
