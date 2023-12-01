import { T } from "../../styles/TextGuide.styles";
import * as S from "./index.styles";
import PostTag from "../../components/@shared/PostTag";
import { useEffect } from "react";
import { deletePost, fetchPostList } from "../../api/post.queries";
import { IPost } from "../../types/post";
import { Button } from "@mui/material";
import { getQueryString } from "../../utils/getQueryString";
import { formatDateFromAPIToYYYYMMDD } from "../../utils/formatDate";
import { Link, useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Skeleton from "@mui/material/Skeleton";
import { isAdminModeState } from "../../recoil/atoms/isAdminModeState";
import { useRecoilState } from "recoil";
import { useQueryClient } from "react-query";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import { useCustomMutation } from "../../hooks/useCustomMutation";

const Post: React.FC = () => {
    const [adminMode] = useRecoilState(isAdminModeState);

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const postQueryKey = ["post", getQueryString()];

    const { data: postData, isLoading } = useCustomQuery<IPost[]>(postQueryKey, () => fetchPostList(getQueryString()));
    const { mutate: deletePostMutate, isLoading: isDeleting } = useCustomMutation(() => deletePost(getQueryString()), {
        onSuccess: () => {
            navigate("/post/list");
            queryClient.invalidateQueries(["posts"]);
        },
    });

    const onDeleteHandler = () => {
        deletePostMutate();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <S.MainWrapper>
            {isLoading ? (
                <>
                    <S.Header>
                        <Skeleton variant="rounded" style={{ width: "100%", height: "auto", aspectRatio: "2" }} />
                        <Skeleton variant="rounded" style={{ height: "60px", width: "70%" }} />
                        <Skeleton variant="rounded" style={{ height: "23px", width: "30%" }} />
                        <Skeleton variant="rounded" style={{ height: "33px", width: "40%" }} />
                    </S.Header>
                    <S.Content>
                        <Skeleton variant="rounded" style={{ height: "300px", width: "100%" }} />
                    </S.Content>
                </>
            ) : (
                <>
                    <S.Header>
                        <S.ThumbNailImage src={postData?.[0]?.thumbnailURL} />

                        <T.Title3>{postData?.[0]?.title}</T.Title3>
                        <T.Subtitle2>{formatDateFromAPIToYYYYMMDD(postData?.[0].createdAt)}</T.Subtitle2>
                        <S.PostTagBox>
                            {postData?.[0]?.tags?.map((item: string, index) => <PostTag key={index} name={item} />)}
                        </S.PostTagBox>
                    </S.Header>
                    <S.Content>
                        <S.TextContent dangerouslySetInnerHTML={{ __html: String(postData?.[0]?.content) }} />
                    </S.Content>
                </>
            )}

            <S.Footer>
                {adminMode && (
                    <>
                        <Button
                            to={`/post/edit?_id=${postData?.[0]?._id}`}
                            component={Link}
                            variant="contained"
                            size="large"
                            startIcon={<EditNoteIcon />}
                        >
                            수정하기
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            color="error"
                            startIcon={<DeleteForeverIcon />}
                            onClick={onDeleteHandler}
                            disabled={isDeleting}
                        >
                            삭제하기
                        </Button>
                    </>
                )}
            </S.Footer>
        </S.MainWrapper>
    );
};

export default Post;
