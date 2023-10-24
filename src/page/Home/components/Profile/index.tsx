import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  DescriptionContainer,
  ProfileFooter,
  ProfileImg,
  PostHeaderLink,
} from "./styles";

import link from "../../../../assets/icons/link.svg";
import github from "../../../../assets/icons/github.svg";
import work from "../../../../assets/icons/work.svg";
import follow from "../../../../assets/icons/follow.svg";
import { Profile } from "@/context/Profile/types";

interface Props {
  profile: Profile;
}

export function ProfileComponent({ profile }: Props) {
  const { avatar_url, bio, company, followers, html_url, login, name } =
    profile;

  return (
    <ProfileContainer>
      <ProfileImg src={avatar_url} alt="Avatar Imagem" />
      <DescriptionContainer>
        <div>
          <ProfileHeader>
            <h2>{name}</h2>
            <PostHeaderLink to={html_url}>
              github
              <img src={link} alt="link" />
            </PostHeaderLink>
          </ProfileHeader>

          <ProfileContent>{bio}</ProfileContent>
        </div>

        <ProfileFooter>
          <span>
            <img src={github} alt="github" />
            {login}
          </span>
          <span>
            <img src={work} alt="work" />
            {company}
          </span>
          <span>
            <img src={follow} alt="work" />
            {followers} seguidores
          </span>
        </ProfileFooter>
      </DescriptionContainer>
    </ProfileContainer>
  );
}
