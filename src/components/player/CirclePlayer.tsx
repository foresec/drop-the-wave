import { css } from "@emotion/react";
import { useState } from "react";

export default function CirclePlayer() {
  const [time, setTime] = useState();
	console.log(time)

  return (
    <div>
      <div css={circleCSS}>
      </div>
    </div>
  );
}

const circleCSS = css`
  border-radius: 100%;
  background-color: var(--default-green-color);
  width: 300px;
  height: 300px;
`;
