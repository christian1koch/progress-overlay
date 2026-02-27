"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useFetchIssuesInInterval } from "../lib/hooks/useFetchIssuesInInterval";
import Marquee from "@/components/ui/marquee";

export default function ProjectInfoPage() {
    const issues = useFetchIssuesInInterval(10000);

    const closedIssues = issues?.filter((issue) => issue.isCompleted);
    const openIssues = issues?.filter((issue) => !issue.isCompleted);
    return (
        <div className="w-full">
            <div className="flex justify-around">
                <Marquee
                    items={[
                        "Configurable Twitch Overlay",
                        "♣",
                        "Github Link: christian1koch/progress-overlay",
                        "♣",
                    ]}
                />
            </div>
            <div className="flex max-h-32 flex-col flex-wrap text-sm">
                {closedIssues &&
                    closedIssues.map((issue) => (
                        <CheckboxWithText title={issue.title} checked={true} />
                    ))}
                {openIssues &&
                    openIssues.map((issue) => (
                        <CheckboxWithText title={issue.title} checked={false} />
                    ))}
            </div>
        </div>
    );
}

const CheckboxWithText = ({
    title,
    checked,
}: {
    title: string;
    checked: boolean;
}) => (
    <div className="mt-1 flex items-center justify-baseline gap-1">
        <Checkbox checked={checked} />
        {checked ? (
            <p className="text-overlay-white/50 line-through">{title}</p>
        ) : (
            <p>{title}</p>
        )}
    </div>
);
