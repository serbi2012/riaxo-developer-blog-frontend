import { T } from "../../styles/TextGuide.styles";
import * as S from "./Post.styles";
import PostTag from "../../components/@shared/PostTag/PostTag.component";
import { useEffect, useState } from "react";
import { deletePost, fetchPostList } from "../../api/post.queries";
import { IPost } from "../../types/post.types";
import { Button } from "@mui/material";
import { getQueryString } from "../../utils/getQueryString";
import { formatDateFromAPIToYYYYMMDD } from "../../utils/formatDate";
import { Link, useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useSnackbar } from "notistack";
import Skeleton from "@mui/material/Skeleton";
import { isAdminModeState } from "../../recoil/atoms/isAdminModeState";
import { useRecoilState } from "recoil";

const Post: React.FC = () => {
    const [adminMode] = useRecoilState(isAdminModeState);

    const [postData, setPostData] = useState<IPost>({});
    const [isImageLoaded, setImageLoaded] = useState(false);

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        window.scrollTo(0, 0);

        (async () => {
            try {
                const queryString = getQueryString();

                const response = await fetchPostList(queryString);
                setPostData(response[0]);
            } catch (error: any) {
                enqueueSnackbar(error.message, { variant: "error" });
                console.error(error);
            }
        })();
    }, []);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const onDeleteHandler = () => {
        (async () => {
            try {
                const queryString = getQueryString();
                await deletePost(queryString);
                navigate("/post/list");
            } catch (error: any) {
                enqueueSnackbar(error.message, { variant: "error" });
                console.error(error);
            }
        })();
    };

    return (
        <S.MainWrapper>
            <S.Header>
                <S.ThumbNailImage
                    src={postData?.thumbnailURL}
                    onLoad={handleImageLoad}
                    style={{ display: postData?.thumbnailURL && isImageLoaded ? "flex" : "none" }}
                />
                <Skeleton
                    variant="rounded"
                    style={{
                        display: postData?.thumbnailURL && isImageLoaded ? "none" : "flex",
                        width: "100%",
                        height: "auto",
                        aspectRatio: "2",
                    }}
                />
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
                {adminMode && (
                    <>
                        <Link to={`/post/edit?_id=${postData?._id}`}>
                            <Button variant="contained" size="large" startIcon={<EditNoteIcon />}>
                                수정하기
                            </Button>
                        </Link>
                        <Button
                            variant="contained"
                            size="large"
                            color="error"
                            startIcon={<DeleteForeverIcon />}
                            onClick={onDeleteHandler}
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
