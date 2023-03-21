import { IRepo } from "./types/types";

export const getRepos = async (query: string): Promise<IRepo[]> => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q={${query}}`
  );
  const data = await response.json();
  // const list = data.items.map((item: any) => {
  //   return {
  //     name: item.name,
  //     avatar: item.owner.avatar_url,
  //     id: item.id,
  //     description: item.description,
  //     url: item.html_url,
  //     language: item.language,
  //     isFavorite: false,
  //   };
  // });
  return data;
};
