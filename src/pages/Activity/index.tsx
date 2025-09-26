import {Headline} from "@/pages/Activity/Headline";
import Other from "@/pages/Activity/Other";

export function Activity() {
    return (
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 md:px-8">
            <Headline/>
            <Other/>
        </div>
    )
}