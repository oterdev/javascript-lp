import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQList() {
  const faqs = [
    {
      question: "Wajib punya basic ngoding dulu gak sih?",
      answer:
        "Nggak perlu!, Ebook ini bakal ngajarin kamu dari dasar. Tapi kalau kamu udah pernah main-main sama HTML atau CSS, bakal lebih gampang buat ngikutin materinya.",
    },
    {
      question: "Ebooknya ada format apa aja sih?",
      answer:
        "Ebook ini fleksibel banget! Kamu bisa pilih mau baca di PDF atau Notion. Jadi, bisa kamu sesuaikan sama gadget kesayanganmu.",
    },
    {
      question: "Kalau udah beli, ada grup belajarnya gak?",
      answer:
        "Ada dong! Kamu bakal masuk ke komunitas eksklusif. Di sana, kamu bisa curhat, nanya-nanya, atau sekadar ngobrol bareng teman-teman yang lagi belajar JavaScript juga.",
    },
    {
      question: "Ebooknya bakal update terus gak nih?",
      answer:
        "Pasti dong! JavaScript kan terus berkembang. Jadi, kamu nggak perlu khawatir ketinggalan zaman. Setiap ada update terbaru, kamu bakal langsung dapet versi terbarunya (khusus pengguna Notion). Mantap kan?",
    },
    {
      question: "Dapet source code gak ya?",
      answer:
        "Tentu! Biar kamu bisa langsung praktek dan lihat cara kerjanya. Dijamin bikin kamu makin paham.",
    },
    {
      question: "Ada bonus-bonus menarik gak nih?",
      answer:
        "Banyak banget! Selain ebook, kamu juga bakal dapet cheat sheet JavaScript. Terus, ada juga study plan yang bakal bantu kamu belajar secara konsisten dan disiplin.",
    },
  ];

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion type="single" collapsible className="w-full" key={index}>
          <AccordionItem value={index + 1}>
            <AccordionTrigger> {faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}

export default function FrequentQuestions() {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h2 className="mb-10 text-2xl font-semibold text-[#343434]">
            Pertanyaan yang sering ditanyain
          </h2>
          <div className="mx-auto">
            <FAQList />
          </div>
        </div>
      </section>
    </>
  );
}
