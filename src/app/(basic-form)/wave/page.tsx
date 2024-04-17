"use client";

import CirclePlayer from "@/components/player/CirclePlayer";
import { css } from "@emotion/react";
export default function WavePage() {
  return (
    <div css={wavePageWrapperCSS}>
      <div css={circleWrapperCSS}>
        <CirclePlayer />
      </div>
    </div>
  );
}

const wavePageWrapperCSS = css`
  height: 100%;
`;

const circleWrapperCSS = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
