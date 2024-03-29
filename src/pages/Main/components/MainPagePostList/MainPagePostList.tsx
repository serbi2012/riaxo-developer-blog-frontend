import { fetchPostList } from "../../../../api";
import { useCustomQuery } from "../../../../hooks";
import { T } from "../../../../styles/TextGuide.styles";
import { IPost } from "../../../../types";
import { formatDateFromAPIToYYYYMMDD, getQueryString } from "../../../../utils";
import * as S from "./MainPagePostList.styles";

export const MainPagePostList = () => {
    const queryString = getQueryString();
    const postListQueryKey = ["mainPagePostList", queryString];

    const { data: postData } = useCustomQuery<IPost[]>(postListQueryKey, () => fetchPostList(queryString), {
        select: (data) => data.slice(0, 10),
    });

    return (
        <S.MainWrapper>
            <T.Title1>Post List</T.Title1>
            <S.PostWrapper>
                {postData?.map((item, index) => (
                    <S.PostItem key={index} to={`/post?_id=${item?._id}`}>
                        <T.Subtitle1>{item.title}</T.Subtitle1>
                        <T.Body4>{formatDateFromAPIToYYYYMMDD(item?.createdAt)}</T.Body4>
                        <T.Body2 dangerouslySetInnerHTML={{ __html: String(item?.summaryContent) }}></T.Body2>
                    </S.PostItem>
                ))}
            </S.PostWrapper>
        </S.MainWrapper>
    );
};
