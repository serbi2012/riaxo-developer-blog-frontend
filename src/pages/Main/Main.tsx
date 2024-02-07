import { IntroBox, MainPagePostCardList, MainPagePostList } from "./components/index";
import * as S from "./Main.styles";

export const Main: React.FC = () => {
    return (
        <S.MainWrapper>
            <IntroBox />
            <MainPagePostCardList />
            <MainPagePostList />
        </S.MainWrapper>
    );
};
