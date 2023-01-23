import React, { ChangeEvent, ReactElement, useState } from "react";

interface ISearchField {
  setResults: (arr: []) => void;
}

const SearchField = ({ setResults }: ISearchField): ReactElement => {
  const [value, setValue] = useState<string>("");

  const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getResults(e.target.value);
  };

  const getResults = async (query: string) => {
    if (query.length > 0) {
      const res = await fetch(
        `https://api.github.com/search/repositories?q={${query}}`
      );
      const data = await res.json();
      const list = data.items.map((item: any) => {
        return {
          name: item.name,
          avatar: item.owner.avatar_url,
          id: item.id,
          description: item.description,
          url: item.html_url,
          language: item.language,
          isFavorite: false,
        };
      });
      setResults(list);
    }
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
