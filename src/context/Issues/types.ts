import { ReactNode } from "react";

export type IssuesContextData = {
  featchIssuesData: () => void;
  issuesData: IssuesPost[];
  isLoading: boolean;
  fetchIssueById: (id: string) => void;
  issuePostDate: IssuesPost | null;
  getPosts: (query?: string) => void;
};

export type IssuesProviderProps = {
  children: ReactNode;
};

export type IssuesPost = {
  number: string;
  title: string;
  url: string;
  html_url: string;
  created_at: string;
  body: string;
  comments: string;
  user: {
    login: string;
  };
};
