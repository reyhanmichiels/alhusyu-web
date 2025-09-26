import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

export function Activity() {
    const activityList = [
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "/image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "/image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "/image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "/image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "/image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "/image/activity.png"
        }
    ]
    return (
        <div className="flex flex-col gap-6 md:gap-8 w-full bg-white rounded-2xl p-4 md:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
                {/* Kolom kiri */}
                <div className="flex flex-col gap-2 w-full lg:w-1/4 order-2 lg:order-1">
                    <p className="font-manrope text-[#818181] text-sm md:text-base lg:text-lg xl:text-[28px] leading-relaxed">
                        Beragam kegiatan edukatif, islami, dan menyenangkan
                    </p>
                    <img
                        src="/image/button-quran.png"
                        alt="Logo"
                        className="w-24 h-10 md:w-32 md:h-14 lg:w-[162px] lg:h-[70px] object-contain"
                    />
                </div>

                {/* Kolom kanan */}
                <div className="w-full lg:max-w-[1074px] order-1 lg:order-2">
                    <h2 className="ulm-font font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-[72px] text-[#63817E] leading-tight">
                        Beragam Ikhtiar edukatif, islami, dan menyenangkan
                    </h2>
                </div>
            </div>

            <Carousel opts={{align: "start", loop: true}}>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {activityList.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                                <div className="w-full text-center mx-auto">
                                    <p className="font-manrope font-semibold text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#567471]">
                                        {item.title}
                                    </p>
                                    <p className="font-manrope text-sm md:text-[16px] text-[#5E5E5E] mt-2 md:mt-4 leading-relaxed">
                                        {item.summary}
                                    </p>
                                </div>

                                <img src={item.image} alt="logo" className="w-full h-48 md:h-56 lg:h-[230px] object-cover rounded-2xl" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] ml-4 md:mr-8"/>
                <CarouselNext className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-4 md:mr-8"/>
            </Carousel>
        </div>
    )
}