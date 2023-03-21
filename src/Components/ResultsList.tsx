import React, { ReactElement, FC } from "react";
import ListItem from "./ListItem";
import { IRepo } from "../types/types";

interface ResultsListProps {
  list: Array<IRepo>;
}

const ResultsList: FC<ResultsListProps> = ({ list }): ReactElement => {
  return (
    <ul className="results-list">
      <h2>List of repos</h2>
      {list?.length > 0 &&
        list.map((item: IRepo) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            avatar={item.owner.avatar_url}
            description={item.description}
            language={item.language}
            url={item.html_url}
          />
        ))}
    </ul>
  );
};

export default ResultsList;
