import {Headline} from "@/pages/Activity/Headline";
import Other from "@/pages/Activity/Other";

export function Activity() {
    return (
        <div className="flex flex-col gap-16 px-8">
            <Headline/>
            <Other/>
        </div>
    )
}