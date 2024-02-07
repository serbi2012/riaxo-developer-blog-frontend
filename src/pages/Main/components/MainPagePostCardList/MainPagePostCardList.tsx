import { T } from "../../../../styles/TextGuide.styles";
import * as S from "./MainPagePostCardList.styles";
import { IPost } from "../../../../types/post";
import { getQueryString } from "../../../../utils/getQueryString";
import { fetchPostList } from "../../../../api/post.queries";
import { formatDateFromAPIToYYYYMMDD } from "../../../../utils/formatDate";
import Skeleton from "@mui/material/Skeleton";
import { useCustomQuery } from "../../../../hooks/useCustomQuery";

export const MainPagePostCardList: React.FC = () => {
    const queryString = getQueryString();

    const { data: postsData, isLoading } = useCustomQuery<IPost[]>("mainPagePosts", () => fetchPostList(queryString));

    const processedPostData = isLoading ? [] : postsData?.slice(0, 4);

    return (
        <S.MainWrapper>
            <T.Title1>Recent Posts</T.Title1>
            <S.PostCardWrapper>
                <S.LargePostCard to={`/post?_id=${processedPostData?.[0]?._id}`}>
                    {isLoading ? (
                        <>
                            <Skeleton variant="rounded" style={{ width: "100%", height: "auto", aspectRatio: "2" }} />
                            <Skeleton variant="rounded" style={{ width: "60%", height: "30px" }} />
                            <Skeleton variant="rounded" style={{ width: "30%", height: "30px" }} />
                            <Skeleton variant="rounded" style={{ width: "100%", height: "100px" }} />
                        </>
                    ) : (
                        <>
                            <img src={processedPostData?.[0]?.thumbnailURL} />
                            <T.Subtitle1>{processedPostData?.[0]?.title}</T.Subtitle1>
                            <T.Body4>{formatDateFromAPIToYYYYMMDD(processedPostData?.[0]?.createdAt)}</T.Body4>
                            <T.Body2
                                dangerouslySetInnerHTML={{ __html: String(processedPostData?.[0]?.summaryContent) }}
                            />
                        </>
                    )}
                </S.LargePostCard>
                <S.SmallPostCardWrapper>
                    {processedPostData?.slice(1, 4).map((item, index) => (
                        <S.SmallPostCard to={`/post?_id=${item?._id}`} key={index}>
                            {isLoading ? (
                                <>
                                    <Skeleton variant="rounded" style={{ width: "60%", height: "30px" }} />
                                    <Skeleton variant="rounded" style={{ width: "30%", height: "30px" }} />
                                    <Skeleton variant="rounded" style={{ width: "100%", height: "auto", flex: "1" }} />
                                </>
                            ) : (
                                <>
                                    <img src={item?.thumbnailURL} />
                                    <T.Subtitle1>{item?.title}</T.Subtitle1>
                                    <T.Body4>{formatDateFromAPIToYYYYMMDD(item?.createdAt)}</T.Body4>
                                    <T.Body2 dangerouslySetInnerHTML={{ __html: String(item?.summaryContent) }} />
                                </>
                            )}
                        </S.SmallPostCard>
                    ))}
                </S.SmallPostCardWrapper>
            </S.PostCardWrapper>
        </S.MainWrapper>
    );
};
