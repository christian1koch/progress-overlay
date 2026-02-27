import { Progress } from "./ui/progress";

//  TODO: Move to colors later
const GREY_AZURE = "#365b6d";
const CYAN = "#41c1ba";
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
            <p
                className="text-overlay-primary mb-6 text-5xl"
                style={{ WebkitTextStroke: 3, WebkitTextStrokeColor: "black" }}
            >
                Project Progress
            </p>
            <Progress
                value={50}
                className="h-12"
                indicatorColor={CYAN}
                backgroundColor={GREY_AZURE}
            />
            <p
                className="text-overlay-white mt-2 text-4xl"
                style={{ WebkitTextStroke: 2, WebkitTextStrokeColor: "black" }}
            >
                {completedText}
            </p>
        </div>
    );
}
