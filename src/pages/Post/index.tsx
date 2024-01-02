import { T } from "../../styles/TextGuide.styles";
import * as S from "./index.styles";
import PostTag from "../../components/@shared/PostTag";
import { useEffect, useRef, useState } from "react";
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
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactDOMServer from "react-dom/server";
import SideNavBox from "./components/SideNavBox";

const docco: any = {
    hljs: {
        display: "block",
        overflowX: "auto",
        padding: "0.5em",
        color: "#000",
        background: "#f8f8ff",
    },
    "hljs-comment": {
        color: "#408080",
        fontStyle: "italic",
    },
    "hljs-quote": {
        color: "#408080",
        fontStyle: "italic",
    },
    "hljs-keyword": {
        color: "#954121",
    },
    "hljs-selector-tag": {
        color: "#954121",
    },
    "hljs-literal": {
        color: "#954121",
    },
    "hljs-subst": {
        color: "#954121",
    },
    "hljs-number": {
        color: "#40a070",
    },
    "hljs-string": {
        color: "#219161",
    },
    "hljs-doctag": {
        color: "#219161",
    },
    "hljs-selector-id": {
        color: "#19469d",
    },
    "hljs-selector-class": {
        color: "#19469d",
    },
    "hljs-section": {
        color: "#19469d",
    },
    "hljs-type": {
        color: "#19469d",
    },
    "hljs-params": {
        color: "#00f",
    },
    "hljs-title": {
        color: "#458",
        fontWeight: "bold",
    },
    "hljs-tag": {
        color: "#000080",
        fontWeight: "normal",
    },
    "hljs-name": {
        color: "#000080",
        fontWeight: "normal",
    },
    "hljs-attribute": {
        color: "#000080",
        fontWeight: "normal",
    },
    "hljs-variable": {
        color: "#008080",
    },
    "hljs-template-variable": {
        color: "#008080",
    },
    "hljs-regexp": {
        color: "#b68",
    },
    "hljs-link": {
        color: "#b68",
    },
    "hljs-symbol": {
        color: "#990073",
    },
    "hljs-bullet": {
        color: "#990073",
    },
    "hljs-built_in": {
        color: "#0086b3",
    },
    "hljs-builtin-name": {
        color: "#0086b3",
    },
    "hljs-meta": {
        color: "#999",
        fontWeight: "bold",
    },
    "hljs-deletion": {
        background: "#fdd",
    },
    "hljs-addition": {
        background: "#dfd",
    },
    "hljs-emphasis": {
        fontStyle: "italic",
    },
    "hljs-strong": {
        fontWeight: "bold",
    },
};

const Post: React.FC = () => {
    const contentRef = useRef<any>();

    const [adminMode] = useRecoilState(isAdminModeState);

    const [titleArray, setTitleArray] = useState<string[]>([]);

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

    useEffect(() => {
        if (contentRef.current) {
            const codeBlocks = contentRef.current.querySelectorAll("code");
            const titleBlocks = contentRef.current.querySelectorAll("p, span, h3");

            const titleTemptSet = new Set<string>();

            codeBlocks?.forEach((block: any) => {
                const rawCode = block.textContent;
                const language = block.className.replace("language-", "");

                if (language) {
                    const highlightedCode = (
                        <SyntaxHighlighter language={language} style={docco}>
                            {rawCode}
                        </SyntaxHighlighter>
                    );

                    const renderedCode = ReactDOMServer.renderToString(highlightedCode);

                    if (block?.parentNode?.innerHTML) {
                        block.parentNode.innerHTML = renderedCode;
                    }
                } else {
                    block.classList.add("code-block");
                }
            });

            titleBlocks?.forEach((item: any) => {
                if (String(item.innerHTML)?.includes("# ")) {
                    const spanElement = document.createElement("span");
                    spanElement.innerHTML = item.innerHTML;
                    const textContent = spanElement.textContent || spanElement.innerText;

                    const newId = `nav-title${textContent.trim().replace(/\s+/g, "-").replace("#", "")}`;
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
                            <T.Subtitle2>{formatDateFromAPIToYYYYMMDD(postData?.[0].createdAt)}</T.Subtitle2>
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
        </>
    );
};

export default Post;
