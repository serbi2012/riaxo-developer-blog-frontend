import * as S from "./index.styles";
import ProfileImage from "../../../../assets/image/profile-image.png";
import { T } from "../../../../styles/TextGuide.styles";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";

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
        isLink: true,
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
                        {item?.isLink ? (
                            <Link to={item.value} target="_blank">
                                <T.Body2>{item.value}</T.Body2>
                                <LaunchIcon />
                            </Link>
                        ) : (
                            <T.Body2>{item.value}</T.Body2>
                        )}
                    </S.TextItem>
                ))}
            </S.ContentWrapper>
        </S.MainWrapper>
    );
};

export default IntroBox;
