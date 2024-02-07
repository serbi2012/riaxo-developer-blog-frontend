import { IntroBox, MainPagePostCardList, MainPagePostList } from "./components";
import * as S from "./Main.styles";

export const Main = () => {
    return (
        <S.MainWrapper>
            <IntroBox />
            <MainPagePostCardList />
            <MainPagePostList />
        </S.MainWrapper>
    );
};
