import { ReactNode } from "react";
import { ProfileProvider } from "./Profile/Profile";
import { IssuesProvider } from "./Issues/Issues";

interface ContextProps {
  children: ReactNode;
}

export function Context(props: ContextProps) {
  const { children } = props;

  return (
    <IssuesProvider>
      <ProfileProvider>{children}</ProfileProvider>
    </IssuesProvider>
  );
}
