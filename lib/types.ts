export interface Issue {
    title: string;
    isCompleted: boolean;
}

export interface GithubIssue {
    state: "open" | "closed" | "all";
    title: "string";
}
