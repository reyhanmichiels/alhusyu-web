import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

// Constants
const COLORS = {
    primary: "#7E99C4",
    textMuted: "#757575",
    textSecondary: "#818181",
} as const;

// Styles
const styles = {
    section: "h-screen flex flex-col px-12 py-24 bg-white",
    contentWrapper: "flex-1 flex justify-between items-start gap-8",
    title: cn(
        "ulm-font font-[800]",
        "text-[94.76px] leading-[100%] tracking-[0%]"
    ),
    description: cn(
        "font-manrope font-[200]",
        "text-[28px] leading-[41.47px] tracking-[0%]"
    ),
    actionButton: cn(
        "w-[208px] h-[55.61px] rounded-[43.33px]",
        "transition-transform hover:scale-105"
    ),
    visualSection: cn(
        "relative w-full max-w-[1738px] h-[628px]",
        "mx-auto mt-[64px] mb-[32px] rounded-[30px]",
        "bg-gradient-to-br from-sky-100 to-white shadow-inner"
    ),
};

// Types
interface HeroContent {
    title: string;
    subtitle: string[];
    description: string;
    ctaText: string;
}

const heroContent: HeroContent = {
    title: "AL-KHUSYU",
    subtitle: [
        "Terpercaya membina generasi Qurani",
        "yang cerdas dan berakhlak sejak dini.",
    ],
    description:
        "Lembaga pendidikan berbasis Islam yang menyelenggarakan program pembelajaran terpadu dari TPQ, SD, SMP, hingga SMK serta Pondok Tahfidz.",
    ctaText: "Jelajahi",
};

export default function HeroSection() {
    return (
        <section className={styles.section}>
            <div className={styles.contentWrapper}>
                {/* Left content */}
                <div className="space-y-4">
                    <h1 className={styles.title} style={{color: COLORS.primary}}>
                        {heroContent.title}
                    </h1>
                    <div
                        className={styles.description}
                        style={{color: COLORS.textMuted}}
                    >
                        {heroContent.subtitle.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>

                {/* Right content */}
                <div className="max-w-md text-sm text-muted-foreground space-y-4">
                    <p
                        className={styles.description}
                        style={{color: COLORS.textSecondary}}
                    >
                        {heroContent.description}
                    </p>
                    <Button
                        className={styles.actionButton}
                        style={{backgroundColor: COLORS.primary}}
                    >
                        {heroContent.ctaText}
                        <ArrowRight className="w-4 h-4 ml-2"/>
                    </Button>
                </div>
            </div>

            {/* Visual section */}
            <div className="container px-6">
                <div className={styles.visualSection}/>
            </div>
        </section>
    );
}