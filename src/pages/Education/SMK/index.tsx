import Headline from "@/pages/Education/Component/Headline.tsx";
import {Mission} from "@/pages/Education/Component/Mission.tsx";
import {Activity} from "@/pages/Education/Component/Activity.tsx";
import Organization from "@/pages/Education/Component/Organization.tsx";
import {Facility} from "@/pages/Education/Component/Facility.tsx";
import {Achievement} from "@/pages/Education/Component/Achievement.tsx";

export default function SMK() {
    const imageList = [
        {image: "/image/h-pendidikan.png"},
        {image: "/image/h-pendidikan.png"},
        {image: "/image/h-pendidikan.png"},
        {image: "/image/h-pendidikan.png"},
    ]

    return (
        <div className="flex flex-col gap-16 px-8 my-8">
            <Headline
                name={"SMK PONDOK PESANTREN Al-Khusyu’"}
                summary={"SMK Pondok Pesantren AL-KHUSYU merupakan lembaga yang memadukan kurikulum umum dan pendidikan Islam berbasis pesantren, guna membentuk generasi yang beriman, berilmu, berakhlak mulia."}
                imageList={imageList}
                teacherCount={25}
                studentCount={97}
            />
            <Mission
                name={"MI AL-KHUSYU’"}
                vision={"Menjadi lembaga pendidikan Islam yang unggul dalam menanamkan akhlak dan kecintaan kepada Al-Qur’an sejak usia dini."}
                mission={"Mewujudkan pendidikan anak yang menyenangkan, religius, dan berkarakter melalui metode bermain sambil belajar sesuai ajaran Islam."}
            />
            <Activity/>
            <Organization/>
            <Facility/>
            <Achievement/>
        </div>
    )
}