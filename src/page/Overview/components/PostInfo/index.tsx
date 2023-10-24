import {
  PostInfoContainer,
  PostInfoDescription,
  PostInfoHeader,
  PostInfoFooter,
  PostInfoHeaderLink,
  ContainerLink,
} from "./style";

import arrow from "../../../../assets/icons/arrow.svg";
import link from "../../../../assets/icons/link.svg";

import github from "../../../../assets/icons/github.svg";
import calendar from "../../../../assets/icons/calendar.svg";
import commentsgit from "../../../../assets/icons/comments.svg";
import { IssuesPost } from "@/context/Issues/types";

interface Props {
  postInfo: IssuesPost;
}

export function PostInfo({ postInfo }: Props) {
  const { title, created_at, html_url, user, comments } = postInfo;

  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <PostInfoHeaderLink to="/">
          <img src={arrow} alt="github" />
          VOLTAR
        </PostInfoHeaderLink>

        <ContainerLink to={html_url}>
          VER NO GITHUB
          <img src={link} alt="github" />
        </ContainerLink>
      </PostInfoHeader>
      <PostInfoDescription>
        <h3>{title}</h3>
      </PostInfoDescription>
      <PostInfoFooter>
        <span>
          <img src={github} alt="github" />
          {user.login}
        </span>
        <span>
          <img src={calendar} alt="calendar" />
          Há {created_at} dia
        </span>
        <span>
          <img src={commentsgit} alt="comments" />
          {comments} comentários
        </span>
      </PostInfoFooter>
    </PostInfoContainer>
  );
}
