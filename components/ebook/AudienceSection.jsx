import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function AudienceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[#343434] mb-10">
          Siapa Sih yang Cocok Baca Ini?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="relative overflow-hidden hover:shadow-xl hover:shadow-yellow-200/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-[#343434] mb-4">
                Pemula tanpa latar belakang IT
              </h3>
              <p className="text-[#343434]">
                Buat kamu yang baru mulai coding dan pengen belajar JavaScript
                dari awal. Tenang, kita mulai belajar dari yang paling dasar
                kok!
              </p>
            </CardContent>
            <BorderBeam
              size={250}
              duration={10}
              delay={8}
              color={["#fff", "#fff", "#fff"]}
            />
          </Card>
          <Card className="relative overflow-hidden hover:shadow-xl hover:shadow-yellow-200/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-[#343434] mb-4">
                Mahasiswa IT
              </h3>
              <p className="text-[#343434]">
                Mau ningkatin skill buat tugas kuliah atau skripsi? Ebook ini
                bakal bantu kamu jadi jago JavaScript!
              </p>
            </CardContent>
            <BorderBeam size={250} duration={11} delay={5} />
          </Card>
          <Card className="relative overflow-hidden hover:shadow-xl hover:shadow-yellow-200/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-[#343434] mb-4">
                Fresh graduate
              </h3>
              <p className="text-[#343434]">
                Kamu yang baru aja lulus kuliah dan mau upgrade kemampuan coding
                supaya mendapatkan peluang lebih besar untuk dapetin kerja!
              </p>
            </CardContent>
            <BorderBeam size={250} duration={12} delay={7} />
          </Card>
          <Card className="relative overflow-hidden hover:shadow-xl hover:shadow-yellow-200/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-[#343434] mb-4">
                Karyawan yang mau ganti karir
              </h3>
              <p className="text-[#343434]">
                Buat yang udah kerja tapi pengen switch karir jadi programmer.
                JavaScript bisa jadi langkah awal yang bagus buat jadi web
                developer!
              </p>
            </CardContent>
            <BorderBeam size={250} duration={13} delay={9} />
          </Card>
        </div>
      </div>
    </section>
  );
}
