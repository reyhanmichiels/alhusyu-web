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
        <div className="flex flex-col justify-start gap-6 md:gap-8 px-4 md:px-8">
            <div className="flex flex-col lg:flex-row justify-start gap-6 lg:gap-12 xl:gap-30">
                <div className="flex flex-col gap-6 md:gap-8">
                    <div className="bg-[#567471] text-white font-manrope rounded-[32px] px-4 md:px-6 lg:px-8 py-4 md:py-6 w-full max-w-[788px] h-auto md:h-[232px]">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center h-full gap-4 md:gap-8">
                            {/* Kiri: judul 2 baris */}
                            <div className="leading-[0.95] text-center md:text-left">
                                <span className="block font-semibold text-3xl md:text-5xl lg:text-6xl xl:text-[80px]">Santri</span>
                                <span className="block font-semibold text-3xl md:text-5xl lg:text-6xl xl:text-[80px]">Aktif</span>
                            </div>

                            {/* Garis vertikal - hidden on mobile */}
                            <div className="hidden md:block w-px h-[151px] bg-white/70 justify-self-center"/>

                            {/* Kanan: angka + caption */}
                            <div className="text-center">
                                <div className="font-semibold text-4xl md:text-6xl lg:text-7xl xl:text-[96px] leading-[0.9]">390+</div>
                                <div className="text-lg md:text-xl lg:text-2xl xl:text-[28px] mt-1">Anak</div>
                            </div>
                        </div>
                    </div>

                    <img src="/image/education-landing-page.png" alt="education-landing-page"
                         className="w-full max-w-[785px] h-auto aspect-[785/464] rounded-2xl object-cover"/>
                </div>
                <div className="flex flex-col gap-8 lg:gap-16 xl:gap-32 mt-6 lg:mt-0">
                    <div className="inline-grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-x-2 items-center text-[#63817E] ulm-font font-extrabold leading-[0.9] justify-center lg:justify-start">
                        {/* Baris 1: teks kiri */}
                        <span className="col-start-1 row-start-1 text-2xl md:text-4xl lg:text-5xl xl:text-[76px]">Statistik </span>
                        <span className="col-start-2 row-start-1 text-2xl md:text-4xl lg:text-5xl xl:text-[76px]">&</span>

                        {/* Baris 1: gambar kanan */}
                        <div
                            className="col-start-2 row-start-2 w-16 h-7 md:w-24 md:h-10 lg:w-32 lg:h-14 xl:w-[165px] xl:h-[71px] rounded-full overflow-hidden self-center -mt-1 xl:-mt-2"> {/* tweak -mt-2 kalau ingin sedikit naik */}
                            <img
                                src="/image/button-quran-2.png"
                                alt="Qur'an"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Baris 2: teks kiri */}
                        <span className="col-start-1 row-start-2 text-2xl md:text-4xl lg:text-5xl xl:text-[76px]">Capaian</span>
                    </div>
                    <div className="text-[#63817E] font-manrope">
                        <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center h-full gap-4 md:gap-8">
                            <div className="text-center">
                                <div className="font-semibold text-4xl md:text-6xl lg:text-7xl xl:text-[96px] leading-[0.9]">21+</div>
                                <div className="text-lg md:text-xl lg:text-2xl xl:text-[28px] mt-1">Prestasi</div>
                            </div>

                            {/* Garis vertikal - hidden on mobile */}
                            <div className="hidden md:block w-px h-[151px] bg-[#757575] justify-self-center"/>

                            {/* Kanan: angka + caption */}
                            <div className="text-center">
                                <div className="font-semibold text-4xl md:text-6xl lg:text-7xl xl:text-[96px] leading-[0.9]">52</div>
                                <div className="text-lg md:text-xl lg:text-2xl xl:text-[28px] mt-1">Guru & Karyawan</div>
                            </div>
                        </div>
                    </div>
                    <div className="font-manrope text-[#757575] text-base md:text-lg lg:text-xl xl:text-[32px] font-semibold w-full max-w-[600px] leading-relaxed">
                        Yayasan AL-KHUSYU terus berkembang dalam membina generasi Qurani. Kami telah mencetak ratusan
                        santri aktif.
                    </div>

                </div>
            </div>
            <Carousel className="w-full max-w-[1600px] mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                    {schools.map((s, i) => (
                        <CarouselItem
                            key={i}
                            className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                            <Card className="rounded-3xl overflow-hidden border-0 bg-white">
                                <CardContent className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-[#212529]">{s.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-600 mt-2 line-clamp-3">
                                            {s.desc}
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3">
                                        <Button
                                            variant="outline"
                                            className="rounded-full px-3 md:px-4 py-1 text-xs md:text-sm"
                                        >
                                            {s.location}
                                        </Button>
                                        <Button
                                            className="rounded-full bg-[#567471] hover:bg-[#4a6260] px-3 md:px-4 py-1 text-xs md:text-sm text-white">
                                            Selengkapnya
                                            <ArrowUpRight className="ml-1 h-3 w-3 md:h-4 md:w-4"/>
                                        </Button>
                                    </div>

                                    <div className="w-full h-32 md:h-[160px] rounded-2xl overflow-hidden">
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
                <CarouselPrevious className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] ml-4 md:ml-8"/>
                <CarouselNext className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-4 md:mr-8"/>
                {/*<CarouselPrevious />*/}
                {/*<CarouselNext />*/}
            </Carousel>
        </div>
    )
}