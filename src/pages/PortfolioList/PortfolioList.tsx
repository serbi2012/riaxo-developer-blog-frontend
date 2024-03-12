import Skeleton from "@mui/material/Skeleton";

import { portfolioImg1, portfolioImg2, portfolioImg3 } from "../../assets/image";
import { PostTag } from "../../components/@shared/PostTag/PostTag";
import { T } from "../../styles/TextGuide.styles";
import * as S from "./PortfolioList.styles";

const PORTFOLIO_ITEMS = [
    {
        id: 1,
        image: portfolioImg1,
        title: "Tic Tac Toe",
        contents: "간단한 Tic Tac Toe게임. 하지만 색다른 룰을 적용함.",
        tags: ["Javascript"],
        link: "https://serbi2012.github.io/Tic_Tac_Toe/",
    },
    {
        id: 2,
        image: portfolioImg2,
        title: "2048 Game",
        contents: "간단한 규칙의 2048 게임.",
        tags: ["Javascript"],
        link: "https://serbi2012.github.io/2048_Game/",
    },
    {
        id: 3,
        image: portfolioImg3,
        title: "Typing Test",
        contents: "간편하게 타건을 테스트할 수 있는 애플리케이션입니다.",
        tags: ["Javascript", "React"],
        link: "https://serbi2012.github.io/TypingTest2/",
    },
];

export const PortfolioList = () => {
    return (
        <S.MainWrapper>
            {PORTFOLIO_ITEMS?.map((item, index) => (
                <S.PostListWrapper key={index} to={item?.link}>
                    {item?.image ? (
                        <img src={item?.image} />
                    ) : (
                        <Skeleton variant="rounded" style={{ width: "100%", height: "auto", aspectRatio: "1" }} />
                    )}

                    <S.PostDetail>
                        <T.Title1>{item?.title}</T.Title1>
                        <S.PostTagBox>
                            {item?.tags?.map((item: string, index) => <PostTag key={index} name={item} size="small" />)}
                        </S.PostTagBox>
                        <T.Subtitle2 className="last-child">{item?.contents}</T.Subtitle2>
                    </S.PostDetail>
                </S.PostListWrapper>
            ))}
        </S.MainWrapper>
    );
};
