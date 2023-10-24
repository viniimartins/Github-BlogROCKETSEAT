import { createContext, useContext, useState, useEffect } from "react";
import { Profile, ProfileContextData, ProfileProviderProps } from "./types";
import { api } from "@/lib/axios";

const ProfileContext = createContext({} as ProfileContextData);

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function ProfileProvider(props: ProfileProviderProps) {
  const { children } = props;

  const [profileData, setProfileData] = useState<Profile>({} as Profile);

  async function fetchProfileData() {
    const response = await api.get(`/users/${username}`);
    setProfileData(response.data);
  }

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <ProfileContext.Provider value={{ fetchProfileData, profileData }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const profile = useContext(ProfileContext);
  return profile;
}
