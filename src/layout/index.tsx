import * as S from "./index.styles";
import Header from "./Header";
import SideBar from "./SideBar";
import { isSideBarOpenState } from "../recoil/atoms/isSideBarOpenState";
import { isLoadingState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { CircularProgress, IconButton } from "@mui/material";
import { SnackbarProvider } from "notistack";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import toothlessDancing from "./../assets/image/toothless-dancing.gif";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import toothlessDancingSong from "./../assets/image/toothless-dancing.mp4";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export interface IProps {
    children: JSX.Element;
}

const Layout: React.FC<IProps> = (props: IProps) => {
    const notistackRef = useRef<any>();
    const audioRef = useRef<HTMLAudioElement>(null); // 오디오 요소를 위한 ref

    const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
    const [isLoading] = useRecoilState(isLoadingState);

    const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
    const [isVolumeOn, setIsVolumeOn] = useState(false);

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

    const toggleVolume = () => {
        setIsVolumeOn((prev) => !prev);

        if (audioRef.current) {
            if (isVolumeOn) {
                audioRef.current.muted = true;
            } else {
                if (audioRef.current.paused) {
                    audioRef.current.play(); // 오디오 재생 시도
                }
                audioRef.current.muted = false;
            }
        }
    };

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
                <S.EasterEggContainer isOpen={isEasterEggOpen}>
                    <LiveHelpIcon
                        onClick={() => {
                            setIsEasterEggOpen(true);
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={toothlessDancing}
                            onClick={() => {
                                setIsEasterEggOpen(false);
                            }}
                            alt="Dancing Toothless"
                        />
                        <div onClick={toggleVolume}>{isVolumeOn ? <VolumeUpIcon /> : <VolumeOffIcon />}</div>
                        <audio ref={audioRef} src={toothlessDancingSong} autoPlay loop muted={!isVolumeOn} />
                    </div>
                </S.EasterEggContainer>
            </S.MainWrapper>
        </SnackbarProvider>
    );
};

export default Layout;
