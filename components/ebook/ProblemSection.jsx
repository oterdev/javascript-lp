import { MessageSquareQuote } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[#343434] mb-10">
          Capek Belajar Coding yang Bikin Pusing?
        </h2>
        <p className="text-[#343434] mb-4">
          Bro, kamu tau gak sih? Banyak programmer pemula yang sering bingung
          pas belajar JavaScript. Mereka sering ngerasa:
        </p>
        <ul className="my-4 space-y-2 text-[#343434]">
          <li className="flex items-center">
            <MessageSquareQuote className="mr-2 h-5 w-5 hidden md:block text-yellow-500" />
            &quot;Gua gak tau harus mulai dari mana!&quot;
          </li>
          <li className="flex items-center">
            <MessageSquareQuote className="mr-2 h-5 w-5 hidden md:block text-yellow-500" />
            &quot;Duh, kok susah banget ya ngerti konsepnya?&quot;
          </li>
          <li className="flex items-center">
            <MessageSquareQuote className="mr-2 h-5 w-5 hidden md:block text-yellow-500" />
            &quot;Tutorial yang ada terlalu rumit dan bikin bingung!&quot;
          </li>
          <li className="flex items-center">
            <MessageSquareQuote className="mr-2 h-5 w-5 hidden md:block text-yellow-500" />
            &quot;Gue udah belajar, tapi kok masih gak bisa bikin aplikasi
            ya?&quot;
          </li>
          <li className="flex items-center">
            <MessageSquareQuote className="mr-2 h-5 w-5 hidden md:block text-yellow-500" />
            &quot;Banyak banget sih framework JavaScript, mana yang harus gue
            pelajari dulu?&quot;
          </li>
        </ul>
        <p className="text-[#343434]">
          Tenang, bro! Ebook ini bakal jadi solusi buat kamu. Gue udah rangkum
          semua yang kamu perlu tau tentang JavaScript, dari konsep dasar sampe
          teknik advanced yang bakal bikin skill coding kamu naik level!
        </p>
      </div>
    </section>
  );
}
