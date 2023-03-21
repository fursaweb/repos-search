import React, { ChangeEvent, ReactElement, useState, FC } from "react";
import { useAppDispatch } from "../hooks";
import { fetchRepos } from "../features/reposSlice";

const SearchField: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const getResults = async (query: string) => {
    if (query.length > 0) {
      dispatch(fetchRepos(query));
    }
  };

  const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getResults(e.target.value);
  };

  return (
    <form action="" className="form">
      <input
        type="text"
        className="search-field"
        onChange={changeHandle}
        value={value}
        placeholder="Start enter"
      />
    </form>
  );
};

export default SearchField;
