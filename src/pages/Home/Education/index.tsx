import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {ArrowUpRight} from "lucide-react"

export function Education() {
    const schools = [
        {
            title: "RA AL Khusyu",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisi dignissim id. Nullam placerat....",
            location: "Blitar",
            image: "/image/ra.png",
        },
        {
            title: "MI AL KHUSYU",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisi dignissim id. Nullam placerat....",
            location: "Blitar",
            image: "/image/mi.png",
        },
        {
            title: "SMP ALKHUSYU",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisi dignissim id. Nullam placerat....",
            location: "Blitar",
            image: "/image/smp.png",
        },
        {
            title: "SMK ALKHUSYU",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisi dignissim id. Nullam placerat....",
            location: "Blitar",
            image: "/image/smk.png",
        }, {
            title: "SMK ALKHUSYU",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisi dignissim id. Nullam placerat....",
            location: "Blitar",
            image: "/image/smk.png",
        }, {
            title: "SMK ALKHUSYU",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisi dignissim id. Nullam placerat....",
            location: "Blitar",
            image: "/image/smk.png",
        },
    ]

    return (
        <div className="flex flex-col justify-start gap-8 px-8 ">
            <div className="flex flex-row justify-start gap-30">
                <div className="flex flex-col gap-8">
                    <div className="bg-[#567471] text-white font-manrope rounded-[32px] px-8 py-6 w-[788px] h-[232px]">
                        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full gap-8">
                            {/* Kiri: judul 2 baris */}
                            <div className="leading-[0.95]">
                                <span className="block font-semibold text-[80px]">Santri</span>
                                <span className="block font-semibold text-[80px]">Aktif</span>
                            </div>

                            {/* Garis vertikal */}
                            <div className="w-px h-[151px] bg-white/70 justify-self-center"/>

                            {/* Kanan: angka + caption */}
                            <div className="text-center">
                                <div className="font-semibold text-[96px] leading-[0.9]">390+</div>
                                <div className="text-[28px] mt-1">Anak</div>
                            </div>
                        </div>
                    </div>

                    <img src="/image/education-landing-page.png" alt="education-landing-page"
                         className="w-[785px] h-[464px]"/>
                </div>
                <div className="flex flex-col gap-32">
                    <div className="inline-grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-x-0 items-center text-[#63817E] ulm-font font-extrabold leading-[0.9]">
                        {/* Baris 1: teks kiri */}
                        <span className="col-start-1 row-start-1 text-[76px]">Statistik </span>
                        <span className="col-start-2 row-start-1 text-[76px]">&</span>

                        {/* Baris 1: gambar kanan */}
                        <div
                            className="col-start-2 row-start-2 w-[165px] h-[71px] rounded-full overflow-hidden self-center -mt-2"> {/* tweak -mt-2 kalau ingin sedikit naik */}
                            <img
                                src="/image/button-quran-2.png"
                                alt="Qur'an"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Baris 2: teks kiri */}
                        <span className="col-start-1 row-start-2 text-[76px]">Capaian</span>
                    </div>
                    <div className="text-[#63817E] font-manrope">
                        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full gap-8">
                            <div className="text-center">
                                <div className="font-semibold text-[96px] leading-[0.9]">21+</div>
                                <div className="text-[28px] mt-1">Prestasi</div>
                            </div>

                            {/* Garis vertikal */}
                            <div className="w-px h-[151px] bg-[#757575] justify-self-center"/>

                            {/* Kanan: angka + caption */}
                            <div className="text-center">
                                <div className="font-semibold text-[96px] leading-[0.9]">52</div>
                                <div className="text-[28px] mt-1">Guru & Karyawan</div>
                            </div>
                        </div>
                    </div>
                    <div className="font-manrope text-[#757575] text-[32px] font-semibold w-[600px]">
                        Yayasan AL-KHUSYU terus berkembang dalam membina generasi Qurani. Kami telah mencetak ratusan
                        santri aktif,.
                    </div>

                </div>
            </div>
            <Carousel className="w-full max-w-[1600px] mx-auto">
                <CarouselContent className="-ml-4">
                    {schools.map((s, i) => (
                        <CarouselItem
                            key={i}
                            className="pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                            <Card className="rounded-3xl overflow-hidden border-0 bg-white">
                                <CardContent className="p-6 flex flex-col gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#212529]">{s.title}</h3>
                                        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                                            {s.desc}
                                        </p>
                                    </div>

                                    <div className="flex justify-between gap-3">
                                        <Button
                                            variant="outline"
                                            className="rounded-full px-4 py-1 text-sm"
                                        >
                                            {s.location}
                                        </Button>
                                        <Button
                                            className="rounded-full bg-[#567471] hover:bg-[#4a6260] px-4 py-1 text-sm text-white">
                                            Selengkapnya
                                            <ArrowUpRight className="ml-1 h-4 w-4"/>
                                        </Button>
                                    </div>

                                    <div className="w-full h-[160px] rounded-2xl overflow-hidden">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] ml-8"/>
                <CarouselNext className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-8"/>
                {/*<CarouselPrevious />*/}
                {/*<CarouselNext />*/}
            </Carousel>
        </div>
    )
}