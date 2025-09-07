import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {ButtonDetail} from "@/components/ButtonDetail";

export function News() {
    const newsList = [
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
        <div className="flex flex-col gap-8 bg-white rounded-2xl mx-8 px-8 py-8">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <img className="w-[256px] h-[61px]" src="/image/button-kambing.png" alt="logo"/>
                    <p className="text-[#757575] w-[528px] font-manrope text-[28px]">
                        Berbagai Informasi Menarik Seputar Pendidikan, Inovasi, dan Perkembangan
                    </p>
                </div>
                <h2 className="text-[#63817E] font-extrabold text-6xl text-right ulm-font">
                    Wujud Nyata <br/> Ikhtiar Kami
                </h2>
            </div>

            <Carousel opts={{align: "start", loop: true}}>
                <CarouselContent className="">
                    {newsList.map((item, idx) => (
                        <CarouselItem key={idx} className="basis-1/3">
                            <div className="rounded-2xl overflow-hidden bg-white  w-[392px] h-[497px]">
                                {/* Gambar */}
                                <div className="h-[392px] w-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover rounded-2xl"
                                    />
                                </div>
                                {/* Konten teks */}
                                <div className="p-4 space-y-2">
                                    <h3 className="text-2xl font-manrope font-semibold text-[#757575]">
                                        {item.title}
                                    </h3>
                                    <p className="font-light text-sm text-[#8A8A8A] font-manrope">{item.date}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigasi */}
                <div className="flex gap-2 justify-end mt-4">
                    <CarouselPrevious className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663]"/>
                    <CarouselNext className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663]"/>
                </div>
            </Carousel>

            <div className="flex flex-row justify-between">
                <ButtonDetail />
            </div>
        </div>
    )
}