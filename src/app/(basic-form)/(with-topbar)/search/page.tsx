"use client";
import { getSearchResultAPI } from "@/api/search/getSearchResultAPI";
import Track from "@/components/Search/Track";
import Spinner from "@/components/common/loading/Spinner";
import SearchBar from "@/components/common/nav/SearchBar";
import useDebounce from "@/hooks/useDebounce";
import useIntersectionObserver from "@/hooks/useIntersectoinObserver";

import { css } from "@emotion/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef, useState } from "react";

export default function SearchPage() {
  const [searchVal, setSearchVal] = useState("");
  const ITEMS_PER_PAGE = 10;
  const observerRef = useRef(null);
  const handleSearchVal = (val: string) => {
    setSearchVal(val);
  };

  // Debounce
  const debouncedSearchVal = useDebounce(searchVal, 500);

  // Data(Infinite)
  const handleSearchForInfinite = async (
    q: string,
    limit: number,
    offset: number
  ) => {
    const response = await getSearchResultAPI({
      q: q,
      type: ["track"],
      market: "KR",
      limit: limit,
      offset: offset,
    });
    return response;
  };

  const {
    data: searchResults,
    isLoading,
    isError,
    error,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["searchInfinite", { searchVal: debouncedSearchVal }],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      handleSearchForInfinite(debouncedSearchVal, ITEMS_PER_PAGE, pageParam),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      let nextOffset = lastPageParam + ITEMS_PER_PAGE;
      return nextOffset;
    },
    enabled: !!debouncedSearchVal.trim(),
  });

  // Infinite Scroll
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const lastPage = searchResults?.pages[searchResults.pages.length - 1];
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          lastPage &&
          lastPage.tracks.items.length > 0
        ) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, searchResults?.pages]
  );

  useIntersectionObserver({
    target: observerRef,
    onObserverCallback: observerCallback,
  });

  return (
    <div css={searchPageWrapperCSS}>
      <SearchBar onSearch={handleSearchVal} />
      <div css={searchWrapperCSS}>
        {/* DATA EXIST */}
        {searchResults?.pages ? (
          <div css={partWrapperCSS}>
            <div css={titleCSS}>곡</div>
            {searchResults.pages.map((page, pageIdx) => (
              <div key={pageIdx}>
                {page.tracks && (
                  <div>
                    {/* TRACK 데이터 */}
                    {page.tracks.items.length !== 0 ? (
                      <div>
                        {page.tracks.items.map((item, idx) => (
                          <Track key={idx} track={item} />
                        ))}
                      </div>
                    ) : (
                      <div css={emtpyDescriptionCSS}>검색된 곡이 없습니다.</div>
                    )}
                  </div>
                )}
              </div>
            ))}
            {/* 무한 스크롤 LOADING */}
            <div ref={observerRef}>{isFetching && <Spinner />}</div>
          </div>
        ) : (
          <>
            {/* LOADING */}
            {isLoading && <Spinner />}
            {/* EMPTY */}
            {!searchResults && !isLoading && !isError && (
              <div css={titleCSS}>검색하지 않아서 기본형태</div>
            )}
            {/* ERROR */}
            {isError && (
              <div css={titleCSS}>
                {error.message}와 같은 에러가 발생했습니다.
              </div>
            )}
          </>
        )}
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
