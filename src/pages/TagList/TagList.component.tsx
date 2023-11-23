import { T } from "../../styles/TextGuide.styles";
import * as S from "./TagList.styles";
import { useEffect, useState } from "react";
import { fetchPostList } from "../../api/post.queries";
import { IPost } from "../../types/post.types";
import { getQueryString } from "../../utils/getQueryString";
import TagListSearchBar from "./components/TagListSearchBar/TagListSearchBar.component";
import { formatDateFromAPIToYYYYMMDD } from "../../utils/formatDate";
import PostTag from "../../components/@shared/PostTag/PostTag.component";
import Skeleton from "@mui/material/Skeleton";

const TagList: React.FC = () => {
    const [postData, setPostData] = useState<IPost[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    useEffect(() => {
        if (selectedTags?.length > 0) {
            (async () => {
                const queryString = getQueryString();
                const tagString = selectedTags.join(",");

                const response = await fetchPostList({
                    ...queryString,
                    ...(tagString !== "" && { tags: tagString }),
                });
                setPostData(response);
            })();
        } else {
            setPostData([]);
        }
    }, [selectedTags]);

    return (
        <S.MainWrapper>
            <TagListSearchBar setSelectedTags={setSelectedTags} />
            {postData?.map((item, index) => (
                <S.TagListWrapper key={index} to={`/post?_id=${item?._id}`}>
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
                </S.TagListWrapper>
            ))}
        </S.MainWrapper>
    );
};

export default TagList;
