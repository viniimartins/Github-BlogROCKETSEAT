import { useProfile } from "@/context/Profile/Profile";
import { Label } from "./components/Label";
import { Post } from "./components/Post";
import { ProfileComponent } from "./components/Profile";

import { Search } from "./components/Search";

import {
  HomeContainer,
  LabelContainer,
  PostContainer,
  SearchContainer,
} from "./style";
import { useIssues } from "@/context/Issues/Issues";
import { useLayoutEffect } from "react";
import { Loading } from "./components/Loading";

export function Home() {
  const { profileData } = useProfile();

  const { issuesData, isLoading, featchIssuesData, getPosts } = useIssues();

  useLayoutEffect(() => {
    featchIssuesData();
  }, []);

  return (
    <HomeContainer>
      <ProfileComponent profile={profileData} />
      <SearchContainer>
        <LabelContainer>
          <Label htmlFor="search">Publicações</Label>
          <span>{issuesData.length} publicações</span>
        </LabelContainer>

        <Search id="search" placeholder="Buscar conteúdo" getPosts={getPosts} />
      </SearchContainer>

      {isLoading ? (
        <Loading />
      ) : (
        <PostContainer>
          {issuesData.map((post) => {
            const { ...rest } = post;

            return <Post post={post} key={post.number} {...rest} />;
          })}
        </PostContainer>
      )}
    </HomeContainer>
  );
}
