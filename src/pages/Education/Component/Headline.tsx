import {Carousel, CarouselContent, CarouselItem, CarouselNext} from "@/components/ui/carousel.tsx";

export default function Headline(
    {
        name,
        summary,
        imageList,
        teacherCount,
        studentCount
    }:
    {
        name: string,
        summary: string,
        imageList: {image: string}[]
        teacherCount: number,
        studentCount: number,
    }
) {
    return (
        <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0">
                <h2 className="ulm-font font-extrabold text-[#567471] text-2xl md:text-3xl lg:text-4xl xl:text-[70px] tracking-tight leading-[0.9] max-w-full lg:max-w-5xl">
                    {name.toUpperCase()}
                </h2>
                <p className="font-manrope text-[#818181] text-sm md:text-base lg:text-lg xl:text-[22px] max-w-full lg:max-w-2xl leading-relaxed">
                    {summary}
                </p>
            </div>

            <Carousel className="" opts={{align: "start", loop: true}}>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {imageList.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full md:basis-[600px] lg:basis-[727px]">
                            <img src={item.image} alt="logo" className="w-full h-48 md:h-64 lg:h-80 xl:h-[409px] object-cover rounded-2xl"/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/*<CarouselPrevious className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663]"/>*/}
                <CarouselNext className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-4 md:mr-8"/>
            </Carousel>

            <div className="flex flex-col lg:flex-row lg:justify-start gap-6 lg:gap-16 rounded-2xl bg-[#63817E] w-full min-h-[200px] lg:h-[354px] px-4 md:px-8 py-6 lg:py-0">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center h-full gap-4 md:gap-8 mx-auto lg:mx-0 order-2 lg:order-1">
                    {/* Kiri: judul 2 baris */}
                    <div className="text-center">
                        <div className="font-medium font-manrope text-white text-3xl md:text-5xl lg:text-6xl xl:text-[96px] leading-[0.9]">{teacherCount}</div>
                        <div className="font-light font-manrope text-white text-base md:text-lg lg:text-xl xl:text-[28px] mt-1">Guru & Karyawan</div>
                    </div>

                    {/* Garis vertikal - hidden on mobile */}
                    <div className="hidden md:block w-px h-[151px] bg-white/70 justify-self-center"/>

                    {/* Kanan: angka + caption */}
                    <div className="text-center">
                        <div className="font-medium font-manrope text-white text-3xl md:text-5xl lg:text-6xl xl:text-[96px] leading-[0.9]">{studentCount}+</div>
                        <div className="font-light font-manrope text-white text-base md:text-lg lg:text-xl xl:text-[28px] mt-1">Santri Aktif</div>
                    </div>
                </div>

                <h2 className="ulm-font font-extrabold text-[#FBFED0] text-xl md:text-2xl lg:text-4xl xl:text-[72px] tracking-tight leading-[0.9] max-w-full lg:max-w-1/2 my-auto text-center lg:text-left order-1 lg:order-2">
                    {"sekilas data lembaga".toUpperCase()}
                </h2>
            </div>
        </div>
    )
}