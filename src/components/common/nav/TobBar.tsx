import { css } from "@emotion/react";

export default function TobBar() {
  return <div css={topBarWrapperCSS}>topbar</div>;
}

const topBarWrapperCSS = css`
  background-color: var(--gray-color-1);
  height: 60px;
  border-radius: 10px 10px 0px 0px;
  color: var(--default-white-color);
`;
