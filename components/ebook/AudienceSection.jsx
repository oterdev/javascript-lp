import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function AudienceSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-screen-lg px-4">
        <h2 className="mb-10 text-2xl font-semibold text-[#343434]">
          Ini buat siapa sih?
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="relative overflow-hidden hover:shadow-xl hover:shadow-yellow-200/50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-medium text-[#343434]">
                Kamu yang baru mulai!
              </h3>
              <p className="text-[#343434]">
                Gak punya background IT? Gak masalah, ebook ini bakal ngajarin
                dari basic.
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
              <h3 className="mb-4 text-lg font-medium text-[#343434]">
                Mahasiswa IT!
              </h3>
              <p className="text-[#343434]">
                Lagi stress sama skripsi codingan? Ebook ini bisa jadi
                penyelamat kamu.
              </p>
            </CardContent>
            <BorderBeam size={250} duration={11} delay={5} />
          </Card>
          <Card className="relative overflow-hidden hover:shadow-xl hover:shadow-yellow-200/50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-medium text-[#343434]">
                Fresh Graduate!
              </h3>
              <p className="text-[#343434]">
                Siap-siap upgrade skill buat bikin CV kamu makin kinclong dan di
                lirik HR.
              </p>
            </CardContent>
            <BorderBeam size={250} duration={12} delay={7} />
          </Card>
          <Card className="relative overflow-hidden hover:shadow-xl hover:shadow-yellow-200/50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-medium text-[#343434]">
                Karyawan yang mau switch career!
              </h3>
              <p className="text-[#343434]">
                Mau jadi programmer tapi bingung mau mulai dari mana? Ebook ini
                jawabannya.
              </p>
            </CardContent>
            <BorderBeam size={250} duration={13} delay={9} />
          </Card>
        </div>
      </div>
    </section>
  );
}
