import { Progress } from "./ui/progress";

//  TODO: Move to colors later
const GREY_AZURE = "#510424";
const CYAN = "oklch(65.6% 0.241 354.308)";
const LIGHT_GREY = "#f7f7f7";

export interface Issue {
    title: string;
    isCompleted: boolean;
}

interface ProjectProgress {
    text: string;
    issues: Issue[];
}
export function ProjectProgress({ text, issues }: ProjectProgress) {
    const completedIssues = issues.filter((issue) => issue.isCompleted);
    const completedText = `${completedIssues.length} / ${issues.length} Tasks completed`;
    return (
        <div className="flex w-full flex-col">
            <p className="text-overlay-primary mb-6 text-5xl">
                Project Progress
            </p>
            <Progress
                value={(completedIssues.length / issues.length) * 100}
                className="h-12"
                indicatorColor={CYAN}
                backgroundColor={GREY_AZURE}
            />
            <p className="text-overlay-white mt-2 text-4xl">{completedText}</p>
        </div>
    );
}
