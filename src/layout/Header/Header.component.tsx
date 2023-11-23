import * as S from "./Header.styles";
import { T } from "../../styles/TextGuide.styles";
import HeaderLogo from "../../assets/image/riaxo-logo.png";
import { useRecoilState } from "recoil";
import { isSideBarOpenState } from "../../recoil/atoms";
import { Link, useLocation } from "react-router-dom";
import { isAdminModeState } from "../../recoil/atoms/isAdminModeState";
import { useEffect, useState } from "react";

const PAGE_ITEMS = [
    { title: "Posts", link: "/post/list" },
    { title: "Tags", link: "/tag/list" },
    { title: "Portfolio", link: "/portfolio/list" },
];

const Header: React.FC = () => {
    const [, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
    const [adminMode] = useRecoilState(isAdminModeState);

    const [currentPath, setCurrentPath] = useState<string>("");

    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <S.MainWrapper>
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
            {adminMode && <T.Body3>Admin Mode</T.Body3>}
            <Link to="/">
                <S.LogoImage src={HeaderLogo} />
            </Link>
        </S.MainWrapper>
    );
};

export default Header;
