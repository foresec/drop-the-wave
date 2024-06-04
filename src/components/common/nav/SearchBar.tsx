import { getSearchResultAPI } from "@/api/search/getSearchResultAPI";
import { css } from "@emotion/react";
import { ChangeEvent, useEffect, useState } from "react";

interface SearchBarProps {
  onSearchResults: (results: any) => void;
}

export default function SearchBar({ onSearchResults }: SearchBarProps) {


  const [searchVal, setSearchVal] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
  };

  const handleSearch = async (q: string) => {
    try {
      const response = await getSearchResultAPI({
        q: q,
        type: ["track", "artist"],
        market: "KR",
        limit: 10,
        offset: 0,
      });
      onSearchResults(response);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (searchVal !== "") handleSearch(searchVal);
  }, [searchVal]);



  return (
    <div css={searchBarWrapperCSS}>
      <input
        css={inputCSS}
        value={searchVal}
        onChange={handleInputChange}
        placeholder="검색어를 입력해주세요"
      />
    </div>
  );
}

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
