import { T } from "../../styles/TextGuide.styles";
import * as S from "./PostList.styles";
import { useEffect, useState } from "react";
import { fetchPostList } from "../../api/post.queries";
import { IPost } from "../../types/post.types";
import ThumbNailSample from "./../../assets/image/post_thumb_nail_sample.png";
import { getQueryString } from "../../utils/getQueryString";
import PostListSearchBar from "./components/PostListSearchBar/PostListSearchBar.component";
import { formatDateFromAPIToYYYYMMDD } from "../../utils/formatDate";
import PostTag from "../../components/@shared/PostTag/PostTag.component";

const PostList: React.FC = () => {
    const [postData, setPostData] = useState<IPost[]>([]);

    useEffect(() => {
        (async () => {
            const queryString = getQueryString();

            const response = await fetchPostList(queryString);
            setPostData(response);
        })();
    }, []);

    return (
        <S.MainWrapper>
            <PostListSearchBar />
            {postData?.map((item, index) => (
                <S.PostListWrapper key={index} to={`/post?_id=${item?._id}`}>
                    <img src={item?.thumbnailURL || ThumbNailSample} />
                    <S.PostDetail>
                        <S.PostTagBox>
                            {item?.tags?.map((item: string, index) => <PostTag key={index} name={item} size="small" />)}
                        </S.PostTagBox>
                        <T.Title1>{item?.title}</T.Title1>
                        <T.Subtitle2>{formatDateFromAPIToYYYYMMDD(item.createdAt)}</T.Subtitle2>
                        <T.Subtitle2 className="last-child">{item?.summaryContent}</T.Subtitle2>
                    </S.PostDetail>
                </S.PostListWrapper>
            ))}
        </S.MainWrapper>
    );
};

export default PostList;
