import * as S from "./Main.styles";
import IntroBox from "./components/IntroBox/IntroBox.component";
import PostCardList from "./components/PostCardList/PostCardList.component";
import PostList from "./components/PostList/PostList.component";

const Main: React.FC = () => {
    return (
        <S.MainWrapper>
            <IntroBox />
            <PostCardList />
            <PostList />
        </S.MainWrapper>
    );
};

export default Main;
