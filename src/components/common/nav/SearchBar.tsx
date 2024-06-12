import { css } from "@emotion/react";
import React, { ChangeEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (q: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchVal, setSearchVal] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    onSearch(val.trim());
  };

  return (
    <div css={searchBarWrapperCSS}>
      <input
        id="searchBar"
        css={inputCSS}
        value={searchVal}
        onChange={handleInputChange}
        placeholder="검색어를 입력해주세요"
      />
    </div>
  );
};

export default React.memo(SearchBar);

const searchBarWrapperCSS = css`
  position: sticky;
  top: 0;
  width: 100%;

  background-color: var(--gray-color-1);
  width: calc(100% + 15px);
  height: 60px;
  border-radius: 10px 10px 0px 0px;
  color: var(--default-white-color);
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px;
`;

const inputCSS = css`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 10px;
`;
