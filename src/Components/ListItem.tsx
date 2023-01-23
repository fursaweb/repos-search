import React, { ReactElement } from "react";

export interface IListItem {
  name: string;
  avatar: string;
  description: string;
  url: string;
  language: string;
  id: number;
  isFavorite: boolean;
  addToFavorite?: (itemId: number) => void;
}

const ListItem = ({
  name,
  avatar,
  description,
  url,
  language,
  id,
  isFavorite,
  addToFavorite,
}: IListItem): ReactElement => {
  const clickHandle = () => {
    if (addToFavorite) addToFavorite(id);
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

      {!isFavorite && (
        <button type="button" className="button" onClick={clickHandle}>
          Add to favorite
        </button>
      )}
    </li>
  );
};

export default ListItem;
