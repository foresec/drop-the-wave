import { css } from "@emotion/react";
import Image from "next/image";
import SpotifyLogo from "@/assets/png/Spotify_Logo_CMYK_White.png";
import { ARROW } from "@/assets/svg/icons";
import { useRouter } from "next/navigation";

interface SideBarProps {
  isOpen: boolean;
  toggleNav: () => void;
}

export default function SideBar({ isOpen, toggleNav }: SideBarProps) {
  const router = useRouter();
  const arrowRotate = (isOpen: boolean) => css`
    transform: rotate(${isOpen ? "180deg" : "0deg"});
    transition: transform 0.3s ease;
  `;
  return (
    <nav css={[sideBarWrapperCSS, isOpen && openSideBarCSS]}>
      <div css={menuItemWrapperCSS}>
        {/* <div css={titleCSS}>logo</div> */}
        <div css={menuItemCSS} onClick={() => router.push("/home")}>Home</div>
        <div css={menuItemCSS} onClick={() => router.push("/search")}>
          Search
        </div>
      </div>
      <div css={playListWrapperCSS}>
        <div css={menuItemCSS}>Playlist</div>
      </div>
      <div css={logoImgWrapperCSS}>
        <Image css={logoImgCSS} src={SpotifyLogo} alt="spotify-logo" priority/>
      </div>
      <div onClick={toggleNav} css={[navBtnCSS, arrowRotate(isOpen)]}>
        {ARROW}
      </div>
    </nav>
  );
}

const sideBarWrapperCSS = css`
  position: fixed;
  height: 100%;
  width: 300px;
  top: 0;
  left: -300px;
  padding: 10px;
  transition: left 0.3s ease;
`;

const openSideBarCSS = css`
  left: 0;
`;

const menuItemWrapperCSS = css`
  border-radius: 10px;
  background-color: var(--gray-color-1);
  margin-bottom: 10px;
`;

const titleCSS = css`
  height: 64px;
  color: var(--default-white-color);
  font-size: var(--font-size-h1);
  padding: 10px;
`;

const menuItemCSS = css`
  padding: 20px 10px;
  color: var(--default-white-color);
`;

const playListWrapperCSS = css`
  border-radius: 10px;
  background-color: var(--gray-color-1);
  height: 300px;
  margin-bottom: 10px;
`;

const navBtnCSS = css`
  position: absolute;
  top: 50%;
  left: 101%;
  cursor: pointer;
  &:hover path {
    fill: var(--gray-color-4);
  }
`;

const logoImgWrapperCSS = css`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px;
`;

const logoImgCSS = css`
  width: 80px;
  height: auto;
  object-fit: cover;
`;
