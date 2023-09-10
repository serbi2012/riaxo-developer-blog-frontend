import { T } from "../../styles/TextGuide.styles";
import * as S from "./Post.styles";
import ThumbNailSample from "./../../assets/image/post_thumb_nail_sample.png";
import PostTag from "./components/PostTag/PostTag.component";
import PostContent from "./components/PostContent/PostContent.component";
import { useEffect, useState } from "react";
import { fetchPostList } from "../../api/post.queries";
import { IPost, IPostParagraph } from "../../types/post.types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

const Post: React.FC = () => {
    const [postData, setPostData] = useState<IPost>({});

    useEffect(() => {
        (async () => {
            const response = await fetchPostList();
            setPostData(response[0]);
        })();
    }, []);

    return (
        <S.MainWrapper>
            <S.Header>
                <S.ThumbNailImage src={ThumbNailSample} />
                <T.Title3>{postData?.title}</T.Title3>
                <T.Subtitle2>{new Date().toISOString().slice(0, 10)}</T.Subtitle2>
                <S.PostTagBox>
                    {postData?.tags?.map((item: string, index) => <PostTag key={index} name={item} />)}
                </S.PostTagBox>
            </S.Header>
            <S.Content>
                {postData?.content?.map((item: IPostParagraph, index) => (
                    <PostContent key={index} title={String(item?.paragraphTitle)}>
                        <T.Subtitle2>{item?.paragraphContent}</T.Subtitle2>
                    </PostContent>
                ))}
            </S.Content>
            <S.Footer>
                <Button variant="outlined" size="large" startIcon={<FavoriteIcon />}>
                    좋아요
                </Button>
            </S.Footer>
        </S.MainWrapper>
    );
};

export default Post;
