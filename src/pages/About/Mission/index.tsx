export function Mission() {
    return (
        <div className="flex flex-col gap-8 bg-white rounded-2xl mx-8 px-8 py-8">
            <div className="flex justify-between items-center">
                <h2 className="text-[#63817E] font-extrabold text-6xl text-left ulm-font">
                    Arah dan<br/>Tujuan Kami
                </h2>
                <div className="flex flex-col gap-2 items-end">
                    <img className="w-[165px] h-[71px] mr-10" src="/image/button-quran-2.png" alt="logo"/>
                    <p className="text-[#757575] w-[528px] font-manrope text-right text-[28px]">
                        Yayasan AL-KHUSYU berkomitmen menciptakan lingkungan pendidikan Islami yang terpadu.
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-start gap-16">
                <div className="flex flex-col gap-2 bg-[#63817E] rounded-3xl font-manrope w-[440px] h-[411px] px-6 py-4 my-auto">
                    <div className="text-[#FBFED0] font-extrabold text-[60px]">
                        VISI
                    </div>
                    <div className="text-white font-light text-[28px]">
                        Menjadi lembaga pendidikan Islam yang unggul dalam mencetak generasi Qurani yang cerdas, mandiri, berakhlak mulia
                    </div>
                </div>
                <img src="/image/mission.png" alt="logo" className="w-[641px] h-[617px]"/>
                <div className="flex flex-col gap-2 bg-[#63817E] rounded-3xl font-manrope w-[440px] h-[411px] px-6 py-4 my-auto">
                    <div className="text-[#FBFED0] font-extrabold text-[60px]">
                        MISI
                    </div>
                    <div className="text-white font-light text-[28px]">
                        Menanamkan nilai-nilai Islami sejak dini, serta mendorong santri untuk aktif dalam kegiatan sosial dan dakwah.
                    </div>
                </div>
            </div>
        </div>
    )
}