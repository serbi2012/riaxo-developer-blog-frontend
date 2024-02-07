import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { Button } from "@mui/material";

import { riaxoLogo } from "../../assets/image";
import { GITHUB_CLIENT_ID } from "../../constants/API";
import { useLogout } from "../../hooks";
import { isAdminModeState, isSideBarOpenState } from "../../recoil/atoms";
import { T } from "../../styles/TextGuide.styles";
import * as S from "./SideBar.styles";

export const SideBar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
    const [adminMode] = useRecoilState(isAdminModeState);

    const { handleLogout } = useLogout();

    return (
        <S.MainWrapper isSideBarOpen={isSideBarOpen}>
            <Link to="/">
                <S.Header>
                    <img src={riaxoLogo} />
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
                {/* <Link to="/portfolio/list">
                    <T.Subtitle1>3. Portfolio</T.Subtitle1>
                </Link> */}
            </S.MenuContainer>
            <Button
                variant="contained"
                color="inherit"
                startIcon={<AdminPanelSettingsIcon />}
                onClick={() => {
                    if (adminMode) {
                        handleLogout();
                    } else {
                        window.open(
                            `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`,
                            "",
                            "toolbar=no, menubar=no, scrollbars=yes, resizable=no, width=700, height=700, left=0, top=0",
                        );
                    }
                }}
            >
                {adminMode ? "관리자 모드 해제" : "관리자 모드"}
            </Button>
            {adminMode && (
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
            )}
        </S.MainWrapper>
    );
};
