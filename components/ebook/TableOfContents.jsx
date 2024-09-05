import { BookOpen } from "lucide-react";

export default function TableOfContents() {
  const chapters = [
    "Pengenalan JavaScript",
    "Dasar-Dasar JavaScript",
    "Function",
    "Objek dan Array",
    "DOM Manipulation",
    "Asynchronous JavaScript",
    "Fitur Modern JavaScript",
    "Error Handling dan Debugging",
    "Advanced Topics",
    "Frameworks dan Libraries",
    "Proyek Akhir",
    "Sumber Belajar Tambahan",
  ];

  return (
    <section className="py-10">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
        <BookOpen />
        Daftar Isi
      </h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-[#343434]">{chapter}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
