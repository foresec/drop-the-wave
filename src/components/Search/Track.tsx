import Image from "next/image";
import { css } from "@emotion/react";
import calculateTrackDurationFormat from "@/utils/calculateTrackDurationFormat";

interface Track {
  key: number;
  track: TrackObject;
}

export default function Track({ track }: Track) {
  const formattedTime = calculateTrackDurationFormat(track?.duration_ms!);

  return (
    <div>
      <div css={trackItemWrapperCSS}>
        <div css={trackItemInfoCSS}>
          <Image
            src={track.album?.images[0].url!}
            alt="앨범아트"
            width={40}
            height={40}
          />
          <div css={trackTextInfoCSS}>
            <div css={trackNameCSS}>{track.name}</div>
            <div>{track?.artists?.[0].name}</div>
          </div>
        </div>
        <div>{formattedTime}</div>
      </div>
    </div>
  );
}

const trackItemWrapperCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-h6);
  margin: 8px 0px;
  border-radius: 5px;
  padding:8px 10px;
	cursor: pointer;

  :hover {
    background-color: var(--gray-color-2);
  }
`;

const trackItemInfoCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const trackTextInfoCSS = css`
  margin-left: 10px;
`;
const trackNameCSS = css`
  margin-bottom: 7px;
  font-weight: var(--font-weight-semibold);
`;
