import { ChevronRight } from "lucide-react";

export default function TableOfContents() {
  const chapters = [
    "Pengenalan JavaScript",
    "Dasar-Dasar JavaScript",
    "Function",
    "Objek dan Array",
    "DOM Manipulation",
    "Asynchronous JavaScript",
    "ES6 dan Fitur Modern JavaScript",
    "Error Handling dan Debugging",
    "Advanced Topics",
    "Frameworks dan Libraries",
    "Proyek Akhir",
    "Sumber Belajar Tambahan",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-center font-semibold text-[#343434] mb-10">
          Apa Aja Sih Isi Ebooknya?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="h-5 w-5 text-yellow-500" />
              <span className="text-[#343434]">{chapter}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
