"use client";
import { fetchIssues } from "@/app/lib/actions";
import { Issue, ProjectProgress } from "@/components/project-progress";
import { GithubIssue } from "@/lib/types";
import { Press_Start_2P } from "next/font/google";
import { useEffect, useState } from "react";

const githubIssuesToIssues = (githubIssue: GithubIssue) => {
    const issue: Issue = {
        title: githubIssue.title,
        isCompleted: githubIssue.state === "closed",
    };
    return issue;
};

export default function ProgressPage() {
    const [issues, setIssues] = useState<Issue[]>();
    const fetchData = async () => {
        const newIssues = await fetchIssues();
        setIssues(newIssues);
    };
    useEffect(() => {
        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId);
    }, []);

    if (!issues) {
        return "No Issues";
    }

    return (
        <div className={`flex h-screen w-full items-center justify-center`}>
            <ProjectProgress text="Project Progress" issues={issues} />
        </div>
    );
}
