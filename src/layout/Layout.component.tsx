import * as S from "./Layout.styles";
import Header from "./Header/Header.component";
import { IProps } from "./Layout.types";
import SideBar from "./SideBar/SideBar.component";
import { isSideBarOpenState } from "../recoil/atoms/isSideBarOpenState";
import { isLoadingState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { CircularProgress } from "@mui/material";

const Layout: React.FC<IProps> = (props: IProps) => {
    const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
    const [isLoading] = useRecoilState(isLoadingState);

    return (
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
    );
};

export default Layout;
