"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useFetchIssuesInInterval } from "../lib/hooks/useFetchIssuesInInterval";

export default function ProjectInfoPage() {
    const issues = useFetchIssuesInInterval(10000);
    if (!issues) {
        return;
    }
    const closedIssues = issues.filter((issue) => issue.isCompleted);
    const openIssues = issues.filter((issue) => !issue.isCompleted);
    return (
        <div className="w-full">
            <div className="bg-overlay-secondary flex items-baseline justify-around">
                <h1>Project: Configurable Twitch Overlay</h1>
                <h2 className="text-xs">
                    Github Link: christian1koch/progress-overlay
                </h2>
            </div>
            <div className="flex max-h-32 flex-col flex-wrap text-sm">
                {closedIssues.map((issue) => (
                    <CheckboxWithText title={issue.title} checked={true} />
                ))}
                {openIssues.map((issue) => (
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
