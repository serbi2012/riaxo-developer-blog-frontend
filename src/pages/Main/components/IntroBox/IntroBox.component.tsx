import * as S from "./IntroBox.styles";
import ProfileImage from "../../../../assets/image/profile-image.png";
import { T } from "../../../../styles/TextGuide.styles";

const IntroBox: React.FC = () => {
    return (
        <S.MainWrapper>
            <S.ProfileImageBox>
                <img src={ProfileImage} />
            </S.ProfileImageBox>
            <S.ContentWrapper>
                <S.TextTitle>RiAXO</S.TextTitle>
                <S.TextItem>
                    <T.Subtitle1>
                        Phone: <span>&nbsp;</span>
                    </T.Subtitle1>
                    <T.Body3>010-5636-3060</T.Body3>
                </S.TextItem>
                <S.TextItem>
                    <T.Subtitle1>
                        Email: <span>&nbsp;</span>
                    </T.Subtitle1>
                    <T.Body3>rlaxo0306@gmail.com</T.Body3>
                </S.TextItem>
                <S.TextItem>
                    <T.Subtitle1>
                        GitHub: <span>&nbsp;</span>
                    </T.Subtitle1>
                    <T.Body3>https://github.com/serbi2012</T.Body3>
                </S.TextItem>
            </S.ContentWrapper>
        </S.MainWrapper>
    );
};

export default IntroBox;
