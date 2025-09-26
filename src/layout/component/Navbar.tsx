import {useEffect, useRef, useState} from "react";
import {ChevronDown, Menu, X} from "lucide-react";

export default function Navbar() {
    const [eduOpen, setEduOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const eduRef = useRef<HTMLDivElement>(null);
    const [currentPath, setCurrentPath] = useState("/");

    useEffect(() => setCurrentPath(window.location.pathname), []);

    // close when click outside
    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (!eduRef.current?.contains(e.target as Node)) setEduOpen(false);
        };
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [currentPath]);

    const isActive = (href: string) => (href === "/" ? currentPath === "/" : currentPath.startsWith(href));

    return (
        <header className="flex justify-between mx-4 my-4 py-4 px-4 md:px-8">
            <div className="flex-shrink-0">
                <img src="/image/navbar-logo.png" alt="Logo" className="h-8 md:h-auto" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 text-[#63817E] hover:text-[#FBFED0] transition-colors"
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Desktop navigation */}
            <div className="relative hidden md:block">
                <nav className="flex rounded-full bg-[#63817E] gap-4 lg:gap-8 px-6 lg:px-10 py-3 text-white text-sm lg:text-xl font-semibold font-manrope">
                    <a className={`${isActive("/") ? "text-[#FBFED0]" : ""} hover:underline whitespace-nowrap`} href="/">Beranda</a>
                    <a className={`${isActive("/tentang") ? "text-[#FBFED0]" : ""} hover:underline whitespace-nowrap`} href="/tentang">Tentang</a>

                    {/* Dropdown Pendidikan (mega menu) */}
                    <div
                        className="relative"
                        ref={eduRef}
                        // onMouseLeave={() => setEduOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 hover:underline outline-none ${currentPath.startsWith("/pendidikan") ? "text-[#FBFED0]" : ""}`}
                            aria-haspopup="menu"
                            aria-expanded={eduOpen}
                            onClick={() => setEduOpen(v => !v)}
                            onMouseEnter={() => setEduOpen(true)}
                            onKeyDown={(e) => {
                                if (e.key === "Escape") setEduOpen(false);
                                if (["ArrowDown","Enter"," "].includes(e.key)) { e.preventDefault(); setEduOpen(true); }
                            }}
                        >
                            Pendidikan <ChevronDown className="w-4 h-4" />
                        </button>

                        {eduOpen && (
                            <div
                                role="menu"
                                // panel lebar, rata tengah di bawah nav, rounded + shadow seperti contoh
                                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(90vw,72rem)] rounded-3xl border bg-white text-slate-700 shadow-xl ring-1 ring-black/5 z-50"
                                onMouseEnter={() => setEduOpen(true)}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-4 p-6 lg:p-8">
                                    {/* Kolom 1 */}
                                    <div>
                                        <div className="text-[#63817E] font-semibold mb-3">Pendidikan Formal</div>
                                        <a href="/pendidikan/tk" className="block py-2 hover:text-[#63817E]">TK Al-Khusyu’</a>
                                        <a href="/pendidikan/madrasah" className="block py-2 hover:text-[#63817E]">MI Al-Khusyu’</a>
                                        <a href="/pendidikan/smp" className="block py-2 hover:text-[#63817E]">SMP Al-Khusyu’</a>
                                        <a href="/pendidikan/smk" className="block py-2 hover:text-[#63817E]">SMK Al-Khusyu’</a>
                                    </div>

                                    {/* Kolom 2 */}
                                    <div>
                                        <div className="text-[#63817E] font-semibold mb-3">Pesantren & Tahfidz</div>
                                        <a href="/pendidikan/tahfidz" className="block py-2 hover:text-[#63817E]">Pondok Tahfidz BQ</a>
                                        <a href="/pendidikan/pesantren" className="block py-2 hover:text-[#63817E]">Pondok Pesantren</a>
                                    </div>

                                    {/* Kolom 3 */}
                                    <div>
                                        <div className="text-[#63817E] font-semibold mb-3">Pesantren & Tahfidz</div>
                                        <a href="/pendidikan/diniyah" className="block py-2 hover:text-[#63817E]">Diniyah Al-Khusyu’</a>
                                        <a href="/pendidikan/tpq" className="block py-2 hover:text-[#63817E]">TPQ Al-Khusyu’</a>
                                        <a href="/pendidikan/bq" className="block py-2 hover:text-[#63817E]">BQ Kids Al-Khusyu’</a>
                                        <a href="/pendidikan/sanggar" className="block py-2 hover:text-[#63817E]">Sanggar Al-Qur’an Al-Khusyu’</a>
                                    </div>

                                    {/* Kolom 4 */}
                                    <div>
                                        <div className="text-[#63817E] font-semibold mb-3">Lembaga Sosial</div>
                                        <a href="/pendidikan/lksa" className="block py-2 hover:text-[#63817E]">LKSA Al-Khusyu’</a>
                                    </div>
                                </div>

                                {/* sudut halus + bayangan bawah */}
                                <div className="px-6 lg:px-8 pb-6">
                                    <div className="h-0.5 w-full bg-transparent shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] rounded-b-3xl"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <a className={`${isActive("/kegiatan") ? "text-[#FBFED0]" : ""} hover:underline whitespace-nowrap`} href="/kegiatan">Kegiatan</a>
                    <a className={`${isActive("/program") ? "text-[#FBFED0]" : ""} hover:underline whitespace-nowrap`} href="/program">Program</a>
                    <a className={`${isActive("/prestasi") ? "text-[#FBFED0]" : ""} hover:underline whitespace-nowrap`} href="/prestasi">Prestasi & Karya</a>
                </nav>
            </div>

            {/* Tagline - hidden on mobile */}
            <div className="hidden lg:block font-manrope text-lg xl:text-xl font-medium text-right align-middle leading-none flex-shrink-0">
                <div>Mendidik dengan Hati,</div>
                <div>Membina dengan Iman</div>
            </div>

            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
                    <div className="absolute right-0 top-0 h-full w-full sm:w-80 sm:max-w-full bg-white shadow-xl">
                        <div className="flex items-center justify-between p-4 border-b">
                            <img src="/image/navbar-logo.png" alt="Logo" className="h-8" />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-gray-600 hover:text-gray-900"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <nav className="p-4 space-y-4">
                            <a
                                className={`block py-3 px-4 rounded-lg font-semibold transition-colors ${
                                    isActive("/") ? "bg-[#63817E] text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                                href="/"
                            >
                                Beranda
                            </a>
                            <a
                                className={`block py-3 px-4 rounded-lg font-semibold transition-colors ${
                                    isActive("/tentang") ? "bg-[#63817E] text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                                href="/tentang"
                            >
                                Tentang
                            </a>

                            {/* Mobile Education dropdown */}
                            <div>
                                <button
                                    onClick={() => setEduOpen(!eduOpen)}
                                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-semibold transition-colors ${
                                        currentPath.startsWith("/pendidikan") ? "bg-[#63817E] text-white" : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                >
                                    Pendidikan
                                    <ChevronDown className={`w-4 h-4 transform transition-transform ${eduOpen ? "rotate-180" : ""}`} />
                                </button>

                                {eduOpen && (
                                    <div className="mt-2 pl-4 space-y-2">
                                        <div className="text-sm font-medium text-[#63817E] mb-2">Pendidikan Formal</div>
                                        <a href="/pendidikan/tk" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">TK Al-Khusyu'</a>
                                        <a href="/pendidikan/madrasah" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">MI Al-Khusyu'</a>
                                        <a href="/pendidikan/smp" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">SMP Al-Khusyu'</a>
                                        <a href="/pendidikan/smk" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">SMK Al-Khusyu'</a>

                                        <div className="text-sm font-medium text-[#63817E] mb-2 mt-4">Pesantren & Tahfidz</div>
                                        <a href="/pendidikan/tahfidz" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">Pondok Tahfidz BQ</a>
                                        <a href="/pendidikan/pesantren" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">Pondok Pesantren</a>
                                        <a href="/pendidikan/diniyah" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">Diniyah Al-Khusyu'</a>
                                        <a href="/pendidikan/tpq" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">TPQ Al-Khusyu'</a>
                                        <a href="/pendidikan/bq" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">BQ Kids Al-Khusyu'</a>
                                        <a href="/pendidikan/sanggar" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">Sanggar Al-Qur'an Al-Khusyu'</a>

                                        <div className="text-sm font-medium text-[#63817E] mb-2 mt-4">Lembaga Sosial</div>
                                        <a href="/pendidikan/lksa" className="block py-2 pl-4 text-gray-600 hover:text-[#63817E] hover:bg-gray-50 rounded">LKSA Al-Khusyu'</a>
                                    </div>
                                )}
                            </div>

                            <a
                                className={`block py-3 px-4 rounded-lg font-semibold transition-colors ${
                                    isActive("/kegiatan") ? "bg-[#63817E] text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                                href="/kegiatan"
                            >
                                Kegiatan
                            </a>
                            <a
                                className={`block py-3 px-4 rounded-lg font-semibold transition-colors ${
                                    isActive("/program") ? "bg-[#63817E] text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                                href="/program"
                            >
                                Program
                            </a>
                            <a
                                className={`block py-3 px-4 rounded-lg font-semibold transition-colors ${
                                    isActive("/prestasi") ? "bg-[#63817E] text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                                href="/prestasi"
                            >
                                Prestasi & Karya
                            </a>
                        </nav>

                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
                            <div className="font-manrope text-sm font-medium text-center text-gray-600">
                                <div>Mendidik dengan Hati,</div>
                                <div>Membina dengan Iman</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
