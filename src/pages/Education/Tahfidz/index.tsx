import Headline from "@/pages/Education/Component/Headline.tsx";
import {Mission} from "@/pages/Education/Component/Mission.tsx";
import {Activity} from "@/pages/Education/Component/Activity.tsx";
import Organization from "@/pages/Education/Component/Organization.tsx";
import {Facility} from "@/pages/Education/Component/Facility.tsx";
import {Achievement} from "@/pages/Education/Component/Achievement.tsx";

export default function Tahfidz() {
    const imageList = [
        {image: "/image/h-pendidikan.png"},
        {image: "/image/h-pendidikan.png"},
        {image: "/image/h-pendidikan.png"},
        {image: "/image/h-pendidikan.png"},
    ]

    return (
        <div className="flex flex-col gap-16 px-8 my-8">
            <Headline
            name={"PONDOK TAHFIDZ BQ AL-KHUSYU'"}
            summary={"Pondok Tahfidz BQ AL-KHUSYU hadir sebagai lembaga pendidikan dasar yang membekali peserta didik\n" +
                "                    dengan akhlak mulia, nilai-nilai Islam, dan pengetahuan umum, serta siap menghadapi tantangan masa\n" +
                "                    depan dengan kepribadian yang kuat."}
            imageList={imageList}
            teacherCount={17}
            studentCount={112}
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