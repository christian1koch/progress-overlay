import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { GithubIssue, Issue } from "./types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function githubIssuesToIssues<T extends GithubIssue>(githubIssue: T) {
    const issue: Issue = {
        id: githubIssue.id,
        title: githubIssue.title,
        isCompleted: githubIssue.state === "closed",
    };
    return issue;
}
