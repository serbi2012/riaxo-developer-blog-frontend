import { useRecoilState } from "recoil";
import { T } from "../../styles/TextGuide.styles";
import * as S from "./SideBar.styles";
import HeaderLogo from "../../assets/image/riaxo-logo.png";
import { isSideBarOpenState } from "../../recoil/atoms";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { GITHUB_CLIENT_ID } from "../../constants/API";

const SideBar: React.FC = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);

    return (
        <S.MainWrapper isSideBarOpen={isSideBarOpen}>
            <Link to="/">
                <S.Header>
                    <img src={HeaderLogo} />
                    <T.Body4>개발자 김태섭</T.Body4>
                </S.Header>
            </Link>
            <S.MenuContainer>
                <Link to="/post/list">
                    <T.Subtitle1>1. Posts</T.Subtitle1>
                </Link>
                <Link to="/tag/list">
                    <T.Subtitle1>2. Tags</T.Subtitle1>
                </Link>
                <Link to="/portfolio/list">
                    <T.Subtitle1>3. Portfolio</T.Subtitle1>
                </Link>
            </S.MenuContainer>
            <Button
                variant="contained"
                startIcon={<HistoryEduIcon />}
                onClick={() => {
                    window.open(
                        `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`,
                        "",
                        "toolbar=no, menubar=no, scrollbars=yes, resizable=no, width=700, height=700, left=0, top=0",
                    );
                }}
            >
                로그인
            </Button>
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
