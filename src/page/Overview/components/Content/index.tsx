import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ContentContainer } from "./style";

interface Props {
  body: string;
}

export function Content(props: Props) {
  const { body } = props;

  return (
    <ContentContainer>
      <ReactMarkdown>{body}</ReactMarkdown>
    </ContentContainer>
  );
}
