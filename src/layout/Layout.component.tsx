import * as S from "./Layout.styles";
import Header from "./Header/Header.component";
import { IProps } from "./Layout.types";

const Layout: React.FC<IProps> = (props: IProps) => {
    return (
        <S.MainWrapper>
            <Header />
            {props.children}
        </S.MainWrapper>
    );
};

export default Layout;
