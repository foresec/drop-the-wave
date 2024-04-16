"use client";
import { css } from "@emotion/react";

export default function HomePage() {
  return (
    <div css={homePageWrapperCSS}>
      {/* <h1>Home</h1> */}
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
  );
}

const homePageWrapperCSS = css`
  height: 100%;
  background-color: var(--gray-color-2);
  border-radius: 0px 0px 10px 10px;
  padding: 5px;
`;

const themeWrapperCSS = css`
  padding: 10px;
`;

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
