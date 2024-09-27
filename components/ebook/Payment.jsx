import Image from "next/image";

export default function Payment() {
  const images = [
    "alfamart.png",
    "indomaret.png",
    "bni.png",
    "bri.png",
    "mandiri.png",
    "dana.png",
    "linkaja.png",
    "shopeepay.png",
    "qris.png",
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {images.map((chapter, index) => (
            <div key={index} className="rounded-lg px-2 py-1 shadow">
              <Image
                src={`/payment/${chapter}?v=5`}
                alt="Payment"
                width={60}
                height={60}
                className="h-auto w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
