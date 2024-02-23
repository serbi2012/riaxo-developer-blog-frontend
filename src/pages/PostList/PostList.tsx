import { useCallback, useEffect, useState } from "react";

import { debounce } from "lodash";
import { useLocation } from "react-router-dom";

import Skeleton from "@mui/material/Skeleton";

import { fetchPostList } from "../../api";
import { PostTag } from "../../components/@shared";
import { HEADER_CONTENT } from "../../constants";
import { useCustomQuery } from "../../hooks";
import { T } from "../../styles/TextGuide.styles";
import { formatDateFromAPIToYYYYMMDD, getQueryString } from "../../utils";
import { PostListSearchBar } from "./components";
import * as S from "./PostList.styles";

export const PostList = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [debouncedSearchInput, setDebouncedSearchInput] = useState<string>("");

    const location = useLocation();

    const { data: postData, isLoading } = useCustomQuery(["posts", debouncedSearchInput, location], () => {
        const queryString = getQueryString();
        const body = debouncedSearchInput ? { ...queryString, title: debouncedSearchInput } : queryString;
        return fetchPostList(body);
    });

    const debouncedSearchHandler = useCallback(
        debounce((newSearchInput) => {
            setDebouncedSearchInput(newSearchInput);
        }, 50),
        [],
    );

    useEffect(() => {
        debouncedSearchHandler(searchInput);

        return () => {
            debouncedSearchHandler.cancel();
        };
    }, [searchInput, debouncedSearchHandler]);

    return (
        <S.MainWrapper>
            {location.search && (
                <S.Header>
                    <T.Title3>
                        {String(HEADER_CONTENT?.find((item) => location.search?.includes(item.title))?.title)
                            ?.charAt(0)
                            .toUpperCase() +
                            String(HEADER_CONTENT?.find((item) => location.search?.includes(item.title))?.title)?.slice(
                                1,
                            )}
                    </T.Title3>
                    <T.Subtitle1>
                        {HEADER_CONTENT?.find((item) => location.search?.includes(item.title))?.subtitle ||
                            HEADER_CONTENT[0].subtitle}
                    </T.Subtitle1>
                </S.Header>
            )}
            <PostListSearchBar setSearchInput={setSearchInput} />
            {postData?.map((item, index) => (
                <S.PostListWrapper key={index} to={`/post?_id=${item?._id}`}>
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
                </S.PostListWrapper>
            ))}
        </S.MainWrapper>
    );
};
