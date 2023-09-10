import * as S from "./Layout.styles";
import Header from "./Header/Header.component";
import { IProps } from "./Layout.types";
import SideBar from "./SideBar/SideBar.component";
import { isSideBarOpenState } from "../recoil/atoms/isSideBarOpenState";
import { useRecoilState } from "recoil";

const Layout: React.FC<IProps> = (props: IProps) => {
    const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);

    return (
        <S.MainWrapper>
            <SideBar />
            <S.BlackBackGround
                isSideBarOpen={isSideBarOpen}
                onClick={() => {
                    setIsSideBarOpen(false);
                }}
            />
            <S.ContentWrapper>
                <Header />
                {props.children}
            </S.ContentWrapper>
        </S.MainWrapper>
    );
};

export default Layout;
