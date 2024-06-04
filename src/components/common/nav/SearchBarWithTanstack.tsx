import { getSearchResultAPI } from "@/api/search/getSearchResultAPI";
import { css } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";
import React, { ChangeEvent, useEffect, useState } from "react";

interface SearchBarProps {
  onSearchResults: (results: SearchResponseTypes | null) => void;
  onLoadingChange: (loading: boolean) => void;
}

function SearchBarWithTanstack({
  onSearchResults,
  onLoadingChange,
}: SearchBarProps) {
  const [searchVal, setSearchVal] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
  };

  const handleSearch = async (q: string) => {
    // if (!q.trim()) {
    //   return { tracks: [], artists: [] };
    // }
    const response = await getSearchResultAPI({
      q: q,
      type: ["track", "artist"],
      market: "KR",
      limit: 10,
      offset: 0,
    });

    return response;
  };

  const {
    data: searchResults,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["search", searchVal],
    queryFn: () => handleSearch(searchVal),
    // searchVal이 존재하는 경우에만 활성화, 빈칸 오류 방지를 위해 trim() 필요
    enabled: !!searchVal.trim(),
  });

  useEffect(() => {
    if (isSuccess && searchVal.trim()) onSearchResults(searchResults);
  }, [searchResults, isSuccess, searchVal, onSearchResults]);

  useEffect(() => {
    if (!searchVal.trim()) onSearchResults(null);
  }, [searchVal, onSearchResults]);

  useEffect(() => {
    onLoadingChange(isLoading);
  }, [isLoading, onLoadingChange]);

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
}

export default React.memo(SearchBarWithTanstack);

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
