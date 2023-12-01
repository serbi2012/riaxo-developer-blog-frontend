import * as S from "./index.styles";
import { Autocomplete, Button, Chip, Skeleton, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { BASE_URL, TINY_MCE_API_KEY } from "../../constants/API";
import { EDIT_TOOLBAR, PLUGINS } from "../../constants/tinyMceOption";
import { createPost, fetchPostList, updatePost } from "../../api/post.queries";
import { useLocation, useNavigate } from "react-router-dom";
import { IPost } from "../../types/post";
import { getQueryString } from "../../utils/getQueryString";
import ProfileImgUpload from "./components/ImageUpload";
import { createImageUpload } from "../../api/resource.queries";
import { useRecoilState } from "recoil";
import { isLoadingState } from "../../recoil/atoms";
import { useSnackbar } from "notistack";
import ImageGenerateBox from "./components/ImageGenerateBox";
import { fetchTagList } from "../../api/tag.queries";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import { useCustomMutation } from "../../hooks/useCustomMutation";
import axios from "axios";

const PostCreate: React.FC = () => {
    const editorRef = useRef<any>(null);

    const [, setIsLoading] = useRecoilState<boolean>(isLoadingState);

    const [isEditorLoad, setIsEditorLoad] = useState<boolean>(false);
    const [image, setImage] = useState<string>("");
    const [pathname, setPathname] = useState<string>("");
    const [defaultPost, setDefaultPost] = useState<IPost>({});
    const [title, setTitle] = useState<string>("");
    const [tags, setTags] = useState<any[] | undefined>([]);

    const navigate = useNavigate();
    const location = useLocation();
    const { enqueueSnackbar } = useSnackbar();

    const { data: tagOptions } = useCustomQuery("tags", fetchTagList, {
        select: (data) => data.map((tag) => tag.value),
    });

    useCustomQuery(["postToEdit", getQueryString()], () => fetchPostList(getQueryString()), {
        enabled: location.pathname === "/post/edit",
        onSuccess: (data) => {
            const post = data[0] || {};

            setDefaultPost(post);
            setTitle(String(post.title));
            setTags(post.tags);
            setImage(post.thumbnailURL || "");
        },
    });

    const { mutate: createPostMutation } = useCustomMutation(createPost, {
        onSuccess: () => {
            navigate("/");
        },
    });

    const { mutate: updatePostMutation } = useCustomMutation(updatePost, {
        onSuccess: () => {
            navigate(`/post?_id=${getQueryString()?._id}`);
        },
    });

    const onSubmitHandler = async (event: any) => {
        event?.preventDefault();

        if (editorRef.current) {
            const content = editorRef.current.getContent();
            const queryString = getQueryString();

            setIsLoading(true);

            try {
                const imageType = typeof image;

                let thumbnailURL: any = "";

                if (imageType === "string") {
                    if (image?.includes("https://")) {
                        thumbnailURL = image;
                    }
                } else if (imageType === "object") {
                    thumbnailURL = await createImageUpload(image);
                }

                const body = {
                    id: queryString?._id,
                    title: title,
                    content: content,
                    tags: tags,
                    thumbnailURL: typeof thumbnailURL === "string" ? thumbnailURL : thumbnailURL?.data?.path,
                };

                switch (pathname) {
                    case "/post/create":
                        createPostMutation(body);
                        break;
                    case "/post/edit":
                        updatePostMutation(body);
                        break;

                    default:
                        break;
                }
            } catch (error: any) {
                enqueueSnackbar(error.message, { variant: "error" });
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname]);

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
                    options={tagOptions || []}
                    getOptionLabel={(option) => option}
                    renderTags={(value: readonly string[], getTagProps) =>
                        value.map((option: string, index: number) => (
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} key={index} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField {...params} label="관련 태그" placeholder="게시글과 관련된 태그를 추가해보세요!" />
                    )}
                />
            </S.Header>
            <S.ImageContent>
                <ProfileImgUpload aspectRatio={2} setImage={setImage} defaultImage={image || ""} />
                <div className="vertical-line" />
                <ImageGenerateBox setImage={setImage} />
            </S.ImageContent>
            <S.Content>
                <Editor
                    apiKey={TINY_MCE_API_KEY}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    onGetContent={() => {
                        setIsEditorLoad(true);
                    }}
                    initialValue={pathname === "/post/edit" ? defaultPost?.content : ""}
                    init={{
                        height: 500,
                        width: "100%",
                        menubar: false,
                        plugins: PLUGINS,
                        toolbar: EDIT_TOOLBAR,
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        images_upload_handler: (blobInfo) =>
                            new Promise((resolve, reject) => {
                                axios
                                    .post(
                                        `${BASE_URL}/image/upload`,
                                        { image: blobInfo.blob() },
                                        {
                                            headers: { "Content-Type": "multipart/form-data" },
                                        },
                                    )
                                    .then((res: any) => {
                                        resolve(res?.data?.data?.path);
                                    })
                                    .catch((e) => {
                                        reject(e);
                                    });
                            }),
                    }}
                />
                {!isEditorLoad && <Skeleton variant="rounded" style={{ height: "300px", width: "100%" }} />}
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
