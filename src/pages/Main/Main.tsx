import * as S from "./Main.styles";
import { IntroBox } from "./components/IntroBox/IntroBox";
import { MainPagePostCardList } from "./components/MainPagePostCardList/MainPagePostCardList";
import { MainPagePostList } from "./components/MainPagePostList/MainPagePostList";

export const Main: React.FC = () => {
    return (
        <S.MainWrapper>
            <IntroBox />
            <MainPagePostCardList />
            <MainPagePostList />
        </S.MainWrapper>
    );
};
