export interface Issue {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface GithubIssue {
    id: number;
    state: string;
    title: string;
}
