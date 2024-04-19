import { css } from "@emotion/react";
import { useState, MouseEvent, useEffect } from "react";

export default function BasicPlaySlider() {
  const [slideX, setSlideX] = useState(0);
  const [audio] = useState(new Audio("/colour.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

  // click시 이동
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const sliderWidth = e.currentTarget.clientWidth;
    const offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newX = Math.min(100, Math.max(0, (offsetX / sliderWidth) * 100));
    setSlideX(newX);

		// audio duration중 click한 만큼 이동
    const duration = audio.duration;
    const newTime = (newX / 100) * duration;
    audio.currentTime = newTime;
  };

	// public mp3 재생
  const handlePlay = () => {
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
		// audio의 현재 시간으로 slideX계산
    const updateSlidePosition = () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const newX = (currentTime / duration) * 100;
      setSlideX(newX);
    };

    audio.addEventListener("timeupdate", updateSlidePosition);

    return () => {
      audio.removeEventListener("timeupdate", updateSlidePosition);
    };
  }, [audio]);

  return (
    <div css={basicplaySliderWrapperCSS}>
      <div css={basicplaySlideWrapperCSS} onMouseDown={handleMouseDown}>
        <div css={[barBackgroundCSS, { width: `${slideX}%` }]} />
        <div css={[grabCircleCSS, { left: `${slideX}%` }]} />
      </div>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}

const basicplaySliderWrapperCSS = css`
  width: 100%;
`;

const basicplaySlideWrapperCSS = css`
  position: relative;
  width: 100%;
  height: 6px;
  background-color: var(--default-green-color);
  border-radius: 5px;
  cursor: pointer;
`;

const grabCircleCSS = css`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: var(--default-purple-color);
  border-radius: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const barBackgroundCSS = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--default-purple-color);
  border-radius: 5px;
`;
