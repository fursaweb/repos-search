interface IOwner {
  avatar_url: string;
}

export interface IRepo {
  name: string;
  owner: IOwner;
  description: string;
  html_url: string;
  language: string;
  id: number;
  isFavorite: boolean;
}
