import { IssuesPost } from "@/context/Issues/types";
import { ContainerPost } from "./styles";

interface Props {
  post: IssuesPost;
}

export function Post({ post }: Props) {
  const { number, title, body } = post;

  return (
    <ContainerPost to={`/overview/${number}`}>
      <div>
        <h3>{title}</h3>
        <time>Há 1 dia</time>
      </div>
      <p>{body}</p>
    </ContainerPost>
  );
}
