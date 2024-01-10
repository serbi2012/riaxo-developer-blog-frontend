import { useEffect } from "react";
import { fetchNextPost, fetchPrevPost } from "../../../../api/post.queries";
import { useCustomQuery } from "../../../../hooks/useCustomQuery";
import { T } from "../../../../styles/TextGuide.styles";
import { IPost } from "../../../../types/post";
import { getQueryString } from "../../../../utils/getQueryString";
import * as S from "./index.styles";

const PrevNextNavBox = () => {
    const prevPostQueryKey = ["prev-post", getQueryString()];
    const { data: prevPostData, isLoading: prevPostIsLoading } = useCustomQuery<IPost[]>(prevPostQueryKey, () =>
        fetchNextPost({ ...getQueryString(), limit: 1 }),
    );

    const nextPostQueryKey = ["next-post", getQueryString()];
    const { data: nextPostData, isLoading: nextPostIsLoading } = useCustomQuery<IPost[]>(nextPostQueryKey, () =>
        fetchPrevPost({ ...getQueryString(), limit: 1 }),
    );

    useEffect(() => {
        console.log(prevPostData);
        prevPostIsLoading;
    }, [prevPostData]);

    useEffect(() => {
        console.log(nextPostData);
        nextPostIsLoading;
    }, [nextPostData]);

    return (
        <S.MainWrapper>
            {nextPostData?.[0] ? (
                <S.ContentBox
                    isNext
                    to={`/post?_id=${nextPostData?.[0]?._id}`}
                    backImage={nextPostData?.[0]?.thumbnailURL}
                >
                    <S.PostTagBox>
                        <T.Subtitle1>다음글</T.Subtitle1>
                    </S.PostTagBox>
                    <S.Footer>
                        <T.Subtitle2>{nextPostData?.[0]?.title}</T.Subtitle2>
                    </S.Footer>
                </S.ContentBox>
            ) : (
                <div />
            )}
            {prevPostData?.[0] ? (
                <S.ContentBox to={`/post?_id=${prevPostData?.[0]?._id}`} backImage={prevPostData?.[0]?.thumbnailURL}>
                    <S.PostTagBox>
                        <T.Subtitle1>이전글</T.Subtitle1>
                    </S.PostTagBox>
                    <S.Footer>
                        <T.Subtitle2>{prevPostData?.[0]?.title}</T.Subtitle2>
                    </S.Footer>
                </S.ContentBox>
            ) : (
                <div />
            )}
        </S.MainWrapper>
    );
};

export default PrevNextNavBox;
