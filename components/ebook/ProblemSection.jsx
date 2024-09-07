import TableOfContents from "./TableOfContents";

export default function ProblemSection() {
  return (
    <section className="bg-gradient-to-b from-[#343434] to-white px-3 py-16 md:px-0">
      <div className="container mx-auto max-w-screen-lg border-t-8 border-yellow-300 bg-white px-6 py-8 md:px-20 md:py-16">
        <h2 className="mb-6 text-2xl font-semibold text-[#343434]">
          Apa kamu ngerasa...
        </h2>
        <div className="space-y-4 text-[#343434]">
          <p>Sering bingung sama coding?</p>
          <p>Stuck belajar JavaScript?</p>
          <p>
            Kamu gak sendirian, banyak banget yang ngalamin hal sama. Dari
            tutorial yang rumit, istilah yang bikin kepala pening, sampai
            bingung mau mulai dari mana...
          </p>
          <p>
            Rasanya kayak nyemplung ke lautan coding, tapi gak tau cara
            berenang. Buka tutorial, malah makin bingung.
          </p>
          <p>Udah ngabisin waktu berjam-jam, tapi kok tetep gak paham?</p>
          <p>Frustasi, kan?</p>
          <p>Bahkan mulai ragu, emang bisa ya gue jadi jago coding?</p>
          <p>Nah, di sinilah ebook ini bisa bantu kamu!</p>
          <p>
            Kita ngerti, coding gak harus bikin pusing. Lewat ebook ini, kamu
            bakal belajar JavaScript dari nol dengan cara yang gampang dipahami.
          </p>
          <p>
            Step-by-step, tanpa istilah ribet, dan langsung ke intinya. Dijamin,
            belajar jadi lebih seru dan gak bikin stress!
          </p>
        </div>
        <TableOfContents />
      </div>
    </section>
  );
}
