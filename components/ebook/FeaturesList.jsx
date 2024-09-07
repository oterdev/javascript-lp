import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

export default function FeaturesList() {
  const duration = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
  const delay = Math.floor(Math.random() * (13 - 6 + 1)) + 6;

  const features = [
    {
      title: "Update gratis terus-menerus!",
      description:
        "Gak ada istilah ketinggalan jaman karena materinya selalu baru",
      image: "/notion.png",
    },
    {
      title: "Latihan coding yang real!",
      description: "Supaya skill kamu makin tajam, biar gak cuma teori doang",
      image: "/challenge.png",
    },
    {
      title: "Proyek seru!",
      description:
        "Tunjukin hasilnya di portofolio kamu buat dapet kerjaan impian",
      image: "/case-study.png",
    },
    {
      title: "Konsistensi belajar!",
      description:
        "Ada jadwal biar kamu tetep on track. Goodbye, malas-malasan!",
      image: "/study-plan.png",
    },
    {
      title: "Grup belajar seru!",
      description:
        "Gak perlu belajar sendirian, sini kumpul sesama pejuang coding",
      image: "/group.png",
    },
    {
      title: "Free Zoom meet!",
      description: "Bisa konsultasi langsung sekali buat yang masih bingung",
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
                <div className="space-y-2">
                  <p className="text-lg font-medium">{feature.title}</p>
                  <p>{feature.description}</p>
                </div>
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
