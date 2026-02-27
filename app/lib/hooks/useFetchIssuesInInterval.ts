"use client";
import { Issue } from "@/lib/types";
import { useState, useEffect } from "react";
import { fetchIssues } from "../actions";

export function useFetchIssuesInInterval(intervalInMs: number) {
    const [issues, setIssues] = useState<Issue[]>();
    const fetchData = async () => {
        const newIssues = await fetchIssues();
        setIssues(newIssues);
    };
    useEffect(() => {
        const intervalId = setInterval(fetchData, intervalInMs ?? 5000);

        return () => clearInterval(intervalId);
    }, []);

    return issues;
}
