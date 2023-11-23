import { T } from "../../styles/TextGuide.styles";
import * as S from "./PostList.styles";
import { useCallback, useEffect, useState } from "react";
import { fetchPostList } from "../../api/post.queries";
import { IPost } from "../../types/post.types";
import { getQueryString } from "../../utils/getQueryString";
import PostListSearchBar from "./components/PostListSearchBar/PostListSearchBar.component";
import { formatDateFromAPIToYYYYMMDD } from "../../utils/formatDate";
import PostTag from "../../components/@shared/PostTag/PostTag.component";
import Skeleton from "@mui/material/Skeleton";
import { debounce } from "lodash";

const PostList: React.FC = () => {
    const [postData, setPostData] = useState<IPost[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");

    const fetchPostsWithDebounce = useCallback(
        debounce(async (search) => {
            const queryString = getQueryString();
            const body = search ? { ...queryString, title: search } : queryString;
            const response = await fetchPostList(body);

            setPostData(response);
        }, 50),
        [],
    );

    useEffect(() => {
        (async () => {
            const queryString = getQueryString();
            const response = await fetchPostList(queryString);

            setPostData(response);
        })();
    }, []);

    useEffect(() => {
        fetchPostsWithDebounce(searchInput);

        return () => {
            fetchPostsWithDebounce.cancel();
        };
    }, [searchInput, fetchPostsWithDebounce]);

    return (
        <S.MainWrapper>
            <PostListSearchBar setSearchInput={setSearchInput} />
            {postData?.map((item, index) => (
                <S.PostListWrapper key={index} to={`/post?_id=${item?._id}`}>
                    {item?.thumbnailURL ? (
                        <img src={item?.thumbnailURL} />
                    ) : (
                        <Skeleton variant="rounded" style={{ width: "100%", height: "auto", aspectRatio: "1" }} />
                    )}
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
