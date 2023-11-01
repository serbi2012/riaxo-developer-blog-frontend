import { useRecoilState } from "recoil";
import { T } from "../../styles/TextGuide.styles";
import * as S from "./SideBar.styles";
import HeaderLogo from "../../assets/image/riaxo-logo.png";
import { isSideBarOpenState } from "../../recoil/atoms";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

const SideBar: React.FC = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);

    return (
        <S.MainWrapper isSideBarOpen={isSideBarOpen}>
            <Link to="/">
                <S.Header>
                    <img src={HeaderLogo} />
                    <T.Body4>FE 개발자 김태섭입니다.</T.Body4>
                </S.Header>
            </Link>
            <S.MenuContainer>
                <Link to="/post/list">
                    <T.Subtitle1>1. Posts</T.Subtitle1>
                </Link>
                <Link to="/tag/list">
                    <T.Subtitle1>2. Tags</T.Subtitle1>
                </Link>
                <Link to="/tag/list">
                    <T.Subtitle1>3. Portfolio</T.Subtitle1>
                </Link>
            </S.MenuContainer>
            <Link to="/post/create">
                <Button
                    variant="contained"
                    startIcon={<HistoryEduIcon />}
                    onClick={() => {
                        setIsSideBarOpen(false);
                    }}
                >
                    게시글 작성
                </Button>
            </Link>
        </S.MainWrapper>
    );
};

export default SideBar;
