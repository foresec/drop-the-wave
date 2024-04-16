import { css } from "@emotion/react";

export default function PlayBar() {
  return (
    <div css={musicBarWrapperCSS}>
      <div css={playBarWrapperCSS}>PlayBar</div>
    </div>
  );
}

const musicBarWrapperCSS = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--default-white-color);
  background-color: var(--default-black-color);
  padding: 10px;
`;

const playBarWrapperCSS = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px 100px;
  background-color: var(--gray-color-1);
`;
