import Link from "next/link";
import Meteors from "@/components/magicui/meteors";

export default function FinalCTA() {
  return (
    <div className="relative overflow-hidden">
      <Meteors number={15} />
      <section className="py-16 bg-[#343434]">
        <div className="container mx-auto px-4 text-center md:w-1/2">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Siap Jadi Jago JavaScript?
          </h2>
          <p className="text-lg text-white mb-6">
            Jangan lewatin kesempatan buat upgrade skill! Dengan ebook ini, kamu
            bakal jadi jago JavaScript. Yuk, mulai perjalanan kamu jadi
            programmer pro sekarang juga!
          </p>
          <Link
            href="https://dub.sh/buy-js-ebook"
            className="bg-yellow-300 text-[#343434] hover:bg-yellow-400 font-medium text-lg px-8 py-3 rounded-md"
          >
            Beli Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
