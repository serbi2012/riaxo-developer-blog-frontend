import { useEffect, useRef, useState } from "react";

import { createRoot } from "react-dom/client";
import { useQueryClient } from "react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useRecoilState } from "recoil";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

import { deletePost, fetchPostList } from "../../api";
import { PostTag } from "../../components/@shared";
import { useCustomMutation, useCustomQuery } from "../../hooks";
import { isAdminModeState } from "../../recoil/atoms";
import { T } from "../../styles/TextGuide.styles";
import { IPost } from "../../types";
import { formatDateFromAPIToYYYYMMDD, getQueryString } from "../../utils";
import { PrevNextNavBox, SideNavBox } from "./components";
import * as S from "./Post.styles";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("json", json);

export const Post = () => {
    const contentRef = useRef<any>();

    const [adminMode] = useRecoilState(isAdminModeState);

    const [titleArray, setTitleArray] = useState<string[]>([]);

    const navigate = useNavigate();
    const location = useLocation();
    const queryClient = useQueryClient();

    const postQueryKey = ["post", getQueryString()];

    const { data: postData, isLoading } = useCustomQuery<IPost[]>(postQueryKey, () =>
        fetchPostList({ ...getQueryString(), nextPrevPost: true }),
    );
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
        postData;
    }, [location, postData]);

    useEffect(() => {
        if (contentRef.current) {
            const codeBlocks = contentRef.current.querySelectorAll("code");
            const titleBlocks = contentRef.current.querySelectorAll("p, span, h3");

            const titleTemptSet = new Set<string>();

            codeBlocks?.forEach((block: any) => {
                const rawCode = block.textContent;
                const language = block.className.replace("language-", "");

                if (language) {
                    const container = document.createElement("div");
                    container.style.width = "100%";
                    block.parentNode.replaceChild(container, block);

                    const root = createRoot(container);
                    root.render(
                        <SyntaxHighlighter language={language} style={vscDarkPlus} wrapLines wrapLongLines>
                            {rawCode}
                        </SyntaxHighlighter>,
                    );
                } else {
                    block.classList.add("code-block");
                }
            });

            titleBlocks?.forEach((item: any) => {
                if (String(item.innerHTML)?.includes("# ")) {
                    const spanElement: HTMLSpanElement = document.createElement("span");
                    spanElement.innerHTML = item.innerHTML;
                    const textContent: string = spanElement.textContent || spanElement.innerText;

                    const newId: string = `nav-title${textContent.trim().replace(/\s+/g, "-").replace("#", "")}`;
                    item.id = newId;

                    titleTemptSet.add(newId);
                }
            });

            const uniqueTitleArray = Array.from(titleTemptSet);
            setTitleArray(uniqueTitleArray);
        }
    }, [postData]);

    return (
        <>
            <SideNavBox titleArray={titleArray} />
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
                            <T.Subtitle2>{formatDateFromAPIToYYYYMMDD(postData?.[0]?.createdAt)}</T.Subtitle2>
                            <S.PostTagBox>
                                {postData?.[0]?.tags?.map((item: string, index) => <PostTag key={index} name={item} />)}
                            </S.PostTagBox>
                        </S.Header>
                        <S.Content ref={contentRef}>
                            <S.TextContent dangerouslySetInnerHTML={{ __html: String(postData?.[0]?.content) }} />
                        </S.Content>
                    </>
                )}

                <S.Footer>
                    {adminMode && (
                        <S.AdminControlBox>
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
                        </S.AdminControlBox>
                    )}
                    <PrevNextNavBox postData={postData} />
                </S.Footer>
            </S.MainWrapper>
        </>
    );
};
