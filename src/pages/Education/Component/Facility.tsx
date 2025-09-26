import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

export function Facility() {
    const facilityList = [
        {
            title: "Fasilitas Pendidikan",
            subtitle: "Fasilitas Pendidikan",
            summary: "Yayasan AL-KHUSYU menyediakan fasilitas pendidikan yang nyaman, aman, dan mendukung proses belajar mengajar. Lingkungan yang asri ruang kelas yang tertata rapi, serta sarana belajar yang memadai menjadi penunjang keberhasilan peserta didik.",
            image: "/image/facility.png"
        },
        {
            title: "Fasilitas Pendidikan",
            subtitle: "Fasilitas Pendidikan",
            summary: "Yayasan AL-KHUSYU menyediakan fasilitas pendidikan yang nyaman, aman, dan mendukung proses belajar mengajar. Lingkungan yang asri ruang kelas yang tertata rapi, serta sarana belajar yang memadai menjadi penunjang keberhasilan peserta didik.",
            image: "/image/facility.png"
        },
        {
            title: "Fasilitas Pendidikan",
            subtitle: "Fasilitas Pendidikan",
            summary: "Yayasan AL-KHUSYU menyediakan fasilitas pendidikan yang nyaman, aman, dan mendukung proses belajar mengajar. Lingkungan yang asri ruang kelas yang tertata rapi, serta sarana belajar yang memadai menjadi penunjang keberhasilan peserta didik.",
            image: "/image/facility.png"
        },
        {
            title: "Fasilitas Pendidikan",
            subtitle: "Fasilitas Pendidikan",
            summary: "Yayasan AL-KHUSYU menyediakan fasilitas pendidikan yang nyaman, aman, dan mendukung proses belajar mengajar. Lingkungan yang asri ruang kelas yang tertata rapi, serta sarana belajar yang memadai menjadi penunjang keberhasilan peserta didik.",
            image: "/image/facility.png"
        },
        {
            title: "Fasilitas Pendidikan",
            subtitle: "Fasilitas Pendidikan",
            summary: "Yayasan AL-KHUSYU menyediakan fasilitas pendidikan yang nyaman, aman, dan mendukung proses belajar mengajar. Lingkungan yang asri ruang kelas yang tertata rapi, serta sarana belajar yang memadai menjadi penunjang keberhasilan peserta didik.",
            image: "/image/facility.png"
        }
    ]
    const facilitiesLength = facilityList.length

    return (
        <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col lg:flex-row lg:justify-between px-4 md:px-8 gap-6 lg:gap-0">
                <div className="w-full lg:max-w-1/2">
                    <h2 className="ulm-font font-extrabold text-2xl md:text-4xl lg:text-5xl xl:text-[76px] text-[#63817E] leading-tight">
                        Fasilitas
                    </h2>
                    <p className="font-manrope font-semibold text-sm md:text-base lg:text-lg xl:text-[28px] text-[#757575] max-w-full lg:max-w-2/3 leading-relaxed mt-2">
                        Terpercaya membina generasi Qurani yang cerdas dan berakhlak sejak dini.
                    </p>
                </div>
                <div className="w-full lg:max-w-1/2">
                    <div className="inline-flex flex-col text-[#63817E] ulm-font font-extrabold leading-[1.2] mx-auto lg:mx-auto">
                        {/* Baris 1: TUJUAN + gambar */}
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                            <p className="text-xl md:text-2xl lg:text-4xl xl:text-[76px]">Pendidikan</p>
                            <div className="w-20 h-9 md:w-24 md:h-10 lg:w-32 lg:h-14 xl:w-[165px] xl:h-[71px] rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
                                <img
                                    src="/image/button-quran-2.png"
                                    alt="Qur'an"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Baris 2: MI AL-KHUSYU' */}
                        <p className="text-xl md:text-2xl lg:text-4xl xl:text-[76px] text-center md:text-left">Karakter Islami</p>
                    </div>
                </div>
            </div>

            <Carousel opts={{align: "start", loop: true}}>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {facilityList.map((item, idx) => (
                        <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full">
                            <div className="flex flex-col lg:flex-row justify-start gap-0">
                                <div className="w-full lg:w-1/2">
                                    <img src={item.image} alt={item.image} className="w-full h-64 md:h-80 lg:h-[500px] xl:h-[600px] object-cover"/>
                                </div>
                                <div className="flex flex-col justify-between bg-white rounded-t-2xl lg:rounded-none lg:rounded-r-4xl px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8 w-full lg:w-1/2 lg:h-[500px] xl:h-[600px]">
                                    <p className="font-manrope font-semibold text-lg md:text-xl lg:text-2xl xl:text-[32px] text-[#5E7C7B]">
                                        {idx+1}/{facilitiesLength}
                                    </p>
                                    <p className="font-manrope text-sm md:text-base lg:text-lg xl:text-[32px] text-[#757575] leading-relaxed">
                                        {item.summary}
                                    </p>
                                    <div>
                                        <p className="ulm-font font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-[42px] text-[#5E7C7B] leading-tight">
                                            {item.title}
                                        </p>
                                        <p className="font-manrope font-semibold text-base md:text-lg lg:text-xl xl:text-[32px] text-[#757575] mt-2">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] ml-4 md:ml-8"/>
                <CarouselNext className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-4 md:mr-16"/>
            </Carousel>
        </div>
    )
}