import * as S from "./Main.styles";
import IntroBox from "./components/IntroBox/IntroBox.component";

const Main: React.FC = () => {
    return (
        <S.BackGroundWrapper>
            <S.ContentWrapper>
                <IntroBox />
            </S.ContentWrapper>
        </S.BackGroundWrapper>
    );
};

export default Main;
