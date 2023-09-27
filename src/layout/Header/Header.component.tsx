import * as S from "./Header.styles";
import { T } from "../../styles/TextGuide.styles";
import HeaderLogo from "../../assets/image/riaxo-logo.png";
import { useRecoilState } from "recoil";
import { isSideBarOpenState } from "../../recoil/atoms";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);

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
                <Link to="/post-list">
                    <T.Subtitle1>Posts</T.Subtitle1>
                </Link>
                <T.Subtitle1>Tags</T.Subtitle1>
            </S.MenuContainer>
            <Link to="/">
                <S.LogoImage src={HeaderLogo} />
            </Link>
        </S.MainWrapper>
    );
};

export default Header;
