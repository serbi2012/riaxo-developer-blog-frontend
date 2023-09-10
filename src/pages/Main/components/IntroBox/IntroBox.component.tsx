import * as S from "./IntroBox.styles";
import ProfileImage from "../../../../assets/image/profile-image.png";
import { T } from "../../../../styles/TextGuide.styles";

const DETAILS_ARRAY = [
    {
        title: "Phone:",
        value: "010-5636-3060",
    },
    {
        title: "Email:",
        value: "rlaxo0306@gmail.com",
    },
    {
        title: "GitHub:",
        value: "https://github.com/serbi2012",
    },
];

const IntroBox: React.FC = () => {
    return (
        <S.MainWrapper>
            <S.ProfileImageBox>
                <img src={ProfileImage} />
            </S.ProfileImageBox>
            <S.ContentWrapper>
                <T.Title1>RiAXO</T.Title1>
                {DETAILS_ARRAY.map((item, index) => (
                    <S.TextItem key={index}>
                        <T.Subtitle1>
                            {item.title} <span>&nbsp;</span>
                        </T.Subtitle1>
                        <T.Body3>{item.value}</T.Body3>
                    </S.TextItem>
                ))}
            </S.ContentWrapper>
        </S.MainWrapper>
    );
};

export default IntroBox;
