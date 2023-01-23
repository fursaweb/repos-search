import React, { useEffect, useState } from "react";

import SearchField from "./Components/SearchField";
import ResultsList from "./Components/ResultsList";
import FavoriteList from "./Components/FavoriteList";
import { IListItem } from "./Components/ListItem";

import "./App.css";

function App() {
  const [repositoryList, setRepositoryList] = useState<IListItem[]>([]);
  const [favoriteList, setFavoriteList] = useState<IListItem[]>([]);
  const setResults = (list: IListItem[]) => {
    setRepositoryList(list);
  };

  const addToFavorite = (itemId: number) => {
    const item = repositoryList.filter((repo: IListItem) => repo.id === itemId);
    item[0].isFavorite = true;
    const list = [...favoriteList, ...item];
    setFavoriteList(list);
    localStorage.setItem("favoriteList", JSON.stringify(list));
  };

  const loadFavorites = () => {
    const serializedState = localStorage.getItem("favoriteList");
    if (serializedState === null) {
      return undefined;
    } else {
      setFavoriteList(JSON.parse(serializedState));
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="wrapper">
      <SearchField setResults={setResults} />
      <div className="grid">
        <div className="col">
          {repositoryList.length > 0 && (
            <ResultsList list={repositoryList} addToFavorite={addToFavorite} />
          )}
        </div>
        <div className="col">
          {favoriteList.length > 0 && <FavoriteList list={favoriteList} />}
        </div>
      </div>
    </div>
  );
}

export default App;
