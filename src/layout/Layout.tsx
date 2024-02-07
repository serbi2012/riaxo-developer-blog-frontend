import { useRef } from "react";

import { SnackbarProvider } from "notistack";
import { useRecoilState } from "recoil";

import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { CircularProgress, IconButton } from "@mui/material";

import { isLoadingState, isSideBarOpenState } from "../recoil/atoms";
import { EasterEgg } from "./EasterEgg/EasterEgg";
import { Header } from "./Header/Header";
import * as S from "./Layout.styles";
import { SideBar } from "./SideBar/SideBar";

export interface IProps {
    children: JSX.Element;
}

export const Layout = (props: IProps) => {
    const notistackRef = useRef<any>();

    const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
    const [isLoading] = useRecoilState(isLoadingState);

    const action = (key: any) => (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => {
                notistackRef.current.closeSnackbar(key);
            }}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <SnackbarProvider
            iconVariant={{
                success: <ThumbUpOffAltOutlinedIcon />,
                error: <ErrorOutlineOutlinedIcon />,
                warning: <ReportProblemOutlinedIcon />,
            }}
            ref={notistackRef}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            maxSnack={3}
            autoHideDuration={2000}
            action={action}
        >
            <S.MainWrapper>
                {/* NOTE - 로딩 프로그레스 컨테이너 */}
                {isLoading && (
                    <S.LoadingContainer>
                        <CircularProgress style={{ scale: "4" }} />
                    </S.LoadingContainer>
                )}

                {/* NOTE - 사이드바 */}
                <SideBar />

                {/* NOTE - 사이드바 오픈시 생기는 검은 배경 */}
                <S.BlackBackGround
                    isSideBarOpen={isSideBarOpen}
                    onClick={() => {
                        setIsSideBarOpen(false);
                    }}
                />

                {/* NOTE - 컨텐츠 영역 */}
                <S.ContentWrapper>
                    <Header />
                    {props.children}
                </S.ContentWrapper>

                {/* NOTE - 이스터 에그 */}
                <EasterEgg />
            </S.MainWrapper>
        </SnackbarProvider>
    );
};
