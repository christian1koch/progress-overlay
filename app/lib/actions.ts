"use server";
import { githubIssuesToIssues } from "@/lib/utils";
import { Octokit } from "@octokit/rest";
export async function fetchIssues() {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });

    // sends request with `Authorization: token mypersonalaccesstoken123` header
    const { data } = await octokit.rest.issues.listForRepo({
        owner: "christian1koch",
        repo: "progress-overlay",
        state: "all",
    });

    const issues = data.map(githubIssuesToIssues);
    return issues;
}
