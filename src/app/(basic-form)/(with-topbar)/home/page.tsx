"use client";
import TopBar from "@/components/common/nav/TopBar";
import useSupabaseProviderToken from "@/hooks/login/useSupabaseProviderToken";

import { css } from "@emotion/react";

export default function HomePage() {
  useSupabaseProviderToken();

  return (
    <div css={homePageWrapperCSS}>
      <TopBar />
      <div css={homePageContentCSS}>
        <div css={themeWrapperCSS}>
          <div css={themeTitleCSS}>테마 제목</div>
          <div css={themeDetailWrapperCSS}>
            {[...Array(10)].map((_, index) => (
              <div key={index} css={tmpe2}>
                musicCard
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const homePageWrapperCSS = css`
  position: relative;
  height: 100%;
  border-radius: 10px;
  background-color: var(--gray-color-2);
  overflow-y: auto;
  overflow-x: hidden;
`;

const homePageContentCSS = css`
  padding: 20px;
  margin-bottom: 50px;
`;

const themeWrapperCSS = css``;

const themeTitleCSS = css`
  font-size: var(--font-size-h2);
  color: var(--default-white-color);
`;

const themeDetailWrapperCSS = css`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const tmpe2 = css`
  background-color: var(--default-blue-color);
  width: 180px;
  height: 180px;
  color: white;
  margin: 10px;
  border-radius: 10px;
`;
