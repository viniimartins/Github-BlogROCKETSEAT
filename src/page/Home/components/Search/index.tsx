import { InputHTMLAttributes } from "react";
import { SearchFormContainer } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as z from "zod";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  id: string;
  getPosts: (query?: string | undefined) => void;
}

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function Search(props: Props) {
  const { placeholder, id, getPosts } = props;

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchIssues(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input id={id} placeholder={placeholder} {...register("query")} />
    </SearchFormContainer>
  );
}
