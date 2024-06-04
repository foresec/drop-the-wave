import React from "react";
import { css, keyframes } from "@emotion/react";

export default function Spinner() {
  return (
    <div css={spinnerWrapperCSS}>
      <div css={spinnerCSS}></div>
    </div>
  );
}
const spinning = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform:rotate(360deg)
	}
`;

const spinnerWrapperCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinnerCSS = css`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 3px solid var(--default-green-color);
  border-left-color: var(--gray-color-2);

  animation: ${spinning} 1s linear infinite;
`;
