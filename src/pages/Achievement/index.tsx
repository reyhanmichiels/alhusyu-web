import {Headline} from "@/pages/Achievement/Headline";
import {Detail} from "@/pages/Achievement/Detail";

export function Achievement() {
    return (
        <div className="flex flex-col gap-16 px-8 my-8">
            <Headline/>
            <Detail/>
        </div>
    )
}