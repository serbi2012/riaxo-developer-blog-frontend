import * as S from "./index.styles";
import IntroBox from "./components/IntroBox";
import MainPagePostCardList from "./components/MainPagePostCardList";
import MainPagePostList from "./components/MainPagePostList";
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
