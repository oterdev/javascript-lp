import Image from "next/image";
import Link from "next/link";

export default function Message() {
  return (
    <section className="fixed bottom-5 right-5 z-10 cursor-pointer md:bottom-10 md:right-10">
      <Link href="https://wa.link/lwhmyg">
        <Image src="/whatsapp.svg" alt="Message" width={60} height={60} />
      </Link>
    </section>
  );
}
