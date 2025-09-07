import {ButtonDetail} from "@/components/ButtonDetail";
import {Carousel, CarouselContent, CarouselItem, CarouselNext} from "@/components/ui/carousel.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";

export function Detail() {
    const AchievementList = [
        {
            date: "DESEMBER 9, 2025",
            summary: "Anisatul Fitria pemenang Lomba lari Marathon 5 KM Putri dalam rangka HUT RI Ke 79 yang di laksanakan di Kecamatan Wates.....",
            title: "Juara 1 Lomba Marathon Putri",
            image: "/image/achievement-1.png"
        },
        {
            date: "DESEMBER 9, 2025",
            summary: "Anisatul Fitria pemenang Lomba lari Marathon 5 KM Putri dalam rangka HUT RI Ke 79 yang di laksanakan di Kecamatan Wates.....",
            title: "Juara 1 Lomba Marathon Putri",
            image: "/image/achievement-1.png"
        },
    ]
    return (
        <div className="flex justify-start pl-8 pr-8 gap-8">

            <div className="flex flex-col gap-8 w-1/2">
                <h1 className="text-[53px] font-extrabold ulm-font text-[#63817E] w-full">
                    Pencapaian dan <br/>
                    Prestasi Santri
                </h1>

                <div
                    className="font-manrope text-[#757575] text-[20px] bg-white rounded-2xl px-8 py-8 flex items-center">
                    Kami menghadirkan program pendidikan yang
                    menyeluruh untuk membentuk pribadi yang seimbang
                    antara ilmu dan iman.
                </div>

                <div className="flex flex-row justify-between w-full">
                    <img src="/image/button-quran.png" alt="Logo"/>

                    <ButtonDetail/>
                </div>
            </div>

            <div className="w-1/2">
                {/* max-w lebih besar dari slide untuk bikin efek "peek" slide berikutnya */}
                <Carousel
                    className="w-full max-w-[820px] ml-auto relative"
                    opts={{ align: "start", loop: true }}
                >
                    {/* spacing antar slide */}
                    <CarouselContent className="-ml-6">
                        {AchievementList.map((item, idx) => (
                            // Lebar slide = 750px supaya match desain
                            <CarouselItem key={idx} className="pl-6 basis-[750px]">
                                <Card className="rounded-3xl border-0 shadow-none bg-white">
                                    <CardContent className="p-8">
                                        <div className="grid grid-cols-[1fr_320px] gap-8 items-start">
                                            {/* Kiri: teks */}
                                            <div className="space-y-6">
                                                <p className="text-[#568872] font-manrope font-semibold tracking-wide">
                                                    {item.date}
                                                </p>
                                                <p className="text-[#757575] leading-8 font-manrope">
                                                    {item.summary}
                                                </p>
                                                <h3 className="text-[#63817E] font-extrabold text-2xl leading-snug ulm-font">
                                                    {item.title.toUpperCase()}
                                                </h3>
                                                <div>
                                                    <button className="rounded-full bg-[#567471] text-white px-6 py-3 flex items-center justify-between w-full gap-2">
                                                        Jelajahi
                                                        <span className="inline-block">→</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Kanan: gambar */}
                                            <div className="h-[388px] w-[296px]">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-full w-full rounded-2xl object-cover"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Tombol next di kanan tengah */}
                    <CarouselNext className="absolute right-[-22px] top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#567471] text-white shadow-md hover:bg-[#4b6663]" />
                </Carousel>
            </div>

        </div>
    )
}