import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {ButtonDetail} from "@/components/ButtonDetail";

export function Program() {
    const programList = [
        {
            title: "Waktu Mustajab Terkabulnya Doa Saat Berpuasa",
            date: "DESEMBER 9, 2025",
            image: "/image/news-1.png",
        }, {
            title: "Waktu Mustajab Terkabulnya Doa Saat Berpuasa",
            date: "DESEMBER 9, 2025",
            image: "/image/news-1.png",
        }, {
            title: "Waktu Mustajab Terkabulnya Doa Saat Berpuasa",
            date: "DESEMBER 9, 2025",
            image: "/image/news-1.png",
        },{
            title: "Waktu Mustajab Terkabulnya Doa Saat Berpuasa",
            date: "DESEMBER 9, 2025",
            image: "/image/news-1.png",
        },{
            title: "Waktu Mustajab Terkabulnya Doa Saat Berpuasa",
            date: "DESEMBER 9, 2025",
            image: "/image/news-1.png",
        },
    ]
    return (
        <div className="flex flex-col gap-6 md:gap-8 bg-white rounded-2xl mx-4 md:mx-8 px-4 md:px-8 py-6 md:py-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0">
                <h2 className="text-[#63817E] font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-left ulm-font leading-tight order-1 lg:order-1">
                    Ragam Program<br/>Unggulan Kami
                </h2>
                <div className="flex flex-col gap-2 items-start lg:items-end order-2 lg:order-2">
                    <img className="w-32 md:w-48 lg:w-[256px] lg:mr-10 h-auto" src="/image/button-kambing.png" alt="logo"/>
                    <p className="text-[#757575] w-full lg:w-[528px] font-manrope text-sm md:text-base lg:text-lg xl:text-[28px] leading-relaxed">
                        Menyajikan tulisan mendalam seputar pendidikan Islam dan tips belajar
                    </p>
                </div>
            </div>

            <Carousel opts={{align: "start", loop: true}}>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {programList.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                            <div className="rounded-2xl overflow-hidden bg-white w-full max-w-[392px] h-auto">
                                {/* Gambar */}
                                <div className="h-64 md:h-80 lg:h-[392px] w-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover rounded-2xl"
                                    />
                                </div>
                                {/* Konten teks */}
                                <div className="p-3 md:p-4 space-y-2">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-manrope font-semibold text-[#757575] leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="font-light text-xs md:text-sm text-[#8A8A8A] font-manrope">{item.date}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigasi */}
                <div className="flex gap-2 justify-end mt-4">
                    <CarouselPrevious className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663]"/>
                    <CarouselNext className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663]"/>
                </div>
            </Carousel>

            <div className="flex flex-row justify-start">
                <ButtonDetail />
            </div>
        </div>
    )
}