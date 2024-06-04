"use client";
import Track from "@/components/Search/Track";
import Spinner from "@/components/common/loading/Spinner";
import SearchBar from "@/components/common/nav/SearchBar";
import SearchBarWithTanstack from "@/components/common/nav/SearchBarWithTanstack";
import { css } from "@emotion/react";
import { useState } from "react";

export default function SearchPage() {
  const [searchResults, setSearchResults] =
    useState<SearchResponseTypes | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleSearchResults = (results: SearchResponseTypes | null) => {
    setSearchResults(results);
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  console.log(isLoading, searchResults);

  return (
    <div css={searchPageWrapperCSS}>
      <SearchBarWithTanstack
        onSearchResults={handleSearchResults}
        onLoadingChange={handleLoadingChange}
      />
      {/* <SearchBar onSearchResults={handleSearchResults} /> */}
      <div css={searchWrapperCSS}>
        {/* Loading */}
        {isLoading && <Spinner />}
        {/* empty */}
        {!searchResults && !isLoading && <div css={titleCSS}>EMPTY</div>}
        {/* tracks */}
        {searchResults && searchResults.tracks && (
          <div css={partWrapperCSS}>
            <div css={titleCSS}>곡</div>
						{/* 실제 TRACK 데이터 */}
            {searchResults.tracks.items?.length !== 0 ? (
              <div css={trackListWrapperCSS}>
                {searchResults.tracks.items?.map((item, idx) => (
                  <Track key={idx} track={item} />
                ))}
              </div>
            ) : (
              <div css={emtpyDescriptionCSS}>검색된 곡이 없습니다.</div>
            )}
          </div>
        )}
        {/* artists */}
      </div>
    </div>
  );
}

const searchPageWrapperCSS = css`
  position: relative;
  height: 100%;
  border-radius: 10px;
  background-color: var(--gray-color-1);
  overflow-y: auto;
  overflow-x: hidden;
  color: var(--default-white-color);
`;

const searchWrapperCSS = css`
  padding: 20px;
`;

const partWrapperCSS = css`
  margin-bottom: 40px;
`;

const titleCSS = css`
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  padding: 0px 10px;
  margin-bottom: 20px;
`;

const emtpyDescriptionCSS = css`
  padding: 0px 10px;
	font-size: var(--font-size-h6);
`;
const trackListWrapperCSS = css``;
