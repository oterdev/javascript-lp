import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

export default function FeaturesList() {
  const duration = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
  const delay = Math.floor(Math.random() * (13 - 6 + 1)) + 6;

  const features = [
    {
      title: "Materi yang terus diupdate secara gratis via notion",
      image: "/notion.png",
    },
    {
      title: "Latihan coding seru dan menantang untuk nguji skill kamu",
      image: "/challenge.png",
    },
    {
      title: "Bikin proyek keren buat nambahin portfolio kamu",
      image: "/case-study.png",
    },
    {
      title: "Akses ke grup belajar eksklusif",
      image: "/group.png",
    },
    {
      title: "1x Free konsultasi via zoom",
      image: "/zoom.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-screen-lg px-4">
        <h2 className="mb-10 text-center text-2xl font-semibold text-[#343434]">
          Apa yang bakal kamu dapetin?
        </h2>
        <div className="grid items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl hover:shadow-yellow-200/50"
            >
              <CardContent className="space-y-6 p-6">
                <Image
                  src={feature.image}
                  alt="Feature"
                  width={1080}
                  height={1080}
                />
                <p>{feature.title}</p>
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
