import { T } from "../../styles/TextGuide.styles";
import * as S from "./index.styles";
import { useState } from "react";
import { fetchPostList } from "../../api/post.queries";
import { IPost } from "../../types/post";
import { getQueryString } from "../../utils/getQueryString";
import TagListSearchBar from "./components/TagListSearchBar";
import { formatDateFromAPIToYYYYMMDD } from "../../utils/formatDate";
import PostTag from "../../components/@shared/PostTag";
import Skeleton from "@mui/material/Skeleton";
import { useCustomQuery } from "../../hooks/useCustomQuery";

const TagList: React.FC = () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const queryString = getQueryString();
    const tagString = selectedTags.join(",");

    const { data: postData, isLoading } = useCustomQuery<IPost[]>(
        ["postListByTags", selectedTags],
        () =>
            fetchPostList({
                ...queryString,
                ...(tagString && { tags: tagString }),
            }),
        {
            enabled: selectedTags.length > 0,
        },
    );

    return (
        <S.MainWrapper>
            <TagListSearchBar selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            {postData?.map((item, index) => (
                <S.TagListWrapper key={index} to={`/post?_id=${item?._id}`}>
                    {isLoading ? (
                        <>
                            <Skeleton variant="rounded" style={{ height: "100%", width: "auto", aspectRatio: "1" }} />
                            <S.PostDetail>
                                <Skeleton variant="rounded" style={{ height: "29px", width: "50%" }} />
                                <Skeleton variant="rounded" style={{ height: "38px", width: "70%" }} />
                                <Skeleton variant="rounded" style={{ height: "23px", width: "30%" }} />
                                <Skeleton variant="rounded" style={{ height: "68px", width: "100%" }} />
                            </S.PostDetail>
                        </>
                    ) : (
                        <>
                            <img src={item?.thumbnailURL} />
                            <S.PostDetail>
                                <S.PostTagBox>
                                    {item?.tags?.map((item: string, index) => (
                                        <PostTag key={index} name={item} size="small" />
                                    ))}
                                </S.PostTagBox>
                                <T.Title1>{item?.title}</T.Title1>
                                <T.Subtitle2>{formatDateFromAPIToYYYYMMDD(item.createdAt)}</T.Subtitle2>
                                <T.Subtitle2 className="last-child">{item?.summaryContent}</T.Subtitle2>
                            </S.PostDetail>
                        </>
                    )}
                </S.TagListWrapper>
            ))}
        </S.MainWrapper>
    );
};

export default TagList;
