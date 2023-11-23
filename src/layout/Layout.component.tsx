import * as S from "./Layout.styles";
import Header from "./Header/Header.component";
import { IProps } from "./Layout.types";
import SideBar from "./SideBar/SideBar.component";
import { isSideBarOpenState } from "../recoil/atoms/isSideBarOpenState";
import { isLoadingState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { CircularProgress, IconButton } from "@mui/material";
import { SnackbarProvider } from "notistack";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useRef } from "react";

const Layout: React.FC<IProps> = (props: IProps) => {
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
            </S.MainWrapper>
        </SnackbarProvider>
    );
};

export default Layout;
