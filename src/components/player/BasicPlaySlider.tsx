import { css } from "@emotion/react";
import { useState, MouseEvent } from "react";

export default function BasicPlaySlider() {
  const [slideX, setSlideX] = useState(0);

  // click시 이동
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    // target: 이벤트가 발생한 실제요소
    // currentTarget : 이벤트핸들러가 실행되고 있는 요소(내부 원이 움직여도 여기서 currentTarget은 sliderwrapper임)
    // div의 width를 가져옴
    const sliderWidth = e.currentTarget.clientWidth;
    // 사용자가 클릭한 위치의 x좌표와, event handling된 div 요소와 왼쪽 경계 사이의 거리의 차를 계산함
    const offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    // 비율계산
    const newX = (offsetX / sliderWidth) * 100;
    setSlideX(newX);
  };

  return (
    <div css={basicplaySliderWrapperCSS}>
      <div css={basicplaySlideWrapperCSS} onMouseDown={handleMouseDown}>
        <div css={[grabCircleCSS, { left: `${slideX}%` }]}></div>
      </div>
      <div>{Math.round(slideX)}</div>
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
  transition: left 0.2s ease;
`;
