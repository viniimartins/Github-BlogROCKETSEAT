import { useParams } from "react-router-dom";
import { PostInfo } from "./components/PostInfo";
import { OverviewContainer } from "./style";
import { useIssues } from "@/context/Issues/Issues";
import { useEffect } from "react";
import { Loading } from "../Home/components/Loading";
import { Content } from "./components/Content";

export function Overview() {
  const { id } = useParams();

  const { fetchIssueById, issuePostDate, isLoading } = useIssues();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();

    fetchIssueById(id as string);
  }, []);

  if (!issuePostDate || isLoading) {
    return <Loading />;
  }

  return (
    <OverviewContainer>
      <PostInfo postInfo={issuePostDate} />

      <Content body={issuePostDate.body} />
    </OverviewContainer>
  );
}
