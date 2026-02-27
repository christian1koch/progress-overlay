"use client";
import { Issue, ProjectProgress } from "@/components/project-progress";
import { Press_Start_2P } from "next/font/google";
import { useEffect, useState } from "react";

interface GithubIssue {
    state: "open" | "closed" | "all";
    title: "string";
}

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

const githubIssuesToIssues = (githubIssue: GithubIssue) => {
    const issue: Issue = {
        title: githubIssue.title,
        isCompleted: githubIssue.state === "closed",
    };
    return issue;
};

const MOCK_ISSUES = [MOCK_ISSUE_1, MOCK_ISSUE_2, MOCK_ISSUE_3];

export default function Home() {
    const [issues, setIssues] = useState<Issue[]>();
    const fetchData = async () => {
        const data = await fetch(
            "https://api.github.com/repos/christian1koch/progress-overlay/issues?state=all",
            {
                cache: "no-store",
            }
        );
        const githubIssues = (await data.json()) as GithubIssue[];

        const newIssues = githubIssues.map(githubIssuesToIssues);
        setIssues(newIssues);
    };
    useEffect(() => {
        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId);
    }, []);

    if (!issues) {
        return null;
    }

    return (
        <div
            className={`flex h-screen w-full items-center justify-center ${pressStart2P.className} `}
        >
            <ProjectProgress text="Project Progress" issues={issues} />
        </div>
    );
}
