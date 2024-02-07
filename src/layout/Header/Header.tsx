import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

import { riaxoLogo } from "../../assets/image/index";
import { isAdminModeState, isSideBarOpenState } from "../../recoil/atoms/index";
import { T } from "../../styles/TextGuide.styles";
import * as S from "./Header.styles";

const PAGE_ITEMS = [
    { title: "Posts", link: "/post/list" },
    { title: "Tags", link: "/tag/list" },
    // { title: "Portfolio", link: "/portfolio/list" },
];

export const Header: React.FC = () => {
    const [, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
    const [adminMode] = useRecoilState(isAdminModeState);

    const [currentPath, setCurrentPath] = useState<string>("");

    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <S.MainWrapper id="main-header">
            <S.MenuContainer>
                <S.HamburgerButton
                    onClick={() => {
                        setIsSideBarOpen(true);
                    }}
                >
                    <S.HamburgerIcon />
                </S.HamburgerButton>
                {PAGE_ITEMS.map((item, index) => (
                    <S.MenuTag key={index} to={item.link} isActive={currentPath === item.link}>
                        <T.Subtitle1>{item.title}</T.Subtitle1>
                    </S.MenuTag>
                ))}
            </S.MenuContainer>
            {adminMode && <T.Body3 style={{ textAlign: "center" }}>Admin Mode</T.Body3>}
            <Link to="/">
                <S.LogoImage src={riaxoLogo} />
            </Link>
        </S.MainWrapper>
    );
};
