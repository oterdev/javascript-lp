import { BookOpen } from "lucide-react";

export default function TableOfContents() {
  const chapters = [
    "Mulai dari dasar JavaScript yang simpel",
    "Main-main dengan array dan objek",
    "Gampangin DOM  kayak main game",
    "Nge-debug biar kode kamu gak ngambek",
    "Asynchronous biar coding jadi lancar",
    "Masih banyak lagi kejutan seru lainnya",
  ];

  return (
    <section className="py-10">
      <h2 className="mb-6 text-xl font-semibold">
        Kira-kira hal seru apa yang bisa kamu pelajari ya?
      </h2>
      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <div key={index}>
            <span className="text-[#343434]">{chapter}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
