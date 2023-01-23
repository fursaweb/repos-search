import React, { ReactElement } from "react";
import ListItem, { IListItem } from "./ListItem";

export interface IResultsList {
  list: Array<IListItem>;
  addToFavorite: (itemId: number) => void;
}

const ResultsList = ({ list, addToFavorite }: IResultsList): ReactElement => {
  return (
    <ul className="results-list">
      <h2>List of repos</h2>
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
            addToFavorite={addToFavorite}
          />
        ))}
    </ul>
  );
};

export default ResultsList;
