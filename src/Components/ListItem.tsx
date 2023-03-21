import React, { ReactElement, memo, FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addToFavorite, removeFromFavorites } from "../features/reposSlice";
import { IRepo } from "../types/types";

interface ListItemProps {
  name: string;
  avatar: string;
  description: string;
  url: string;
  language: string;
  id: number;
  isFavorite?: boolean;
}

const ListItem: FC<ListItemProps> = memo(
  ({
    name,
    avatar,
    description,
    url,
    language,
    id,
    isFavorite,
  }): ReactElement => {
    const dispatch = useAppDispatch();
    const repositoryList = useAppSelector((state) => state.repos.repos);
    const favoriteList = useAppSelector((state) => state.repos.favoriteRepos);

    const addRepoToFavorites = () => {
      const item: IRepo[] = repositoryList.filter(
        (repo: IRepo) => repo.id === id
      );
      dispatch(addToFavorite(item[0]));
    };

    const removeRepoFromFavorites = () => {
      const itemIndex: number = favoriteList.findIndex(
        (repo: IRepo) => repo.id === id
      );
      dispatch(removeFromFavorites(itemIndex));
    };

    return (
      <li className="list-item">
        <div className="inner-wrapper">
          <figure className="avatar">
            <img src={avatar} alt="User avatar" />
          </figure>
          <div>
            <h4 className="item-heading">
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </h4>
            <p className="description">{description}</p>
            <p className="lang">Project lang: {language}</p>
          </div>
        </div>
        {!isFavorite ? (
          <button type="button" className="button" onClick={addRepoToFavorites}>
            "Add to favorites"
          </button>
        ) : (
          <button
            type="button"
            className="button"
            onClick={removeRepoFromFavorites}
          >
            "Remove from favorites"
          </button>
        )}
      </li>
    );
  }
);

export default ListItem;
