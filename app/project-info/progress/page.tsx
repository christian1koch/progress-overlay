"use client";
import { fetchIssues } from "@/app/lib/actions";
import { useFetchIssuesInInterval } from "@/app/lib/hooks/useFetchIssuesInInterval";
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
    const issues = useFetchIssuesInInterval(10000);

    if (!issues) {
        return "No Issues";
    }

    return (
        <div className={`flex h-screen w-full items-center justify-center`}>
            <ProjectProgress text="Project Progress" issues={issues} />
        </div>
    );
}
