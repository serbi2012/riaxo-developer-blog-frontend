import * as S from "./Header.styles";
import { T } from "../../styles/TextGuide.styles";
import HeaderLogo from "../../assets/image/riaxo-logo.png";

const Header: React.FC = () => {
    return (
        <S.MainWrapper>
            <S.LogoImage src={HeaderLogo} />
            <S.MenuContainer>
                <T.Subtitle1>Posts</T.Subtitle1>
                <T.Subtitle1>Tags</T.Subtitle1>
                <S.HamburgerButton>
                    <S.HamburgerIcon />
                </S.HamburgerButton>
            </S.MenuContainer>
        </S.MainWrapper>
    );
};

export default Header;
