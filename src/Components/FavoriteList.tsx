import React, { ReactElement, FC } from "react";
import ListItem from "./ListItem";
import { IRepo } from "../types/types";

interface FavoriteListProps {
  list: Array<IRepo>;
}

const FavoriteList: FC<FavoriteListProps> = React.memo(
  ({ list }): ReactElement => {
    return (
      <ul className="results-list">
        <h2>Favorite repos</h2>
        {list.length > 0 &&
          list?.map((item: IRepo) => (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              avatar={item.owner?.avatar_url}
              description={item.description}
              language={item.language}
              url={item.html_url}
              isFavorite
            />
          ))}
      </ul>
    );
  }
);

export default FavoriteList;
