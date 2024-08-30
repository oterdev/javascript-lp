import Marquee from "@/components/magicui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import ShineBorder from "@/components/magicui/shine-border";

const ReviewCard = ({ name, role, content }) => {
  return (
    <Card className="max-w-80">
      <ShineBorder
        className="w-full h-full"
        color={["#fef3c7", "#fcd34d", "#f59e0b"]}
      >
        <CardContent className="p-6">
          <p className="text-[#343434] mb-4">&quot;{content}&quot;</p>
          <div className="font-semibold text-[#343434]">{name}</div>
          <div className="text-sm text-[#6d6d6d]/60">{role}</div>
        </CardContent>
      </ShineBorder>
    </Card>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rizky",
      role: "Web Developer Junior",
      content:
        "Gw udah coba banyak sumber buat belajar JavaScript, tapi ebook ini beda banget! Penyampaiannya santai, contoh-contohnya relevan, dan yang paling penting, gw jadi paham konsep yang sebelumnya bikin pusing. Highly recommended!",
    },
    {
      name: "Dinda",
      role: "Mahasiswi Teknik Informatika",
      content:
        "Aku selalu merasa belajar programming itu susah dan kaku, tapi ebook ini ngerubah cara pandangan aku. Bahasanya yang ringan dan contohnya itu relevan banget sama kehidupan sehari-hari kita jadi bikin belajarnya lebih seru dan nggak ngebosenin.",
    },
    {
      name: "Siti",
      role: "Freelancer Web Developer",
      content:
        "Aku tadinya ragu buat beli ebook ini, tapi setelah ngebaca sampel, aku langsung yakin. Setelah aku selesai baca, rasanya uang yang aku keluarin worth it banget. Penjelasannya nggak cuma bikin paham, tapi juga memotivasi buat terus belajar dan explore lebih dalam.",
    },
    {
      name: "Bayu",
      role: "Full-Stack Developer",
      content:
        "Gua udah punya pengalaman ngoding beberapa tahun, tapi ebook ini tetep ngasih insight baru yang sebelumnya gua lewatkan. Nggak peduli masih pemula atau udah pro, ebook ini pasti ada manfaatnya buat kalian!",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-center font-semibold text-[#343434] mb-10">
          Apa Kata Mereka?
        </h2>
        <Marquee pauseOnHover className="[--duration:60s]">
          <div className="flex flex-row gap-6">
            {testimonials.map((testimonial, index) => (
              <ReviewCard key={index} {...testimonial} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
