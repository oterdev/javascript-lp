import Link from "next/link";
import Image from "next/image";

export default function AuthorInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="md:w-2/3 md:pl-8">
            <h2 className="mb-10 text-2xl font-semibold text-[#343434]">
              Siapa penulisnya?
            </h2>
            <div className="space-y-4">
              <p>Halo! Saya Sarian! 👋</p>
              <p>
                Saya full-stack developer yang udah punya pengalaman di dunia
                web development lebih dari 4 tahun. Mulai dari ngerjain website
                buat UMKM, bantu project skala perusahaan, semuanya udah pernah
                saya garap.
              </p>
              <p>
                Tapi di balik itu, saya tau banget rasanya jadi pemula yang
                bingung harus mulai dari mana. Waktu saya pertama kali belajar
                JavaScript, pusingnya bukan main. Sumber belajar bertebaran,
                tapi malah bikin makin bingung.
              </p>
              <p>
                Saya pun harus trial and error sendiri sampai akhirnya nemuin
                metode yang efektif. Nah, pengalaman ini yang pengen saya share
                lewat ebook, biar kamu gak perlu ngalamin susah dan pusing kayak
                saya dulu.
              </p>
              <p>
                Lewat ebook ini, saya nggak cuma nyediain materi dasar
                JavaScript, tapi juga tantangan biar kamu bisa ngasah skill dan
                langsung praktek bikin proyek nyata.
              </p>
              <p>
                Jadi semuanya udah saya rangkum biar kamu belajar lebih mudah,
                efisien, dan gak buang waktu. Kalo ada yang mau ditanyain,
                jangan sungkan buat reach out ke saya di
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
          </div>
          <div className="md:w-1/3">
            <Image
              src="/sakirsyarian.png?v=1"
              alt="Author"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
