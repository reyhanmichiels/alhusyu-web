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
        <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-4 max-w-1/2">
                <img src="/image/e-m-1.png" alt="logo" className="w-full max-h-1/3"/>
                <img src="/image/e-m-2.png" alt="logo" className="w-full max-h-2/3"/>
            </div>

            <div className="flex flex-col gap-16 w-1/2">
                <div className="inline-flex flex-col text-[#63817E] ulm-font font-extrabold leading-[0.9] mx-auto">
                    {/* Baris 1: TUJUAN + gambar */}
                    <div className="flex items-center gap-3">
                        <span className="text-[76px]">TUJUAN</span>
                        <div className="w-[165px] h-[71px] rounded-full overflow-hidden shrink-0">
                            <img
                                src="/image/button-quran-2.png"
                                alt="Qur'an"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Baris 2: MI AL-KHUSYU’ */}
                    <span className="text-[76px]">{name}</span>
                </div>
                <div className="bg-white rounded-2xl px-8 py-4 w-3/4 mx-auto">
                    <p className="font-manrope font-semibold text-[28px] text-[#63817E]">Visi</p>
                    <p className="font-manrope font-semibold text-[20px] text-[#757575]">
                        {vision}
                    </p>
                </div>
                <div className="bg-white rounded-2xl px-8 py-4 w-3/4 mx-auto">
                    <p className="font-manrope font-semibold text-[28px] text-[#63817E]">Misi</p>
                    <p className="font-manrope font-semibold text-[20px] text-[#757575]">
                        {mission}
                    </p>
                </div>
            </div>
        </div>
    )
}