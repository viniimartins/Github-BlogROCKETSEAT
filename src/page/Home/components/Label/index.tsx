import { LabelHTMLAttributes } from "react";
import { LabelContainer } from "./style";

interface Props extends LabelHTMLAttributes<Props> {
  htmlFor: string;
}

export function Label(props: Props) {
  const { children, htmlFor } = props;

  return <LabelContainer htmlFor={htmlFor}>{children}</LabelContainer>;
}
