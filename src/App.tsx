import React from "react";
import { useAppSelector } from "./hooks";
import SearchField from "./Components/SearchField";
import ResultsList from "./Components/ResultsList";
import FavoriteList from "./Components/FavoriteList";

import "./App.css";

function App() {
  const { repos, isLoading, error, favoriteRepos } = useAppSelector(
    (state) => state.repos
  );

  return (
    <div className="wrapper">
      <SearchField />
      <div className="grid">
        <div className="col">
          {error && <h3>{error}</h3>}
          {isLoading ? <h3>Loading...</h3> : <ResultsList list={repos} />}
        </div>
        <div className="col">
          {favoriteRepos.length > 0 && <FavoriteList list={favoriteRepos} />}
        </div>
      </div>
    </div>
  );
}

export default App;
