"use client";
import SideBar from "@/components/common/nav/SideBar";
import PlayBar from "@/components/common/nav/PlayBar";
import { css } from "@emotion/react";
import { useState } from "react";

export default function BasicFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const leftWidthWrapperCSS = css`
    //navbar
    flex: 1;
    margin-left: ${isNavOpen ? "300px" : "0"};
    transition: margin-left 0.3s ease;
		padding-left:15px;

    // 하위
    display: flex;
    flex-direction: column;
    height: 100%;
  `;

  return (
    <div css={layoutWrapperCSS}>
      <SideBar isOpen={isNavOpen} toggleNav={toggleNav} />
      <div css={leftWidthWrapperCSS}>
        <div css={contentWrapperCSS}>{children}</div>
        <div css={musicBarLayoutWrapperCSS}>
          <PlayBar />
        </div>
      </div>
    </div>
  );
}

const layoutWrapperCSS = css`
  display: flex;
  height: 100%;
`;

const contentWrapperCSS = css`
  overflow-x: hidden;
  /* overflow-y: hidden; */
  flex: 7;
  padding: 10px;
  border-radius: 10px;
`;

const musicBarLayoutWrapperCSS = css`
  flex: 1;
`;
