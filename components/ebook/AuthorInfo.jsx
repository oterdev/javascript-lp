import Link from "next/link";
import Image from "next/image";

export default function AuthorInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-semibold text-[#343434] mb-10">
              Siapa Sih Penulisnya?
            </h2>
            <p className="text-[#343434] mb-4">
              👋 Halo! Saya Sarian, seorang full-stack developer dengan
              pengalaman kurang lebih 4 tahun di dunia web development. Saya
              udah ngebantu puluhan perusahaan dan UMKM buat bikin web untuk
              menyelesaikan masalah yang mereka punya. Alhamdulilah sejauh ini
              feedbacknya selalu positif!
            </p>
            <p className="text-[#343434] mb-4">
              Saya bikin ebook ini karena tau gimana sulitnya belajar JavaScript
              dari awal. Saya pengen berbagi pengalaman dan pengetahuan biar
              kamu semua bisa jadi programmer pro tanpa harus pusing-pusing
              mencari resource yang bagus kayak saya dulu!
            </p>
            <p className="text-[#343434]">
              Kalo temen-temen mau nyapa saya bisa di
              <Link
                href="https://www.instagram.com/sakirsyarian"
                className="font-semibold hover:text-[#fd8547]"
              >
                {" "}
                <span className="border-b-2 border-dashed border-[#bffd47]">
                  Instagram
                </span>
              </Link>
              ,
              <Link
                href="https://www.threads.net/@sakirsyarian"
                className="font-semibold hover:text-[#fd8547]"
              >
                {" "}
                <span className="border-b-2 border-dashed border-[#bffd47]">
                  Threads
                </span>
              </Link>{" "}
              atau
              <Link
                href="https://t.me/sakirsyarian"
                className="font-semibold hover:text-[#fd8547]"
              >
                {" "}
                <span className="border-b-2 border-dashed border-[#bffd47]">
                  Telegram
                </span>
              </Link>
              .
            </p>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/sakirsyarian.png?v=1"
              alt="Author"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
