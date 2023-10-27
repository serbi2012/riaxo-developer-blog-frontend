import { useEffect, useState } from "react";
import { T } from "../../../../styles/TextGuide.styles";
import * as S from "./MainPagePostList.styles";
import { IPost } from "../../../../types/post.types";
import { getQueryString } from "../../../../utils/getQueryString";
import { fetchPostList } from "../../../../api/post.queries";
import { formatDateFromAPIToYYYYMMDD } from "../../../../utils/formatDate";

const MainPagePostList: React.FC = () => {
    const [postData, setPostData] = useState<IPost[]>([]);

    useEffect(() => {
        (async () => {
            const queryString = getQueryString();

            const response = await fetchPostList(queryString);
            const firstTenItems = response.slice(0, 10);
            setPostData(firstTenItems);
        })();
    }, []);

    return (
        <S.MainWrapper>
            <T.Title1>Post List</T.Title1>
            <S.PostWrapper>
                {postData.map((item, index) => (
                    <S.PostItem key={index}>
                        <T.Subtitle1>{item.title}</T.Subtitle1>
                        <T.Body4>{formatDateFromAPIToYYYYMMDD(item?.createdAt)}</T.Body4>
                        <T.Body2 dangerouslySetInnerHTML={{ __html: String(item?.summaryContent) }}></T.Body2>
                    </S.PostItem>
                ))}
            </S.PostWrapper>
        </S.MainWrapper>
    );
};

export default MainPagePostList;
