import { useEffect, useState } from "react";
import { T } from "../../../../styles/TextGuide.styles";
import * as S from "./MainPagePostCardList.styles";
import { IPost } from "../../../../types/post.types";
import { getQueryString } from "../../../../utils/getQueryString";
import { fetchPostList } from "../../../../api/post.queries";
import { formatDateFromAPIToYYYYMMDD } from "../../../../utils/formatDate";

const MainPagePostCardList: React.FC = () => {
    const [postData, setPostData] = useState<IPost[]>([]);

    useEffect(() => {
        (async () => {
            const queryString = getQueryString();

            const response = await fetchPostList(queryString);
            const firstFourItems = response.slice(0, 4);
            setPostData(firstFourItems);
        })();
    }, []);

    return (
        <S.MainWrapper>
            <T.Title1>Recent Posts</T.Title1>
            <S.PostCardWrapper>
                <S.LargePostCard to={`/post?_id=${postData?.[0]?._id}`}>
                    <T.Subtitle1>{postData?.[0]?.title}</T.Subtitle1>
                    <T.Body4>{formatDateFromAPIToYYYYMMDD(postData?.[0]?.createdAt)}</T.Body4>
                    <T.Body2 dangerouslySetInnerHTML={{ __html: String(postData?.[0]?.summaryContent) }}></T.Body2>
                </S.LargePostCard>
                <S.SmallPostCardWrapper>
                    {postData.slice(1, 4).map((item, index) => (
                        <S.SmallPostCard to={`/post?_id=${item?._id}`} key={index}>
                            <T.Subtitle1>{item?.title}</T.Subtitle1>
                            <T.Body4>{formatDateFromAPIToYYYYMMDD(item?.createdAt)}</T.Body4>
                            <T.Body2 dangerouslySetInnerHTML={{ __html: String(item?.summaryContent) }}></T.Body2>
                        </S.SmallPostCard>
                    ))}
                </S.SmallPostCardWrapper>
            </S.PostCardWrapper>
        </S.MainWrapper>
    );
};

export default MainPagePostCardList;
