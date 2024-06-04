import { css } from "@emotion/react";

export default function TopBar() {
  return <div css={topBarWrapperCSS}>topbar</div>;
}

const topBarWrapperCSS = css`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--gray-color-1);
  height: 60px;
  border-radius: 10px 0px 0px 0px;
  color: var(--default-white-color);
  padding: 10px;
`;
