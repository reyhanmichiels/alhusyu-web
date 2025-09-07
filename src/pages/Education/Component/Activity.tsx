import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

export function Activity() {
    const activityList = [
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "image/activity.png"
        },
        {
            title: "Lorem Jenis Kegiatan",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque libero, a vehicula nisl dignissim id. Nullam placerat....",
            image: "image/activity.png"
        }
    ]
    return (
        <div className="flex flex-col gap-8 w-full bg-white rounded-2xl p-8">
            <div className="flex flex-row justify-between">
                {/* Kolom kiri */}
                <div className="flex flex-col gap-2 w-1/4">
                    <p className="font-manrope text-[#818181] text-[28px] leading-snug">
                        Beragam kegiatan edukatif, islami, dan menyenangkan
                    </p>
                    <img
                        src="/image/button-quran.png"
                        alt="Logo"
                        className="w-[162px] h-[70px]"
                    />
                </div>

                {/* Kolom kanan */}
                <div className="max-w-[1074px]">
                    <h2 className="ulm-font font-extrabold text-[72px] text-[#63817E] leading-tight">
                        Beragam Ikhtiar edukatif, islami, dan menyenangkan
                    </h2>
                </div>
            </div>

            <Carousel opts={{align: "start", loop: true}}>
                <CarouselContent>
                    {activityList.map((item, idx) => (
                        <CarouselItem key={idx} className="basis-1/4">
                            <div className="flex flex-col gap-8">
                                <div className="w-full text-center mx-auto">
                                    <p className="font-manrope font-semibold text-[28px] text-[#567471]">
                                        {item.title}
                                    </p>
                                    <p className="font-manrope text-[16px] text-[#5E5E5E] mt-4">
                                        {item.summary}
                                    </p>
                                </div>

                                <img src={item.image} alt="logo" className="w-full h-[230px]" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-8"/>
                <CarouselNext className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-8"/>
            </Carousel>
        </div>
    )
}