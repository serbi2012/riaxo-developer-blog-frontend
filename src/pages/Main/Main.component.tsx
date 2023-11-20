import * as S from "./Main.styles";
import IntroBox from "./components/IntroBox/IntroBox.component";
import MainPagePostCardList from "./components/MainPagePostCardList/MainPagePostCardList.component";
import MainPagePostList from "./components/MainPagePostList/MainPagePostList.component";
import "dayjs/locale/ko";

const Main: React.FC = () => {
    return (
        <S.MainWrapper>
            <IntroBox />
            <MainPagePostCardList />
            <MainPagePostList />
        </S.MainWrapper>
    );
};

export default Main;
