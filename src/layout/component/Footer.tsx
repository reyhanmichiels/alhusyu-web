export default function Footer() {
    return (
        <div className="flex flex-col gap-4 md:gap-8 rounded-2xl bg-[#63817E] my-4 md:my-8 mx-4 md:mx-8 px-4 md:px-8 lg:px-16 py-4 md:py-8">
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
                <div className="w-full lg:max-w-[60%]">
                    <h2 className="ulm-font font-extrabold text-[#FBFED0] text-xl md:text-3xl lg:text-4xl xl:text-[60px] leading-tight">
                        <span className="block">Mendidik dengan Hati, Membina dengan Iman</span>
                    </h2>
                    <p className="font-manrope font-medium text-sm md:text-lg lg:text-xl xl:text-[32px] text-white mt-2 md:mt-4 leading-relaxed">
                        Yayasan AL-KHUSYU berkomitmen mencetak generasi Qurani yang unggul dalam iman, ilmu, dan akhlak.
                    </p>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <img src="/image/footer-logo.png" alt="logo" className="w-32 h-32 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] xl:w-[264px] xl:h-[265px] my-auto"/>
                </div>
            </div>

            <div className="border border-[#FBFED0]"></div>

            <div className="flex flex-col lg:flex-row justify-start gap-4 lg:gap-8">
                <div className="w-full lg:max-w-[45%]">
                    <p className="font-manrope font-bold text-[#FBFED0] text-base md:text-lg lg:text-xl xl:text-[24px] mb-2">
                        Alamat
                    </p>
                    <p className="font-manrope font-bold text-white text-sm md:text-base lg:text-lg xl:text-[24px] leading-relaxed">
                        Bajirejo, Jalan Tanjung, Tugurejo, Kec. Wates, Kabupaten Blitar, Jawa Timur 66194
                    </p>
                </div>
                <div className="w-full lg:max-w-[35%]">
                    <p className="font-manrope font-bold text-[#FBFED0] text-base md:text-lg lg:text-xl xl:text-[24px] mb-2">
                        Kontak
                    </p>
                    <p className="font-manrope font-bold text-white text-sm md:text-base lg:text-lg xl:text-[24px]">
                        0811 2345 5678
                    </p>
                    <p className="font-manrope font-bold text-white text-sm md:text-base lg:text-lg xl:text-[24px]">
                        admin001@alkhusyu.id
                    </p>
                </div>
            </div>

            <div className="border border-[#FBFED0]"></div>

            <div className="flex flex-row justify-center lg:justify-between">
                <p className="font-manrope font-medium text-white text-xs md:text-sm lg:text-base xl:text-[24px] text-center lg:text-left">
                    © 2025 Yayasan Pendidikan dan Sosial Al-Khusyu'. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}