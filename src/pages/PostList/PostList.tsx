import { useCallback, useEffect, useState } from "react";

import { debounce } from "lodash";

import Skeleton from "@mui/material/Skeleton";

import { fetchPostList } from "../../api";
import { PostTag } from "../../components/@shared";
import { useCustomQuery } from "../../hooks";
import { T } from "../../styles/TextGuide.styles";
import { formatDateFromAPIToYYYYMMDD, getQueryString } from "../../utils";
import { PostListSearchBar } from "./components";
import * as S from "./PostList.styles";

export const PostList = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [debouncedSearchInput, setDebouncedSearchInput] = useState<string>("");

    const { data: postData, isLoading } = useCustomQuery(["posts", debouncedSearchInput], () => {
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
