"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useFetchIssuesInInterval } from "../lib/hooks/useFetchIssuesInInterval";
import Marquee from "@/components/ui/marquee";

export default function ProjectInfoPage() {
    const issues = useFetchIssuesInInterval(10000);

    const orderedIssues = issues?.sort((a, b) => a.id - b.id);

    const closedIssues = orderedIssues?.filter((issue) => issue.isCompleted);
    const openIssues = orderedIssues?.filter((issue) => !issue.isCompleted);
    return (
        <div className="w-full">
            <div className="flex justify-around">
                <Marquee
                    items={[
                        "Learning how to make youtube videos",
                        "♣",
                        "Github Link: christian1koch",
                        "♣",
                    ]}
                />
            </div>
            <div className="flex max-h-32 flex-wrap gap-4 text-sm">
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
    <div className="mt-1 flex items-center justify-baseline gap-1 font-bold">
        <Checkbox checked={checked} />
        {checked ? (
            <p className="text-overlay-white/50 line-through">{title}</p>
        ) : (
            <p>{title}</p>
        )}
    </div>
);
