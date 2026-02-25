import { Issue, ProjectProgress } from "@/components/project-progress";
import { Progress } from "@/components/ui/progress";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["cyrillic"],
});

const MOCK_ISSUE_1: Issue = {
    title: "Create the frontend of the app",
    isCompleted: true,
};
const MOCK_ISSUE_2: Issue = {
    title: "Create the backend of the app",
    isCompleted: false,
};
const MOCK_ISSUE_3: Issue = {
    title: "Connect both of the apps",
    isCompleted: false,
};

const MOCK_ISSUES = [MOCK_ISSUE_1, MOCK_ISSUE_2, MOCK_ISSUE_3];

export default function Home() {
    return (
        <div
            className={`bg-background flex h-screen w-full items-center justify-center ${pressStart2P.className} `}
        >
            <ProjectProgress text="Project Progress" issues={MOCK_ISSUES} />
        </div>
    );
}
