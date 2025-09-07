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
        <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between">
                <h2 className="ulm-font font-extrabold text-[#567471] text-[70px] tracking-tight leading-[0.9] max-w-5xl">
                    {name.toUpperCase()}
                </h2>
                <p className="font-manrope text-[#818181] text-[22px] max-w-2xl">
                    {summary}
                </p>
            </div>

            <Carousel className="" opts={{align: "start", loop: true}}>
                <CarouselContent className="">
                    {imageList.map((item, idx) => (
                        <CarouselItem key={idx} className="basis-[727px]">
                            <img src={item.image} alt="logo" className="w-full h-[409px]"/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/*<CarouselPrevious className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663]"/>*/}
                <CarouselNext className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-8"/>
            </Carousel>

            <div className="flex flex-row justify-start gap-16 rounded-2xl bg-[#63817E] w-full h-[354px] px-8">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full gap-8 mx-auto">
                    {/* Kiri: judul 2 baris */}
                    <div className="text-center">
                        <div className="font-medium font-manrope text-white text-[96px] leading-[0.9]">{teacherCount}</div>
                        <div className="font-light font-manrope text-white text-[28px] mt-1">Guru & Karyawan</div>
                    </div>

                    {/* Garis vertikal */}
                    <div className="w-px h-[151px] bg-white/70 justify-self-center"/>

                    {/* Kanan: angka + caption */}
                    <div className="text-center">
                        <div className="font-medium font-manrope text-white text-[96px] leading-[0.9]">{studentCount}+</div>
                        <div className="font-light font-manrope text-white text-[28px] mt-1">Santri Aktif</div>
                    </div>
                </div>

                <h2 className="ulm-font font-extrabold text-[#FBFED0] text-[72px] tracking-tight leading-[0.9] max-w-1/2 my-auto">
                    {"sekilas data lembaga".toUpperCase()}
                </h2>
            </div>
        </div>
    )
}