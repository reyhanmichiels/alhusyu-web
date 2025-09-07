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
        <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between px-8">
                <div className="max-w-1/2">
                    <h2 className="ulm-font font-extrabold text-[76px] text-[#63817E]">
                        Fasilitas
                    </h2>
                    <p className="font-manrope font-semibold text-[28px] text-[#757575] max-w-2/3">
                        Terpercaya membina generasi Qurani yang cerdas dan berakhlak sejak dini.
                    </p>
                </div>
                <div className="max-w-1/2">
                    <div className="inline-flex flex-col text-[#63817E] ulm-font font-extrabold leading-[1.2] mx-auto">
                        {/* Baris 1: TUJUAN + gambar */}
                        <div className="flex items-center gap-3">
                            <p className="text-[76px]">Pendidikan</p>
                            <div className="w-[165px] h-[71px] rounded-full overflow-hidden shrink-0">
                                <img
                                    src="/image/button-quran-2.png"
                                    alt="Qur'an"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Baris 2: MI AL-KHUSYU’ */}
                        <p className="text-[76px]">Karakter Islami</p>
                    </div>
                </div>
            </div>

            <Carousel opts={{align: "start", loop: true}}>
                <CarouselContent>
                    {facilityList.map((item, idx) => (
                        <CarouselItem key={idx} className="basis-full">
                            <div className="flex flex-row justify-start gap-0">
                                <img src={item.image} alt={item.image} className="w-[788px] h-[788px]"/>
                                <div className="flex flex-col gap-16 bg-white rounded-4xl px-16 py-8 w-[788px] h-[788px]">
                                    <p className="font-manrope font-semibold text-[32px] text-[#5E7C7B]">
                                        {idx+1}/{facilitiesLength}
                                    </p>
                                    <p className="font-manrope text-[32px] text-[#757575]">
                                        {item.summary}
                                    </p>
                                    <div>
                                        <p className="ulm-font font-extrabold text-[42px] text-[#5E7C7B]">
                                            {item.title}
                                        </p>
                                        <p className="font-manrope font-semibold text-[32px] text-[#757575]">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] ml-8"/>
                <CarouselNext className="h-10 w-10 rounded-full bg-[#567471] text-white hover:bg-[#4b6663] mr-16"/>
            </Carousel>
        </div>
    )
}