import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

import { riaxoLogo } from "../../assets/image";
import { isAdminModeState, isSideBarOpenState } from "../../recoil/atoms";
import { T } from "../../styles/TextGuide.styles";
import * as S from "./Header.styles";

const PAGE_ITEMS = [
    { title: "Posts", link: "/post/list", subPage: ["All", "Article", "Memo", "Project", "Reference"] },
    { title: "Tags", link: "/tag/list" },
    // { title: "Portfolio", link: "/portfolio/list" },
];

export const Header = () => {
    const [, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
    const [adminMode] = useRecoilState(isAdminModeState);

    const location = useLocation();

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
                    <S.TagContainer key={index}>
                        <S.MenuTag key={index} to={item.link} isActive={location.pathname.includes(item.link)}>
                            <T.Subtitle1>{item.title}</T.Subtitle1>
                        </S.MenuTag>
                        {item?.subPage && (
                            <S.SubTagContainer isVisible={location.pathname.includes(item.link)}>
                                {item.subPage.map((subItem, subIndex) => (
                                    <S.MenuTag
                                        key={subIndex}
                                        to={`${item.link}${subItem !== "All" ? `?tags=${subItem}` : ""}`}
                                        isActive={
                                            subItem === "All"
                                                ? location.search === "" && location.pathname.includes(item.link)
                                                : location.search.includes(subItem)
                                        }
                                    >
                                        <T.Body3>{subItem}</T.Body3>
                                    </S.MenuTag>
                                ))}
                            </S.SubTagContainer>
                        )}
                    </S.TagContainer>
                ))}
            </S.MenuContainer>
            {adminMode && (
                <T.Body3
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        textAlign: "center",
                        padding: "0 10px",
                    }}
                >
                    Admin Mode
                </T.Body3>
            )}
            <Link to="/">
                <S.LogoImage src={riaxoLogo} />
            </Link>
        </S.MainWrapper>
    );
};
