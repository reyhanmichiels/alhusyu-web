import {Headline} from "@/pages/Achievement/Headline";
import {Detail} from "@/pages/Achievement/Detail";

export function Achievement() {
    return (
        <div className="flex flex-col gap-8 md:gap-16 px-4 md:px-8 my-4 md:my-8">
            <Headline/>
            <Detail/>
        </div>
    )
}