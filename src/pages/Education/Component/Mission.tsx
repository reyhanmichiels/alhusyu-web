export function Mission(
    {
        name,
        vision,
        mission
    }:
    {
        name: string,
        vision: string,
        mission: string,
    }
) {
    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex flex-col gap-4 w-full lg:max-w-1/2 order-2 lg:order-1">
                <img src="/image/e-m-1.png" alt="logo" className="w-full h-auto max-h-48 md:max-h-64 lg:max-h-1/3 object-cover rounded-2xl"/>
                <img src="/image/e-m-2.png" alt="logo" className="w-full h-auto max-h-64 md:max-h-80 lg:max-h-2/3 object-cover rounded-2xl"/>
            </div>

            <div className="flex flex-col gap-8 lg:gap-16 w-full lg:w-1/2 order-1 lg:order-2">
                <div className="inline-flex flex-col text-[#63817E] ulm-font font-extrabold leading-[0.9] mx-auto">
                    {/* Baris 1: TUJUAN + gambar */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                        <span className="text-xl md:text-2xl lg:text-4xl xl:text-[76px] text-center md:text-left">TUJUAN</span>
                        <div className="w-20 h-9 md:w-24 md:h-10 lg:w-32 lg:h-14 xl:w-[165px] xl:h-[71px] rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
                            <img
                                src="/image/button-quran-2.png"
                                alt="Qur'an"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Baris 2: MI AL-KHUSYU' */}
                    <span className="text-xl md:text-2xl lg:text-4xl xl:text-[76px] text-center md:text-left">{name}</span>
                </div>
                <div className="bg-white rounded-2xl px-4 md:px-6 lg:px-8 py-3 md:py-4 w-full lg:w-3/4 mx-auto">
                    <p className="font-manrope font-semibold text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#63817E]">Visi</p>
                    <p className="font-manrope font-semibold text-sm md:text-base lg:text-lg xl:text-[20px] text-[#757575] leading-relaxed">
                        {vision}
                    </p>
                </div>
                <div className="bg-white rounded-2xl px-4 md:px-6 lg:px-8 py-3 md:py-4 w-full lg:w-3/4 mx-auto">
                    <p className="font-manrope font-semibold text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#63817E]">Misi</p>
                    <p className="font-manrope font-semibold text-sm md:text-base lg:text-lg xl:text-[20px] text-[#757575] leading-relaxed">
                        {mission}
                    </p>
                </div>
            </div>
        </div>
    )
}