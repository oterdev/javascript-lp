import TableOfContents from "./TableOfContents";

export default function ProblemSection() {
  return (
    <section className="bg-gradient-to-b from-[#343434] to-white px-3 py-16 md:px-0">
      <div className="container mx-auto max-w-screen-lg border-t-8 border-yellow-300 bg-white px-6 py-8 md:px-20 md:py-16">
        <h2 className="mb-10 text-2xl font-semibold text-[#343434]">
          Capek belajar coding yang bikin pusing?
        </h2>
        <p className="mb-4 text-[#343434]">
          Bro, kamu tau gak sih? Banyak programmer pemula yang sering bingung
          pas belajar JavaScript. Mereka sering ngerasa:
        </p>
        <ul className="my-4 space-y-2 text-[#343434]">
          <li className="flex items-center">
            &quot;Gua gak tau harus mulai dari mana!&quot;
          </li>
          <li className="flex items-center">
            &quot;Duh, kok susah banget ya ngerti konsepnya?&quot;
          </li>
          <li className="flex items-center">
            &quot;Tutorial yang ada terlalu rumit dan bikin bingung!&quot;
          </li>
          <li className="flex items-center">
            &quot;Gue udah belajar, tapi kok masih gak bisa bikin aplikasi
            ya?&quot;
          </li>
          <li className="flex items-center">
            &quot;Banyak banget sih framework JavaScript, mana yang harus gue
            pelajari dulu?&quot;
          </li>
        </ul>
        <p className="text-[#343434]">
          Tenang, bro! Ebook ini bakal jadi solusi buat kamu. Saya udah rangkum
          semua yang kamu perlu tau tentang JavaScript, dari konsep dasar sampe
          teknik advanced yang bakal bikin skill coding kamu naik level!
        </p>
        <TableOfContents />
      </div>
    </section>
  );
}
