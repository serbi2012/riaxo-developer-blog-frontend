import * as S from "./PostCreate.styles";
import { Autocomplete, Button, IconButton, InputBase, Paper, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { TINY_MCE_API_KEY } from "../../constants/API";
import { EDIT_TOOLBAR, PLUGINS } from "../../constants/tinyMceOption";
import { createPost, fetchPostList, updatePost } from "../../api/post.queries";
import { useLocation, useNavigate } from "react-router-dom";
import { IPost } from "../../types/post.types";
import { getQueryString } from "../../utils/getQueryString";
import ProfileImgUpload from "./components/ImageUpload/ImageUpload.component";
import { createAiImage, createImageUpload } from "../../api/resource.queries";
import { useRecoilState } from "recoil";
import { isLoadingState } from "../../recoil/atoms";
import { useSnackbar } from "notistack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { T } from "../../styles/TextGuide.styles";

const TAG_ITEMS = [
    { label: "Dev", value: "Dev" },
    { label: "React", value: "React" },
    { label: "NodeJS", value: "NodeJS" },
];

const PostCreate: React.FC = () => {
    const editorRef = useRef<any>(null);

    const [, setIsLoading] = useRecoilState<boolean>(isLoadingState);

    const [image, setImage] = useState<string>("");
    const [aiImages, setAiImages] = useState<any[]>([]);
    const [aiImageInput, setAiImageInput] = useState<string>("");
    const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
    const [pathname, setPathname] = useState<string>("");
    const [defaultPost, setDefaultPost] = useState<IPost>({});
    const [title, setTitle] = useState<string>("");
    const [tags, setTags] = useState<any[]>([]);

    const navigate = useNavigate();
    const location = useLocation();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setPathname(location?.pathname);

        if (location?.pathname === "/post/edit") {
            (async () => {
                const queryString = getQueryString();

                const response = await fetchPostList(queryString);
                const parsedTags: any = response[0]?.tags?.map((item) => ({ label: item, value: item }));
                setDefaultPost(response[0]);
                setTitle(String(response[0]?.title));
                setTags(parsedTags);
                setImage(response[0]?.thumbnailURL ? String(response[0]?.thumbnailURL) : "");
            })();
        }
    }, [location]);

    const onSubmitHandler = async (event: any) => {
        event?.preventDefault();

        if (editorRef.current) {
            const content = editorRef.current.getContent();
            const parsedTags = tags?.map((item) => item?.value);
            const queryString = getQueryString();

            try {
                setIsLoading(true);

                let thumbnailURL: any = "";

                if (image.includes("https://oaidalleapiprodscus.blob.core.windows.net/")) {
                    thumbnailURL = image;
                } else if (
                    image &&
                    image !== "deleted" &&
                    defaultPost?.thumbnailURL !== String(image) &&
                    !image.includes("https://oaidalleapiprodscus.blob.core.windows.net/")
                ) {
                    thumbnailURL = await createImageUpload(image);
                }

                const body = {
                    id: queryString?._id,
                    title: title,
                    content: content,
                    tags: parsedTags,
                    thumbnailURL: typeof thumbnailURL === "string" ? thumbnailURL : thumbnailURL?.data?.path,
                };

                switch (pathname) {
                    case "/post/create":
                        await createPost(body);
                        navigate("/");
                        break;
                    case "/post/edit":
                        await updatePost(body);
                        navigate(`/post?_id=${queryString?._id}`);

                        break;

                    default:
                        break;
                }
            } catch (error: any) {
                enqueueSnackbar(error.message, { variant: "error", persist: true });
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <S.MainWrapper onSubmit={onSubmitHandler}>
            <S.Header>
                <S.TitleInput
                    placeholder="제목을 입력해주세요!"
                    value={title}
                    defaultValue={pathname === "/post/edit" ? defaultPost?.title : ""}
                    onChange={(event: any) => {
                        setTitle(event?.target?.value);
                    }}
                />
                <Autocomplete
                    multiple
                    filterSelectedOptions
                    freeSolo
                    value={tags}
                    onChange={(event: any, newValue: any) => {
                        setTags(newValue);
                    }}
                    sx={{ width: "100%" }}
                    options={TAG_ITEMS}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                        <TextField {...params} label="관련 태그" placeholder="게시글과 관련된 태그를 추가해보세요!" />
                    )}
                />
            </S.Header>
            <S.ImageContent>
                <ProfileImgUpload aspectRatio={2} setImage={setImage} defaultImage={image || ""} />
                <div className="vertical-line" />
                <S.ImageGenerateBox>
                    <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="검색어를 입력해주세요."
                            value={aiImageInput}
                            onChange={(event) => {
                                setAiImageInput(event?.target.value);
                            }}
                        />
                        <IconButton
                            type="button"
                            sx={{ p: "10px" }}
                            aria-label="search"
                            disabled={isAiLoading}
                            onClick={() => {
                                (async () => {
                                    try {
                                        setIsAiLoading(true);

                                        const response = await createAiImage({
                                            content: aiImageInput,
                                        });

                                        setAiImages([...aiImages, ...(response?.imageUrl || [])]);
                                    } catch (error: any) {
                                        enqueueSnackbar(error.message, { variant: "error", persist: true });
                                        console.error(error);
                                    } finally {
                                        setIsAiLoading(false);
                                    }
                                })();
                            }}
                        >
                            <AddBoxIcon />
                        </IconButton>
                    </Paper>
                    <S.GeneratedImageBox>
                        {aiImages?.length <= 0 && (
                            <T.Title1
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100px",
                                    width: "100%",
                                }}
                            >
                                생성된 이미지가 없습니다.
                            </T.Title1>
                        )}
                        {aiImages?.map((item, index) => (
                            <S.AiImage
                                key={index}
                                src={item?.url || ""}
                                onClick={() => {
                                    setImage(item?.url || "");
                                }}
                            />
                        ))}
                    </S.GeneratedImageBox>
                </S.ImageGenerateBox>
            </S.ImageContent>
            <S.Content>
                <Editor
                    apiKey={TINY_MCE_API_KEY}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={pathname === "/post/edit" ? defaultPost?.content : ""}
                    init={{
                        height: 500,
                        width: "100%",
                        menubar: false,
                        plugins: PLUGINS,
                        toolbar: EDIT_TOOLBAR,
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                />
            </S.Content>
            <S.Footer>
                <Button
                    variant="outlined"
                    size="large"
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    취소
                </Button>
                <Button variant="contained" size="large" type="submit">
                    {pathname === "/post/create" ? "게시" : "수정"}하기
                </Button>
            </S.Footer>
        </S.MainWrapper>
    );
};

export default PostCreate;
