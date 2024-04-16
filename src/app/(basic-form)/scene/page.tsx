"use client";
import { css } from "@emotion/react";

// 1. typography로 한번 애니메이션
// 2. grid 제대로 적용
// 3. playBar도 흐리게 필요할듯?
export default function ScenePage() {
  return (
    <div css={scenePageWrapper}>
      <div css={gridContainer}>
        <div css={gridItem1}>Item 1</div>
        <div css={gridItem2}>Item 2</div>
        <div css={gridItem3}>Item 3</div>
        <div css={gridItem4}>Item 4</div>
        <div css={gridItem5}>Item 5</div>
        <div css={gridItem6}>Item 6</div>
        <div css={gridItem7}>Item 7</div>
        <div css={gridItem8}>Item 8</div>
        <div css={gridItem9}>Item 9</div>
        <div css={gridItem10}>Item 10</div>
      </div>
    </div>
  );
}

const scenePageWrapper = css`
  height: 100%;
  background-color: var(--default-black-color);
  color: var(--default-white-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const gridContainer = css`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr 1fr; 
  grid-template-rows: 2fr 2fr 4fr 2fr 3fr ;
  gap: 5px;
  width: 100%;
  height: 100%;
`;

const gridItem = css`
  padding: 20px;
  background-color: var(--default-red-color);
  color: var(--default-white-color);
  text-align: center;
`;

const gridItem1 = css`
  ${gridItem}
  grid-column: span 1;
  grid-row: span 1;
`;

const gridItem2 = css`
  ${gridItem}
  grid-column: span 1;
  grid-row: span 2;
`;

const gridItem3 = css`
  ${gridItem}
  grid-column: span 1;
  grid-row: span 1;
`;

const gridItem4 = css`
  ${gridItem}
  grid-column: span 1;
  grid-row: span 2;
`;

const gridItem5 = css`
  ${gridItem}
  grid-column: span 1;
  grid-row: span 2;
`;

const gridItem6 = css`
  ${gridItem}
  grid-column: span 1;
  grid-row: span 3;
`;

const gridItem7 = css`
  ${gridItem}
  grid-column: span 2;
  grid-row: span 2;
`;

const gridItem8 = css`
  ${gridItem}
  grid-column: span 1;
  grid-row: span 2;
`;

const gridItem9 = css`
  ${gridItem}
  grid-column: span 2;
  grid-row: span 1;
`;

const gridItem10 = css`
  ${gridItem}
  grid-column: span 2;
  grid-row: span 1;
`;
