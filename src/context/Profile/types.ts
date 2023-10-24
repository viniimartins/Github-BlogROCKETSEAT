import { ReactNode } from "react";

export interface ProfileContextData {
  fetchProfileData: () => void;
  profileData: Profile
}

export interface ProfileProviderProps {
  children: ReactNode;
}

export interface Profile {
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
  avatar_url: string;
  html_url: string;
}
