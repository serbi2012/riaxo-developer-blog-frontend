import { T } from "../../styles/TextGuide.styles";
import * as S from "./Post.styles";
import ThumbNailSample from "./../../assets/image/post_thumb_nail_sample.png";
import PostTag from "../../components/@shared/PostTag/PostTag.component";
import { useEffect, useState } from "react";
import { deletePost, fetchPostList } from "../../api/post.queries";
import { IPost } from "../../types/post.types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { getQueryString } from "../../utils/getQueryString";
import { formatDateFromAPIToYYYYMMDD } from "../../utils/formatDate";
import { Link, useNavigate } from "react-router-dom";

const Post: React.FC = () => {
    const [postData, setPostData] = useState<IPost>({});
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const queryString = getQueryString();

            const response = await fetchPostList(queryString);
            setPostData(response[0]);
        })();
    }, []);

    const onDeleteHandler = () => {
        (async () => {
            const queryString = getQueryString();
            await deletePost(queryString);
            navigate("/post/list");
        })();
    };

    return (
        <S.MainWrapper>
            <S.Header>
                <S.ThumbNailImage src={ThumbNailSample} />
                <T.Title3>{postData?.title}</T.Title3>
                <T.Subtitle2>{formatDateFromAPIToYYYYMMDD(postData.createdAt)}</T.Subtitle2>
                <S.PostTagBox>
                    {postData?.tags?.map((item: string, index) => <PostTag key={index} name={item} />)}
                </S.PostTagBox>
            </S.Header>
            <S.Content>
                <S.TextContent dangerouslySetInnerHTML={{ __html: String(postData?.content) }} />
            </S.Content>
            <S.Footer>
                <Button variant="outlined" size="large" startIcon={<FavoriteIcon />}>
                    좋아요
                </Button>
                <Link to={`/post/edit?_id=${postData?._id}`}>
                    <Button variant="contained" size="large">
                        수정하기
                    </Button>
                </Link>
                <Button variant="contained" size="large" onClick={onDeleteHandler}>
                    삭제하기
                </Button>
            </S.Footer>
        </S.MainWrapper>
    );
};

export default Post;
