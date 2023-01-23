import React, { ReactElement } from "react";
import ListItem, { IListItem } from "./ListItem";

export interface IFavoriteList {
  list: Array<IListItem>;
}

const FavoriteList = ({ list }: IFavoriteList): ReactElement => {
  return (
    <ul className="results-list">
      <h2>Favorite repos</h2>
      {list.length > 0 &&
        list.map((item: IListItem) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            avatar={item.avatar}
            description={item.description}
            language={item.language}
            url={item.url}
            isFavorite={item.isFavorite}
          />
        ))}
    </ul>
  );
};

export default FavoriteList;
