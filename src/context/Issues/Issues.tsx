import { createContext, useContext, useState, useLayoutEffect } from "react";
import { IssuesContextData, IssuesPost, IssuesProviderProps } from "./types";

import { api } from "@/lib/axios";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

const IssuesContext = createContext({} as IssuesContextData);

export function IssuesProvider(props: IssuesProviderProps) {
  const { children } = props;

  const [issuesData, setIssuesData] = useState<IssuesPost[]>([]);
  const [issuePostDate, setIssueDate] = useState<IssuesPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function featchIssuesData() {
    setIsLoading(true);
    try {
      const response = await api.get(`/repos/${username}/${repoName}/issues`);
      setIssuesData(response.data);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchIssueById(id: string) {
    setIsLoading(true);
    try {
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );
      setIssueDate(response.data);
    } finally {
      setIsLoading(false);
    }
  }

  async function getPosts(query: string = "") {
    setIsLoading(true);
    try {
      const response = await api.get(
        `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`
      );

      setIssuesData(response.data.items);
    } finally {
      setIsLoading(false);
    }
  }

  useLayoutEffect(() => {
    getPosts();
  }, []);

  return (
    <IssuesContext.Provider
      value={{
        featchIssuesData,
        issuesData,
        isLoading,
        fetchIssueById,
        issuePostDate,
        getPosts,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}

export function useIssues() {
  const issues = useContext(IssuesContext);
  return issues;
}
