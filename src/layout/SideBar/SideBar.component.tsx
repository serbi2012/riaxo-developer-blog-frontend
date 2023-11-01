import { useRecoilState } from "recoil";
import { T } from "../../styles/TextGuide.styles";
import * as S from "./SideBar.styles";
import HeaderLogo from "../../assets/image/riaxo-logo.png";
import { isSideBarOpenState } from "../../recoil/atoms";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);

    return (
        <S.MainWrapper isSideBarOpen={isSideBarOpen}>
            <S.Header>
                <img src={HeaderLogo} />
                <T.Body4>FE 개발자 김태섭입니다.</T.Body4>
            </S.Header>
            <S.MenuContainer>
                <T.Subtitle1>1. Hello</T.Subtitle1>
                <T.Subtitle1>2. Hello</T.Subtitle1>
                <T.Subtitle1>3. Hello</T.Subtitle1>
                <T.Subtitle1>4. Hello</T.Subtitle1>
            </S.MenuContainer>
            <Link to="/post/create">
                <Button
                    variant="contained"
                    onClick={() => {
                        setIsSideBarOpen(false);
                    }}
                >
                    포스트 작성
                </Button>
            </Link>
        </S.MainWrapper>
    );
};

export default SideBar;