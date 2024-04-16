"use client";

import TobBar from "@/components/common/nav/TobBar";
import { css } from "@emotion/react";

export default function WithTopBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div css={layoutWrapperCSS}>
      <TobBar />
      <div css={contentWrapperCSS}>{children}</div>
    </div>
  );
}

const layoutWrapperCSS = css`
  height: 100%;
`;

const contentWrapperCSS = css`
  overflow-x: hidden;
	height: 100%;
`;
